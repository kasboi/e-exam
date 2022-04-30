import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Profile() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" value='name shall not be nameless' isDisabled/>
            </FormControl>
            <FormControl id="email">
              <FormLabel>E-mail</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="contact">
              <FormLabel>Phone Number</FormLabel>
              <Input type="text" />
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}