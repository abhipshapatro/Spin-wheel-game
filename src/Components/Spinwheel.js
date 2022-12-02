import {React, useState} from "react";
import spinwheel from "../assets/spinwheel.png";
import marker from "../assets/marker.png";
import { useNavigate } from "react-router-dom";

function Spinwheel() {

    const [clicked, setClicked] = useState(false)
    const navigate = useNavigate();

    const handleSpinClick = (e) => {
        e.preventDefault();
        setClicked(true);
        setTimeout(() => {
            navigate("/result")
        }, 2500);
        
    }

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      {/* image */}
      <div className="row">
        <img
          src={spinwheel}
          className= {clicked ? "h-48 w-56 lg:h-80 lg:w-96 animate-spin" : "h-48 w-56 lg:h-80 lg:w-96"}
          alt="spinwheel"
        />
        <img
          src={marker}
          className="relative w-8 h-10 -top-28 left-24 md:-top-28 md:left-24 lg:-top-44 lg:left-44"
          alt="marker"
        />
      </div>
      {/* button */}
      <button
      onClick={handleSpinClick}
        type="submit"
        className="bg-darkGreen text-white text-xl font-bold p-4 rounded-3xl w-[200px] hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-800"
      >
        SPIN
      </button>
    </div>
  );
}

export default Spinwheel;
