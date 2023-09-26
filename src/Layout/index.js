import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = ({ component }) => {
  return (
    <div>
      <Header />

      {component}
      <Footer />
    </div>
  );
};

export default Layout;
