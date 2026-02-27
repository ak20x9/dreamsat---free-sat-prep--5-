import { SubjectConfig, Question, Domain } from './types';
import { Calculator, BookOpen } from 'lucide-react';
import pic1 from './src/assets/questions/pic1.gif';
import picv1 from './src/assets/questions/1.jpg';
import picv2 from './src/assets/questions/2.jpg';
import picv3 from './src/assets/questions/3.jpg';
import picv4 from './src/assets/questions/4.jpg';
import picv5 from './src/assets/questions/5.jpg';
import picv6 from './src/assets/questions/6.jpg';
import picv7 from './src/assets/questions/7.jpg';
import picv8 from './src/assets/questions/8.jpg';
import picv9 from './src/assets/questions/9.jpg';
import picv10 from './src/assets/questions/10.jpg';
import picv11 from './src/assets/questions/11.jpg';
import picv12 from './src/assets/questions/12.jpg';
import picv13 from './src/assets/questions/13.jpg';
import picv14 from './src/assets/questions/14.jpg';
import picv15 from './src/assets/questions/15.jpg';
import picv16 from './src/assets/questions/16.jpg';
import picv17 from './src/assets/questions/17.jpg';
import picv18 from './src/assets/questions/18.jpg';
import picv19 from './src/assets/questions/19.jpg';
import picv20 from './src/assets/questions/20.jpg';
import picv21 from './src/assets/questions/20.jpg';


// ============================================================================
// DANH SÁCH CHỦ ĐỀ (DOMAINS)
// ============================================================================

export const MATH_DOMAINS: Domain[] = [
  { id: 'algebra', name: 'Algebra', subject: 'math' },
  { id: 'data_analysis', name: 'Problem Solving and Data Analysis', subject: 'math' },
  { id: 'advanced_math', name: 'Advanced Math', subject: 'math' },
  { id: 'Geometry and Trigonometry', name: 'Geometry and Trigonometry', subject: 'math' },
];

export const VERBAL_DOMAINS: Domain[] = [
  { id: 'info_ideas', name: 'Information and Ideas', subject: 'verbal' },
  { id: 'craft_structure', name: 'Craft and Structure', subject: 'verbal' },
  { id: 'expression', name: 'Expression of Ideas', subject: 'verbal' },
  { id: 'conventions', name: 'Standard English Conventions', subject: 'verbal' },
];

export const SUBJECTS: Record<string, SubjectConfig> = {
  math: {
    id: 'math',
    title: 'Math',
    description: 'Master algebra, problem solving, and advanced mathematical concepts.',
    icon: Calculator,
    domains: MATH_DOMAINS,
  },
  verbal: {
    id: 'verbal',
    title: 'Reading & Writing',
    description: 'Enhance your command of evidence, vocabulary, and grammar.',
    icon: BookOpen,
    domains: VERBAL_DOMAINS,
  },
};

// ============================================================================
// DANH SÁCH CÂU HỎI
// ============================================================================

export const MOCK_QUESTIONS: Question[] = [

  // --- MATH QUESTIONS ---

  {
    id: 'al1',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Hard',
    questionText: 'What system of linear equations is represented by the lines shown?',
    options: [`8x + 4y = 32; -10x - 4y = -64`, `8x - 4y = 32; -10x + 4y = -64`, `4x - 10y = 32; -8x + 10y = -64`, `4x + 10y = 32; -8x - 10y = -64`],
    imageUrl: picv12,
    correctAnswerIndex: 3,
    explanation: `Choice D is the correct answer because it represents the system of linear equations derived from the two lines shown in the graph. The first line passes through the points (8, 0) and (3, 4), which results in a slope of -4/5. When this slope and the point (8, 0) are substituted into the point-slope form, the equation simplifies to -8x - 10y = -64.

The second line passes through the points (8, 0) and (3, 2), yielding a slope of -2/5. Applying the same algebraic steps and multiplying by 10 to clear the denominators results in the equation 4x + 10y = 32. Consequently, the complete system of equations is 4x + 10y = 32 and -8x - 10y = -64. Choices A, B, and C are incorrect as they likely stem from calculation or conceptual errors.`,
  },

  {
    id: 'al2',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Easy',
    questionText: 'The function f is defined by f(x) = 25x + 30. What is the value of f(x) when x = 2?',
    options: [`50`, `57`, `80`, `110`],
    correctAnswerIndex: 2,
  },
  
  {
    id: 'al3',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Medium',
    questionText: 'A cargo helicopter delivers only 100-pound packages and 120-pound packages. For each delivery trip, the helicopter must carry at least 10 packages, and the total weight of the packages can be at most 1,100 pounds. What is the maximum number of 120-pound packages that the helicopter can carry per trip?',
    options: [`2`, `4`, `5`, `6`],
    correctAnswerIndex: 2,
  },
  
  {
    id: 'al4',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Easy',
    questionText: 'The function f is defined by f(x) = 8x. For what value of x does f(x) = 72?',
    options: [`8`, `9`, `64`, `80`],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'al5',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Easy',
    questionText: 'For the linear function f, b is a constant and f(7) = 28. What is the value of b?',
    options: [`0`, `1`, `4`, `7`],
    imageUrl: picv13,
    correctAnswerIndex: 0,
    explanation: 'Choice A is correct because substituting the given point f(7) = 28 into the linear function f(x) = 4x + b allows you to solve for the constant b. By replacing x with 7 and f(x) with 28, the equation becomes 28 = 4(7) + b, which simplifies to 28 = 28 + b. Subtracting 28 from both sides reveals that the value of b is 0. The other choices are incorrect because substituting their values for b (1, 4, or 7) into the function results in f(7) equaling 29, 32, or 35, respectively, rather than the required value of 28.',
  },
  
  {
    id: 'al6',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Easy',
    questionText: 'Gabriella deposits $35 in a savings account at the end of each week. At the beginning of the 1st week of a year there was $600 in that savings account. How much money, in dollars, will be in the account at the end of the 4th week of that year?',
    options: [`460`, `635`, `639`, `740`],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'al7',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Hard',
    questionText: 'One of the two equations in a system of linear equations is given. The system has no solution. Which equation could be the second equation in this system?',
    options: [`x = 4y`, `1/3x = 4y`, `x = 12y - 15`, `1/3x = 12y - 15`],
    imageUrl: picv14,
    correctAnswerIndex: 1,
    explanation: `Choice B is correct because a system of two linear equations in two variables has no solution only when the lines are parallel and distinct, meaning they share the same slope but have different y-intercepts. By converting the given equation 3x = 36y - 45 into slope-intercept form, we find it has a slope of 1/12 and a y-intercept of 5/4. Choice B is the only option that, when rewritten as y = 1/12x, provides the same slope of 1/12 but a different y-intercept of 0, ensuring the lines never intersect. Choice A and Choice D are incorrect because their slopes differ from the original equation, resulting in exactly one solution, while Choice C is incorrect because it is identical to the original equation, resulting in infinitely many solutions.`,
  },
  
  {
    id: 'al8',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Easy',
    questionText: 'A veterinarian recommends that each day a certain rabbit should eat 25 calories per pound of the rabbit’s weight, plus an additional 11 calories. Which equation represents this situation, where c is the total number of calories the veterinarian recommends the rabbit should eat each day if the rabbit’s weight is x pounds?',
    options: [`c = 25x`, `c = 36x`, `c = 11x + 25`, `c = 25x + 11`],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'al9',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Easy',
    questionText: 'The total cost f(x), in dollars, to lease a car for 36 months from a particular car dealership is given by f(x) = 36x + 1,000, where x is the monthly payment, in dollars. What is the total cost to lease a car when the monthly payment is $400?',
    options: [`$13,400`, `$13,000`, `$15,400`, `$37,400`],
    correctAnswerIndex: 2,
  },
  
  {
    id: 'al10',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Hard',
    questionText: 'The graph of the equation ax + ky = 6 is a line in the xy-plane, where a and k are constants. If the line contains the points (-2, -6) and (0, -3), what is the value of k ?',
    options: [`-2`, `-1`, `2`, `3`],
    correctAnswerIndex: 0,
  },

  {
    id: 'al11',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Hard',
    questionText: 'A window repair specialist charges $220 for the first two hours of repair plus an hourly fee for each additional hour. The total cost for 5 hours of repair is $400. Which function f gives the total cost, in dollars, for x hours of repair, where x >= 2?',
    options: [`f(x) = 60x + 100`, `f(x) = 60x + 220`, `f(x) = 80x`, `f(x) = 80x + 220`],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'al12',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Hard',
    questionText: 'Hector used a tool called an auger to remove corn from a storage bin at a constant rate. The bin contained 24,000 bushels of corn when Hector began to use the auger. After 5 hours of using the auger, 19,350 bushels of corn remained in the bin. If the auger continues to remove corn at this rate, what is the total number of hours Hector will have been using the auger when 12,840 bushels of corn remain in the bin?',
    options: [`3`, `7`, `8`, `12`],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'al13',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Medium',
    questionText: 'The function h is defined by h(x) = 4x + 28. The graph of y = h(x) in the xy-plane has an x-intercept at (a, 0) and a y-intercept at (0, b), where a and b are constants. What is the value of a + b?',
    options: [`21`, `28`, `32`, `35`],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'al14',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Easy',
    questionText: 'If 4x - 28 = -24, what is the value of x - 7?',
    options: [`-24`, `-22`, `-6`, `-1`],
    correctAnswerIndex: 2,
  },
  
  {
    id: 'al15',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Hard',
    questionText: 'For line h, the table shows three values of x and their corresponding values of y. Line is the result of translating line h down 5 units in the xy-plane. What is the x-intercept of line k?',
    options: [`(-26/3, 0)`, `(-9/2, 0)`, `(-11/3, 0)`, `(-17/6, 0)`],
    imageUrl: picv15,
    correctAnswerIndex: 3,
    explanation: `Choice D is correct because it involves determining the equation for a line after a vertical translation to find its x-intercept. First, the slope of line $h$ is calculated using the points $(18, 130)$ and $(23, 160)$, resulting in a slope of 6. By substituting this slope and one of the points into the slope-intercept form $y = mx + b$, the y-intercept of line $h$ is found to be 22, making its equation $y = 6x + 22$. Since line $k$ is the result of translating line $h$ down 5 units, its equation becomes $y = 6x + 17$. Setting $y$ to 0 to find the x-intercept yields $0 = 6x + 17$, which solves to $x = -17/6$, confirming the x-intercept is $(-17/6, 0)$.`,
  },
  
  {
    id: 'al16',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Hard',
    questionText: 'An economist modeled the demand Q for a certain product as a linear function of the selling price P. The demand was 20,000 units when the selling price was $40 per unit, and the demand was 15,000 units when the selling price was $60 per unit. Based on the model, what is the demand, in units, when the selling price is $55 per unit?',
    options: [`16,250`, `16,500`, `16,750`, `17,500`],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'al17',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Easy',
    questionText: 'Hiro and Sofia purchased shirts and pants from a store. The price of each shirt purchased was the same and the price of each pair of pants purchased was the same. Hiro purchased 4 shirts and 2 pairs of pants for $86, and Sofia purchased 3 shirts and 5 pairs of pants for $166. Which of the following systems of linear equations represents the situation, if x represents the price, in dollars, of each shirt and y represents the price, in dollars, of each pair of pants?',
    options: [`4x + 2y = 86; 3x + 5y = 166`, `4x + 3y = 86; 2x + 5y = 166`, `4x + 2y = 166; 3x + 5y = 86`, `4x + 3y = 166; 2x + 5y = 86`],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'al18',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Easy',
    questionText: 'What system of linear equations is represented by the lines shown?',
    options: [`0`, `6`, `14`, `16`],
    imageUrl: picv16,
    correctAnswerIndex: 1,
    explanation: `Choice B is correct. Based on the equation d = 16 - x/30, which calculates the remaining diesel d after driving x miles, substituting 300 for x results in d = 16 - 10, or 6 gallons. The other options are incorrect because they represent the amount of fuel remaining at different distances: Choice A corresponds to 480 miles, Choice C to 60 miles, and Choice D to 0 miles.`,
  },
  
  {
    id: 'al19',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Hard',
    questionText: 'In the given system of equations, a and b are constants. The graphs of these equations in the xy-plane intersect at the point (4, y). What is the value of a?',
    options: [`3`, `4`, `6`, `14`],
    imageUrl: picv17,
    correctAnswerIndex: 3,
    explanation: 'Choice D is correct. Since the system of equations intersects at the point (4, y), substituting x = 4 into the combined equation (-2a + 6)x = -88 allows for solving for the constant a. Multiplying the first equation by -2 and adding it to the second eliminates the y-variable, resulting in the equation (-2a + 6)(4) = -88. Simplifying this yields -2a + 6 = -22, then -2a = -28, and finally a = 14. Choices A, B, and C are incorrect and likely stem from calculation or conceptual mistakes during the elimination or substitution process.',
  },
  
  {
    id: 'al20',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Easy',
    questionText: 'A store sells two different-sized containers of a certain Greek yogurt. The store’s sales of this Greek yogurt totaled 1,277.94 dollars last month. The equation 5.48x + 7.30y = 1,277.94 represents this situation, where x is the number of smaller containers sold and y is the number of larger containers sold. According to the equation, which of the following represents the price, in dollars, of each smaller container?',
    options: [`5.48`, `7.30y`, `7.30`, `5.48x`],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'al21',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Easy',
    questionText: 'WWhich equation has the same solution as the equation 7(2x - 3) = 63?',
    options: [`2x - 3 = 9`, `2x - 3 = 56`, `2x - 21 = 63`, `2x - 21 = 70`],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'al22',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Easy',
    questionText: 'Line k is defined by y = 3x + 15. Line j is perpendicular to line k in the xy-plane. What is the slope of line j?',
    options: [`-1/3`, `-1/12`, `-1/18`, `-1/45`],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'al23',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Easy',
    questionText: 'The point (8, 2) in the xy-plane is a solution to which of the following systems of inequalities?',
    options: [`x > 0`, `y > 0; x > 0`, `y < 0; x < 0`, `y < 0`],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'al24',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Hard',
    questionText: 'The cost of renting a backhoe for up to 10 days is $270 or the first day and $135 for each additional day. Which of the following equations gives the cost y, in dollars, of renting the backhoe for x days, where x is a positive integer and x <= 10?',
    options: [`y = 270x - 135`, `y = 270x + 135`, `y = 135x + 270`, `y = 135x + 135`],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'al25',
    subject: 'math',
    domainId: 'algebra',
    difficulty: 'Easy',
    questionText: 'What value of p satisfies the equation 5p + 180 = 250?',
    options: [`14`, `65`, `86`, `250`],
    correctAnswerIndex: 0,
  },

  {
    id: 'av1',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Medium',
    questionText: 'A rectangle has a length that is 15 times its width. The function y = (15w)(w) represents this situation, where y is the area, in square feet, of the rectangle and y > 0. Which of the following is the best interpretation of 15w in this context?',
    options: [`The length of the rectangle, in feet`, `The area of the rectangle, in square feet`, `The difference between the length and the width of the rectangle, in feet`, `The width of the rectangle, in feet`],
    correctAnswerIndex: 0,
  },

  {
    id: 'av2',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Easy',
    questionText: 'Which of the following inequalities is equivalent to the inequality 6x - 9y > 12?',
    options: [`x - y > 2`, `2x - 3y > 4`, `3x - 2y > 4`, `3y - 2x > 2`],
    correctAnswerIndex: 1,
  },

  {
    id: 'av3',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Easy',
    questionText: 'Which expression is equivalent to 16x^3y^2 + 14xy?',
    options: [`2xy(8xy + 7)`, `2xy(8x^2y + 7)`, `14xy(2x^2y + 1)`, `14xy(8x^2y + 1)`],
    correctAnswerIndex: 1,
  },

  {
    id: 'av4',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Medium',
    questionText: 'Which of the following is a factor of the polynomial 4a^2 + 20ab + 25b^2?',
    options: [`a + b`, `2a + 5b`, `4a + 5b`, `4a + 25b`],
    correctAnswerIndex: 1,
  },

  {
    id: 'av5',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Medium',
    questionText: 'If p = 3x + 4 and v = x + 5, which of the following is equivalent to pv - 2p + v?',
    options: [`3x^2 + 12x + 7`, `3x^2 + 14x + 17`, `3x^2 + 19x + 20`, `3x^2 + 26x + 33`],
    correctAnswerIndex: 1,
  },

  {
    id: 'av6',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Easy',
    questionText: 'How many distinct real solutions are there to the equation 3x^2 - 15x + 18 = 0?',
    options: [`Exactly one`, `Exactly two`, `Infinitely many`, `Zero`],
    correctAnswerIndex: 1,
  },

  {
    id: 'av7',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Easy',
    questionText: 'Which of the following is equivalent to the expression (x + 5) + (2x - 3)?',
    options: [`3x - 2`, `3x + 2`, `3x - 8`, `3x + 8`],
    correctAnswerIndex: 1,
  },

  {
    id: 'av8',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Hard',
    questionText: 'The quadratic function h is defined as h(x) = 2(x - 4)^2 - 32. In the xy-plane, the graph of y = h(x)  intersects the x-axis at the points (0, 0) and (t, 0), where t is a constant. What is the value of t ?',
    options: [`1`, `2`, `4`, `8`],
    correctAnswerIndex: 3,
  },

  {
    id: 'av9',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Hard',
    questionText: 'The function f is defined by f(x) = (-8)(2)^x + 22. What is the y-intercept of the graph of y = f(x) in the xy-plane?',
    options: [`(0, 14)`, `(0, 2)`, `(0, 22)`, `(0, -8)`],
    correctAnswerIndex: 0,
  },

  {
    id: 'av10',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Easy',
    questionText: 'The graph shows the height above ground, in meters, of a ball x seconds after the ball was launched upward from a platform. Which statement is the best interpretation of the marked point (1.0, 4.8) in this context?',
    imageUrl: picv18,
    options: [`1.0 second after being launched, the ball's height above ground is 4.8 meters.`, `4.8 seconds after being launched, the ball's height above ground is 1.0 meter.`, `The ball was launched from an initial height of 1.0 meter with an initial velocity of 4.8 meters per second.`, `The ball was launched from an initial height of 4.8 meters with an initial velocity of 1.0 meter per second.`],
    correctAnswerIndex: 0,
    explanation: `Choice A is correct. The graph depicts the height of a ball over time, where the x-axis represents time in seconds and the y-axis represents height in meters. Given the marked point (1.0, 4.8), the x-coordinate of 1.00 indicates that one second has elapsed since the ball was launched from its platform. Correspondingly, the y-coordinate of 4.80 shows that the ball's height above the ground at that exact moment is 4.80 meters. Choices B, C, and D are incorrect because they likely involve a misinterpretation of these coordinates or the relationship between the two variables.`
  },

  {
    id: 'av11',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Hard',
    questionText: 'An auditorium has seats for 1,800 people. Tickets to attend a show at the auditorium currently cost $4.00. For each $100 increase to the ticket price, 100 fewer tickets will be sold. This situation can be modeled by the equation y = -100x^2 + 1,4000x + 7,200, where x represents the increase in ticket price, in dollars, and y represents the revenue, in dollars, from ticket sales. If this equation is graphed in the xy-plane, at what value of x is the maximum of the graph?',
    options: [`-3,249`, `-57`, `57`, `3,249`],
    correctAnswerIndex: 1,
  },

  {
    id: 'av12',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Hard',
    questionText: 'The function f(x) = 9,000(0.66)^x models the number of advertisements a company sent to its clients each year, where x represents the number of years since 1997, and 0 <= x <= 5. If y = f(x) is graphed in the xy-plane, which of the following is the best interpretation of the y-intercept of the graph in this context?',
    options: [`The minimum estimated number of advertisements the company sent to its clients during the 5 years was 1,708.`, `The minimum estimated number of advertisements the company sent to its clients during the 5 years was 9,000.`, `The estimated number of advertisements the company sent to its clients in 1997 was 1,708.`, `The estimated number of advertisements the company sent to its clients in 1997 was 9,000.`],
    correctAnswerIndex: 3,
  },

  {
    id: 'av13',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Easy',
    questionText: 'Which expression is equivalent to (9x^3 + 5x + 7) + (6x^3 + 5x^2 - 5)?',
    options: [`15x^6 + 5x^2 - 5x - 35`, `15x^3 + 10x^2 + 2`, `15x^6 + 5x^2 + 5x + 2`, `15x^3 + 5x^2 + 5x + 2`],
    correctAnswerIndex: 3,
  },

  {
    id: 'av14',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Hard',
    questionText: 'The first term of a sequence is 9. Each term after the first is 4 times the preceding term. If w represents the nth term of the sequence, which equation gives w in terms of n?',
    options: [`w = 4(9^n)`, `w = 4(9^(n-1))`, `9(4^n)`, `9(4^(n-1))`],
    correctAnswerIndex: 3,
  },

  {
    id: 'av15',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Medium',
    questionText: 'A physics class is planning an experiment about a toy rocket. The equation y = -16(x - 5.6)^2 + 502 gives the estimated height y, in feet, of the toy rocket x seconds after it is launched into the air. Which of the following is the best interpretation of the vertex of the graph of the equation in the xy-plane?',
    options: [`This toy rocket reaches an estimated maximum height of 502 feet 16 seconds after it is launched into the air.`, `This toy rocket reaches an estimated maximum height of 502 feet 5.6 seconds after it is launched into the air.`, `This toy rocket reaches an estimated maximum height of 16 feet 502 seconds after it is launched into the air.`, `This toy rocket reaches an estimated maximum height of 5.6 feet 502 seconds after it is launched into the air.`],
    correctAnswerIndex: 1,
  },

  {
    id: 'av16',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Easy',
    questionText: 'What is the y-intercept of the graph shown?',
    imageUrl: picv19,
    options: [`(-1, -9)`, `(0, -5)`, `(0, -4)`, `(0, 0)`],
    correctAnswerIndex: 1,
    explanation: `Choice B is correct. By definition, the y-intercept of a graph in the xy-plane is the point where the value of x is 0. For the graph shown, when x = 0, the corresponding value of y is -5, making the y-intercept (0, -5). Choices C and D are incorrect as they identify y-intercepts at y = -4 and y = 0, respectively, rather than the correct value of -5. Choice A is also incorrect and likely results from a conceptual error.`,
  },

  {
    id: 'av17',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Medium',
    questionText: 'which of the following is equivalent to the expression x^4 - x^2 - 6?',
    options: [`(x^2 + 1)(x^2 - 6)`, `(x^2 + 2)(x^2 - 3)`, `(x^2 + 3)(x^2 - 2)`, `(x^2 + 6)(x^2 - 1)`],
    correctAnswerIndex: 1,
  },

  {
    id: 'av18',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Medium',
    questionText: 'Which of the following is equivalent to the expression (2x + 5)^2 - (x - 2) + 2(x + 3)?',
    options: [`4x^2 + 21x + 33`, `4x^2 + 21x + 29`, `4x^2 + x + 29`, `4x^2 + x + 33`],
    correctAnswerIndex: 0,
  },

  {
    id: 'av19',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Hard',
    questionText: 'The equation (ax + 3)(5x^2 - bx + 4) = 20x^3 - 9x^2 - 2x +12 is true for all x, where a and b are constants. What is the value of ab ?',
    options: [`18`, `20`, `24`, `40`],
    correctAnswerIndex: 2,
  },

  {
    id: 'av20',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Medium',
    questionText: 'How many distinct real solutions does the equation x^2 - 12x + 27 = 0 have?',
    options: [`Exactly two`, `Exactly one`, `Zero`, `Infinitely many`],
    correctAnswerIndex: 0,
  },

  {
    id: 'av21',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Hard',
    questionText: 'The function f(x) = (x - 44)(x - 46) is defined by the given equation. For what value of x does f(x) reach its minimum?',
    options: [`46`, `45`, `44`, `-1`],
    correctAnswerIndex: 1,
  },

  {
    id: 'av22',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Easy',
    questionText: `An entomologist recommended a program to reduce a certain invasive beetle population in an area. The function f(x) = 4,000(0.75)^x estimates this beetle species' population x years after 2012, where x <= 7. Which of the following is the best interpretation of 4,000 in this context?`,
    options: [`The estimated initial beetle population for this species and area in 2012`, `The estimated beetle population for this species and area 7 years after 2012`, `The estimated percent decrease in the beetle population for this species and area each year after 2012`, `The estimated percent decrease in the beetle population for this species and area every 7 years after 2012`],
    correctAnswerIndex: 0,
  },

  {
    id: 'av23',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Easy',
    questionText: 'What is the positive solution to the equation |x + 45| = 48?',
    options: [`3`, `48`, `93`, `96`],
    correctAnswerIndex: 0,
  },

  {
    id: 'av24',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Easy',
    questionText: 'The function P(t) = 24.8(1.036)^t gives the predicted population, in millions, of a certain country for the period from 1984 to 2018, where t is the number of years after 1984. According to the model, what is the best interpretation of the statement “P(8) is approximately equal to 32.91”?',
    options: [`In 1984, the predicted population of this country was approximately 8 million.`, `In 1984, the predicted population of this country was approximately 32.91 million.`, `8 years after 1984, the predicted population of this country was approximately 32.91 million.`, `32.91 years after 1984, the predicted population of this country was approximately 8 million.`],
    correctAnswerIndex: 2,
  },

  {
    id: 'av25',
    subject: 'math',
    domainId: 'advanced_math',
    difficulty: 'Easy',
    questionText: `A company has a newsletter. In January 2018, there were 1,300 customers subscribed to the newsletter. For the next 24 months after January 2018, the total number of customers subscribed to the newsletter each month was 7% greater than the total number subscribed the previous month. Which equation gives the total number of customers, c, subscribed to the company's newsletter m months after January 2018, where m <= 24?`,
    options: [`c = 1,300(0.07)^m`, `c = 1,300(1.07)^m`, `c = 1,300(1.7)^m`, `c = 1,300(7)^m`],
    correctAnswerIndex: 1,
  },

  {
    id: 'da1',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Easy',
    questionText: `Each face of a fair 14-sided die is labeled with a number from 1 through 14, with a different number appearing on each face. If the die is rolled one time, what is the probability of rolling a 2?`,
    options: [`1/14`, `2/14`, `12/14`, `13/14`],
    correctAnswerIndex: 0,
  },

  {
    id: 'da2',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Easy',
    questionText: `There are 55 students in Spanish club. A sample of the Spanish club students was selected at random and asked whether they intend to enroll in a new study program. Of those surveyed, 20% responded that they intend to enroll in the study program. Based on this survey, which of the following is the best estimate of the total number of Spanish club students who intend to enroll in the study program?`,
    options: [`11`, `20`, `44`, `55`],
    correctAnswerIndex: 0,
  },

  {
    id: 'da3',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Easy',
    questionText: `Jennifer bought a box of Crunchy Grain cereal. The nutrition facts on the box state that a serving size of the cereal is 3/4 cup and provides 210 calories, 50 of which are calories from fat. In addition, each serving of the cereal provides 180 milligrams of potassium, which is 5% of the daily allowance for adults. If p percent of an adult’s daily allowance of potassium is provided by x servings of Crunchy Grain cereal per day, which of the following expresses p in terms of x ?`,
    options: [`p = 0.5x`, `p = 5x`, `p = (0.5)^x`, `(1.5)^x`],
    correctAnswerIndex: 1,
  },

  {
    id: 'da4',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Hard',
    questionText: `The expression 0.35x represents the result of decreasing a positive quantity x by what percent?`,
    options: [`3.5%`, `35%`, `6.5%`, `65%`],
    correctAnswerIndex: 3,
  },

  {
    id: 'da5',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Medium',
    questionText: `What is the median of the data set 4, 10, 18, 4, 4, 5, 6, 5?`,
    options: [`4`, `5`, `7`, `14`],
    correctAnswerIndex: 1,
  },

  {
    id: 'da6',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Medium',
    questionText: `The International Space Station orbits Earth at an average speed of 4.76 miles per second. What is the space station’s average speed in miles per hour?`,
    options: [`285.6`, `571.2`, `856.8`, `17,136.0`],
    correctAnswerIndex: 3,
  },

  {
    id: 'da7',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Easy',
    questionText: `For a person m miles from a flash of lightning, the length of the time interval from the moment the person sees the lightning to the moment the person hears the thunder is k seconds. The ratio of m to k can be estimated to be 1 to 5. According to this estimate, the person is how many miles from a flash of lightning if the time interval is 25 seconds?`,
    options: [`10`, `9`, `6`, `5`],
    correctAnswerIndex: 3,
  },

  {
    id: 'da8',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Medium',
    questionText: `The population density of Iceland, in people per square kilometer of land area, increased from 2.5 in 1990 to 3.3 in 2014. During this time period, the land area of Iceland was 100,250 square kilometers. By how many people did Iceland’s population increase from 1990 to 2014?`,
    options: [`330,825`, `132,330`, `125,312`, `80,200`],
    correctAnswerIndex: 3,
  },

  {
    id: 'da9',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Easy',
    questionText: `What is the median of the seven data values 2, 2, 2, 3, 4, 4, 11?`,
    options: [`2`, `3`, `4`, `9`],
    correctAnswerIndex: 1,
  },

  {
    id: 'da10',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Hard',
    questionText: `A sample of 40 fourth-grade students was selected at random from a certain school. The 40 students completed a survey about the morning announcements, and 32 thought the announcements were helpful. Which of the following is the largest population to which the results of the survey can be applied?`,
    options: [`The 40 students who were surveyed`, `All fourth-grade students at the school`, `All students at the school  `, `All fourth-grade students in the county in which the school is located`],
    correctAnswerIndex: 1,
  },

  {
    id: 'da11',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Medium',
    questionText: `Residents of a town were surveyed to determine whether they are satisfied with the concession stand at the local park. A random sample of 200 residents was selected. All 200 responded, and 87% said they are satisfied. Based on this information, which of the following statements must be true?

I. Of all the town residents, 87% would say they are satisfied with the concession stand at the local park.
II. If another random sample of 200 residents were surveyed, 87% would say they are satisfied.`,
    options: [`Neither`, `I only`, `II only`, `I and II`],
    correctAnswerIndex: 0,
  },

  {
    id: 'da12',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Easy',
    questionText: `A group of monarch butterflies migrated from Chicago, Illinois, to Michoacán, Mexico, flying a total of 2,100 miles. It took a single butterfly in the group 120 days to travel this route one way. On average, how many miles did the butterfly travel per day?`,
    options: [`0.057`, `0.729`, `17.5`, `24`],
    correctAnswerIndex: 2,
  },

  {
    id: 'da13',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Easy',
    questionText: `Of 300,000 paper clips, 234,000 are size large. What percentage of the paper clips are size large?`,
    options: [`22%`, `33%`, `66%`, `78%`],
    correctAnswerIndex: 3,
  },

  {
    id: 'da14',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Hard',
    questionText: `The positive number a is 2,241% of the sum of the positive numbers b and c, and b is of c. What percent of b is a?`,
    options: [`23.24%`, `49.41%`, `2,324%`, `4,941%`],
    correctAnswerIndex: 3,
  },

  {
    id: 'da15',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Easy',
    questionText: `In a box of pens, the ratio of black pens to red pens is 8 to 1. There are 40 black pens in the box. How many red pens are in the box?`,
    options: [`5`, `8`, `40`, `320`],
    correctAnswerIndex: 0,
  },

  {
    id: 'da16',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Easy',
    questionText: `A city has 50 city council members. A reporter polled a random sample of 20 city council members and found that 6 of those polled supported a specific bill. Based on the sample, which of the following is the best estimate of the number of city council members in the city who support the bill?`,
    options: [`6`, `9`, `15`, `30`],
    correctAnswerIndex: 2,
  },

  {
    id: 'da17',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Easy',
    questionText: `The population density of Worthington is 290 people per square mile. Worthington has a population of 92,800 people. What is the area, in square miles, of Worthington?`,
    options: [`102,400`, `93,090`, `320`, `32`],
    correctAnswerIndex: 2,
  },

  {
    id: 'da18',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Easy',
    questionText: `Data set A: 72, 73, 73, 76, 76 and data set B: 61, 64, 74, 85, x each contain 5 numbers. If the mean of data set A is equal to the mean of data set B, what is the value of x ?`,
    options: [`77`, `85`, `86`, `95`],
    correctAnswerIndex: 1,
  },

  {
    id: 'da19',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Easy',
    questionText: `A wind turbine completes 900 revolutions in 50 minutes. At this rate, how many revolutions per minute does this turbine complete?`,
    options: [`18`, `850`, `950`, `1.400`],
    correctAnswerIndex: 0,
  },

  {
    id: 'da20',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Easy',
    questionText: `The number of raccoons in a 131-square-mile area is estimated to be 2,358. What is the estimated population density, in raccoons per square mile, of this area?`,
    options: [`18`, `131`, `149`, `2,376`],
    correctAnswerIndex: 0,
  },

  {
    id: 'da21',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Medium',
    questionText: `A study was done on the weights of different types of fish in a pond. A random sample of fish were caught and marked in order to ensure that none were weighed more than once. The sample contained 150 largemouth bass, of which 30% weighed more than 2 pounds. Which of the following conclusions is best supported by the sample data?`,
    options: [`The majority of all fish in the pond weigh less than 2 pounds.`, `The average weight of all fish in the pond is approximately 2 pounds.`, `Approximately 30% of all fish in the pond weigh more than 2 pounds.`, `Approximately 30% of all largemouth bass in the pond weigh more than 2 pounds.`],
    correctAnswerIndex: 3,
  },

  {
    id: 'da22',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Medium',
    questionText: `In a bag, there are 7 red, 4 white, 33 blue, and 33 yellow cubes. If one of these cubes is selected at random, what is the probability of selecting a cube that is neither blue nor yellow?`,
    options: [`6/7`, `7/11`, `1/3`, `1/7`],
    correctAnswerIndex: 3,
  },

  {
    id: 'da23',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Easy',
    questionText: `For a school fund-raiser, 10 students sold a total of 90 boxes of cookies. Which of the following can be calculated from this information?`,
    options: [`The average number of boxes sold per student`, `The median number of boxes sold per student`, `The greatest number of boxes sold by one student`, `The least number of boxes sold by one student`],
    correctAnswerIndex: 0,
  },

  {
    id: 'da24',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Hard',
    questionText: `The positive number a is 230% of the number b, and a is 60% of the number c. If c is p% of b, which of the following is closest to the value of p?`,
    options: [`138`, `217`, `283`, `383`],
    correctAnswerIndex: 3,
  },

  {
    id: 'da25',
    subject: 'math',
    domainId: 'data_analysis',
    difficulty: 'Medium',
    passage: `15, 14, 18, 17, x`,
    questionText: `The mean and the median of the five numbers above are equal. Which of the following is NOT a possible value of x ?`,
    options: [`6`, `11`, `16`, `21`],
    correctAnswerIndex: 0,
  },

  {
    id: 'gt1',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Easy',
    questionText: `Triangles EFG and JKL are congruent, where E, F, and G correspond to J, K, and L, respectively. The measure of angle E is 45 and the measure of angle F is 20. What is the measure of angle J?`,
    options: [`20`, `40`, `135`, `160`],
    correctAnswerIndex: 1,
  },

  {
    id: 'gt2',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Medium',
    questionText: `Triangle FGH is similar to triangle JKL, where angle F corresponds to angle J and angles G and K are right angles. If sin(F) = 308/317, what is the value of sin(J)?`,
    options: [`75/317`, `308/317`, `317/308`, `317/75`],
    correctAnswerIndex: 1,
  },

  {
    id: 'gt3',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Medium',
    questionText: `In the figure, line m is parallel to line n. What is the value of w?`,
    imageUrl: picv20,
    options: [`17`, `30`, `70`, `170`],
    correctAnswerIndex: 3,
    explanation: `Choice D is correct because lines m and n are parallel, and line t acts as a transversal intersecting both. The angles marked 170 degrees and w degrees are corresponding angles because they are on the same side of the transversal in the same relative position. Since corresponding angles formed by parallel lines are congruent, they must have equal measures, meaning w equals 170.`,
  },

  {
    id: 'gt4',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Medium',
    questionText: `A right circular cylinder has a volume of 45 pi. If the height of the cylinder is 5, what is the radius of the cylinder?`,
    options: [`3`, `4.5`, `9`, `40`],
    correctAnswerIndex: 0,
  },

  {
    id: 'gt5',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Easy',
    questionText: `What is the area, in square inches, of a rectangle with a length of 7 inches and a width of 6 inches? `,
    options: [`13`, `20`, `42`, `84`],
    correctAnswerIndex: 2,
  },

  {
    id: 'gt6',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Easy',
    questionText: `The side length of a square is 55 centimeters (cm). What is the area, in cm^2, of the square?`,
    options: [`110`, `220`, `3,025`, `12,100`],
    correctAnswerIndex: 2,
  },

  {
    id: 'gt7',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Easy',
    questionText: `Triangle R has an area of 80 square centimeters (cm^2). Square S has side lengths of 4 cm. What is the total area of triangle R and square S, in cm^2?`,
    options: [`42`, `44`, `84`, `96`],
    correctAnswerIndex: 3,
  },

  {
    id: 'gt8',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Hard',
    questionText: `In triangle XYZ, angle Z is a right angle and the length of YZ is 24 units. If tan X = 12/35, what is the perimeter, in units, of triangle XYZ?`,
    options: [`188`, `168`, `84`, `71`],
    correctAnswerIndex: 1,
  },

  {
    id: 'gt9',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Medium',
    questionText: `Triangle XYZ shown is a right triangle. Which of the following has the same value as sin X?`,
    imageUrl: picv21,
    options: [`tan X`, `tan Y`, `cos X`, `cos Y`],
    correctAnswerIndex: 3,
    explanation: `Choice D is correct because the sine of an angle is equal to the cosine of its complementary angle. In the provided triangle, angle Z is a right angle, which makes angles X and Y complementary. Consequently, cos Y must have the same value as sin X.`,
  },

  {
    id: 'gt10',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Medium',
    questionText: `Square X has a side length of 12 centimeters. The perimeter of square Y is 2 times the perimeter of square X. What is the length, in centimeters, of one side of square Y?`,
    options: [`6`, `10`, `14`, `24`],
    correctAnswerIndex: 3,
  },

  {
    id: 'gt11',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Hard',
    questionText: `The circumference of the base of a right circular cylinder is 20 pi meters, and the height of the cylinder is 6 meters. What is the volume, in cubic meters, of the cylinder?`,
    options: [`60 pi`, `120 pi`, `600 pi`, `2,400 pi`],
    correctAnswerIndex: 2,
  },

  {
    id: 'gt12',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Easy',
    questionText: `The area of a square is 64 square inches. What is the side length, in inches, of this square?`,
    options: [`8`, `16`, `64`, `128`],
    correctAnswerIndex: 0,
  },

  {
    id: 'gt13',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Medium',
    questionText: `A circle has a radius of 43 meters. What is the area, in square meters, of the circle?`,
    options: [`43/2 pi`, `43 pi`, `86 pi`, `1,849 pi`],
    correctAnswerIndex: 3,
  },

  {
    id: 'gt14',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Hard',
    questionText: `A circle in the xy-plane has its center at (-1, 1). Line t is tangent to this circle at the point (5, -4). Which of the following points also lies on line t?`,
    options: [`(0, 6/5)`, `(4, 7)`, `(10, 2)`, `(11, 1)`],
    correctAnswerIndex: 2,
  },

  {
    id: 'gt15',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Hard',
    questionText: `A cube has an edge length of 68 inches. A solid sphere with a radius of 34 inches is inside the cube, such that the sphere touches the center of each face of the cube. To the nearest cubic inch, what is the volume of the space in the cube not taken up by the sphere?`,
    options: [`149,796`, `164,500`, `190,955`, `310,800`],
    correctAnswerIndex: 0,
  },

  {
    id: 'gt16',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Hard',
    questionText: `In triangle ABC, the measure of angle B is 90 and BD is an altitude of the triangle. The length of AB is 15 and the length of AC is 23 greater than the length of AB. What is the value of BC/BD?`,
    options: [`15/38`, `15/23`, `23/15`, `38/15`],
    correctAnswerIndex: 3,
  },

  {
    id: 'gt17',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Easy',
    questionText: `In triangle XYZ, the measure of X is 24 and the measure of Y is 98. What is the measure of Z?`,
    options: [`58`, `74`, `122`, `212`],
    correctAnswerIndex: 0,
  },

  {
    id: 'gt18',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Medium',
    questionText: `Two nearby trees are perpendicular to the ground, which is flat. One of these trees is 10 feet tall and has a shadow that is 5 feet long. At the same time, the shadow of the other tree is 2 feet long. How tall, in feet, is the other tree?`,
    options: [`3`, `4`, `8`, `27`],
    correctAnswerIndex: 1,
  },

  {
    id: 'gt19',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Medium',
    questionText: `Triangle ABC is similar to triangle XYZ, where A, B, and C correspond to X, Y, and Z, respectively. In triangle ABC, the length of AB is 170 and the length of BC is 850. In triangle XYZ, the length of YZ is 60. What is the length of XY?`,
    options: [`204`, `182`, `60`, `12`],
    correctAnswerIndex: 3,
  },

  {
    id: 'gt20',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Hard',
    questionText: `In triangles ABC and DEF, angles B and E each have measure 27 and angles C and F each have measure 41. Which additional piece of information is sufficient to determine whether triangle ABC is congruent to triangle DEF?`,
    options: [`The measure of angle A`, `The length of side AB`, `The lengths of sides BC and EF`, `No additional information is necessary.`],
    correctAnswerIndex: 2,
  },

  {
    id: 'gt21',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Hard',
    questionText: `In triangles LMN and RST, angles L and R each have measure 60, LN = 10, and RT = 30. Which additional piece of information is sufficient to prove that triangle LMN is similar to triangle RST?`,
    options: [`MN = 7 and ST = 7`, `MN = 7 and ST = 21`, `The measures of angles M and S are 70 and 60, respectively.`, `The measures of angles M and T are 70 and 50, respectively.`],
    correctAnswerIndex: 3,
  },

  {
    id: 'gt22',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Medium',
    questionText: `A cube has an edge length of 41 inches. What is the volume, in cubic inches, of the cube?`,
    options: [`164`, `1,681`, `10,086`, `68,921`],
    correctAnswerIndex: 3,
  },

  {
    id: 'gt23',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Medium',
    questionText: `A cylinder has a diameter of 8 inches and a height of 12 inches. What is the volume, in cubic inches, of the cylinder?`,
    options: [`16 pi`, `96 pi`, `192 pi`, `768 pi`],
    correctAnswerIndex: 2,
  },

  {
    id: 'gt24',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Medium',
    questionText: `Square A has side lengths that are 246 times the side lengths of square B. The area of square A is k times the area of square B. What is the value of k?`,
    options: [`60,516`, `492`, `246`, `123`],
    correctAnswerIndex: 0,
  },

  {
    id: 'gt25',
    subject: 'math',
    domainId: 'Geometry and Trigonometry',
    difficulty: 'Medium',
    questionText: `A manufacturing company produces two sizes of cylindrical containers that each have a height of 50 centimeters. The radius of container A is 16 centimeters, and the radius of container B is 25% longer than the radius of container A. What is the volume, in cubic centimeters, of container B?`,
    options: [`16,000 pi`, `20,000 pi`, `25,000 pi`, `31,250 pi`],
    correctAnswerIndex: 1,
  },

  // --- VERBAL QUESTIONS ---

  {
    id: 'v1',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: ` Marta Coll and colleagues’ 2010 Mediterranean Sea biodiversity census reported approximately 17,000 species, nearly double the number reported in Carlo Bianchi and Carla Morri’s 2000 census—a difference only partly attributable to the description of new invertebrate species in the interim. Another factor is that the morphological variability of microorganisms is poorly understood compared to that of vertebrates, invertebrates, plants, and algae, creating uncertainty about how to evaluate microorganisms as species. Researchers’ decisions on such matters therefore can be highly consequential. Indeed, the two censuses reported similar counts of vertebrate, plant, and algal species, suggesting that ______`,
    questionText: 'Which choice most logically completes the text?',
    options: [
      'Coll and colleagues reported a much higher number of species than Bianchi and Morri did largely due to the inclusion of invertebrate species that had not been described at the time of Bianchi and Morri’s census.',
      'some differences observed in microorganisms may have been treated as variations within species by Bianchi and Morri but treated as indicative of distinct species by Coll and colleagues.',
      'Bianchi and Morri may have been less sensitive to the degree of morphological variation displayed within a typical species of microorganism than Coll and colleagues were.',
      'the absence of clarity regarding how to differentiate among species of microorganisms may have resulted in Coll and colleagues underestimating the number of microorganism species.'
    ],

    correctAnswerIndex: 1,
  },

  {
    id: 'v2',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `A common assumption among art historians is that the invention of photography in the mid-nineteenth century displaced the painted portrait in the public consciousness. The diminishing popularity of the portrait miniature, which coincided with the rise of photography, seems to support this claim. However, photography’s impact on the portrait miniature may be overstated. Although records from art exhibitions in the Netherlands from 1820 to 1892 show a decrease in the number of both full-sized and miniature portraits submitted, this trend was established before the invention of photography.`,
    questionText: 'Based on the text, what can be concluded about the diminishing popularity of the portrait miniature in the nineteenth century?',
    options: [
      'Factors other than the rise of photography may be more directly responsible for the portrait miniature’s decline.',
      'Although portrait miniatures became less common than photographs, they were widely regarded as having more artistic merit.',
      'The popularity of the portrait miniature likely persisted for longer than art historians have assumed.',
      'As demand for portrait miniatures decreased, portrait artists likely shifted their creative focus to photography. '
    ],

    correctAnswerIndex: 0,
  },

  {
    id: 'v3',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `Believing that living in an impractical space can heighten awareness and even improve health, conceptual artists Madeline Gins and Shusaku Arakawa designed an apartment building in Japan to be more fanciful than functional. A kitchen counter is chest-high on one side and knee-high on the other; a ceiling has a door to nowhere. The effect is disorienting but invigorating: after four years there, filmmaker Nobu Yamaoka reported significant health benefits.`,
    questionText: 'Which choice best states the main idea of the text?',
    options: [
      'Although inhabiting a home surrounded by fanciful features such as those designed by Gins and Arakawa can be rejuvenating, it is unsustainable.',
      'Designing disorienting spaces like those in the Gins and Arakawa building is the most effective way to create a physically stimulating environment. ',
      'As a filmmaker, Yamaoka has long supported the designs of conceptual artists such as Gins and Arakawa.',
      'Although impractical, the design of the apartment building by Gins and Arakawa may improve the well-being of the building’s residents. '
    ],

    correctAnswerIndex: 3,
  },

  {
    id: 'v4',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `In her 2021 article “Throwaway History: Towards a Historiography of Ephemera,” scholar Anne Garner discusses John Johnson (1882–1956), a devoted collector of items intended to be discarded, including bus tickets and campaign pamphlets. Johnson recognized that scholarly institutions considered his expansive collection of ephemera to be worthless—indeed, it wasn’t until 1968, after Johnson’s death, that Oxford University’s Bodleian Library acquired the collection, having grasped the items’ potential value to historians and other researchers. Hence, the example of Johnson serves to ______`,
    questionText: 'Which choice most logically completes the text?',
    options: [
      'demonstrate the difficulties faced by contemporary historians in conducting research at the Bodleian Library without access to ephemera.',
      'represent the challenge of incorporating examples of ephemera into the collections of libraries and other scholarly institutions.',
      'lend support to arguments by historians and other researchers who continue to assert that ephemera holds no value for scholars.',
      'illustrate both the relatively low scholarly regard in which ephemera was once held and the later recognition of ephemera’s possible utility.'
    ],

    correctAnswerIndex: 3,
  },

  {
    id: 'v5',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: `One recognized social norm of gift giving is that the time spent obtaining a gift will be viewed as a reflection of the gift’s thoughtfulness. Marketing experts Farnoush Reshadi, Julian Givi, and Gopal Das addressed this view in their studies of norms specifically surrounding the giving of gift cards, noting that while recipients tend to view digital gift cards (which can be purchased online from anywhere and often can be redeemed online as well) as superior to physical gift cards (which sometimes must be purchased in person and may only be redeemable in person) in terms of usage, 94.8 percent of participants surveyed indicated that it is more socially acceptable to give a physical gift card to a recipient. This finding suggests that ______`,
    questionText: 'Which choice most logically completes the text?',
    options: [
      'gift givers likely overestimate the amount of effort required to use digital gift cards and thus mistakenly assume gift recipients will view them as less desirable than physical gift cards.',
      'physical gift cards are likely preferred by gift recipients because the tangible nature of those cards offers a greater psychological sense of ownership than digital gift cards do.',
      'physical gift cards are likely less desirable to gift recipients than digital gift cards are because of the perception that physical gift cards require unnecessary effort to obtain.',
      'gift givers likely perceive digital gift cards as requiring relatively low effort to obtain and thus wrongly assume gift recipients will appreciate them less than they do physical gift cards.'
    ],

    correctAnswerIndex: 3,
  },
  {
    id: 'v6',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    imageUrl: picv1,
    passage: `In the United States, firms often seek incentives from municipal governments to expand to those municipalities. A team of political scientists hypothesized that municipalities are much more likely to respond to firms and offer incentives if expansions can be announced in time to benefit local elected officials than if they can’t. The team contacted officials in thousands of municipalities, inquiring about incentives for a firm looking to expand and indicating that the firm would announce its expansion on a date either just before or just after the next election. `,
    questionText: 'Which choice best describes data from the graph that weaken the team’s hypothesis?',
    options: [
      'A large majority of the municipalities that received an inquiry mentioning plans for an announcement before the next election didn’t respond to the inquiry.',
      'The proportion of municipalities that responded to the inquiry or offered incentives didn’t substantially differ across the announcement timing conditions.',
      'Only around half the municipalities that responded to inquiries mentioning plans for an announcement before the next election offered incentives.',
      'Of the municipalities that received an inquiry mentioning plans for an announcement date after the next election, more than 1,200 didn’t respond and only around 100 offered incentives.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Choice B is the best answer. The lighter bars show what happened when the announcement was to come before the election, and the darker bars show what happened when the announcement was to come after the election. For all three of the outcomes, the light and dark bars are virtually the same, demonstrating that the announcement timing didn’t actually make a difference. Choice A is incorrect. This accurately describes some data from the graph, but it doesn’t weaken the hypothesis. It doesn’t include the “announcement after election” data for comparison. Choice C is incorrect. This accurately describes some data from the graph, but it doesn’t weaken the hypothesis. It doesn’t include the “announcement after election” data for comparison. Choice D is incorrect. This accurately describes some data from the graph, but it doesn’t weaken the hypothesis. It doesn’t include the “announcement before election” data for comparison.',
  },

  {
    id: 'v7',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: `The most recent iteration of the immersive theater experience Sleep No More, which premiered in New York City in 2011, transforms its performance space—a five-story warehouse—into a 1930s-era hotel. Audience members, who wander through the labyrinthine venue at their own pace and follow the actors as they play out simultaneous, interweaving narrative loops, confront the impossibility of experiencing the production in its entirety. The play’s refusal of narrative coherence thus hinges on the sense of spatial fragmentation that the venue’s immense and intricate layout generates.`,
    questionText: 'What does the text most strongly suggest about Sleep No More’s use of its performance space?',
    options: [
      'The choice of a New York City venue likely enabled the play’s creators to experiment with the use of theatrical space in a way that venues from earlier productions could not.',
      'Audience members likely find the experience of the play disappointing because they generally cannot make their way through the entire venue.',
      'The production’s dependence on a particular performance environment would likely make it difficult to reproduce exactly in a different theatrical space.',
      'Audience members who navigate the space according to a recommended itinerary will likely have a better grasp of the play’s narrative than audience members who depart from that itinerary.'
    ],
    correctAnswerIndex: 2,
  },

  {
    id: 'v8',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `During the World War II era, some Mexican American women adopted a striking new look called pachuca style. They wore altered men’s jackets or zoot suits (wide-legged, long-coated suits) and dramatic makeup, and they combed their hair into high, rounded shapes. Some people criticized pachuca style, saying it was dangerous and women should dress traditionally. But historians see things differently. They see pachuca style as a form of rebellion against the era’s rigid social expectations for women. They say that it showed a desire for self-expression and freedom on the part of women who adopted the style.`,
    questionText: 'According to the text, how do historians view pachuca style?',
    options: [
      'They think that pachuca style was such a popular trend that it continues to influence fashion in the United States to the present day.',
      'They think that pachuca style was a way for some Mexican American women to express themselves and resist strict social expectations.',
      'They think that pachuca style was celebrated because it enabled some Mexican American women to show their support for the United States during World War II.',
      'They think that pachuca style was similar to other fashion trends that different groups of women adopted in the same period.'
    ],
    correctAnswerIndex: 1,
  },

  {
    id: 'v9',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `Utah is home to Pando, a colony of about 47,000 quaking aspen trees that all share a single root system. Pando is one of the largest single organisms by mass on Earth, but ecologists are worried that its growth is declining in part because of grazing by animals. The ecologists say that strong fences could prevent deer from eating young trees and help Pando start thriving again.`,
    questionText: 'According to the text, why are ecologists worried about Pando?',
    options: [
      'It isn’t growing at the same rate it used to.',
      'It isn’t producing young trees anymore.',
      'It can’t grow into new areas because it is blocked by fences.',
      'Its root system can’t support many more new trees.'
    ],
    correctAnswerIndex: 0,
  },

  {
    id: 'v10',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `Although many transposons, DNA sequences that move within an organism’s genome through shuffling or duplication, have become corrupted and inactive over time, those from the long interspersed nuclear elements (LINE) family appear to remain active in the genomes of some species. In humans, they are functionally important within the hippocampus, a brain structure that supports complex cognitive processes. When the results of molecular analysis of two species of octopus—an animal known for its intelligence—were announced in 2022, the confirmation of a LINE transposon in Octopus vulgaris and Octopus bimaculoides genomes prompted researchers to hypothesize that that transposon family is tied to a species’ capacity for advanced cognition.`,
    questionText: 'Which finding, if true, would most directly support the researchers’ hypothesis?',
    options: [
      'The LINE transposon in O. vulgaris and O. bimaculoides genomes is active in an octopus brain structure that functions similarly to the human hippocampus.',
      'The human genome contains multiple transposons from the LINE family that are all primarily active in the hippocampus.',
      'A consistent number of copies of LINE transposons is present across the genomes of most octopus species, with few known corruptions.',
      'O. vulgaris and O. bimaculoides have smaller brains than humans do relative to body size, but their genomes contain sequences from a wider variety of transposon families.'
    ],
    correctAnswerIndex: 0,
  },

  {
    id: 'v11',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: `To understand how temperature change affects microorganism-mediated cycling of soil nutrients in alpine ecosystems, Eva Kaštovská et al. collected plant-soil cores in the Tatra Mountains at elevations around 2,100 meters and transplanted them to elevations of 1,700–1,800 meters, where the mean air temperature was warmer by 2°C. Microorganism-mediated nutrient cycling was accelerated in the transplanted cores; crucially, microorganism community composition was unchanged, allowing Kaštovská et al. to attribute the acceleration to temperature-induced increases in microorganism activity.`,
    questionText: 'It can most reasonably be inferred from the text that the finding about the microorganism community composition was important for which reason?',
    options: [
      'It provided preliminary evidence that microorganism-mediated nutrient cycling was accelerated in the transplanted cores.',
      'It suggested that temperature-induced changes in microorganism activity may be occurring at increasingly high elevations.',
      'It ruled out a potential alternative explanation for the acceleration in microorganism-mediated nutrient cycling.',
      'It clarified that microorganism activity levels in the plant-soil cores varied depending on which microorganisms comprised the community. '
    ],
    correctAnswerIndex: 2,
  },

  {
    id: 'v12',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: `Jean-Bernard Caron and colleagues recently discovered a cache of jellyfish fossils in the Burgess Shale, a site in the Canadian Rockies that is rich in fossils from the Cambrian period (over 500 million years ago). Caron and colleagues claim that these are the oldest jellyfish fossils ever discovered. In the past twenty years, two sites in China and the United States have yielded fossils of a similar age that some experts believe are most likely jellyfish due to their shapes and the appearance of projecting tentacles. But Caron and colleagues argue that the apparent tentacles are in fact the comb rows of ctenophores, gelatinous animals that are only distantly related to jellyfish.`,
    questionText: 'Which statement, if true, would most directly weaken the claim by Caron and colleagues about the fossils found in China and the United States?',
    options: [
      'Sites in the Canadian Rockies from later periods than the Cambrian period have yielded fossils that have been conclusively identified as ctenophore fossils.',
      'The fossils found in China and the United States are so poorly preserved that though they cannot be conclusively identified as jellyfish, they cannot be conclusively identified as ctenophores either.',
      'While ctenophore fossils have been discovered in China and the United States, they have never been discovered in the Burgess Shale.',
      'The fossils discovered by Caron and colleagues in the Burgess Shale were better preserved than the fossils discovered by other researchers in China and the United States.'
    ],
    correctAnswerIndex: 1,
  },

  {
    id: 'v13',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Easy',
    passage: `The following text is from Jane Austen’s 1811 novel Sense and Sensibility. Elinor lives with her younger sisters and her mother, Mrs. Dashwood.

Elinor, this eldest daughter, whose advice was so effectual, possessed a strength of understanding, and coolness of judgment, which qualified her, though only nineteen, to be the counsellor of her mother, and enabled her frequently to counteract, to the advantage of them all, that eagerness of mind in Mrs. Dashwood which must generally have led to imprudence. She had an excellent heart;—her disposition was affectionate, and her feelings were strong; but she knew how to govern them: it was a knowledge which her mother had yet to learn; and which one of her sisters had resolved never to be taught.`,
    questionText: 'According to the text, what is true about Elinor?',
    options: [
      'Elinor often argues with her mother but fails to change her mind.',
      'Elinor can be overly sensitive with regard to family matters.',
      'Elinor thinks her mother is a bad role model.',
      'Elinor is remarkably mature for her age.'
    ],
    correctAnswerIndex: 3,
  },

  {
    id: 'v14',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Easy',
    imageUrl: picv2,
    passage: `To make sure they got the nutrition they needed while in space, the astronauts of NASA’s Gemini missions were given menus for three meals a day (meals A, B, and C) on a four-day rotating schedule. Looking at the sample of food items from these menus, a student notes that on day 1, the menu included ______`,
    questionText: 'Which choice most effectively uses data from the table to complete the statement?',
    options: [
      'shrimp cocktail for meal B.',
      'hot cocoa for meal C.',
      'sugar cookie cubes for meal B.',
      'chicken and vegetables for meal A.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Choice C is the best answer because it most effectively uses data from the table to complete the statement. The table shows that on day 1, the menu for NASA’s Gemini missions included sugar cookie cubes for meal B. Choice A is incorrect because according to the table, shrimp cocktail was served on day 4, not day 1; moreover, the item was served for meal C, not meal B, as this choice claims. Choice B is incorrect because according to the table, hot cocoa was served on day 3, not on day 1; moreover, the item was served for meal A, not for meal C, as this choice claims. Choice D is incorrect because according to the table, chicken and vegetables were served on day 2, not on day 1; moreover, the item was served for meal B, not for meal A, as this choice claims.',
  },

  {
    id: 'v15',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: `Many literary theorists distinguish between fabula, a narrative’s content, and syuzhet, a narrative’s arrangement and presentation of events. In the film The Godfather Part II, the fabula is the story of the Corleone family, and the syuzhet is the presentation of the story as it alternates between two timelines in 1901 and 1958. But literary theorist Mikhail Bakhtin maintained that fabula and syuzhet are insufficient to completely describe a narrative—he held that systematic categorizations of artistic phenomena discount the subtle way in which meaning is created by interactions between the artist, the work, and the audience.`,
    questionText: 'Which choice best states the main idea of the text?',
    options: [
      'Literary theorist Mikhail Bakhtin argued that there are important characteristics of narratives that are not fully encompassed by two concepts that other theorists have used to analyze narratives.',
      'Literary theorist Mikhail Bakhtin claimed that meaning is not inherent in a narrative but is created when an audience encounters a narrative so that narratives are interpreted differently by different people.',
      'The storytelling methods used in The Godfather Part II may seem unusually complicated, but they can be easily understood when two concepts from literary theory are utilized.',
      'Narratives that are told out of chronological order are more difficult for audiences to understand than are narratives presented chronologically.'
    ],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'v16',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `Biologists have predicted that birds’ feather structures vary with habitat temperature, but this hadn’t been tested in mountain environments. Ornithologist Sahas Barve studied feathers from 249 songbird species inhabiting different elevations—and thus experiencing different temperatures—in the Himalaya Mountains. He found that feathers of high-elevation species not only have a greater proportion of warming downy sections to flat and smooth sections than do feathers of low-elevation species, but high-elevation species’ feathers also tend to be longer, providing a thicker layer of insulation.`,
    questionText: 'Which choice best states the main idea of the text?',
    options: [
      'Barve’s investigation shows that some species of Himalayan songbirds have evolved feathers that better regulate body temperature than do the feathers of other species, contradicting previous predictions.',
      'Barve found an association between habitat temperature and feather structure among Himalayan songbirds, lending new support to a general prediction.',
      'Barve discovered that songbirds have adapted to their environment by growing feathers without flat and smooth sections, complicating an earlier hypothesis.',
      'The results of Barve’s study suggest that the ability of birds to withstand cold temperatures is determined more strongly by feather length than feather structure, challenging an established belief.'
    ],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'v17',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: `The ancient Greek concept of “mimesis,” a term used in the works of Plato, Aristotle, and other Greek philosophers in discussions of representational art—visual, performance, or literary art that aims to depict the real world—is a foundational concept of the Western philosophy of aesthetics. Mimesis is typically translated as “imitation” in modern editions of ancient Greek texts, but scholar Stephen Halliwell warns that this is overly reductive: “imitation” implies that art merely copies—and is thus by definition entirely derivative of—a reality that exists outside and prior to the work of art, and translating “mimesis” thusly obscures the multifaceted ways in which the ancient Greeks understood the relationship between art and reality.`,
    questionText: 'Which statement, if true, would most directly support the claim by Halliwell presented in the text?',
    options: [
      'One of the earliest appearances of mimesis’s root word, mimos, can be found in an ancient Greek tragedy in reference to dramatic impersonation, and the mim- root came to be generally associated with the musical and poetic arts by the fifth century BCE.',
      'Both Plato’s and Aristotle’s theorizations of mimesis examine the psychological effects that works of art induce in the viewer or listener.',
      'Although several of Plato’s earliest philosophical works discuss aesthetic ideas, the term “mimesis” doesn’t appear in Plato’s discussions of art until Cratylus, a relatively late work.',
      'Although Plato’s writings typically characterize representational art as an inferior reflection of the physical world, Aristotle suggests that mimesis can refer to art’s capacity to envision hypothetical conditions that could, but don’t yet, exist.'
    ],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'v18',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    imageUrl: picv3,
    passage: `High levels of public uncertainty about which economic policies a country will adopt can make planning difficult for businesses, but measures of such uncertainty have not tended to be very detailed. Recently, however, economist Sandile Hlatshwayo analyzed trends in news reports to derive measures not only for general economic policy uncertainty but also for uncertainty related to specific areas of economic policy, like tax or trade policy. One revelation of her work is that a general measure may not fully reflect uncertainty about specific areas of policy, as in the case of the United Kingdom, where general economic policy uncertainty ______`,
    questionText: 'Which choice most effectively uses data from the graph to illustrate the claim?',
    options: [
      'aligned closely with uncertainty about tax and public spending policy in 2005 but differed from uncertainty about tax and public spending policy by a large amount in 2009.',
      'was substantially lower than uncertainty about tax and public spending policy each year from 2005 to 2010.',
      'reached its highest level between 2005 and 2010 in the same year that uncertainty about trade policy and tax and public spending policy reached their lowest levels.',
      'was substantially lower than uncertainty about trade policy in 2005 and substantially higher than uncertainty about trade policy in 2010.'
    ],
    correctAnswerIndex: 3,
    explanation: 'Choice D is the best answer because it uses data from the graph to effectively illustrate the text’s claim about general economic policy uncertainty in the United Kingdom. The graph presents values for economic policy uncertainty in tax and public spending policy, trade policy, and general economic policy in the UK from 2005 to 2010. The graph shows that in 2005, the value for general economic policy uncertainty (approximately 90) was substantially lower than the value for uncertainty about trade policy specifically (approximately 160). It also shows that in 2010, the value for general economic policy uncertainty (approximately 120) was substantially higher than the value for uncertainty about trade policy (approximately 70). The substantial differences between these values in 2005 and 2010 support the claim that a general measure may not fully reflect uncertainty about specific areas of policy. Choice A is incorrect because the graph shows that the level of general economic policy uncertainty was similar to the level of uncertainty about tax and public spending policy in both 2005 (with values of approximately 90 and 100, respectively) and 2009 (with values of approximately 80 and 75, respectively). Choice B is incorrect because the graph shows that general economic policy uncertainty was higher than uncertainty about tax and public spending policy in 2006, 2007, and 2009, not that it was lower each year from 2005 to 2010. Choice C is incorrect because the graph shows that general economic policy uncertainty reached its highest level in 2010, which was when uncertainty about tax and public spending policy also reached its highest level, not its lowest level.',
  },
  
  {
    id: 'v19',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `Fish whose DNA has been modified to include genetic material from other species are known as transgenic. Some transgenic fish have genes from jellyfish that result in fluorescence (that is, they glow in the dark). Although these fish were initially engineered for research purposes in the 1990s, they were sold as pets in the 2000s and can now be found in the wild in creeks in Brazil. A student in a biology seminar who is writing a paper on these fish asserts that their escape from Brazilian fish farms into the wild may have significant negative long-term ecological effects.`,
    questionText: 'Which quotation from a researcher would best support the student’s assertion?',
    options: [
      '“In one site in the wild where transgenic fish were observed, females outnumbered males, while in another the numbers of females and males were equivalent.”',
      '“Though some presence of transgenic fish in the wild has been recorded, there are insufficient studies of the impact of those fish on the ecosystems into which they are introduced.”',
      '“The ecosystems into which transgenic fish are known to have been introduced may represent a subset of the ecosystems into which the fish have actually been introduced.”',
      '“Through interbreeding, transgenic fish might introduce the trait of fluorescence into wild fish populations, making those populations more vulnerable to predators.”'
    ],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'v20',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    imageUrl: picv4,
    passage: `It may seem that the optimal strategy for an animal pursuing prey or escaping predators is to move at maximal speed, but the energy expense of exploiting full speed capacity can disfavor such a strategy even in escape contexts, as evidenced by the fact that ______`,
    questionText: 'Which choice most effectively uses data from the graph to complete the text?',
    options: [
      'most lizard species use about the same percentage of their maximal speed when escaping predation as they do when pursuing prey.',
      'multiple lizard species move at an average of less than 90% of their maximal speed while escaping predation.',
      'more lizard species use, on average, 90%–100% of their maximal speed while escaping predation than use any other percentage of their maximal speed.',
      'at least 4 lizard species use, on average, less than 100% of their maximal speed while pursuing prey.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Choice B is the best answer because it describes data from the graph that complete the text’s discussion of lizard species’ use of maximal speed when escaping predators. According to the text, moving at maximal speed (the highest speed possible) requires so much energy that it is not always an effective strategy for animals, even when they are escaping predators. The graph displays data on the average percent of maximal speed used by lizard species while either escaping predators or pursuing prey. The graph categorizes the data for both pursuing and escaping by the number of species using 30%–39% of maximal speed, 40%–49% of maximal speed, 50%–59% of maximal speed, 60%–69% of maximal speed, 70%–79% of maximal speed, 80%–89% of maximal speed, and 90%–100% of maximal speed, respectively. In the graph, there is at least one species in each of the following percent categories for maximal speed while escaping predators: 50%–59%, 60%–69%, 70%–79%, and 80%–89%. Thus, the data in the graph show that multiple lizard species move at an average of less than 90% of their maximal speed while escaping predation. Choice A is incorrect because the data in the graph isn’t organized in such a way that a comparison of the percentage of maximal speed used when escaping predation with the percentage used when pursuing prey is possible at the level of individual species. Choice C is incorrect. It is true that in the graph, the percent category with the largest number of species using maximal speed while escaping predators is 90%–100% (8 species total). However, these data don’t complete the text, which is concerned instead with how animals are discouraged from using maximal speed even when escaping predators because of the amount of energy required to use it. Choice D is incorrect because these data from the graph pertain to maximal speed while pursuing prey and therefore don’t complete the text’s discussion of lizard species’ use of maximal speed when escaping predators.',
  },
  
  {
    id: 'v21',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    imageUrl: picv5,
    passage: `The Jordanelle Dam was built on the Provo River in Utah in 1992. Earth scientist Adriana E. Martinez and colleagues tracked changes to the environment on the banks of the river downstream of the dam, including how much grass and forest cover were present. They concluded that the dam changed the flow of the river in ways that benefited grass plants but didn’t benefit trees.`,
    questionText: 'Which choice best describes data from the graph that support Martinez and colleagues’ conclusion?',
    options: [
      'The lowest amount of grass cover was approximately 58,000 square meters, and the highest amount of forest cover was approximately 75,000 square meters.',
      'There was more grass cover than forest cover in 1987, and this difference increased dramatically in 1993 and again in 2006.',
      'There was less grass cover than bare soil in 1987 but more grass cover than bare soil in 1993 and 2006, whereas there was more forest cover than bare soil in all three years.',
      'Grass cover increased from 1987 to 1993 and from 1993 to 2006, whereas forest cover decreased in those periods.'
    ],
    correctAnswerIndex: 3,
    explanation: 'Choice D is the best answer because it describes data from the graph that support Martinez and colleagues’ conclusion that the Jordanelle Dam led to changes that benefited grass plants but not trees. The graph shows characteristics of the banks of the Provo River downstream of the Jordanelle Dam in three different years—1987, 1993, and 2006. Specifically, the graph shows the amount of grass cover, bare soil, and forest cover in those years. The text indicates that the Jordanelle Dam was built in 1992, meaning that the data from the graph for 1987 reflect conditions before the dam was built, whereas the data for 1993 and 2006 reflect conditions after the dam was built. The data show that grass cover increased substantially from 1987 to 1993 and again from 1993 to 2006. The data also show that forest cover declined over those periods. Together, these data support Martinez and colleagues’ conclusion that the dam was beneficial for grass plants but not for trees—grass cover increased significantly after the dam was built, while forest cover declined. Choice A is incorrect. Although it is true that, in the graph, the lowest value for grass cover is approximately 58,000 square meters and the highest value for forest cover is approximately 75,000 square meters, both values are from 1987, before the Jordanelle Dam was built in 1992. Therefore, this information alone cannot support Martinez and colleagues’ conclusion about changes in grass and tree cover following the construction of the dam. Choice B is incorrect because it presents an inaccurate description of data from the graph. The graph shows that there was more forest cover than grass cover in 1987, not that there was more grass cover than forest cover that year. Choice C is incorrect because, while it accurately reflects data from the graph when it compares grass cover and forest cover to bare soil, these data alone cannot support Martinez and colleagues’ conclusion that the dam led to changes that benefited grass plants but not trees. An increase in grass cover relative to bare soil following the construction of the dam might indicate that the dam benefited grass plants, but the fact that there was more forest cover than bare soil in all three years doesn’t indicate that the dam failed to benefit trees.',
  },
  
  {
    id: 'v22',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `The practice of logging (cutting down trees for commercial and other uses) is often thought to be at odds with forest conservation (the work of preserving forests). However, a massive study in forest management and preservation spanning 700,000 hectares in Oregon’s Malheur National Forest calls that view into question. So far, results of the study suggest that forest plots that have undergone limited logging (the careful removal of a controlled number of trees) may be more robust than plots that haven’t been logged at all. These results, in turn, suggest that ______`,
    questionText: 'Which choice most logically completes the text?',
    options: [
      'logging may be useful for maintaining healthy forests, provided it is limited.',
      'other forest management strategies are more effective than limited logging.',
      'as time passes, it will be difficult to know whether limited logging has any benefits.',
      'the best way to support forest health may be to leave large forests entirely untouched.'
    ],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'v23',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: `Almost all works of fiction contain references to the progression of time, including the time of day when events in a story take place. In a 2020 study, Allen Kim, Charuta Pethe, and Steven Skiena claim that an observable pattern in such references reflects a shift in human behavior prompted by the spread of electric lighting in the late nineteenth century. The researchers drew this conclusion from an analysis of more than 50,000 novels spanning many centuries and cultures, using software to recognize and tally both specific time references—that is, clock phrases, such as 7 a.m. or 2:30 p.m.—and implied ones, such as mentions of meals typically associated with a particular time of day.`,
    questionText: 'Which finding from the study, if true, would most directly support the researchers’ conclusion?',
    options: [
      'Novels published after the year 1800 include the clock phrase 10 a.m. less often than novels published before the year 1800 do.',
      'Novels published after 1880 contain significantly more references to activities occurring after 10 p.m. than do novels from earlier periods.',
      'Among novels published in the nineteenth century, implied time references become steadily more common than clock phrases as publication dates approach 1900.',
      'The time references of noon (12 p.m.) and midnight (12 a.m.) are used with roughly the same frequency in the novels.'
    ],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'v24',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Easy',
    passage: `When fashion designer Lloyd Henri Kiva New opened his store in Scottsdale, Arizona, in 1945, he quickly became known for creating delicately crafted leather goods, like belts and hats. He was perhaps most renowned for his colorful handbags, which he made by hand using a long and painstaking process. As he gained more customers, New began using sewing machines and other tools to help him produce bags more efficiently, though he continued to handcraft the crucial details that made each bag unique.`,
    questionText: 'Based on the text, what would have been the most likely consequence if New had not begun using sewing machines?',
    options: [
      'He would have been unable to ensure that each bag included unique, handcrafted details.',
      'He would have struggled to meet the increasing demand for his bags.',
      'He would have had to individually design each bag he produced.',
      'He would not have been able to generate as much interest in his bags.'
    ],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'v25',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    imageUrl: picv6,
    passage: `The only flowering plant species native to Antarctica, Colobanthus quitensis and Deschampsia antarctica grow in places where the earth remains free of ice for much of the year. Botanist Niccoletta Cannone wondered how the warming of Antarctica’s climate in recent years had affected these species, so she visited a site in Antarctica, first in 2009 and later in 2018, to count the number of plants growing there. Cannone found that the area of land covered by the two species had significantly expanded during the nine-year period. While both species likely benefited from warming temperatures, Colobanthus quitensis ______`,
    questionText: 'Which choice most effectively uses data from the table to complete the comparison?',
    options: [
      'suppressed the growth of Deschampsia antarctica, which covered a smaller area of land in 2018 than it had in 2009.',
      'saw a greater expansion than Deschampsia antarctica did, increasing the area of land it covered by more than half.',
      'showed a greater increase in the average size of individual plants than Deschampsia antarctica did.',
      'covered land newly freed from ice at a rate 55% faster than that of Deschampsia antarctica.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Choice B is the best answer because it most effectively uses data from the table to complete the comparison of how Colobanthus quitensis benefited from warming temperatures with how Deschampsia antarctica benefited from them. The table shows the land area covered by these two plant species at a site in Antarctica. According to the table, Colobanthus quitensis increased the area it covered by 55% from 2009 to 2018, whereas Deschampsia antarctica increased the area it covered by 28% during the same period. It therefore follows that Colobanthus quitensis saw a greater expansion than Deschampsia antarctica did and that Colobanthus quitensis increased the area of land it covered by more than half. Choice A is incorrect because according to the table, Deschampsia antarctica covered 1,230 square meters of land in 2009 and 1,576 square meters of land in 2018. Deschampsia antarctica therefore covered a larger, not a smaller, area of land in 2018 than in 2009. Moreover, there’s no information in the text or the table that suggests that one species of the plant suppressed the other. Choice C is incorrect because it inaccurately describes the data in the table. The table shows the land area covered by Colobanthus quitensis and Deschampsia antarctica and the percent increase in area covered by the two species from 2009 to 2018, not the average size of individual plants belonging to the two species. The data in the table therefore can’t be used to make a comparison of the increase in individual plants’ average size. Choice D is incorrect because the table shows the land area covered by Colobanthus quitensis and Deschampsia antarctica and the percent increase in area covered by the two species from 2009 to 2018, not the rate at which the species increased the area they covered. Moreover, there’s nothing in the table or the text that suggests that the areas covered by the two species were newly freed from ice.',
  },
  
  {
    id: 'v26',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    imageUrl: picv7,
    passage: `Geographer Adebayo Oluwole Eludoyin and his colleagues surveyed small-scale farmers in three locations in Ondo State, Nigeria—which has mountainous terrain in the north, an urbanized center, and coastal terrain in the south—to learn more about their practices, like the types of crops they mainly cultivated. In some regions, female farmers were found to be especially prominent in the cultivation of specific types of crops and even constituted the majority of farmers who cultivated those crops; for instance, ______`,
    questionText: 'Which choice most effectively uses data from the graph to complete the example?',
    options: [
      'most of the farmers who mainly cultivated cereals and most of the farmers who mainly cultivated non–root vegetables in south Ondo were women.',
      'more women in central Ondo mainly cultivated root crops than mainly cultivated cereals.',
      'most of the farmers who mainly cultivated non–root vegetables in north and south Ondo were women.',
      'a relatively equal proportion of women across the three regions of Ondo mainly cultivated cereals.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Choice C is the best answer because it uses data from the graph to effectively complete the example of Eludoyin and his colleagues’ findings concerning female farmers in some regions of Ondo State, Nigeria. The graph presents values for the percentage of Ondo State small-scale farmers who are female, by type of crop and region. The graph shows that of the farmers mainly cultivating non-root vegetables, approximately 57% in north Ondo and approximately 54% in south Ondo are female; in other words, most of those farmers are female, which exemplifies the idea that female farmers make up the majority (more than half) of the farmers cultivating specific types of crops in some regions. Choice A is incorrect because it inaccurately cites data from the graph: the graph shows that in south Ondo, most of the farmers mainly cultivating non-root vegetables are women (approximately 54%), but that only about 35% (less than half) of the farmers mainly cultivating cereals are women. Choice B is incorrect because it inaccurately cites data from the graph: the graph shows that more women in central Ondo mainly cultivate cereals than mainly cultivate root crops (approximately 36% and 20%, respectively). Additionally, it doesn’t effectively complete the example because the graph shows that female farmers don’t make up the majority (more than half) of the farmers for any type of crop in central Ondo. Choice D is incorrect because it doesn’t effectively complete the example; it simply states that a relatively equal proportion of women across the three regions mainly cultivate cereals, which doesn’t address the value for that proportion and thus doesn’t show that a majority (more than half) of the farmers cultivating certain crops are female.',
  },
  
  {
    id: 'v27',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Easy',
    passage: `Ochre sea stars live in tidal pools along the shoreline of the Pacific Ocean. At night, they move to higher shore levels in search of prey. But scientists Corey Garza and Carlos Robles noticed that ochre sea stars stayed at lower levels at night after heavy rains. Garza and Robles hypothesized that a layer of fresh water formed by rainfall was a barrier to the sea stars. To test their hypothesis, the scientists did an experiment. They placed some sea stars in a climbable tank of seawater and other sea stars in a similar tank of seawater with a layer of fresh water on top. Then, the scientists watched the sea stars’ behavior at night. `,
    questionText: 'Which finding from the experiment, if true, would most directly support Garza and Robles’s hypothesis?',
    options: [
      'None of the sea stars climbed to the tops of the tanks, but sea stars in the tank with only seawater moved around the bottom of the tank more than sea stars in the other tank did.',
      'Sea stars in the tank with only seawater climbed to the top of the tank, but sea stars in the other tank stopped climbing just below the layer of fresh water.',
      'Both groups of sea stars climbed to the tops of the tanks, but sea stars in the tank with only seawater climbed more slowly than sea stars in the other tank did.',
      'Sea stars in the tank with only seawater mostly stayed near the bottom of the tank, but sea stars in the other tank climbed into the layer of fresh water.'
    ],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'v28',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: `While attending school in New York City in the 1980s, Okwui Enwezor encountered few works by African artists in exhibitions, despite New York’s reputation as one of the best places to view contemporary art from around the world. According to an arts journalist, later in his career as a renowned curator and art historian, Enwezor sought to remedy this deficiency, not by focusing solely on modern African artists, but by showing how their work fits into the larger context of global modern art and art history.`,
    questionText: 'Which finding, if true, would most directly support the journalist’s claim?',
    options: [
      'As curator of the Haus der Kunst in Munich, Germany, Enwezor organized a retrospective of Ghanaian sculptor El Anatsui’s work entitled El Anatsui: Triumphant Scale, one of the largest art exhibitions devoted to a Black artist in Europe’s history.',
      'In the exhibition Postwar: Art Between the Pacific and the Atlantic, 1945–1965, Enwezor and cocurator Katy Siegel brought works by African artists such as Malangatana Ngwenya together with pieces by major figures from other countries, like US artist Andy Warhol and Mexico’s David Siqueiros.',
      'Enwezor’s work as curator of the 2001 exhibition The Short Century: Independence and Liberation Movements in Africa, 1945–1994 showed how African movements for independence from European colonial powers following the Second World War profoundly influenced work by African artists of the period, such as Kamala Ibrahim Ishaq and Thomas Mukarobgwa.',
      'Enwezor organized the exhibition In/sight: African Photographers, 1940 to the Present not to emphasize a particular aesthetic trend but to demonstrate the broad range of ways in which African artists have approached the medium of photography.'
    ],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'v29',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: `Researchers recently found that disruptions to an enjoyable experience, like a short series of advertisements during a television show, often increase viewers’ reported enjoyment. Suspecting that disruptions to an unpleasant experience would have the opposite effect, the researchers had participants listen to construction noise for 30 minutes and anticipated that those whose listening experience was frequently interrupted with short breaks of silence would thus ______`,
    questionText: 'Which choice most logically completes the text?',
    options: [
      'find the disruptions more irritating as time went on.',
      'rate the listening experience as more negative than those whose listening experience was uninterrupted.',
      'rate the experience of listening to construction noise as lasting for less time than it actually lasted.',
      'perceive the volume of the construction noise as growing softer over time.'
    ],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'v30',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Easy',
    imageUrl: picv8,
    passage: `A student is writing an essay about four pyramids for a history class and wants to note how long ago each pyramid was built and how tall each pyramid is. Consulting the table, the student finds that el Castillo was built 1,100 to 1,400 years ago and is  ______`,
    questionText: 'Which choice most effectively uses data from the table to complete the text?',
    options: [
      '33 meters tall.',
      '47 meters tall.',
      '40 meters tall.',
      '60 meters tall.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Choice C is the best answer because it most effectively uses data from the table to complete the text about the el Castillo pyramid. The table presents information for the location, height, and age of four pyramids, and the task is to use the data from the table to complete the text by choosing the correct height for el Castillo, which the table shows is 40 meters. Choice A is incorrect because, according to the table, el Castillo is 40 meters tall, not 33 meters, which is the height of the Great Pyramid in Mexico. Choice B is incorrect because, according to the table, el Castillo is 40 meters tall, not 47 meters, which is the height of the Pyramid of Sahure in Egypt. Choice D is incorrect because, according to the table, el Castillo is 40 meters tall, not 60 meters, which is the height of the Pyramid of Djoser in Egypt.',
  },
  
  {
    id: 'v31',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `Male túngara frogs make complex calls to attract mates, but their calls also attract frog-biting midges, insects that feed on the frogs’ blood. Researchers Ximena Bernal and Priyanka de Silva wondered if the calls alone are sufficient for midges to locate the frogs or if midges use carbon dioxide emitted by frogs as an additional cue to their prey’s whereabouts, like mosquitoes do. In an experiment, the researchers placed two midge traps in a túngara frog breeding area. One trap played recordings of túngara frog calls and the other released carbon dioxide along with playing the calls. Bernal and de Silva concluded that carbon dioxide does not serve as an additional cue to frog-biting midges.`,
    questionText: 'Which finding from the experiment, if true, would most directly support Bernal and de Silva’s conclusion?',
    options: [
      'Only a small number of midges were found in the traps, though the majority were found in the trap that played calls and released carbon dioxide.',
      'Midges entered the trap that released carbon dioxide and played calls only during or immediately after periods of carbon dioxide release.',
      'More midges were found in the trap that only played calls than in the trap that played calls and released carbon dioxide.',
      'The trap that released carbon dioxide and played calls attracted few midges when carbon dioxide concentrations were low but attracted many midges when carbon dioxide concentrations were high.'
    ],
    correctAnswerIndex: 2,
  },
  
  {
    id: 'v32',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `“Loon Point” is a 1912 poem by Amy Lowell. In the poem, which presents a nighttime scene on a body of water, Lowell describes an element of nature as an active participant in the experience, writing, ______`,
    questionText: 'Which quotation from “Loon Point” most effectively illustrates the claim?',
    options: [
      '“Through the water the moon writes her legends / In light, on the smooth, wet sand.”',
      '“Softly the water ripples / Against the canoe’s curving side.”',
      '“Or like the snow-white petals / Which drop from an overblown rose.”',
      '“But the moon in her wayward beauty / Is ever and always the same.”'
    ],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'v33',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    imageUrl: picv9,
    passage: `A student is conducting an experiment to test the effect of temperature and ethylene treatment on the ripening speed of bananas. The student treated some bananas with ethylene while leaving others untreated, then allowed both types of bananas to ripen at one of four different temperatures. Comparing the data for bananas with and without ethylene, the student concluded that ______`,
    questionText: 'Which choice most effectively uses data from the graph to complete the student’s conclusion?',
    options: [
      '20°C is the ideal temperature at which to store bananas to slow ripening time.',
      'for those bananas that were not treated with ethylene, differences in temperature were not associated with absolute differences in ripening time.',
      'bananas treated with ethylene ripen faster at 14°C and 16°C than at 18°C and 20°C.',
      'ethylene was associated with a greater absolute change in ripening time at 14°C, 16°C, and 18°C than at 20°C.'
    ],
    correctAnswerIndex: 3,
    explanation: 'Choice D is the best answer because it most effectively uses data from the graph to complete the student’s conclusion about banana ripening time with and without ethylene at different temperatures. The graph shows that at 20°C, the gap between the two bars showing ripening times for ethylene-treated bananas and untreated bananas crosses fewer than 2 gridlines (from about 4 days for ethylene-treated bananas to about 5.5 days for untreated bananas). Meanwhile, the graph shows that at 14°C, 16°C, and 18°C, the gap between the bars crosses more than 2 gridlines (from about 8 days for treated bananas to about 11 days for untreated bananas at 14°C; from about 6 days for treated bananas to about 9.5 days for untreated bananas at 16°C; and from about 5.5 days for treated bananas to about 8.5 days for untreated bananas at 18°C). Since the gap between the bars at each of these temperatures crosses more than 2 gridlines, and since each of these gaps is larger than the gap between the bars at 20°C, it can be concluded that ethylene was associated with a greater absolute change in ripening time at 14°C, 16°C, and 18°C than at 20°C. Choice A is incorrect because the graph shows that ethylene-treated bananas stored at 20°C ripen more quickly than ethylene-treated bananas stored at the other temperatures do (about 4 days at 20°C vs. about 5.5, 6, and 8 days at 18°C, 16°C, and 14°C, respectively) and that untreated bananas stored at 20°C ripen more quickly than untreated bananas stored at the other temperatures do (about 5.5 days at 20°C vs. about 8.5, 9.5, and 11 days at 18°C, 16°C, and 14°C, respectively). The information in the graph therefore indicates that storing bananas at 20°C speeds up ripening time relative to storing bananas at the other temperatures shown, not that this storage temperature slows ripening time. Choice B is incorrect because the graph shows that as temperature increases, the ripening time of untreated bananas decreases, from about 11 days at 14°C to about 5.5 days at 20°C, with no exceptions to this trend. The graph therefore shows that differences in temperature were associated with absolute differences in ripening time, not that there was no association between differences in temperature and differences in ripening time. Choice C is incorrect because the graph shows that ripening times of ethylene-treated bananas at 14°C and 16°C were about 8 and 6 days, respectively, which is greater than, not less than, ripening times of ethylene-treated bananas at 18°C and 20°C, which were about 5.5 and 4 days, respectively. In other words, bananas treated with ethylene ripen more slowly, not faster, at 14°C and 16°C than at 18°C and 20°C.',
  },
  
  {
    id: 'v34',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    imageUrl: picv10,
    passage: `Employing high-performance liquid chromatography—a process that uses pressurized water to separate material into its component molecules—astrochemist Yashiro Oba and colleagues analyzed two samples of the Murchison meteorite that landed in Australia as well as soil from the landing zone of the meteorite to determine the concentrations of various organic molecules. By comparing the relative concentrations of types of molecules known as nucleobases in the Murchison meteorite with those in the soil, the team concluded that there is evidence that the nucleobases in the Murchison meteorite formed in space and are not the result of contamination on Earth.`,
    questionText: 'Which choice best describes data from the table that support the team’s conclusion?',
    options: [
      'Isoguanine and purine were detected in both meteorite samples but not in the soil sample.',
      'Adenine and xanthine were detected in both of the meteorite samples and in the soil sample.',
      'Hypoxanthine and purine were detected in both the Murchison meteorite sample 2 and in the soil sample.',
      'Isoguanine and hypoxanthine were detected in the Murchison meteorite sample 1 but not in sample 2.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Choice A is the best answer. The researchers concluded that the meteorite’s nucleobases weren’t the result of soil contamination. Presence of nucleobases in the meteorite and not in soil provides evidence that those nucleobases likely didn’t come from the soil. Choice B is incorrect. This choice doesn’t justify the conclusion. The researchers concluded that the meteorite’s nucleobases weren’t the result of soil contamination. If the nucleobases are present in both the soil and meteorite, then it’s possible that these nucleobases came from the soil. Choice C is incorrect. This choice misreads the table. Purine was not detected in the soil sample. Choice D is incorrect. This choice misreads the table. Both isoguanine and hypoxanthine were detected in both Murchison meteorite samples.',
  },
  
  {
    id: 'v35',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `Paleontologists searching for signs of ancient life have found many fossilized specimens of prehistoric human ancestors, including several from the Pleistocene era discovered in a geological formation in the Minatogawa quarry in Japan. However, to study the emergence of the earliest multicellular organisms to appear on Earth, researchers must turn elsewhere, such as to the Ediacaran geological formation at Mistaken Point in Canada. A UNESCO World Heritage Site, the 146-hectare reserve contains more than 10,000 fossils that together document a critical moment in evolutionary history.`,
    questionText: 'What does the text indicate about the geological formation at Mistaken Point?',
    options: [
      'It holds a greater number of fossils but from a smaller variety of species than the formation in the Minatogawa quarry does.',
      'It has provided evidence that the earliest human species may have emerged before the Pleistocene era.',
      'It is widely considered by paleontologists to be the most valuable source of information about prehistoric life forms.',
      'It contains specimens from an older time period than those found in the formation in the Minatogawa quarry.'
    ],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'v36',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `In a study by Mika R. Moran, Daniel A. Rodriguez, and colleagues, residents of Quito, Ecuador, and Lima, Peru, were surveyed about parks in their cities. Of the 618 respondents from Quito, 82.9% indicated that they use the city’s parks, and of the 663 respondents from Lima, 72.7% indicated using city parks. Given that the percentage of Quito respondents who reported living within a 10-minute walk of a park was much lower than that reported by Lima respondents, greater proximity alone can’t explain the difference in park use.`,
    questionText: 'The text makes which point about the difference between the proportions of Quito residents and Lima residents using parks?',
    options: [
      'It was much larger than the researchers conducting the study expected.',
      'It is caused by something other than the parks’ proximity to city residents.',
      'It could be due to inaccuracies in the survey results.',
      'It was calculated using sources that predate the survey.'
    ],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'v37',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Easy',
    passage: `The following text is adapted from Johanna Spyri’s 1881 novel Heidi (translated by Elisabeth Stork in 1915). Eight-year-old Heidi and her friend’s grandmother are looking at some illustrated books.

Heidi had come and was looking with wondering eyes at the splendid pictures in the large books, that Grandmama was showing her. Suddenly she screamed aloud, for there on the picture she saw a peaceful flock grazing on a green pasture. In the middle a shepherd was standing, leaning on his crook. The setting sun was shedding a golden light over everything. With glowing eyes Heidi devoured the scene.`,
    questionText: 'Which choice best states the main idea of the text?',
    options: [
      'Heidi is upset until she sees a serene image of a pasture in one of Grandmama’s books.',
      'Heidi is delighted and fascinated by an image she sees in one of Grandmama’s books.',
      'Heidi is initially frightened by an image in one of Grandmama’s books but quickly comes to appreciate its beauty.',
      'Heidi is inspecting an image in one of Grandmama’s books because she has never seen a shepherd with his sheep before.'
    ],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'v38',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: `Many of William Shakespeare’s tragedies address broad themes that still appeal to today’s audiences. For instance, Romeo and Juliet, which is set in the Italy of Shakespeare’s time, tackles the themes of parents versus children and love versus hate, and the play continues to be read and produced widely around the world. But understanding Shakespeare’s so-called history plays can require a knowledge of several centuries of English history. Consequently, ______`,
    questionText: 'Which choice most logically completes the text?',
    options: [
      'many theatergoers and readers today are likely to find Shakespeare’s history plays less engaging than the tragedies.',
      'some of Shakespeare’s tragedies are more relevant to today’s audiences than twentieth-century plays.',
      'Romeo and Juliet is the most thematically accessible of all Shakespeare’s tragedies.',
      'experts in English history tend to prefer Shakespeare’s history plays to his other works.'
    ],
    correctAnswerIndex: 0,
  },

  {
    id: 'v39',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `The following text is adapted from Edgar Allan Poe’s 1849 story “Landor’s Cottage.”

During a pedestrian trip last summer, through one or two of the river counties of New York, I found myself, as the day declined, somewhat embarrassed about the road I was pursuing. The land undulated very remarkably; and my path, for the last hour, had wound about and about so confusedly, in its effort to keep in the valleys, that I no longer knew in what direction lay the sweet village of B——, where I had determined to stop for the night.`,
    questionText: 'Which choice best states the main idea of the text?',
    options: [
      'The narrator remembers a trip he took and admits to getting lost.',
      'The narrator recalls fond memories of a journey that he took through some beautiful river counties.',
      'The narrator describes what he saw during a long trip through a frequently visited location.',
      'The narrator explains the difficulties he encountered on a trip and how he overcame them.'
    ],
    correctAnswerIndex: 0,
  },

  {
    id: 'v40',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    imageUrl: picv11,
    passage: `In 2006, Nitya Kallivayalil and colleagues calculated the most accurate estimate yet of the average velocity (in kilometers per second) of the Large Magellanic Cloud (LMC) galaxy. Before the 2006 study, estimates of the average velocity were low enough for the LMC to maintain an orbit around the Milky Way galaxy, but according to an analysis by Gurtina Besla and colleagues, the estimated velocity from the 2006 study is too high for the LMC to maintain such an orbit. Therefore, if Besla and colleagues are correct, the maximum average velocity for the LMC that would allow it to maintain orbit around the Milky Way is likely ______`,
    questionText: 'Which choice most effectively uses data from the table to complete the statement?',
    options: [
      'above 344 km/s but below 378 km/s.',
      'above 297 km/s but below 344 km/s.',
      'above 378 km/s.',
      'below 297 km/s.'
    ],
    correctAnswerIndex: 0,
  },

  {
    id: 'v41',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: `Mosasaurs were large marine reptiles that lived in the Late Cretaceous period, approximately 100 million to 66 million years ago. Celina Suarez, Alberto Pérez-Huerta, and T. Lynn Harrell Jr. examined oxygen-18 isotopes in mosasaur tooth enamel in order to calculate likely mosasaur body temperatures and determined that mosasaurs were endothermic—that is, they used internal metabolic processes to maintain a stable body temperature in a variety of ambient temperatures. Suarez, Pérez-Huerta, and Harrell claim that endothermy would have enabled mosasaurs to include relatively cold polar waters in their range.`,
    questionText: 'Which finding, if true, would most directly support Suarez, Pérez-Huerta, and Harrell’s claim?',
    options: [
      'Mosasaurs’ likely body temperatures are easier to determine from tooth enamel oxygen-18 isotope data than the body temperatures of nonendothermic Late Cretaceous marine reptiles are.',
      'Fossils of both mosasaurs and nonendothermic marine reptiles have been found in roughly equal numbers in regions known to be near the poles during the Late Cretaceous, though in lower concentrations than elsewhere.',
      'Several mosasaur fossils have been found in regions known to be near the poles during the Late Cretaceous, while relatively few fossils of nonendothermic marine reptiles have been found in those locations.',
      'During the Late Cretaceous, seawater temperatures were likely higher throughout mosasaurs’ range, including near the poles, than seawater temperatures at those same latitudes are today.'
    ],
    correctAnswerIndex: 2,
  },

  {
    id: 'v42',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `A contraction of “you all,” the pronoun “y’all” has long been used as a plural version of “you” in the South and in Black communities around the US. In recent decades, most other English-speaking communities in the US have begun to use “y’all.” What explains its rise in popularity? Many varieties of English have no pronoun that specifically addresses more than one person and instead must use “you” to address both one person and more than one. But “y’all” always refers to two or more people. As a result, it conveys the speaker’s meaning more precisely than “you” can.`,
    questionText: 'Which question does the text most directly attempt to answer?',
    options: [
      'How many other plural versions of the pronoun “you” are there in English, besides “y’all”?',
      'Why has the pronoun “y’all” become more widely used in the US?',
      'When was the first recorded use of the pronoun “y’all” in the English language?',
      'Is “y’all” commonly used in English-speaking regions of the world besides the US?'
    ],
    correctAnswerIndex: 1,
  },

  {
    id: 'v43',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `Accomplished printmaker and sculptor Elizabeth Catlett (1915–2012) used her art to explore the Black experience in the United States. In a paper for an art history class, a student claims that Catlett had a particular talent for unifying various artistic traditions and styles in her work.`,
    questionText: 'Which quotation from a scholar describing Catlett’s work would best support the student’s claim?',
    options: [
      '“In Mother and Child, a sculpture of two Black figures, Catlett used an ancient Indigenous sculpting technique and combined the visual aesthetic of modern Mexican muralists with that of German artist Kathe Kollwitz.” ',
      '“In her collage New Generation, Catlett overlaid fabric onto the canvas to represent the clothing of a father and his toddler, positioned to evoke classic images of a mother and child.”',
      '“Created in 1968, Catlett’s sculpture Black Unity, a stylized fist sculpted from mahogany and measuring two feet across, remains an important piece and has received renewed and well-deserved attention in recent years.”',
      '“One series of Catlett’s prints, made by the artist using the linoleum cut method, depicts several notable African American women, including Harriet Tubman and Sojourner Truth.” '
    ],
    correctAnswerIndex: 0,
  },

  {
    id: 'v44',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: `The Mammillaria cactus M. boolii occurs naturally only in the state of Sonora in Mexico, and the smallness of its range makes it especially vulnerable to extinction. The traditional single-species approach to conservation emphasizes the need to focus on individual species most at risk, like M. boolii, but recently, conservationists have argued that an ecosystem-based approach that incorporates the many interactions between the climate, terrain, and various species of a given geographical area may lead to better outcomes for all the species in a given location. If this view is correct, the single-species approach to the conservation of M. boolii could thus ______`,
    questionText: 'Which choice most logically completes the text?',
    options: [
      'lead to a better understanding of how the distribution of Mammillaria species throughout Mexico has affected their survival.',
      'allow conservationists to better consider how climatic changes affecting Sonora may reduce the number of species competing with M. boolii.',
      'erroneously shift the focus of conservation efforts away from M. boolii itself.',
      'fail to consider the ways in which the survival of M. boolii may be influenced by changes in the populations of other species that inhabit Sonora.'
    ],
    correctAnswerIndex: 3,
  },

  {
    id: 'v45',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `A student is examining a long, challenging poem that was initially published in a quarterly journal without explanatory notes, then later republished in a stand-alone volume containing only that poem and accompanying explanatory notes written by the poet. The student asserts that the explanatory notes were included in the republication primarily as a marketing device to help sell the stand-alone volume.`,
    questionText: 'Which statement, if true, would most directly support the student’s claim?',
    options: [
      'The text of the poem as published in the quarterly journal is not identical to the text of the poem published in the stand-alone volume.',
      'Many critics believe that the poet’s explanatory notes remove certain ambiguities of the poem and make it less interesting as a result.',
      'The publishers of the stand-alone volume requested the explanatory notes from the poet in order to make the book attractive to readers who already had a copy of the poem in a journal issue.',
      'Correspondence between the poet and the publisher reveals that the poet’s explanatory notes went through several drafts.'
    ],
    correctAnswerIndex: 2,
  },

  {
    id: 'v46',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Medium',
    passage: `In 1934 physicist Eugene Wigner posited the existence of a crystal consisting entirely of electrons in a honeycomb-like structure. The so-called Wigner crystal remained largely conjecture, however, until Feng Wang and colleagues announced in 2021 that they had captured an image of one. The researchers trapped electrons between two semiconductors and then cooled the apparatus, causing the electrons to settle into a crystalline structure. By inserting an ultrathin sheet of graphene above the crystal, the researchers obtained an impression—the first visual confirmation of the Wigner crystal.`,
    questionText: 'Which choice best states the main idea of the text?',
    options: [
      'Researchers have obtained the most definitive evidence to date of the existence of the Wigner crystal.',
      'Researchers have identified an innovative new method for working with unusual crystalline structures.',
      'Graphene is the most important of the components required to capture an image of a Wigner crystal.',
      'It’s difficult to acquire an image of a Wigner crystal because of the crystal’s honeycomb structure.'
    ],
    correctAnswerIndex: 0,
  },

  {
    id: 'v47',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Easy',
    passage: `O Pioneers! is a 1913 novel by Willa Cather. In the novel, Cather portrays Alexandra Bergson as having a deep emotional connection to her natural surroundings: ______`,
    questionText: 'Which quotation from O Pioneers! most effectively illustrates the claim?',
    options: [
      '“She had never known before how much the country meant to her. The chirping of the insects down in the long grass had been like the sweetest music. She had felt as if her heart were hiding down there, somewhere, with the quail and the plover and all the little wild things that crooned or buzzed in the sun. Under the long shaggy ridges, she felt the future stirring.”',
      '“Alexandra talked to the men about their crops and to the women about their poultry. She spent a whole day with one young farmer who had been away at school, and who was experimenting with a new kind of clover hay. She learned a great deal.”',
      '“Alexandra drove off alone. The rattle of her wagon was lost in the howling of the wind, but her lantern, held firmly between her feet, made a moving point of light along the highway, going deeper and deeper into the dark country.”',
      '“It was Alexandra who read the papers and followed the markets, and who learned by the mistakes of their neighbors. It was Alexandra who could always tell about what it had cost to fatten each steer, and who could guess the weight of a hog before it went on the scales closer than John Bergson [her father] himself.”'
    ],
    correctAnswerIndex: 0,
  },

  {
    id: 'v48',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: `In the early nineteenth century, some Euro-American farmers in the northeastern United States used agricultural techniques developed by the Haudenosaunee (Iroquois) people centuries earlier, but it seems that few of those farmers had actually seen Haudenosaunee farms firsthand. Barring the possibility of several farmers of the same era independently developing techniques that the Haudenosaunee people had already invented, these facts most strongly suggest that ______`,
    questionText: 'Which choice most logically completes the text?',
    options: [
      'those farmers learned the techniques from other people who were more directly influenced by Haudenosaunee practices.',
      'the crops typically cultivated by Euro-American farmers in the northeastern United States were not well suited to Haudenosaunee farming techniques.',
      'Haudenosaunee farming techniques were widely used in regions outside the northeastern United States.',
      'Euro-American farmers only began to recognize the benefits of Haudenosaunee farming techniques late in the nineteenth century.'
    ],
    correctAnswerIndex: 0,
  },

  {
    id: 'v49',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: `The following text is adapted from María Cristina Mena’s 1914 short story “The Vine-Leaf.”

It is a saying in the capital of Mexico that Dr. Malsufrido carries more family secrets under his hat than any archbishop.

The doctor’s hat is, appropriately enough, uncommonly capacious, rising very high, and sinking so low that it seems to be supported by his ears and eyebrows, and it has a furry look, as if it had been brushed the wrong way, which is perhaps what happens to it if it is ever brushed at all. When the doctor takes it off, the family secrets do not fly out like a flock of parrots, but remain nicely bottled up beneath a dome of old and highly polished ivory.`,
    questionText: 'Based on the text, how do people in the capital of Mexico most likely regard Dr. Malsufrido?',
    options: [
      'Many have come to tolerate him despite his disheveled appearance.',
      'Few feel concerned that he will divulge their confidences.',
      'Some dislike how freely he discusses his own family.',
      'Most would be unimpressed by him were it not for his professional expertise.'
    ],
    correctAnswerIndex: 1,
  },

  {
    id: 'v50',
    subject: 'verbal',
    domainId: 'info_ideas',
    difficulty: 'Hard',
    passage: `Linguist Deborah Tannen has cautioned against framing contentious issues in terms of two highly competitive perspectives, such as pro versus con. According to Tannen, this debate-driven approach can strip issues of their complexity and, when used in front of an audience, can be less informative than the presentation of multiple perspectives in a noncompetitive format. To test Tannen’s hypothesis, students conducted a study in which they showed participants one of three different versions of local news commentary about the same issue. Each version featured a debate between two commentators with opposing views, a panel of three commentators with various views, or a single commentator.`,
    questionText: 'Which finding from the students’ study, if true, would most strongly support Tannen’s hypothesis?',
    options: [
      'On average, participants perceived commentators in the debate as more knowledgeable about the issue than commentators in the panel.',
      'On average, participants perceived commentators in the panel as more knowledgeable about the issue than the single commentator.',
      'On average, participants who watched the panel correctly answered more questions about the issue than those who watched the debate or the single commentator did.',
      'On average, participants who watched the single commentator correctly answered more questions about the issue than those who watched the debate did.'
    ],
    correctAnswerIndex: 2,
  },

  {
    id: 'cs1',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `Artist Marilyn Dingle’s intricate, coiled baskets are ______ sweetgrass and palmetto palm. Following a Gullah technique that originated in West Africa, Dingle skillfully winds a thin palm frond around a bunch of sweetgrass with the help of a “sewing bone” to create the basket’s signature look that no factory can reproduce.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'indicated by',
      'handmade from',
      'represented by',
      'collected with'
    ],
    correctAnswerIndex: 1,
  },

  {
    id: 'cs2',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `The invention in 1958 of the integrated circuit (or microchip) radically altered the semiconductor industry. In fact, some historians argue that it fundamentally ______ the industry by enabling it to take advantage of mass production methods for the first time.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'overwhelmed',
      'bypassed',
      'obstructed',
      'transformed'
    ],
    correctAnswerIndex: 3,
  },

  {
    id: 'cs3',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `Botanist Al Kovaleski has pointed out that maple trees already thrive in a wide variety of climates and thus may ______ changes in climate better than some other tree species do. The alterations maples may undergo in response to a changing climate are likely to be relatively small and easily achieved.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'relocate from',
      'refer to',
      'originate from',
      'adapt to'
    ],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'cs4',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Medium',
    passage: `The following text is adapted from Nathaniel Hawthorne’s 1837 story “Dr. Heidegger’s Experiment.” The main character, a physician, is experimenting with rehydrating a dried flower.

At first [the rose] lay lightly on the surface of the fluid, appearing to imbibe none of its moisture. Soon, however, a singular change began to be visible. The crushed and dried petals stirred and assumed a deepening tinge of crimson, as if the flower were reviving from a deathlike slumber.`,
    questionText: 'As used in the text, what does the phrase “a singular” most nearly mean?',
    options: [
      'A lonely',
      'A disagreeable',
      'An acceptable',
      'An extraordinary'
    ],
    correctAnswerIndex: 3,
  },
    
  {
    id: 'cs5',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `Rejecting the premise that the literary magazine Ebony and Topaz (1927) should present a unified vision of Black American identity, editor Charles S. Johnson fostered his contributors’ diverse perspectives by promoting their authorial autonomy. Johnson’s self-effacement diverged from the editorial stances of W.E.B. Du Bois and Alain Locke, whose decisions for their publications were more ______.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'proficient',
      'dogmatic',
      'ambiguous',
      'unpretentious'
    ],
    correctAnswerIndex: 1,
  },
    
  {
    id: 'cs6',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `“How lifelike are they?” Many computer animators prioritize this question as they strive to create ever more realistic environments and lighting. Generally, while characters in computer-animated films appear highly exaggerated, environments and lighting are carefully engineered to mimic reality. But some animators, such as Pixar’s Sanjay Patel, are focused on a different question. Rather than asking first whether the environments and lighting they’re creating are convincingly lifelike, Patel and others are asking whether these elements reflect their films’ unique stories.`,
    questionText: 'Which choice best describes the function of the following question "How lifelike are they?" in the text as a whole?',
    options: [
      'It reflects a primary goal that many computer animators have for certain components of the animations they produce.',
      'It represents a concern of computer animators who are more interested in creating unique backgrounds and lighting effects than realistic ones.',
      'It conveys the uncertainty among many computer animators about how to create realistic animations using current technology.',
      'It illustrates a reaction that audiences typically have to the appearance of characters created by computer animators.'
    ],
    correctAnswerIndex: 0,
  },
    
  {
    id: 'cs7',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `The field of study called affective neuroscience seeks instinctive, physiological causes for feelings such as pleasure or displeasure. Because these sensations are linked to a chemical component (for example, the release of the neurotransmitter dopamine in the brain when one receives or expects a reward), they can be said to have a partly physiological basis. These processes have been described in mammals, but Jingnan Huang and his colleagues have recently observed that some behaviors of honeybees (such as foraging) are also motivated by a dopamine-based signaling process.`,
    questionText: 'What choice best describes the main purpose of the text?',
    options: [
      'It describes an experimental method of measuring the strength of physiological responses in humans.',
      'It illustrates processes by which certain insects can express how they are feeling.',
      'It summarizes a finding suggesting that some mechanisms in the brains of certain insects resemble mechanisms in mammalian brains.',
      'It presents research showing that certain insects and mammals behave similarly when there is a possibility of a reward for their actions.'
    ],
    correctAnswerIndex: 2,
  },
    
  {
    id: 'cs8',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Medium',
    passage: `Drivers who strongly believe that the toll they must pay to use the Lewis and Clark Bridge, which spans the Ohio River to connect Indiana and Kentucky, is currently too high are unlikely to be ______ a proposal to increase the toll. Advocates for a higher toll are likely to have more success if they instead direct their arguments toward a more persuadable segment of the population. `,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'receptive to',
      'apprised of',
      'incensed by',
      'cited in'
    ],
    correctAnswerIndex: 0,
  },
    
  {
    id: 'cs9',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Medium',
    passage: `According to a team of neuroeconomists from the University of Zurich, ease of decision making may be linked to communication between two brain regions, the prefrontal cortex and the parietal cortex. Individuals tend to be more decisive if the information flow between the regions is intensified, whereas they make choices more slowly when information flow is ______.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'reduced',
      'evaluated',
      'determined',
      'acquired'
    ],
    correctAnswerIndex: 0,
  },
    
  {
    id: 'cs10',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `Some economic historians ______ that late nineteenth- and early twentieth-century households in the United States experienced an economy of scale when it came to food purchases—they assumed that large households spent less on food per person than did small households. Economist Trevon Logan showed, however, that a close look at the available data disproves this supposition.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'surmised',
      'contrived',
      'questioned',
      'regretted'
    ],
    correctAnswerIndex: 0,
  },
    
  {
    id: 'cs11',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `The following text is from Bram Stoker’s 1897 novel Dracula. The narrator is being driven in a carriage through a remote region at night.

The baying of the wolves sounded nearer and nearer, as though they were closing round on us from every side. I grew dreadfully afraid, and the horses shared my fear. The driver, however, was not in the least disturbed; he kept turning his head to left and right, but I could not see anything through the darkness.`,
    questionText: 'As used in the text, what does the word “disturbed” most nearly mean?',
    options: [
      'Disorganized',
      'Alarmed',
      'Offended',
      'Interrupted'
    ],
    correctAnswerIndex: 1,
  },
    
  {
    id: 'cs12',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `Economist Marco Castillo and colleagues showed that nuisance costs—the time and effort people must spend to make donations—reduce charitable giving. Charities can mitigate this effect by compensating donors for nuisance costs, but those costs, though variable, are largely ______ donation size, so charities that compensate donors will likely favor attracting a few large donors over many small donors.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'supplemental to',
      'predictive of',
      'independent of',
      'subsumed in'
    ],
    correctAnswerIndex: 2,
  },
    
  {
    id: 'cs13',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Medium',
    passage: `At the turn of the twentieth century, Black residents of Richmond, Virginia, had few formal options for banking and other financial services. To ______ this situation, Maggie Lena Walker chartered the St. Luke Penny Savings Bank in 1903. The bank went on to provide home loans and savings opportunities to thousands of Black families over the following decades.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'prolong',
      'rectify',
      'retain',
      'highlight'
    ],
    correctAnswerIndex: 1,
  },
    
  {
    id: 'cs14',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `The following text is from Srimati Svarna Kumari Devi’s 1894 novel The Fatal Garland (translated by A. Christina Albers in 1910). Shakti is walking near a riverbank that she visited frequently during her childhood.

She crossed the woods she knew so well. The trees seemed to extend their branches like welcoming arms. They greeted her as an old friend. Soon she reached the river-side.`,
    questionText: 'Which choice best describes the function of the following portion "The trees seemed to extend their branches like welcoming arms." in the text as a whole?',
    options: [
      'It suggests that Shakti feels uncomfortable near the river.',
      'It indicates that Shakti has lost her sense of direction in the woods.',
      'It emphasizes Shakti’s sense of belonging in the landscape.',
      'It conveys Shakti’s appreciation for her long-term friendships.'
    ],
    correctAnswerIndex: 2,
  },
    
  {
    id: 'cs15',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Medium',
    passage: `During a 2014 archaeological dig in Spain, Vicente Lull and his team uncovered the skeleton of a woman from El Algar, an Early Bronze Age society, buried with valuable objects signaling a high position of power. This finding may persuade researchers who have argued that Bronze Age societies were ruled by men to ______ that women may have also held leadership roles.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'waive',
      'concede',
      'refute',
      'require'
    ],
    correctAnswerIndex: 1,
  },
    
  {
    id: 'cs16',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Medium',
    passage: `A study by Dr. Paul Hanel and colleagues concluded that people are more likely to behave politely when listening to ideas they disagree with if they think about values before they engage in a discussion. Study participants were assigned to one of two groups. The experimental group spent a few minutes writing about one of their personal values before they had a group discussion on a controversial topic. And the control group spent a few minutes writing about a drink (tea, milk, etc.) before their group discussion on that topic. Hanel and colleagues found that the experimental group’s discussion was more civil than the control group’s discussion was.`,
    questionText: 'Which choice best describes the main purpose of the text?',
    options: [
      'To describe a widely held belief and how a study’s results support that belief',
      'To argue that researchers were surprised by the results of a certain study',
      'To suggest ways to improve a certain study’s experimental design',
      'To explain a study’s conclusion and how a research team arrived at that conclusion'
    ],
    correctAnswerIndex: 3,
  },
    
  {
    id: 'cs17',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Medium',
    passage: `Early in the Great Migration of 1910–1970, which involved the mass migration of Black people from the southern to the northern United States, political activist and Chicago Defender writer Fannie Barrier Williams was instrumental in helping other Black women establish themselves in the North. Many women hoped for better employment opportunities in the North because, in the South, they faced much competition for domestic employment and men tended to get agricultural work. To aid with this transition, Barrier Williams helped secure job placement in the North for many women before they even began their journey.`,
    questionText: 'Which choice best states the main purpose of the text?',
    options: [
      'To introduce and illustrate Barrier Williams’s integral role in supporting other Black women as their circumstances changed during part of the Great Migration',
      'To establish that Barrier Williams used her professional connections to arrange employment for other Black women, including jobs with the Chicago Defender',
      'To demonstrate that the factors that motivated the start of the Great Migration were different for Black women than they were for Black men',
      'To provide an overview of the employment challenges faced by Black women in the agricultural and domestic spheres in the southern United States'
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 'cs18',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `Text 1

In 1916, H. Dugdale Sykes disputed claims that The Two Noble Kinsmen was coauthored by William Shakespeare and John Fletcher. Sykes felt Fletcher’s contributions to the play were obvious—Fletcher had a distinct style in his other plays, so much so that lines with that style were considered sufficient evidence of Fletcher’s authorship. But for the lines not deemed to be by Fletcher, Sykes felt that their depiction of women indicated that their author was not Shakespeare but Philip Massinger.

Text 2

Scholars have accepted The Two Noble Kinsmen as coauthored by Shakespeare since the 1970s: it appears in all major one-volume editions of Shakespeare’s complete works. Though scholars disagree about who wrote what exactly, it is generally held that on the basis of style, Shakespeare wrote all of the first act and most of the last, while John Fletcher authored most of the three middle acts.`,
    questionText: 'Based on the texts, both Sykes in Text 1 and the scholars in Text 2 would most likely agree with which statement?',
    options: [
      'John Fletcher’s writing has a unique, readily identifiable style.',
      'The women characters in John Fletcher’s plays are similar to the women characters in Philip Massinger’s plays.',
      'The Two Noble Kinsmen belongs in one-volume compilations of Shakespeare’s complete plays.',
      'Philip Massinger’s style in the first and last acts of The Two Noble Kinsmen is an homage to Shakespeare’s style.'
    ],
    correctAnswerIndex: 0,
  },
    
  {
    id: 'cs19',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `Dance choreographer Jawole Willa Jo Zollar aims to give people the opportunity to be ______ her creative process. For example, live performances of her dance HairStories, which debuted in 2001, featured videos of people across the United States talking about their hair and audience members sharing pictures of their interesting hairstyles.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'nervous about',
      'completed by',
      'delayed by',
      'involved in'
    ],
    correctAnswerIndex: 3,
  },
    
  {
    id: 'cs20',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Medium',
    passage: `The following text is adapted from Nathaniel Hawthorne’s 1844 short story “Drowne’s Wooden Image.” Drowne, a young man, is carving a wooden figure to decorate the front of a ship.

Day by day, the work assumed greater precision, and settled its irregular and misty outline into distincter grace and beauty. The general design was now obvious to the common eye.`,
    questionText: 'As used in the text, what does the word “assumed” most nearly mean?',
    options: [
      'Acquired',
      'Acknowledged',
      'Imitated',
      'Speculated '
    ],
    correctAnswerIndex: 0,
  },
    
  {
    id: 'cs21',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `The works of Chicana artist Ester Hernandez are now ______ in museums both in the United States and abroad, but the murals she contributed to as a member of Las Mujeres Muralistas early in her artistic career were displayed in outdoor public spaces across San Francisco.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'invented',
      'adjusted',
      'featured',
      'recommended'
    ],
    correctAnswerIndex: 2,
  },
    
  {
    id: 'cs22',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `Studying late nineteenth- and early twentieth-century artifacts from an agricultural and domestic site in Texas, archaeologist Ayana O. Flewellen found that Black women employed as farm workers utilized hook-and-eye closures to fasten their clothes at the waist, giving themselves a silhouette similar to the one that was popular in contemporary fashion and typically achieved through more restrictive garments such as corsets. Flewellen argues that this sartorial practice shows that these women balanced hegemonic ideals of femininity with the requirements of their physically demanding occupation.`,
    questionText: 'Which choice best states the main purpose of the text?',
    options: [
      'To describe an unexpected discovery that altered a researcher’s view of how rapidly fashions among Black female farmworkers in late nineteenth- and early twentieth-century Texas changed during the period',
      'To discuss research that investigated the ways in which Black female farmworkers in late nineteenth- and early twentieth-century Texas used fashion practices to resist traditional gender ideals',
      'To evaluate a scholarly work that offers explanations for the impact of urban fashion ideals on Black female farmworkers in late nineteenth- and early twentieth-century Texas',
      'To summarize the findings of a study that explored factors influencing a fashion practice among Black female farmworkers in late nineteenth- and early twentieth-century Texas'
    ],
    correctAnswerIndex: 3,
  },
    
  {
    id: 'cs23',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `In 2020, rap artist and professor A.D. Carson published the first peer-reviewed rap album about his experiences with Black masculinity called “i used to love to dream.” Typically in peer review, experts evaluate scholarly articles prior to publication. For Carson’s album, dubbed a “mixtap/e/ssay,” peer review involved both scholars and rap artists. In combining elements of a mixtape album with scholarly essays that connect Carson’s lyrics to historical and contemporary contexts for listeners both inside and outside academia, Carson’s album helped redefine how scholarship is created and shared.`,
    questionText: 'Which choice best states the main purpose of the text?',
    options: [
      'To compare the relative public impact of scholarly articles and albums',
      'To capture one scholar’s opinion of a new rap album',
      'To explain why a certain rap album is particularly innovative',
      'To describe how each step of the peer review process unfolds'
    ],
    correctAnswerIndex: 2,
  },
    
  {
    id: 'cs24',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `Cat and Plum Blossoms is an important work of Nihonga, or classical Japanese painting. Unlike Kuroda Seiki, who adopted traditional European methods such as painting with oil on canvas, Hishida Shunsō ______ traditional Japanese approaches. For instance, Hishida produced Cat and Plum Blossoms by applying color pigments to a silk scroll.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'distrusted',
      'embraced',
      'released',
      'overlooked'
    ],
    correctAnswerIndex: 1,
  },
    
  {
    id: 'cs25',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `Astronomers are confident that the star Betelgeuse will eventually consume all the helium in its core and explode in a supernova. They are much less confident, however, about when this will happen, since that depends on internal characteristics of Betelgeuse that are largely unknown. Astrophysicist Sarafina El-Badry Nance and colleagues recently investigated whether acoustic waves in the star could be used to determine internal stellar states but concluded that this method could not sufficiently reveal Betelgeuse’s internal characteristics to allow its evolutionary state to be firmly fixed.`,
    questionText: 'Which choice best describes the function of the second sentence "They are much less confident, however, about when this will happen, since that depends on internal characteristics of Betelgeuse that are largely unknown." in the overall structure of the text?',
    options: [
      'It describes a serious limitation of the method used by Nance and colleagues. ',
      'It presents the central finding reported by Nance and colleagues.',
      'It identifies the problem that Nance and colleagues attempted to solve but did not.',
      'It explains how the work of Nance and colleagues was received by others in the field. '
    ],
    correctAnswerIndex: 2,
  },
    
  {
    id: 'cs26',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `In the 1990s, conservationists began planting more than 500,000 native trees in the habitat of the Azores bullfinch to boost the bird’s numbers. This approach was apparently ______: the Azores bullfinch’s population size increased from as few as 100 birds at the end of the 1980s to around 1,300 in 2023. `,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'amusing',
      'costly',
      'successful',
      'disastrous'
    ],
    correctAnswerIndex: 2,
  },
    
  {
    id: 'cs27',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `The results of randomized clinical trials testing the efficacy of common medical interventions sometimes fail to ______ conclusions that practitioners reach based on their real-world observations of patients. While there are several possible reasons for this, one is that practitioners may overlook confounding variables that account for the results they attribute to the interventions in question.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'circumvent',
      'corroborate',
      'disseminate',
      'implement'
    ],
    correctAnswerIndex: 1,
  },
    
  {
    id: 'cs28',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `Businesses typically try to promote themselves, but research by Michael Luca, Abhishek Nagaraj, and Gauri Subramani suggests that some do not ______ their marketing. The researchers studied restaurants in Texas and found that those listed on a popular review website (which can be done at no cost) had revenue increases of 5 percent on average, but 33 percent of restaurants studied never listed on the site.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'adorn',
      'optimize',
      'endorse',
      'counteract'
    ],
    correctAnswerIndex: 1,
  },
    
  {
    id: 'cs29',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Medium',
    passage: `Archeological excavation of Market Street Chinatown, a nineteenth-century Chinese American community in San Jose, California, provided the first evidence that Asian food products were imported to the United States in the 1800s: bones from a freshwater fish species native to Southeast Asia. Jinshanzhuang—Hong Kong–based import/export firms—likely coordinated the fish’s transport from Chinese-operated fisheries in Vietnam and Malaysia to North American markets. This route reveals the (often overlooked) multinational dimensions of the trade networks linking Chinese diaspora communities.`,
    questionText: 'Which choice best describes the function of the following sentence "Jinshanzhuang—Hong Kong–based import/export firms—likely coordinated the fish’s transport from Chinese-operated fisheries in Vietnam and Malaysia to North American markets." in the text as a whole?',
    options: [
      'It explains why efforts to determine the country of origin of the items mentioned in the previous sentence remain inconclusive.',
      'It provides information that helps support a claim about a discovery’s significance that is presented in the following sentence.',
      'It traces the steps that were taken to locate and recover the objects that are described in the previous sentence.',
      'It outlines a hypothesis that additional evidence discussed in the following sentence casts some doubt on.'
    ],
    correctAnswerIndex: 1,
  },
    
  {
    id: 'cs30',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `Former astronaut Ellen Ochoa says that although she doesn’t have a definite idea of when it might happen, she ______ that humans will someday need to be able to live in other environments than those found on Earth. This conjecture informs her interest in future research missions to the moon.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'demands',
      'speculates',
      'doubts',
      'establishes'
    ],
    correctAnswerIndex: 1,
  },
    
  {
    id: 'cs31',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Medium',
    passage: `Recent measurements of the mass of the W boson (a subatomic particle) were notable not only for the mere fact that the particle’s mass differed from expectations but for the ______ of that difference: the measured mass of the W boson was seven standard deviations higher than predicted by the standard model of particle physics.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'cause',
      'existence',
      'implication',
      'scale'
    ],
    correctAnswerIndex: 3,
  },
    
  {
    id: 'cs32',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `AThe following text is from Anita Desai’s 2011 novella Translator Translated. While working on her translation of a novel written in Odia (a language of India) into English, the narrator looks out her window at night to clear her mind.

I tried to distract myself with these sights of the ordinary world, but in my mind it was the lines I had been translating and the lines that I had been writing that remained in the forefront. I longed for sleep to obliterate them but it eluded me. Perhaps everything would be normal again once I had sent off the manuscript, I thought, and looked forward to completing the work.`,
    questionText: 'As used in the text, what does the word “completing” most nearly mean?',
    options: [
      'Destroying',
      'Finishing',
      'Advertising',
      'Rejecting'
    ],
    correctAnswerIndex: 1,
  },

  {
    id: 'cs33',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `Text 1

Public policy researcher Anthony Fowler studied the history of elections in Australia, a country that requires citizens to vote. Fowler argues that requiring citizens to vote leads to a significant increase in voters who would otherwise not have the time or motivation to vote. Thus, election results in countries that require citizens to vote better reflect the preferences of the country as a whole. 

 

Text 2

Governments in democratic countries function better when more people vote. However, forcing people to vote may have negative consequences. Shane P. Singh and Jason Roy studied what happens when a country requires its citizens to vote. They found that when people feel forced to vote, they tend to spend less time looking for information about their choices when voting. As a result, votes from these voters may not reflect their actual preferences.`,
    questionText: 'Based on the texts, how would Singh and Roy (Text 2) most likely respond to the research discussed in Text 1?',
    options: [
      'Only countries of a certain population size should implement mandatory voting.',
      'People who are forced to vote are likely to become politically engaged in other ways, such as volunteering or running for office.',
      'Requiring people to vote does not necessarily lead to election outcomes that better represent the preferences of the country as a whole.',
      'Countries that require voting must also make the process of voting easier for their citizens.'
    ],
    correctAnswerIndex: 2,
  }, 

  {
    id: 'cs34',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `One popular theory of the origin of the Moon, the “big whack,” posits that a protoplanet called Theia collided with Earth, flinging debris into orbit that eventually coalesced into the Moon. Until recently, Theia was ______, but researcher Qian Yuan and colleagues now claim to have identified pieces of the protoplanet in the lowermost section of Earth’s mantle.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'desultory',
      'spurious',
      'veritable',
      'notional'
    ],
    correctAnswerIndex: 3,
  },
    
  {
    id: 'cs35',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `A musician and member of the Quechua of Peru, Renata Flores Rivera was eager to promote the Quechua language in her music, but she was ______ speaking it. She met this challenge by asking her grandmother, a native speaker of Quechua, to help her pronounce words in her song lyrics and also by taking classes in the language.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'prepared for',
      'inexperienced with',
      'skilled in',
      'excited about'
    ],
    correctAnswerIndex: 1,
  },

  {
    id: 'cs36',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Medium',
    passage: `People sometimes dismiss a claim if it comes from a source they regard as self-interested, but from a strictly logical perspective, the source of a claim is ______: it has no direct bearing on whether the claim is true.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'indistinct',
      'irrelevant',
      'indisputable',
      'implicit'
    ],
    correctAnswerIndex: 1,
  },

  {
    id: 'cs37',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `Seminole/Muscogee director Sterlin Harjo ______ television’s tendency to situate Native characters in the distant past: this rejection is evident in his series Reservation Dogs, which revolves around teenagers who dress in contemporary styles and whose dialogue is laced with current slang.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'repudiates',
      'proclaims',
      'foretells',
      'recants'
    ],
    correctAnswerIndex: 0,
  },

  {
    id: 'cs38',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `The following text is from Yann Martel’s 2001 novel Life of Pi. The narrator’s family owned a zoo when he was a child. 

It was a huge zoo, spread over numberless acres, big enough to require a train to explore it, though it seemed to get smaller as I grew older, train included.`,
    questionText: 'As used in the text, what does the word “spread” most nearly mean?',
    options: [
      'Hidden',
      'Discussed',
      'Extended',
      'Coated'
    ],
    correctAnswerIndex: 2,
  },

  {
    id: 'cs39',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `According to botanists, a viburnum plant experiencing insect damage may develop erineum—a discolored, felty growth—on its leaf blades. A ______ viburnum plant, on the other hand, will have leaves with smooth surfaces and uniformly green coloration.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'struggling',
      'beneficial',
      'simple',
      'healthy'
    ],
    correctAnswerIndex: 3,
  },

  {
    id: 'cs40',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Medium',
    passage: `The Bayeux Tapestry, from eleventh-century France, depicts 75 scenes over 250 feet of fabric. It was likely produced by workers embroidering in sections and then joining the resulting panels together. It’s plausible that the workshop that produced the tapestry had never produced one so large, and some researchers claim that a close examination of the joins—the places where the panels are stitched together—suggests that the workers developed and refined their joining process over the course of production. For example, the first join the workers completed exhibits a clear misalignment of the borders of the two panels, whereas the later joins are virtually invisible.`,
    questionText: 'Which choice best describes the function of the following sentence "For example, the first join the workers completed exhibits a clear misalignment of the borders of the two panels, whereas the later joins are virtually invisible." in the text as a whole?',
    options: [
      'It identifies the people and events depicted in the Bayeux Tapestry.',
      'It supports an argument about the workers who produced the Bayeux Tapestry.',
      'It compares the Bayeux Tapestry with other tapestries from eleventh-century France.',
      'It describes how researchers determined where the Bayeux Tapestry was produced.'
    ],
    correctAnswerIndex: 1,
  },

  {
    id: 'cs41',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `Research conducted by planetary scientist Katarina Miljkovic suggests that the Moon’s surface may not accurately ______ early impact events. When the Moon was still forming, its surface was softer, and asteroid or meteoroid impacts would have left less of an impression; thus, evidence of early impacts may no longer be present.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'reflect',
      'receive',
      'evaluate',
      'mimic'
    ],
    correctAnswerIndex: 0,
  },

  {
    id: 'cs42',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `Charles “Teenie” Harris was a photographer for the Pittsburgh Courier from 1936 to 1975. During his career he took over 70,000 photographs documenting everyday life in Pittsburgh’s Black communities. The Carnegie Museum of Art maintains thousands of his photographs, carefully ______ them so that audiences can continue to view them well into the future.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'replacing',
      'inventing',
      'preserving',
      'counting'
    ],
    correctAnswerIndex: 2,
  },

  {
    id: 'cs43',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `The following text is adapted from George Eliot’s 1871–72 novel Middlemarch.

[Mr. Brooke] had travelled in his younger years, and was held in this part of the country to have contracted a too rambling habit of mind. Mr. Brooke’s conclusions were as difficult to predict as the weather.`,
    questionText: 'As used in the text, what does the word “contracted” most nearly mean?',
    options: [
      'Restricted',
      'Described',
      'Developed',
      'Settled'
    ],
    correctAnswerIndex: 2,
  },

  {
    id: 'cs44',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `Barring major archaeological discoveries, we are unlikely to ever have ______ account of ancient Egypt under the female pharaoh Hatshepsut, as much of the evidence of her reign was deliberately destroyed by her successors. `,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'an imaginative',
      'a superficial',
      'an exhaustive',
      'a questionable'
    ],
    correctAnswerIndex: 2,
  },

  {
    id: 'cs45',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `Ordinary soap bubbles usually exist for a minute or less before popping due to either a rupture forced by gravity-induced drainage or the evaporation of the liquid from which the bubble is composed. But physicist Aymeric Roux and colleagues discovered ways to mitigate these factors, resulting in bubbles that can last for a year or more. For example, glycerol tends to adhere to water molecules, so a bubble with a shell that contains both water and glycerol is able to draw additional water molecules from the surrounding air and thereby compensate for evaporation.`,
    questionText: 'Which choice best states the purpose of the following portion "a bubble with a shell that contains both water and glycerol is able to draw additional water molecules from the surrounding air and thereby compensate for evaporation." in the text as a whole?',
    options: [
      'It describes the effects of a process devised by researchers that increases the longevity of an object discussed in the text.',
      'It details the circumstances that prompted the research discussed in the text.',
      'It presents a reason why the phenomenon discussed in the text that the researchers wanted to avoid will inevitably occur.',
      'It mentions a method discussed in the text that researchers intend to test in future experiments.'
    ],
    correctAnswerIndex: 0,
  },

  {
    id: 'cs46',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Medium',
    passage: `Although science fiction was dominated mostly by white male authors when Octavia Butler, a Black woman, began writing, she did not view the genre as ______: Butler broke into the field with the publication of several short stories and her 1976 novel Patternmaster, and she later became the first science fiction writer to win a prestigious MacArthur Fellowship.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'legitimate',
      'impenetrable',
      'compelling',
      'indecipherable'
    ],
    correctAnswerIndex: 1,
  },

  {
    id: 'cs47',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Easy',
    passage: `Many ancient sculptures of people’s heads are missing their noses. This is because the nose is the most ______ part of a sculpture of a person’s head. It is delicate and sticks out from the rest of the sculpture, making it especially easy to break.`,
    questionText: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      'recognizable',
      'fragile',
      'common',
      'sophisticated'
    ],
    correctAnswerIndex: 1,
  },

  {
    id: 'cs48',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Hard',
    passage: `The following text is from George Marion McClellan’s 1895 poem “Eternity.”

My spirit swoons, and all my senses cry

For Ocean’s breast and covering of the sky.

Rock me to sleep, ye waves, and outward bound,

Just let me drift far out from toil and care,

Where lapping of the waves shall be the sound,

Which mingled with the winds that gently bear

Me on between a peaceful sea and sky,

To make my soothing slumberous lullaby.`,
    questionText: 'Which choice best states the main purpose of the text?',
    options: [
      'To illustrate the increasing intensity of the speaker’s desire to escape ongoing hardship by gliding on the ocean',
      'To contrast the demands of the speaker’s everyday life with the serenity of being rocked to sleep by the ocean',
      'To convey the speaker’s longing for the ocean to impart a sense of inner tranquility',
      'To justify the speaker’s qualms about being transported by the ocean to a quiet destination'
    ],
    correctAnswerIndex: 2,
  },

  {
    id: 'cs49',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Medium',
    passage: `In 1154, Muhammad al-Idrisi completed a collection of maps of the lands known to medieval Arabic and European scholars. This collection was titled Al-Kitāb al-Rujārī (The Book of Roger), after the Norman king Roger II who hired him to create it. To create the collection, al-Idrisi consulted Arabic and Greek maps and interviewed travelers about the lands they visited. He included these travelers’ stories alongside the map illustrations.`,
    questionText: 'Which choice best states the main purpose of the text?',
    options: [
      'To discuss the benefits of studying mapmaking ',
      'To explain how travelers created maps',
      'To describe a collection of medieval maps and how it was created',
      'To compare medieval Arabic and Greek mapmaking techniques'
    ],
    correctAnswerIndex: 2,
  },

  {
    id: 'cs50',
    subject: 'verbal',
    domainId: 'craft_structure',
    difficulty: 'Medium',
    passage: `Using NASA’s powerful James Webb Space Telescope (JWST), Mercedes López-Morales and colleagues measured the wavelengths of light traveling through the atmosphere of WASP-39b, an exoplanet, or planet outside our solar system. Different molecules absorb different wavelengths of light, and the wavelength measurements showed the presence of carbon dioxide (CO₂) in WASP-39b’s atmosphere. This finding not only offers the first decisive evidence of CO₂ in the atmosphere of an exoplanet but also illustrates the potential for future scientific breakthroughs held by the JWST.`,
    questionText: 'Which choice best describes the overall structure of the text?',
    options: [
      'It discusses a method used by some researchers, then states why an alternative method is superior to it.',
      'It describes how researchers made a scientific discovery, then explains the importance of that discovery.',
      'It outlines the steps taken in a scientific study, then presents a hypothesis based on that study.',
      'It examines how a group of scientists reached a conclusion, then shows how other scientists have challenged that conclusion.'
    ],
    correctAnswerIndex: 1,
  },

  {
    id: 'e1',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Hard',
    passage: `The prime meridian, the global indicator of zero degrees longitude established in 1884, was originally determined using astronomically derived coordinates. ______ as decades passed, new calculations would reveal increasingly precise coordinates, yet the prime meridian remained unchanged; it wasn’t until the 1980s that, spurred by improved geodetic data, the prime meridian was officially moved—roughly one hundred meters east.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['Specifically,', 'To that end,', 'Again and again,', 'Granted,'],
    correctAnswerIndex: 2,
  },

  {
    id: 'e2',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Hard',
    passage: `While researching a topic, a student has taken the following notes:


As engineered structures, many bird nests are uniquely flexible yet cohesive.

A research team led by Yashraj Bhosale wanted to better understand the mechanics behind these structural properties.

Bhosale’s team used laboratory models that simulated the arrangement of flexible sticks into nest-like structures.

The researchers analyzed the points where sticks touched one another.

When pressure was applied to the model nests, the number of contact points between the sticks increased, making the structures stiffer.`,
    questionText: 'The student wants to present the primary aim of the research study. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['Bhosale’s team wanted to better understand the mechanics behind bird nests’ uniquely flexible yet cohesive structural properties.', 'The researchers used laboratory models that simulated the arrangement of flexible sticks and analyzed the points where sticks touched one another.', 'After analyzing the points where sticks touched, the researchers found that the structures became stiffer when pressure was applied.', 'As analyzed by Bhosale’s team, bird nests are uniquely flexible yet cohesive engineered structures.'],
    correctAnswerIndex: 0,
  },

  {
    id: 'e3',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `In 1942, the 1,500-mile Alaska Highway was constructed in under nine months, largely due to the skilled work of nearly 4,000 African American soldiers from US Army engineering regiments. The soldiers’ contribution was overlooked for decades. ______ in 2017, lawmakers declared October 25 a day of recognition—“Alaska Highway Day”—for the troops who helped build this critical roadway.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['Lastly,', 'Then,', 'Similarly,', 'For example,'],
    correctAnswerIndex: 1,
  },

  {
    id: 'e4',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `Samuel Coleridge-Taylor was a prominent classical music composer from England who toured the US three times in the early 1900s. The child of a West African father and an English mother, Coleridge-Taylor emphasized his mixed-race ancestry. For example, he referred to himself as Anglo-African. ______ he incorporated the sounds of traditional African music into his classical music compositions.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['In addition,', 'Actually,', 'However,', 'Regardless,'],
    correctAnswerIndex: 0,
  },

  {
    id: 'e5',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Hard',
    passage: `In her poetry collection Thomas and Beulah, Rita Dove interweaves the titular characters’ personal stories with broader historical narratives. She places Thomas’s journey from the American South to the Midwest in the early 1900s within the larger context of the Great Migration. ______ Dove sets events from Beulah’s personal life against the backdrop of the US Civil Rights Movement.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['Specifically,', 'Thus,', 'Regardless,', 'Similarly,'],
    correctAnswerIndex: 3,
  },

  {
    id: 'e6',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Hard',
    passage: `While researching a topic, a student has taken the following notes:


The Atlantic Monthly magazine was first published in 1857.

The magazine focused on politics, art, and literature.

In 2019, historian Cathryn Halverson published the book Faraway Women and the “Atlantic Monthly.”

Its subject is female authors whose autobiographies appeared in the magazine in the early 1900s.

One of the authors discussed is Juanita Harrison.
`,
    questionText: 'The student wants to introduce Cathryn Halverson’s book to an audience already familiar with the Atlantic Monthly. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['Cathryn Halverson’s Faraway Women and the “Atlantic Monthly”  discusses female authors whose autobiographies appeared in the magazine in the early 1900s.', 'A magazine called the Atlantic Monthly, referred to in Cathryn Halverson’s book title, was first published in 1857.', 'Faraway Women and the “Atlantic Monthly”  features contributors to the Atlantic Monthly, first published in 1857 as a magazine focusing on politics, art, and literature. ', 'An author discussed by Cathryn Halverson is Juanita Harrison, whose autobiography appeared in the Atlantic Monthly in the early 1900s.'],
    correctAnswerIndex: 0,
  },

  {
    id: 'e7',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `While researching a topic, a student has taken the following notes:


Sue is the nickname of a dinosaur fossil specimen housed at the Field Museum of Natural History.

The Field Museum of Natural History is located in Chicago, Illinois.

Sue is a member of the genus Tyrannosaurus.

Big Mike is the nickname of a dinosaur fossil specimen housed at the Museum of the Rockies. 

The Museum of the Rockies is located in Bozeman, Montana.

Big Mike is a member of the genus Tyrannosaurus.`,
    questionText: 'The student wants to emphasize a similarity between the two specimens. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['The Field Museum of Natural History, where Sue is housed, is located in Chicago, Illinois.', 'Big Mike is the nickname of a Tyrannosaurus fossil specimen housed at the Museum of the Rockies in Bozeman, Montana.', 'The dinosaur fossil specimens Sue and Big Mike are both members of the genus Tyrannosaurus.', 'While Sue is housed at the Field Museum of Natural History, Big Mike is housed at the Museum of the Rockies.'],
    correctAnswerIndex: 2,
  },

  {
    id: 'e8',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `While researching a topic, a student has taken the following notes:


The Haber-Bosch process is an industrial process used to manufacture ammonia (NH3).

It was invented by chemists Fritz Haber and Carl Bosch in 1910.

The process’s primary reaction combines nitrogen (N2) from the air with hydrogen (H2).

It requires an iron catalyst and high temperatures and pressures.

Most of the ammonia produced by this process is used in fertilizers.`,
    questionText: 'The student wants to provide an overview of the Haber-Bosch process. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['The Haber-Bosch process needs nitrogen, hydrogen, and an iron catalyst.', 'The Haber-Bosch process uses an iron catalyst along with high temperatures and pressures to manufacture ammonia from nitrogen and hydrogen.', 'Chemists Fritz Haber and Carl Bosch invented an industrial process to manufacture ammonia to be used in fertilizers.', 'In 1910, chemists Fritz Haber and Carl Bosch invented the Haber-Bosch process, which requires high temperatures and pressures.'],
    correctAnswerIndex: 1,
  },

  {
    id: 'e9',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `While researching a topic, a student has taken the following notes:


Organisms release cellular material into their environment by shedding substances such as hair or skin.

The DNA in these substances is known as environmental DNA, or eDNA.

Researchers collect and analyze eDNA to detect the presence of species that are difficult to observe.

Geneticist Sara Oyler-McCance’s research team analyzed eDNA in water samples from the Florida Everglades to detect invasive constrictor snake species in the area.

The study determined a 91% probability of detecting Burmese python eDNA in a given location.`,
    questionText: 'The student wants to present the study to an audience already familiar with environmental DNA. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['Sara Oyler-McCance’s researchers analyzed eDNA in water samples from the Florida Everglades for evidence of invasive constrictor snakes, which are difficult to observe.', 'An analysis of eDNA can detect the presence of invasive species that are difficult to observe, such as constrictor snakes.', 'Researchers found Burmese python eDNA, or environmental DNA, in water samples; eDNA is the DNA in released cellular materials, such as shed skin cells.', 'Sara Oyler-McCance’s researchers analyzed environmental DNA (eDNA)—that is, DNA from cellular materials released by organisms—in water samples from the Florida Everglades.'],
    correctAnswerIndex: 0,
  },

  {
    id: 'e10',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `While researching a topic, a student has taken the following notes:


Sam Maloof (1916–2009) was an American woodworker and furniture designer.

He was the son of Lebanese immigrants.

He received a “genius grant” from the John D. and Catherine T. MacArthur Foundation in 1985.

The Museum of Fine Arts in Boston, Massachusetts, owns a rocking chair that Maloof made from walnut wood.

The armrests and the seat of the chair are sleek and contoured, and the back consists of seven spindle-like slats.`,
    questionText: 'The student wants to describe the rocking chair to an audience unfamiliar with Sam Maloof. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['With its sleek, contoured armrests and seat, the walnut rocking chair in Boston’s Museum of Fine Arts is just one piece of furniture created by American woodworker Sam Maloof.', 'Sam Maloof was born in 1916 and died in 2009, and during his life, he made a chair that you can see if you visit the Museum of Fine Arts in Boston.', 'Furniture designer Sam Maloof was a recipient of one of the John D. and Catherine T. MacArthur Foundation’s “genius grants.”', 'The rocking chair is made from walnut, and it has been shaped such that its armrests and seat are sleek and contoured.'],
    correctAnswerIndex: 0,
  },

  {
    id: 'e11',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `While researching a topic, a student has taken the following notes:


Species belonging to the Orchidaceae (orchid) family can be found in both tropical and temperate environments.

Orchidaceae species diversity has not been well studied in temperate forests, such as those in Oaxaca, Mexico.

Arelee Estefanía Muñoz-Hernández led a study to determine how many different Orchidaceae species are present in the forests of Oaxaca.

Muñoz-Hernández and her team collected orchids each month for a year at a site in Oaxaca.

Seventy-four Orchidaceae species were present at the site.`,
    questionText: 'The student wants to present the study and its findings. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['A study led by Arelee Estefanía Muñoz-Hernández identified a total of 74 Orchidaceae species in the temperate forests of Oaxaca, Mexico.', 'There are orchids in many environments, but there are 74 Orchidaceae species in Oaxaca, Mexico.', 'Oaxaca, Mexico, is home to temperate forests containing 74 Orchidaceae species.', 'Arelee Estefanía Muñoz-Hernández and her team wanted to know how many different Orchidaceae species are present in the forests of Oaxaca, Mexico, so they conducted a study to collect orchids.'],
    correctAnswerIndex: 0,
  },

  {
    id: 'e12',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `While researching a topic, a student has taken the following notes:


The Philadelphia and Lancaster Turnpike was a road built between 1792 and 1794.

It was the first private turnpike in the United States.

It connected the cities of Philadelphia and Lancaster in the state of Pennsylvania.

It was sixty-two miles long.`,
    questionText: 'The student wants to emphasize the distance covered by the Philadelphia and Lancaster Turnpike. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['The sixty-two-mile-long Philadelphia and Lancaster Turnpike connected the Pennsylvania cities of Philadelphia and Lancaster.', 'The Philadelphia and Lancaster Turnpike was the first private turnpike in the United States.', 'The Philadelphia and Lancaster Turnpike, which connected two Pennsylvania cities, was built between 1792 and 1794.', 'The Philadelphia and Lancaster Turnpike, which connected two Pennsylvania cities, was built between 1792 and 1794.'],
    correctAnswerIndex: 0,
  },

  {
    id: 'e13',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `While researching a topic, a student has taken the following notes:


The human body requires magnesium for over 300 essential processes.

Magnesium is a mineral present in many foods.

Peanuts contain 49 milligrams per ounce (mg/oz) of magnesium.

Almonds contain 80 mg/oz.

Chia seeds contain 150 mg/oz.`,
    questionText: 'The student wants to identify which of the three foods has the highest magnesium content. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['At 80 mg/oz, almonds contain more magnesium than peanuts (49 mg/oz).', 'Chia seeds contain 150 mg/oz of magnesium, which is more than peanuts and almonds.', 'Magnesium is present in many foods, including peanuts, almonds, and chia seeds.', 'Peanuts contain 49 mg/oz of magnesium, a mineral the human body requires for over 300 essential processes.'],
    correctAnswerIndex: 1,
  },

  {
    id: 'e14',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Hard',
    passage: `TIn a heated debate in biogeography, the field is divided between dispersalists and vicariancists. ______ there are those who argue that dispersal is the most crucial determining factor in a species’ distribution, and those who insist that vicariance (separation due to geographic barriers) is. Biogeographer Isabel Sanmartín counts herself among neither.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['Furthermore,', 'By contrast,', 'Similarly,', 'That is,'],
    correctAnswerIndex: 3,
  },

  {
    id: 'e15',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `Scientists were able to isolate a relatively pure sample of selenium in 1817, the same year they first discovered the element’s existence. ______ the isolation process took longer for molybdenum, which was isolated in its pure form three years after scientists first discovered it.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['By contrast,', 'Thus,', 'Similarly,', 'Similarly,'],
    correctAnswerIndex: 0,
  },

  {
    id: 'e16',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `Most of the planets that have been discovered outside our solar system orbit G-type stars, like our Sun. In 2014, ______ researchers identified a planet orbiting KELT-9, a B-type star more than twice as massive and nearly twice as hot as the Sun. Called KELT-9b, it is one of the hottest planets ever discovered.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['likewise,', 'however,', 'therefore,', 'for example,'],
    correctAnswerIndex: 1,
  },

  {
    id: 'e17',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `While researching a topic, a student has taken the following notes:


In World War I, US soldiers who were members of the Choctaw Nation in Oklahoma participated in the Choctaw Code Talkers program.

The Choctaw Code Talkers were trained to relay coded military information in their native language.

In World War II, the US Army recruited Navajo (Diné) soldiers to transmit coded messages in their native language.

These soldiers were known as the Navajo Code Talkers.`,
    questionText: 'The student wants to emphasize a similarity between the Choctaw Code Talkers and the Navajo Code Talkers. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['US soldiers who were members of the Choctaw Nation in Oklahoma used their native language to relay coded information.', 'In World War II, one group of Navajo (Diné) soldiers was known as the Navajo Code Talkers.', 'Both the Choctaw Code Talkers and the Navajo Code Talkers transmitted coded military messages in the soldiers’ native languages.', 'The Choctaw Code Talkers, not the Navajo Code Talkers, served in World War I.'],
    correctAnswerIndex: 2,
  },

  {
    id: 'e18',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Hard',
    passage: `In 1815, while in exile in Jamaica, Venezuelan revolutionary Simón Bolívar penned a letter praising England’s republican government and expressing hope that Latin American nations seeking independence from Spain might achieve something similar. The letter was addressed to a local merchant, Henry Cullen; ______ though, Bolívar’s goal was to persuade political leaders from England and Europe to support his cause.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['additionally,', 'ultimately,', 'accordingly,', 'consequently,'],
    correctAnswerIndex: 1,
  },

  {
    id: 'e19',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `The Babylonian king Hammurabi achieved much during his forty-year reign. He conquered all of Mesopotamia and built Babylon into one of the most powerful cities of the ancient world. Today, ______ he is mainly remembered for a code of laws inscribed on a seven-foot-tall block of stone: the Code of Hammurabi.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['therefore,', 'likewise,', 'however,', 'for instance,'],
    correctAnswerIndex: 2,
  },

  {
    id: 'e20',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `While researching a topic, a student has taken the following notes:


The International Center for the Arts of the Americas (ICAA) is directed by Mari Carmen Ramírez.

Ramírez oversaw an initiative to create an online archive of historical documents related to the history of Latin American and Latino visual art.

The ICAA digitized over 10,000 documents, including the writings of Latin American and Latino artists and critics.

The creation of the archive didn’t require historical documents to be removed from their countries of origin.

Scholars now have more access to these documents.`,
    questionText: 'The student wants to explain an advantage of the ICAA’s archive being digital. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['Over 10,000 documents related to the history of Latin American and Latino visual art are part of the ICAA archive.', 'By offering online versions of historical documents, the ICAA’s archive provides more access to these materials without removing them from their countries of origin.', 'Among the historical documents in the ICAA’s archive are the writings of Latin American and Latino artists and critics.', 'The ICAA’s director, Mari Carmen Ramírez, oversaw the creation of an online archive of historical documents related to Latin American and Latino visual art.'],
    correctAnswerIndex: 1,
  },

  {
    id: 'e21',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Hard',
    passage: `While researching a topic, a student has taken the following notes:


The Million Song Dataset (MSD) includes main audio features and descriptive tags for popular songs.

Audio features include acoustic traits such as loudness and pitch intervals.

Many algorithms use these audio features to predict a new song’s popularity.

These algorithms may fail to accurately identify main audio features of a song with varying acoustic traits.

Algorithms based on descriptive tags that describe fixed traits such as genre are more reliable predictors of song popularity.`,
    questionText: 'The student wants to explain a disadvantage of relying on audio features to predict a song’s popularity. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['Many popularity-predicting algorithms are based on a song’s audio features, such as loudness and pitch intervals.', 'Algorithms based on audio features may misidentify the main features of a song with varying acoustic traits, making such algorithms less reliable predictors of popularity than those based on fixed traits.', 'Audio features describe acoustic traits such as pitch intervals, which may vary within a song, whereas descriptive tags describe fixed traits such as genre, which are reliable predictors of popularity.', 'The MSD’s descriptive tags are reliable predictors of a song’s popularity, as the traits they describe are fixed.'],
    correctAnswerIndex: 1,
  },

  {
    id: 'e22',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `The Inca of South America used intricately knotted string devices called quipus to record countable information, like population data and payments. ______ they may have used quipus to record more complex information, like stories and myths, according to researchers.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['As a result,', 'In other words,', 'In addition,', 'For example,'],
    correctAnswerIndex: 2,
  },

  {
    id: 'e23',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `While researching a topic, a student has taken the following notes:


Oracles of the Pink Universe was a 2021 exhibition at the Denver Museum of Art in Colorado.

It featured eight artworks by South African artist Simphiwe Ndzube.

One of these works is a painting titled Assertion of Will.

Assertion of Will depicts three standing figures.

The figures wear clothing made of fabric pieces stitched to the painting’s canvas.`,
    questionText: 'The student wants to describe how fabric is used in Assertion of Will. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['In Assertion of Will, the figures’ clothing is made of fabric pieces stitched to the painting’s canvas.', 'The exhibition Oracles of the Pink Universe featured artworks by artist Simphiwe Ndzube.', 'Depicting three standing, clothed figures, Assertion of Will is a painting by Simphiwe Ndzube.', 'Simphiwe Ndzube’s Assertion of Will was one of eight artworks exhibited in Oracles of the Pink Universe at the Denver Museum of Art.'],
    correctAnswerIndex: 0,
  },

  {
    id: 'e24',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `Some members of the US Supreme Court have resisted calls to televise the court’s oral arguments, concerned that the participants would be tempted to perform for the cameras (and thus lower the quality of the discourse). ______ the justices worry that most viewers would not even watch the full deliberations, only short clips that could be misinterpreted and mischaracterized.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['However,', 'Additionally,', 'In comparison,', 'For example,'],
    correctAnswerIndex: 1,
  },

  {
    id: 'e25',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `In the 1880s, inventor Lewis Latimer improved upon Thomas Edison’s design for the electric light bulb. ______ Latimer made the light bulb more durable by placing cardboard around its carbon filament. With this innovation, Latimer became the first Black inventor to contribute to the electrification of the world.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['Soon, ', 'Regardless, ', 'However, ', 'Specifically,'],
    correctAnswerIndex: 3,
  },

  {
    id: 'e26',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `Award-winning travel writer Linda Watanabe McFerrin considers the background research she conducts on destinations featured in her travel books to be its own reward. ______ McFerrin admits to finding the research phase of her work just as fascinating and engaging as exploring a location in person.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['By contrast,', 'Likewise,', 'Besides,', 'In fact,'],
    correctAnswerIndex: 3,
  },

  {
    id: 'e27',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `While researching a topic, a student has taken the following notes:


The mountain pygmy possum is a mammal species.

Up until 1966, it was believed to be extinct.

That year, a live mountain pygmy possum was identified in the wild in Australia.

The mountain pygmy possum is considered a Lazarus species.

“Lazarus species” is a term for living species of organisms that were once believed to be extinct.`,
    questionText: 'The student wants to define the term “Lazarus species” and provide an example of one. Which choice most effectively uses relevant information from the notes to accomplish these goals?',
    options: ['The term “Lazarus species” describes a living species of organism, such as the mountain pygmy possum, that was once believed to be extinct.', 'One example of a Lazarus species is the mountain pygmy possum, a mammal species that was identified in the wild in Australia in 1966.', 'The mountain pygmy possum, a species of mammal, was identified in the wild in 1966.', 'Sometimes, a species once believed to be extinct is later found living in the wild.'],
    correctAnswerIndex: 0,
  },

  {
    id: 'e28',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `In 1873, Spanish scientist Santiago Ramón y Cajal observed that brain fibers have distinct boundaries with clear end points, a finding that went against earlier assumptions about the brain. ______ scientists had assumed that the brain was a continuous web of fused fibers, not a vast network of distinct, individual cells. `,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['However,', 'Previously,', 'As a result,', 'Likewise,'],
    correctAnswerIndex: 1,
  },

  {
    id: 'e29',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `While researching a topic, a student has taken the following notes:


Platinum is a rare and expensive metal.

It is used as a catalyst for chemical reactions.

Platinum catalysts typically require a large amount of platinum to be effective.

Researcher Jianbo Tang and his colleagues created a platinum catalyst that combines platinum with liquid gallium.

Their catalyst was highly effective and required only trace amounts of platinum (0.0001% of the atoms in the mixture).`,
    questionText: 'The student wants to explain an advantage of the new platinum catalyst developed by Jianbo Tang and his colleagues. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['Researcher Jianbo Tang and his colleagues created a platinum catalyst that combines platinum, a rare and expensive metal, with liquid gallium.', 'Like other platinum catalysts, the new platinum catalyst requires a particular amount of the metal to be effective. ', 'Platinum is a rare and expensive metal that is used as a catalyst for chemical reactions; however, platinum catalysts typically require a large amount of platinum to be effective.', 'While still highly effective, the new platinum catalyst requires far less of the rare and expensive metal than do other platinum catalysts.'],
    correctAnswerIndex: 3,
  },

  {
    id: 'e30',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Hard',
    passage: `In hindsight, given the ideas about the natural world circulating among British scientists in the 1800s, the theory of natural selection was an obvious next step. It may not have been a coincidence, ______ that Charles Darwin and Alfred Wallace arrived at the concept independently. Indeed, contrary to the popular myth of the lone genius, theirs is not the first paradigm-shifting theory to have emerged from multiple scholars working in parallel. `,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['however,', 'then,', 'moreover,', 'for example,'],
    correctAnswerIndex: 1,
  },

  {
    id: 'e31',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `For years, biologists have experimented with using grime-eating bacteria rather than harsh chemicals to clean artworks, and results have been impressive overall. ______ these bacterial strains—which can metabolize centuries’ worth of oil, glue, dirt, and other surface impurities without creating harmful byproducts—have proven more effective than traditional chemical cleaning methods.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['However,', 'In many cases,', 'As a result,', 'Additionally,'],
    correctAnswerIndex: 1,
  },

  {
    id: 'e32',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `In 1968, US Congressman John Conyers introduced a bill to establish a national holiday in honor of Dr. Martin Luther King Jr. The bill didn’t make it to a vote, but Conyers was determined. He teamed up with Shirley Chisholm, the first Black woman to be elected to Congress, and they resubmitted the bill every session for the next fifteen years. ______ in 1983, the bill passed.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['Instead,', 'Likewise,', 'Finally,', 'Additionally,'],
    correctAnswerIndex: 2,
  },

  {
    id: 'e33',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `It has long been thought that humans first crossed a land bridge into the Americas approximately 13,000 years ago. ______ based on radiocarbon dating of samples uncovered in Mexico, a research team recently suggested that humans may have arrived more than 30,000 years ago—much earlier than previously thought.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['As a result,', 'Similarly,', 'However,', 'In conclusion,'],
    correctAnswerIndex: 2,
  },

  {
    id: 'e34',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `While researching a topic, a student has taken the following notes:


Muslins are woven cotton fabrics with a variety of uses.

Dhaka muslin is a handmade fabric produced in Dhaka, Bangladesh.

It has an extremely fine weave and is primarily used to make luxury clothing.

Sheeting muslin is a machine-made fabric produced in factories.

It has a coarse weave and is primarily used to upholster furniture and create backdrops for theater sets.`,
    questionText: 'The student wants to emphasize a difference between the two muslins. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['Dhaka muslin is a handmade fabric with an extremely fine weave, while sheeting muslin is machine made with a coarse weave.', 'Dhaka muslin and sheeting muslin are two different types of woven cotton fabrics.', 'Muslins can be used in a variety of ways, from making luxury clothing to upholstering furniture and creating backdrops for theater sets.', 'Sheeting muslin is machine made, has a coarse weave, and is used for furniture and theater sets.'],
    correctAnswerIndex: 0,
  },

  {
    id: 'e35',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `While researching a topic, a student has taken the following notes:


Grimanesa Amoros is a Peruvian American artist well known for her LED light sculptures.

Her sculpture Uros Island is made of smooth multicolored LED domes.

It occupies 335 cubic feet of space.

Her sculpture Fortuna is made of entangled blue and white LED tubes.

It occupies 19,950 cubic feet of space.`,
    questionText: 'The student wants to emphasize a similarity between Uros Island and Fortuna. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['The smooth LED domes of Grimanesa Amoros’s Uros Island stand in contrast to the tangled LED tubes of Fortuna.', 'At 19,950 cubic feet in size, Grimanesa Amoros’s Fortuna cuts a larger figure than the 335-cubic-foot Uros Island.', 'Grimanesa Amoros is the artist behind Uros Island—a sculpture made of smooth multicolored LED domes.', 'Uros Island is an LED light sculpture made by Grimanesa Amoros, as is Fortuna.'],
    correctAnswerIndex: 3,
  },

  {
    id: 'e36',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `While researching a topic, a student has taken the following notes:


A lever is a simple machine consisting of a rigid beam and a fulcrum.

The fulcrum is the point about which the beam pivots.

The input force (effort) is the force applied to the lever.

The output force (load) is the force that the lever exerts on another object.

In first-class levers, the fulcrum is located between the effort and the load.

In second-class levers, the load is located between the effort and the fulcrum.`,
    questionText: 'The student wants to contrast first-class levers and second-class levers. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['In levers, the effort is the force applied to the lever; the load, in contrast, is the force that the lever exerts on another object.', 'In first-class and second-class levers, the fulcrum and the load are in different locations.', 'First-class levers are simple machines consisting of a rigid beam and a fulcrum, but then again, the same is true of second-class levers.', 'In first-class levers, the fulcrum is located between the effort and the load, but in second-class levers, the load is located between the effort and the fulcrum.'],
    correctAnswerIndex: 3,
  },

  {
    id: 'e37',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Hard',
    passage: `While researching a topic, a student has taken the following notes:


Some powerful works of literature have so influenced readers that new legislation has been passed as a result.

The Interesting Narrative of the Life of Olaudah Equiano (1789) is the autobiography of a man who endured slavery on both sides of the Atlantic.

Equiano’s book contributed to the passage of the Slave Trade Act of 1807.

The Jungle (1906) is a fictional work by Upton Sinclair that describes unsanitary conditions in US meatpacking plants.

Sinclair’s book contributed to the passage of the Pure Food and Drug Act in 1906.`,
    questionText: 'The student wants to emphasize a difference between the two books. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['Although both are powerful works of literature that contributed to new legislation, Equiano’s book is an autobiography, while Sinclair’s is fictional.', 'They may have written about different topics, but Equiano and Sinclair both influenced readers.', 'The 1807 Slave Trade Act resulted in part from a book by Equiano, while the 1906 Pure Food and Drug Act resulted in part from a book by Sinclair. ', 'The Interesting Narrative of the Life of Olaudah Equiano and The Jungle are two works of literature that contributed to new legislation (concerning the slave trade and food safety, respectively). '],
    correctAnswerIndex: 0,
  },

  {
    id: 'e38',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `Researchers believe that pieces of hull found off Oregon’s coast are from a Spanish cargo ship that was lost in 1697. Stories passed down among the area’s Confederated Tribes of Siletz Indians support this belief. ______ Siletz stories describe how blocks of beeswax, an item the ship had been carrying, began washing ashore after the ship was lost. `,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['For this reason,', 'For example,', 'However,', 'Likewise,'],
    correctAnswerIndex: 1,
  },

  {
    id: 'e39',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `While researching a topic, a student has taken the following notes:


Scientists have developed a “freeze-thaw” battery that can retain 92% of its charge after twelve weeks.

The battery contains molten salt (a type of salt that liquifies when heated and solidifies at room temperature).

When the salt is in a liquid state, energy flows through the battery.

When the salt is in a solid state, energy stops flowing and is stored in the battery.

The stored (frozen) energy can be used by reheating (thawing) the battery.`,
    questionText: 'The student wants to specify how the salt enables energy storage. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['Scientists have developed a freeze-thaw battery that contains molten salt, which liquifies when heated and solidifies at room temperature.', 'The stored energy in a freeze-thaw battery, which contains molten salt, can be used by reheating the battery.', 'When the molten salt in a freeze-thaw battery solidifies at room temperature, energy stops flowing and can be stored in the battery.', 'Molten salt allows a freeze-thaw battery to retain 92% of its charge after twelve weeks.'],
    correctAnswerIndex: 2,
  },

  {
    id: 'e40',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `Alexander Lawrence Posey (1873–1908) varied his focus and tone depending on the genre in which he was writing. In his poetry, he used heartfelt language to evoke the beauty and peacefulness of his natural surroundings; in his journalism, ______ he employed humor and satire to comment on political issues affecting his Muskogee Creek community.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['that is,', 'granted,', 'similarly,', 'by contrast,'],
    correctAnswerIndex: 3,
  },

  {
    id: 'e41',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `While researching a topic, a student has taken the following notes:


Musicians around the world have used protest songs to raise awareness about human rights violations.

US folk singer Aunt Molly Jackson released the protest song “Poor Miner’s Farewell” in 1932.

It exposed the unlivable wages and dangerous working conditions coal miners faced in Kentucky during the 1920s and 1930s.

South African singer-songwriter Hugh Masekela released the protest song “Bring Him Back Home” in 1987.

It called on the South African government to free Nelson Mandela, an anti-apartheid leader who’d been unjustly imprisoned.`,
    questionText: 'The student wants to contrast the song “Poor Miner’s Farewell” with the song “Bring Him Back Home.” Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['The songs “Poor Miner’s Farewell” and “Bring Him Back Home” both raised awareness about human rights violations.', 'While both are protest songs, “Poor Miner’s Farewell” is about coal miners in Kentucky, whereas “Bring Him Back Home” is about the anti-apartheid leader Nelson Mandela.', 'Hugh Masekela’s song “Bring Him Back Home,” released in 1987, called on the South African government to free Nelson Mandela.', 'Released in 1932 by Aunt Molly Jackson, the song “Poor Miner’s Farewell” was a protest against the unlivable wages and dangerous working conditions faced by Kentucky coal miners.'],
    correctAnswerIndex: 1,
  },

  {
    id: 'e42',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `While researching a topic, a student has taken the following notes:


The Azores is a group of islands about 870 miles off the coast of Portugal.

Historians have long believed that in the fifteenth century Portuguese mariners were the first humans to populate the Azores.

A 2015 study coauthored by Sofia Gabriel and Maria da Luz Mathias found that Vikings from Scandinavia may have populated the Azores as early as the ninth century.

The researchers found a genetic connection between house mice in the Azores and house mice in Scandinavia.

House mice may have traveled from Scandinavia to the Azores on Viking ships.`,
    questionText: 'The student wants to specify who may have first populated the Azores, according to the 2015 study. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['Historians have long believed that the first humans to populate the Azores, a group of islands about 870 miles off the coast of Portugal, arrived in the fifteenth century.', 'Portuguese mariners may not have been the first humans to populate the Azores.', 'In their 2015 study, the researchers found a genetic connection between house mice in the Azores and those in Scandinavia.', 'According to a 2015 study, the first humans to populate the Azores may have been Vikings from Scandinavia, not mariners from Portugal as previously believed.'],
    correctAnswerIndex: 3,
  },

  {
    id: 'e43',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `Geoscientists have long considered Hawaii’s Mauna Loa volcano to be Earth’s largest shield volcano by volume, measuring approximately 74,000 cubic kilometers. ______ according to a 2020 study by local geoscientist Michael Garcia, Hawaii’s Pūhāhonu shield volcano is significantly larger, boasting a volume of about 148,000 cubic kilometers.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['Secondly,', 'Consequently,', 'Moreover,', 'However,'],
    correctAnswerIndex: 3,
  },

  {
    id: 'e44',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Hard',
    passage: `A turtle shell appears external to the animal, protecting its body like armor. ______ the shell is often incorrectly assumed to be an exoskeleton, a rigid outer casing like that of a crustacean or an insect, when in fact it is an endoskeleton, a part of the turtle’s internal bone structure, more akin to a spine or a pair of ribs.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['That being said,', 'However,', 'For instance,', 'Hence,'],
    correctAnswerIndex: 3,
  },

  {
    id: 'e45',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `Okot p’Bitek’s poem Song of Lawino (1966) explores postcolonial Ugandan life through the eyes of a woman living in a rural village. With its vibrant imagery, bitingly satiric tone, and dexterous use of traditional Acholi song and phraseology, the poem inspired a generation of East African writers. ______ those who adopted its style are often referred to as Okot School poets.  `,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['Nevertheless,', 'Fittingly,', 'By comparison, ', 'Instead,'],
    correctAnswerIndex: 1,
  },

  {
    id: 'e46',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Hard',
    passage: `While researching a topic, a student has taken the following notes:


The fifth Solvay Conference on Physics was held in 1927.

It brought together twenty-nine of the era’s preeminent scientists to discuss the emerging field of quantum theory.

The conference famously featured a debate between physicists Albert Einstein and Niels Bohr.

Bohr proposed that subatomic entities like electrons had only probable realities until they were observed.

Einstein argued that subatomic entities like electrons had a reality independent of observation.

Bohr’s position, later called the Copenhagen interpretation, remains the most widely accepted theory of quantum mechanics. `,
    questionText: 'The student wants to place Einstein’s argument within its historical context. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['During the dawn of quantum theory, Einstein maintained the independent reality of some subatomic entities, although Bohr’s opposing interpretation would become the widely accepted view.', 'At the 1927 Solvay Conference on Physics, Einstein disagreed with Bohr’s argument that subatomic entities like electrons had a reality independent of observation.', 'The attendees of the 1927 Solvay Conference were among the preeminent scientists of their era, including Einstein, who opposed Bohr’s proposal.', 'In 1927, Einstein and Bohr engaged in a famous debate; Bohr’s argument, later called the Copenhagen interpretation, would remain popular decades after.'],
    correctAnswerIndex: 0,
  },

  {
    id: 'e47',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `Before the 1847 introduction of the US postage stamp, the cost of postage was usually paid by the recipient of a letter rather than the sender, and recipients were not always able or willing to pay promptly. ______ collecting this fee could be slow and arduous, and heaps of unpaid-for, undeliverable mail piled up in post offices.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['Regardless,', 'On the contrary,', 'Consequently,', 'For example,'],
    correctAnswerIndex: 2,
  },

  {
    id: 'e48',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Medium',
    passage: `While researching a topic, a student has taken the following notes:


Allan Houser was a Chiricahua Warm Springs Apache sculptor, illustrator, and painter.

Many of his sculptures featured Native American figures.

He depicted this subject matter using abstract, modernist forms, developing a distinctive style that influenced many other artists.

His well-known sculpture Sacred Rain Arrow was pictured on the State of Oklahoma license plate.`,
    questionText: 'The student wants to describe the distinctive style of Houser’s sculptures. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['A sculptor, illustrator, and painter, Houser developed a distinctive style for portraying Native American figures.', 'Houser’s sculptures employ abstract, modernist forms to depict Native American figures.', 'Many other artists have been influenced by the style of Houser’s sculptures.', 'The sculpture Sacred Rain Arrow is a well-known example of Houser’s style.'],
    correctAnswerIndex: 1,
  },

  {
    id: 'e49',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Hard',
    passage: `While researching a topic, a student has taken the following notes:


Digital Light Synthesis (DLS) is a form of additive manufacturing that utilizes light to rapidly cure liquid resin into high-quality, 3D objects.

Step 1: Ultraviolet (UV) light images are projected up into a pool of liquid resin, where the object’s first layer takes shape.

Step 2: The partially cured resin object is raised, leaving a thin space (a “dead zone”) beneath it for oxygen and liquid resin to flow through.

Step 3: The UV light passes through the dead zone—maintaining the flow of resin—and partially cures additional layers of the object.

Step 4: When the resin object is complete, it is baked in an oven to complete the curing.`,
    questionText: 'The student wants to describe how DLS cures 3D objects. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: ['DLS is a form of additive manufacturing that creates a “dead zone” in which UV light solidifies layer by layer before being baked in an oven, creating a high-quality, 3D object.', 'DLS cures 3D objects by passing through a “dead zone,” adding layers to the object, then curing the object in an oven.', 'In DLS, UV light images are projected into a liquid resin pool to cure a 3D object layer by layer; once solidified, the object is baked in an oven.', 'In DLS, UV light is projected into layers of liquid resin until the resin solidifies and passes through a “dead zone,” wherein the curing is completed.'],
    correctAnswerIndex: 2,
  },

  {
    id: 'e50',
    subject: 'verbal',
    domainId: 'expression',
    difficulty: 'Easy',
    passage: `A potter choosing which type of clay to use for a piece considers two key factors: the desired look of the piece and its intended use. ______ earthenware clay is often used for decorative pieces because of its rustic look. This type of clay is not often used in industrial settings, though, because it is less durable than other clays.`,
    questionText: 'Which choice completes the text with the most logical transition?',
    options: ['In other words,', 'Regardless,', 'In conclusion,', 'For example,'],
    correctAnswerIndex: 3,
  },

  {
    id: 'c1',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `Generations of mystery and horror ______ have been influenced by the dark, gothic stories of celebrated American author Edgar Allan Poe (1809–1849).`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['writers', 'writers,', 'writers—', 'writers;'],
    correctAnswerIndex: 0,
  },

  {
    id: 'c2',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `The radiation that ______ during the decay of radioactive atomic nuclei is known as gamma radiation.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['occurs', 'have occurred', 'occur', 'are occurring'],
    correctAnswerIndex: 0,
  },

  {
    id: 'c3',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Medium',
    passage: `The Mission 66 initiative, which was approved by Congress in 1956, represented a major investment in the infrastructure of overburdened national ______ it prioritized physical improvements to the parks’ roads, utilities, employee housing, and visitor facilities while also establishing educational programming for the public.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['parks and', 'parks', 'parks;', 'parks,'],
    correctAnswerIndex: 2,
  },

  {
    id: 'c4',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `A recent study tracked the number of bee species present in twenty-seven New York apple orchards over a ten-year period. ______ found that when wild growth near an orchard was cleared, the number of different bee species visiting the orchard decreased. `,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['Entomologist Heather Grab:', 'Entomologist, Heather Grab,', 'Entomologist Heather Grab', 'Entomologist Heather Grab,'],
    correctAnswerIndex: 2,
  },
  
  {
    id: 'c5',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `Despite being cheap, versatile, and easy to produce, ______ they are made from nonrenewable petroleum, and most do not biodegrade in landfills.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['there are two problems associated with commercial plastics:', 'two problems are associated with commercial plastics:', 'commercial plastics’ two associated problems are that', 'commercial plastics have two associated problems:'],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'c6',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `The algaita is a double reed wind instrument from West Africa. The reed of a wind instrument is the mouthpiece ______ A double reed contains two pieces of cane that vibrate and produce sound as air passes between them.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['where sound is made?', 'where is sound made.', 'where sound is made.', 'where is sound made?'],
    correctAnswerIndex: 2,
  },
  
  {
    id: 'c7',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Medium',
    passage: `On April 5, 1977, Kitty Cone and 150 other disability rights activists entered a San Francisco federal building. After pleading for years—to no effect—for the passage of key antidiscrimination legislation, ______ until their demands were addressed. Finally, on April 28, the legislation was signed.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['pressure on lawmakers increased when the activists staged a sit-in protest', 'a sit-in protest staged by the activists increased pressure on lawmakers', 'lawmakers came under increased pressure when the activists staged a sit-in protest', 'the activists increased pressure on lawmakers by staging a sit-in protest'],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'c8',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `In recent years, economists around the world have created new tools that quantify the overall well-being of a country’s citizens. Economists in India, for example, use an Ease of Living Index. This tool ______ economic potential, sustainability, and citizens’ quality of life.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['measures', 'had measured', 'would have measured', 'will have been measuring'],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'c9',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Medium',
    passage: `French philosopher René Descartes doubted whether he could prove his own existence. Eventually, he found proof in his famous phrase “I think, therefore I am.” The ______ complexity: only those who exist would be able to ponder their existence.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['phrases’ simplicity masks its', 'phrases simplicity masks their', 'phrase’s simplicity masks their', 'phrase’s simplicity masks its'],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'c10',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `What is the correct pronunciation of Kiribati? In the Gilbertese language spoken by residents of the island nation, the letter combination -ti makes the -s sound; as a result, the country’s name ______ pronounced “Kiribas.”`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['are', 'have been', 'are being', 'is'],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'c11',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Medium',
    passage: `In a 2023 study, researchers documented a fascinating behavior in the aquatic plant Elodea densa. When exposed to low levels of light, the plant’s ______ the cellular organs that generate energy from light—reshuffled to form a tightly packed, glass-like surface ideal for collecting more light.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['chloroplasts', 'chloroplasts;', 'chloroplasts,', 'chloroplasts—'],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'c12',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Medium',
    passage: `A study led by scientist Rebecca Kirby at the University of Wisconsin–Madison found that black bears that eat human food before hibernation have increased levels of a rare carbon isotope, ______ due to the higher 13C levels in corn and cane sugar. Bears with these elevated levels were also found to have much shorter hibernation periods on average.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['carbon-13, (13C)', 'carbon-13 (13C)', 'carbon-13, (13C),', 'carbon-13 (13C),'],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'c13',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `American abstract artist Richard ______ his installations to make passersby keenly aware of how one’s movements are affected by the physical features of one’s environment, assembles large-scale steel plates into sculptures that dominate the outdoor spaces they occupy.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['Serra is intending', 'Serra, intends', 'Serra, intending', 'Serra intends'],
    correctAnswerIndex: 2,
  },
  
  {
    id: 'c14',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `Researchers Amit Kumar and Nicholas Epley investigated how ______ In a series of experiments conducted in 2022, they found that people performing small acts of kindness underestimated the positive effect their actions had on others.  `,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['do people perceive acts of kindness.', 'do people perceive acts of kindness? ', 'people perceive acts of kindness?', 'people perceive acts of kindness.'],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'c15',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `The Limón technique, developed by Mexican-born dancer and choreographer Jose Limón, is known for its emphasis on breath control and its interplay of weight and ______ dancers may explore, for example, the moment of mid-air suspension at the top of a jump.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['weightlessness', 'weightlessness which', 'weightlessness,', 'weightlessness;'],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'c16',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `The haiku-like poems of Tomas Tranströmer, which present nature- and dream-influenced images in crisp, spare language, have earned the Swedish poet praise from leading contemporary ______ them Nigerian American essayist and novelist Teju Cole, who has written that Tranströmer’s works “contain a luminous simplicity.”`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['writers. Among ', 'writers among ', 'writers; among ', 'writers, among '],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'c17',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `Mathematician and meteorologist Edward Lorenz used the metaphor of the “butterfly effect” to explain how seemingly minor events can have major impacts on future weather. According to Lorenz’s metaphor, the wind from a butterfly flapping ______ in Brazil might eventually grow into a storm elsewhere across the globe.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['its wings', 'its wings’', 'it’s wing’s', 'it’s wings’'],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'c18',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `When a given industry—water and electricity are two well-known examples—carries high infrastructural start-up costs and other barriers that discourage competition, ______ of just one or two suppliers per municipality. Such industries are known as natural monopolies.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['these often consist', 'they often consist', 'it often consists', 'this often consists'],
    correctAnswerIndex: 2,
  },
  
  {
    id: 'c19',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `In 2021, Mexican biologist Martha Lydia Macías-Rubalcava led a review of the scientific literature related to endophytic fungi (i.e., fungi that live inside a host ______ researching 120 endophytic fungi–produced compounds, she found that their phytotoxicity can make them viable alternatives to chemical herbicides for controlling weeds.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['plant). By', 'plant), by', 'plant) and by', 'plant) by'],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'c20',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Medium',
    passage: `Bonnie Buratti of NASA’s Jet Propulsion Laboratory ______ data about Saturn’s rings collected by the Cassini spacecraft when she made an interesting discovery: the tiny moons embedded between and within Saturn’s rings are shaped by the buildup of ring material on the moons’ surfaces.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['studies ', 'has been studying', 'will study', 'was studying'],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'c21',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `Roughly 300 nights a year, when the cold air descending from the Andes Mountains meets the warm air rising from Venezuela’s coastal Lake Maracaibo, the result is a spectacular lightning storm, its strikes so bright, so localized, and so ______ that it has become known as “Maracaibo’s Lighthouse.”`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['dependable:', 'dependable; ', 'dependable ', 'dependable,'],
    correctAnswerIndex: 2,
  },
  
  {
    id: 'c22',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `Jamaican British artist Willard Wigan is known for his remarkable ______ so small that they are best viewed through a microscope, Wigan’s sculptures are made from tiny natural materials, such as spiderweb strands.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['microsculptures creations', 'microsculptures, creations', 'microsculptures. Creations', 'microsculptures and creations'],
    correctAnswerIndex: 2,
  },
  
  {
    id: 'c23',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `While one requires oxygen and one does ______ and anaerobic respiration are both forms of cellular respiration—that is, they are processes by which cells break down glucose to use as energy.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['not aerobic', 'not. Aerobic', 'not, aerobic', ' not; aerobic'],
    correctAnswerIndex: 2,
  },
  
  {
    id: 'c24',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `In a recent analysis of lyrical trends in 350,000 songs, researchers cite increases in certain measures, such as the ratio of choruses to verses, as evidence music lyrics are becoming more repetitive. For instance, from 1970 to 2020, ______ chorus-to-verse ratios trended similarly, with each genre’s data indicating that relative to the number of unique verses, the number of repeated choruses in songs increased.  `,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['rocks and raps', 'rock’s and rap’s', 'rocks and rap’s', 'rock and rap’s'],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'c25',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `Supported by biochemical analyses of over 2,000 skeletons from the Middle Ages, ______`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['vegetables and grains were, a 2022 study found, the primary components of early medieval rulers’ diets.', 'early medieval rulers’ diets were found, in a 2022 study, to have primarily consisted of vegetables and grains.', 'the primary components of early medieval rulers’ diets were vegetables and grains, according to a 2022 study.', 'findings from a 2022 study suggested that vegetables and grains were the primary components of early medieval rulers’ diets.'],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'c26',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `To serve local families during the Great Depression, innovative New York City librarian Pura Belpré offered storytelling in both English and Spanish, an uncommon ______ celebrated el Día de los Tres Reyes Magos, an important community holiday; and put on puppet shows dramatizing Puerto Rican folktales.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['practice, at the time', 'practice at the time;', 'practice, at the time,', 'practice at the time,'],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'c27',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Medium',
    passage: `Photosynthesis, the mechanism by which plants use sunlight to turn carbon dioxide and water into ______ is fueled in part by an enzyme called Photosystem II that harvests energy-giving electrons from water molecules.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['nutrients', 'nutrients and', 'nutrients,', 'nutrients—'],
    correctAnswerIndex: 2,
  },
  
  {
    id: 'c28',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `As a behavioral economist, Katy Milkman of the University of Pennsylvania recognizes that people sometimes make irrational economic decisions. Milkman’s research can thus address anomalies that neoclassical economic ______ assume that people are consistently rational decision-makers—cannot explain. `,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['models—which ', 'models, which', 'models which', 'models which—  '],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'c29',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `Human-made (synthetic) fibers used in clothes and many other consumer products are more durable than most natural plant ______ the manufacture of synthetic fibers requires toxic chemical solvents that can pollute air and water.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['fibers,', 'fibers but', 'fibers', 'fibers, but'],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'c30',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `Entomologists Yash Sondhi and Samuel Fabian have tried to explain why moths fly erratically around light sources at night. Knowing that flying insects keep their backs pointed toward sunlight during the day, ______`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['the researchers theorize that moths, mistaking nighttime lights for the Sun, continually try to reorient their bodies while flying near such lights.', 'the researchers’ theory is that moths mistake nighttime lights for the Sun, continually trying to reorient their bodies while flying near such lights.', 'moths mistake nighttime lights for the Sun and continually try to reorient their bodies while flying near such lights, the researchers theorize. ', 'moths continually try to reorient their bodies while flying near nighttime lights, the researchers theorize, mistaking such lights for the Sun.'],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'c31',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Medium',
    passage: `After a spate of illnesses as a child, Wilma Rudolph was told she might never walk again. Defying all odds, Rudolph didn’t just walk, she ______ the 1960 Summer Olympics in Rome, she won both the 100- and 200-meter dashes and clinched first place for her team in the 4x100-meter relay, becoming the first US woman to win three gold medals in a single Olympics.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['ran—fast—during', 'ran—fast during', 'ran—fast, during', 'ran—fast. During'],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'c32',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `In her 1983 book The Managed Heart: Commercialization of Human Feeling, sociologist Arlie Russell Hochschild first explored at length her conception of a “sociology of emotions”—the idea that the various cultural and ideological frameworks a person has internalized (class, gender, political affiliation, etc.) ______ each emotional reaction that person has within a situation.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['underlies', 'is underlying', 'underlie', 'has been underlying'],
    correctAnswerIndex: 2,
  },
  
  {
    id: 'c33',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `Each night in Gijón, Spain, a section of the city’s marina is bathed in a soft green glow. The source of the glow is the Árbol de la Sidra, a large sculpture made up of 3,200 recycled glass bottles. A lamp inside the tree-shaped structure ______ the green glass.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['will be illuminating', 'illuminates', 'would illuminate', 'illuminated'],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'c34',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `Recent analysis of 32532 Thereus—an outer solar system object orbiting the Sun between Jupiter and Saturn—has determined its color to be gray, suggesting an icy composition. Such interpretations are ultimately ______ the object’s gray coloration may be an incidental effect of radiation, solar wind, or collisions with other objects rather than evidence of its physical makeup. `,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['speculative, though ', 'speculative, though; ', 'speculative; though ', 'speculative, though,'],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'c35',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `Rabinal Achí is a precolonial Maya dance drama performed annually in Rabinal, a town in the Guatemalan highlands. Based on events that occurred when Rabinal was a city-state ruled by a king, ______ had once been an ally of the king but was later captured while leading an invading force against him.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['Rabinal Achí tells the story of K’iche’ Achí, a military leader who', 'K’iche’ Achí, the military leader in the story of Rabinal Achí,', 'the military leader whose story is told in Rabinal Achí, K’iche’ Achí, ', 'there was a military leader, K’iche’ Achí, who in Rabinal Achí'],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'c36',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `During the American Civil War, Thomas Morris Chester braved the front lines as a war correspondent for the Philadelphia Press. Amplifying the voices and experiences of Black soldiers ______ of particular importance to Chester, who later became an activist and lawyer during the postwar Reconstruction period.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['were', 'have been', 'are', 'was'],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'c37',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `In 1903, environmentalist John Muir guided President Theodore Roosevelt on a scenic, sprawling trip through California’s Yosemite Valley. Upon returning from the three-day excursion, Roosevelt ______ to conserve the nation’s wilderness areas, a vow he upheld for his remaining six years in office.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['is vowing', 'vowed', 'will vow', 'vows'],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'c38',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `To survive when water is scarce, embryos inside African turquoise killifish eggs ______ a dormant state known as diapause. In this state, embryonic development is paused for as long as two years—longer than the life span of an adult killifish.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['enter', 'to enter', 'having entered', 'entering'],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'c39',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `In 1637, the price of tulips skyrocketed in Amsterdam, with single bulbs of rare varieties selling for up to the equivalent of $200,000 in today’s US dollars. Some historians ______ that this “tulip mania” was the first historical instance of an asset bubble, which occurs when investors drive prices to highs not supported by actual demand.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['claiming', 'claim', 'having claimed', 'to claim'],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'c40',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Medium',
    passage: `Professional American football player Fred Cox invented one of the world’s most popular toys. In the 1970s, he came up with the idea for the Nerf football, which ______ of the harder and heavier regulation football.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['were a smaller, foam version', 'are smaller, foam versions', 'were smaller, foam versions', 'is a smaller, foam version'],
    correctAnswerIndex: 3,
  },
  
  {
    id: 'c41',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `The Herfindahl-Hirschman Index (HHI), a commonly used measure of competition between companies in a particular market, ranges from a score of zero to 10,000 points. Compared with that of a highly concentrated market—that is, a market controlled by very few companies—______`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['a market that is less concentrated will have a much lower HHI score.', 'the HHI score of a less concentrated market will be much lower.', 'when a market is less concentrated, its HHI score will be much lower.', 'a less concentrated market will have an HHI score that is much lower.'],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'c42',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `According to the traditional RYB (red-yellow-blue) color model, yellow is a complementary color to purple. However, yellow ______ considered complementary to blue in modern color theory.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['is', 'having been', 'to be', 'being'],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'c43',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `Formed in 1967 to foster political and economic stability within the Asia-Pacific region, the Association of Southeast Asian Nations was originally made up of five members: Thailand, the Philippines, Singapore, Malaysia, and Indonesia. By the end of the 1990s, the organization ______ its initial membership.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['has doubled', 'had doubled', 'doubles', 'will double'],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'c44',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `Atoms in a synchrotron, a type of circular particle accelerator, travel faster and faster until they ______ a desired energy level, at which point they are diverted to collide with a target, smashing the atoms.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['will reach', 'reach', 'had reached', 'are reaching'],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'c45',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `Led by Syrian American astronomer Shadia Habbal, the Solar Wind Sherpas are an intrepid team of scientists who travel the globe to study solar winds, the streams of particles emanating from the Sun that are only visible from certain locations during a total solar eclipse. When such an eclipse is imminent, the Sherpas pack up their telescopes and ______ ready.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['get', 'had gotten', 'got', 'were getting'],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'c46',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Medium',
    passage: `In January 1776, Thomas Paine published Common Sense, an appeal for freedom from the British monarchy that famously helped ignite the desire for independence among the American colonists. After the colonies achieved their independence, Paine moved to Paris, where the provocative ______ would contribute to another revolution—the French Revolution.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['authors political writings', 'author’s political writings', 'author’s political writing’s', 'authors’ political writings’'],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'c47',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `Zydeco music originated in the French Creole community of southwest Louisiana. One instrument that gives zydeco its unique sound is the vest frottoir. The vest frottoir ______ a wearable washboard that is played by rubbing spoons or bottle openers against it.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['have been', 'is', 'were', 'are'],
    correctAnswerIndex: 1,
  },
  
  {
    id: 'c48',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `According to linguist Martin Joos, speakers of the English language ______ five main registers—frozen, formal, consultative, casual, and intimate—which they rotate between depending on the situation.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['use', 'is using', 'uses', 'has used'],
    correctAnswerIndex: 0,
  },
  
  {
    id: 'c49',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Hard',
    passage: `In the list “Adorable Things” from Sei Shōnagon’s Pillow Book, the author delights in baby sparrows, a face drawn on a melon, and a young courtier in ceremonial garb. So shrewd an observer is Shōnagon, a lady-in-waiting to Empress Teishi, that her book’s musings on tenth-century Japanese courtly life ______ readers a thousand years later.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['fascinate', 'has fascinated', 'fascinates', 'is fascinating'],
    correctAnswerIndex: 0,
  },

  {
    id: 'c50',
    subject: 'verbal',
    domainId: 'conventions',
    difficulty: 'Easy',
    passage: `By analyzing ice cores from Greenland and Antarctica, a research team at Sweden’s Lund University discovered evidence of a solar storm that occurred 9,200 years ago. Scientists had previously thought the Sun to be in a relatively “quiet” phase at that ______ the Lund team’s finding suggests otherwise.`,
    questionText: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: ['time but', 'time, but', 'time,', 'time'],
    correctAnswerIndex: 1,
  },
];

export const DECORATION_WORDS = [
  { text: '1600', size: 'text-4xl', color: 'text-yellow-400', top: '10%', left: '5%' },
  { text: '1500+', size: 'text-3xl', color: 'text-yellow-300', top: '20%', right: '10%' },
  { text: 'Scholarship', size: 'text-xl', color: 'text-blue-300', bottom: '15%', left: '8%' },
  { text: 'Hard Work', size: 'text-2xl', color: 'text-white', top: '50%', left: '2%' },
  { text: 'Dedication', size: 'text-xl', color: 'text-blue-200', top: '5%', left: '50%' },
  { text: 'Success', size: 'text-4xl', color: 'text-yellow-500', bottom: '10%', right: '5%' },
  { text: 'Focus', size: 'text-lg', color: 'text-blue-300', top: '70%', right: '15%' },
  { text: 'Dreams', size: 'text-2xl', color: 'text-white', bottom: '30%', left: '10%' },
  { text: 'Self-Study', size: 'text-3xl', color: 'text-blue-100', top: '30%', left: '20%' },
  { text: 'Ivy League', size: 'text-2xl', color: 'text-yellow-200', top: '15%', right: '30%' },
];
