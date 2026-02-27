import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SUBJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-10">
      <div className="text-center mb-12 space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight drop-shadow-lg">
          Master the <span className="text-yellow-400">SAT</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100 font-light">
          Free, high-quality practice for students aiming for the top. 
          Your journey to a 1600 starts here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {Object.values(SUBJECTS).map((subject) => (
          <div
            key={subject.id}
            onClick={() => navigate(`/select-domain/${subject.id}`)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="p-8 flex flex-col items-center text-center h-full">
              <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <subject.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3 font-serif">{subject.title}</h2>
              <p className="text-blue-200 mb-8 leading-relaxed">
                {subject.description}
              </p>
              
              <div className="mt-auto flex items-center text-yellow-400 font-semibold uppercase tracking-wider text-sm group-hover:text-yellow-300">
                Start Practicing <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            {/* Decorative gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;