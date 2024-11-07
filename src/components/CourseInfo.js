import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Image,
  Button,
  HStack,
} from '@chakra-ui/react';

const CourseInfo = ({ isOpen, onClose, course, onRenounce }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent maxWidth="600px">
        <ModalHeader fontWeight="bold">{course.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={course.image} alt="Course image" h="50vh" w="100%" />
          <Text
            height="100px"
            overflowY="auto"
            mb={4} 
          >
            {course.description}
          </Text>
        </ModalBody>
        <HStack justify="flex-end" spacing={4} p={4}>
          <Button size="sm" onClick={onClose} colorScheme="blue">
            Close
          </Button>
          <Button size="sm" onClick={onRenounce} colorScheme="red">
            Renounce
          </Button>
        </HStack>
      </ModalContent>
    </Modal>
  );
};

export default CourseInfo;
