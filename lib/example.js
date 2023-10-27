"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const markdown_it_mermaid_less_1 = require("./markdown-it-mermaid-less");
const taskList = `
\`\`\`mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
\`\`\`
`;
const mixed = `
#### GFM task list
- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2

\`\`\`mermaid
graph LR;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
`;
((md) => {
    const defaultRootWebPath = path.join(__dirname, "..");
    const options = {
        rootWebPath: defaultRootWebPath,
    };
    const html = (0, markdown_it_mermaid_less_1.mermaid2html)(md, options);
    console.log("html = ", html);
    return;
})(taskList);
((md) => {
    const defaultRootWebPath = path.join(__dirname, "..");
    const options = {
        rootWebPath: defaultRootWebPath,
    };
    const html = (0, markdown_it_mermaid_less_1.mermaid2html)(md, options);
    console.log("html = ", html);
    return;
})(mixed);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTZCO0FBRTdCLHlFQUlvQztBQUVwQyxNQUFNLFFBQVEsR0FBVzs7Ozs7Ozs7Q0FReEIsQ0FBQztBQUNGLE1BQU0sS0FBSyxHQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbUJyQixDQUFDO0FBRUYsQ0FBQyxDQUFDLEVBQVUsRUFBRSxFQUFFO0lBQ2YsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV0RCxNQUFNLE9BQU8sR0FBeUI7UUFDckMsV0FBVyxFQUFFLGtCQUFrQjtLQUMvQixDQUFDO0lBRUYsTUFBTSxJQUFJLEdBQXdCLElBQUEsdUNBQVksRUFBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0IsT0FBTztBQUNSLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2IsQ0FBQyxDQUFDLEVBQVUsRUFBRSxFQUFFO0lBQ2YsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV0RCxNQUFNLE9BQU8sR0FBeUI7UUFDckMsV0FBVyxFQUFFLGtCQUFrQjtLQUMvQixDQUFDO0lBRUYsTUFBTSxJQUFJLEdBQXdCLElBQUEsdUNBQVksRUFBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0IsT0FBTztBQUNSLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDIn0=