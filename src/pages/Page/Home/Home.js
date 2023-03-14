import React from 'react';
import Banner from '../HomeCompo/Banner/Banner';
import QuizInfo from '../HomeCompo/quizInfo/QuizInfo';
import QuizItem from '../HomeCompo/QuizItem/QuizItem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
             <QuizInfo></QuizInfo>
             <QuizItem></QuizItem>
        </div>
    );
};

export default Home;