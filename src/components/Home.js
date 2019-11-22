import React from 'react';

//node modules
import { Route } from 'react-router-dom';
import styled from 'styled-components';

//components
import Login from '../components/Login';



function Home() {
    return (
        <div className="home-main">
            <img
                className="home-image"
                src="https://github.com/projectdivvy/project-lunchbox-FE/blob/master/src/images/HomepageMain.jpg"
                alt="a pair of hands holding fresh vegetables"
                />
        </div>
    )
}

export default Home;