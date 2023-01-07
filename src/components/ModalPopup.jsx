import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

function ModalPopup({ isModalPopup, setIsModalPopup }) {
    const useref = useRef(null);

    // 모달 외부 영역 클릭하면 모달 종료
    const handler = (e) => {
        if (!useref.current.contains(e.target)) {
            setIsModalPopup(false);
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
            <ModalBackGround isModalPopup={isModalPopup}>
                <Modal ref={useref}>
                    <button onClick={() => setIsModalPopup(false)}>돌아가기</button>
                </Modal>
            </ModalBackGround>
        </>
    )
}

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const ModalBackGround = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: rgba(39, 39, 39, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${props => props.isModalPopup ? fadeIn : fadeOut} 0.5s;
`;

const Modal = styled.div`
    width: 90vw;
    height: 80vh;
    border: 1px solid black;
    box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    background-color: white;
`;

export default ModalPopup;