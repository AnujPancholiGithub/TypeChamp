import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const TestResult = () => {
  return (
    <Box bg="#d3c7ed" display={"flex"} justifyContent={"center"}>
      <Box boxShadow={"dark-lg"} position={"relative"}>
        <Image
          display={"flex"}
          justifyContent={"center"}
          width={"50%"}
          src="https://imgpile.com/images/9fgS8u.gif"
        />
        <Box
          as="div"
          position={"absolute"}
          color="#1B7B79"
          top={"22%"}
          left={"25%"}
          fontSize={"3vw"}
        >
          40 WPM
        </Box>
        <Box
          as="div"
          position={"absolute"}
          color="#1B7B79"
          bottom={"20%"}
          left={"36%"}
          fontSize={"3vw"}
        >
          20 %
        </Box>
      </Box>
    </Box>
  );
};

export default TestResult;
