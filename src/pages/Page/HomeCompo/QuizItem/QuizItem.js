import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const QuizItem = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div id="quizitem" className="my-16">
            <h2 className='text-5xl font-bold text-center'> Quizes</h2>
            <div className='grid grid-cols-1     justify-items-start my-10 lg:grid-cols-3 lg:justify-items-center '>

                {
                    categories.map(categorie =>
                        <Link key={categorie._id} to={`/categorie/${categorie.cid}`}>
                            <button className="btn btn-outline btn-primary  w-72  my-4">{categorie.cname}</button>
                        </Link>)
                }
            </div>
        </div>
    );
};

export default QuizItem;

 