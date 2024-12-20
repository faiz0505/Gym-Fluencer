import React from "react";
const Navbar = () => {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    {
      title: "Our Services",
      subLinks: [
        { title: "Our Services", href: "/" },
        { title: "href 1", href: "/" },
        { title: "href 2", href: "/" },
        { title: "href 3", href: "/" },
      ],
    },
    { title: "Benifits", href: "/benifits" },
    { title: "Blogs", href: "/blogs" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <nav className="flex items-center justify-between gap-3 w-[1100px] bg-[#0F0F0FA6] absolute left-1/2 -translate-x-1/2 top-5 rounded-[50px] p-3 z-50 backdrop-blur-lg">
      <div className="">
        <img src="../src/assets/logo.svg" alt="logo" />
      </div>
      <ul className="flex text-[#96979C] gap-5 font-[500]">
        {navLinks.map((link) => {
          return !link.subLinks ? (
            <li key={link.href}>{link.title}</li>
          ) : (
            <select
              key={link.title}
              name=""
              id=""
              defaultValue={"Our Services"}
              className="outline-none bg-transparent"
            >
              {link.subLinks.map((subLink, i) => {
                return (
                  <option key={subLink.title} className="">
                    {subLink.title}
                  </option>
                );
              })}
            </select>
          );
        })}
      </ul>
      <button className="outline-none border-none bg-[#EB0000] py-[14px] px-[28px] rounded-[53px] text-white font-[500]">
        Join Us Now
      </button>
    </nav>
  );
};
export default Navbar;
