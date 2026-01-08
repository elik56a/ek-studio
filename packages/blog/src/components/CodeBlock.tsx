'use client';

import { useState } from 'react';

export function CodeBlock({ children, className, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    // Extract text content from the code block
    let textContent = '';
    
    if (typeof children === 'string') {
      textContent = children;
    } else if (children && typeof children === 'object') {
      // Handle React elements - extract text from code element
      const extractText = (node: any): string => {
        if (typeof node === 'string') return node;
        if (Array.isArray(node)) return node.map(extractText).join('');
        if (node?.props?.children) return extractText(node.props.children);
        return '';
      };
      textContent = extractText(children);
    }
    
    try {
      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative group not-prose my-6" style={{ position: 'relative' }}>
      <button
        onClick={handleCopy}
        className="rounded-md bg-gray-700/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-gray-600 shadow-lg border border-gray-600"
        style={{ position: 'absolute', right: '12px', top: '12px', zIndex: 10 }}
        aria-label="Copy code"
      >
        {copied ? (
          <span className="flex items-center gap-1.5 text-white">
            <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Copied!
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-white">
            <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy
          </span>
        )}
      </button>
      <pre {...props} className={`${className || ''} overflow-x-auto`}>
        {children}
      </pre>
    </div>
  );
}
