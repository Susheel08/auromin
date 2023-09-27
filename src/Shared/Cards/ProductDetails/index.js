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
    <div className="flex flex-col items-center lg:p-5 p-2 pt-5">
      <div className="lg:flex lg:flex-row md:flex  md:flex-row flex-col rounded-3xl lg:p-5 lg:gap-5 p-2 ">
        <div className="grid grid-cols-1 py-5">
          {detail?.images?.map((i) => {
            return (
              <img
                src={i}
                alt=""
                className="lg:h-24 lg:w-24 md:h-20 md:w-16 h-56 w-96 rounded-3xl cursor-pointer"
                onMouseOver={() => setImage(i)}
              />
            );
          })}
        </div>

        <img
          src={image}
          alt=""
          className="lg:h-[600px] lg:w-[700px]  md:h-[400px] md:w-96 rounded-2xl duration-1000"
        />
        <div className="flex flex-col gap-4 w-64">
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
