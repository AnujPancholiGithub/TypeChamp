import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startTime } from "../redux/actions/resultAction";

export const TestTimer = () => {
  const [timer, setTimer] = useState(0);
  const { time, deadline } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    var intervalID;
    if (intervalID == undefined) {
      intervalID = setInterval(() => {
        setTimer((t) => t + 1);
      }, 1000);
    }
    setTimeout(() => {
      clearInterval(intervalID);
    }, deadline);
    return () => {
      clearInterval(intervalID);
      dispatch(startTime(false, 0));
    };
  }, []);

  useEffect(() => {
    dispatch(startTime(true, timer));
    return () => {};
  }, [timer]);

  return <Text as="b">{time}</Text>;
};

export const SpeedMeter = ({ wordCounter }) => {
  const time = useSelector((store) => store.time);
  const [currentSpeed, setCurrentSpeed] = useState(0);

  useEffect(() => {
    if (time > 0 && wordCounter > 0) {
      const avgTimePerWord = time / wordCounter;
      const speedWPM = 60 / avgTimePerWord;
      setCurrentSpeed(Math.trunc(speedWPM));
    }
  }, [wordCounter]);

  useEffect(() => {
    return () => {
      // Clean-up code
    };
  }, []);

  return <Text as="b">{currentSpeed} WPM</Text>;
};

export const AccuracyMeter = ({}) => {
  const [accuracy, setAccuracy] = useState(0);

  const { correctWordsCount, inCorrectWordsCount } = useSelector(
    (store) => store
  );
  console.log(
    "correctWordsCount",
    "inCorrectWordsCount",
    correctWordsCount,
    inCorrectWordsCount
  );
  useEffect(() => {
    console.log(correctWordsCount, inCorrectWordsCount);
    if (correctWordsCount > 0 && inCorrectWordsCount > 0) {
      let currAccuracy = 100 - (100 / correctWordsCount) * inCorrectWordsCount;
      setAccuracy((prevAcc) => currAccuracy);
      console.log("cureent accu: ", currAccuracy);
    }
    return () => {};
  }, [inCorrectWordsCount, correctWordsCount]);

  return <Text as="b">{" " + accuracy.toFixed(2)}%</Text>;
};
