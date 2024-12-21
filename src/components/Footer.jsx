import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-20">
      <div className="flex flex-col items-center gap-y-8 py-16">
        <img src="/assets/logo.svg" alt="logo" className="" />
        <h2 className="font-[600] text-[#BDBDBD] text-center text-[16px] md:text-[20px] leading-[1.05] ">
          Where Fitness Meets Social <br /> Connection!
        </h2>
        <div className="bg-[#1A1A1A] py-[16px] px-[20px] rounded-[12px] text-white font-[500] text-[17px] flex items-start gap-2">
          <svg
            width="25"
            height="27"
            viewBox="0 0 25 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_2903)">
              <g clip-path="url(#clip1_1_2903)">
                <path
                  d="M4.69 7.69043L10.89 12.3404C11.4093 12.7299 12.0409 12.9404 12.69 12.9404C13.3391 12.9404 13.9707 12.7299 14.49 12.3404L20.69 7.69043"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.69 5.69043H5.69C5.15957 5.69043 4.65086 5.90114 4.27579 6.27622C3.90072 6.65129 3.69 7.16 3.69 7.69043V17.6904C3.69 18.2209 3.90072 18.7296 4.27579 19.1046C4.65086 19.4797 5.15957 19.6904 5.69 19.6904H19.69C20.2204 19.6904 20.7291 19.4797 21.1042 19.1046C21.4793 18.7296 21.69 18.2209 21.69 17.6904V7.69043C21.69 7.16 21.4793 6.65129 21.1042 6.27622C20.7291 5.90114 20.2204 5.69043 19.69 5.69043Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_2903">
                <rect
                  width="24"
                  height="26"
                  fill="white"
                  transform="translate(0.690002 0.69043)"
                />
              </clipPath>
              <clipPath id="clip1_1_2903">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.690002 0.69043)"
                />
              </clipPath>
            </defs>
          </svg>
          faizali786313@gmail.com
        </div>
        <ul className="flex flex-wrap justify-center items-center gap-5 text-[#BDBDBD] mt-8 px-3">
          <li className="font-[500] text-[18px]">Home</li>
          <div className="h-[4px] w-[4px] rounded-full bg-[#28282C]"></div>
          <li className="font-[500] text-[18px]">Diet Plan</li>
          <div className="h-[4px] w-[4px] rounded-full bg-[#28282C]"></div>
          <li className="font-[500] text-[18px]">Features</li>
          <div className="h-[4px] w-[4px] rounded-full bg-[#28282C]"></div>
          <li className="font-[500] text-[18px]">FAQ&apos;s</li>
        </ul>
      </div>
      <hr className="border-[#1D1D20]" />
      <div className="px-3 sm:px-6 md:px-12 lg:px-16 flex flex-col sm:flex-row gap-y-4 justify-between items-center py-10">
        <div className="text-[#BDBDBD] font-[500] text-[17px]">
          © 2024 GymFluencer. All rights reserved.
        </div>
        <div className="flex items-center gap-3">
          <div className="h-[44px] w-[44px] bg-[#1A1A1A] rounded-[12px]"></div>
          <div className="h-[44px] w-[44px] bg-[#1A1A1A] rounded-[12px]"></div>
          <div className="h-[44px] w-[44px] bg-[#1A1A1A] rounded-[12px]"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
