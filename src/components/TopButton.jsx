import React from "react";
import styled from "styled-components";
import { BsArrowUpSquare } from "react-icons/bs"


function TopButton({isModalSlide}) {

    const onclickTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Frame isModalSlide={isModalSlide}>
            <StyledBsArrowUpSquare onClick={onclickTop}/>
        </Frame>
    )
}

const Frame = styled.div`
    position: fixed;
    /* right: 50%; */
    right: ${props => props.isModalSlide ? 56 : 50}%;
    bottom: 10%;
`;

const StyledBsArrowUpSquare = styled(BsArrowUpSquare)`
    cursor: pointer;
    transform: scale(1.8);
    
    &:hover{
        transform: scale(2.2);
        transition: transform .5s;
    }
`;

export default TopButton;