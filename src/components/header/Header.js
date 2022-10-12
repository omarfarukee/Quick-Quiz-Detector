import React from 'react';
import {Link} from 'react-router-dom'
import ('./Header.css')
const Header = () => {
    return (
        <div className='md:flex items-center md:justify-between shadow-2xl b-color'>
            <div className='flex md:ml-28 items-center logo'>
                <h1 className='text-4xl font-bold'><span className='quick'>Quick-Quiz</span> Detector</h1>
            </div>
            <nav className='mr-20 text-2xl link-link'>
            
                <Link className='ml-6 font-bold link ' to='/home'>Home</Link>
                <Link className='ml-6 font-bold link ' to='/statistic'>Statistic</Link>
                <Link className='ml-6 font-bold link ' to='/blog'>Blog</Link>
                <Link className='ml-6 font-bold link ' to='/about'>About</Link>
                

            </nav>
        </div>

    );
};

export default Header;