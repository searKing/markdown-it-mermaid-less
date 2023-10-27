"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MermaidRenderHTML = void 0;
const lodash_1 = require("lodash");
const path = require("path");
const MermaidBase_1 = require("./MermaidBase");
class MermaidRenderHTML extends MermaidBase_1.MermaidBase {
    constructor(options) {
        const defaultOptions = {
            rootWebPath: path.join(__dirname, "..", "..", "..", ".."),
        };
        options = options || {};
        (0, lodash_1.defaults)(options, defaultOptions);
        super(options);
        this.rootWebPath = options.rootWebPath || "";
        this.head = "";
        return this;
    }
    getRenderHead(forceMode) {
        let head = this.head;
        if (forceMode && !head) {
            head = this.generateHeader();
        }
        return head;
    }
    getRenderHTML(mdContent) {
        this.registerThisPlugin();
        const bodyStr = this.getRenderer().render(mdContent);
        const headStr = this.getRenderHead(false);
        return {
            body: bodyStr,
            head: headStr,
        };
    }
    handleMermaid(mermaidContent) {
        if (!this.head) {
            this.head = this.generateHeader();
        }
        return `<hr>
<div class="mermaid">
    ${mermaidContent}
</div>`;
    }
    registerThisPlugin() {
        this.loadModules(this.getRenderer());
    }
    generateHeader() {
        const sourcePath = path.join(this.rootWebPath, "node_modules/mermaid/dist/mermaid.min.js");
        return `<script src="${sourcePath}"></script>
<script type="text/javascript">
    mermaid.initialize({startOnLoad: true, theme: "forest"});
</script>`;
    }
}
exports.MermaidRenderHTML = MermaidRenderHTML;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVybWFpZFJlbmRlckhUTUwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVuZGVyL01lcm1haWRSZW5kZXJIVE1MLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBQ2IsbUNBQWtDO0FBQ2xDLDZCQUE2QjtBQUM3QiwrQ0FBaUU7QUFXakUsTUFBYSxpQkFBa0IsU0FBUSx5QkFBVztJQUlqRCxZQUFtQixPQUFtQztRQUNyRCxNQUFNLGNBQWMsR0FBOEI7WUFDakQsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztTQUN6RCxDQUFDO1FBQ0YsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBQSxpQkFBUSxFQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUVsQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU0sYUFBYSxDQUFDLFNBQWtCO1FBQ3RDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLGFBQWEsQ0FBQyxTQUFpQjtRQUNyQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQixNQUFNLE9BQU8sR0FBVyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdELE1BQU0sT0FBTyxHQUFXLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsT0FBTztZQUNOLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLE9BQU87U0FDYixDQUFDO0lBQ0gsQ0FBQztJQUdNLGFBQWEsQ0FBQyxjQUFzQjtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsT0FBTzs7TUFFSCxjQUFjO09BQ2IsQ0FBQztJQUNQLENBQUM7SUFFTSxrQkFBa0I7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU8sY0FBYztRQUNyQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUMzQixJQUFJLENBQUMsV0FBVyxFQUNoQiwwQ0FBMEMsQ0FDMUMsQ0FBQztRQUNGLE9BQU8sZ0JBQWdCLFVBQVU7OztVQUd6QixDQUFDO0lBQ1YsQ0FBQztDQUNEO0FBN0RELDhDQTZEQyJ9