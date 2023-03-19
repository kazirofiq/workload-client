import React from 'react';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import Header from '../../Dashboard/Header/Header';
import LeftSideBar from '../../Dashboard/LeftSideBar/LeftSideBar';
import Rechart from '../../Dashboard/Rechart/Rechart';
import RightSideBar from '../../Dashboard/RightSideBar/RightSideBar';

const DashboardLayouts = () => {
    return (
        <div className='grid lg:grid-cols-[300px_1fr_300px] grid-cols-1 mb-6'>
            <div className=''><LeftSideBar></LeftSideBar></div>
            <div className='m-8 h-screen'>
                <Header></Header>
                <Dashboard></Dashboard>
                
                </div>
            <div className=''><RightSideBar></RightSideBar></div>
        </div>
    );
};

export default DashboardLayouts;