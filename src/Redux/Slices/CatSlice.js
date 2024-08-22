import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "Whiskers", age: 2, type: "Siamese" },
  { name: "Fluffy", age: 4, type: "Persian" },
  { name: "Shadow", age: 1, type: "Maine Coon" },
];

const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    addCat: (state, action) => {
      state.push(action.payload);
    },
    removeLastCat: (state) => {
      state.pop();
    },
  },
});

export const { addCat, removeLastCat } = catSlice.actions;
export default catSlice.reducer;
