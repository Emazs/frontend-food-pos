export const ItemSettings = ({
  icon,
  title,
  subTitle,
}: {
  icon: JSX.Element,
  title: string;
  subTitle: string;
}) => {
  return (
    <section className="flex items-start gap-3 hover:cursor-pointer  hover:scale-105 duration-150 ease-in">
      <div className="mt-1">{icon}</div>
      <div>
        <h2 className="max-w-[150px] truncate text-[18px] font-semibold max-[960px]:text-balance max-[960px]:text-[15px]">
          {title}
        </h2>
        <p className="text-[#ABBBC2] text-[14px] max-[960px]:text-[13px]">{subTitle}</p>
      </div>
    </section>
  );
};
