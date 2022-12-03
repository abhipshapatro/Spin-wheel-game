import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/wheel.png";

function Result() {
  const coupons = [
    {
      key: 1,
      code: "XAXPDF20",
      name: "on Best Sellers",
      offer: "Flat 20% off",
    },
    {
      key: 2,
      code: "AIUXH499",
      name: "on Winter Collection",
      offer: "Blanc 50ml ₹499",
    },
    {
      key: 3,
      code: "FRGFEEBX",
      name: "on Makeup Brands",
      offer: "Free Gift Box",
    },
    { key: 4, code: "XAVBM500", name: "on Sneakers", offer: "Flat ₹500 off" },
    {
      key: 5,
      code: "BNMIL999",
      name: "on T-Shirts",
      offer: "EDT NOIR ₹999",
    },
    { key: 6, code: "VBGH5000", name: "on Jeans", offer: "₹5,000 Voucher" },
  ];

  const [code, setCode] = useState("");
  const [offer, setOffer] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    handleCopy();
    navigate("/");
  };

  //selects a random item as the result of the spin game
  const item = Math.floor(Math.random() * coupons.length);
  //copies the code to the clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  //sets the updated values
  const fetchData = () => {
    setCode(coupons[item].code);
    setName(coupons[item].name);
    setOffer(coupons[item].offer);
  };

  //renders immediately
  useEffect(() => {
    fetchData();
  }, [coupons]);

  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-40  ">
      {/* left side */}
      <div className="flex items-center justify-center">
        {/* image */}
        <img
          src={image}
          alt=""
          className=" h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80"
        />
      </div>

      {/* right side */}
      <div className="flex flex-col items-center justify-center px-10">
        {/* congrats */}
        <div className="row mb-6">
          <span className=" font-bold text-lg md:text-2xl">
            Congrats! You Won:
          </span>
        </div>
        {/* coupon */}
        <div className="row mb-6 flex flex-col items-center justify-center gap-3">
          <span className="font-bold text-2xl md:text-4xl leading-normal">
            {offer}
          </span>
          <span className="font-bold text-2xl md:text-4xl leading-normal">
            {name}
          </span>
        </div>
        {/* code */}
        <div className="flex justify-between mb-6 ">
          <p className="bg-bgGreen text-zinc-200 font-bold text-lg py-2 px-4 rounded-l-xl w-full">
            {code}
          </p>
          <button
            className="block w-28 py-2 px-4 rounded-r-xl text-white font-bold bg-darkGreen hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-800"
            onClick={handleCopy}
          >
            Copy!
          </button>
        </div>

        {/* copy btn */}
        <div className="row mb-3">
          <button
            onClick={handleClick}
            type="submit"
            className="bg-darkGreen text-white text-lg font-bold p-4 rounded-3xl w-full hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-800"
          >
            Close Panel & Copy
          </button>
        </div>

        {/* terms & conditions */}
        <div className="flex flex-col items-center justify-center md:flex-row mt-2 p-0 m-0 gap-2">
          <span className="text-[7px] md:text-[9px] italic text-darkGreen">
            *You can claim your coupon for 10 minutes only!
          </span>
        </div>
      </div>
    </div>
  );
}

export default Result;
