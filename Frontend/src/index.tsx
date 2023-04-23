import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AucthContextProvider from "./store/auth";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.less";
import "bootstrap/dist/css/bootstrap.css";
const container = document.getElementById("app-root")!;
const root = createRoot(container);

// const stote = createStore();

root.render(
  //   <AucthContextProvider>
  <Provider store={store}>
    <App />
  </Provider>
  //   </AucthContextProvider>
);
