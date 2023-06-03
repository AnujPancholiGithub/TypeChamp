import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const TestResult = () => {
  const { finalResult } = useSelector((store) => store);

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
          color="#1C3C50"
          top={"22%"}
          left={"26%"}
          fontSize={"3vw"}
        >
          {finalResult.speed} WPM
        </Box>
        <Box
          as="div"
          position={"absolute"}
          color="#1C3C50"
          bottom={"20%"}
          left={"36%"}
          fontSize={"3vw"}
        >
          {finalResult.accuracy}
        </Box>
      </Box>
    </Box>
  );
};

export default TestResult;
