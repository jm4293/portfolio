import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ModalPopup from "./PopupModal";
import {BsGithub} from "react-icons/bs"

function Content() {
    const [isModal, setIsModal] = useState(false);
    const [isModalNumber, setIsModalNumber] = useState(0);

    const click = (e) => {
        setIsModal(true);
        setIsModalNumber(e);
    }

    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
    const [isRemove, setIsRemove] = useState(false);
    const homeText = "안녕하세요! 새로운 변화에 고통보단 즐거움을 느끼며 성장하는 \n 신입 프론트엔드 개발자 입니다.";

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setText((prev) => {
                let result;

                if (homeText[count] !== "\n") {
                    result = prev ? prev + homeText[count] : homeText[0];
                } else {
                    result = prev + "\n"
                }
                setCount(count + 1);

                if (count === homeText.length) {
                    setCount(0);
                    setText('');
                }

                return result;
            })
        }, 100);

        return () => {
            clearInterval(typingInterval);
        }
    })


    return (
        <Frame>
            <List>
                <h1>HOME</h1>
                <Line/>
                <div style={{textAlign: "center", whiteSpace: "pre-line"}}>
                    {/* <div>{text}</div> */}
                    <h3>안녕하세요! 새로운 변화에 고통보단 즐거움을 느끼며 성장하는</h3>
                    <h2>신입 프론트엔드 개발자 입니다.</h2>
                </div>
            </List>
            <List>
                <h1>ABOUT</h1>
                <Line/>
                <div style={{textAlign: "center"}}>
                    <h4>새로운것과 궁금한것을 무조건 해결해야 직성이 풀리는 성격입니다.</h4>
                    <h4>사용자 편의성을 고민하는 개발자가 되기 위해 노력중이며 작업을 하다보면 오류는 분명 생기게되지만 스스로 오류를 찾고 해결한다는 마음으로 노력하고있습니다.</h4>
                    <h4>프론트엔드만 학습하는 것이 아닌 프론트엔드와 백엔드 그리고 데이터베이스를 함게 학습하여 웹의 전체적인 흐름을 생각하며 학습을 해왔습니다.</h4>
                    <h4>아직 부족하지만 저의 성장 가능성을 믿고 이끌어줄 회사를 찾고있는 소통 잘하는 프론트엔드 개발자입니다.</h4>
                </div>
            </List>
            <List>
                <h1>PROJECT</h1>
                <Line/>
                <h3 style={{marginTop: "30px"}}>FrontEnd</h3>
                <Line/>
                {isModal && <ModalPopup isModal={isModal} setIsModal={setIsModal} isModalNumber={isModalNumber}/>}
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    <ProjectItem>
                        <StyledImg src="/images/bookstore_.png" onClick={() => click(5)}/>
                        <div style={{textAlign: "center", fontSize: "20px"}}><ProjectA href="https://bookstore-6c407.firebaseapp.com/">BookStore(링크)</ProjectA><ProjectA href="https://github.com/jm4293/bookstore"><StyledBsGithub/></ProjectA>
                        </div>
                    </ProjectItem>
                    <ProjectItem>
                        <StyledImg src="/images/portfolio_.png" onClick={() => click(0)}/>
                        <div style={{textAlign: "center", fontSize: "20px"}}>PortFolio <ProjectA href="https://github.com/jm4293/portfolio"><StyledBsGithub/></ProjectA></div>
                    </ProjectItem>
                    <ProjectItem>
                        <StyledImg src="/images/weather_.png" onClick={() => click(1)}/>
                        <div style={{textAlign: "center", fontSize: "20px"}}>Open API <ProjectA href="https://github.com/jm4293/React-test/blob/main/src/component/Weather.jsx"><StyledBsGithub/></ProjectA></div>
                    </ProjectItem>
                    <ProjectItem>
                        <StyledImg src="/images/noticeboard_.png" onClick={() => click(3)}/>
                        <div style={{textAlign: "center", fontSize: "20px"}}>게시판<ProjectA href="https://github.com/jm4293/React-test/tree/main/src/component/NoticeBoard"><StyledBsGithub/></ProjectA></div>
                    </ProjectItem>
                    <ProjectItem>
                        <StyledImg src="/images/login_.png" onClick={() => click(2)}/>
                        <div style={{textAlign: "center", fontSize: "20px"}}>로그인<ProjectA href="https://github.com/jm4293/React-test/blob/main/src/component/Login.jsx"><StyledBsGithub/></ProjectA></div>
                    </ProjectItem>
                    {/*<ProjectItem>*/}
                    {/*    <StyledImg src="/images/chatting_.png" onClick={() => click(4)} />*/}
                    {/*    <div style={{ textAlign: "center", fontSize: "20px" }}>Socket.io <ProjectA href="https://github.com/jm4293/React-test/blob/main/src/component/Chatting.jsx"><StyledBsGithub /></ProjectA></div>*/}
                    {/*</ProjectItem>*/}
                </div>
                <h3 style={{marginTop: "30px"}}>BackEnd</h3>
                <Line/>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <ProjectItem>
                        <StyledImg src="/images/server_.jpg" onClick={() => click(6)}/>
                        <div style={{textAlign: "center", fontSize: "20px"}}>Server <a href="https://github.com/jm4293/React-test/blob/main/server/server.js" style={{color: "black"}}><StyledBsGithub/></a></div>
                    </ProjectItem>
                </div>
            </List>
            <List>
                <h1>CAREER</h1>
                <Line/>
                <CareerItem>
                    <h2>학력</h2>
                    <div style={{textAlign: "end"}}>
                        <h4>한국교통대학교 컴퓨터공학과</h4>
                        <div>2012.02 - 2018.02</div>
                    </div>
                </CareerItem>
                <CareerItem style={{marginTop: "25px"}}>
                    <h2>자격증</h2>
                    <div style={{textAlign: "end"}}>
                        <h4>정보처리기사</h4>
                        <div>2018.05</div>
                        <h4>컴퓨터활용능력 1급</h4>
                        <div>2021.09</div>
                    </div>
                </CareerItem>
            </List>
            <List>
                <h1>SKILLS</h1>
                <Line/>
                <SkillsItem>
                    <h4>HTML / CSS / JAVASCRIPT</h4>
                    <h4>React</h4>
                    <h4>Express - Node.js</h4>
                    <h4>TypeScript (학습중)</h4>
                </SkillsItem>
            </List>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 220px;

  /* @media screen and (max-width: 768px) {
      height: 420vh;
  } */
`;

const Line = styled.div`
  margin-top: -20px;
  border-top: 1px solid rgb(113, 113, 113);
`;

const List = styled.div`
  width: 85%;
  color: ${props => props.theme.ContentListColor};
`;

const ProjectItem = styled.div`
  width: 300px;
  height: 300px;
  margin: 35px 30px;
  display: flex;
  flex-direction: column;
`;

const ProjectA = styled.a`
  color: black;
  text-decoration-line: none;
  //margin-right: 20px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 85%;

  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const StyledBsGithub = styled(BsGithub)`
  margin-left: 10px;
  cursor: pointer;

  transform: scale(1);
  transition: transform .3s;

  &:hover {
    transform: scale(1.1);
    transition: transform .3s;
  }
`;

const CareerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

const SkillsItem = styled.div`
  padding: 0 50px;
`;

export default Content;