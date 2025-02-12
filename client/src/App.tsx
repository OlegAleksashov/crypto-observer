import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store/index";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Signin from "./components/Authorization/Signin";
import Signup from "./components/Authorization/Signup";
import { verifyCredential } from "./store/action";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {Navigate} from "react-router";

const MainLayout = () => {
  return (
      <>
        <Header />
        <Layout />
      </>
  );
};

const AuthenticationWrapper = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(verifyCredential(token));
    }
  }, [dispatch, token]);

  return (
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
};

function App() {
  return (
      <Provider store={store}>
        <Router>
          <AuthenticationWrapper />
        </Router>
      </Provider>
  );
}

export default App;

