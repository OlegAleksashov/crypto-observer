import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "../src/store/index";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Signin from "./components/Authorization/SIgnin";
import Signup from "./components/Authorization/Signup";
import { fetchVerifyUser } from "./services/coinService";
import { useSelector } from "react-redux";

function App() {
  //const me = useSelector((state) => state.auth.user);

  /*useEffect(() => {
    fetchVerifyUser(me.token)
      .then((data) => {
        console.log(data);
      })
      .catch(console.log("Hello!"));
    console.log(me.token);
  }, [me]);*/

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
