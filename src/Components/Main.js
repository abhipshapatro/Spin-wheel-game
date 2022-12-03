import React, {useState} from "react";
import image from "../assets/wheel.png";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
function Main() {

    const [btn, setBtn] = useState("Try your luck")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setBtn("Loading...");

        // navigates to next page after 2secs
        setTimeout(() => {
            navigate("/spinwheel")
        }, 1000);
    }

    const style = {
        color: "#49454F"
    }

  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-40 ">

      {/* left side */}
      <div className="flex items-center justify-center ">
        {/* image */}
        <img src={image} alt="" className="h-48 w-48 lg:h-80 lg:w-80" />
      </div>

      {/* right side */}
      <div className="flex flex-col items-start justify-center w-[250px] md:w-[390px]">
        {/* heading */}
        <div className="row mb-5">
          <span className=" font-bold text-4xl">
            This is how EngageBud looks like in action!
          </span>
        </div>
        {/* form div */}
        <div className="row sm:flex-col">
          <form onSubmit={handleSubmit}>
            {/* email div */}
            <div className="mb-4 bg-bgWhite rounded-md border-b-2 border-gray-700 flex items-center">
                {/* mail icon */}
              <span className="px-3">
                <HiOutlineMail size={28} style={style} />
              </span>
              {/* email input */}
              <div className="row">
                <label htmlFor="form-label">
                  <span className="py-1.5 px-2 font-normal text-lightGray">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  className="form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-lightGray"
                  placeholder="user@mail.com"
                  required
                />
              </div>
            </div>
            {/* phone number div */}
            <div className="mb-4 bg-bgWhite rounded-md border-b-2 border-gray-700 flex items-center">
                {/* phone icon */}
              <span className="px-3">
                <HiPhone size={28} style={style} />
              </span>
              {/* number input */}
              <div className="row">
                <label className="form-label">
                  <span className="py-1.5 px-2  font-normal text-lightGray">
                    Phone Number
                  </span>
                </label>
                <input
                  type="phone number"
                  placeholder="+91-98765XXXXX"
                  className="form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-lightGray"
                  required
                />
              </div>
            </div>
            {/* checkbox div */}
            <div className="mb-4 flex border-2 border-black px-3 py-0.5 md:px-4 md:py-1 rounded-md items-center justify-center">
                {/* checkbox input */}
              <input
                type="checkbox"
                className="form-check-input rounded w-[49px] h-[49px] accent-black"
                required
              />
              {/* checkbox text */}
              <span className="ml-3">
                <p className="font-semibold text-[9px] md:text-xs px-4">
                  I agreed to receiving recurring automated messages at the
                  number I have provided.
                </p>
                <p className="font-semibold text-[9px] md:text-xs px-4">
                  Consent is not a condition to purchase.
                </p>
              </span>
            </div>
            {/* login button */}
            <button
              type="submit"
              className="bg-darkGreen text-white text-xl font-bold p-4 rounded-3xl w-full hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-800"
            >
              {btn}
            </button>
          </form>
          {/*  terms & conditions  */}
          <div className="flex flex-col items-center justify-center md:flex-row mt-2 p-0 m-0 gap-1">
            <span className="text-[7px] md:text-[9px] italic">
              *You can spin the wheel only once!
            </span>
            <span className="text-[7px] md:text-[9px] italic">
              *If you win, you can claim the coupon for 10 minutes only!
            </span>
          </div>
          {/* extra info */}
          <div className="mt-2 items-center justify-center md:justify-end flex gap-1">
            <span className="font-bold text-lg">No, I don't feel lucky</span>
            <div className="row">
              <FaTimes size={38} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
