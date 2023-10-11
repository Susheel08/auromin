import { Close } from "@mui/icons-material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Drawer } from "@mui/material";
import Rdrawer2 from "../../Pages/Rdrawer/Rdrawer2";
import Rdrawer1 from "../../Pages/Rdrawer/Rdrawer1";
import Rdrawer3 from "../../Pages/Rdrawer/rdrawer3";
import Searchnav from "../../Pages/Searchnav";
import SearchMobile from "../../Pages/SearchMobile";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [openPhone, setOpenPhone] = useState(false);
  const handleOpen2 = () => {
    setOpenPhone(true);
  };
  const handleClose2 = () => {
    setOpenPhone(false);
  };

  return (
    <>
      {/* computer header  */}

      <div className=" flex justify-center lg:text-lg text-xs bg-[#e3753d] lg:p-3 md:p-3 px-4 font-medium text-white">
        <span>
          Get 15% OFF on purchase value above &#8377; 2999. Use Code AUROMIN15{" "}
        </span>
      </div>

      <div className=" lg:flex hidden justify-center relative p-4">
        <img
          src="	https://www.auromin.in/cdn/shop/files/qwe1_350x.png?v=1672398598"
          alt=""
          className=""
        />
        <div className="flex  gap-10 absolute right-16 top-12 font-medium">
          <Link to="/signup">Account</Link>
          <Searchnav />
          <span>
            <Rdrawer1 />
          </span>
        </div>
      </div>
      <div className="lg:flex hidden justify-center gap-10 py-5 pb-10 font-medium">
        <Link to="/home" className="hover:underline underline-offset-1">
          Home
        </Link>
        <Link to="/wooden" className="hover:underline underline-offset-1">
          Wooden Wall Clock
        </Link>
        <Link to="/metal" className="hover:underline underline-offset-1">
          Metal Wall Clock
        </Link>
        <Link to="/wooden" className="hover:underline underline-offset-1">
          Wall Art
        </Link>
        <Link to="/islamic" className="hover:underline underline-offset-1">
          Islamic Wall Decor
        </Link>
        <Link to="/wooden" className="hover:underline underline-offset-1">
          Designer Tables
        </Link>
        <Link to="/islamic" className="hover:underline underline-offset-1">
          Mirrors
        </Link>
        <Link to="/wooden" className="hover:underline underline-offset-1">
          Paintings
        </Link>
        <Link to="/contact" className="hover:underline underline-offset-1">
          Contacts
        </Link>
        <Link to="/trackorder" className="hover:underline underline-offset-1">
          Track Your Order
        </Link>
      </div>

      {/* Tablet Header  */}
      <div className=" md:flex lg:hidden hidden justify-between items-center px-5">
        <MenuOutlinedIcon
          onClick={handleOpen}
          sx={{ height: 100, width: 40 }}
          style={{ color: "GrayText" }}
        />
        <Drawer open={open} onClose={handleClose}>
          <div className="flex flex-col justify-center gap-5 py-8  px-5 font-medium">
            <Close onClick={handleClose} />
            <Link to="/home" className="hover:underline underline-offset-1">
              Home
            </Link>
            <Divider sx={{ width: 250 }} />
            <Link to="/wooden" className="hover:underline underline-offset-1">
              Wooden Wall Clock
            </Link>
            <Divider sx={{ width: 250 }} />
            <Link to="/metal" className="hover:underline underline-offset-1">
              Metal Wall Clock
            </Link>
            <Divider sx={{ width: 250 }} />
            <Link to="/wooden" className="hover:underline underline-offset-1">
              Wall Art
            </Link>
            <Divider sx={{ width: 250 }} />
            <Link to="/islamic" className="hover:underline underline-offset-1">
              Islamic Wall Decor
            </Link>
            <Divider sx={{ width: 250 }} />
            <span className="hover:underline underline-offset-1">
              Designer Tables
            </span>
            <Divider sx={{ width: 250 }} />
            <span className="hover:underline underline-offset-1">Mirrors</span>
            <Divider sx={{ width: 250 }} />
            <span className="hover:underline underline-offset-1">
              Paintings
            </span>
            <Divider sx={{ width: 250 }} />
            <Link to="/contact" className="hover:underline underline-offset-1">
              Contacts
            </Link>
            <Divider sx={{ width: 250 }} />
            <Link
              to="/trackorder"
              className="hover:underline underline-offset-1"
            >
              Track Your Order
            </Link>
            <Divider />
            <span className="flex flex-col items-start gap-2 text-gray-400">
              <Link to="/signup">Account</Link>
              <Searchnav />
            </span>
          </div>
        </Drawer>

        <img
          src="https://www.auromin.in/cdn/shop/files/qwe1_350x.png?v=1672398598"
          alt=""
        />
        <span>
          <Rdrawer2 />
        </span>
      </div>

      {/* mobile header  */}
      <div className=" flex lg:hidden md:hidden justify-between items-center px-2 py-2">
        <MenuOutlinedIcon
          onClick={handleOpen2}
          sx={{ height: 22, width: 40 }}
          style={{ color: "GrayText" }}
        />
        <Drawer open={openPhone} onClose={handleClose2}>
          <div className="flex flex-col justify-center gap-5 py-8  px-5 font-medium">
            <Close onClick={handleClose2} />
            <Link to="/home" className="hover:underline underline-offset-1">
              Home
            </Link>
            <Divider sx={{ width: 150 }} />
            <Link to="/wooden" className="hover:underline underline-offset-1">
              Wooden Wall Clock
            </Link>
            <Divider sx={{ width: 150 }} />
            <Link to="/metal" className="hover:underline underline-offset-1">
              Metal Wall Clock
            </Link>
            <Divider sx={{ width: 150 }} />
            <Link to="/wooden" className="hover:underline underline-offset-1">
              Wall Art
            </Link>
            <Divider sx={{ width: 150 }} />
            <Link to="/islamic" className="hover:underline underline-offset-1">
              Islamic Wall Decor
            </Link>
            <Divider sx={{ width: 150 }} />
            <span className="hover:underline underline-offset-1">
              Designer Tables
            </span>
            <Divider sx={{ width: 150 }} />
            <span className="hover:underline underline-offset-1">Mirrors</span>
            <Divider sx={{ width: 150 }} />
            <span className="hover:underline underline-offset-1">
              Paintings
            </span>
            <Divider sx={{ width: 150 }} />
            <Link to="/contact" className="hover:underline underline-offset-1">
              Contacts
            </Link>
            <Divider sx={{ width: 150 }} />
            <Link
              to="/trackorder"
              className="hover:underline underline-offset-1"
            >
              Track Your Order
            </Link>
          </div>
        </Drawer>
        <SearchMobile />
        <img
          src="https://www.auromin.in/cdn/shop/files/qwe1_350x.png?v=1672398598"
          alt=""
          className="w-[130px]"
        />
        <div className="flex gap-5">
          <Link to="/signup">
            <PermIdentityOutlinedIcon />
          </Link>

          <span>
            <Rdrawer3 />
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
