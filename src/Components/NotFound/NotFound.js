import React from 'react';

const NotFound = () => {
    return (
        <div className='mt-20 pb-20'>
            <div style={{ height: '400px', width: '90%' }} class="shadow-2xl mx-auto">
                <h1 className='font-extrabold text-8xl pt-8'>404</h1>
                <h4 className='font-bold mt-8 mb-8'>WE ARE VERY SORRY, BUT THE PAGE NOT FOUND</h4>
                <span className='font-normal bg-black text-orange-300 px-4 py-2 m-8 hover:text-sky-400'>Back To Homepage</span>
            </div>
        </div>
    );
};

export default NotFound;