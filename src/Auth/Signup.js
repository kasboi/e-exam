import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import app from "../Firebase/Auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
} from "firebase/firestore";
import { useState } from "react";
import React from "react";
import { LoginErrMsg } from "./Login";

const auth = getAuth();
const db = getFirestore();

const Signup = ({ show, handleShow, setAlert }) => {
  // collect form data
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [phoneNo, setPhoneNo] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)

  const { setMessage } = React.useContext(LoginErrMsg)

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoading(false)
        // create user details in database
        const colRef = doc(db, "users", user.uid);
        setDoc(colRef, {
          first_name: fname,
          last_name: lname,
          email: email,
          phone: phoneNo,
        }).then(() => {
          console.log("it is done");
        });
        // clear field
        const formSubmit = document.querySelector('.formSubmit')
        formSubmit.reset()
        // Array.from(e.target).forEach((e) => (e.value = ""))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(prev => prev = `${errorMessage}`)
        setLoading(false)
        setAlert()
        // ..
      });
  };
  return (
    <form onSubmit={handleSignup} className='formSubmit'>
      <Stack>
        <Input
          placeholder="First Name"
          size="md"
          type="text"
          onChange={(e) => setFname(e.target.value)}
        />
        <Input
          placeholder="Last Name"
          size="md"
          type="text"
          onChange={(e) => setLname(e.target.value)}
        />
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
        <InputGroup>
          <InputLeftAddon children="+234" />
          <Input
            type="tel"
            placeholder="Phone number"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </InputGroup>
        { !loading ? 
        <Button 
        type="submit"
        colorScheme={'teal'}
        >Sign up</Button> :
        <Button 
        isLoading
        />}
      </Stack>
    </form>
  );
};

export default Signup;
