import { configureStore } from "@reduxjs/toolkit";
import catSlice from "./Slices/CatSlice";
import userSlice from "./Slices/UserSlice";
import dogSlice from "./Slices/DogSlice";
import userSlice2 from "./Slices/UserSlice2";

const store = configureStore({
  reducer: {
    cats: catSlice,
    user: userSlice,
    dogs: dogSlice,
    user2: userSlice2,
  },
});

export default store;
