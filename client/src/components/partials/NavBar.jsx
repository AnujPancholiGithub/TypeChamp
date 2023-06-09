import React from "react";
import {
  Box,
  Flex,
  Image,
  IconButton,
  Spacer,
  Avatar,
  useColorMode,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <Box bg="transparent" py={4} px={8}>
      <Flex align="center">
        <IconButton
          aria-label="Toggle Theme"
          icon={isDarkMode ? <FaSun /> : <FaMoon />}
          tabIndex={-1}
          onClick={toggleColorMode}
        />
        <Spacer />
        <Image
          src="https://imgpile.com/images/9f9TYM.png"
          alt="TypeChamp Logo"
          boxSize={20}
        />
        <Spacer />
        <Avatar name="Anuj Pancholi" src="avatar-image-url" size="sm" />
      </Flex>
    </Box>
  );
};

export default Navbar;
