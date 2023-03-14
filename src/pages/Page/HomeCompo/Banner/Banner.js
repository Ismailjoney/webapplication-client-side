import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen mt-4" style={{ backgroundImage: `url("https://i.ibb.co/hWQDw73/240-F-345880772-z-IT2mkd-Cz-Tthpl-O7xqa-GGr-Msp-N0jw0ll.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;