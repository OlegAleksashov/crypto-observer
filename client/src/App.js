import React from "react";
import { Provider } from "react-redux";
import store from "../src/store/index";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Layout />
    </Provider>
  );
}

export default App;