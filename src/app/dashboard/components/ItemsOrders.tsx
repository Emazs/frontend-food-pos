export const ItemsOrders = ({
  title,
  url,
  dishes,
}: {
  title: string;
  url: string;
  dishes: string;
}) => {
  return (
    <div className="w-full flex items-start gap-3">
      <img src={url} alt="" className="w-[50px] rounded-[100%]" />
      <div>
        <h2 className="max-w-[150px] truncate text-[14px]">{title}</h2>
        <p className="text-[#ABBBC2] text-[12px]">{`${dishes} platos ordenados`}</p>
      </div>
    </div>
  );
};
