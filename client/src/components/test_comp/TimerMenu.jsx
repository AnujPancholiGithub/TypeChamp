import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setTestDeadline } from "../redux/actions/resultAction";
import { useState } from "react";

const TimeSelectorMenu = ({ isTestStart }) => {
  const timeOptions = ["5 min", "3 min", "2 min", "1 min"];
  const [isDeadLine, setIsDeadLine] = useState(false);
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const handleTimeSelection = (timeIndex) => {
    //setting up deadline for test
    const miliseconds = [300000, 180000, 120000, 60000];
    setIsDeadLine(timeOptions[timeIndex]);
    dispatch(setTestDeadline(miliseconds[timeIndex]));
  };

  return (
    <Box
      flex={1}
      bg={colorMode === "light" ? "white" : "gray.800"}
      shadow={colorMode === "light" ? "lg" : "dark-lg"}
      borderRadius="md"
      p={2}
      m={4}
      width="100%"
    >
      <Menu>
        <MenuButton
          as={Box}
          p={2}
          color={colorMode === "light" ? "gray.800" : "white"}
          fontWeight="medium"
        >
          {isDeadLine ? isDeadLine : "Select Time"}
        </MenuButton>
        <MenuList>
          {timeOptions.map((time, index) => (
            <MenuItem
              isDisabled={isTestStart}
              key={index}
              onClick={() => handleTimeSelection(index)}
            >
              {time}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default TimeSelectorMenu;
