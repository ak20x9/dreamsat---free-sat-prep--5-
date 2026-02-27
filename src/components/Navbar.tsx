import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-50 w-full px-6 py-4 flex items-center justify-between border-b border-white/40 bg-white/60 backdrop-blur-md shadow-sm">
      <Link to="/" className="flex items-center space-x-2 group">
        <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-md group-hover:shadow-lg transition-all transform group-hover:scale-105">
            <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold text-slate-800 font-serif tracking-wide">
          Dream<span className="text-yellow-600">SAT</span>
        </span>
      </Link>
      <div className="text-slate-500 text-sm font-medium hidden sm:block">
        For the ambitious student
      </div>
    </nav>
  );
};

export default Navbar;