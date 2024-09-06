import { Badges } from "../carousel/Badges";
import { Worksans } from "../fonts/Worksans";

export const Trendingcards = () => {
  return (
    <div
      className="flex items-end w-[290px] h-[320px] rounded-xl bg-cover bg-center "
      style={{
        backgroundImage: `${""} url('./zuzarg1.jpeg')`,
      }}
    >
      <div className="flex flex-col gap-4  p-7">
        <div className="flex m-auto">
          <Badges />
        </div>
        <div className="text-white text-[16px] font-semibold">
          <Worksans
            text={
              "The Impact of Technology on the Workplace: How Technology is Changing"
            }
          />
        </div>
      </div>
    </div>
  );
};
