"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "/assets/images/qr-pass-hero.png",
    "/assets/images/kukusend.png",
    "/assets/images/hr-desk.png",
  ];

  const [isImageVisible, setIsImageVisible] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsImageVisible(false);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsImageVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="text-center px-4 lg:px-0 pt-12 h-auto space-y-3">
      <h1 className="font-satoshi font-medium text-white text-2xl lg:text-5xl grid grid-cols-1 place-items-center place-content-center leading-tight gap-0 lg:gap-4">
        <span className="block">I Transform Ideas Into</span>
        <span className="block">
          <span className="text-primary font-semibold">Designs</span> to Solve
          Real-life Problems
        </span>
      </h1>
      <small className="font-satoshi font-thin text-bright_gray text-sm lg:text-lg block">
        Designing seamless interactions one product at a time
      </small>
      <a
        href="mailto:anthonyannabel16@gmail.com"
        className="block w-48 mx-auto h-8 bg-primary rounded-3xl relative overflow-hidden font-satoshi font-medium text-black text-sm hover:text-white contact-me-btn"
      >
        <span className="w-[10%] h-full rounded-r-2xl bg-raisin_black block"></span>
        <span className="absolute z-10 right-0 left-0 top-1.5 text-center">
          Contact me for jobs
        </span>
      </a>
      <div className="pt-8">
        <Image
          src={images[currentImageIndex]}
          alt=""
          width={620}
          height={580}
          className={`mx-auto fade ${isImageVisible ? "visible" : ""}`}
        />
      </div>
    </div>
  );
};

export default Hero;
