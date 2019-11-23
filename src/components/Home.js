import React from 'react';
import HomeImage from "../images/HomepageMain.jpg";

//node modules
import { Route } from 'react-router-dom';
import styled from 'styled-components';

//components
import Login from '../components/Login';

//styles
const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: #39BC46;
    `;

const Image = styled.image`
    size: 20%;
    padding: 2em;
    `;

// Adapt the colors based on primary prop
const Button = styled.button`
    background: ${props => props.primary ? "peach" : "white"};
    color: ${props => props.primary ? "white" : "peach"};
  
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #F49A11;
    border-radius: 3px;
  `;

function Home() {
    return (
        <div>
            <Title>Food Donation App</Title>
            <img
                src={HomeImage}
                width={500}
                alt="a pair of hands holding fresh vegetables"
                />
            <Button>Login</Button>
        </div>
    )
}

export default Home;