"use strict";
import { defaults } from "lodash";
import * as MarkdownIt from "markdown-it";
import * as MarkdownItContainer from "markdown-it-container";

export interface IMermaidBaseOptions {
	debug?: boolean;
	renderer?: MarkdownIt;
}

export class MermaidBase {
	private readonly renderer: MarkdownIt;

	public constructor(options?: IMermaidBaseOptions) {
		const defaultOptions: IMermaidBaseOptions = {
			debug: false,
			renderer: MarkdownIt(),
		};
		options = options || {};
		defaults(options, defaultOptions);

		this.renderer = options.renderer || MarkdownIt();
		return this;
	}

	public getRenderer = (): MarkdownIt => this.renderer;

	public loadModules(render: MarkdownIt): void {
		this.container_what(render, "mermaid");
	}

	public handleMermaid(mermaidContent: string): string {
		return mermaidContent;
	}

	// ```tag
	// ```
	private container_what(md: MarkdownIt, tag: string): any {
		// ^${tag}\s+(.*)$
		const re = new RegExp("^" + tag + "(.*)$", "i");

		// const re = new RegExp("^" + tag + "\\s+(.*)$");
		return md.use(MarkdownItContainer, tag, {
			marker: "`",
			render: (
				tokens: MarkdownIt.Token[],
				idx: number,
				options: MarkdownIt.Options,
				env: any,
			) => {
				// console.log('tokens[' + idx + '] = ' + tokens[idx].info);
				// console.log('tokens = ' + JSON.stringify(tokens) );
				// const m = tokens[idx].info.trim().match(re);
				if (tokens[idx].nesting === 1) {
					const mermaidContent = this.getContentFromTokens(tokens, idx);
					// console.log('mermaidContent = ', mermaidContent);

					const mermaidHtml = this.handleMermaid(mermaidContent);
					// opening tag
					return `${mermaidHtml}` + "<!--";
				} else {
					// closing tag
					return "-->";
				}
			},
			validate: (params: string): boolean => {
				return !!params.trim().match(re);
			},
		});
	}

	private getContentFromTokens(tokens: MarkdownIt.Token[], startIdx: number) {
		let mermaidContent = "";

		for (let index = startIdx; index < tokens.length; index++) {
			const token = tokens[index];
			if (token.type === "inline") {
				mermaidContent = token.content;
				break;
			}
		}

		return mermaidContent;
	}
}
