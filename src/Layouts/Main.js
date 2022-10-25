import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Parts/Header/Header";
import Footer from "./../Parts/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
