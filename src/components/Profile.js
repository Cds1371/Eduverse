import React from "react";
import { Box, Avatar, Heading, Text, Stack } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const Profile = () => {
  const user = {
    name: "John Doe",
    avatar: "https://example.com/images/johndoe.jpg",
    email: "john.doe@example.com",
    bio: "An enthusiast student leaning new things",
    location: "Arlington, Texas",
    joined: "2021-01-01",
  };

  return (
    <Sidebar>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
        boxShadow="md"
      >
        <Avatar
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          size="xl"
          mb={4}
        />
        <Heading size="lg" mb={2}>
          {user.name}
        </Heading>
        <Text fontSize="md" color="gray.600">
          {user.email}
        </Text>
        <Text mt={2} fontStyle="italic" color="gray.500">
          {user.bio}
        </Text>
        <Stack mt={4} spacing={1}>
          <Text>
            <strong>Location:</strong> {user.location}
          </Text>
          <Text>
            <strong>Joined:</strong>{" "}
            {new Date(user.joined).toLocaleDateString()}
          </Text>
        </Stack>
      </Box>
    </Sidebar>
  );
};

export default Profile;
