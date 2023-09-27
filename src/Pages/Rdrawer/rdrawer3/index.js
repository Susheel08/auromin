import { Close } from "@mui/icons-material";
import { Divider, Drawer } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import React, { useState } from "react";

const Rdrawer3 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={handleOpen}>
        <ShoppingBagOutlinedIcon
          sx={{ height: 22 }}
          style={{ color: "GrayText" }}
        />
      </button>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <div className="flex justify-between  p-5 lg:text-2xl md:text-lg text-sm">
          <span>Cart</span>
          <Close
            onClick={handleClose}
            className="cursor-pointer"
            onClose={handleClose}
            sx={{ height: 18 }}
          />
        </div>
        <Divider />
        <p className="p-2 px-5 text-gray-400 lg:text-lg md:text-lg text-xs">
          Spend .50 and get free shipping!
        </p>
        <Divider />
        <div className="flex justify-center items-center py-56 lg:text-lg md:text-lg text-xs">
          Your card is empty
        </div>
      </Drawer>
    </>
  );
};

export default Rdrawer3;
