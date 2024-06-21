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
  const [maxValues, setMaxValues] = useState({ ia1: 50, ia2: 50, ia3: 50, assignment: 20, quiz: 30 });
  const [totalMarksMax, setTotalMarksMax] = useState(50); 

  const calculateGrade = () => {
    if (
      parseFloat(ia1) > maxValues.ia1 ||
      parseFloat(ia2) > maxValues.ia2 ||
      parseFloat(ia3) > maxValues.ia3 ||
      parseFloat(assignment) > maxValues.assignment ||
      parseFloat(quiz) > maxValues.quiz
    ) {
      alert('One or more input values exceed their maximum values.');
      return;
    }


    const totalIA = (parseFloat(ia1) + parseFloat(ia2) + parseFloat(ia3)) * (totalMarksMax*0.6/ (maxValues.ia1 + maxValues.ia2 + maxValues.ia3));
    const totalAssignment = parseFloat(assignment) * ( totalMarksMax*0.2/ maxValues.assignment);
    const totalQuiz = parseFloat(quiz) * (totalMarksMax*0.2 / maxValues.quiz);
    const total = totalIA + totalAssignment + totalQuiz;

    

    setTotalMarks(total.toFixed(2));

    let grade = '';
    if (total < totalMarksMax*0.4) {
      grade = 'F';
    } else if (total < totalMarksMax*0.5) {
      grade = 'E';
    } else if (total < totalMarksMax*0.6) {
      grade = 'D';
    } else if (total < totalMarksMax*0.7) {
      grade = 'C';
    } else if (total < totalMarksMax*0.8) {
      grade = 'B';
    } else if (total < totalMarksMax*0.9) {
      grade = 'A';
    } else if (total <= totalMarksMax) {
      grade = 'A+';
    }

    setGrade(grade);
  };

  const handleMaxValueChange = (e) => {
    const { name, value } = e.target;
    setMaxValues({
      ...maxValues,
      [name]: parseFloat(value)
    });
  };

  const handleTotalMarksMaxChange = (e) => {
    setTotalMarksMax(parseFloat(e.target.value));
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
      <div className="input-row">
        <div className="input-container">
          <div className="input-group">
            <label htmlFor="maxIa1">Max Internal Assessment 1:</label>
            <input type="number" id="maxIa1" name="ia1" min="0" value={maxValues.ia1} onChange={handleMaxValueChange} />
          </div>
          <label htmlFor="ia1">Internal Assessment 1 (0-{maxValues.ia1}):</label>
          <input type="number" id="ia1" min="0" max={maxValues.ia1} value={ia1} onChange={e => setIa1(e.target.value)} />
        </div>
        <div className="input-container">
          <div className="input-group">
            <label htmlFor="maxIa2">Max Internal Assessment 2:</label>
            <input type="number" id="maxIa2" name="ia2" min="0" value={maxValues.ia2} onChange={handleMaxValueChange} />
          </div>
          <label htmlFor="ia2">Internal Assessment 2 (0-{maxValues.ia2}):</label>
          <input type="number" id="ia2" min="0" max={maxValues.ia2} value={ia2} onChange={e => setIa2(e.target.value)} />
        </div>
      </div>
      <div className="input-row">
        <div className="input-container">
          <div className="input-group">
            <label htmlFor="maxIa3">Max Internal Assessment 3:</label>
            <input type="number" id="maxIa3" name="ia3" min="0" value={maxValues.ia3} onChange={handleMaxValueChange} />
          </div>
          <label htmlFor="ia3">Internal Assessment 3 (0-{maxValues.ia3}):</label>
          <input type="number" id="ia3" min="0" max={maxValues.ia3} value={ia3} onChange={e => setIa3(e.target.value)} />
        </div>
        <div className="input-container">
          <div className="input-group">
            <label htmlFor="maxAssignment">Max Assignment:</label>
            <input type="number" id="maxAssignment" name="assignment" min="0" value={maxValues.assignment} onChange={handleMaxValueChange} />
          </div>
          <label htmlFor="assignment">Assignment (0-{maxValues.assignment}):</label>
          <input type="number" id="assignment" min="0" max={maxValues.assignment} value={assignment} onChange={e => setAssignment(e.target.value)} />
        </div>
      </div>
      <div className="input-row">
        <div className="input-container">
          <div className="input-group">
            <label htmlFor="maxQuiz">Max Quiz:</label>
            <input type="number" id="maxQuiz" name="quiz" min="0" value={maxValues.quiz} onChange={handleMaxValueChange} />
          </div>
          <label htmlFor="quiz">Quiz (0-{maxValues.quiz}):</label>
          <input type="number" id="quiz" min="0" max={maxValues.quiz} value={quiz} onChange={e => setQuiz(e.target.value)} />
        </div>

        <div className="input-container" style={{border:'none', boxShadow:'none'}}>
          <div className="input-group">
            <label htmlFor="totalMarksMax">Total Marks Maximum:</label>
            <input type="number" id="totalMarksMax" min="0" value={totalMarksMax} onChange={handleTotalMarksMaxChange} />
          </div>
          <div className="button-row">
        <button onClick={calculateGrade}>Calculate</button>
        <button onClick={clearInputs}>Clear</button>
        <h3 className="output" id="output">Total Marks: {totalMarks}</h3>
      <h3 className="output" id="grade">Grade: {grade}</h3>
      </div>
        </div>
        

      </div>
      
       
      
      
      
    </div>
  );
}

export default GradeCalculator;
