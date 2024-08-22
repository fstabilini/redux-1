import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "Buddy", age: 3, breed: "Labrador Retriever" },
  { name: "Max", age: 5, breed: "German Shepherd" },
  { name: "Bella", age: 2, breed: "Golden Retriever" },
  { name: "Lucy", age: 4, breed: "Bulldog" },
  { name: "Daisy", age: 1, breed: "Beagle" },
];

const dogSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {
    addDog: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addDog } = dogSlice.actions;
export default dogSlice.reducer;
