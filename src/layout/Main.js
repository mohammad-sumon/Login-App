import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Particle from '../components/Particle';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Particle/>
        </div>
    );
};

export default Main;