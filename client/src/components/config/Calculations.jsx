import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFinalResult, startTime } from "../redux/actions/resultAction";
import { useNavigate } from "react-router-dom";
export const TestTimer = () => {
  const [timer, setTimer] = useState(0);
  const { time, deadline } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    var intervalID;
    var timeOutID;
    if (intervalID == undefined) {
      intervalID = setInterval(() => {
        setTimer((t) => t + 1);
      }, 1000);
    }
    timeOutID = setTimeout(() => {
      clearInterval(intervalID);
      dispatch(startTime(false, 0));
      navigateTo("/result");
    }, deadline);
    return () => {
      clearTimeout(timeOutID);
      clearInterval(intervalID);
      dispatch(startTime(false, 0));
    };
  }, []);

  useEffect(() => {
    dispatch(startTime(true, timer));
    return () => {};
  }, [timer]);

  return <Text as="b">{deadline / 1000 - time}</Text>;
};

export const SpeedMeter = ({ wordCounter }) => {
  const time = useSelector((store) => store.time);
  const [currentSpeed, setCurrentSpeed] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (time > 0 && wordCounter > 0) {
      const avgTimePerWord = time / wordCounter;
      const speedWPM = 60 / avgTimePerWord;
      setCurrentSpeed(Math.trunc(speedWPM));
    }
  }, [wordCounter]);

  useEffect(() => {
    dispatch(
      setFinalResult({
        speed: currentSpeed,
      })
    );
  }, [currentSpeed]);

  return <Text as="b">{currentSpeed} WPM</Text>;
};

export const AccuracyMeter = ({}) => {
  const [accuracy, setAccuracy] = useState(0);
  const dispatch = useDispatch();
  const { correctWordsCount, inCorrectWordsCount } = useSelector(
    (store) => store
  );

  useEffect(() => {
    console.log(correctWordsCount, inCorrectWordsCount);
    if (correctWordsCount > 0) {
      let currAccuracy = 100 - (100 / correctWordsCount) * inCorrectWordsCount;
      setAccuracy((prevAcc) => currAccuracy);
      console.log("cureent accu: ", currAccuracy);
    }
    return () => {};
  }, [inCorrectWordsCount, correctWordsCount]);

  useEffect(() => {
    dispatch(
      setFinalResult({
        accuracy: accuracy,
      })
    );

    return () => {
      dispatch(
        setFinalResult({
          accuracy: `${accuracy.toFixed(2)} %`,
        })
      );
    };
  }, [accuracy]);

  return <Text as="b">{" " + accuracy.toFixed(2)}%</Text>;
};
