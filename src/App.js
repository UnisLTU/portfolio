import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";
import "./style.css";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/Contact";


const App = () => {
  return (
    <div>
   <NavBar/>
   <Home/>
   <About/>
   <Projects/>
   <Contact/>
  <Footer/>
   </div>
  );
}

export default App;
