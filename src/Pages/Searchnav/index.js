import { Close } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import React, { useState } from "react";

const Searchnav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={handleOpen}>Search</button>
      <Drawer anchor="top" open={open} onClose={handleClose} duration-0>
        <div className="flex justify-between items-start lg:text-2xlmd:text-2xl text-lg text-gray-300 lg:gap-5 md:gap-5   w-full  h-[900px] p-10 ">
          <input type="search" placeholder="Search...." />
          <Close onClick={handleClose} sx={{ height: 30, width: 30 }} />
        </div>
      </Drawer>
    </>
  );
};

export default Searchnav;
