import React from "react";
import styled from "styled-components";

function Content({isModalPopup, setIsModalPopup}) {
    return (
        <Frame>
            <Introduce>
                안녕하세요.
            </Introduce>
            <BoxOne onClick={() => setIsModalPopup(!isModalPopup)}>1</BoxOne>
            <BoxTwo onClick={() => setIsModalPopup(!isModalPopup)}>2</BoxTwo>
            <BoxThree onClick={() => setIsModalPopup(!isModalPopup)}>3</BoxThree>
            <BoxFour onClick={() => setIsModalPopup(!isModalPopup)}>4</BoxFour>
        </Frame>
    )
}

const Frame = styled.div`
    /* border: 1px solid blue; */
    margin: 10px;
    height: 200vh;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const List = styled.div`
    background-color: ${props => props.theme.ContentListbgColor};
    color: ${props => props.theme.ContentListColor};
    border-radius: 50px;
    box-sizing: border-box;
    padding: 10px 50px;
    margin: 20px;
`;

const Introduce = styled(List)`
    border: 1px solid black;
    width: 80vw;
    height: 50vh;
`;

const Box = styled(List)`
    border: 1px solid black;
    /* width: 200px; */
    /* height: 20vh; */
    cursor: pointer;
    
    transform: scale(1);
    transition: transform .5s;

    &:hover{
        transform: scale(1.1);
        transition: transform .5s;
    } 
`;

const BoxOne = styled(Box)`

`;

const BoxTwo = styled(Box)`

`;

const BoxThree = styled(Box)`

`;

const BoxFour = styled(Box)`

`;

export default Content;