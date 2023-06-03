import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Progress,
  Stack,
  Switch,
  Text,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import testData from "../data/string.json";
import "../uityles.css";
import LiveResult from "../result_comp/LiveResult";
import { useDispatch, useSelector } from "react-redux";
import { correctWords, inCorrectWords } from "../redux/actions/resultAction";
import TimeSelectorMenu from "./TimerMenu";
import keyValidation from "../config/KeyValidation";
import randomizeArray from "../config/randomTextGenrater";
import Loader from "../partials/Loader";
let correctWordsCount = 0;
let inCorrectWordsCount = 0;
const testText = testData.text;
const firstWordsArray = Array.from(testText).slice(0, 235);
const TestBox = () => {
  const [compLoading, setCompLoading] = useState(true);
  const [pressedKey, setPressedKey] = useState("");
  const [showPressedKeys, setShowPressedKeys] = useState(false);
  const [currentKey, setCurrentKey] = useState(0);
  const [typoError, setTypoError] = useState(false);
  const [show, setShow] = useState(false);
  const [wordCounter, setWordCounter] = useState(0);
  const inputRef = useRef(null);
  const { colorMode } = useColorMode();
  const toast = useToast();
  const isDarkMode = colorMode === "dark";
  const dispatch = useDispatch();
  const [newContent, setNewContent] = useState(false);
  const reduxStore = useSelector((store) => store);
  const [wordsArray, setWordsArray] = useState(() => firstWordsArray);

  useEffect(() => {
    setTimeout(() => {
      setCompLoading(false);
    }, 1000);
  }, []);

  const handleKeyPress = (e) => {
    e.preventDefault();
    if (!keyValidation(e.key)) {
      return;
    }
    if (currentKey == wordsArray.length - 1) {
      setWordsArray((oldArray) => [
        ...oldArray,
        " ",
        ...randomizeArray(wordsArray),
      ]);
      setCurrentKey((oldKey) => oldKey + 1);
      return;
    }
    setPressedKey(e.key);

    if (e.code === "Space" && !typoError && wordsArray[currentKey] === " ") {
      setWordCounter((prevWordCounter) => prevWordCounter + 1);
    }

    if (e.key === wordsArray[currentKey]) {
      setCurrentKey((prevKeyIndex) => prevKeyIndex + 1);
      dispatch(correctWords(++correctWordsCount));
      if (typoError) {
        setTypoError(false);
      }
    } else if (!typoError) {
      dispatch(inCorrectWords(++inCorrectWordsCount));
      setTypoError(true);
    } else {
      dispatch(inCorrectWords(++inCorrectWordsCount));
    }
  };

  useEffect(() => {
    console.log("render");
  }, []);

  const handleStartTest = () => {
    if (reduxStore.deadline > 1000) {
      setShow(!show);
      inputRef.current.focus();
    } else {
      toast({
        title: "Time is ticking! Select a Test Duration to meet your deadline!",
        description: "Best of Luck :)",
        status: "info",
        duration: 7000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    setWordCounter((oWC) => false);
    setPressedKey((oPk) => " ");
    setCurrentKey((oCk) => 0);
    setTypoError((oTe) => false);
  }, [show]);

  // useEffect(() => {
  //   setPressedKey((oPk) => " ");
  //   setCurrentKey((oCk) => 0);
  //   setTypoError((oTe) => false);
  //   setNewContent((old) => false);
  // }, [newContent]);

  const handleResetTest = () => {
    setShow(!show);
  };

  return (
    <>
      {!compLoading ? (
        <>
          {" "}
          {firstWordsArray.length > 0 ? (
            <Box maxWidth="600px" margin="0 auto">
              <Box display={"flex"}>
                <LiveResult isTestStart={show} wordCounter={wordCounter} />
                <TimeSelectorMenu isTestStart={show} />
              </Box>
              <Stack>
                <Progress
                  value={
                    show ? 100 / (wordsArray.length / correctWordsCount) : 100
                  }
                  size={show ? "sm" : "xs"}
                  colorScheme="pink"
                />
              </Stack>
              <Heading
                textAlign="center"
                fontSize={"2xl"}
                color={"#1CEDC9"}
                p={4}
              >
                Typing Test
              </Heading>
              <Box
                ref={inputRef}
                onKeyDown={show ? handleKeyPress : undefined}
                boxShadow={isDarkMode ? "dark-lg" : "lg"}
                p={4}
                borderRadius="md"
                bg={isDarkMode ? "gray.800" : "white"}
                role="textbox"
                aria-label="text-box"
                tabIndex={show ? 1000 : -1}
              >
                <Text fontSize="xl" textAlign="center" mb={4}>
                  {wordsArray.map((word, index) => (
                    <Text
                      key={index}
                      as="span"
                      fontSize={
                        currentKey === index
                          ? typoError
                            ? "4xl"
                            : "2xl"
                          : "xl"
                      }
                      color={
                        currentKey === index
                          ? typoError
                            ? "red"
                            : isDarkMode
                            ? "#F5B930"
                            : "blue"
                          : isDarkMode
                          ? currentKey > index
                            ? "pink"
                            : "white"
                          : currentKey > index
                          ? "gray.300"
                          : "black"
                      }
                      fontWeight="bold"
                    >
                      {word}
                      {currentKey === index && !typoError && (
                        <span className="cursor" />
                      )}
                    </Text>
                  ))}
                </Text>
                {showPressedKeys && (
                  <Heading
                    display={"flex"}
                    justifyContent={"center"}
                    textAlign="center"
                    fontSize={"lg"}
                    mb={4}
                  >
                    Keystroke :{" "}
                    <Text marginLeft={2} color={"#1CEDC9"}>
                      {" " + pressedKey}
                    </Text>
                  </Heading>
                )}
                <Box display="flex" justifyContent="center">
                  <FormControl display="flex" alignItems="center">
                    <FormLabel
                      fontSize={12}
                      htmlFor="pressedKeys-alerts"
                      mb="0"
                    >
                      Observe the keys!
                    </FormLabel>
                    <Switch
                      onChange={(e) => {
                        setShowPressedKeys(!showPressedKeys);
                      }}
                      id="pressedKeys-alerts"
                    />
                  </FormControl>
                  <Button
                    onClick={!show ? handleStartTest : handleResetTest}
                    tabIndex={show ? -1 : 1}
                    colorScheme={isDarkMode ? "yellow" : "blue"}
                  >
                    {!show ? "Start Test" : "Reset"}
                  </Button>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box>
              <Text>Some Problems With Data Base</Text>
            </Box>
          )}
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
};

export default TestBox;
