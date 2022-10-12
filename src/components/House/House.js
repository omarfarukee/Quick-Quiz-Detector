import React from 'react';
import { useLoaderData } from 'react-router-dom';
import logos from '../../images/face-removebg-preview.png'
import Topics from '../../topics/Topics';
import ('./House.css')
const House = () => {
    const heyTopic = useLoaderData()
    const topics = heyTopic.data
    console.log(Topics)
    return (
        <div>
        <div className='home-back text-center pt-10 mt-7'>
            <div>
                            <h1 className='md:text-2xl items-center text-white head'>Quizzes encourage pupils' self awareness of progress and self assessment. By taking quizzes, pupils get instant feedback on their responses. And this can help them identify areas they need to develop themselves and highlight progress for them to be proud of.</h1>
            </div>
            <div className='mt-5 flex items-center justify-center'>
                <div>
                    <img className='w-44' src={logos} alt="" />
                </div>
                <div className='ml-4 border-b-2'>
                    
                    <h1 ><span className=''>#Happy </span> <span className='text-2xl text-white'>coding</span></h1>
                    <h1 className='text-sm'>#Happy to learn.........</h1>
                </div>
            </div>

        </div>
    <div className='md:flex p-16'>
       {
        topics.map(topic => <Topics
        key={topic.id}
        topic={topic}
        ></Topics>)
       }
    </div>
</div>
    );
};

export default House;