import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className='mt-9'>
            <h1 className='text-center'><span  className='font-extrabold text-black md:text-9xl'>404</span></h1>
            <h1 className='md:text-5xl text-center text-white'>The page is not found <Link className='border-b' to='/home'>check this</Link></h1>
        </div>
    );
};

export default About;