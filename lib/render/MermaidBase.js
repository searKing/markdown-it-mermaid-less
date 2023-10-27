"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MermaidBase = void 0;
const lodash_1 = require("lodash");
const MarkdownIt = require("markdown-it");
const MarkdownItContainer = require("markdown-it-container");
class MermaidBase {
    constructor(options) {
        this.getRenderer = () => this.renderer;
        const defaultOptions = {
            debug: false,
            renderer: MarkdownIt(),
        };
        options = options || {};
        (0, lodash_1.defaults)(options, defaultOptions);
        this.renderer = options.renderer || MarkdownIt();
        return this;
    }
    loadModules(render) {
        this.container_what(render, "mermaid");
    }
    handleMermaid(mermaidContent) {
        return mermaidContent;
    }
    container_what(md, tag) {
        const re = new RegExp("^" + tag + "(.*)$", "i");
        return md.use(MarkdownItContainer, tag, {
            marker: "`",
            render: (tokens, idx, options, env) => {
                if (tokens[idx].nesting === 1) {
                    const mermaidContent = this.getContentFromTokens(tokens, idx);
                    const mermaidHtml = this.handleMermaid(mermaidContent);
                    return `${mermaidHtml}` + "<!--";
                }
                else {
                    return "-->";
                }
            },
            validate: (params) => {
                return !!params.trim().match(re);
            },
        });
    }
    getContentFromTokens(tokens, startIdx) {
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
exports.MermaidBase = MermaidBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVybWFpZEJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVuZGVyL01lcm1haWRCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBQ2IsbUNBQWtDO0FBQ2xDLDBDQUEwQztBQUMxQyw2REFBNkQ7QUFPN0QsTUFBYSxXQUFXO0lBR3ZCLFlBQW1CLE9BQTZCO1FBWXpDLGdCQUFXLEdBQUcsR0FBZSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQVhwRCxNQUFNLGNBQWMsR0FBd0I7WUFDM0MsS0FBSyxFQUFFLEtBQUs7WUFDWixRQUFRLEVBQUUsVUFBVSxFQUFFO1NBQ3RCLENBQUM7UUFDRixPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFBLGlCQUFRLEVBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNqRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFJTSxXQUFXLENBQUMsTUFBa0I7UUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLGFBQWEsQ0FBQyxjQUFzQjtRQUMxQyxPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDO0lBSU8sY0FBYyxDQUFDLEVBQWMsRUFBRSxHQUFXO1FBRWpELE1BQU0sRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBR2hELE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7WUFDdkMsTUFBTSxFQUFFLEdBQUc7WUFDWCxNQUFNLEVBQUUsQ0FDUCxNQUEwQixFQUMxQixHQUFXLEVBQ1gsT0FBMkIsRUFDM0IsR0FBUSxFQUNQLEVBQUU7Z0JBSUgsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsRUFBRTtvQkFDOUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFHOUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFFdkQsT0FBTyxHQUFHLFdBQVcsRUFBRSxHQUFHLE1BQU0sQ0FBQztpQkFDakM7cUJBQU07b0JBRU4sT0FBTyxLQUFLLENBQUM7aUJBQ2I7WUFDRixDQUFDO1lBQ0QsUUFBUSxFQUFFLENBQUMsTUFBYyxFQUFXLEVBQUU7Z0JBQ3JDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbEMsQ0FBQztTQUNELENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxNQUEwQixFQUFFLFFBQWdCO1FBQ3hFLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUV4QixLQUFLLElBQUksS0FBSyxHQUFHLFFBQVEsRUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMxRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDNUIsY0FBYyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQy9CLE1BQU07YUFDTjtTQUNEO1FBRUQsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQztDQUNEO0FBMUVELGtDQTBFQyJ9