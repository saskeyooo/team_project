import { Badges } from "../carousel/Badges";
import { Badges1 } from "../carousel/Badges1";
import { Worksans } from "../fonts/Worksans";

export const Blogcards = ({ postImg, tag, title, date, description }) => {
  return (
    <main>
      <div className="m-auto flex lg:max-w-[398px] lg:max-h-[500px]">
        <div className=" py-3 gap-4 flex-col flex border-solid border-[1px] border-[#E8E8EA] rounded-3xl  p-3">
          <div className="flex flex-col ">
            <img
              src={`${postImg}`}
              className="w-[392px] h-[250px] rounded-xl pb-[10px] object-cover"
            />

            <div className="flex py-[10px]">
              <Badges1 text={`${tag}`} />
            </div>
            <div className="text-[22px] font-workSans font-semibold items-center flex ">
              <Worksans text={`${description}`} />
            </div>
          </div>
          <div className="text-[#97989F] text-[16px] font-workSans font-light pb-4 ">
            <Worksans text={`${date}`} />
          </div>
        </div>
      </div>
    </main>
  );
};
