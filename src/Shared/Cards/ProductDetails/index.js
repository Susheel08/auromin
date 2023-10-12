import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Rating } from "@mui/material";

const ProductDetails = () => {
  const { id, name } = useParams();
  const { state } = useLocation();

  console.log(state);
  console.log(name.replace("_", " "));
  const [detail, setDetail] = useState({});
  const [image, setImage] = useState();
  const productDetails = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => setDetail(res));
  };
  useEffect(() => {
    productDetails();
  }, [id]);
  useEffect(() => {
    setImage(detail?.images?.[0]);
  }, [detail]);
  console.log(detail, "detail");

  return (
    <div className="flex lg:flex-col items-center justify-between lg:p-5 p-2 border-t-2">
      <div className="lg:flex lg:flex-row md:flex  md:flex-row gap-10 px-5">
        <div className="flex flex-col gap-10 lg:h-[900px] h-[500px] hide-scroll overflow-y-scroll scroll-smooth">
          {detail?.images?.map((i) => {
            return (
              <img
                src={i}
                alt=""
                className="lg:h-[700px] lg:w-[700px] md:h-[400px] md:w-96 duration-1000 hover:scale-y-110 "
                onMouseOver={() => setImage(i)}
              />
            );
          })}
          <img
            src={image}
            alt=""
            className="lg:h-[600px] lg:w-[700px]  md:h-[400px] md:w-96 duration-1000 hover:scale-x-125"
          />
        </div>

        <div className="flex flex-col gap-4 lg:w-[40%] md:w-[40%] w-full pt-20">
          <p className="">auromin.in</p>
          <div className="flex justify-start gap-10 ">
            <p className="text-[#e3753d] lg:text-lg md:text-lg text-sm font-medium">
              &#8377;.{state.price}
            </p>
            <div className="flex">
              <del className="text-gray-400 lg:text-lg md:text-lg text-sm font-medium">
                &#8377;.2,999
              </del>
              <p className="text-[#e3753d] lg:text-lg md:text-lg text-sm font-medium">
                ({state.discountPercentage}%off)
              </p>
            </div>
          </div>
          <div className="border border-[#bdb8ac] border-dashed rounded flex flex-col">
            <div className="border-b border-[#bdb8ac] p-3">
              {state.description}
            </div>
            <p className="border-b border-[#bdb8ac] p-3">
              Model : {detail.title}
            </p>
            <div className="border-b border-[#bdb8ac] p-3">
              Brand: {state.brand}
            </div>
            <p className="border-b border-[#bdb8ac] p-3">
              Category : {state.category}
            </p>
            <div className="border-b border-[#bdb8ac] p-3">
              Stock: {state.stock}
            </div>
            <div className="flex items-center p-3 gap-3">
              <Rating readOnly value={detail.rating || ""} />
              <span>Rating: {state.rating}</span>
            </div>
          </div>
          <button className="buttonProducts lg:px-5 md:px-10 px-2 py-2 w-auto">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
