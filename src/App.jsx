import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Work from "./Components/Pages/Work/Work";
import Skills from "./Components/Pages/Skills/Skills";
import Contact from "./Components/Pages/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
