import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";      // 전역 styled component 설정
import GlobalStyle from "./components/GlobalStyle";             // 전역 styled component 설정
import { darkTheme, lightTheme } from "./components/Theme";     // 다크모드 색상 설정

import ScrollProgress from "./components/ScrollProgress";
import ModalSlide from "./components/ModalSlide";
import ModalPopup from "./components/ModalPopup";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);        // 다크모드 on off
    const [isModalPopup, setIsModalPopup] = useState(false);    // 팝업 모달 on off
    const [isModalSlide, setIsModalSlide] = useState(false);    // 슬라이드 모달 on off

    return (
        <Frame>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <GlobalStyle />
                <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isModalSlide={isModalSlide} setIsModalSlide={setIsModalSlide} />
                <div>
                    <ScrollProgress isModalSlide={isModalSlide}/>
                </div>
                <Aa>
                    <div style={{width: '100vw'}}>
                        <Content isModalPopup={isModalPopup} setIsModalPopup={setIsModalPopup} />
                        {
                            isModalPopup && <ModalPopup isModalPopup={isModalPopup} setIsModalPopup={setIsModalPopup} />
                        }
                        <Footer />
                    </div>
                    <div>
                        {
                            isModalSlide && <ModalSlide isModalSlide={isModalSlide} setIsModalSlide={setIsModalSlide} />
                        }
                    </div>
                </Aa>
                <GlobalStyle />
            </ThemeProvider>
        </Frame>
    );
}

const Frame = styled.div`
    width: 100%;
    position: relative;
`;

const Aa = styled.div`
    display: flex;
    right: ${props => props.isModalSlide ? 250 : 0}px;
`;

export default App;