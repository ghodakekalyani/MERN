import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AucthContextProvider from "./store/auth";
import { Provider } from "react-redux";
import { store } from "./shared/store";
import "./index.less";

const container = document.getElementById("app-root")!;
const root = createRoot(container);

// const stote = createStore();

root.render(
  //   <AucthContextProvider>
  // <Provider store={store}>
  <App />
  // </Provider>
  //   </AucthContextProvider>
);
