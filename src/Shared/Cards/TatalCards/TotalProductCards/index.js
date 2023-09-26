import React from "react";
import { useNavigate } from "react-router-dom";

const TotalProductCards = ({ productData }) => {
  const navigate = useNavigate();

  return (
    <div>
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
        className="rounded-xl  "
      >
        {/* cart */}
        <div className="flex flex-col  text-center">
          <img
            src={productData.thumbnail}
            alt=""
            className="h-80 w-[500px] rounded-xl shadow-xl"
          />
          <span className="font-bold text-xl pt-5">{productData.title}</span>
          <div className="flex justify-center p-2 gap-2">
            <p className="">&#8377;.{productData.price}</p>
            <p>({productData.discountPercentage}%off)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalProductCards;
