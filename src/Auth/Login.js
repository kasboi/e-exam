import styled from "styled-components";
import { Box, Button, Container, Flex, Slide, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import AlertDisplay from "./Alert";
import React from "react";

export const LoginErrMsg = React.createContext()

const Containers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;
`;
const LeftContainer = styled.div`
  background-image: url("img/e-exam.jpg");
  background-size: cover;
`;

const RightContainer = styled.div`
  background-color: #f8f9fa;
`;

const Login = () => {
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);
  const [show, setShow] = useState(false);
  // const [alert, setAlert] = useState(false);
  const handleShow = () => setShow(!show);

  const loginBtn = () => !(login) ? (setLogin(true), setSignup(false)) : login
  const signupBtn = () => !signup ? (setSignup(true), setLogin(false)) : signup

  const { isOpen, onToggle } = useDisclosure()
  const [ message, setMessage ] = useState('')

  return (
    <LoginErrMsg.Provider value={ { message, setMessage }}>
      <Containers>
        <LeftContainer />
        <RightContainer>
          <Slide direction="top" in={isOpen} style={{ zIndex: 10 } } >
            <AlertDisplay setAlert={onToggle} />
          </Slide>
          <Container mx="auto">
            <Flex justify="flex-end" my="2rem">
              <Button variant="ghost" mr="1rem" onClick={() => loginBtn()}>
                Login
              </Button>
              <Button variant="ghost" onClick={() => signupBtn()}>
                Sign up
              </Button>
            </Flex>
            <Container>
              {login && (
                <Signin show={show} handleShow={handleShow} setAlert={onToggle} />
              )}
              {signup && <Signup show={show} handleShow={handleShow} setAlert={onToggle}/>}
            </Container>
          </Container>
        </RightContainer>
      </Containers>
    </LoginErrMsg.Provider>
  );
};

export default Login;
