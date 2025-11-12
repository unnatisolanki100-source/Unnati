
import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 self-start">
      <div className="bg-gray-800 text-white rounded-r-2xl rounded-tl-2xl px-4 py-3">
        <div className="flex items-center justify-center space-x-1">
          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
        </div>
      </div>
    </div>
  );
};
