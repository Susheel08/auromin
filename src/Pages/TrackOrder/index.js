import { FacebookOutlined } from "@mui/icons-material";
import Instagram from "@mui/icons-material/Instagram";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const TrackOrder = () => {
  return (
    <div className="bg-gray-200 flex flex-col  items-center gap-7">
      <div className="flex justify-center items-center bg-white w-full py-5">
        <img
          src="	https://www.auromin.in/cdn/shop/files/qwe1_350x.png?v=1672398598"
          alt=""
          className="lg:w-[15%] lg:h-[35px] md:w-[15%] md:h-[30px] h-[30px] w-[30%]"
        />
      </div>

      <span className="flex flex-col gap-12  items-start lg:pt-10 lg:pb-24 lg:px-9 md:pt-6 md::pb-16 md:px-5 lg:mb-2 md:mb-2 mb-80  mx-5 bg-white rounded-xl lg:w-[1100px] lg:h-[550px] md:w-[700px] md:h-[500px]  p-5 ">
        <p className="font-bold text-gray-700 text-xl">
          <span className="flex gap-2 items-center ">
            <img
              src="https://auromin.shiprocket.co/post_order/img/track_icon.png"
              alt=""
              className="h-16 w-12"
            />
            <span>Track status of your shipment</span>
          </span>

          {/* <Divider sx={{ width: 1120, padding: 2 }} /> */}
        </p>
        <span className="flex items-center font-medium text-gray-800 gap-3 ">
          Search by
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="Order Id"
                control={<Radio />}
                label="Order Id"
              />
              <FormControlLabel value="AWB" control={<Radio />} label="AWB" />
            </RadioGroup>
          </FormControl>{" "}
        </span>
        <input
          type="search"
          placeholder="Enter Order Id to Search"
          className="p-4 border-2 lg:w-[50%] md:[50%] w-full rounded"
        />
        <button className="p-3 border-2 rounded lg:w-[20%] md:w-[20%] w-full bg-green-800 text-white text-lg font-medium hover:bg-green-600">
          Submit
        </button>
      </span>
      <div className="lg:flex lg:flex-row md:flex  flex-col justify-center lg:gap-[23%] font-medium text-gray-700 bg-white w-full py-4 px-5">
        <span>
          Email us at: support@auromin.in | Call us to: 9737736698 | Follow us
          to: <FacebookOutlined /> <Instagram /> | Privacy Policy
        </span>
        <span className="flex items-center">
          <span>Powered By</span>
          <img
            src="https://auromin.shiprocket.co/post_order/img/logo-v1-2.png"
            alt=""
            className="h-5 w-28"
          />
        </span>
      </div>
    </div>
  );
};

export default TrackOrder;
