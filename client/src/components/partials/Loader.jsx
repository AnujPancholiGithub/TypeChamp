import React from "react";
import { useColorMode, Box, Text } from "@chakra-ui/react";
import "./../uityles.css";
const Loader = () => {
  const { colorMode } = useColorMode();
  const loaderColor = colorMode === "dark" ? "yellow" : "blue";

  return (
    <Box
      display="flex"
      flexDir={"column"}
      gap={"5%"}
      justifyContent="center"
      alignItems="center"
      height="80vh"
      backgroundColor={colorMode === "dark" ? "black" : "white"}
    >
      <div
        style={{
          width: "50px",
          height: "25px",
          backgroundColor: loaderColor,
          borderRadius: "50%",
          animation: "rotate 1s linear infinite", // Animation CSS
        }}
      ></div>
      <span style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
        Patience is the key as the magic unfolds...
      </span>
    </Box>
  );
};

export default Loader;
