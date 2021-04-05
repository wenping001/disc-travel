import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Indigent from "../Indigent/Indigent";
import AboutUs from "../AboutUs/AboutUs";
import "./Content.css";

const Content = () => {
  return (
    <HashRouter>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/indigent" component={Indigent} />
        <Route path="/about-us" component={AboutUs} />
      </div>
    </HashRouter>
  );
};

export default Content;
