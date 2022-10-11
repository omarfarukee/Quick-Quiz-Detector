import React from 'react';
import Option from './Option/Option';
import ('./Option/Option.css')
const QuizDetail = ({quiz}) => {
    const {question,options}= quiz
    console.log(options )
    return (
        <div className='quiz  m-4 bg-white'>
            <div className='p-4'>
                <h1>Qus- {question}</h1>
            </div>
            
            <div className=' p-5 md:grid md:grid-cols-2'>
                {
                    options.map(option => <Option
                    option={option}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default QuizDetail;