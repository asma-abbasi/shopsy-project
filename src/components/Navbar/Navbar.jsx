import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "برند ها",
    link: "/#",
  },
  {
    id: 2,
    name: " آرایشی",
    link: "/#services",
  },
  {
    id: 3,
    name: "عطر و ادکلن",
    link: "/#",
  },
  {
    id: 3,
    name: "مراقبت و زیبایی مو",
    link: "/#",
  },
  {
    id: 3,
    name: "بهداشت شخصی و حمام",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: " مراقبت صورت ",
    link: "/#",
  },
  // {
  //   id: 2,
  //   name: " آبرسان و مرطوب کننده",
  //   link: "/#",
  // },
  // {
  //   id: 3,
  //   name: "سرم پوستی ",
  //   link: "/#",
  // },
];
const faceCare = [
  {
    id: 1,
    name: " ضدآفتاب ",
    link: "/#",
  },
  {
    id: 1,
    name: "آبرسان و مرطوب کننده",
    link: "/#",
  },
  {
    id: 1,
    name: " ماسک صورت",
    link: "/#",
  },
  {
    id: 1,
    name: "اسکراب و لایه بردار صورت ",
    link: "/#",
  },
  {
    id: 1,
    name: " کرم شب و روز ",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="سرچ ..."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 left-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              مراقبت پوستی
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                    {faceCare.map((face) => (
                      <a
                      key={face.id}
                        href={face.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20 text-neutral-500 "
                      >
                        {face.name}
                      </a>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
