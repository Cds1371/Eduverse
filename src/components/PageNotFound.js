// react component for page not found show everything in center

import React from 'react';
import { Container, Heading, Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <Container maxW="container.lg" centerContent="center">
      <Heading mt="100px" size="2xl" color="gray.800">
        Page Not Found
      </Heading>
      <Box mt="50px">
        <p>The page you're looking for doesn't exist.</p>
        <Text textAlign="center" textDecoration="underline"><Link to="/login" textAlign="center">Return to login</Link></Text>
      </Box>
    </Container>
  );
}