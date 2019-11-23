import React from 'react';

//node modules
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

//components
import AboutImage from "../images/AboutMainImage.jpg";

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

function About() {
    return (
        <div>
            <Title>Who We Are</Title>
            <img
                src={AboutImage}
                width={500}
                alt="a young woman holding out food to share"
                />
        </div>
    )
}

export default About;