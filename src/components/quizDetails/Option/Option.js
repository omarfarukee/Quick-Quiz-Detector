import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ('./Option.css')
const Option = ({option, correctAnswer}) => {
    const notify = () => toast(result(), {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        const result= () =>{
            if(option === correctAnswer){
                return 'Yea!!!your ans is correct'
            }
            else{
                return 'Oops!!!Your ans is not correct'
            }
        }
    return (
        <div className='option m-3 p-5 '>
            {/* <h1 onClick={notify}>{option}</h1> */}
            <p>
                <input onClick={notify} type="radio" name='Quiz' id='wowQuiz' className='check' />
                <label className='pl-2' htmlFor='Quiz'><span className=''>{option}</span></label>
            </p>
            
                <ToastContainer position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover></ToastContainer>
        </div>
    );
};

export default Option;