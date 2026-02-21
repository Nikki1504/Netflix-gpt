import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import moviesReducer from "./Slice/moviesSlice";
import tvReducer from "./Slice/tvSlice";
import gptReducer from "./Slice/gptSlice";
import configReducer from "./Slice/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tv: tvReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
