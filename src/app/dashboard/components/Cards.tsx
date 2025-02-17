
export const Cards = ({
  title,
  img,
  percent,
  total,
  imgUp,
}: {
  title: string;
  total: string;
  percent: string;
  img: JSX.Element
  imgUp?: JSX.Element
}) => {
  return (
    <section id="card" className="bg-blue-card-bg flex-1 p-4 rounded-md max-[440px]:text-center">
      <div className="flex gap-4 max-[440px]:justify-center">
        {img}
        <div className="flex gap-2">
          <p className={`${title.includes('Revenue') ? 'text-green' : title.includes('Customer') ? 'text-purple' : 'text-red'}`}>+{percent}%</p>
          {imgUp}
        </div>
      </div>
      <div className="font-bold text-[20px] mt-4">{total}</div>
      <div className="text-[15px] text-gray">{title}</div>
    </section>
  );
};
