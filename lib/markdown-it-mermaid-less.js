"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mermaid2html = exports.mermaid_pro_plugin = void 0;
const MermaidRenderHTML_1 = require("./render/MermaidRenderHTML");
function mermaid_pro_plugin(md, options) {
    const ro = {
        debug: options.debug,
        renderer: md,
        rootWebPath: options.rootWebPath,
    };
    const mr = new MermaidRenderHTML_1.MermaidRenderHTML(ro);
    mr.registerThisPlugin();
    options.returnHead = mr.getRenderHead(true);
    return;
}
exports.mermaid_pro_plugin = mermaid_pro_plugin;
function mermaid2html(markdownContent, options) {
    const ro = {
        debug: options.debug,
        rootWebPath: options.rootWebPath,
    };
    const mr = new MermaidRenderHTML_1.MermaidRenderHTML(ro);
    const html = mr.getRenderHTML(markdownContent);
    if (!!options && options.debug) {
        html.body = debugHeader() + "\n" + html.body;
    }
    return html;
}
exports.mermaid2html = mermaid2html;
function debugHeader() {
    const info = require("../package.json") || {};
    return ("<!--" +
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
        "  -->");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24taXQtbWVybWFpZC1sZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21hcmtkb3duLWl0LW1lcm1haWQtbGVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUNiLGtFQUdvQztBQW1CcEMsU0FBZ0Isa0JBQWtCLENBQ2pDLEVBQU8sRUFDUCxPQUFrQztJQUVsQyxNQUFNLEVBQUUsR0FBOEI7UUFDckMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO0tBQ2hDLENBQUM7SUFDRixNQUFNLEVBQUUsR0FBRyxJQUFJLHFDQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3hCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxPQUFPO0FBQ1IsQ0FBQztBQWJELGdEQWFDO0FBRUQsU0FBZ0IsWUFBWSxDQUMzQixlQUF1QixFQUN2QixPQUE2QjtJQUU3QixNQUFNLEVBQUUsR0FBOEI7UUFDckMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztLQUNoQyxDQUFDO0lBRUYsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRS9DLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDN0M7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNiLENBQUM7QUFoQkQsb0NBZ0JDO0FBRUQsU0FBUyxXQUFXO0lBQ25CLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QyxPQUFPLENBQ04sTUFBTTtRQUNOLGtFQUFrRTtRQUNsRSxJQUFJLENBQUMsT0FBTztRQUNaLEdBQUc7UUFDSCx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLElBQUk7UUFDVCxHQUFHO1FBQ0gsZ0ZBQWdGO1FBQ2hGLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsVUFBVTtRQUNmLEdBQUc7UUFDSCxPQUFPLENBQ1AsQ0FBQztBQUNILENBQUMifQ==