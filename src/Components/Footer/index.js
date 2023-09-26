import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <>
      <div className="lg:flex lg:flex-row flex-col gap-96 lg:p-20 md:p-20 p-5 text-lg">
        <div className="flex flex-col gap-2">
          <span>Footer Menu</span>
          <span>Shipping Policy</span>
          <span>Refund Policy</span>
          <span>Privacy Policy</span>
          <span>Terms of Services</span>
          <span>About us</span>
          <span>Contact us</span>
        </div>
        <div className="flex flex-col gap-5">
          <span>NEED HELP?</span>
          <span>Phone : +91 9737736698</span>
          <span>Email : support@auromin.in</span>
          <span>Operating Hours : 10:00 AM to 6:00 PM</span>
          <span>Closed on Sunday</span>
          <div className="flex items-center gap-7">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <img
              src="https://www.freeiconspng.com/thumbs/pinterest-logo-icon/white-pinterest-logo-on-black-16.png"
              alt=""
              className="h-5 w-5"
            />
            <SmartDisplayIcon />
          </div>
        </div>
      </div>
      <p className="lg:px-20 lg:pt-[50px] lg:pb-10 md:pb-10 p-5 pt-2">
        <CopyrightIcon sx={{ fontSize: 13 }} />
        auromin.in
      </p>
    </>
  );
};

export default Footer;
