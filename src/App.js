import React, { useState, useCallback, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";      // 전역 styled component 설정
import { darkTheme, lightTheme } from "./Theme";     // 다크모드 색상 설정
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);        // 다크모드 on off

    return (
        <Frame>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <GlobalStyle />
                <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
                <Content />
                <Footer />
                <GlobalStyle />
            </ThemeProvider>
        </Frame>
    );
}

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background-color: ${props => props.theme.bgColor};
        color: ${props => props.theme.color};
    }
`;

const Frame = styled.div`
    /* border: 1px solid blue; */
    width: 90%;
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    /* position: relative; */

    /* @media screen and (max-width: 768px) {
        font-size: 26px;
    } */
`;

const Main = styled.div`
    /* display: flex; */
    /* right: ${props => props.isModalSlide ? 100 : 0}px; */
`;

export default App;