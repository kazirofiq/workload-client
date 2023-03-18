import React from 'react';
import LeftSideBar from '../../Dashboard/LeftSideBar/LeftSideBar';
import Rechart from '../../Dashboard/Rechart/Rechart';
import RightSideBar from '../../Dashboard/RightSideBar/RightSideBar';

const DashboardLayouts = () => {
    return (
        <div className='grid grid-cols-[300px_1fr_300px] bg-[#f3f3f3]'>
            <div className=''><LeftSideBar></LeftSideBar></div>
            <div className=''><Rechart></Rechart></div>
            <div className=''><RightSideBar></RightSideBar></div>
        </div>
    );
};

export default DashboardLayouts;