import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";

function ScrollProgress({scrollProg, isModalSlide}) {
    return (
        <>
            <Bottom isModalSlide={isModalSlide} >
                <Top style={{ width: scrollProg + '%' }} />
            </Bottom>
        </>
    )
}

const Bottom = styled.div`
    width: 100%;
    height: 4px;
    right: ${props => props.isModalSlide ? 250 : 0}px;                  // 슬라이드 모달이 열리면 스크롤 진행 바도 밀리기 위해
    
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