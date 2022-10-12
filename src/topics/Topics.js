import React from  'react';
import {Link} from 'react-router-dom'
import ('./Topics.css')
const Topics = ({Topic}) => {
    // console.log(topic)
    const {name, logo, id} =Topic
    return (
        <div className='topic m-5 p-2'>
            <img className='img' src={logo} alt="" />
            <h1 className='text-2xl font-bold'>{name}</h1>
         <Link to={`/${id}`}><button className='btn p-3 mt-4 ml-6'> Let's quiz</button></Link>   
        </div>
    );
};

export default Topics;