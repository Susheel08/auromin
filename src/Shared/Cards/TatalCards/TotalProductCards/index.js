import React from "react";
import { useNavigate } from "react-router-dom";

const TotalProductCards = ({ productData }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() =>
          navigate(
            `/product/${productData.id}/${productData.title.replace(" ", "_")}`,
            {
              state: {
                image: productData.image,
                price: productData.price,
                category: productData.category,
                brand: productData.brand,
                description: productData.description,
                discountPercentage: productData.discountPercentage,
                stock: productData.stock,
                rating: productData.rating,
              },
            }
          )
        }
        className="rounded-xl lg:p-0 md:py-5 py-5 "
      >
        {/* cart */}
        <div className="flex flex-col  text-center">
          <img
            src={productData.thumbnail}
            alt=""
            className="lg:h-80 lg:w-[400px] md:h-80 md:w-[400px] h-[190px] w-[200px] rounded-xl shadow-xl border-2"
          />
          <span className="font-bold text-xl pt-5">{productData.title}</span>
          <div className="flex justify-center p-2 gap-2">
            <p className="">&#8377;.{productData.price}</p>
            <p>({productData.discountPercentage}%off)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalProductCards;
