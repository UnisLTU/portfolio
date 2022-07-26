import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";
import "./style.css";
import About from "./components/About/About";
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
