import React, { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { BiSun, BiMoon } from 'react-icons/bi';                 // 다크모드 아이콘 설정
import ReorderIcon from '@mui/icons-material/Reorder';
import ScrollProgress from './ScrollProgress';

function Header({ isDarkMode, setIsDarkMode, isModalSlide, setIsModalSlide }) {
    const [change, setChange] = useState(false);                    
    const [scrollProg, setScrollprog] = useState(0);            // 스크롤 진행바 계산 값
    let scrollref = useRef(null);

    // 스크롤 값
    const handler = useCallback(() => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if(window.scrollY > 80){
            setChange(true)
        }
        else {
            setChange(false);
        }

        // console.log(scrollTop)
        // console.log(scrollHeight)
        // console.log(clientHeight)
        // console.log(scrollref.current.offsetTop)

        const heightMax = scrollHeight - clientHeight;
        const heightPercent = scrollTop / heightMax;

        setScrollprog(heightPercent * 100);
    }, [])

    // 스크롤 값
    useEffect(() => {
        const timer = setInterval(() => {
            window.addEventListener('scroll', handler);
        }, 100);
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', handler);
        }
    }, [handler])

    return (
        <Frame change={change}>
            <Top change={change}>
                <div style={{display: change ? "none" : "block"}}></div>
                <div ref={scrollref} style={{ fontSize: '24px' }}>jm's portfolio</div>
                <HiddenItem change={change} onClick={() => window.scrollTo(0, 120)}>HOME</HiddenItem>
                <HiddenItem change={change} onClick={() => window.scrollTo(0, 290)}>ABOUT</HiddenItem>
                <HiddenItem change={change} onClick={() => window.scrollTo(0, 580)}>PROJECT</HiddenItem>
                <HiddenItem change={change} onClick={() => window.scrollTo(0, 2020)}>CAREER</HiddenItem>
                <HiddenItem change={change} onClick={() => window.scrollTo(0, 2350)}>SKILLS</HiddenItem>
                <DarkModeIcon onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? <BiMoon /> : <BiSun />}</DarkModeIcon>
            </Top>
            <Bottom>
                <ScrollProgress scrollProg={scrollProg} />
            </Bottom>
        </Frame>
    )
}

const Frame = styled.div`
    /* position: absolute; */
    /* top: 0; */
    /* height: 200px; */
    /* position: absolute; */
    position: ${props => props.change ? "fixed" : "absolute"};
    width: ${props => props.change ? 90 : 100}%;
    /* top: 0; */
    height: ${props => props.change ? 100 : 200}px;
    /* width: 90%; */
    /* border: 1px solid red; */
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    display: flex;
    flex-direction: column;
    /* margin-bottom: 200px; */
    /* border-bottom: 1px solid black; */

    /* transition: height .1s; */
    
    /* z-index: 100; */
    /* font-weight: 600; */
`;

const Top = styled.div`
    width: 100%;
    /* height: 100px; */
    /* position: absolute; */
    height: 199px;
    display: flex;
    justify-content: space-around;
    /* border: 1px solid blue; */
    /* justify-content: ${props => props.change ? "space-between" : "space-around"}; */
    align-items: center;
    /* border: 1px solid black; */
`;

const DarkModeIcon = styled.div`
    cursor: pointer;
    transform: scale(1.4);

    &:hover{
        transform: scale(1.6);
        transition: transform .3s;
    }
`;

const HiddenItem = styled.div`
    display: ${props => props.change ? "block" : "none"};
`;

const Bottom = styled.div`
/* position: absolute; */
    /* border: 1px solid blue; */
    width: 100%;
    height: 1px;
    /* clear: both; */
`;

export default Header;