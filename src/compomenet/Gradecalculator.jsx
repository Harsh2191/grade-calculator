import React, { useState } from 'react';
import './Gradecalculator.css';

function GradeCalculator() {
  const [ia1, setIa1] = useState('');
  const [ia2, setIa2] = useState('');
  const [ia3, setIa3] = useState('');
  const [assignment, setAssignment] = useState('');
  const [quiz, setQuiz] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [grade, setGrade] = useState('');

  const calculateGrade = () => {
    // Validation to check if input values exceed their maximum values
    if (parseFloat(ia1) > 50 || parseFloat(ia2) > 50 || parseFloat(ia3) > 50 || parseFloat(assignment) > 20 || parseFloat(quiz) > 30) {
      alert('One or more input values exceed their maximum values.');
      return;
    }

    const totalIA = (parseFloat(ia1) + parseFloat(ia2) + parseFloat(ia3)) * (30 / 150);
    const totalAssignment = parseFloat(assignment) * (10 / 20);
    const totalQuiz = parseFloat(quiz) * (10 / 30);
    const total = totalIA + totalAssignment + totalQuiz;

    setTotalMarks(total.toFixed(2));

    let grade = '';
    if (total < 20) {
      grade = 'F';
    } else if (total < 25) {
      grade = 'E';
    } else if (total < 30) {
      grade = 'D';
    } else if (total < 35) {
      grade = 'C';
    } else if (total < 40) {
      grade = 'B';
    } else if (total < 45) {
      grade = 'A';
    } else if (total <= 50) {
      grade = 'A+';
    }

    setGrade(grade);
  };

  const clearInputs = () => {
    setIa1('');
    setIa2('');
    setIa3('');
    setAssignment('');
    setQuiz('');
    setTotalMarks('');
    setGrade('');
  };

  return (
    <div className="container">
      <h2>Grade Calculator</h2>
      <label htmlFor="ia1">Internal Assessment 1 (0-50):</label>
      <input type="number" id="ia1" min="0" max="50" value={ia1} onChange={e => setIa1(e.target.value)} />
      <label htmlFor="ia2">Internal Assessment 2 (0-50):</label>
      <input type="number" id="ia2" min="0" max="50" value={ia2} onChange={e => setIa2(e.target.value)} />
      <label htmlFor="ia3">Internal Assessment 3 (0-50):</label>
      <input type="number" id="ia3" min="0" max="50" value={ia3} onChange={e => setIa3(e.target.value)} />
      <label htmlFor="assignment">Assignment (0-20):</label>
      <input type="number" id="assignment" min="0" max="20" value={assignment} onChange={e => setAssignment(e.target.value)} />
      <label htmlFor="quiz">Quiz (0-30):</label>
      <input type="number" id="quiz" min="0" max="30" value={quiz} onChange={e => setQuiz(e.target.value)} />
      <div className="button-row">
        <button onClick={calculateGrade}>Calculate</button>
        <button onClick={clearInputs}>Clear</button>
      </div>
      <h3 className="output" id="output">Total Marks: {totalMarks}</h3>
      <h3 className="output" id="grade">Grade: {grade}</h3>
    </div>
  );
}

export default GradeCalculator;
