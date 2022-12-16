import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import { Home } from "./pages/Home/Home"; 
import React from 'react';

//Styling.
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const Pages = () => {
  return(
    <Routes>
      <Route index path="/" element={<Home />}></Route>
    </Routes>
  );
}

const App = () => {
  return(
      <Router>
        {/* <NavigationBar /> */}
        <Pages />
      </Router>
  );
};

export default App;
