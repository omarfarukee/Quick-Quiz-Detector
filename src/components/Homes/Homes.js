import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../../topics/Topics';
import ('./Homes.css')
const Homes = () => {
    const wowTopics = useLoaderData()
    const topics = wowTopics.data
    console.log(topics)
    return (
        <div>
            <div className='home-back text-center pt-10 mt-7'>
                <h1 className='text-2xl items-center text-white head'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolorem eos beatae officia nemo rerum ratione exercitationem qui dignissimos aut.</h1>
            </div>
        <div className='md:flex p-16'>
                {
                    topics.map(Topic => <Topics
                    key={Topic.id}
                    Topic={Topic}
                    ></Topics>)
                }
        </div>
</div>
    );
};

export default Homes;