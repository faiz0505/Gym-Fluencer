import React from "react";

const Services = () => {
  const services = [
    { title: "Servive 1", src: "../src/assets/service.png" },
    { title: "Servive 2", src: "../src/assets/service.png" },
    { title: "Servive 3", src: "../src/assets/service.png" },
    { title: "Servive 4", src: "../src/assets/service.png" },
    { title: "Servive 5", src: "../src/assets/service.png" },
  ];
  return (
    <section className="w-full min-h-screen py-10">
      <h2 className="font-[900] text-[#EB0000] text-center text-[36px] leading-[1.05] ">
        Our services
      </h2>
      <p className="font-[400] text-[20px] text-[#EFEFEF] text-center mt-4">
        GymFluencer offers 5 essential services to help you <br />
        achieve your fitness goals with ease and flexibility.
      </p>
      <div className="grid grid-cols-5 mt-16">
        {services.map((service) => {
          return (
            <figure key={service.title}>
              <img src={service.src} alt={service.title} />
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
