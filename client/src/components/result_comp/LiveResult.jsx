import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { AccuracyMeter, SpeedMeter, TestTimer } from "../config/Calculations";

const LiveResult = ({ isTestStart, wordCounter }) => {
  console.log("isTestStart: ", isTestStart);

  return (
    <>
      <HStack justifyContent="space-between">
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
