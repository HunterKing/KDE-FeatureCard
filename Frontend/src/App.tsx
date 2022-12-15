import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import { Home } from "./pages/Home/Home"; 
import { Test, PostGet } from "./pages";
import { NavigationBar } from "./components/NavigationBar";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Pages = () => {
  return(
    <Routes>
      <Route index path="/" element={<Home />}></Route>
      <Route index path="/home" element={<Home />}></Route>
      <Route element={<Test/>} path="/test"></Route>
      <Route element={<PostGet/>} path="/postget"></Route>
    </Routes>
  );
}

const App = () => {
  return(
    <Router>
      <NavigationBar />
      <Pages />
    </Router>
  );
};

export default App;
