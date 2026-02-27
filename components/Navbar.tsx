import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-50 w-full px-6 py-4 flex items-center justify-between border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <Link to="/" className="flex items-center space-x-2 group">
        <div className="p-2 bg-yellow-400 rounded-lg group-hover:bg-yellow-300 transition-colors">
            <GraduationCap className="w-6 h-6 text-blue-900" />
        </div>
        <span className="text-xl font-bold text-white font-serif tracking-wide">
          Dream<span className="text-yellow-400">SAT</span>
        </span>
      </Link>
      <div className="text-blue-200 text-sm font-light hidden sm:block">
        For the ambitious student
      </div>
    </nav>
  );
};

export default Navbar;