import React from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs"

function Footer() {
    return (
        <Frame>
                <div style={{ flexGrow: "1" }}></div>
                <div style={{ margin: "0 30px" }}>@jm4293</div>
                <div>2023.01.10</div>
                <div style={{ flexGrow: "8" }}></div>
                <FooterIcon>
                    <FooterIconLink href="https://velog.io/@jm4293">Blog</FooterIconLink>
                </FooterIcon>
                <FooterIcon>
                    <FooterIconLink href="https://github.com/jm4293"><FooterIconImgGithub /></FooterIconLink>
                </FooterIcon>
                <div style={{ flexGrow: "1" }}></div>
        </Frame>
    )
}

const Frame = styled.div`
    width: 100%;
    height: 10vh;
    border-top: 1px solid ${props => props.theme.color};
    display: flex;
    align-items: center;
`;

const FooterIcon = styled.div`
    cursor: pointer;
    margin: 0 30px;
    text-align: center;
    
    transform: scale(1);
    transition: transform .3s;

    &:hover{
        transform: scale(1.1);
        transition: transform .3s;
    }
`;

const FooterIconLink = styled.a`
    text-decoration: none;
    font-size: 16px;
    color: ${props => props.theme.FooterIcon};
`;

const FooterIconImgGithub = styled(BsGithub)`
    transform: scale(1.5);
    color: ${props => props.theme.FooterIcon};
`;

export default Footer;