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
    return <div className="text-white text-center mt-20">Invalid Subject</div>;
  }

  const allDomains = subjectId === 'math' ? MATH_DOMAINS : VERBAL_DOMAINS;

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

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center text-blue-300 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
      </button>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white font-serif mb-2">
            Select {currentSubject.title} Domains
          </h2>
          <p className="text-blue-200">
            Customize your practice session. Choose one or more areas to focus on.
          </p>
        </div>

        <div className="flex justify-end mb-4">
          <button 
            onClick={handleSelectAll}
            className="text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            {selectedDomains.length === allDomains.length ? 'Deselect All' : 'Select All'}
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
                  relative cursor-pointer p-6 rounded-xl border transition-all duration-200
                  flex items-center justify-between group
                  ${isSelected 
                    ? 'bg-blue-600/30 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }
                `}
              >
                <span className={`text-lg font-medium ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                  {domain.name}
                </span>
                <div className={`
                  w-6 h-6 rounded-full border flex items-center justify-center transition-colors
                  ${isSelected ? 'bg-green-500 border-green-500' : 'border-gray-500 group-hover:border-gray-300'}
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
              px-10 py-4 rounded-full font-bold text-lg tracking-wide transition-all duration-300
              ${selectedDomains.length > 0 
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1' 
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            Start Practice
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomainSelection;