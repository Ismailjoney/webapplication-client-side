import React from 'react';

const QuizInfo = () => {
    return (
        <div className="hero justify-items-center  my-16">
            <div className="hero-content flex-col lg:flex-row-reverse w-4/5">
                <img src="https://i.ibb.co/sHkLM71/Screenshot-6.png" className=" rounded-lg shadow-2xl" />
                <div >
                    <h1 className="text-5xl font-bold">How to Play quizes ?</h1>
                    <div className=' '>
                        <p className="py-6 flex text-justify-start lg:text-justify">You visited our Website  but You can not play quizes.If you want to play quizes at frist You create a account in our website.when you  create a account then you can play quizes

                            When you play the quiz.if you clik the right option you got 5 marks but when you click the wrong answer can't get mark.</p>

                    </div>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default QuizInfo;