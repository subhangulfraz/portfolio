import React from "react";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { Routes } from "react-router-dom";
import Experience from './components/Experience'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
     <Skills/>
    < Experience/>
     <Contact/>
      </div>
     
  );
}