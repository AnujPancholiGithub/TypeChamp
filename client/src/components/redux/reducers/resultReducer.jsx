import {
  CORRECT_WORDS,
  INCORRECT_WORDS,
  SET_FINAL_RESULT,
  SET_TEST_DEADLINE,
  START_TIMER,
  STOP_TIMER,
} from "../actions/resultTypes";

const initialState = {
  time: 0,
  correctWordsCount: 0,
  inCorrectWordsCount: 0,
  finalResult: {},
  deadline: 60000,
};

export const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return { ...state, time: action.time };
    case STOP_TIMER:
      return {
        ...state,
        time: action.time,
      };
    case CORRECT_WORDS:
      return {
        ...state,
        correctWordsCount: action.correctWordsCount,
      };
    case INCORRECT_WORDS:
      return {
        ...state,
        inCorrectWordsCount: action.inCorrectWordsCount,
      };

    case SET_FINAL_RESULT:
      return {
        state,
        finalResult: action.result,
      };

    case SET_TEST_DEADLINE:
      return {
        ...state,
        deadline: action.deadline,
      };

    default:
      return state;
  }
};
