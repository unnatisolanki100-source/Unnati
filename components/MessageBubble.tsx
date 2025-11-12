import React from 'react';
import { Message, Sender } from '../types';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === Sender.User;
  const bubbleClasses = isUser
    ? 'bg-white text-black self-end rounded-l-2xl rounded-tr-2xl'
    : 'bg-gray-800 text-white self-start rounded-r-2xl rounded-tl-2xl';

  return (
    <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
      <div
        className={`max-w-xs md:max-w-md px-4 py-3 ${bubbleClasses}`}
      >
        <p className="text-base whitespace-pre-wrap">{message.text}</p>
      </div>
       <p className="text-xs text-gray-500 mt-1 px-1">
        {message.timestamp}
      </p>
    </div>
  );
};