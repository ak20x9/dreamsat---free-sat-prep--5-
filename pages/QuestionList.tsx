import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { MOCK_QUESTIONS, MATH_DOMAINS, VERBAL_DOMAINS, SUBJECTS } from '../constants';
import { Subject, Difficulty } from '../types';
import { ArrowLeft, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const ITEMS_PER_PAGE = 5;

const QuestionList: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const selectedDomainIds = useMemo(() => {
    return searchParams.get('domains')?.split(',') || [];
  }, [searchParams]);

  const allDomains = subjectId === 'math' ? MATH_DOMAINS : VERBAL_DOMAINS;

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return MOCK_QUESTIONS.filter(q => 
      q.subject === subjectId && selectedDomainIds.includes(q.domainId)
    );
  }, [subjectId, selectedDomainIds]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredQuestions.length / ITEMS_PER_PAGE);
  const currentQuestions = filteredQuestions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getDomainName = (id: string) => allDomains.find(d => d.id === id)?.name || id;

  const getDifficultyColor = (diff: Difficulty) => {
    switch (diff) {
      case 'Easy': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Hard': return 'text-red-400 bg-red-400/10 border-red-400/20';
    }
  };

  const currentSubject = SUBJECTS[subjectId as Subject];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => navigate(`/select-domain/${subjectId}`)}
          className="flex items-center text-blue-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Change Domains
        </button>
        <div className="text-right">
            <h1 className="text-2xl font-bold text-white font-serif">{currentSubject?.title} Practice</h1>
            <p className="text-sm text-blue-200">Found {filteredQuestions.length} questions</p>
        </div>
      </div>

      <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-blue-200 text-sm uppercase tracking-wider">
                <th className="p-6 font-semibold">ID</th>
                <th className="p-6 font-semibold">Difficulty</th>
                <th className="p-6 font-semibold">Domain</th>
                <th className="p-6 font-semibold">Preview</th>
                <th className="p-6 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {currentQuestions.length > 0 ? (
                currentQuestions.map((q) => (
                  <tr 
                    key={q.id} 
                    onClick={() => navigate(`/question/${q.id}`)}
                    className="group hover:bg-blue-600/10 transition-colors cursor-pointer"
                  >
                    <td className="p-6 font-mono text-blue-100">#{q.id}</td>
                    <td className="p-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(q.difficulty)}`}>
                        {q.difficulty}
                      </span>
                    </td>
                    <td className="p-6 text-gray-300 font-medium">
                      {getDomainName(q.domainId)}
                    </td>
                    <td className="p-6 text-gray-400 max-w-md truncate">
                      {q.questionText}
                    </td>
                    <td className="p-6 text-right">
                       <button className="text-blue-400 group-hover:text-blue-300 transition-colors p-2 rounded-full bg-blue-500/0 group-hover:bg-blue-500/20">
                          <Eye className="w-5 h-5" />
                       </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-gray-400">
                    No questions available for the selected domains.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <span className="text-blue-100 font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionList;