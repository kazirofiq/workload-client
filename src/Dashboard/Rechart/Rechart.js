import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Rechart = () => {
    const data = [
        {
            "id": 1,
            "name": "React",
            "logo": "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
            "total": 8
        },
        {
            "id": 2,
            "name": "JavaScript",
            "logo": "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
            "total": 9
        },
        {
            "id": 4,
            "name": "CSS",
            "logo": "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
            "total": 8
        },
        {
            "id": 5,
            "name": "Git",
            "logo": "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
            "total": 11
        }
    ]
    return (
        <div className=' p-2  rounded-xl'>
            <h2 className='font-bold text-xl'>Employees Details</h2>
            <div className=''>
               
                    <LineChart className='mx-auto -ml-7' width={300} height={220} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Rechart;