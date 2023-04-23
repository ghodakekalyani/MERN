import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import placeReducer from "./reducers/placeReducer";
import thunkMiddleware from "redux-thunk";

export const store: any = configureStore({
  reducer: {
    userReducer,
    placeReducer,
  },
  middleware: [thunkMiddleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
