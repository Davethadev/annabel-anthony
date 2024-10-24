import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full h-auto pt-12">
      <div className="lg:flex items-center justify-between w-[90%] lg:max-w-[77.5%] mx-auto space-y-8 lg:space-y-0">
        <div className="space-y-4">
          <h2 className="font-satoshi font-bold text-white text-xl lg:text-4xl">
            Hi, I&apos;m Annabel Anthony!👋🏻
          </h2>
          <p className="font-satoshi font-normal text-white text-lg leading-relaxed">
            a UI/UX designer based in Lagos, Nigeria. With over{" "}
            <br className="hidden lg:block" /> a year of experience, I&apos;m
            passionate about designing <br className="hidden lg:block" />{" "}
            impactful, user-centric products. <br className="hidden lg:block" />
            Got a project in mind?
          </p>
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
        <div>
          <Image
            src={"/assets/images/annabel-2.png"}
            alt=""
            width={510}
            height={610}
            style={{margin: "0 auto"}}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
