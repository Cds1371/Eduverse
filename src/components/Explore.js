import { useCallback, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Input,
} from "@chakra-ui/react";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import MyContext from "../contextApi/MyContext";

export default function Explore() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
  const [allCourses, setAllCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { value, setValue } = useContext(MyContext);
  // console.log(value.someValue);

  const sortCourseOrder = (newCourses) => {
    setAllCourses(
      newCourses.sort(
        (a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes)
      )
    );
  };

  useEffect(() => {
    const tempAllCourses = [
      {
        title: "Advanced Software Engineering",
        image: "/logo-png.png",
        description: "Software engineering is an engineering-based approach to software development.",
        longDescription: "Advanced Software Engineering is an engineering-based approach to software development",
        upvotes: 0,
        downvotes: 0,
      },
      {
        title: "Machine Learning",
        image: "/logo-png.png",
        description: "A detailed investigation of current machine learning methods, including statistical, connectionist, and symbolic learning.",
        longDescription: "A detailed investigation of current machine learning methods, including statistical, connectionist, and symbolic learning.",
        upvotes: 0,
        downvotes: 0,
      },
      {
        title: "Python",
        image: "/logo-png.png",
        description: "An introductory programming course that teaches students how to solve business problems using the scripting language, Python.",
        longDescription: "An introductory programming course that teaches students how to solve business problems using the scripting language, Python.",
        upvotes: 0,
        downvotes: 0,
      },
    ];

    sortCourseOrder(tempAllCourses);
  }, []);

  const handleUpvote = (index) => {
    const updatedCourses = [...allCourses];
    updatedCourses[index].upvotes += 1;
    sortCourseOrder(updatedCourses);
  };

  const handleDownvote = (index) => {
    const updatedCourses = [...allCourses];
    updatedCourses[index].downvotes += 1;
    sortCourseOrder(updatedCourses);
  };

  // Filter courses based on the search query
  const filteredCourses = allCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Sidebar>
      <Heading size="lg">Explore Courses</Heading>
      <Input
        placeholder="Search courses..."
        mt={4}
        mb={4}
        value={searchQuery}
        border="1px solid black"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredCourses.length === 0 ? (
        <Box mt="100px" textAlign="center">
          No results found.
        </Box>
      ) : (
        <Container mt="20" maxW="container.lg">
          {filteredCourses.map((course, index) => (
            <Card
              key={index}
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              borderRadius={20}
              my={5}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={course.image}
                alt="Course Image"
              />

              <Stack>
                <CardBody>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                  >
                    <Heading size="md">{course.title}</Heading>
                  </Box>
                  <Text py="2">{course.description}</Text>
                </CardBody>

                <CardFooter display="flex" justifyContent="flex-start">
                  <HStack>
                    <Button variant="solid" colorScheme="blue">
                      Enroll
                    </Button>

                    <HStack width="100%">
                      <Button
                        variant="ghost"
                        colorScheme="green"
                        borderRadius={20}
                        leftIcon={<BsHandThumbsUp />}
                        onClick={() => handleUpvote(index)}
                      >
                        {course.upvotes}
                      </Button>
                      <Button
                        variant="ghost"
                        colorScheme="red"
                        borderRadius={20}
                        leftIcon={<BsHandThumbsDown />}
                        onClick={() => handleDownvote(index)}
                      >
                        {course.downvotes}
                      </Button>
                    </HStack>
                  </HStack>
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </Container>
      )}
    </Sidebar>
  );
}
