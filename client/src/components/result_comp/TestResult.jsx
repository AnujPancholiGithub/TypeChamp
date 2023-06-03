import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../partials/Loader";

const TestResult = () => {
  const { finalResult, inCorrectWordsCount } = useSelector((store) => store);
  const [compLoading, setCompLoading] = useState(true);
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const navigateTo = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setCompLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {!compLoading ? (
        <Box display={"flex"} justifyContent={"center"}>
          <Box position={"relative"}>
            <Image
              fallbackSrc="./src/components/data/fallbacks/testcomplete.gif"
              display={"flex"}
              justifyContent={"center"}
              width={"60%"}
              src={
                isDarkMode
                  ? "https://imgpile.com/images/9l4C9N.gif"
                  : "https://imgpile.com/images/9fgS8u.gif"
              }
            />
            <Box
              as="div"
              position={"absolute"}
              color={isDarkMode ? "#17EFCA" : "#1C3C50"}
              top={"23%"}
              left={finalResult.speed === 0 ? "32%" : "31%"}
              fontSize={"3vw"}
            >
              <Text as={"b"}> {finalResult.speed} WPM</Text>
            </Box>
            <Box
              as="div"
              position={"absolute"}
              color={isDarkMode ? "#17EFCA" : "#1C3C50"}
              bottom={"20%"}
              left={finalResult.accuracy === "0 %" ? "44%" : "40%"}
              fontSize={"4vw"}
            >
              <Text as={"b"}>{finalResult.accuracy}</Text>
            </Box>
            <Box
              display={"flex"}
              top={{ base: "100%", sm: "100%", md: "5%", lg: "0%" }}
              right={{ base: "5%", sm: "20%", md: "0%", lg: "10%" }}
              marginLeft={{ base: "0", sm: "0", md: "60%", lg: "60%" }}
              fontSize={"3vw"}
              flexWrap={"wrap"}
              as="div"
              position={"absolute"}
              boxShadow={"xl"}
            >
              <Card>
                <CardHeader>
                  <Heading size="md">Your Report</Heading>
                </CardHeader>

                <CardBody>
                  <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Summary
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        {finalResult.speed > 0
                          ? `The assessment revealed a typing speed of
                    ${finalResult.speed} words per minute with
                    ${finalResult.accuracy} accuracy`
                          : "To assess and generate a comprehensive report on typing proficiency, we recommend take a typing test first"}
                        {inCorrectWordsCount > 1
                          ? `, but ${inCorrectWordsCount}
                    errors were observed.`
                          : "."}
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Analysis
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        Attention to error reduction can further improve overall
                        typing proficiency.
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Tip
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        Nothing is mastered overnight, and in order to really
                        improve your typing accuracy and speed, you need to
                        practice every day.
                      </Text>
                      <HStack justify={"center"}>
                        <Button
                          m={4}
                          p={4}
                          colorScheme={isDarkMode ? "yellow" : "blue"}
                          onClick={(e) => {
                            return navigateTo("/test");
                          }}
                        >
                          Take Test Again
                        </Button>
                      </HStack>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TestResult;
