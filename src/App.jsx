import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css"
import authService from "./appWrite/auth.js";
import { logIn, logOut } from "./store/authSlice.js";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Outlet, unstable_usePrompt } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          // console.log(userData);
          
          dispatch(logIn(userData));
        } else {
          dispatch(logOut());
        }
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
        dispatch(logOut());
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main>
          TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="loading">Loading...</div>
  );
}

export default App
