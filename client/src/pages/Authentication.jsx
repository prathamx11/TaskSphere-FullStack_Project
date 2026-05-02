import { useState } from "react";
import styled from "styled-components";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Logo from "../Images/Logo.svg";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at top left, rgba(35, 198, 178, 0.2), transparent 30%),
    radial-gradient(circle at bottom right, rgba(20, 96, 255, 0.18), transparent 35%),
    linear-gradient(135deg, #f5f8ff 0%, #eef4f7 45%, #e4eef9 100%);
  @media only screen and (max-width: 600px) {
    padding: 24px 12px;
    justify-content: start;
  }
`;

const BackdropOrb = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(20, 96, 255, 0.14),
    rgba(35, 198, 178, 0.18)
  );
  filter: blur(20px);
  top: -140px;
  right: -120px;
`;

const AccentGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(20, 96, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(20, 96, 255, 0.05) 1px, transparent 1px);
  background-size: 54px 54px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6), transparent 90%);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logotext = styled.div`
  font-size: 38px;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  background: linear-gradient(
    135deg,
    rgb(14, 82, 214) 0%,
    rgb(26, 166, 170) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 4px;
  @media only screen and (max-width: 600px) {
    font-size: 34px;
  }
`;

const LogoImg = styled.img`
  height: 42px;
  margin-right: 10px;
  @media only screen and (max-width: 600px) {
    height: 34px;
  }
`;

const WelcomeText = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 36px;
  color: #5d6a79;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Authentication = () => {
  const [openSignUp, setOpenSignUp] = useState(false);
  return (
    <Container>
      <BackdropOrb />
      <AccentGrid />
      <Content>
        <Logotext>
          <LogoImg src={Logo} />
          TaskSphere
        </Logotext>
        <WelcomeText>
          {openSignUp
            ? "Welcome to TaskSphere!"
            : "Welcome back to TaskSphere!"}
        </WelcomeText>
        {openSignUp ? (
          <SignUp setOpenSignUp={setOpenSignUp} />
        ) : (
          <SignIn setOpenSignUp={setOpenSignUp} />
        )}
      </Content>
    </Container>
  );
};

export default Authentication;
