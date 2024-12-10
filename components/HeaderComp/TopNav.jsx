import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TopNav = () => {
  return (
    <div className=" bg-[#292931] ">
      <div className=" flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center gap-2 py-3 px-12 lg:px-0 w-full max-w-5xl mx-auto ">
        <div className="w-6 h-6 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path d="M12 2a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5zm0 12c5.33 0 10 2.67 10 6v2H2v-2c0-3.33 4.67-6 10-6z" />
          </svg>
        </div>

        <div>
          <img className=" w-10 h-10" src="/gold-coin.png" alt="coin" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TopNav;
