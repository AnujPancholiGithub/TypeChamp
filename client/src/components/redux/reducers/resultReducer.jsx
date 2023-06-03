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
  finalResult: {
    speed: 0,
    accuracy: "0 %",
  },
  deadline: 1000,
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
      const { speed, accuracy } = action.result;
      const updatedFinalResult = {
        ...state.finalResult,
        speed: speed !== undefined ? speed : state.finalResult.speed,
        accuracy:
          accuracy !== undefined ? accuracy : state.finalResult.accuracy,
      };
      return {
        ...state,
        finalResult: updatedFinalResult,
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
