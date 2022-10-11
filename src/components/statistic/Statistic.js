import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Statistic = () => {
    const wowChart = useLoaderData()
    const mainChart = wowChart.data
    return (
        <div>
            {
                mainChart.map(chart => <Chart
                key={chart.id}
                chart={chart}
                ></Chart>)
            }
        </div>
    );
};

export default Statistic;