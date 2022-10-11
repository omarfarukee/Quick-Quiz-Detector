import React from 'react';
import ('./Option.css')
const Option = ({option}) => {
    return (
        <div className='option m-3 p-5'>
            <h1>{option}</h1>
        </div>
    );
};

export default Option;