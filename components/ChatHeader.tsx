import React from 'react';

interface ChatHeaderProps {
  name: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ name }) => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between p-3 border-b border-gray-800 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="flex items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M15 6v12a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h2"/></svg>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <span className="text-xl font-bold text-black">M</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">{name}</h1>
            <p className="text-sm text-gray-400">Active now</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M15.63 14.37a4 4 0 1 0-5.26 0l-4.55 4.56a2 2 0 1 0 2.84 2.82l4.55-4.56A4 4 0 0 0 15.63 14.37z"/><path d="m14 7 3 3"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
      </div>
    </header>
  );
};