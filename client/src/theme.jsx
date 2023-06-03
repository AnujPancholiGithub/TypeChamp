import { extendTheme } from "@chakra-ui/react";

//custom theme
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
