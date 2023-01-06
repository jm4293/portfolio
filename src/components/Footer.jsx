import React from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs"

function Footer() {
    return (
        <Frame>
            <div style={{margin: '0 30px'}}>이재민 포트폴리오</div>
            <div>@jm4293</div>
            <div style={{flexGrow: "1"}}></div>
            <FooterIcon>
                <FooterIconLink>E-mail</FooterIconLink>
            </FooterIcon>
            <FooterIcon>
                <FooterIconLink href="https://velog.io/@jm4293">Blog</FooterIconLink>
            </FooterIcon>
            <FooterIcon>
                <FooterIconLink href="https://github.com/jm4293"><FooterIconImgGithub /></FooterIconLink>
            </FooterIcon>
        </Frame>
    )
}

const Frame = styled.div`
    height: 10vh;
    border-top: 1px solid ${props => props.theme.color};
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const FooterIcon = styled.div`
    cursor: pointer;
    width: 80px;
    text-align: center;
    transform: scale(1);
    transition: transform .5s;

    &:hover{
        transform: scale(1.2);
        transition: transform .5s;
    }
`;

const FooterIconLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.FooterIcon};
`;

const FooterIconImgGithub = styled(BsGithub)`
    transform: scale(1.5);
    color: ${props => props.theme.FooterIcon};
`;

export default Footer;