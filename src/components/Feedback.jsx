import { comment } from "postcss";
import React from "react";

const Feedback = () => {
  const feedbacks = [
    {
      id: "1f4",
      name: "Faiz Ali",
      comment:
        "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna",
      image: "../src/assets/bg-feedback.png",
      stars: 5,
    },
    {
      id: "2f4",
      name: "John Smith",
      comment:
        "lorem ipsum dolor sit amet, consectetur adip dolor sit amet, consectetur adip dolor sit amet et dolore magna et dolore magna et dolore magna et dolore",
      image: "../src/assets/bg-feedback.png",
      stars: 3,
    },
    {
      id: "3f4",
      name: "Shaikh Aamir",
      comment:
        "lorem ipsum dolor sit amet, consectetur adip dolor sit amet, consectetur adip dolor",
      image: "../src/assets/bg-feedback.png",
      stars: 5,
    },
    {
      id: "4f4",
      name: "Sufiyan Ali",
      comment: "lorem Ipsum dolor",
      image: "../src/assets/bg-feedback.png",
      stars: 2,
    },
    {
      id: "5f4",
      name: "Avinash Kale",
      comment:
        "lorem Ipsum dolor sit amet, consectetur adip dolor sit amet, con Cum sociis natoque penatibus et justo euism maximus et justo. Cum sociis natoque penatibus et just o euism maximus et justo euism maximus et justo",
      image: "../src/assets/bg-feedback.png",
      stars: 4,
    },
  ];
  return (
    <section className="md:h-screen w-full relative flex flex-col justify-center items-center gap-y-10">
      <img
        src="../src/assets/bg-feedback.png"
        alt="background image for feedback section"
        className="absolute inset-0 opacity-60 top-1/2 -translate-y-1/2 hidden md:block"
      />

      <h2 className="font-[900] text-white text-center text-[36px] leading-[1.05] relative">
        What people say
      </h2>
      <div className="relative flex overflow-x-hidden w-full mb-10 md:mb-0">
        <div className="animate-marque grid grid-flow-col gap-5">
          {feedbacks.map((feedback) => {
            return (
              <div
                key={feedback.id}
                className="w-[400px] h-[150px] md:w-[668px] md:h-[260px] bg-[#121212] rounded-[16px] overflow-hidden flex cursor-pointer"
              >
                <figure className="w-[35%] h-full relative">
                  <img
                    src={feedback.image}
                    alt={feedback.image}
                    className="h-full w-full object-cover hover:scale-110 transition-all duration-500 ease-linear"
                    loading="lazy"
                  />
                </figure>
                <div className="w-[65%] md:p-5 p-2">
                  <div className="flex items-center gap-4">
                    {Array.from({ length: feedback.stars }).map((_, i) => {
                      return (
                        <svg
                          key={`1nf${i}`}
                          width="33"
                          height="33"
                          viewBox="0 0 33 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.3401 1.56787L21.0421 11.0959L31.5571 12.6239L23.9481 20.0399L25.7451 30.5119L16.3401 25.5679L6.93509 30.5119L8.73209 20.0399L1.12309 12.6239L11.6381 11.0959L16.3401 1.56787Z"
                            fill="#EB0000"
                          />
                        </svg>
                      );
                    })}
                  </div>
                  <h3 className="text-white font-bold text-xl mt-3 md:mt-5">
                    {feedback.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1 md:mt-3">
                    {feedback.comment}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="animate-marque2 grid grid-flow-col gap-5 absolute ml-5">
          {feedbacks.map((feedback) => {
            return (
              <div
                key={`duplicate${feedback.id}`}
                className="w-[400px] h-[150px] md:w-[668px] md:h-[260px] bg-[#121212] rounded-[16px] overflow-hidden flex cursor-pointer"
              >
                <figure className="w-[35%] h-full relative">
                  <img
                    src={feedback.image}
                    alt={feedback.image}
                    className="h-full w-full object-cover hover:scale-110 transition-all duration-500 ease-linear"
                    loading="lazy"
                  />
                </figure>
                <div className="w-[65%] md:p-5 p-2">
                  <div className="flex items-center gap-4">
                    {Array.from({ length: feedback.stars }).map((_, i) => {
                      return (
                        <svg
                          key={`2nf${i}`}
                          width="33"
                          height="33"
                          viewBox="0 0 33 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.3401 1.56787L21.0421 11.0959L31.5571 12.6239L23.9481 20.0399L25.7451 30.5119L16.3401 25.5679L6.93509 30.5119L8.73209 20.0399L1.12309 12.6239L11.6381 11.0959L16.3401 1.56787Z"
                            fill="#EB0000"
                          />
                        </svg>
                      );
                    })}
                  </div>
                  <h3 className="text-white font-bold text-xl mt-3 md:mt-5">
                    {feedback.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1 md:mt-3">
                    {feedback.comment}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
