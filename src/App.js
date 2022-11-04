import React from "react";
import "../src/Styles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login"

// PAGES
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Saved from "./pages/Saved/Saved";
import Settings from "./pages/Settings/Settings";

export default function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Router>
        <Switch>   
          <Route path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/saved" component={Saved} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    </div>
  );
}
