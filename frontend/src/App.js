import React from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Switch, Route, Link } from "react-router-dom";

import Blogs from "./components/Blogs";
import Login from "./components/Login";
import Work from "./components/Work";
import Services from "./components/Services";

function App() {
  return (
    <div className="container">
      <h1>This is homepage</h1>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Banner />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
