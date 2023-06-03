import React from "react";
import { Box, Heading, Text, Button, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const navigateTo = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt={"5%"}
      padding={8}
      color={isDarkMode ? "white" : "#1C3C50"}
    >
      <Heading as="h1" fontSize="4xl" textAlign="center" mb={4}>
        TypeChamp - Unleash Your Typing Skills
      </Heading>
      <Text fontSize="xl" textAlign="center" mb={8}>
        Become a Keyboard Maestro!
      </Text>
      <Button
        colorScheme={isDarkMode ? "yellow" : "blue"}
        size="lg"
        onClick={(e) => {
          return navigateTo("/test");
        }}
      >
        Take Test Now
      </Button>
    </Box>
  );
};

export default HomePage;
