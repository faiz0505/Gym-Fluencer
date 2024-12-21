import React from "react";

const Location = () => {
  const gyms = [
    {
      id: "fa1f",
      name: "Physc Gym Nerul 24/7",
      image: "gym.png",
      contactNumber: "+91 8421932820",
      address: "Nerul, Navi Mumbai, Maharashtra, 400706",
    },
    {
      id: "fa2f",
      name: "Iron Fitness",
      image: "gym.png",
      contactNumber: "+91 8421932820",
      address: "Nerul, Navi Mumbai",
    },
    {
      id: "fa3f",
      name: "Hydropower Fitness & Gym",
      image: "gym.png",
      contactNumber: "+91 8421932820",
      address: "Nerul, Navi Mumbai",
    },
    {
      id: "fa4f",
      name: "A1 fitness",
      image: "gym.png",
      contactNumber: "+91 8421932820",
      address: "Kamargaon, Washim, Maharashtra, 444110",
    },
  ];
  return (
    <section className="min-h-screen w-full px-3 sm:px-6 md:px-12 lg:px-16">
      <h2 className="font-[900] text-[#EB0000] text-center text-[25px] leading-[1.05] ">
        Find Your Nearest Gym
      </h2>
      <p className="font-[500] text-[14px] md:text-[16px] text-[#EFEFEF] text-center mt-4">
        Easily discover gyms near your location to kickstart{" "}
        <br className="hidden md:block" />
        your fitness journey today!
      </p>
      <div className="grid md:grid-cols-2 rounded-[16px] mt-10 h-screen overflow-y-scroll scrollbar-hide">
        <div className="bg-[#121212] space-y-5 pt-5 px-5">
          {gyms.map((gym) => {
            return (
              <div
                key={gym.id}
                className="w-full h-[160px] bg-[#1A1A1A] rounded-[16px] overflow-hidden flex hover:bg-[#EB0000]"
              >
                <figure className="w-[30%] h-full relative">
                  <img
                    src={`/assets/${gym.image}`}
                    alt={gym.name}
                    className="h-full w-full object-cover object-center hover:scale-110 transition-all duration-500 ease-linear"
                    loading="lazy"
                  />
                </figure>
                <div className="w-[75%] md:p-5 p-3 flex flex-col justify-around">
                  <h3 className="font-[700] text-white text-[20px] md:text-[24px]">
                    {gym.name}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-[#DCDCDC] gap-3">
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_2581)">
                          <path
                            d="M9.89601 2.60311C9.91701 2.52411 9.95401 2.44911 10.004 2.38411C10.054 2.31911 10.116 2.26411 10.187 2.22311C10.258 2.18211 10.337 2.15611 10.418 2.14511C10.5 2.13411 10.582 2.14011 10.662 2.16111C11.82 2.46311 12.878 3.06911 13.724 3.91611C14.571 4.76211 15.177 5.81911 15.479 6.97811C15.5 7.05711 15.506 7.14011 15.495 7.22211C15.484 7.30311 15.458 7.38111 15.417 7.45311C15.375 7.52411 15.321 7.58611 15.256 7.63611C15.19 7.68611 15.116 7.72311 15.037 7.74411C14.984 7.75811 14.93 7.76511 14.875 7.76511C14.737 7.76511 14.603 7.71911 14.494 7.63511C14.385 7.55211 14.307 7.43411 14.271 7.30111C14.025 6.35511 13.53 5.49211 12.839 4.80111C12.148 4.11011 11.285 3.61511 10.339 3.36911C10.26 3.34811 10.185 3.31111 10.12 3.26111C10.055 3.21111 10 3.14911 9.95901 3.07811C9.91801 3.00711 9.89101 2.92811 9.88001 2.84711C9.86901 2.76511 9.87501 2.68211 9.89601 2.60311ZM9.71401 5.86911C10.791 6.15611 11.484 6.84811 11.771 7.92611C11.807 8.05911 11.885 8.17611 11.994 8.26011C12.103 8.34411 12.237 8.39011 12.375 8.39011C12.43 8.39011 12.484 8.38311 12.537 8.36911C12.616 8.34811 12.69 8.31111 12.756 8.26111C12.821 8.21111 12.875 8.14911 12.916 8.07811C12.957 8.00611 12.984 7.92811 12.995 7.84711C13.006 7.76511 13 7.68211 12.979 7.60311C12.579 6.10611 11.534 5.06111 10.037 4.66111C9.95701 4.64011 9.87501 4.63411 9.79301 4.64511C9.71201 4.65611 9.63401 4.68311 9.56201 4.72411C9.49101 4.76511 9.42901 4.82011 9.37901 4.88511C9.32901 4.95011 9.29301 5.02411 9.27101 5.10411C9.25001 5.18311 9.24501 5.26611 9.25601 5.34711C9.26601 5.42811 9.29301 5.50711 9.33401 5.57811C9.37501 5.64911 9.43001 5.71111 9.49501 5.76111C9.56001 5.81111 9.63501 5.84811 9.71401 5.86911ZM16.116 13.3181C15.976 14.3771 15.456 15.3481 14.653 16.0521C13.85 16.7551 12.818 17.1421 11.75 17.1401C5.54701 17.1401 0.500008 12.0931 0.500008 5.89011C0.498008 4.82211 0.885008 3.79011 1.58801 2.98711C2.29201 2.18311 3.26301 1.66411 4.32201 1.52411C4.59001 1.49211 4.86101 1.54611 5.09501 1.68011C5.32901 1.81411 5.51301 2.02111 5.62001 2.26811L7.27001 5.95211V5.96111C7.35201 6.15011 7.38601 6.35711 7.36901 6.56311C7.35201 6.76911 7.28401 6.96711 7.17101 7.14011C7.15701 7.16111 7.14201 7.18011 7.12701 7.20011L5.50001 9.12811C6.08501 10.3171 7.32901 11.5501 8.53401 12.1371L10.435 10.5191C10.454 10.5031 10.473 10.4881 10.494 10.4751C10.667 10.3601 10.866 10.2891 11.072 10.2701C11.279 10.2511 11.488 10.2841 11.679 10.3661L11.689 10.3701L15.37 12.0201C15.617 12.1261 15.824 12.3111 15.959 12.5451C16.093 12.7791 16.148 13.0501 16.116 13.3181ZM14.875 13.1621C14.875 13.1621 14.87 13.1621 14.866 13.1621L11.195 11.5171L9.29201 13.1351C9.27401 13.1511 9.25401 13.1651 9.23401 13.1791C9.05501 13.2991 8.84701 13.3701 8.63101 13.3861C8.41501 13.4011 8.19901 13.3611 8.00401 13.2681C6.54101 12.5611 5.08201 11.1131 4.37401 9.66611C4.28101 9.47211 4.23801 9.25711 4.25201 9.04211C4.26601 8.82711 4.33501 8.61911 4.45201 8.43911C4.46601 8.41811 4.48001 8.39811 4.49701 8.37911L6.12501 6.44811L4.48401 2.77711C4.48401 2.77311 4.48401 2.77011 4.48401 2.76711C3.72701 2.86611 3.03101 3.23811 2.52801 3.81211C2.02501 4.38711 1.74801 5.12611 1.75001 5.89011C1.75301 8.54111 2.80701 11.0831 4.68201 12.9581C6.55701 14.8321 9.09901 15.8871 11.75 15.8901C12.514 15.8931 13.252 15.6171 13.827 15.1151C14.402 14.6121 14.775 13.9181 14.875 13.1611V13.1621Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_2581">
                            <rect
                              width="17"
                              height="17"
                              fill="white"
                              transform="translate(0 0.640137)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="font-[400] text-[12px] md:text-[14px]">
                        {gym.contactNumber}
                      </span>
                    </div>
                    <div className="flex items-center text-[#DCDCDC] gap-3">
                      <svg
                        width="14"
                        height="19"
                        viewBox="0 0 14 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_2586)">
                          <path
                            d="M7 4.43994C6.382 4.43994 5.778 4.62294 5.264 4.96694C4.75 5.30994 4.349 5.79794 4.113 6.36894C3.876 6.93994 3.814 7.56794 3.935 8.17494C4.056 8.78094 4.353 9.33794 4.79 9.77494C5.227 10.2119 5.784 10.5089 6.39 10.6299C6.997 10.7499 7.625 10.6889 8.196 10.4519C8.767 10.2159 9.255 9.81494 9.598 9.30094C9.942 8.78694 10.125 8.18294 10.125 7.56494C10.125 6.73594 9.796 5.94094 9.21 5.35494C8.624 4.76894 7.829 4.43994 7 4.43994ZM7 9.43994C6.629 9.43994 6.267 9.32994 5.958 9.12394C5.65 8.91794 5.41 8.62494 5.268 8.28294C5.126 7.93994 5.089 7.56294 5.161 7.19894C5.233 6.83494 5.412 6.50094 5.674 6.23894C5.936 5.97694 6.27 5.79794 6.634 5.72594C6.998 5.65394 7.375 5.69094 7.718 5.83294C8.06 5.97494 8.353 6.21494 8.559 6.52294C8.765 6.83194 8.875 7.19394 8.875 7.56494C8.875 8.06194 8.677 8.53894 8.326 8.89094C7.974 9.24194 7.497 9.43994 7 9.43994ZM7 0.689941C5.177 0.691941 3.43 1.41694 2.141 2.70594C0.852 3.99494 0.127 5.74194 0.125 7.56494C0.125 10.0179 1.259 12.6179 3.406 15.0849C4.371 16.1989 5.457 17.2029 6.645 18.0769C6.75 18.1499 6.875 18.1899 7.003 18.1899C7.131 18.1899 7.257 18.1499 7.362 18.0769C8.547 17.2019 9.631 16.1989 10.594 15.0849C12.738 12.6179 13.875 10.0179 13.875 7.56494C13.873 5.74194 13.148 3.99494 11.859 2.70594C10.57 1.41694 8.823 0.691941 7 0.689941ZM7 16.7839C5.709 15.7679 1.375 12.0379 1.375 7.56494C1.375 6.07294 1.968 4.64194 3.023 3.58794C4.077 2.53294 5.508 1.93994 7 1.93994C8.492 1.93994 9.923 2.53294 10.977 3.58794C12.032 4.64194 12.625 6.07294 12.625 7.56494C12.625 12.0359 8.291 15.7679 7 16.7839Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_2586">
                            <rect
                              width="14"
                              height="18"
                              fill="white"
                              transform="translate(0 0.439941)"
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <span className="font-[400] text-xs md:text-[14px]">
                        {gym.address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Location;
