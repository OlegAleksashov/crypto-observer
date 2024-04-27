import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
import store from "../src/store/index";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Signin from "./components/Authorization/SIgnin";
import Signup from "./components/Authorization/Signup";

function App() {
  // const isAuth = useSelector((state) => state.user.isAuth);
  // const dispatch = useDispatch();

  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Layout />
              </>
            }
          ></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
/*{!isAuth ?
}*/