import React from "react";

const Services = () => {
  const services = [
    { id: "service1", title: "Servive 1", src: "/assets/service.png" },
    { id: "service2", title: "Servive 2", src: "/assets/service.png" },
    { id: "service3", title: "Servive 3", src: "/assets/service.png" },
    { id: "service4", title: "Servive 4", src: "/assets/service.png" },
    { id: "service5", title: "Servive 5", src: "/assets/service.png" },
  ];
  return (
    <section
      className="w-full min-h-screen py-10 px-3 md:px-0"
      id="ourservices"
    >
      <h2 className="font-[900] text-[#EB0000] text-center text-[36px] leading-[1.05] ">
        Our services
      </h2>
      <p className="font-[400] text-[16px] md:text-[20px] text-[#EFEFEF] text-center mt-4">
        GymFluencer offers 5 essential services to help you{" "}
        <br className="hidden md:block" />
        achieve your fitness goals with ease and flexibility.
      </p>
      <div className="grid grid-cols-3 place-items-center md:grid-cols-5 mt-16">
        {services.map((service) => {
          return (
            <figure key={service.id} id={service.id}>
              <img src={service.src} alt={service.title} />
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
