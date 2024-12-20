import React from "react";

const Feature = () => {
  return (
    <section className="min-h-screen w-full bg-black pt-40 pb-5 space-y-5">
      <h1 className="font-extrabold text-[#CC0000] text-center text-[66px] leading-[1.05] ">
        Your Fitness. <br />
        Our Mission.
      </h1>
      <p className="font-[400] text-[20px] text-[#EFEFEF] text-center">
        At GymFluencer, our mission is simple: to provide the tools and support
        you need to <br />
        reach your fitness goals. We combine innovative technology with
        personalized guidance <br /> to make fitness easier, more accessible,
        and more motivating. Join us as we help you <br /> transform your
        fitness journey, one workout at a time.
      </p>
      <div className="grid grid-cols-3 py-10">
        <div className="border-r border-[#1D1D20]">
          <h3 className="text-white font-[700] text-[50px] text-center">
            422k+
          </h3>
          <p className="text-[16px] text-[#808080] text-center">
            Workouts logged and progress tracked every <br />
            month
          </p>
        </div>
        <div className="border-r border-[#1D1D20]">
          <h3 className="text-white font-[700] text-[50px] text-center">
            122k+
          </h3>
          <p className="text-[16px] text-[#808080] text-center">
            Fitness enthusiasts connected through our <br />
            platform
          </p>
        </div>
        <div className="">
          <h3 className="text-white font-[700] text-[50px] text-center">2k+</h3>
          <p className="text-[16px] text-[#808080] text-center">
            Countries where GymFluencer is making an impact
          </p>
        </div>
      </div>
      <figure className="">
        <img
          src="../src/assets/feature.png"
          alt="feature image"
          className="rounded-[16px] w-[760px] max-w-[820px] mx-auto"
        />
      </figure>
    </section>
  );
};

export default Feature;
