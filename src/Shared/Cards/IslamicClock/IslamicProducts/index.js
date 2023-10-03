import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Skeleton } from "@mui/material";
import IslamicProductCards from "../IslamicProductCards";

const IslamicProducts = () => {
  const [product, setProduct] = useState();
  const [limit, setLimit] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  // get api
  const productList = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/home-decoration/?limit=${limit}`
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
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 md::gap-10 gap-2 lg:px-5 lg:mx-10 md:mx-10 mx-5">
        {/* Skeleton  */}
        {isLoading
          ? [1, 2, 3, 4]?.map(() => {
              return (
                <span className=" flex justify-centers">
                  <Skeleton
                    animation="wave"
                    sx={{ height: 200, width: 300, bgcolor: "grey.200" }}
                  />
                </span>
              );
            })
          : product?.products?.map((item) => {
              return <IslamicProductCards key={item.id} productData={item} />;
            })}
      </div>
    </>
  );
};

export default IslamicProducts;
