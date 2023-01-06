import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";

function ScrollProgress() {
    // const ref = useRef(null);
    const [scrolly, setScrolly] = useState(0);

    const scroll = useCallback(() => {
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

        console.log(scrollTop)
        console.log(scrollHeight)
        console.log(clientHeight)

        const heightMax = scrollHeight - clientHeight;  // 스크롤 가능한 최대 값
        const heightPercent = scrollTop / heightMax;

        setScrolly(heightPercent * 100);
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', scroll, true);

        return () => {
            window.removeEventListener('scroll', scroll, true);
        }
    }, [scroll])

    return(
        <>
            <Bottom>
               <Top style={{width: scrolly + '%'}}/>
            </Bottom>
        </>
    )

}

const Bottom = styled.div`
    width: 100%;
    height: 4px;
    background-color: red;
    position: fixed;
`;

const Top = styled.div`
    height: 100%;
    background-color: blue;    

`;

export default ScrollProgress;