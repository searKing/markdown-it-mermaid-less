import * as MarkdownIt from "markdown-it";
export interface IMermaidBaseOptions {
    debug?: boolean;
    renderer?: MarkdownIt;
}
export declare class MermaidBase {
    private readonly renderer;
    constructor(options?: IMermaidBaseOptions);
    getRenderer: () => MarkdownIt;
    loadModules(render: MarkdownIt): void;
    handleMermaid(mermaidContent: string): string;
    private container_what;
    private getContentFromTokens;
}
