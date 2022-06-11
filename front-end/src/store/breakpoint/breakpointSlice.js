import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: false,
};

const mobiledisplaySlice = createSlice({
  name: "mobiledisplay",
  initialState: initialState,
  reducers: {
    switchMobileDisplay: (state, action) => {
      // console.log(action.payload);
      if (action.payload < 738) {
        state.isMobile = true;
        return; // console.log(state.isMobile);
      }
      state.isMobile = false;
    },
  },
});

export const { switchMobileDisplay } = mobiledisplaySlice.actions;

export default mobiledisplaySlice.reducer;
