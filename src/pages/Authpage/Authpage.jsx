import { Box, Button, Container, Flex, Input, VStack } from '@chakra-ui/react'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Authpage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const navigate = useNavigate();

  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert("Please fill out all the fields!");
      return;
    }
    navigate('/')
  };

  return (
    <Container maxW={"container.sm"} padding={4}>
      <Box className="glass-effect"  padding={5} my={4}>
        <VStack spacing={4}>
          <h1>Project Pantry</h1>
          <Input
            placeholder='Email'
            fontSize={14}
            focusBorderColor='orange.400'
            type='email'
            value={inputs.email}
            onChange={(e) => setInputs({...inputs, email: e.target.value})}
          />
           <Input
            placeholder='Password'
            fontSize={14}
            focusBorderColor='orange.400'
            type='password'
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
          />
          {!isLoggedIn ? (
          <Input
            placeholder='Confirm Password'
            fontSize={14}
            focusBorderColor='orange.400'
            type='password'
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
          />
          ) : null}
           
          <Button w={"full"} colorScheme='orange' size={'sm'} fontSize={14} onClick={handleAuth}>
            {isLoggedIn ? "LOG IN" : "SIGN UP"}
          </Button>
        </VStack>
      </Box>
      <Box className="glass-effect" padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLoggedIn ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box onClick={() => setIsLoggedIn(!isLoggedIn)} color={"orange.400"} cursor={"pointer"}>
{isLoggedIn ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </Container>
  )
}

export default Authpage