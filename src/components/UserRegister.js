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
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export default function UserRegister() {
  const navigate = useNavigate();

  function handleRegister() {
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (
      !email ||
      !username ||
      !password ||
      email === "" ||
      username === "" ||
      password === ""
    ) {
      alert("Enter valid details");
    } else {
      // Here you can save the user details or handle registration logic
      localStorage.setItem("userEmail", email);
      localStorage.setItem("username", username);
      navigate("/home");
    }
  }

  return (
    <Center>
      <Box
        p={10}
        width="80vw"
        borderWidth={1}
        borderRadius="lg"
        boxShadow="md"
        mt={10}
      >
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Register
        </Heading>
        <form id="registerForm">
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button colorScheme="blue" onClick={handleRegister}>
              Register
            </Button>
          </Stack>
        </form>
        <Box mt={4}>
          <Link to="/home">Already have an account? Login</Link>
        </Box>
      </Box>
    </Center>
  );
}
