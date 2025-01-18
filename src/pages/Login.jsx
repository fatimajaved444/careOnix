import React from 'react';
import { Center, Text, Flex, Box, Button } from '@chakra-ui/react';
import { PasswordInput } from "@/components/ui/password-input"
import { Input } from "@chakra-ui/react"
import { TiTick } from "react-icons/ti";

function Login() {
  return (
    <>
      <Center width="100%" flexDirection="column">
        <Text fontWeight="bold" fontSize={50}>
          My account
        </Text>
        <Text>
          Home {'>'} My account
        </Text>
      </Center>

      <Text 
        ml={{ base: "20px", md: "440px" }} 
        my={30} 
        fontWeight="bold" 
        fontSize={{ base: "18px", md: "25px" }} 
        textAlign={{ base: "center", md: "left" }}
      >
        Login
      </Text>

      <Center>
        <Box
          width={{ base: '90%', md: '400px' }}
          p={6}
          boxShadow="lg"
          borderRadius="md"
          border="1px solid #ccc"
        >
          <Text fontWeight="bold">Username or Email address<span style={{color:'red'}}> *</span></Text>
          <Input placeholder="" />
          <Text fontWeight="bold">Password<span style={{color:'red'}}> *</span></Text>
          <PasswordInput />
          <Flex direction="row">
            {/* <TiTick /> */}
            <Text>Remember me</Text>
          </Flex>
         
          <Button bg="red" my={2} color="white">
            Log In
          </Button>
          <Text color="red">Lost your password?</Text>
        </Box>
      </Center>
    </>
  );
}

export default Login;
