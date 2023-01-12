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
`;

const Bottom = styled.div`
    height: 2px;
    background-color: ${props => props.theme.ScrollProgressBottomColor};
`;

const Top = styled.div`
    height: 100%;
    background-color: ${props => props.theme.ScrollProgressTopColor};
`;

export default ScrollProgress;