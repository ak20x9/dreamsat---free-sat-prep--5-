import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { MOCK_QUESTIONS, MATH_DOMAINS, VERBAL_DOMAINS, SUBJECTS } from '../constants';
import { Subject, Difficulty } from '../types';
import { ArrowLeft, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { useEffect } from 'react';

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
  const isMath = subjectId === 'math';

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
      case 'Easy': return 'text-green-700 bg-green-100 border-green-200';
      case 'Medium': return 'text-yellow-700 bg-yellow-100 border-yellow-200';
      case 'Hard': return 'text-red-700 bg-red-100 border-red-200';
    }
  };

  const currentSubject = SUBJECTS[subjectId as Subject];
  const themeColor = isMath ? 'text-teal-700' : 'text-sky-700';
  const buttonClass = isMath ? 'text-teal-600 bg-teal-50 group-hover:bg-teal-100' : 'text-sky-600 bg-sky-50 group-hover:bg-sky-100';

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => navigate(`/select-domain/${subjectId}`)}
          className={`flex items-center text-slate-500 hover:text-slate-800 transition-colors font-medium`}
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Đổi chủ đề
        </button>
        <div className="text-right">
            <h1 className={`text-3xl font-bold font-serif ${themeColor}`}>Luyện tập {currentSubject?.title}</h1>
            <p className="text-sm text-slate-500">Tìm thấy {filteredQuestions.length} câu hỏi</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                <th className="p-6 font-semibold">ID</th>
                <th className="p-6 font-semibold">Độ khó</th>
                <th className="p-6 font-semibold">Chủ đề (Domain)</th>
                <th className="p-6 font-semibold">Nội dung</th>
                <th className="p-6 font-semibold text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {currentQuestions.length > 0 ? (
                currentQuestions.map((q) => (
                  <tr 
                    key={q.id} 
                    onClick={() => navigate(`/question/${q.id}`)}
                    className="group hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <td className="p-6 font-mono text-slate-400 font-bold">#{q.id}</td>
                    <td className="p-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(q.difficulty)}`}>
                        {q.difficulty}
                      </span>
                    </td>
                    <td className="p-6 text-slate-700 font-medium">
                      {getDomainName(q.domainId)}
                    </td>
                    <td className="p-6 text-slate-500 max-w-md truncate">
                      {q.questionText}
                    </td>
                    <td className="p-6 text-right">
                       <button className={`transition-colors p-2 rounded-full ${buttonClass}`}>
                          <Eye className="w-5 h-5" />
                       </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-slate-400">
                    Chưa có câu hỏi nào cho các chủ đề đã chọn.
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
            className="p-3 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <span className="text-slate-600 font-medium bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
            Trang {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-3 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionList;