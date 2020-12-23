import React from "react";
import Navbar from "../NavBar/Navbar";
function MainLayout(props) {
  const { children } = props;
  return (
    <div className="MainLayout">
      <Navbar />
      <div className="MainContent">{children}</div>
    </div>
  );
}

export default MainLayout;
