import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Skeleton } from "@mui/material";
import WoodenProductCards from "../WoodenProductCards";

const WoodenProducts = () => {
  const [product, setProduct] = useState();
  const [limit, setLimit] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  // get api
  const productList = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/mens-watches/?limit=${limit}`
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
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 lg:px-5 px-3">
        {/* Skeleton  */}
        {isLoading
          ? [1, 2, 3, 4]?.map(() => {
              return (
                <span className="p-4 flex justify-centers flex-col">
                  <Skeleton
                    animation="wave"
                    sx={{ width: 300, bgcolor: "grey.600" }}
                  />
                </span>
              );
            })
          : product?.products?.map((item) => {
              return <WoodenProductCards key={item.id} productData={item} />;
            })}
      </div>
    </>
  );
};

export default WoodenProducts;
