import { Badges } from "./Badges";
export const Carasoul = () => {
  return (
    <main className="">
      <div className="container m-auto relative pt-[100px] flex ">
        <div className="px-20 w-full h-auto flex ">
          <div className="flex  items-end ">
            <div className="flex flex-col border border-solid rounded-xl bg-white absolute p-[40px] gap-4 lg:w-[598px] m-3 ">
              <div className="flex flex-col xl:gap-4 lg:gap-2 items-start justify-start ">
                <div className="w-full flex justify-start">
                  <Badges className="text-[14px] flex" text={"Movie"} />
                </div>
                <h1 className="font-workSans text-[#181A2A] font-semibold xl:text-4xl lg-2xl">
                  Legend of the Fuyao
                </h1>
              </div>
              <p className="font-workSans text-[#97989F] lg:text-[16px]">
                2018 Romace 1 season
              </p>
            </div>
            <img src="./puyao.jpg" className="rounded-xl " />
          </div>
        </div>
      </div>
    </main>
  );
};
