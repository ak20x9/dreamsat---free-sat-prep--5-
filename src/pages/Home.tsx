import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SUBJECTS } from '../constants';
import { SubjectConfig } from '../types';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-10">
      <div className="text-center mb-12 space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif tracking-tight">
          Chinh phục <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">SAT</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
          Nền tảng luyện thi miễn phí, giao diện hiện đại.
          Hành trình đến <span className="font-semibold text-indigo-600">1600</span> của bạn bắt đầu ngay hôm nay.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {Object.values(SUBJECTS).map((subject: SubjectConfig) => (
          <div
            key={subject.id}
            onClick={() => navigate(`/select-domain/${subject.id}`)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="p-8 flex flex-col items-center text-center h-full relative z-10">
              <div className={`
                mb-6 p-5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300
                ${subject.id === 'math' ? 'bg-gradient-to-br from-emerald-400 to-teal-500' : 'bg-gradient-to-br from-sky-400 to-blue-500'}
              `}>
                <subject.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-3 font-serif">{subject.title}</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                {subject.description}
              </p>
              
              <div className={`
                mt-auto flex items-center font-bold uppercase tracking-wider text-sm transition-colors
                ${subject.id === 'math' ? 'text-teal-600 group-hover:text-teal-700' : 'text-sky-600 group-hover:text-sky-700'}
              `}>
                Luyện tập ngay <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            {/* Soft colorful background on hover */}
            <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300
                ${subject.id === 'math' ? 'bg-teal-500' : 'bg-sky-500'}
            `} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;