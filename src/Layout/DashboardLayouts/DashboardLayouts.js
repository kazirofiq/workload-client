import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import Header from '../../Dashboard/Header/Header';
import LeftSideBar from '../../Dashboard/LeftSideBar/LeftSideBar';
import Rechart from '../../Dashboard/Rechart/Rechart';
import RightSideBar from '../../Dashboard/RightSideBar/RightSideBar';

const DashboardLayouts = () => {

    const [hidden, setHidden] = useState('-translate-x-[101%]');
    const toggleSidebar = () =>{
        if(hidden === '-translate-x-[101%]'){
            setHidden('-translate-x-0')

        }
        else{
            setHidden('-translate-x-[101%]')
        }
    }
    return (
        <div className='grid lg:grid-cols-[300px_1fr_300px] grid-cols-1 mb-6'>
            <div className={`transition w-[95%] sm:w-1/2 pr-6 lg:w-full  lg:-translate-x-0 fixed lg:static z-[99999] ${hidden}`}><LeftSideBar></LeftSideBar></div>
            <div onClick={toggleSidebar} className={`fixed lg:hidden w-full h-full z-[9999] bg-[#00000075] ${hidden}`}></div>
            <div className='m-8 h-screen'>
                <input className='hidden' onClick={toggleSidebar} type="checkbox" id='toggle-sidebar'/>
                <Outlet></Outlet>
                {/* <Header></Header>
                <Dashboard></Dashboard> */}
                
                </div>
            <div className='lg:block hidden'><RightSideBar></RightSideBar></div>
        </div>
    );
};

export default DashboardLayouts;