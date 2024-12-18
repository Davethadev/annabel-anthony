"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-30 bg-black">
      <div className="flex items-center justify-between w-[90%] mx-auto py-6 relative">
        <div className="space-y-0.5">
          <p className="font-clashdisplay font-medium text-primary text-base">
            Annabel
          </p>
          <p className="font-clashdisplay font-medium text-primary text-base ml-3">
            Anthony
          </p>
        </div>
        <div
          className={`menu-icon ${
            isActive ? "active" : ""
          } lg:hidden absolute right-0 z-30`}
          onClick={() => setIsActive(!isActive)}
        >
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-5 bg-raisin_black rounded-[40px] px-6 py-2">
          <li>
            <a
              href="#about"
              className="font-satoshi font-normal text-white text-sm hover:text-primary transition duration-500 ease-out"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="font-satoshi font-normal text-white text-sm hover:text-primary transition duration-500 ease-out"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="font-satoshi font-normal text-white text-sm hover:text-primary transition duration-500 ease-out"
            >
              Skills & Tools
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="font-satoshi font-normal text-white text-sm hover:text-primary transition duration-500 ease-out"
            >
              Testimonials
            </a>
          </li>
        </ul>
        <a
          href="mailto:anthonyannabel16@gmail.com"
          className="hidden lg:block w-[120px] h-8 bg-primary rounded-3xl relative overflow-hidden font-satoshi font-medium text-black text-sm hover:text-white contact-me-btn"
        >
          <span className="w-[15%] h-full rounded-r-2xl bg-raisin_black block"></span>
          <span className="absolute z-10 right-0 left-0 top-1.5 text-center">
            Contact me
          </span>
        </a>
      </div>
      {/* MOBILE NAV */}
      <AnimatePresence>
        {isActive && (
          <motion.ul
            initial={{ y: "100vh" }}
            animate={{
              y: 0,
              transition: { ease: "easeInOut", duration: 0.25 },
            }}
            exit={{ y: "100vh" }}
            className={`lg:hidden flex flex-col gap-6 pt-28 fixed inset-0 top-0 right-0 left-0 text-center z-20 bg-black w-full h-[100vh] menu overflow-${
              isActive ? "hidden" : "auto"
            }`}
          >
            <li onClick={() => setIsActive(false)}>
              <a
                href="#about"
                className="font-clashdisplay font-medium text-white text-lg uppercase hover:text-primary transition duration-500 ease-out"
              >
                About me
              </a>
            </li>
            <li onClick={() => setIsActive(false)}>
              <a
                href="#projects"
                className="font-clashdisplay font-medium text-white text-lg uppercase hover:text-primary transition duration-500 ease-out"
              >
                Projects
              </a>
            </li>
            <li onClick={() => setIsActive(false)}>
              <a
                href="#skills"
                className="font-clashdisplay font-medium text-white text-lg uppercase hover:text-primary transition duration-500 ease-out"
              >
                Skills & Tools
              </a>
            </li>
            <li onClick={() => setIsActive(false)}>
              <a
                href="#testimonials"
                className="font-clashdisplay font-medium text-white text-lg uppercase hover:text-primary transition duration-500 ease-out"
              >
                Testimonials
              </a>
            </li>
            <a
              href="mailto:anthonyannabel16@gmail.com"
              className="block w-44 mx-auto h-10 bg-primary rounded-3xl relative overflow-hidden font-clashdisplay font-medium text-black text-lg uppercase hover:text-white contact-me-btn"
            >
              <span className="w-[10%] h-full rounded-r-full bg-raisin_black block"></span>
              <span className="absolute z-10 right-0 left-0 top-1.5 text-center">
                Contact me
              </span>
            </a>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
