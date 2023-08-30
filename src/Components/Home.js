import React, { useState, useEffect } from 'react';
import QuestionData from './../data/QuestionData';
import { Finished } from './Finished';
import { Questionnaire } from './Questionnaire';

export function Home() {
  const [ page, setPage ] = useState(0);
  const [ answers, setAnswers ] = useState([]);
  const [loading, setLoading ] = useState(false);
  
  const handleAnswers = (ans) => {
    setAnswers([
        ...answers,
        ans
    ]);
    setPage(prev => prev + 1);
  };
  const handlePage = (p) => {
    setPage(prev => prev - 1);
    const index = p - 1; // undo previous answer
    setAnswers(prev => prev.filter(i => {
        return i != index;
    }));
  };
  const startOver = () => {
      setPage(0);
      setAnswers([]);
  };
  const submitSettings = () => {

  };
  console.log(answers)
  return (
    <div id="home">
        <h1>Website GPT</h1>
        <div className="container">
            {QuestionData[page] ? 
                <Questionnaire 
                handleAnswers={handleAnswers}
                handlePage={handlePage}
                Question={QuestionData}
                page={page}
                /> : 
                <Finished 
                answers={answers}
                startOver={startOver}
                submitSettings={submitSettings}
                />
            }
        </div>
    </div>
  )
}
<Questionnaire />