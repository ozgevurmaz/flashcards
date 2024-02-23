import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards :{}
  },
  reducers: {
    addNewCard: (state, action) => {
      const { cardId, front, back } = action.payload;
      state.cards[cardId]={
        cardId:cardId,
        front:front,
        back:back
      }
    },
  },
});

export const cardsReducer = cardsSlice.reducer;

export const { addNewCard } = cardsSlice.actions;

export const selectCards = state => state.cards.cards;
