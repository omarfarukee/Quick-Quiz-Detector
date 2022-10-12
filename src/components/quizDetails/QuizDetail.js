import React from 'react';
import Option from './Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import ('./Option/Option.css')
const QuizDetail = ({quiz}) => {
    const {question,options, correctAnswer}= quiz
    console.log(options[0])
    const notify = () => toast(correct(), {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        const correct = ()=>{
            return "The correct Ans is =="+ correctAnswer
        }
    return (
        <div className='quiz  m-4 '>
            <div className='p-4 flex justify-between '>
                <h1 className='font-bold'>Qus- {question}</h1>
                        <ToastContainer position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover></ToastContainer>
                <button title='Click to see correct ans' onClick={notify} ><EyeIcon className="h-6 w-6"/></button>

            </div>
            
            <div className=' p-5 md:grid md:grid-cols-2'>
                {
                    options.map(option => <Option
                        correctAnswer={correctAnswer}
                    option={option}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default QuizDetail;