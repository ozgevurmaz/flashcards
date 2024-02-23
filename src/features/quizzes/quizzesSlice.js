import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
  name: "quizes",
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = {
        id: id,
        name: name,
        topicId: topicId,
        cardIds: cardIds,
      };
    },
  },
});

export const addQuizAddQuizId = (quiz) => {
  const { quizId, topicId } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizId({quizId:quizId,topicId:topicId}))
  };
};

export const quizzesReducer = quizzesSlice.reducer;

export const { addQuiz } = quizzesSlice.actions;

export const selectQuizzes = (state) => state.quizzes.quizzes;
