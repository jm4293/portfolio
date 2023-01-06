import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

function ModalPopup({ isModalPopup, setIsModalPopup }) {
    const useref = useRef(null);

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

    return (
        <>
            <ModalBackGround isModalPopup={isModalPopup}>
                <Modal ref={useref}>
                    <button onClick={() => setIsModalPopup(false)}>X</button>
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
    width: 400px;
    height: 700px;
    border: 1px solid black;
    box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    background-color: white;
`;

export default ModalPopup;