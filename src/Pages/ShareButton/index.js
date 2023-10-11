import {
  Close,
  Facebook,
  FacebookRounded,
  FacebookSharp,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import FacebookOutlined from "@mui/icons-material/FacebookOutlined";
import { Drawer, Modal } from "@mui/material";
import React, { useState } from "react";

const ShareButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <span
        onClick={handleOpen}
        className="bg-white p-2 rotate-90 px-7 rounded font-medium"
      >
        <span>SHARE</span>
      </span>
      <Modal open={open} onClose={handleClose} duration-0>
        <div className="flex flex-col w-screen h-screen p-5 backdrop-blur-3xl bg-white/5">
          <div className="flex justify-end">
            <Close
              onClick={handleClose}
              sx={{ height: 30, width: 30 }}
              className="mt-2"
            />
          </div>
          <div className="flex flex-col gap-7 justify-center items-center my-44">
            <p className="text-xl tracking-widest">SHARE</p>
            <p className="text-[50px]">auromin.in</p>
            <div className="flex justify-between gap-7 text-white font-bold">
              <span className="bg-blue-700 rounded-full p-5">
                <FacebookOutlined sx={{ height: 30, width: 30 }} />
              </span>
              <span className="bg-blue-500 rounded-full p-5">
                <Twitter sx={{ height: 30, width: 30 }} />
              </span>
              <span className="bg-green-500 rounded-full p-5">
                <WhatsApp sx={{ height: 30, width: 30 }} />
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ShareButton;
