import React from 'react';
import { useLocation } from 'react-router-dom';
import { DECORATION_WORDS } from '../constants';

const FloatingBackground: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  // Determine theme based on path (Bright/Fresh Themes)
  let gradientClass = "from-indigo-50 via-violet-50 to-white"; // Default/Home: Elegant Violet/Indigo
  let orb1Class = "bg-indigo-300";
  let orb2Class = "bg-violet-300";
  let decorationTextColor = "text-indigo-200"; 

  if (path.includes('/math') && !path.includes('verbal')) {
    // Math Theme: Fresh Mint / Emerald / Teal
    gradientClass = "from-emerald-50 via-teal-100 to-cyan-50";
    orb1Class = "bg-emerald-300";
    orb2Class = "bg-teal-400";
    decorationTextColor = "text-emerald-600/10";
  } else if (path.includes('/verbal') && !path.includes('math')) {
    // Verbal Theme: Sky Blue / Cloud White (As requested)
    gradientClass = "from-sky-100 via-blue-50 to-white";
    orb1Class = "bg-sky-300";
    orb2Class = "bg-blue-300";
    decorationTextColor = "text-sky-600/10";
  } else if (path.includes('/question/')) {
    // Focus Mode: Very clean, minimal distraction
    gradientClass = "from-slate-50 via-gray-50 to-white";
    orb1Class = "bg-orange-200"; 
    orb2Class = "bg-amber-200"; 
    decorationTextColor = "text-gray-100";
  }

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-br ${gradientClass} transition-all duration-1000 ease-in-out`}>
      {/* Grid overlay for texture - lighter grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Decorative Words */}
      {DECORATION_WORDS.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.size} ${decorationTextColor} font-serif font-bold select-none animate-float transition-colors duration-1000`}
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

      {/* Glowing Orbs - Use lighter opacity for fresh look */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${orb1Class} rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow transition-colors duration-1000`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${orb2Class} rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow transition-colors duration-1000`} style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default FloatingBackground;