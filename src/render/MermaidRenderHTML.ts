"use strict";
import { defaults } from "lodash";
import * as path from "path";
import { IMermaidBaseOptions, MermaidBase } from "./MermaidBase";

export interface IMermaidRenderHTMLOptions extends IMermaidBaseOptions {
	rootWebPath?: string;
}

export interface IMermaidRenderHTML {
	body?: string;
	head?: string;
}

export class MermaidRenderHTML extends MermaidBase {
	private head: string;
	private readonly rootWebPath: string;

	public constructor(options?: IMermaidRenderHTMLOptions) {
		const defaultOptions: IMermaidRenderHTMLOptions = {
			rootWebPath: path.join(__dirname, "..", "..", "..", ".."),
		};
		options = options || {};
		defaults(options, defaultOptions);

		super(options);
		this.rootWebPath = options.rootWebPath || "";
		this.head = "";
		return this;
	}

	public getRenderHead(forceMode: boolean): string {
		let head = this.head;
		if (forceMode && !head) {
			head = this.generateHeader();
		}
		return head;
	}

	public getRenderHTML(mdContent: string): IMermaidRenderHTML {
		this.registerThisPlugin();

		const bodyStr: string = this.getRenderer().render(mdContent);
		const headStr: string = this.getRenderHead(false);
		return {
			body: bodyStr,
			head: headStr,
		};
	}

	// process every mermaid paragraph, adn store every promise
	public handleMermaid(mermaidContent: string): string {
		if (!this.head) {
			this.head = this.generateHeader();
		}
		return `<hr>
<div class="mermaid">
    ${mermaidContent}
</div>`;
	}

	public registerThisPlugin() {
		this.loadModules(this.getRenderer());
	}

	private generateHeader() {
		const sourcePath = path.join(
			this.rootWebPath,
			"node_modules/mermaid/dist/mermaid.min.js",
		);
		return `<script src="${sourcePath}"></script>
<script type="text/javascript">
    mermaid.initialize({startOnLoad: true, theme: "forest"});
</script>`;
	}
}
