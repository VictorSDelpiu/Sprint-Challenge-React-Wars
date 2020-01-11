import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div``;

const StyledP = styled.p`
opacity: 1
color: white;
font-weight: bold;
`;


const StyledSection = styled.section`
display: inline-block;
padding: 3rem;
background: gray;
width: 100px;
height: auto;
margin-bottom: 20px;
border: 2px dashed white;
`;


const StyledHead = styled.h2`
    font-size: 1.35rem;
    max-width: 100%;
    text-decoration: underline;

    :hover {
        color: white;
    }
`;

export function StarWarsList (props) {

    return (
        <StyledDiv className="App">
            <StyledSection>
                <StyledHead className="characterName">{props.person.name}</StyledHead>
                <StyledP>Height: {props.person.height}</StyledP>
                <StyledP>{props.person.hair_color}</StyledP>
                <StyledP>{props.person.gender}</StyledP>
            </StyledSection>
        </StyledDiv>
    )
};


export default StarWarsList;