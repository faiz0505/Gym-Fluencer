import React from "react";

const Blogs = () => {
  return (
    <section
      className="h-screen w-full px-3 sm:px-6 md:px-12 lg:px-16 py-10"
      id="blogs"
    >
      <h2 className="font-[900] text-[#EB0000] text-center text-[34px] md:text-[40px] leading-[1.05] capitalize">
        our latest blogs
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 h-full w-full mt-8">
        <div className="lg:w-[70%] w-full h-full bg-gray-800 rounded-[12px] flex items-end">
          <div className="p-5 space-y-2">
            <button className="outline-none border-none py-[3.4px] px-[16px] bg-[#E02D2D] rounded-[4px] text-white font-[700] text-[14px]">
              Excersice
            </button>
            <h1 className="font-[900] text-[18px] md:text-[24px] text-white uppercase">
              Conquering Consistency: How to Make Exercise a Habit You Love
            </h1>
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8333 3.92383H4.16667C3.24619 3.92383 2.5 4.67002 2.5 5.59049V17.2572C2.5 18.1776 3.24619 18.9238 4.16667 18.9238H15.8333C16.7538 18.9238 17.5 18.1776 17.5 17.2572V5.59049C17.5 4.67002 16.7538 3.92383 15.8333 3.92383Z"
                    stroke="#DCDCDC"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.3333 2.25684V5.59017"
                    stroke="#DCDCDC"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66669 2.25684V5.59017"
                    stroke="#DCDCDC"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.5 8.92383H17.5"
                    stroke="#DCDCDC"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="text-[#DCDCDC] font-[400] text-xs md:text-[14px]">
                  Jun 28, 2024
                </span>
              </div>
              <div className="h-7 w-0.5 bg-[#BDBDBD]"></div>
              <div className="flex items-center gap-2">
                <figure className="h-[24px] w-[24px] rounded-full bg-lime-500"></figure>

                <span className="text-[#DCDCDC] font-[400] text-xs md:text-[14px]">
                  Shaikh Aamir
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] w-full h-full flex flex-col gap-y-4">
          <div className="w-full md:h-1/2 h-56 bg-gray-800 rounded-[12px] flex items-end">
            <div className="p-3 space-y-2">
              <button className="outline-none border-none py-[3.4px] px-[16px] bg-[#E3670E] rounded-[4px] text-white font-[700] text-[14px]">
                Weight loss
              </button>
              <h1 className="font-[900] text-[12px] md:text-[14px] text-white uppercase">
                Weight Loss: A Sustainable Approach for a Healthier You
              </h1>
              <div className="flex gap-5">
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8333 3.92383H4.16667C3.24619 3.92383 2.5 4.67002 2.5 5.59049V17.2572C2.5 18.1776 3.24619 18.9238 4.16667 18.9238H15.8333C16.7538 18.9238 17.5 18.1776 17.5 17.2572V5.59049C17.5 4.67002 16.7538 3.92383 15.8333 3.92383Z"
                      stroke="#DCDCDC"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.3333 2.25684V5.59017"
                      stroke="#DCDCDC"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.66669 2.25684V5.59017"
                      stroke="#DCDCDC"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 8.92383H17.5"
                      stroke="#DCDCDC"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="text-[#DCDCDC] font-[400] text-xs md:text-[14px]">
                    Jun 28, 2024
                  </span>
                </div>
                <div className="h-7 w-0.5 bg-[#BDBDBD]"></div>
                <div className="flex items-center gap-2">
                  <figure className="h-[24px] w-[24px] rounded-full bg-lime-500"></figure>

                  <span className="text-[#DCDCDC] font-[400] text-xs md:text-[14px]">
                    Faiz Ali
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:h-1/2 h-56 bg-gray-800 rounded-[12px] flex items-end">
            <div className="p-3 space-y-2">
              <button className="outline-none border-none py-[3.4px] px-[16px] bg-[#2A990B] rounded-[4px] text-white font-[700] text-[14px]">
                Nutrition
              </button>
              <h1 className="font-[900] text-[12px] md:text-[14px] text-white uppercase">
                Fuel Your Fitness: A Guide to Nutrition for Peak Performance
              </h1>
              <div className="flex gap-5">
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8333 3.92383H4.16667C3.24619 3.92383 2.5 4.67002 2.5 5.59049V17.2572C2.5 18.1776 3.24619 18.9238 4.16667 18.9238H15.8333C16.7538 18.9238 17.5 18.1776 17.5 17.2572V5.59049C17.5 4.67002 16.7538 3.92383 15.8333 3.92383Z"
                      stroke="#DCDCDC"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.3333 2.25684V5.59017"
                      stroke="#DCDCDC"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.66669 2.25684V5.59017"
                      stroke="#DCDCDC"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 8.92383H17.5"
                      stroke="#DCDCDC"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="text-[#DCDCDC] font-[400] text-xs md:text-[14px]">
                    Jun 28, 2024
                  </span>
                </div>
                <div className="h-7 w-0.5 bg-[#BDBDBD]"></div>
                <div className="flex items-center gap-2">
                  <figure className="h-[24px] w-[24px] rounded-full bg-lime-500"></figure>

                  <span className="text-[#DCDCDC] font-[400] text-xs md:text-[14px]">
                    Faiz Ali
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
