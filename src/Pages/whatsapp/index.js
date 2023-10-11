import React, { useState } from "react";
import Popper from "@mui/material/Popper";
import { Close, WhatsApp } from "@mui/icons-material";
import { Divider } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";

const Whatsapp = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        className="bg-[#05ab79] rounded-full p-4 text-white shadow-2xl shadow-slate-800"
      >
        <WhatsApp sx={{ height: 30, width: 30 }} />
      </button>

      <Popper
        open={open}
        className="bg-white lg:mt-[280px] md:mt-[140px] mt-[280px] lg:ml-4 md:ml-4 rounded-lg shadow-2xl"
      >
        <div className="flex lg:justify-between md:justify-between lg:gap-0 md:gap-0 gap-48 w-[450px] px-7 pt-5 font-medium rounded-t-lg text-white text-xl bg-gradient-to-r from-sky-500 from-10% via-cyan-500 via-30% to-emerald-500 to-90% ">
          <p>Hi there 👋</p>
          <Close onClick={handleClose} className="cursor-pointer" />
        </div>
        <div className="flex flex-col gap-5 px-7 py-2  bg-gradient-to-r from-sky-500 from-10% via-cyan-500 via-30% to-emerald-500 to-90% ">
          <div className="font-medium text-white/75 lg:text-lg md:text-lg text-xs">
            Welcome to Social Chat and Share. Ask us <br />
            anything 🎉
          </div>
          <div className="text-white lg:text-lg md:text-sm text-xs">
            We typically reply within a few minuts
          </div>
        </div>
        <div className="flex lg:justify-center md:justify-center items-baseline gap-5 pt-10 px-7 h-[180px]">
          <span className="bg-[#05ab79] rounded-full p-2 text-white">
            <WhatsApp sx={{ height: 30, width: 30 }} />
          </span>
          <span className="bg-gray-300 p-2 pr-10 h-18 rounded lg:text-lg md:text-lg text-xs">
            Hello! I'm Rohini from the support <br />
            team.
          </span>
        </div>
        <Divider />
        <div className="flex lg:justify-between md:justify-between items-center px-7 h-20">
          <input type="search" placeholder="Send a message...." />
          <div className="flex gap-5">
            <InsertEmoticonIcon />
            <SendIcon />
          </div>
        </div>
      </Popper>
    </div>
  );
};
export default Whatsapp;
