import React from "react";
import CountdownTimer from "./CountdownTimer";

const MonthlyQuizComp = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center">
      <div className="flex flex-col items-center bg-white p-6 ">
        <h2 className="text-2xl font-bold mb-4">MONTHLY Quiz</h2>
        <div className="flex space-x-2 text-[#FF69B4]">
          <CountdownTimer/>
        </div>
        <p className="mt-4 text-xl font-bold">এন্ট্রি ফি: 40 টাকা।</p>
        <p className="text-xl font-bold">কুইজ খেলতে জন্য একটি নিবন্ধন করুন।</p>
        <div className="mt-6 flex space-x-1">
          <button className="bg-[#DC3545] text-white px-4 py-2 ">
            বাংলাদেশ
          </button>
          <button className="bg-[#DC3545] text-white px-4 py-2 ">
          আন্তর্জাতিক বিষয়াবলি
          </button>
          <button className="bg-[#DC3545] text-white px-4 py-2 ">
            গণিত
          </button>
        </div>
        <button className="mt-6 bg-green-600 text-white px-12 py-2 rounded-sm">
          Leaderboard
        </button>
      </div>
    </div>
  );
};

export default MonthlyQuizComp;
