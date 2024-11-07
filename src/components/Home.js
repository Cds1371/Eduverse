import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import {
  Box,
  Heading,
  Container,
  Button,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import CourseInfo from "./CourseInfo";

export default function Home() {
  // const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [enrolledCourses, setEnrolledCourses] = useState([
    {
      title: "Advanced Software Engineering",
      image: "/logo-png.png",
      description:
        "Software engineering is an engineering-based approach to software development.",
      longDescription:
        "Advanced Software Engineering is an engineering-based approach to software development",
    },
    {
      title: "Machine Learning",
      image: "/logo-png.png",
      description:
        "A detailed investigation of current machine learning methods, including statistical, connectionist, and symbolic learning.",
      longDescription:
        "A detailed investigation of current machine learning methods, including statistical, connectionist, and symbolic learning.",
    },
    {
      title: "Python",
      image: "/logo-png.png",
      description:
        "An introductory programming course that teaches students how to solve business problems using the scripting language, Python.",
      longDescription:
        "An introductory programming course that teaches students how to solve business problems using the scripting language, Python. ",
    },
  ]);


  const handleRenounce = () => {
    setEnrolledCourses(
      enrolledCourses.filter((course) => course.title!== selectedCourse.title)
    )
    setModalOpen(false)
  };

  // useEffect(() => {
  //     if(!userEmail || userEmail === "") {
  //         navigate('/login')
  //     }
  // }, [userEmail, navigate])

  return (
    <Sidebar>
      <Heading size="lg">Welcome {userEmail},</Heading>
      {enrolledCourses.length === 0 ? (
        <Box mt="100px" textAlign="center">
          You are not enrolled in any courses yet!{" "}
          <Link
            style={{ color: "blue", textDecoration: "none" }}
            to={"/explore"}
          >
            Start Enrolling!!
          </Link>
        </Box>
      ) : (
        <Container mt="20" maxW="container.xl">
          <Heading size="md" mb={5}>
            Your Enrolled Courses
          </Heading>
          <Flex wrap="wrap" gap="4">
            {enrolledCourses.map((course, index) => (
              <Box
                key={index}
                maxW="sm"
                border="2px solid black"
                borderRadius={10}
                overflow="hidden"
              >
                <Image src={course.image} alt="Course image" />
                <Box p="4">
                  <Text fontSize="xl" fontWeight="bold">
                    {course.title}
                  </Text>
                  <Text mt="2" mb={0} overflow="hidden" h="100px">
                    {course.description}
                  </Text>
                </Box>
                <Box p="4" display="flex" justifyContent="space-between">
                  <Button
                    onClick={() => {
                      setSelectedCourse(course);
                      setModalOpen(true);
                    }}
                    variant="outline"
                    border="1px solid black"
                    _hover={{ bg: "cyan.400" }}
                    bg="grey.500"
                  >
                    View
                  </Button>
                </Box>
              </Box>
            ))}
          </Flex>
        </Container>
      )}

      {selectedCourse && (
        <CourseInfo
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          course={selectedCourse}
          onRenounce={handleRenounce}
        />
      )}
    </Sidebar>
  );
}

// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import {
//   Box,
//   Heading,
//   Container,
//   Flex,
//   Button,
//   Image,
//   Text,
// } from "@chakra-ui/react";
// import CourseInfo from "./CourseInfo"; // Import the CourseInfo component

// export default function Home() {
//   const navigate = useNavigate();
//   const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
//   const [enrolledCourses, setEnrolledCourses] = useState([
//       {
//       title: "Advanced Software Engineering",
//       image: "/logo-png.png",
//       description:
//         "Software engineering is an engineering-based approach to software development.",
//       longDescription: "Advanced Software Engineering is an engineering-based approach to software development",
//     },
//     {
//       title: "Machine Learning",
//       image: "/logo-png.png",
//       description:
//         "A detailed investigation of current machine learning methods, including statistical, connectionist, and symbolic learning.",
//       longDescription: "A detailed investigation of current machine learning methods, including statistical, connectionist, and symbolic learning.",
//     },
//     {
//       title: "Python",
//       image: "/logo-png.png",
//       description:
//         "An introductory programming course that teaches students how to solve business problems using the scripting language, Python.",
//       longDescription: "An introductory programming course that teaches students how to solve business problems using the scripting language, Python. ",
//     },
//   ]);

//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   const handleRenounce = () => {
//     // Add your renounce logic here, e.g., remove the course from the enrolledCourses state
//     console.log(`Renounced course: ${selectedCourse.title}`);
//     setModalOpen(false);
//     // Optionally, update the enrolledCourses state here
//   };

//   return (
//     <Sidebar>
//       <Heading size="lg">Welcome {userEmail || `Maverick`},</Heading>
//       {enrolledCourses.length === 0 ? (
//         <Box mt="100px" textAlign="center">
//           You are not enrolled in any courses yet!{" "}
//           <Link
//             style={{ color: "blue", textDecoration: "none" }}
//             to={"/explore"}
//           >
//             Start Enrolling!!
//           </Link>
//         </Box>
//       ) : (
//         <Container mt="20" maxW="container.xl">
//           <Heading size="md" mb={5}>
//             Your Enrolled Courses
//           </Heading>
//           <Flex wrap="wrap" gap="4">
//             {enrolledCourses.map((course, index) => (
//               <Box
//                 key={index}
//                 maxW="sm"
//                 border="2px solid black"
//                 borderRadius={10}
//                 overflow="hidden"
//               >
//                 <Image src={course.image} alt="Course image" />
//                 <Box p="4">
//                   <Heading size="md">{course.title}</Heading>
//                   <Text>{course.description}</Text>
//                 </Box>
//                 <Box p="4" display="flex" justifyContent="space-between">
//                 <Button
//                     onClick={() => {
//                       setSelectedCourse(course);
//                       setModalOpen(true);
//                     }}
//                     variant="outline"
//                     border="1px solid black"
//                     _hover={{ bg: "cyan.400" }}
//                     bg="grey.500"
//                   >
//                     View
//                   </Button>
//                 </Box>
//               </Box>
//             ))}
//           </Flex>
//         </Container>
//       )}

//       {selectedCourse && (
//         <CourseInfo
//           isOpen={isModalOpen}
//           onClose={() => setModalOpen(false)}
//           course={selectedCourse}
//           onRenounce={handleRenounce}
//         />
//       )}
//     </Sidebar>
//   );
// }
