import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SUBJECTS, MATH_DOMAINS, VERBAL_DOMAINS } from '../constants';
import { Subject, Domain } from '../types';
import { Check, ArrowLeft } from 'lucide-react';

const DomainSelection: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);

  // Validate subject
  const currentSubject = SUBJECTS[subjectId as Subject];
  if (!currentSubject) {
    return <div className="text-slate-800 text-center mt-20">Chủ đề không hợp lệ</div>;
  }

  const allDomains = subjectId === 'math' ? MATH_DOMAINS : VERBAL_DOMAINS;
  const isMath = subjectId === 'math';

  const toggleDomain = (id: string) => {
    setSelectedDomains(prev => 
      prev.includes(id) 
        ? prev.filter(d => d !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedDomains.length === allDomains.length) {
      setSelectedDomains([]);
    } else {
      setSelectedDomains(allDomains.map(d => d.id));
    }
  };

  const handleStart = () => {
    if (selectedDomains.length === 0) return;
    // Pass selected domains via query params
    const query = new URLSearchParams();
    query.set('domains', selectedDomains.join(','));
    navigate(`/questions/${subjectId}?${query.toString()}`);
  };

  // Theme colors based on subject
  // Math -> Emerald/Teal
  // Verbal -> Sky/Blue
  const activeBorderColor = isMath ? 'border-teal-500' : 'border-sky-500';
  const activeBgColor = isMath ? 'bg-teal-50' : 'bg-sky-50';
  const checkColor = isMath ? 'bg-teal-500 border-teal-500' : 'bg-sky-500 border-sky-500';
  const buttonGradient = isMath ? 'from-teal-500 to-emerald-600 hover:shadow-teal-500/30' : 'from-sky-500 to-blue-600 hover:shadow-sky-500/30';
  const linkHoverColor = isMath ? 'hover:text-teal-700' : 'hover:text-sky-700';
  const titleColor = isMath ? 'text-teal-600' : 'text-sky-600';
  const textColor = isMath ? 'text-teal-600 hover:text-teal-700' : 'text-sky-600 hover:text-sky-700';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button 
        onClick={() => navigate('/')}
        className={`flex items-center text-slate-500 ${linkHoverColor} mb-8 transition-colors font-medium`}
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> Trang chủ
      </button>

      <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50">
        <div className="mb-8">
          <h2 className={`text-3xl font-bold font-serif mb-2 text-slate-800`}>
            Chọn chủ đề <span className={titleColor}>{currentSubject.title}</span>
          </h2>
          <p className="text-slate-500">
            Tùy chỉnh bài luyện tập của bạn. Chọn một hoặc nhiều chủ đề để tập trung.
          </p>
        </div>

        <div className="flex justify-end mb-4">
          <button 
            onClick={handleSelectAll}
            className={`text-sm font-bold transition-colors ${textColor}`}
          >
            {selectedDomains.length === allDomains.length ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {allDomains.map((domain) => {
            const isSelected = selectedDomains.includes(domain.id);
            return (
              <div
                key={domain.id}
                onClick={() => toggleDomain(domain.id)}
                className={`
                  relative cursor-pointer p-6 rounded-xl border-2 transition-all duration-200
                  flex items-center justify-between group
                  ${isSelected 
                    ? `${activeBgColor} ${activeBorderColor} shadow-md` 
                    : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50'
                  }
                `}
              >
                <span className={`text-lg font-medium ${isSelected ? 'text-slate-900' : 'text-slate-500'}`}>
                  {domain.name}
                </span>
                <div className={`
                  w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                  ${isSelected ? checkColor : 'border-slate-300 group-hover:border-slate-400'}
                `}>
                  {isSelected && <Check className="w-4 h-4 text-white" />}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleStart}
            disabled={selectedDomains.length === 0}
            className={`
              px-12 py-4 rounded-full font-bold text-lg tracking-wide transition-all duration-300 shadow-lg transform
              ${selectedDomains.length > 0 
                ? `bg-gradient-to-r text-white hover:-translate-y-1 hover:shadow-xl ${buttonGradient}` 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              }
            `}
          >
            Bắt đầu làm bài
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomainSelection;