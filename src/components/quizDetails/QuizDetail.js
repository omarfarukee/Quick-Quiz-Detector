import React from 'react';
import Option from './Option/Option';

const QuizDetail = ({quiz}) => {
    const {question,options}= quiz
    console.log(options )
    return (
        <div>
            <h1>{question}</h1>
            <div >
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