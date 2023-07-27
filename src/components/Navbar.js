import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar({ setIsLoggedIn }) {
  const history = useHistory();

  // Handle  logout
  function handleLogout() {
    setIsLoggedIn(false);
    history.push("/login");
  }

  return (
    <div>
      <NavLink exact to="/" style={linkStyles} activeStyle={{ background: "darkblue" }}>
        Home
      </NavLink>
      <NavLink exact to="/about" style={linkStyles} activeStyle={{ background: "darkblue" }}>
        About
      </NavLink>
      <NavLink exact to="/login" style={linkStyles} activeStyle={{ background: "darkblue" }}>
        Login
      </NavLink>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;
