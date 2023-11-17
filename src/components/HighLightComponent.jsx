import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/nord.min.css";

hljs.registerLanguage("javascript", javascript);
// import { highlightWithLineNumbers } from "../plugins/highlight.ln.min.js"; doesn't work

const Highlighter = ({ code, language }) => {
  const highlightedCode = hljs.highlight(code, { language: language }).value;
  //   const highlightedWithLn = highlightWithLineNumbers(highlightedCode);

  return (
    <pre style={{ backgroundColor: "#2e3440" }}>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }}></code>
    </pre>
  );
};

const HighLightComponent = () => {
  const code =
    "// using highlight.js \nconst a = 1;\nconst isOpen = true;\nfunction printA() {\n  console.log('10a', a * 10);\n}\nprintA();\n";

  return (
    <div>
      <Highlighter code={code} language={"javascript"} />
    </div>
  );
};

export default HighLightComponent;
