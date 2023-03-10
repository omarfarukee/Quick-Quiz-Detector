import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetail from '../quizDetails/QuizDetail';

const Quiz = () => {
    const lateQuiz = useLoaderData()
    const quick = lateQuiz.data.questions
    return (
        <div>
             <h1 className='text-white text-3xl mt-5 font-bold text-center'>Here The Quick-Quiz</h1>
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