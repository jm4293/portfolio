import React, { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { BiSun, BiMoon } from 'react-icons/bi';                 // 다크모드 아이콘 설정
import ScrollProgress from './ScrollProgress';
import TopButton from "./TopButton";

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
                <HiddenItem change={change} onClick={() => window.scrollTo(0, 520)}>PROJECT</HiddenItem>
                <HiddenItem change={change} onClick={() => window.scrollTo(0, 2020)}>CAREER</HiddenItem>
                <HiddenItem change={change} onClick={() => window.scrollTo(0, 2350)}>SKILLS</HiddenItem>
                <DarkModeIcon onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? <BiMoon /> : <BiSun />}</DarkModeIcon>
            </Top>
            <Bottom>
                <ScrollProgress scrollProg={scrollProg} />
            </Bottom>
            <TopButton change={change}/>
        </Frame>
    )
}

const Frame = styled.div`
    position: ${props => props.change ? "fixed" : "absolute"};
    width: ${props => props.change ? 90 : 100}%;
    height: ${props => props.change ? 100 : 200}px;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    display: flex;
    flex-direction: column;
    z-index: 999;
`;

const Top = styled.div`
    width: 100%;
    height: 199px;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
    cursor: pointer;
`;

const Bottom = styled.div`
    width: 100%;
    height: 1px;
`;

export default Header;