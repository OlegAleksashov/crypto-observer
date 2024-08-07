import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store/index";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Signin from "./components/Authorization/SIgnin";
import Signup from "./components/Authorization/Signup";
import { verifyCredential } from "./store/action";
import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token) as string;

  useEffect(() => {
    if (token) {
      dispatch(verifyCredential(token));
    }
  }, [dispatch, token]);

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

/*import axios from 'axios';
import { setUser } from './authSlice';

// Action to verify token and fetch user details
export const verifyUser = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/verify',
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(setUser(response.data)); // Update Redux store with user data
    } catch (error) {
      console.error('Error verifying user:', error);
      localStorage.removeItem('token'); // Remove invalid token
    }
  };
};*/
