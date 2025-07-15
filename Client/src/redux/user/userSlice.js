import { createSlice } from "@reduxjs/toolkit";

const initialeState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialeState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      (state.currentUser = action.payload),
        (state.error = null),
        (state.loading = false);
    },
    signInFailure: (state, action) => {
      (state.error = action.payload), (state.loading = false);
    },
  },
});
export const { signInStart, signInFailure, signInSuccess } = userSlice.actions;

export default userSlice.reducer;
