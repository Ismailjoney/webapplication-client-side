import React from 'react';

const FeedBackCard = ({ cmnt }) => {
    const {name,  cmntmsg, date, img} = cmnt;
    return (
        <div className='flex justify-start ml-4 lg:justify-center'>
            <div className='mt-1'>
                <img className='w-10 h-10 mask mask-circle' src={img} alt="" />
            </div>
            <div className='ml-4 text-justify'>
                <h2 className='text-bold text-2xl font-1xl font-bold'>{name}</h2>
                <span>{date}</span>
                <p>{cmntmsg}</p>
                
            </div>
        </div>
    );
};

export default FeedBackCard;