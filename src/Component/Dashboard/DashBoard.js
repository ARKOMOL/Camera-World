
import React from 'react';
import BraChart from '../Charts/BarChart';
import LineCharts from '../Charts/LineChart';

const DashBoard = () => {
    return (
        <div className=' sm:grid-cols-1 lg:grid lg:grid-cols-2  flex-2 w-100'>
            <BraChart/>
            <LineCharts/>
          
            
        </div>
    );
};

export default DashBoard;