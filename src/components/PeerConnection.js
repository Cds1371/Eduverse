import React, { useState } from "react";
import Sidebar from "./Sidebar";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  List,
  ListItem,
  ListIcon,
  useDisclosure,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa"; // Import check circle icon from react-icons

const initialMessages = {
  1: [
    { id: 1, userId: 1, text: "Hello everyone!" },
    { id: 2, userId: 2, text: "Hi! How's it going?" },
  ],
  2: [
    { id: 1, userId: 1, text: "Welcome to Group 2!" },
    { id: 2, userId: 2, text: "Let's discuss here." },
  ],
};

const users = [
  { id: 1, name: "You", avatar: "https://bit.ly/broken-link" },
  { id: 2, name: "User 2", avatar: "https://bit.ly/broken-link" },
];

export default function PeerConnection() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [groupName, setGroupName] = useState('');
  const [rooms, setRooms] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentUser = users[0]; // Assuming the first user is "You"

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        userId: 1, // Current user ID
        text: inputValue,
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handleCreateGroup = () => {
    if (groupName.trim()) {
      const newRoom = {
        id: rooms.length + 1,
        name: groupName,
        creator: currentUser.name,
        timestamp: new Date().toLocaleString(),
      };
      setRooms([...rooms, newRoom]);
      setMessages(initialMessages[newRoom.id] || []); // Initialize messages for the new room
      setGroupName(''); // Reset group name
      onClose(); // Close modal
    }
  };

  const handleOpenGroup = (room) => {
    // Set messages to the ones associated with the selected group
    setMessages(initialMessages[room.id] || []);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Sidebar>
      <Box
        maxW="md"
        mx="auto"
        mt="10"
        borderWidth="1px"
        borderRadius="lg"
        p="4"
      >
        <VStack spacing={4} align="stretch">
          <Flex justify="space-between" mb={4}>
            <Button onClick={onOpen} colorScheme="blue">
              Create New Group
            </Button>
            <Button onClick={() => setRooms(rooms)} colorScheme="teal">
              Open Existing Group
            </Button>
          </Flex>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            p="4"
            overflowY="auto"
            maxHeight="300px"
            bg="gray.50"
          >
            {messages.length === 0 ? (
              <Text>No messages yet. Start the discussion!</Text>
            ) : (
              messages.map((message) => {
                const user = users.find(user => user.id === message.userId);
                const isCurrentUser = message.userId === 1;

                return (
                  <Flex
                    key={message.id}
                    align="center"
                    justify={isCurrentUser ? "flex-end" : "flex-start"}
                    mb={2}
                  >
                    {!isCurrentUser && (
                      <Avatar src={user.avatar} name={user.name} size="sm" mr={2} />
                    )}
                    <Box
                      bg={isCurrentUser ? "blue.100" : "gray.200"}
                      borderRadius="lg"
                      p={2}
                      maxW="70%"
                    >
                      <Text>{message.text}</Text>
                    </Box>
                    {isCurrentUser && (
                      <Avatar src={user.avatar} name={user.name} size="sm" ml={2} />
                    )}
                  </Flex>
                );
              })
            )}
          </Box>
          <Flex>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown} // Handle key down event
              placeholder="Type your message..."
              mr="2"
            />
            <Button onClick={handleSendMessage} colorScheme="blue">
              Send
            </Button>
          </Flex>
        </VStack>
      </Box>

      {/* Modal for creating a new group */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Group</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Enter group name..."
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleCreateGroup}>
              Create
            </Button>
            <Button onClick={onClose} ml={3}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal for existing groups */}
      <Modal isOpen={rooms.length > 0} onClose={() => setRooms([])}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Existing Groups</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List spacing={3}>
              {rooms.map((room) => (
                <ListItem key={room.id}>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  <Text onClick={() => handleOpenGroup(room)} style={{ cursor: 'pointer' }}>
                    {room.name} (Created by: {room.creator})
                  </Text>
                </ListItem>
              ))}
            </List>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setRooms([])}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Sidebar>
  );
}
