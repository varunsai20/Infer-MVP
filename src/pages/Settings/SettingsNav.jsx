import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Settings-Nav.css";
function SettingsNav() {
  return (
    <Navbar className="navbar-settings" bg="light" expand="lg">
      <p id="Settings">Settings</p>
    </Navbar>
  );
}

export default SettingsNav;