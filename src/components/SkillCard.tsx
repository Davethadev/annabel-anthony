const SkillCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <article className="space-y-2 bg-raisin_black p-4 lg:p-8 rounded-xl">
      <h3 className="font-satoshi font-bold text-white text-lg lg:text-2xl">
        {name}
      </h3>
      <p className="font-satoshi font-normal text-sm text-white">
        {description}
      </p>
    </article>
  );
};

export default SkillCard;
