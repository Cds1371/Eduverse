import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    Image,
} from "@chakra-ui/react";
import {
    FiHome,
    FiCompass,
    FiMenu,
} from "react-icons/fi";
import { PiChatsBold } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { LuUser } from "react-icons/lu";

const LinkItems = [
    { name: "Home", icon: FiHome, url: '/home' },
    { name: "Explore", icon: FiCompass, url: '/explore' },
    { name: "Peer Connect", icon: PiChatsBold, url: '/peer-connection' },
    { name: "Profile", icon: LuUser, url: '/profile' },
    { name: "Logout", icon: BiLogOut, url: '/login' },
];

export default function Sidebar({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
            <SidebarContent onClose={onClose} display={{ base: "none", md: "block" }} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="5">
                {children}
            </Box>
        </Box>
    );
}

const SidebarContent = ({ onClose, ...rest }) => {
    const location = useLocation();

    return (
        <Box
            bg={useColorModeValue("white", "gray.900")}
            borderRight="1px"
            borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex h="20" alignItems="center" justifyContent="center" mx="8">
                <Image
                    src='/logo-png.png'
                    alt="Logo"
                    boxSize="80px"
                />
                <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem
                    key={link.name}
                    isActive={location.pathname === link.url}
                    as={Link}
                    to={link.url}
                    icon={link.icon}
                    style={{ textDecoration: "none" }}
                >
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

const NavItem = ({ icon, children, isActive, ...rest }) => {
    return (
        <Box
            as="a"
            _focus={{ boxShadow: "none" }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                my="2" // Add top and bottom margin
                borderRadius="lg"
                role="group"
                cursor="pointer"
                bg={isActive ? "cyan.400" : "transparent"} // Highlight active link
                color={isActive ? "white" : "inherit"} // Change text color for active link
                _hover={{
                    bg: "cyan.400",
                    color: "white",
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        color={isActive ? "white" : "inherit"}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    );
};


const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent="flex-start"
            {...rest}
        >
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
                Logo
            </Text>
        </Flex>
    );
};
