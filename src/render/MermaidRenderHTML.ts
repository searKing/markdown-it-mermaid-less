'use strict';
import { defaults } from 'lodash';
import * as path from 'path';
import { IMermaidBaseOptions, MermaidBase } from './MermaidBase';

export interface IMermaidRenderHTMLOptions {
  debug?: boolean;
  renderer?: any;
  rootWebPath?: string;
}
export interface IMermaidRenderHTML {
  body?: string;
  head?: string;
}
export class MermaidRenderHTML extends MermaidBase {
  private head: string;
  private rootWebPath: string;
  public constructor(options?: IMermaidRenderHTMLOptions) {
    const defaultOptions: IMermaidRenderHTMLOptions = {
      debug: false,
      renderer: require('markdown-it')(),
      rootWebPath: path.join(__dirname, '..', '..', '..', '..'),
    };
    options = options || {};
    defaults(options, defaultOptions);

    super({
      debug: options.debug,
      renderer: options.renderer,
    });
    this.rootWebPath = options.rootWebPath || '';
    this.head = '';
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
    const body = `<hr>
    <div class="mermaid">
        ${mermaidContent}
    </div>`;
    return body;
  }

  public registerThisPlugin() {
    const renderer = this.getRenderer();
    this.loadModules(renderer);
  }

  private generateHeader() {
    const sourcePath = path.join(
      this.rootWebPath,
      'node_modules/mermaid/dist/mermaid.min.js'
    );
    const head = `<script src="${sourcePath}">
    <script type="text/javascript">
        mermaid.initialize({startOnLoad: true, theme: 'forest'});
    </script>`;
    return head;
  }
}
