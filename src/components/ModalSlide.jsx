import React, {useRef, useEffect} from "react";
import styled from "styled-components";

function ModalSlide({scrollT, setIsModalSlide}) {
    // 슬라이드 영역 밖 클릭시 종료
    const useref = useRef(null);
    const handler = (e) => {
        if (!useref.current.contains(e.target)) {
            setIsModalSlide(false);
        }
    }

    useEffect(() => {
        window.addEventListener('mouseup', handler);

        return () => {
            window.removeEventListener('mouseup', handler);
        }
    })

    return (
        <Frame ref={useref}>
            <List scrollT={scrollT}>
                <button onClick={() => {setIsModalSlide(false)}} >돌아가기</button>
                <div><a href="#INTRO">INTRO</a></div>
                <div><a href="#ABOUT">ABOUT</a></div>
                <div><a href="#PROJECT">PROJECT</a></div>
                <div><a href="#SKILLS">SKILLS</a></div>
                <div><a href="#CAREER">CAREER</a></div>
            </List>
        </Frame>
    )
}

const Frame = styled.div`  
  width: 224px;
  height: 100%;
  padding-left: 10px;
  margin-right: 15px;
  background-color: ${props => props.theme.ModalSlidebgColor};
  color: ${props => props.theme.ModalSlideColor};
  border-left: 1px solid ${props => props.theme.ModalSlideBorder};
`;

const List = styled.div`
  position: relative;
  top: ${props => props.scrollT + 300}px;
`;

export default ModalSlide;