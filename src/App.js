import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import { darkTheme, lightTheme } from "./components/Theme";
import { BiSun, BiMoon } from 'react-icons/bi';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <GlobalStyle />
                <>
                    <Header>
                        <div>Ljm's portfolio</div>
                        <div style={{ flexGrow: "1" }}></div>
                        <div onClick={() => setIsDarkMode(!isDarkMode)}>
                            {isDarkMode ? <BiMoon /> : <BiSun />}
                        </div>
                    </Header>
                    <Content>

                    </Content>
                    <Footer>

                    </Footer>
                </>
            </ThemeProvider>
        </>
    );
}

const Header = styled.div`
    position: fixed;
    width: 100%;
    height: 7vh;
    border-bottom: ${props => props.theme.border};
    display: flex;
`;

const Content = styled.div`
    width: 100vw;
    height: 150vh;
`;

const Footer = styled.div`
    width: 100%;
    height: 10vh;
    border-top: ${props => props.theme.border}
`;

export default App;