import React from "react";

const Header = () => {
  return (
    <header className="h-screen w-full bg-black flex justify-center items-center flex-col space-y-5 shadow-2xl">
      <img
        src="../src/assets/bg-hero.svg"
        alt="background image"
        className="h-full w-full object-cover inset-0 opacity-45 absolute"
      />
      <div className="relative px-2 h-[44px] rounded-[100px] bg-[#1A1A1A] flex items-center justify-center">
        <div className="flex relative w-[75px]">
          <figure className="h-[28px] w-[28px] rounded-full bg-pink-400"></figure>
          <figure className="h-[28px] w-[28px] rounded-full bg-yellow-400 absolute left-5"></figure>
          <figure className="h-[28px] w-[28px] rounded-full absolute bg-pink-500 left-10"></figure>
        </div>
        <p className="text-white font-[500]">Trusted by 3+ million users</p>
      </div>
      <h1 className="font-extrabold text-[#EB0000] text-center text-[85px] leading-[1.05] relative">
        Track Your Fitness <br />
        Journey
      </h1>
      <p className="relative font-[500] text-[18px] text-[#DCDCDC]">
        Discover the ultimate fitness companion with GymFluencer. Effortlessly
        log your workouts, <br /> count reps, and track calories burned. Stay
        motivated and achieve your goals with ease.
      </p>
    </header>
  );
};

export default Header;
