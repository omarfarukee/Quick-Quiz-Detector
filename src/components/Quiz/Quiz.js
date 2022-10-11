import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetail from '../quizDetails/QuizDetail';

const Quiz = () => {
    const lateQuiz = useLoaderData()
    const quick = lateQuiz.data.questions
    console.log(quick)
    return (
        <div>
            <h1>quiz </h1>
            <div>
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