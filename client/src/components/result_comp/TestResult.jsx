import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const TestResult = () => {
  return (
    <Box
      // bg="#8C52FF"
      display={"flex"}
      justifyContent={"center"}
    >
      <Box boxShadow={"dark-lg"}>
        <Image
          position={"relative"}
          width={"38rem"}
          src="https://imgpile.com/images/9f8HEF.jpg"
        />
        <Box
          as={"b"}
          color="#ffb917"
          fontSize={"3xl"}
          position={"absolute"}
          bottom={"30px"}
          left={"470px"}
        >
          20%
        </Box>
        <Box position={"absolute"} bottom={"65px"} right={"395px"}>
          <Text color="#1B7B79" fontSize={"2xl"} as={"b"}>
            40 WPM
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default TestResult;
