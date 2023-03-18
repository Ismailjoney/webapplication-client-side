import React from 'react';

const FeedBackCard = ({ cmnt }) => {
    const {name,  cmntmsg, date, img} = cmnt;
    return (
        <div className='w-full flex justify-start lg:justify-start lg:w-96'>
            <div className='mt-1 w-1/4'>
                <img className='w-20 h-20 mask mask-circle' src={img} alt="" />
            </div>
            <div className='w-4/5 ml-4 mr-4 text-justify'>
                <h2 className='text-bold text-2xl font-1xl font-bold'>{name}</h2>
                <span>{date}</span>
                <p>{cmntmsg}</p>
                
            </div>
        </div>
    );
};

export default FeedBackCard;