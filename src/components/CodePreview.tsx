import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { TemplateFile } from '../types';

interface CodePreviewProps {
  file: TemplateFile;
}

export function CodePreview({ file }: CodePreviewProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{file.name}</h3>
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <SyntaxHighlighter
          language={file.language}
          style={docco}
          customStyle={{ margin: 0, padding: '1rem' }}
        >
          {file.content}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}