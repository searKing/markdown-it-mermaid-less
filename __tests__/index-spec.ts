import index = require('../src/index');

import * as path from 'path';

test('Should have mermaid2html available', () => {
  expect(index.mermaid2html).toBeTruthy();
});
const taskList: string = `
\`\`\`mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
\`\`\`
`;
const expectTaskList = {
  body: `<hr>
    <div class="mermaid">
        graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
    </div><!--<p>graph TD;
A--&gt;B;
A--&gt;C;
B--&gt;D;
C--&gt;D;</p>
-->`,
  head: `<script src="node_modules/mermaid/dist/mermaid.min.js">
    <script type="text/javascript">
        mermaid.initialize({startOnLoad: true, theme: 'forest'});
    </script>`,
};

((md: string) => {
  const defaultRootWebPath = path.relative(path.join(__dirname, '..'), path.join(__dirname, ".."));

  // console.log('defaultRootWebPath= ', defaultRootWebPath);
  const options = {
    rootWebPath: defaultRootWebPath,
  };

  const html = index.mermaid2html(md, options);
  test('Should mermaid2html head success', () => {
    // console.log("head = ", html.head)
    // console.log("head = ", expectTaskList.head)

    expect(html.head === expectTaskList.head).toBeTruthy();
  });
  test('Should mermaid2html body success', () => {
    // console.log("body = ", html.body)
    // console.log("body = ", expectTaskList.body)
    expect(html.body === expectTaskList.body).toBeTruthy();
  });
  return;
})(taskList);
