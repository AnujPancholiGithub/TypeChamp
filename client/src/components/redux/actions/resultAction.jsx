import {
  CORRECT_WORDS,
  INCORRECT_WORDS,
  START_TIMER,
  STOP_TIMER,
} from "./resultTypes";

export const startTime = (toggle, timer) => {
  return {
    type: toggle ? START_TIMER : STOP_TIMER,
    time: timer,
  };
};

export const correctWords = (wordCount) => {
  return {
    type: CORRECT_WORDS,
    correctWordsCount: wordCount,
  };
};

export const inCorrectWords = (wordCount) => {
  return {
    type: INCORRECT_WORDS,
    inCorrectWordsCount: wordCount,
  };
};
