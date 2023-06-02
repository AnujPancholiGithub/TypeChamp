import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Heading, Text, useColorMode } from "@chakra-ui/react";
import testData from "../data/string.json";
import "../uityles.css";
import LiveResult from "../result_comp/LiveResult";
import { useDispatch, useSelector } from "react-redux";
import { correctWords, inCorrectWords } from "../redux/actions/resultAction";

const TestBox = () => {
  const [pressedKey, setPressedKey] = useState("");
  const [currentKey, setCurrentKey] = useState(0);
  const [typoError, setTypoError] = useState(false);
  const [show, setShow] = useState(false);
  const [wordCounter, setWordCounter] = useState(0);
  const inputRef = useRef(null);
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const dispatch = useDispatch();
  const reduxStore = useSelector((store) => store);

  const testText = testData.text;
  const wordsArray = Array.from(testText);
  const correctWordsCount = 0;
  const inCorrectWordsCount = 0;

  const handleKeyPress = (e) => {
    setPressedKey(e.key);

    if (e.code === "Space" && !typoError && wordsArray[currentKey] === " ") {
      setWordCounter((prevWordCounter) => prevWordCounter + 1);
    }

    if (e.key === wordsArray[currentKey]) {
      setCurrentKey((prevKeyIndex) => prevKeyIndex + 1);
      dispatch(correctWords(correctWordsCount + 1));
      if (typoError) {
        setTypoError(false);
      }
    } else {
      if (!typoError) {
        dispatch(inCorrectWords(inCorrectWordsCount + 1));
        setTypoError(true);
      }
    }
  };

  useEffect(() => {
    console.log("render");
  }, []);

  const handleStartTest = () => {
    setShow(!show);
    inputRef.current.focus();
  };

  const handleResetTest = () => {
    setShow(!show);
  };

  return (
    <Box maxWidth="600px" margin="0 auto">
      <Box>
        <LiveResult isTestStart={show} wordCounter={wordCounter} />
      </Box>
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
