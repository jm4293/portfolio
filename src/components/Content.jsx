import React, { useRef } from "react";
import styled from "styled-components";
// import useGotoElement from "./useGotoElement";

function Content({ isModalPopup, setIsModalPopup }) {
    // const {element, gotoElement} = useGotoElement()



    return (
        <Frame>
            <Introduce id="INTRO">
                <div>INTRO</div>
                <div>안녕하세요. 프론트엔드 개발자로서</div>
                <div>저의 가능성을 보고 </div>
            </Introduce>

            <div id="ABOUT">
                <BoxTwo onClick={() => setIsModalPopup(!isModalPopup)}>ABOUT</BoxTwo>
            </div>
            <div id="PROJECT">
                <BoxOne  onClick={() => setIsModalPopup(!isModalPopup)}>PROJECT</BoxOne>
            </div>
            <div id="SKILLS">
                <BoxThree  onClick={() => setIsModalPopup(!isModalPopup)}>SKILLS</BoxThree>
            </div>
            <div id="CAREER">
                <BoxFour  onClick={() => setIsModalPopup(!isModalPopup)}>CAREER</BoxFour>
            </div>



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
    background-color: ${props => props.theme.ContentListbgColor};
    color: ${props => props.theme.ContentListColor};
    border-radius: 50px;
    box-sizing: border-box;
    padding: 10px 50px;
    border: 1px solid black;
    margin: 20px
`;

const Introduce = styled(List)`
    /* border: 1px solid black; */
    /* width: 80vw; */
    /* height: 50vh; */
`;

const Box = styled(List)`
    cursor: pointer;
    margin: 200px 0;
    

    &:hover{
        transform: scale(1.1);
        transition: transform .5s;
    } 
`;

const BoxOne = styled(Box)`

`;

const BoxTwo = styled(Box)`

`;

const BoxThree = styled(Box)`

`;

const BoxFour = styled(Box)`

`;

export default Content;