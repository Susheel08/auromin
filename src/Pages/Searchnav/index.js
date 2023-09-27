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
        <div className="flex justify-between items-start lg:text-2xl md:text-2xl text-lg text-gray-300 lg:gap-5 md:gap-5 w-full h-[900px] p-5 ">
          <input
            type="search"
            placeholder="Search...."
            className="h-12 w-1/2 px-2"
          />
          <Close
            onClick={handleClose}
            sx={{ height: 30, width: 30 }}
            className="mt-2"
          />
        </div>
      </Drawer>
    </>
  );
};

export default Searchnav;
