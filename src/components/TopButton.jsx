import React from "react";
import styled from "styled-components";
import { BsArrowUpSquare } from "react-icons/bs"

function TopButton({change}) {
    const onclickTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Frame>
            {change ? <StyledBsArrowUpSquare onClick={onclickTop}/> : null}
        </Frame>
    )
}

const Frame = styled.div`
    position: fixed;
    right: 5%;
    bottom: 10%;
`;

const StyledBsArrowUpSquare = styled(BsArrowUpSquare)`
    cursor: pointer;
    transform: scale(1.5);
    
    &:hover{
        transform: scale(1.7);
        transition: transform .3s;
    }
`;

export default TopButton;