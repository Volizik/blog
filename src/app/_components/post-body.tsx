import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]}>
          <Markdown
              components={{
                  code({ className, ...props }) {
                      const hasLang = /language-(\w+)/.exec(className || "");
                      return hasLang ? (
                          <SyntaxHighlighter
                              language={hasLang[1]}
                              showLineNumbers={true}
                              useInlineStyles={true}
                          >
                              {String(props.children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                      ) : (
                          <code className={className} {...props} />
                      );
                  },
              }}
          >
              {content}
          </Markdown>
      </div>
    </div>
  );
}
