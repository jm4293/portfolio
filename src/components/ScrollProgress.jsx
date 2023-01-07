import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";

function ScrollProgress({isModalSlide}) {
    const ref = useRef(null);
    const [scrolly, setScrolly] = useState(0);

    // 자동으로 스크롤 바 채우기
    const scroll = useCallback(() => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        const heightMax = scrollHeight - clientHeight;

        const heightPercent = scrollTop / heightMax;

        setScrolly(heightPercent * 100);
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', scroll, true);

        return () => {
            window.removeEventListener('scroll', scroll, true);
        }
    }, [scroll])


    // 스크롤 바 클릭시 이벤트
    const bottomClick = (e) => {
        // 클릭한 progress bar의 길이를 퍼센트로 계산
        const widthPercent = (e.clientX / ref.current.scrollWidth) * 100;
        setScrolly(widthPercent);

        // 스크롤 세로값 
        const { scrollHeight, clientHeight } = document.documentElement;

        window.scrollTo({
            top: ((scrollHeight - clientHeight) / 100) * widthPercent,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <Bottom ref={ref} onClick={bottomClick} isModalSlide={isModalSlide} >
                <Top style={{ width: scrolly + '%' }} />
            </Bottom>
        </>
    )
}

const Bottom = styled.div`
    width: 100%;
    height: 4px;
    right: ${props => props.isModalSlide ? 250 : 0}px;
    
    background-color: ${props => props.theme.ScrollBottomColor};
    position: fixed;
    cursor: pointer;
    /* z-index: 99; */
`;

const Top = styled.div`
    height: 100%;
    background-color: ${props => props.theme.ScrollTopColor};
`;

export default ScrollProgress;