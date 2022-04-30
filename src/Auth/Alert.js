import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { LoginErrMsg } from "./Login";

const AlertDisplay = ({ setAlert }) => {
  const { message } = React.useContext(LoginErrMsg)

  return (
    <Container maxW="80%" pt="2">
      <Alert status="error">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription display="block">
            { message }
          </AlertDescription>
        </Box>
        <CloseButton
          position="absolute"
          right="8px"
          top="8px"
          onClick={() => setAlert()}
        />
      </Alert>
    </Container>
  );
};

export default AlertDisplay;
