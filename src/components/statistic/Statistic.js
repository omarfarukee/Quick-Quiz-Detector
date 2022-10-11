import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistic = () => {
    const information = [
        {id:1,name:"React",total:8},
        {id:2,name:"JavaScript",total:9},
        {id: 3,name:"CSS",total:8},
        {id:4,name:"Git",total:11}
    ]
    return (
        <div>
            <LineChart width={500} height={300} data={information}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="id" stroke="#8884d8" activeDot={{ r: 8 }} />

            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statistic;