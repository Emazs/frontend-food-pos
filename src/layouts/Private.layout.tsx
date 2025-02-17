import { Outlet } from "react-router";
import { SideBard } from "../shared/components/SideBard";
import { Header } from "../shared/components/Header";

export const PrivateLayout = () => {
  return (
    <>
      <section className="w-full flex max-[769px]:flex-col bg-blue-bg text-white">
        <Header />
        <SideBard />
        <Outlet />
      </section>
    </>
  );
};
