import React from "react";
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import Home from "./homePage";
import AboutMe from './components/aboutMe';

function App() { return(
  <Router>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutMe/>}/>
    </Routes>
  </Router>
  )}

export default App;