import { configureStore } from "@reduxjs/toolkit";
import mobiledisplayReducer from "./breakpoint/breakpointSlice";

export const store = configureStore({
  reducer: {
    mobiledisplay: mobiledisplayReducer,
  },
});
