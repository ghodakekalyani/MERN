import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserState } from "../reducers/userReducer";
import { IAxiosConfig, callApi } from "../api";
import { apiRoutes } from "../apiRoutes";

export type FetchUserDataArgs = { url: string; method: string; params: any };

const apiConfig: IAxiosConfig = {
  url: apiRoutes.FETCH_USERS_LIST,
  method: "get",
  data: {},
};

export const fetchUsers = createAsyncThunk<IUserState[]>(
  "users/fetch",
  async (_, thunkAPI) => {
    try {
      const data: IUserState[] = await callApi(apiConfig);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: "Failed to fetch users.",
      });
    }
  }
);
