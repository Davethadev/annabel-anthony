import Image from "next/image";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-primary w-48 lg:w-96 h-8 lg:h-14 mx-auto rounded-b-2xl grid grid-cols-1 place-content-center place-items-center text-black text-base font-satoshi font-bold">
        Contact me
      </div>
      <div className="lg:flex items-center justify-between w-[90%] mx-auto pt-8 pb-12 relative">
        <div className="space-y-2">
          <h3 className="font-satoshi font-semibold text-lg text-white">
            Ready to elevate your project?
          </h3>
          <p className="font-satoshi font-extralight text-base text-white">
            Let&apos;s connect and let&apos;s make magic <br /> happen!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 place-items-center mt-6 lg:mt-0">
          {socials.map((social, index) => {
            return (
              <span
                key={index}
                className="bg-raisin_black w-16 h-12 rounded-xl p-3 flex justify-center items-center"
              >
                <Image
                  src={social}
                  alt=""
                  height={26}
                  width={26}
                  className="w-auto h-auto"
                />
              </span>
            );
          })}
        </div>
        <a
          href="#top"
          className="font-satoshi font-light text-bright_gray text-sm absolute right-2 bottom-2 flex items-center gap-2"
        >
          Back to top
          <Image
            src={"/assets/arrow-up.svg"}
            alt=""
            height={14}
            width={12}
            className="w-3 h-4"
            style={{ width: "auto", height: "auto" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
