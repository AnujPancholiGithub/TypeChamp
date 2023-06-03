import React from "react";
import { Box, HStack, Progress, useColorModeValue } from "@chakra-ui/react";
import { AccuracyMeter, SpeedMeter, TestTimer } from "../config/Calculations";

const LiveResult = ({ isTestStart, wordCounter }) => {
  // console.log("isTestStart: ", isTestStart);
  const cardBgColor = useColorModeValue("white", "gray.800");
  const cardShadow = useColorModeValue("lg", "dark-lg");
  return (
    <>
      <HStack
        bg={cardBgColor}
        shadow={cardShadow}
        flex={4}
        boxShadow={"base"}
        p={4}
        justifyContent="space-between"
      >
        <Box>
          Timer: {isTestStart ? <TestTimer /> : 0}
          {/* Render the TestTimer component only if the test is started */}
          {/* Show 0 if the test is not started */}
        </Box>
        <Box>
          Speed: {isTestStart ? <SpeedMeter wordCounter={wordCounter} /> : 0}{" "}
        </Box>
        <Box>
          Accuracy:
          {isTestStart ? <AccuracyMeter /> : 0}
        </Box>
      </HStack>
    </>
  );
};

export default LiveResult;
