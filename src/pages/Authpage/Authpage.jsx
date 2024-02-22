import { Box, Container, Flex, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import Login from '../../components/SideBar/AuthForm/Login';
import Signup from '../../components/SideBar/AuthForm/Signup';

const Authpage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Container maxW={'container.sm'} padding={4}>
      <Box className='glass-effect' padding={5} my={4}>
        <VStack spacing={4}>
          <h1>Project Pantry</h1>
          {isLoggedIn ? <Login /> : <Signup /> }
        </VStack>
      </Box>
      <Box className='glass-effect' padding={5}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Box mx={2} fontSize={14}>
            {isLoggedIn ? "Don't have an account?" : 'Already have an account?'}
          </Box>
          <Box onClick={() => setIsLoggedIn(!isLoggedIn)} color={'orange.400'} cursor={'pointer'}>
            {isLoggedIn ? 'Sign Up' : 'Log In'}
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Authpage;
