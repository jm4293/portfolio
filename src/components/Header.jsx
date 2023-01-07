import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { BiSun, BiMoon } from 'react-icons/bi';                 // 다크모드 아이콘 설정
import ReorderIcon from '@mui/icons-material/Reorder';

function Header({ isDarkMode, setIsDarkMode, isModalSlide, setIsModalSlide }) {
    return (
        <Frame>
            <DarkModeIconStyled onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <BiMoon /> : <BiSun />}
            </DarkModeIconStyled>
            <div id="header" style={{ fontSize: '24px' }}>jm's portfolio</div>
           <ReorderIconStyled onClick={() => setIsModalSlide(!isModalSlide)}/>
        </Frame>
    )
}

const Frame = styled.div`
    position: sticky;
    top: 0;
    height: 8vh;
    background-color: ${props => props.theme.bgColor};
    
    color: ${props => props.theme.color};
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
    font-weight: 600;
`;

const DarkModeIconStyled = styled.div`
    cursor: pointer;
    transform: scale(1.4);

    &:hover{
        transform: scale(1.8);
        transition: transform .5s;
    }
`;

const ReorderIconStyled = styled(ReorderIcon)`
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
        transition: transform .5s;
    }
`;

export default Header;