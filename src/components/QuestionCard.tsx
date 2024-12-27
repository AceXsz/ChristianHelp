import React from 'react';
import { Question } from '../data/questions';

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <span className="inline-block px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded mb-3">
        {question.category}
      </span>
      <h3 className="text-xl font-semibold mb-3">{question.question}</h3>
      <p className="text-gray-600 mb-4">{question.answer}</p>
      <div className="border-t pt-4">
        <h4 className="text-sm font-semibold text-gray-500 mb-2">Bible References:</h4>
        <ul className="list-disc list-inside text-blue-600">
          {question.bibleReferences.map((reference) => (
            <li key={reference}>{reference}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}