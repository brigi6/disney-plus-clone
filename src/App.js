import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Detail from "./components/Detail";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={
              <>
                <Header />
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
