import React from 'react';

//node modules
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

//components
import Login from '../components/Login';
import HomeImage from "../images/HomepageMain.jpg";

//styles
const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: #39BC46;
    `;

const Image = styled.image`
    size: 20%;
    margin: 100px 50px;
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
            <Link to="/login">
            <Button>Login</Button>
            </Link>
        </div>
    )
}

export default Home;