import React from "react";

const Shipping = () => {
  return (
    <div className="flex flex-col justify-center items-center border-y pt-16 pb-24">
      <p className="text-2xl pb-10">Shipping Policy</p>

      <div className="flex flex-col justify-center items-start gap-3 lg:w-[55%] md:[50%] w-[85%]">
        <p className="font-bold py-2 text-lg">Welcome to Auromin!</p>
        <p className="font-bold py-2 text-lg">Shipping Rates:</p>
        <p className="text-lg">
          For prepaid & COD orders : We charge no shipping and handling fee.
          Free shipping is included.
        </p>
        <p className="font-bold pt-12 pb-5 text-lg">Order Processing:</p>
        <p className="text-lg">
          Time taken to Dispatch a product depends upon the type of the product
          and Quantity.
          <br /> Large Quantities generally take more than usual time which are
          conveyed to the <br />
          customers once the order is confirmed.
        </p>
        <p className="text-lg">
          General shipping time for products like Paintings (Not hand made),
          Wall Art, Wall Clock etc
          <br /> shipped within 1 to 2 working day. are Our business days are
          Monday-Friday.
        </p>
        <p className="font-bold py-2 text-lg">Shipping Time:</p>
        <p className="text-lg">
          For most serviceable pin codes, we try to deliver within 8 days. But
          due to unforseen
          <br /> circumstances like weather, strikes, remote locations, stocking
          issues, or any other <br />
          reason - it may take longer. You will however be able to track your
          package using a unique <br />
          tracking link that we will email/SMS you after your order is sent to
          our delivery partner.
        </p>
      </div>
    </div>
  );
};

export default Shipping;
