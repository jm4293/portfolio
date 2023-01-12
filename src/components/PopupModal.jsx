import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { RiArrowGoBackFill } from "react-icons/ri"

function ModalPopup({ isModal, setIsModal, isModalNumber }) {
    const content = [
        "사용자가 좀 더 관심을 갖고 오래동안 기억에 남도록 사용자 관점으로 많은 생각해서 레이아웃을 만든 프로젝트입니다.",
        "Open API를 통해 사용자가 원하는 데이터를 선택해고 해당 서버에서 받아와 화면에 보여주는 프로젝트입니다.",
        "REST API의 개념을 학습하게 되었으며 GET, POST요청과 MySQL Query를 사용하여 데이터베이스에 저장 및 요청을 학습하게 되었습니다.",
        "fetch와 axiox의 차이점을 알게되었으며 서버로 부터 데이터를 불러왔지만 원하는 데이터를 원하는 위치로 화면출력하는 작업에 어려움을 느끼게 되었습니다.",
        "Socket.io의 실시간 양방향 통신에 대해 학습하게 되었으며 http통신과 socket통신의 차이점을 알게되었습니다.",
        "Firebase, Redux Toolkit, TypeSciprt를 사용하여 교보문고 사이트를 참고하여 도서구매 홈페이지 제작 계획으로 학습 중입니다.",
        "프론트엔드만 아닌 JavaScirpt로 사용이 가능한 Express 프레임워크를 사용하여 백엔드의 기능과 웹의 흐름을 알게되었습니다."
    ];

    const img = [
        "/images/portfolio.gif",
        "/images/weather.gif",
        "/images/login.gif",
        "/images/noticeboard.gif",
        "/images/chatting_.png",
        "/images/typescript_.png",
        "/images/server_.jpg"
    ];

    const useref = useRef(null);

    // 모달 외부 영역 클릭하면 모달 종료
    const handler = (e) => {
        if (!useref.current.contains(e.target)) {
            setIsModal(false);
        }
    }

    useEffect(() => {
        window.addEventListener('mouseup', handler);
        return () => {
            window.removeEventListener('mouseup', handler);
        }
    })

    // 모달 실행 중 스크롤 막기
    useEffect(() => {
        document.body.style.cssText = `
            position: fixed;
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%
        `;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        }
    }, [])

    return (
        <>
            <ModalBackGround isModal={isModal}>
                <Modal ref={useref}>
                    <StyledImg src={img[isModalNumber]}/>
                    <StyledContent>{content[isModalNumber]}</StyledContent>
                    <div style={{ flexGrow: "1" }}></div>
                    <Button onClick={() => setIsModal(false)} >돌아가기</Button>
                </Modal>
            </ModalBackGround>
        </>
    )
}

const ModalBackGround = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: rgba(39, 39, 39, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    width: 50%;
    height: 70%;
    border: 1px solid black;
    box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;

    /* @media screen and (max-width: 768px) {
        width: 70vw;
  } */
`;

const StyledImg = styled.img`
    border: 1px solid black;
    border-radius: 10px;
    width: 90%;
    height: 50%;
    margin: 20px 0;
`;

const StyledContent = styled.div`
    border-top: 1px dotted black;
    padding-top: 20px;
    width: 90%;
`;

const Button = styled.div`
    cursor: pointer;
    width: 100%;
    border-top: 1px solid black;
    height: 50px;
    text-align: center;
    padding-top: 25px;
`;

export default ModalPopup;