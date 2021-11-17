import React from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
import { Switch, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container" id="home">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Banner />
          <About />
          {/* <Projects /> */}
          <Work />
          <Contact />
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
      <Footer />
    </div>
  );
}
export default App;
