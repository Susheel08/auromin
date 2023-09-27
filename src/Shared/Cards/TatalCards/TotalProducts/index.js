import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Skeleton } from "@mui/material";
import TotalProductCards from "../TotalProductCards";

const TotalProducts = () => {
  const [product, setProduct] = useState();
  const [limit, setlimit] = useState(30);
  const [isLoading, setIsLoading] = useState(false);
  // get api
  const productList = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/?limit=${limit}`
      );
      setProduct(response.data);
      setIsLoading(false);
    } catch (error) {}
    setIsLoading(false);
  };
  useEffect(() => {
    productList();
  }, [limit]);

  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 px-5">
        {/* Skeleton  */}
        {isLoading
          ? [1, 2, 3, 4]?.map(() => {
              return (
                <span className="p-4 flex justify-centers flex-col">
                  <Skeleton
                    animation="wave"
                    sx={{ height: 200, width: 300, bgcolor: "grey.200" }}
                  />
                </span>
              );
            })
          : product?.products?.map((item) => {
              return <TotalProductCards key={item.id} productData={item} />;
            })}
      </div>
      <div className="px-5 py-10 ">
        <button
          onClick={() => setlimit(limit + 10)}
          className="bg-[#e3753d] lg:px-20 lg:py-5 md:px-20 md:py-3 p-2 font-bold text-white rounded"
        >
          See More
        </button>
      </div>
    </>
  );
};

export default TotalProducts;
