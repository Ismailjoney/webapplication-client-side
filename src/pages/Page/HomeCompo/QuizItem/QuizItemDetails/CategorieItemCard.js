import React, { useState } from 'react';
import { toast } from 'react-toastify';


const CategorieItemCard = ({ questions, handleCorrectAns, handleWrongAns }) => {
    // console.log(questions)
    const { question, options, answer, _id } = questions;

    const [total,setTotal] = useState(null)

    const handdleSelect = (singleOptions) => {
        setTotal(singleOptions)
        if (singleOptions ===  answer) {
            handleCorrectAns()
            toast(`Right answer.You got 5 marks`, {
                position: "top-center",
            });
        } 
        else {
            handleWrongAns()
            console.log(`nooo`)
            toast.warn(`!OPS.Wrong answer`, {

                position: "top-center",
                color: "red",

            });
        }
    }



    return (
        <div>
            <div className=''>
                <h2 className="text-2xl font-bold my-2  text-left">{question}</h2>
                <div className='grid grid-cols-1 gap-4 justify-items-start  lg:grid-cols-1 lg:justify-items-center '>
                
                    {
                        options.map( (singleOptions, i)=>  
                            <button
                                onClick={() => handdleSelect(singleOptions)}
                                disabled={total}
                                className='btn btn-outline w-4/5' >
                                {singleOptions}
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CategorieItemCard;