import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../../topics/Topics';
import ('./Home.css')
const Home = () => {
    const topicsOld = useLoaderData()
    const topics = topicsOld.data
    console.log(topics)
    return (
        <div>
            <div className='home-back text-center pt-10'>
                {/* hiii */}
        
                <h1 className='text-2xl items-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolorem eos beatae officia nemo rerum ratione exercitationem qui dignissimos aut.</h1>
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

export default Home;