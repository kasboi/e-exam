import {
  Button, Input, InputGroup, InputLeftAddon, InputRightElement, Stack
} from '@chakra-ui/react'

const Signup = ({ show, handleShow }) => {
  return ( 
    <form>
      <Stack>
        <Input placeholder="Name" size='md' type="text"/>
        <Input placeholder="E-mail" size='md' type="email"/>
        <InputGroup>
          <Input placeholder="Password" size='md' type={show ? 'text' : 'password'}/>
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
        <Button>Sign up</Button>
      </Stack>
    </form>
   )
}
 
export default Signup;