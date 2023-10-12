import React from "react";

const Refund = () => {
  return (
    <div className="flex flex-col justify-center items-center border-y pt-16 pb-24">
      <p className="text-2xl pb-10">Refund Policy</p>

      <div className="flex flex-col justify-center items-start gap-3 lg:w-[55%] md:[50%] w-[85%]">
        <li className="font-bold py-2 text-lg">
          {" "}
          How do I cancel an order on Auromin?
        </li>
        <p className=" py-2 text-lg">
          If unfortunately, you want to cancel an order, please do so before we
          ship the order.
          <br /> Simply email us at support@auromin.in with your order number
          mentioned in the subject line.
        </p>
        <p className="text-lg">
          Once the product has been shipped, we cannot cancel it.
        </p>
        <li className="font-bold pt-12 pb-5 text-lg">Exchange Policy :</li>
        <p className="text-lg">
          If you received an item that is damaged or faulty we will happily
          replace the item . Please contact us within 7 days after receiving
          yours.
        </p>
        <p className="font-bold text-lg py-5">
          This is subject to the Return/Exchange having met the following
          requirements:
        </p>
        <p className=" py-2 text-lg">
          The items should be unused and unwashed for hygiene reasons.
        </p>
        <p className="text-lg">
          The product should have the original packaging and tags in place.
          Items without the original tags will not be accepted.
        </p>
        <p className=" py-2 text-lg">
          They should have been returned within 7 days from the delivery time.
        </p>
        <p className=" py-2 text-lg">
          In case you receive a damaged/defective product, we may request you to
          share snapshot at support@auromin.in
        </p>
        <p className=" py-2 text-lg">
          Any returned item received by us that does not meet the
          above-mentioned conditions will not be accepted and No amount will be
          reimbursed, nor will the item be exchanged in such a case.
        </p>
        <li className="font-bold text-lg pt-10">Return & Refund Policy :</li>
        <p className=" py-2 text-lg">
          Our policy within 7 days from the day of getting the delivery. If 7
          days have gone by since your purchase, unfortunately we can’t offer
          you a refund or exchange.
        </p>
        <p className=" py-2 text-lg">
          The product should have the original packaging and tags in place.
          Items without the original tags will not be accepted.
        </p>
        <p className=" py-2 text-lg">
          Any returned item received by us that does not meet the
          above-mentioned conditions will not be accepted and No amount will be
          refund.
        </p>
        <p className=" py-2 text-lg">
          The shipping cost will not be reimbursed, and we charge a 300 to 500
          Rs shipping fee( As per product size).
        </p>
        <p className=" py-2 text-lg">
          After your return request has been conformed, within 2 to 3 working
          days collected product by us.
        </p>
        <p className=" py-2 text-lg">
          Once the product has been picked by us payment we will refund within 2
          to 3 working days.
        </p>
      </div>
    </div>
  );
};

export default Refund;
