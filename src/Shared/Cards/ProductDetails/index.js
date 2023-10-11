import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Divider, Rating } from "@mui/material";

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

        {/* <img
          src={image}
          alt=""
          className="lg:h-[600px] lg:w-[700px]  md:h-[400px] md:w-96 rounded-2xl duration-1000"
        /> */}
        <div className="flex flex-col gap-4 w-64 pt-10">
          <div>{state.description}</div>
          <p>Model : {detail.title}</p>
          <div>Brand:{state.brand}</div>
          <div className="flex  gap-2">
            <p>Price : ${state.price}</p>
            <p>Discount:{state.discountPercentage}</p>
          </div>
          <p>Category : {state.category}</p>
          <div>Stock:{state.stock}</div>
          <div className="flex items-center">
            <Rating readOnly value={detail.rating || ""} />
            Rating:{state.rating}
          </div>

          <button className="border-2 border-black rounded-xl  w-52 p-1">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
