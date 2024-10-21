import Image from "next/image";
import SkillCard from "./SkillCard";
import { skills, tools } from "../constants";

const SkillsAndTools = () => {
  return (
    <div id="skills" className="w-full pt-20">
      <h2 className="font-satoshi font-semibold text-white text-xl lg:text-4xl text-center leading-tight">
        Skills and tools I use to{" "}
        <span className="text-primary font-bold">design</span> <br />
        user-centric products
      </h2>
      <div className="w-[90%] mx-auto mt-16 bg-primary rounded-t-2xl p-2 lg:p-16 lg:grid grid-cols-3 gap-2">
        <div className="grid grid-cols-1 gap-2 w-full">
          {skills.slice(0, 2).map((skill, index) => {
            const { name, description } = skill;
            return (
              <SkillCard key={index} name={name} description={description} />
            );
          })}
        </div>
        <div>
          <article className="space-y-2 bg-raisin_black p-4 lg:p-8 rounded-2xl w-full h-fit mt-2 lg:mt-0">
            <h3 className="font-satoshi font-bold text-white text-lg lg:text-2xl">
              Collaboration
            </h3>
            <p className="font-satoshi font-normal text-sm text-white">
              Leveraging teamwork and open communication, I collaborate
              seamlessly with clients and stakeholders to bring design visions
              to life.
            </p>
            <p className="font-satoshi font-normal text-sm text-white">
              This collaborative approach ensures that every project benefits
              from diverse perspectives and expertise, resulting in more
              impactful and user-centered outcomes
            </p>
          </article>
          <div className="flex items-center justify-center gap-2 mt-2">
            {tools.map((tool, index) => {
              const { name, logo } = tool;
              return (
                <div
                  key={index}
                  className="w-36 h-24 rounded-2xl bg-raisin_black flex items-center justify-center relative"
                >
                  <Image
                    src={logo}
                    alt=""
                    width={24}
                    height={24}
                    className={`${index === 0 ? "w-20 h-20" : "w-14 h-14"}`}
                  />
                  <span className="font-satoshi font-normal text-sm text-white absolute right-2 bottom-2">
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 w-full mt-2 lg:mt-0">
          {skills.slice(2, 4).map((skill, index) => {
            const { name, description } = skill;
            return (
              <SkillCard key={index} name={name} description={description} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsAndTools;
