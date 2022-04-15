import styled from "styled-components"
import {
  Box, Button, Container, Flex, Input, InputGroup, InputLeftAddon, InputRightElement, Stack
} from '@chakra-ui/react'
import { useEffect, useState } from "react"
import Signin from "./Signin"
import Signup from "./Signup"
import AlertDisplay from "./Alert"


const Containers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;
`
const LeftContainer = styled.div`
  background-image: url('img/e-exam.jpg');
  background-size: cover;
`

const RightContainer = styled.div`
  background-color: #f8f9fa;
`

const Login = () => {

  const [login, setLogin] = useState(true)
  const [signup, setSignup] = useState(false)
  const [show, setShow] = useState(false)
  const [alert, setAlert] = useState(false)
  const handleShow = () => setShow(!show)

  const handleClick = () => {
    setLogin(!login)
    setSignup(!signup)
  }

  return ( 

    <Containers>
      <LeftContainer />
      <RightContainer>
        { alert && <AlertDisplay setAlert={ setAlert } /> }
        <Container mx="auto">
          <Flex justify="flex-end" my="2rem">
            <Button variant='ghost' mr="1rem" onClick={() => handleClick()}>Login</Button>
            <Button variant='ghost' onClick={() => handleClick()}>Sign up</Button>
          </Flex>
          <Container>
            { login && <Signin show={ show } handleShow = { handleShow } setAlert = { setAlert } /> }
            { signup && <Signup show={ show } handleShow = { handleShow } /> }
          </Container>
        </Container>
      </RightContainer>
    </Containers>
   );
}
 
export default Login;