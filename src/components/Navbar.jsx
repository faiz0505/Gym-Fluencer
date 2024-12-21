import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/aboutus" },
    {
      title: "Our Services",
      subLinks: [
        { title: "Our Services", href: "#ourservices" },
        { title: "Service 1", href: "#service1" },
        { title: "Service 2", href: "#service2" },
        { title: "Service 3", href: "#service3" },
        { title: "Service 4", href: "#service4" },
      ],
    },
    { title: "Benifits", href: "#benifits" },
    { title: "Blogs", href: "#blogs" },
    { title: "Contact", href: "/contactus" },
  ];
  const toggleMenu = () => {
    setIsMenuOpen((pre) => !pre);
  };
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between gap-y-6 gap-3 w-[95%] lg:w-[1100px] bg-[#0F0F0FA6] absolute left-1/2 -translate-x-1/2 top-5 rounded-[50px] p-3 z-50 backdrop-blur-lg">
      <div className="flex md:flex-none md:w-auto justify-between w-full">
        <img src="/assets/logo.svg" alt="logo" />
        <button
          onClick={() => toggleMenu()}
          className="outline-none border-none bg-[#EB0000] rounded-[53px] text-white font-[500] md:hidden h-12 w-12 rotate-90 text-2xl"
        >
          |||
        </button>
      </div>
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex text-[#96979C] gap-5 font-[500] items-center md:items-start flex-col md:flex-row gap-y-8`}
      >
        {navLinks.map((link) => {
          return !link.subLinks ? (
            <li key={link.href}>
              {link.href.includes("#") ? (
                <a href={link.href}>{link.title}</a>
              ) : (
                <Link to={link.href}>{link.title}</Link>
              )}
            </li>
          ) : (
            <select
              key={link.title}
              name=""
              id=""
              defaultValue={"Our Services"}
              className="outline-none bg-transparent border-none"
            >
              {link.subLinks.map((subLink, i) => {
                return (
                  <option
                    key={subLink.title}
                    className="bg-[#0F0F0FA6] backdrop-blur-sm px-3"
                    value={subLink.title}
                  >
                    <a href={subLink.href}>{subLink.title}</a>
                  </option>
                );
              })}
            </select>
          );
        })}
      </ul>
      <button
        className={`outline-none border-none bg-[#EB0000] py-[14px] px-[28px] rounded-[53px] text-white font-[500] mt-5 md:mt-0 ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        Join Us Now
      </button>
    </nav>
  );
};
export default Navbar;
