import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div``;

const StyledP = styled.p`
opacity: 1
color: black;
font-weight: bold;
`;


const StyledSection = styled.section`
display: inline-block;
padding: 12rem;
background: lightblue;
width: 100px;
height: auto;
margin-bottom: 20px;
border: 2px dashed purple;
`;


const StyledHead = styled.h2`
    font-size: 1.35rem;
    max-width: 100%;
    text-decoration: underline;

    :hover {
        color: blue;
    }
`;

export function StarWarsList (props) {

    return (
        <StyledDiv className="App">
            <StyledSection>
                <StyledHead className="characterName">{props.charName}</StyledHead>
                <StyledP>Height: {props.height}</StyledP>
                <StyledP>{props.hair_color}</StyledP>
                <StyledP>{props.gender}</StyledP>
            </StyledSection>
        </StyledDiv>
    )
};


export default StarWarsList;