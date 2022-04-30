import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Auth";
import React from "react";
import { UserDetails } from "../App";
import { LoginErrMsg } from "./Login";


const auth = getAuth();

const Signin = ({ show, handleShow, setAlert }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false)

  const { setToken } = React.useContext(UserDetails)
  const { setMessage } = React.useContext(LoginErrMsg)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const online_user = userCredential.user;
        // ...
        setToken(online_user.uid)
        setLoading(false)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage((prev) => prev = `${errorMessage}`)
        setAlert()
        setLoading(false)
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <Input
          placeholder="E-mail"
          size="md"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputGroup>
          <Input
            placeholder="Password"
            size="md"
            type={show ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleShow}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        { !loading ? 
        <Button 
        type="submit"
        colorScheme={'teal'}
        >Log in</Button> :
        <Button 
        isLoading
        >Log in</Button>}
      </Stack>
    </form>
  );
};

export default Signin;
