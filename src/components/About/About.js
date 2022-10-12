import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <h1 className='md:text-5xl text-center mt-9 text-white'>The page is not found 404 <Link className='border-b' to='/home'>check this</Link></h1>
        </div>
    );
};

export default About;