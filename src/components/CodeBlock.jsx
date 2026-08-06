import { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';

/**
 * Syntax-highlighted code block component with interactive copy button
 * @param {object} props - Component properties
 * @param {string} [props.language='html'] - Code language
 * @param {string} props.children - Code snippet content
 * @returns {JSX.Element} The rendered CodeBlock component
 */
export default function CodeBlock({ language = 'html', children }) {
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [children]);

  const handleCopy = () => {
    if (children) {
      navigator.clipboard.writeText(children.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative group my-4">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-xs cursor-pointer transition-all hover-lift z-10 rounded-md px-3 py-1 font-semibold border flex items-center gap-1 shadow-sm"
        style={{
          backgroundColor: 'rgba(30, 41, 59, 0.85)',
          color: '#ffffff',
          borderColor: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(4px)'
        }}
        title="Copy code snippet"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <pre className="rounded-xl border shadow-sm p-4 overflow-x-auto">
        <code ref={codeRef} className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </div>
  );
}
