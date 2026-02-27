import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingBackground from './components/FloatingBackground';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DomainSelection from './pages/DomainSelection';
import QuestionList from './pages/QuestionList';
import QuestionDetail from './pages/QuestionDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen font-sans text-slate-100">
        <FloatingBackground />
        
        {/* Content Wrapper */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          
          <main className="flex-grow container mx-auto px-4 sm:px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/select-domain/:subjectId" element={<DomainSelection />} />
              <Route path="/questions/:subjectId" element={<QuestionList />} />
              <Route path="/question/:questionId" element={<QuestionDetail />} />
            </Routes>
          </main>

          <footer className="py-6 text-center text-blue-300/60 text-sm">
            <p>&copy; {new Date().getFullYear()} DreamSAT. Study hard, dream big.</p>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;