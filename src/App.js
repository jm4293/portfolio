import React, {useState, useCallback, useEffect} from "react";
import styled from "styled-components";
import {ThemeProvider} from "styled-components";      // 전역 styled component 설정
import GlobalStyle from "./components/GlobalStyle";             // 전역 styled component 설정
import {darkTheme, lightTheme} from "./components/Theme";     // 다크모드 색상 설정

import ScrollProgress from "./components/ScrollProgress";
import ModalSlide from "./components/ModalSlide";
import ModalPopup from "./components/ModalPopup";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";


function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);        // 다크모드 on off
    const [isModalPopup, setIsModalPopup] = useState(false);    // 팝업 모달 on off
    const [isModalSlide, setIsModalSlide] = useState(false);    // 슬라이드 모달 on off
    const [scrollT, setScrollT] = useState(0);                  // 실시간 스크롤 값
    const [scrollProg, setScrollprog] = useState(0);            // 스크롤 진행바 계산 값

    const handler = useCallback(() => {
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

        // ScrollTopButton 사용
        setScrollT(scrollTop);                                  // 실시간 스크롤 값

        // ScrollProgress 사용
        const heightMax = scrollHeight - clientHeight;
        const heightPercent = scrollTop / heightMax;

        setScrollprog(heightPercent * 100);
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handler, true);

        return () => {
            window.removeEventListener('scroll', handler, true);
        }
    }, [handler])

    return (
        <Frame>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <GlobalStyle/>
                <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isModalSlide={isModalSlide}
                        setIsModalSlide={setIsModalSlide}/>
                <ScrollProgress scrollProg={scrollProg} isModalSlide={isModalSlide}/>

                <Main>
                    <div style={{width: '100vw'}}>
                        <Content isModalPopup={isModalPopup} setIsModalPopup={setIsModalPopup}/>
                        {isModalPopup && <ModalPopup isModalPopup={isModalPopup} setIsModalPopup={setIsModalPopup}/>}
                        <Footer/>
                    </div>
                    <div>
                        {isModalSlide && <ModalSlide scrollT={scrollT} setIsModalSlide={setIsModalSlide}/>}
                        {scrollT > 300 && <ScrollTopButton isModalSlide={isModalSlide}/>}
                    </div>
                </Main>
                <GlobalStyle/>
            </ThemeProvider>
        </Frame>
    );
}

const Frame = styled.div`
    width: 100%;
    position: relative;
`;

const Main = styled.div`
    display: flex;
    right: ${props => props.isModalSlide ? 250 : 0}px;
`;

export default App;