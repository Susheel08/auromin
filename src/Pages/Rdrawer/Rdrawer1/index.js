import { Close } from "@mui/icons-material";
import { Divider, Drawer } from "@mui/material";
import React, { useState } from "react";

const Rdrawer1 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={handleOpen}>Cart (0)</button>

      <Drawer anchor="right" open={open} onClose={handleClose}>
        <div className="flex justify-between w-[450px] p-10 text-2xl">
          <span>Cart</span>
          <Close onClick={handleClose} className="cursor-pointer" />
        </div>
        <Divider />
        <p className="p-2 px-10 text-gray-400 text-lg">
          Spend .50 and get free shipping!
        </p>
        <Divider />
        <div className="flex justify-center items-center py-56">
          Your card is empty
        </div>
      </Drawer>
    </>
  );
};

export default Rdrawer1;
