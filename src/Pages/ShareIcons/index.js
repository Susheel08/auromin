import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import {
  Facebook,
  ForkLeft,
  Share,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Dialog } from "@mui/material";

const ShareIcons = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const actions = [
    { icon: <WhatsApp />, name: "WhatsApp" },
    { icon: <Twitter />, name: "Twitter" },
    { icon: <Facebook />, name: "Facebook" },
  ];

  const actionsButton = [
    { id: 1, icon: <WhatsApp />, name: "WhatsApp" },
    { id: 2, icon: <Twitter />, name: "Twitter" },
    { id: 3, icon: <Facebook />, name: "Facebook" },
  ];
  return (
    <div className="">
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{
          position: "absolute",
          top: 16,
          right: 2,
        }}
        icon={<SpeedDialIcon openIcon={<AddIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            className="grid grid-rows-3"
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </div>
  );
};
export default ShareIcons;
