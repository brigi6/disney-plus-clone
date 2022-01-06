import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Detail from "./components/Detail";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import HeaderLogin from "./components/HeaderLogin";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={
              <>
                <HeaderLogin />
                <Login />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="detail"
            element={
              <>
                <Header />
                <Detail />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
