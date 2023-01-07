import React, { useEffect, useState } from "react";
import styled from "styled-components";

function ScrollTopButton() {

    const onclickTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Frame>
            <button onClick={onclickTop}>처음으로</button>
        </Frame>
    )
}

const Frame = styled.div`
    /* width: 50px; */
    /* height: 50px; */
    /* border: 1px solid black; */
    position: fixed;
    right: 5%;
    bottom: 5%;
`;

export default ScrollTopButton;