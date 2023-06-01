import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Heading, Text, useColorMode } from "@chakra-ui/react";
import testData from "../data/string.json";
import "../uityles.css";

const TestBox = () => {
  const [pressedKey, setPressedKey] = useState("");
  const [currentKey, setCurrentKey] = useState(0);
  const [typoError, setTypoError] = useState(false);
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const testText = testData.text;
  const wordsArray = Array.from(testText);

  const handleKeyPress = (e) => {
    console.log(e.key);
    setPressedKey(e.key);

    if (e.key === wordsArray[currentKey]) {
      setCurrentKey((prevKeyIndex) => prevKeyIndex + 1);

      if (typoError) {
        setTypoError(false);
      }
    } else {
      if (!typoError) {
        setTypoError(true);
      }
    }

    console.log(currentKey);
  };

  useEffect(() => {
    console.log("render");
  }, []);

  const handleStartTest = () => {
    inputRef.current.focus();
  };

  const handleResetTest = () => {
    setShow(!show);
  };

  return (
    <Box maxWidth="600px" margin="0 auto">
      <Heading textAlign="center" mb={4}>
        Typing Test
      </Heading>
      <Box
        ref={inputRef}
        onKeyDown={handleKeyPress}
        boxShadow={isDarkMode ? "dark-lg" : "lg"}
        p={4}
        borderRadius="md"
        bg={isDarkMode ? "gray.800" : "white"}
        tabIndex={0}
      >
        <Text fontSize="xl" textAlign="center" mb={4}>
          {wordsArray.map((word, index) => (
            <Text
              key={index}
              as="span"
              fontSize={
                currentKey === index ? (typoError ? "4xl" : "2xl") : "xl"
              }
              color={
                currentKey === index ? (typoError ? "red" : "blue") : "black"
              }
              fontWeight="bold"
            >
              {word}
              {currentKey === index && <span className="cursor" />}
            </Text>
          ))}
        </Text>
        <Heading textAlign="center" mb={4}>
          Pressed Key: {pressedKey}
        </Heading>
        <Box display="flex" justifyContent="center">
          <Button
            onClick={!show ? handleStartTest : handleResetTest}
            colorScheme={isDarkMode ? "teal" : "blue"}
          >
            {!show ? "Start Test" : "Reset"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TestBox;
