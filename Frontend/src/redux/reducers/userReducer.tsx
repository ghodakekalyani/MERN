import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../methods/user";

export interface IUserState {
  id: string;
  name: string;
  email: string;
  places: string[];
}

export interface IUserList {
  data: [] | IUserState[];
  isLoading: boolean;
  error: undefined | string;
}

export const initialState: IUserList = {
  data: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log("action.error.message;", action.error as string);
        state.isLoading = false;
        state.error = action.error as string;
      });
  },
});

export default userSlice.reducer;
