"use strict";
import {
	IMermaidRenderHTMLOptions,
	MermaidRenderHTML,
} from "./render/MermaidRenderHTML";

export interface IMermaid2htmlOptions {
	debug?: boolean;
	renderer?: any;
	rootWebPath?: string;
}

export interface IMermaid2htmlReturn {
	body?: string;
	head?: string;
}

export interface IMermaidLessPluginOptions {
	debug?: boolean;
	returnHead?: string;
	rootWebPath?: string;
}

export function mermaid_pro_plugin(
	md: any,
	options: IMermaidLessPluginOptions,
): void {
	const ro: IMermaidRenderHTMLOptions = {
		debug: options.debug,
		renderer: md,
		rootWebPath: options.rootWebPath,
	};
	const mr = new MermaidRenderHTML(ro);
	mr.registerThisPlugin();
	options.returnHead = mr.getRenderHead(true);
	return;
}

export function mermaid2html(
	markdownContent: string,
	options: IMermaid2htmlOptions,
): IMermaid2htmlReturn {
	const ro: IMermaidLessPluginOptions = {
		debug: options.debug,
		rootWebPath: options.rootWebPath,
	};

	const mr = new MermaidRenderHTML(ro);
	const html = mr.getRenderHTML(markdownContent);

	if (!!options && options.debug) {
		html.body = debugHeader() + "\n" + html.body;
	}
	return html;
}

function debugHeader() {
	const info = require("../package.json") || {};
	return (
		"<!--" +
		" this HTML was generated using markdown-it-mermaid-less version " +
		info.version +
		"." +
		" see an issue? file at " +
		info.bugs +
		"." +
		" please include the version in your issue. thanks for using markdown2html-pro!" +
		" to learn more, visit " +
		info.repository +
		"." +
		"  -->"
	);
}
