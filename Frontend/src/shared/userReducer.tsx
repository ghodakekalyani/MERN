import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
}

const initialState: UserState = {
  name: "",
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    fetchUserName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { fetchUserName } = userSlice.actions;

export default userSlice.reducer;
