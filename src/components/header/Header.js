import React from 'react';
import {Link} from 'react-router-dom'
import logoOne from '../../images/logo1.png'
import logoTow from '../../images/309994671_6115944191768651_2654385123934163118_n-removebg-preview.png'
import ('./Header.css')
const Header = () => {
    return (
        <div className='md:flex items-center md:justify-between shadow-2xl b-color'>
            <div className='flex md:ml-28 items-center'>
                <img className='md:w-44 md:h-20 logo' src={logoOne} alt="" />
                <img className='w-16 h-14 logo' src={logoTow} alt="" />
            </div>
            <nav className='mr-20 text-2xl'>
                <Link className='ml-6 font-bold link ' to='/home'>Home</Link>
                <Link className='ml-6 font-bold link ' to='/statistic'>Statistic</Link>
                <Link className='ml-6 font-bold link ' to='/blog'>Blog</Link>
                <Link className='ml-6 font-bold link ' to='/about'>About</Link>
            </nav>
        </div>

    );
};

export default Header;