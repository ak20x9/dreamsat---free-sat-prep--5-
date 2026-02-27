import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";
import { MOCK_QUESTIONS, MATH_DOMAINS, VERBAL_DOMAINS } from '../constants';
import { ArrowLeft, CheckCircle, HelpCircle, Sparkles, Loader2, BookOpen } from 'lucide-react';

const QuestionDetail: React.FC = () => {
  const { questionId } = useParams<{ questionId: string }>();
  const navigate = useNavigate();
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  // AI State
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [loadingAI, setLoadingAI] = useState(false);
  const [errorAI, setErrorAI] = useState<string | null>(null);

  const question = MOCK_QUESTIONS.find(q => q.id === questionId);

  if (!question) {
    return <div className="text-slate-800 text-center mt-20 font-medium text-lg">Không tìm thấy câu hỏi với ID: {questionId}</div>;
  }

  const allDomains = question.subject === 'math' ? MATH_DOMAINS : VERBAL_DOMAINS;
  const domainName = allDomains.find(d => d.id === question.domainId)?.name;
  
  // Logic kiểm tra passage: chỉ cần biến passage tồn tại (không undefined/null)
  const hasPassage = Boolean(question.passage);

  const handleShowAnswer = async () => {
    setShowAnswer(true);
    setErrorAI(null);

    if (question.explanation) return;
    if (aiExplanation) return;

    setLoadingAI(true);
    try {
      if (!process.env.API_KEY || process.env.API_KEY.includes('PLACEHOLDER') || process.env.API_KEY.includes('DAN_KEY')) {
        throw new Error("Chưa cấu hình API Key đúng.");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = `You are an expert SAT tutor.
      Subject: ${question.subject}
      Domain: ${domainName}
      Question: "${question.questionText}"
      ${question.passage ? `Passage: "${question.passage}"` : ''}
      Options: ${question.options.join(', ')}
      Correct Answer: ${question.options[question.correctAnswerIndex]}
      
      Explain why the correct answer is right and why others are wrong.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setAiExplanation(response.text || "Không thể tạo lời giải từ AI.");
    } catch (error: any) {
      console.error("AI Error:", error);
      setErrorAI(error.message || "Lỗi kết nối AI.");
      setAiExplanation(null);
    } finally {
      setLoadingAI(false);
    }
  };

  const explanationText = question.explanation || aiExplanation;

  // Render Layout
  return (
    <div className={`mx-auto px-4 py-6 transition-all duration-300 ${hasPassage ? 'max-w-[98%] xl:max-w-[1600px]' : 'max-w-3xl'}`}>
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-slate-500 hover:text-blue-600 mb-4 transition-colors font-medium group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Quay lại danh sách
      </button>

      {/* Main Card Container */}
      <div 
        className={`bg-white rounded-2xl shadow-xl shadow-slate-300/50 overflow-hidden border border-slate-200 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500
          ${hasPassage ? 'h-[85vh]' : 'min-h-[500px]'}
        `}
      >
        {/* Header Bar */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center shrink-0 h-16">
           <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-sm ${question.subject === 'math' ? 'bg-teal-600' : 'bg-sky-600'}`}>
                {question.subject === 'math' ? 'Math' : 'Verbal'}
              </span>
              <span className={`px-3 py-1 text-xs font-bold rounded-full border uppercase tracking-wider
                ${question.difficulty === 'Easy' ? 'text-green-700 border-green-200 bg-green-100' : 
                  question.difficulty === 'Medium' ? 'text-yellow-700 border-yellow-200 bg-yellow-100' : 
                  'text-red-700 border-red-200 bg-red-100'
                }`}>
                {question.difficulty}
              </span>
              <span className="hidden md:inline-block text-slate-300 mx-2">|</span>
              <span className="hidden md:inline-block text-slate-600 font-semibold text-sm truncate max-w-[300px]">{domainName}</span>
           </div>
           <div className="text-slate-400 font-mono text-xs md:text-sm bg-slate-100 px-2 py-1 rounded">ID: {question.id}</div>
        </div>

        {/* Content Body */}
        {hasPassage ? (
          // === SPLIT VIEW LAYOUT ===
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 overflow-hidden h-full">
             
             {/* LEFT COLUMN: PASSAGE (Paper Texture) */}
             <div className="bg-[#fcfbf9] border-b md:border-b-0 md:border-r border-slate-200 flex flex-col h-full overflow-hidden relative">
                {/* Decorative line */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-blue-200 opacity-50 md:opacity-100"></div>
                
                <div className="bg-white/50 px-8 py-3 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center shrink-0">
                  <BookOpen className="w-4 h-4 mr-2 text-sky-500" /> Reading Passage
                </div>
                
                <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar flex-grow">
                  <div className="font-serif text-lg md:text-xl leading-10 text-slate-800 antialiased max-w-none prose prose-slate prose-lg">
                    {/* Render paragraph breaks manually */}
                    {question.passage?.split('\n').map((para, idx) => (
                      <p key={idx} className="mb-8 indent-8 last:mb-0 text-justify">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
             </div>

             {/* RIGHT COLUMN: QUESTION */}
             <div className="bg-white flex flex-col h-full overflow-hidden relative z-0">
                <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar flex-grow pb-32">
                   <h2 className="font-sans font-bold text-xl md:text-2xl text-slate-900 leading-snug mb-8">
                     {question.questionText}
                   </h2>

                   <div className="space-y-4">
                      {question.options.map((opt, index) => {
                        const letter = String.fromCharCode(65 + index);
                        let containerClass = "border-slate-200 hover:bg-slate-50 hover:border-sky-300 shadow-sm hover:shadow-md";
                        let circleClass = "bg-slate-100 text-slate-500 border-slate-200";

                        if (showAnswer) {
                           if (index === question.correctAnswerIndex) {
                              containerClass = "border-green-500 bg-green-50 ring-1 ring-green-500";
                              circleClass = "bg-green-500 text-white border-green-500";
                           } else if (selectedOption === index) {
                              containerClass = "border-red-300 bg-red-50";
                              circleClass = "bg-red-500 text-white border-red-500";
                           }
                        } else if (selectedOption === index) {
                           containerClass = "border-sky-500 bg-sky-50 ring-1 ring-sky-500";
                           circleClass = "bg-sky-600 text-white border-sky-600";
                        }

                        return (
                          <div 
                            key={index}
                            onClick={() => !showAnswer && setSelectedOption(index)}
                            className={`
                              group p-5 rounded-xl border-2 flex items-start md:items-center cursor-pointer transition-all duration-200 select-none
                              ${containerClass}
                            `}
                          >
                            <div className={`
                              w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold mr-4 shrink-0 transition-all mt-0.5 md:mt-0 text-sm
                              ${circleClass}
                            `}>
                              {letter}
                            </div>
                            <span className={`text-base md:text-lg leading-relaxed ${showAnswer && index === question.correctAnswerIndex ? 'font-semibold text-green-900' : 'text-slate-700'}`}>
                              {opt}
                            </span>
                            
                            {showAnswer && index === question.correctAnswerIndex && (
                              <CheckCircle className="ml-auto w-6 h-6 text-green-500 shrink-0" />
                            )}
                          </div>
                        );
                      })}
                   </div>
                </div>
                
                {/* Fixed Footer for Action */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-sm border-t border-slate-100 z-10 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                    <ActionButton 
                      showAnswer={showAnswer} 
                      onCheck={handleShowAnswer} 
                      explanation={explanationText}
                      loading={loadingAI}
                      error={errorAI}
                      navigate={navigate}
                    />
                </div>
             </div>
          </div>
        ) : (
          // === CENTERED LAYOUT (NO PASSAGE) ===
          <div className="flex-grow flex flex-col bg-slate-50/30">
            <div className="p-8 md:p-12 overflow-y-auto flex-grow max-w-3xl mx-auto w-full">
               <h2 className="font-serif text-2xl md:text-3xl text-slate-800 leading-snug mb-10 text-center">
                 {question.questionText}
               </h2>
               
               <div className="space-y-4 max-w-2xl mx-auto">
                  {question.options.map((opt, index) => {
                      const letter = String.fromCharCode(65 + index);
                      let containerClass = "border-slate-200 hover:bg-slate-50 hover:border-sky-300 shadow-sm";
                      let circleClass = "bg-slate-100 text-slate-500";
                      
                      if (showAnswer) {
                          if (index === question.correctAnswerIndex) {
                              containerClass = "border-green-500 bg-green-50 shadow-md";
                              circleClass = "bg-green-500 text-white";
                          } else if (selectedOption === index) {
                              containerClass = "border-red-300 bg-red-50";
                              circleClass = "bg-red-500 text-white";
                          }
                      } else if (selectedOption === index) {
                          containerClass = "border-sky-500 bg-sky-50 shadow-md";
                          circleClass = "bg-sky-600 text-white";
                      }

                      return (
                          <div 
                              key={index}
                              onClick={() => !showAnswer && setSelectedOption(index)}
                              className={`
                              group p-6 rounded-xl border-2 flex items-center cursor-pointer transition-all duration-200
                              ${containerClass}
                              `}
                          >
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mr-6 shrink-0 transition-colors ${circleClass}`}>{letter}</div>
                              <span className={`text-lg ${showAnswer && index === question.correctAnswerIndex ? 'font-semibold text-green-900' : 'text-slate-700'}`}>{opt}</span>
                              {showAnswer && index === question.correctAnswerIndex && <CheckCircle className="ml-auto w-6 h-6 text-green-500" />}
                          </div>
                      );
                  })}
               </div>
            </div>

            <div className="p-6 bg-white border-t border-slate-200">
               <div className="max-w-2xl mx-auto">
                  <ActionButton 
                      showAnswer={showAnswer} 
                      onCheck={handleShowAnswer} 
                      explanation={explanationText}
                      loading={loadingAI}
                      error={errorAI}
                      navigate={navigate}
                  />
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Extracted Sub-component for Cleaner Code
const ActionButton: React.FC<any> = ({ showAnswer, onCheck, explanation, loading, error, navigate }) => {
  if (!showAnswer) {
    return (
      <button
        onClick={onCheck}
        className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg rounded-xl shadow-lg shadow-slate-900/20 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center"
      >
        <HelpCircle className="w-5 h-5 mr-3" />
        Kiểm tra đáp án
      </button>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="bg-sky-50 border border-sky-100 rounded-xl p-5 relative overflow-hidden">
        <h4 className="font-bold text-sky-900 mb-3 flex items-center text-sm uppercase tracking-wide">
          <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
          Giải thích chi tiết
        </h4>
        
        {loading ? (
            <div className="flex items-center space-x-3 text-sky-700 py-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>AI đang suy nghĩ câu trả lời...</span>
            </div>
        ) : error ? (
            <div className="text-red-600 bg-red-50 p-3 rounded">{error}</div>
        ) : (
            <div className="text-slate-800 leading-7 text-base whitespace-pre-wrap max-h-60 overflow-y-auto pr-2 custom-scrollbar font-medium">
              {explanation}
            </div>
        )}
      </div>
      <div className="mt-4 text-center">
        <button onClick={() => navigate(-1)} className="text-slate-400 hover:text-slate-600 font-semibold text-sm hover:underline">
          Làm câu tiếp theo
        </button>
      </div>
    </div>
  );
};

export default QuestionDetail;