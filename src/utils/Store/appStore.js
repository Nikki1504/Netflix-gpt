import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import moviesReducer from "./Slice/moviesSlice";
import tvReducer from "./Slice/tvSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tv: tvReducer,
  },
});

export default appStore;
