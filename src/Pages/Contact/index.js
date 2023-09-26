import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center border-y-2">
      <form className="flex flex-col w-[800px] gap-5 p-5">
        <span className="text-center text-3xl text-gray-800 font-medium">
          Contact Us
        </span>
        <span>Need help with your order? Let us take care of you.</span>
        <div className="grid grid-cols-1">
          <span>
            <b>Whatsapp:</b>+91 9737736698
          </span>
          <span>
            <b>Email Us:</b> support@auromin.in
          </span>
        </div>
        <div className="flex gap-2">
          <input
            id="name"
            placeholder="Your name"
            type="text"
            className="placeholder-gray-400 font-[7px] border-2 hover:border-black px-2 h-12 w-[50%]"
          />
          <input
            id="email"
            placeholder="Your email"
            type="email"
            className="placeholder-gray-400 font-[7px] border-2 hover:border-black px-2 h-12 w-[50%]"
          />
        </div>
        <input
          id="email"
          placeholder="Your phone (Optional)"
          type="number"
          className="placeholder-gray-400 font-[7px] border-2 hover:border-black px-2 h-12 "
        />
        <textarea
          placeholder="Your Message"
          className="placeholder-gray-400 font-[7px] border-2 hover:border-black px-2 h-[250px]"
        />
        <button type="submit" className="bg-[#e3753d] py-2 font-medium">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
