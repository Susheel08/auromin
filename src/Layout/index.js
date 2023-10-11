import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Whatsapp from "../Pages/Whatsapp";
import ShareIcons from "../Pages/ShareIcons";
import ShareButton from "../Pages/ShareButton";

const Layout = ({ component }) => {
  return (
    <div>
      <Header />

      {component}
      <div className="fixed top-[88%] left-5 w-screen">
        <Whatsapp />
      </div>
      <div className="fixed top-[60%] flex justify-end w-screen">
        <ShareButton />
      </div>
      <div className="fixed top-[40%] right-2 w-screen">
        <ShareIcons />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
