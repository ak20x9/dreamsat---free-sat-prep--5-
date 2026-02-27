import React from 'react';
import { DECORATION_WORDS } from '../constants';

const FloatingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Decorative Words */}
      {DECORATION_WORDS.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.size} ${item.color} font-serif font-bold opacity-20 select-none animate-float`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${4 + (index % 4)}s` 
          }}
        >
          {item.text}
        </div>
      ))}

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default FloatingBackground;