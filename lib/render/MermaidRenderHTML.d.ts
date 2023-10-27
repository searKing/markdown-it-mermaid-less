import { IMermaidBaseOptions, MermaidBase } from "./MermaidBase";
export interface IMermaidRenderHTMLOptions extends IMermaidBaseOptions {
    rootWebPath?: string;
}
export interface IMermaidRenderHTML {
    body?: string;
    head?: string;
}
export declare class MermaidRenderHTML extends MermaidBase {
    private head;
    private readonly rootWebPath;
    constructor(options?: IMermaidRenderHTMLOptions);
    getRenderHead(forceMode: boolean): string;
    getRenderHTML(mdContent: string): IMermaidRenderHTML;
    handleMermaid(mermaidContent: string): string;
    registerThisPlugin(): void;
    private generateHeader;
}
