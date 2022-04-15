import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton, Container } from "@chakra-ui/react";

const AlertDisplay = ({ setAlert }) => {

  function close(){
    setAlert(false)
  } 

  return (
    <Container maxW='80%' pt="2">
      <Alert status="error">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription display="block">
            Wrong email/password
          </AlertDescription>
        </Box>
        <CloseButton position='absolute' right='8px' top='8px' onClick={() => close()}/>
      </Alert>
    </Container> 
   );
}
 
export default AlertDisplay;