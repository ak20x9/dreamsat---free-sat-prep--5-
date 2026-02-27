import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";
import { MOCK_QUESTIONS, MATH_DOMAINS, VERBAL_DOMAINS } from '../constants';
import { ArrowLeft, CheckCircle, HelpCircle, Sparkles, Loader2, AlertCircle } from 'lucide-react';

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
    return <div className="text-white text-center mt-20">Question not found</div>;
  }

  const allDomains = question.subject === 'math' ? MATH_DOMAINS : VERBAL_DOMAINS;
  const domainName = allDomains.find(d => d.id === question.domainId)?.name;

  const handleShowAnswer = async () => {
    setShowAnswer(true);
    setErrorAI(null);

    if (question.explanation) return;
    if (aiExplanation) return;

    setLoadingAI(true);
    try {
      if (!process.env.API_KEY) {
        throw new Error("API Key is missing. Please check your environment configuration.");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = `You are an expert, encouraging SAT tutor.
      
Subject: ${question.subject}
Domain: ${domainName}
Difficulty: ${question.difficulty}

${question.passage ? `Passage:\n${question.passage}\n\n` : ''}

Question: "${question.questionText}"
Options:
A) ${question.options[0]}
B) ${question.options[1]}
C) ${question.options[2]}
D) ${question.options[3]}

The correct answer is Option ${String.fromCharCode(65 + question.correctAnswerIndex)} (${question.options[question.correctAnswerIndex]}).

Please provide a clear, concise explanation for the student. Explain why the correct answer is right and briefly why the other options might be traps or incorrect. Keep the tone helpful and positive.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setAiExplanation(response.text || "Could not generate explanation from AI.");
    } catch (error: any) {
      console.error("AI Error:", error);
      setErrorAI(error.message || "An unknown error occurred while contacting the AI.");
      setAiExplanation(null);
    } finally {
      setLoadingAI(false);
    }
  };

  const explanationText = question.explanation || aiExplanation;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-300 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> Back to List
      </button>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[60vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-100 p-6 md:p-8 border-b flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                {question.subject}
              </span>
              <span className={`px-3 py-1 text-xs font-bold rounded-full border uppercase tracking-wider
                ${question.difficulty === 'Easy' ? 'text-green-600 border-green-200 bg-green-50' : 
                  question.difficulty === 'Medium' ? 'text-yellow-600 border-yellow-200 bg-yellow-50' : 
                  'text-red-600 border-red-200 bg-red-50'
                }`}>
                {question.difficulty}
              </span>
            </div>
            <h3 className="text-slate-500 font-medium text-sm">{domainName}</h3>
          </div>
          <div className="text-slate-400 font-mono text-sm">ID: {question.id}</div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 flex-grow">

          {/* Passage */}
          {question.passage && (
            <div className="mb-10 p-8 bg-slate-100 rounded-2xl border border-slate-200">
              <p className="text-xl md:text-[1.5rem] text-slate-800 leading-loose whitespace-pre-line font-serif">
                {question.passage}
              </p>
            </div>
          )}

          {/* 🔥 NEW: Math Image Support */}
          {question.imageUrl && (
            <div className="mb-8 flex justify-center">
              <img
                src={question.imageUrl}
                alt="question diagram"
                className="max-h-80 object-contain"
              />
            </div>
          )}

          {/* Question */}
          <p className="text-lg md:text-xl text-slate-800 font-semibold leading-relaxed mb-10">
            {question.underlineText ? (
              question.questionText.split(question.underlineText).map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="underline decoration-2 decoration-blue-500">
                      {question.underlineText}
                    </span>
                  )}
                </React.Fragment>
              ))
            ) : (
              question.questionText
            )}
          </p>

          <div className="space-y-3">
            {question.options.map((opt, index) => {
              const letter = String.fromCharCode(65 + index);
              let containerClass = "border-slate-200 hover:bg-slate-50 hover:border-blue-300";
              let circleClass = "bg-slate-100 text-slate-500";

              if (showAnswer) {
                if (index === question.correctAnswerIndex) {
                  containerClass = "border-green-500 bg-green-50";
                  circleClass = "bg-green-500 text-white";
                } else if (selectedOption === index) {
                  containerClass = "border-red-300 bg-red-50";
                  circleClass = "bg-red-500 text-white";
                }
              } else if (selectedOption === index) {
                containerClass = "border-blue-500 bg-blue-50";
                circleClass = "bg-blue-600 text-white";
              }

              return (
                <div 
                  key={index}
                  onClick={() => !showAnswer && setSelectedOption(index)}
                  className={`group p-4 rounded-xl border-2 flex items-center cursor-pointer transition-all duration-200 ${containerClass}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 shrink-0 transition-colors ${circleClass}`}>
                    {letter}
                  </div>
                  <span className={`text-lg ${showAnswer && index === question.correctAnswerIndex ? 'font-semibold text-green-900' : 'text-slate-700'}`}>
                    {opt}
                  </span>
                  
                  {showAnswer && index === question.correctAnswerIndex && (
                    <CheckCircle className="ml-auto w-6 h-6 text-green-500" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-200">
          {!showAnswer ? (
            <button
              onClick={handleShowAnswer}
              className="w-full md:w-auto px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-lg shadow-lg shadow-yellow-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Show Answer
            </button>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h4 className="font-bold text-blue-900 mb-2">
                  {question.explanation ? 'Explanation' : 'AI Tutor Explanation'}
                </h4>
                
                {loadingAI ? (
                  <div className="flex items-center space-x-2 text-blue-600 py-4">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Thinking...</span>
                  </div>
                ) : errorAI ? (
                  <div className="text-red-600 py-4">
                    <p className="font-medium">Connection Error</p>
                    <p className="text-sm mt-1">{errorAI}</p>
                  </div>
                ) : (
                  <p className="text-blue-800 leading-relaxed whitespace-pre-wrap">
                    {explanationText}
                  </p>
                )}
              </div>

              <div className="mt-6 text-center">
                <button 
                  onClick={() => navigate(-1)}
                  className="text-slate-500 hover:text-slate-800 font-medium underline underline-offset-4"
                >
                  Try another question
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default QuestionDetail;
