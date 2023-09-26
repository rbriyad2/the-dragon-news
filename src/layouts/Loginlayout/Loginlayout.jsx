import React from 'react';
import Header from '../../pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../pages/Shared/NavigationBar/NavigationBar';

const Loginlayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Loginlayout;