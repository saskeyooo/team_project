import { Worksans } from "../fonts/Worksans";
import { Trendingcards } from "./Trendingcards";

export const Trending = () => {
  return (
    <main>
      <div className="container m-auto pt-[100px]">
        <div className="px-20 flex flex-col gap-4">
          <div className="font-semibold text-[24px]">
            <Worksans text={"Trending"} />
          </div>
          <div className="flex justify-between">
            <Trendingcards />
            <Trendingcards />
            <Trendingcards />
            <Trendingcards />
          </div>
        </div>
      </div>
    </main>
  );
};
