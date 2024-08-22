import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Flor",
  address: "7943 NW 111 Ct",
};

const userSlice2 = createSlice({
  name: "user2",
  initialState,
  reducers: {
    upDateUser2: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { upDateUser2 } = userSlice2.actions;
export default userSlice2.reducer;
