import React, { useEffect, useState } from 'react';
import QuizCard from './QuizCard';

const Quiz = () => {

    const [activeQuestions, setActiveQuestions] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [questionData, setQuestionData] = useState([])
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
      })

      useEffect(() =>{
        fetch(`http://localhost:5000/quizone`)
        .then(res => res.json())
        .then(data =>  setQuestionData(data))
      },[])

    return (
        <div>
            <div>
                <h1>Quiz</h1>
                {
                    questionData.map(qustn => <QuizCard
                    key={qustn._id}
                    qustn={qustn}
                    ></QuizCard>)
                }
            </div>
        </div>
    );
};

export default Quiz;