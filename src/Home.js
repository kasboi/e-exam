import { Box, Button, Container, Stack, Grid, Heading } from "@chakra-ui/react";
import styled from "styled-components";
import {
  BsFillPersonPlusFill,
  BsFillCalculatorFill,
  BsFillGearFill,
  BsFillBarChartFill,
  BsFillChatLeftTextFill,
  BsInfoCircleFill,
} from "react-icons/bs";

const PrimaryHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
`

const Home = () => {
  return (
    <Box pt={2}>
      <PrimaryHeading>Hello User!</PrimaryHeading>
      <Heading as='h4' size='md' fontWeight='100' textAlign='center'>What would you like to do?</Heading>
      <Container maxW="900px">
        {/* <Grid direction="row" spacing="10rem" mt={8}> */}
        <Grid templateColumns={{sm: 'repeat(2, 1fr)', lg:'repeat(3, 1fr)', }} gap={10} mt={8}>
          <Button
            variant='outline'
            leftIcon={<BsFillPersonPlusFill style={{marginRight: '1rem'}}/>}
            py={7}
            px={8}
            colorScheme="teal"
          >
            Profile
          </Button>
          <Button
            variant="outline"
            leftIcon={<BsFillCalculatorFill style={{marginRight: '1rem'}}/>}
            py={7}
            px={8}
            colorScheme="teal"
          >
            Quiz
          </Button>
          <Button
            variant="outline"
            leftIcon={<BsFillGearFill style={{marginRight: '1rem'}}/>}
            py={7}
            px={8}
            colorScheme="teal"
          >
            Settings
          </Button>
        {/* </Grid>
        <Stack direction="row" spacing="10rem" mt={8}> */}
          <Button
            variant='outline'
            leftIcon={<BsFillBarChartFill style={{marginRight: '1rem'}}/>}
            py={7}
            px={8}
            colorScheme="teal"
          >
            Ranking
          </Button>
          <Button
            variant="outline"
            leftIcon={<BsFillChatLeftTextFill style={{marginRight: '1rem'}}/>}
            py={7}
            px={8}
            colorScheme="teal"
          >
            Feedback
          </Button>
          <Button
            variant="outline"
            leftIcon={<BsInfoCircleFill style={{marginRight: '1rem'}}/>}
            py={7}
            px={8}
            colorScheme="teal"
          >
            About
          </Button>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
