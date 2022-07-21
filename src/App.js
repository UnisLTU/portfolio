import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./style.css";
import About from "./components/About";
import Projects from "./components/Projects/Projects";


const App = () => {
  return (
    <div>
   <NavBar/>
   <Home/>
   <About/>
   <Projects/>
   </div>
  );
}

export default App;
