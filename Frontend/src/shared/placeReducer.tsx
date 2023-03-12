import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  location: string;
}

const initialState: UserState = {
  name: "",
  location: "",
};

export const placeSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    fetchPlace: (state) => {
      state.name = "Austin";
      state.location = "Texas";
    },
  },
});

export const { fetchPlace } = placeSlice.actions;

export default placeSlice.reducer;
