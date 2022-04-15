import {
  Button, Input, InputGroup, InputLeftAddon, InputRightElement, Stack
} from '@chakra-ui/react'
import app from '../Firebase/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth();

const Signup = ({ show, handleShow }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user.uid);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
  }
  return ( 
    <form onSubmit={handleSignup}>
      <Stack>
        <Input placeholder="Name" size='md' type="text"/>
        <Input placeholder="E-mail" size='md' type="email" onChange={(e) => setEmail(e.target.value)} />
        <InputGroup>
          <Input placeholder="Password" size='md' type={show ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)}/>
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleShow}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="+234" />
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>
        <Button type='submit'>Sign up</Button>
      </Stack>
    </form>
   )
}
 
export default Signup;