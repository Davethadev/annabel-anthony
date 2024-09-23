import Image from "next/image";

const Projects = () => {
  return (
    <div id="projects" className="w-full pt-20">
      <div className="w-full lg:w-[80%] mx-auto px-4 lg:px-0">
        <h2 className="font-satoshi font-semibold text-white text-xl lg:text-4xl text-center leading-tight">
          A peek at some of the projects I&apos;ve <br /> had my hands on so
          far.
        </h2>
        <div
          id="projects"
          className="lg:flex items-center gap-3 pt-16 w-full h-auto lg:h-[956px]"
        >
          <div className="relative h-full w-[85%] mx-auto lg:w-[32.5%]">
            <article className="bg-raisin_black rounded-2xl pt-6 px-6 pb-0 mb-3 lg:mb-0 space-y-4 h-max w-full relative lg:absolute top-0 left-0 qr-card">
              <h4 className="font-satoshi font-semibold text-base text-white">
                QR Pass
              </h4>
              <a
                href="https://www.figma.com/proto/dhoLuCx0SVL0aQJPpCFFy8/Event-App-2024?page-id=0%3A1&node-id=95-303&viewport=-2674%2C2357%2C0.49&t=zW5Q64FKKGZ507gn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A9&fuid=1156357081290655558"
                className="text-xs text-white font-satoshi font-normal underline block"
              >
                Click to view
              </a>
              <p className="font-satoshi font-medium text-white text-lg">
                Event invite QR Scanner simplifies <br /> invite for event
                organizers.
              </p>

              <small className="font-satoshi font-extralight text-white text-xs h-0 overflow-hidden block transition-all duration-500 ease-in-out">
                This app is designed to streamline the invitation process for
                events. It allows event organisers to generate unique QR codes
                for each invitee, which can be scanned upon entry to verify if
                the guest is invited.
              </small>
              <Image
                src={"/assets/images/qr-pass.png"}
                alt=""
                width={294}
                height={214}
                className="w-auto qr-img pb-0 mx-auto"
              />
            </article>
            <article className="bg-primary h-max w-full rounded-2xl pt-6 px-6 pb-3 space-y-4 relative lg:absolute bottom-0 left-0 spenda-card">
              <h4 className="font-satoshi font-semibold text-base text-black">
                Spenda
              </h4>
              <a
                href="https://spenda.ng/"
                className="text-xs text-black font-satoshi font-normal underline block"
              >
                Click to view
              </a>
              <p className="font-satoshi font-medium text-black text-lg">
                Track your spending and map your <br /> financial future
                effortlessly.
              </p>

              <small className="font-satoshi font-extralight text-black text-xs h-0 overflow-hidden block transition-all duration-500 ease-in-out">
                Using Spenda, tracking your spending becomes the first step to
                organising your finances. By understanding where your money goes
                and the cost of items, you can pinpoint exactly where your cash
                is spent and identify areas to cut back.
              </small>
              <Image
                src={"/assets/images/spenda.png"}
                alt=""
                width={340}
                height={256}
                className="ml-auto w-auto spenda-img"
              />
            </article>
          </div>
          <div className="relative h-full w-[85%] mx-auto lg:w-[67.5%]">
            <article className="bg-charleston_green h-max w-full rounded-2xl pt-6 px-6 pb-0 space-y-4 mt-3 lg:mt-0 relative lg:absolute top-0 right-0 kukusend-card">
              <div className="flex items-center gap-2">
                <h4 className="font-satoshi font-semibold text-base text-white">
                  Kukusend
                </h4>
                <Image
                  src={"/assets/kukusend-logo.svg"}
                  alt=""
                  width={22}
                  height={20}
                  className="w-auto"
                />
              </div>
              <a
                href="https://kukusend.com/"
                className="text-xs text-white font-satoshi font-normal underline block"
              >
                Click to view
              </a>
              <p className="font-satoshi font-medium text-white text-lg">
                Seamless cross-border payments from Nigeria <br /> to the world!
              </p>

              <small className="font-satoshi font-extralight text-white text-xs h-0 overflow-hidden block transition-all duration-500 ease-in-out">
                KukuSend is a cutting-edge cross-border payment platform that
                allows you to send <br /> and receive money globally in
                different currencies, making international transactions <br />{" "}
                seamless and secure.
              </small>
              <Image
                src={"/assets/images/kukusend.png"}
                alt=""
                width={620}
                height={330}
                className="w-full pb-0 kukusend-img"
              />
            </article>
            <article className="bg-bright_gray h-max w-full rounded-2xl pt-6 px-6 pb-3 space-y-4 mt-3 relative lg:absolute bottom-0 right-0 lg:mt-0 ridepay-card">
              <h4 className="font-satoshi font-semibold text-base text-black">
                Ridepay
              </h4>
              <a
                href="https://ridepay.ng/"
                className="text-xs text-black font-satoshi font-normal underline block"
              >
                Click to view
              </a>

              <p className="font-satoshi font-medium text-black text-lg">
                Effortless ride payments made easy with a four-digit <br />{" "}
                code!
              </p>

              <small className="font-satoshi font-extralight text-black text-xs h-0 overflow-hidden block transition-all duration-500 ease-in-out">
                Revolutionising the way you pay for transportation. Our online
                platform lets you <br /> handle payments effortlessly using a
                four-digit code, eliminating the need for <br /> account
                numbers.
              </small>
              <Image
                src={"/assets/images/ridepay.png"}
                alt=""
                width={520}
                height={370}
                className="ml-auto w-auto hidden ridepay-image"
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
