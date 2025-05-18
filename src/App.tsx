import { useState } from 'react';
import { marked } from 'marked';


const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine === '\`\`\`' && lastLine === '\`\`\`') {  
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


const App = () => {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <div className="container">
      <h1 id="top-heading">Markdown Previewer</h1>
      <div className="flex-container">
        {/* Editor */}
        <div className="w-1/2">
          <div className="editor">Editor</div>
          <textarea
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
            className="textarea"
            id="editor"
          />
        </div>

        {/* Preview */}
        <div>
          <div className="previewer">Previewer</div>
          <div
            id="preview"
            className="preview-container"
            dangerouslySetInnerHTML={{
              __html: marked(markdownText, { breaks: true }),
              // { breaks: true } Converts line breaks (\n) in paragraphs into <br> tags (like in a text editor).
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
