// export {
//   IMarkdownItMermaidPro,
//   MarkdowItMermaidPro,
// } from './markdown-it-mermaid';
// export {
//   IMermaid2htmlProOptions,
//   mermaid2html,
// } from './markdown-it-mermaid-less';
// export {
//   mermaid_pro_plugin_init_everytime,
// } from './markdown-it-mermaid-less';
import {
  IMermaidLessPluginOptions,
  mermaid2html,
  mermaid_pro_plugin,
} from './markdown-it-mermaid-less';
interface IStatefulFunction {
  (md: any, options: IMermaidLessPluginOptions): any;
  mermaid2html: any;
  mermaid_pro_plugin_init_everytime: any;
}

const pluginFunc: IStatefulFunction = ((
  md: any,
  options: IMermaidLessPluginOptions
) => {
  mermaid_pro_plugin(md, options);
}) as IStatefulFunction;

pluginFunc.mermaid2html = mermaid2html;

export = pluginFunc as any;
