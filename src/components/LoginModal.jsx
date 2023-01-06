import React, {useEffect, useRef} from "react";
import styled from "styled-components";

function LoginModal({setIsLoginModal}){
    const useref = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if(!useref.current.contains(e.target)) {
                setIsLoginModal(false);
            }
        }
        
        console.log(useref.current)

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    })

    return (
        <>
            <ModalbgColor>
                <Modal ref={useref}>
                    <button onClick={() => setIsLoginModal(false)}>X</button>
                </Modal>
            </ModalbgColor>
        </>
    )
}

const ModalbgColor = styled.div`
    top: 10vh;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(39, 39, 39, 0.1);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    width: 400px;
    height: 700px;
    border: 1px solid black;
    box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    background-color: white;
`;

export default LoginModal;