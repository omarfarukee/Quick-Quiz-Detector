import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetail from '../quizDetails/QuizDetail';

const Quiz = () => {
    const lateQuiz = useLoaderData()
    const quick = lateQuiz.data.questions
    console.log(quick)
    return (
        <div>
            <div className='md:grid md:grid-cols-2 mt-7'>
          {
                quick.map(quiz => <QuizDetail 
                key={quiz.id}
                quiz={quiz}
                ></QuizDetail>)
            }
            </div>

        </div>
    );
};

export default Quiz;