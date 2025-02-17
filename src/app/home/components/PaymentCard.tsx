export const PaymentCard = ({
  img,
  title,
  methPayment,
  setMethPayment,
}: {
  img: JSX.Element
  title: string;
  methPayment: string;
  setMethPayment: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div
      onClick={() => setMethPayment(title)}
      className={`w-[30%] hover:scale-110 cursor-pointer ${
        methPayment.toLowerCase() != title.toLowerCase()
          ? "border-gray "
          : "border-orange"
      } border border-gray p-2 rounded-lg flex flex-col justify-center items-center`}
    >
      {img}
      <p className="text-center text-[14px]">{title}</p>
    </div>
  );
};
