import React from "react";
import styled from "styled-components";

function ScrollProgress({scrollProg}) {
    return (
        <Frame>
            <Bottom>
                <Top style={{ width: scrollProg + '%' }} />
            </Bottom>
        </Frame>
    )
}

const Frame = styled.div`
    width: 100%;
    height: 100%;
    /* position: fixed; */
    /* border: 1px solid black */
`;

const Bottom = styled.div`
    /* width: 100%; */
    height: 2px;
    /* right: ${props => props.isModalSlide ? 160 : 0}px;                  // 슬라이드 모달이 열리면 스크롤 진행 바도 밀리기 위해 */
    
    background-color: ${props => props.theme.ScrollProgressBottomColor};
    /* background-color: black; */
    /* position: fixed; */
    /* cursor: pointer; */
    /* z-index: 100; */
`;

const Top = styled.div`
    height: 100%;
    background-color: ${props => props.theme.ScrollProgressTopColor};
`;

export default ScrollProgress;