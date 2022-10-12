import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistic = () => {
    const information = [
        {id:1,name:"React",totalQuiz:8},
        {id:2,name:"JavaScript",totalQuiz:9},
        {id: 3,name:"CSS",totalQuiz:8},
        {id:4,name:"Git",totalQuiz:11}
    ]
    return (
    <div>
        <h1 className='text-3xl text-center mb-36'>The Quick Quiz Chart</h1>
        <div className='flex justify-center mr-11'>
            <LineChart width={390} height={300} data={information}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="id" stroke="#8884d8" activeDot={{ r: 8 }} />

            <Line type="monotone" dataKey="totalQuiz" stroke="#82ca9d" />
            </LineChart>
        </div>

    </div>
    );
};

export default Statistic;