import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Ramiro",
  address: "7943 NW 111th Ct",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      // Merges the existing state with the new data from action.payload
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
