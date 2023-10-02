import React from "react";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import IslamicProducts from "../Cards/IslamicClock/IslamicProducts";
import MetalProducts from "../Cards/MetalArt/MetalProducts";
import WoodenProducts from "../Cards/WoodenClock/WoodenProducts";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative">
        <img
          src="https://www.auromin.in/cdn/shop/files/loft-empty-room-with-wooden-panelling-authentic-interior-design_1000x.jpg?v=1677825686"
          alt=""
          className="lg:h-full lg:w-full md:h-full md:w-full h-[300px]"
          data-aos="zoom-in"
          data-aos-duration="3000"
        />
        <p className="absolute lg:top-[75%] lg:right-[57%] md:top-[70%] md:right-[65%] top-[75%] right-[70%] ">
          <button
            onClick={() => navigate("/totalproducts")}
            className="button-86 lg:!px-10 lg:!py-4 md:!px-10 md:!py-4"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          >
            Buy Now
          </button>
        </p>
      </div>
      <p className="flex justify-center p-16 font-medium text-xl">
        Metal Wall Art
      </p>
      <MetalProducts />
      <div className="flex justify-center text-white font-bold p-20">
        <button
          onClick={() => navigate("/totalproducts")}
          className="buttonProducts px-12 py-3 text-xl"
        >
          View All Products
        </button>
      </div>
      <div className="grid lg:grid-cols-3  grid-cols-2 gap-6 lg:px-5 px-2">
        <div className="relative">
          <img
            src="https://img.freepik.com/premium-photo/book-shelf-table_36367-6290.jpg?w=360"
            alt=""
            className="lg:h-[500px] lg:w-[470px] md:h-[500px] md:w-[470px] h-[300px] rounded-xl"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          />
          <span className="absolute lg:top-[70%] md:top-[70%] top-[65%] lg:left-[20%] md:left-[20%] left-[6px] font-bold lg:text-2xl md:text-2xl text-sm px-2">
            Designer Metal Wall Clock
          </span>
          <button
            onClick={() => navigate("/totalproducts")}
            className="buttonView lg:px-5 md:px-10 px-2 py-2 absolute lg:top-[80%] lg:left-[30%]
            md:top-[80%] md:left-[30%] top-[80%] left-[10%]"
          >
            View Products
          </button>
        </div>

        <div className="relative">
          <img
            src="https://img.freepik.com/premium-photo/friendly-interior-style-living-room-wall-mockup-wall-art-3d-rendering-3d-illustration-generative-ai_887552-4216.jpg?w=900"
            alt=""
            className="lg:h-[500px] lg:w-[470px] md:h-[500px] md:w-[470px] h-[300px] rounded-xl"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          />
          <span className="absolute top-[70%] lg:left-[20%] md:left-[27%] left-[6px] font-bold lg:text-2xl md:text-2xl text-sm px-2">
            Designer Tables
          </span>
          <button
            onClick={() => navigate("/totalproducts")}
            className="buttonView lg:px-5 md:px-10 px-2 py-2 absolute lg:top-[80%] lg:left-[23%] md:top-[80%] md:left-[30%] top-[80%] left-[7%]"
          >
            View Products
          </button>
        </div>

        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/front-view-interior-room-design-concept_23-2148786449.jpg?w=360&t=st=1695499832~exp=1695500432~hmac=ce6c2ff7c0ffea11515f729b89f00db22c5797c565c7fcb536580413ac89efff"
            alt=""
            className="lg:h-[500px] lg:w-[470px] md:h-[500px] md:w-[470px] h-[300px] rounded-xl"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          />
          <span className="absolute top-[70%] lg:left-[20%] md:left-[20%] left-[6px] font-bold lg:text-2xl md:text-2xl text-sm px-2">
            Wooden Wall Clock
          </span>
          <button
            onClick={() => navigate("/totalproducts")}
            className="buttonView lg:px-5 md:px-10 px-2 py-2 absolute lg:top-[80%] lg:left-[30%] md:top-[80%] md:left-[25%] top-[80%] left-[7%]"
          >
            View Products
          </button>
        </div>

        <div className="relative">
          <img
            src="https://img.freepik.com/premium-photo/poster-frame-mockup-scandinavian-style-living-room-interior_41470-4668.jpg?w=740"
            alt=""
            className="lg:h-[500px] lg:w-[470px] md:h-[500px] md:w-[470px] h-[300px] rounded-xl"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          />
          <span className="absolute top-[70%] left-[15%]  md:left-[28%] font-bold lg:text-2xl md:text-2xl text-sm ">
            Modern Wall Art
          </span>
          <button
            onClick={() => navigate("/totalproducts")}
            className="buttonView lg:px-5 md:px-10 px-2 py-2 absolute lg:top-[80%] lg:left-[30%]
            md:top-[80%] md:left-[30%] top-[80%] left-[15%]"
          >
            View Products
          </button>
        </div>
      </div>

      <p className="flex justify-center p-16 font-medium text-xl">
        Metal Wall Clock
      </p>
      <MetalProducts />
      <div className="flex justify-center text-white font-bold p-20">
        <button
          onClick={() => navigate("/totalproducts")}
          className="buttonProducts px-12 py-3 text-xl"
        >
          View All Products
        </button>
      </div>
      <Divider />

      <p className="flex justify-center p-16 font-medium text-xl">
        Wooden Wall Clock
      </p>
      <WoodenProducts />
      <div className="flex justify-center text-white font-bold p-20">
        <button
          onClick={() => navigate("/totalproducts")}
          className="buttonProducts px-12 py-3 text-xl"
        >
          View All Products
        </button>
      </div>
      <Divider />

      <p className="flex justify-center p-16 font-medium text-xl">
        Islamic Wall Clock
      </p>
      <IslamicProducts />
      <div className="flex justify-center text-white font-bold p-20">
        <button
          onClick={() => navigate("/totalproducts")}
          className="buttonProducts px-12 py-3 text-xl"
        >
          View All Products
        </button>
      </div>
      <Divider />

      <p className="flex justify-center p-16 font-medium text-xl">
        Designer Table
      </p>
      <IslamicProducts />
      <div className="flex justify-center text-white font-bold p-20">
        <button
          onClick={() => navigate("/totalproducts")}
          className="buttonProducts px-12 py-3 text-xl"
        >
          View All Products
        </button>
      </div>
      <div className="relative">
        <img
          src="https://img.freepik.com/free-photo/chic-modern-luxury-aesthetics-style-living-room-blue-tone_53876-125839.jpg?w=740&t=st=1695713723~exp=1695714323~hmac=20591dfa9d3272d727a6c68f9ed1f5a09b2fac51598e19bfe2324de95c5c1c87"
          alt=""
          className="lg:h-[630px] lg:w-full md:h-[630px] md:w-full"
          data-aos="zoom-in-up"
          data-aos-duration="3000"
        />
        <div className="absolute lg:top-[48%] lg:right-[29%]  md:top-[48%] md:right-[13%] top-[47%] flex flex-col lg:gap-6 md:gap-6 gap-2 items-center font-bold lg:text-xl md:text-xl text-xs text-white lg:px-0 md:px-0 px-16">
          <span>Newsletter</span>
          <span>
            Subscribe to receive updates, access to exclusive deals, and more.
          </span>
        </div>
        <input
          type="text"
          placeholder="Enter your email"
          className="font-bold placeholder-white text-lg border-2 border-white bg-transparent lg:px-5 lg:h-[55px] lg:w-[500px] md:h-[55px] md:w-[420px] w-[190px] absolute top-[75%] lg:left-[28%] md:left-[10%] left-8 "
        />
        <button className="absolute top-[75%] lg:right-[25%]  right-[15%] bg-white font-bold lg:px-14 lg:py-4 md:px-14 md:py-4 p-1">
          Subscribe
        </button>
      </div>
    </>
  );
};

export default Home;
