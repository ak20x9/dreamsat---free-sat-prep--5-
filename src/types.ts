export type Subject = 'math' | 'verbal';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Domain {
  id: string;
  name: string;
  subject: Subject;
}

export interface Question {
  id: string;
  subject: Subject;
  domainId: string;
  difficulty: Difficulty;
  questionText: string;
  passage?: string; // New optional field for reading passages
  options: string[]; // A, B, C, D
  correctAnswerIndex: number; // 0-3
  explanation?: string; // Optional - if missing, AI will generate it
}

export interface SubjectConfig {
  id: Subject;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  domains: Domain[];
}