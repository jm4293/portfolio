import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { RiArrowGoBackFill } from "react-icons/ri"

function ModalSlide({ scrollT, setIsModalSlide }) {
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
                <ListItem><Astyled  href="#INTRO">HOME</Astyled></ListItem>
                <ListItem><Astyled ref={ref} href="#ABOUT">ABOUT</Astyled></ListItem>
                <ListItem><Astyled href="#PROJECT">PROJECT</Astyled></ListItem>
                <ListItem><Astyled href="#CAREER">CAREER</Astyled></ListItem>
                <ListItem><Astyled href="#SKILLS">SKILLS</Astyled></ListItem>
                <StyledRiArrowGoBackFill onClick={() => { setIsModalSlide(false) }} />
            </List>
        </Frame>
    )
}

const Frame = styled.div`  
    width: 150px;
    height: 100%;
    padding-left: 10px;
    /* margin-right: 15px; */
    background-color: ${props => props.theme.ModalSlidebgColor};
    color: ${props => props.theme.ModalSlideColor};
    border-left: 1px solid ${props => props.theme.ModalSlideBorder};
`;

const List = styled.div`
    position: relative;
    top: ${props => props.scrollT + 250}px;
    display: flex;
    flex-direction: column;
    align-items: center
`;

const ListItem = styled.div`
    margin: 20px 0;
    font-size: 24px;
    cursor: pointer;

    transform: scale(1);
    transition: transform .5s;

    &:hover{
        transform: scale(1.2);
        transition: transform .5s;
    }
`;

const Astyled = styled.a`
    color: ${props => props.theme.color};
    text-decoration: none;
`;

const StyledRiArrowGoBackFill = styled(RiArrowGoBackFill)`
    cursor: pointer;
    margin-top: 50px;
    font-size: 24px;
    color: ${props => props.theme.color};

    transform: scale(1);
    transition: transform .5s;

    &:hover{
        transform: scale(1.2);
        transition: transform .5s;
    }
`

export default ModalSlide;