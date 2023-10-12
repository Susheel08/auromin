import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="lg:flex lg:flex-row flex-col gap-96 lg:p-20 md:p-20 p-5 text-lg">
        <div className="flex flex-col gap-2">
          <span>Footer Menu</span>
          <Link to="/shipping-policy">Shipping Policy</Link>
          <Link to="/refund-policy">Refund Policy</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-services">Terms of Services</Link>
          <a href="/home">About us</a>
          <Link to="/contact">Contact us</Link>
        </div>
        <div className="flex flex-col gap-5">
          <span>NEED HELP?</span>
          <span>Phone : +91 9737736698</span>
          <span>Email : support@auromin.in</span>
          <span>Operating Hours : 10:00 AM to 6:00 PM</span>
          <span>Closed on Sunday</span>
          <div className="flex items-center gap-7">
            <a href="https://facebook.com/">
              <FacebookOutlinedIcon />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
            <a href="https://in.pinterest.com/">
              {" "}
              <img
                src="https://www.freeiconspng.com/thumbs/pinterest-logo-icon/white-pinterest-logo-on-black-16.png"
                alt=""
                className="h-5 w-5"
              />
            </a>
            <a href="https://www.youtube.com/@Auromin/featured">
              {" "}
              <SmartDisplayIcon />
            </a>
          </div>
        </div>
      </div>
      <p className="lg:px-20 md:px-20 lg:pt-[50px] lg:pb-10 md:pb-10 p-5 pt-2">
        <CopyrightIcon sx={{ fontSize: 13 }} />
        auromin.in
      </p>
    </>
  );
};

export default Footer;
