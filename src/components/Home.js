import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn }) {
  // Redirects to login page if user is not logged 
  if (!isLoggedIn) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

export default Home;
