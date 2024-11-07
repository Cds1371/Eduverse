import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Stack,
  Center,
  HStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleLogin() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    if (!email || !pass || email === "" || pass === "")
      alert("Enter valid details");
    else {
      localStorage.setItem("userEmail", email);
      navigate("/home");
    }
  }

  return (
    <Center>
      <Box
        p={6}
        width="30vw"
        borderWidth={1}
        borderRadius="lg"
        boxShadow="md"
        mt={10}
      >
        <Heading as="h2" size="lg" mb={6}>
          Login
        </Heading>
        <form id="loginForm">
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button loading colorScheme="blue" onClick={handleLogin}>
              Login
            </Button>
          </Stack>
        </form>
        <HStack justifyContent="space-around" spacing={5} mt={4}>
          <Link to="#" mr={4}>
            Forgot Password?
          </Link>
          <Link to="/register">New here? Create new Account</Link>
        </HStack>
      </Box>
    </Center>
  );
};

export default Login;
