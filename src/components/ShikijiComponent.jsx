import { useEffect, useRef } from "react";
import { getHighlighter } from "shikiji";

const ShikijiComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const renderCodeBlock = async () => {
      const shiki = await getHighlighter({
        theme: "nord",
        langs: ["javascript"],
      });

      await shiki.loadTheme("nord");

      if (containerRef.current) {
        const code =
          "// using Shikiji \nconst a = 1;\nconst isOpen = true;\nfunction printA() {\n  console.log('10a', a * 10);\n}\nprintA();\n";

        const html = shiki.codeToHtml(code, { lang: "javascript", theme: "nord" });
        containerRef.current.innerHTML = html;
      }
    };

    renderCodeBlock();
  }, []);

  return <div ref={containerRef}></div>;
};

export default ShikijiComponent;
