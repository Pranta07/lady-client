import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className='pt-16 pb-16 '>
            <div className='flex flex-col lg:w-4/6 mx-auto md:w-4/6'>
                <h1 className='font-bold text-5xl'>Contact</h1>
                <div className="mt-8 font">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter "></i>
                    <i className="fab fa-instagram "></i>
                    <i className="fab fa-google-plus-g "></i>
                </div>
                <p className='text-justify p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem vel commodi ea quod vero quibusdam natus tempore perferendis quam saepe consequatur eligendi, repellat praesentium officiis.</p>
                <div className='flex flex-col contact'>
                    <input className='mb-3 w-3/4 mx-auto mt-8 border-black placeholder:italic placeholder:text-center focus:outline-none focus:ring focus:border-blue-500' type="text" name="" id="" placeholder='NAME *' />

                    <input className='mb-3 w-3/4 mx-auto border-black placeholder:italic placeholder:text-center focus:outline-none focus:ring focus:border-blue-500' type="text" name="" placeholder='EMAIL *' id="" />

                    <input className='w-3/4 mx-auto border-black placeholder:italic placeholder:text-center mb-3 focus:outline-none focus:ring focus:border-blue-500' type="text" name="" placeholder='SUBJECT *' id="" />

                    <textarea className='w-3/4 mx-auto border-black placeholder:italic placeholder:text-center mb-3 focus:outline-none focus:ring focus:border-blue-500' name="" id="" cols="30" rows="10" placeholder='MESSAGE GOES HERE...'></textarea>

                    <button class=" w-3/7 mx-auto outline outline-offset-0 hover:font-bold outline-cyan-500 hover:bg-violet-400 active:bg-violet-600 p-2" type='submit'>SUBMIT</button>
                </div>

            </div>
        </div>
    );
};

export default Contact;