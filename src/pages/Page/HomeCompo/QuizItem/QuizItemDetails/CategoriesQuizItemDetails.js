import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import CategorieItemCard from './CategorieItemCard';

const CategoriesQuizItemDetails = () => {
    const  allQuestions = useLoaderData()
    console.log(allQuestions)
   
    // const [allQuestions, setAllQuestions] = useState([])
    const [CorrectAns, setCorrectAns] = useState([0])
    const [WrongAns, setWrongAns] = useState([0])


     

    //quizTypeOne



     
    const handleCorrectAns = () => {
        let NewCorrectAns = parseInt((CorrectAns) + 1 * 5);
        setCorrectAns(NewCorrectAns)
    }


    const handleWrongAns = () => {
        let NewCorrectAns = parseInt(WrongAns) + 1  ;
        setWrongAns(NewCorrectAns)
    }
    


    return (
        <div>
            <h2 className="text-4xl text-center font-bold">{allQuestions.name}</h2>
            <div className='grid grid-cols-1 gap-4 justify-items-center align-center lg:grid-cols-2 lg:gap-6  lg:justify-items-center '>
                <div className='sm:w-full lg:w-4/5'>

                    {
                        allQuestions &&
                        allQuestions?.map(questions => <CategorieItemCard
                            key={questions._id}
                            questions={questions}
                            handleWrongAns={handleWrongAns}
                            handleCorrectAns={handleCorrectAns}
                        ></CategorieItemCard>)
                    }

                </div>
                
                <div className='relative'>
                <div className='w-3/4  lg:fixed lg:top-26 lg:right-0'>
                    
                    <h1 className='text-3xl font-bold text-center text-green-400'>Your Score:{CorrectAns}</h1>
                    <h1 className='text-3xl font-bold text-center text-red-500'>Wrong Ans:{WrongAns}</h1>
                </div>
                </div>
             
            </div>
        </div>
    );
};

export default CategoriesQuizItemDetails;