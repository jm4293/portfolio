import React, { useRef } from "react";
import styled from "styled-components";
// import useGotoElement from "./useGotoElement";

function Content() {
    return (
        <Frame>
            <List id="INTRO">
                <h1>INTRO</h1>
                <h3>새로운 변화에 고통보단 즐거움을 느끼며 성장하는 프론트엔드 개발자 입니다</h3>
                <h3>사용자가 편리한 웹을 만드는 개바랒가 되기 위해 노력중입니다.</h3>
            </List>
            <List id="ABOUT">
                <h1>ABOUT</h1>
            </List>
            <List id="PROJECT">
                <h1>PROJECT</h1>
            </List>
            <List id="SKILLS">
                <h1>SKILLS</h1>
            </List>
            <List id="CAREER">
                <h1>CAREER</h1>
            </List>



            <div>학습에서 즐거움을 찾는 개발자 ~ 입니다.</div>
            <div>새로운 변화에 고통보단 즐거움을 느끼며 성장하는 습관을 만들어 가고 있습니다.</div>
            <div>누구라도 ~ 웹 사이트를 만들고 싶습니다.</div>
            <div>누구든지 쉽게 접근할 수 있는 홈페이지의 디자인을 추구하고 있습니다</div>
            <div>사용자가 편리한 웹을 만드는 개발자가 되기 위해 노력중입니다.</div>
            <div>그날그날 학습한 것들을 Github에 커밋해 기록해오고 있습니다.</div>
            <div>오늘에 만족하지 않고 더 나은 내일을 위해 항상 스스로를 개발하는 개발자가 되고 싶습니다.</div>
        </Frame>
    )
}

const Frame = styled.div`
    margin-top: 20px;
    height: 250vh;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const List = styled.div`
    color: ${props => props.theme.ContentListColor};
`;

export default Content;