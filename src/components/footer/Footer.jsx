import { Worksans } from "../fonts/Worksans";
import { Fbicon } from "../svg/Fbicon";
import { Igicon } from "../svg/Igicon";
import { Inicon } from "../svg/Inicon";
import { Metta1 } from "../svg/Metta1";
import { Twittericon } from "../svg/Twittericon";
import { Divider } from "../svg/Divider";

export const Footer = () => {
  return (
    <main className="bg-[#F4F4F5] w-full  ">
      <div className="container m-auto  flex   ">
        <div className="w-full  h-auto flex flex-col gap-[20px] py-[64px] px-20 bg-[#F4F4F5]">
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col lg:max-w-[290px] gap-[10px]">
              <div className="text-[18px] font-workSans font-semibold">
                About
              </div>
              <div className="flex flex-col gap-[24px]">
                <div className="text-[16px] font-workSans font-light text-[#696A75]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </div>
                <div className="flex flex-col text-[16px] font-workSans  text-[#3B3C4A]">
                  <p>Email : info@jstemplate.net</p>
                  <p>Phone : 880 123 456 789</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] text-[16px] font-workSans font-light text-[#3B3C4A] lg:min-w-[290px] ">
              <p>Home</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
            <div className="flex gap-[20px]">
              <Fbicon />
              <Igicon />
              <Twittericon />
              <Inicon />
            </div>
          </div>
          <div className="flex justify-between  flex-row border-t-[0.5px] border-solid border-[#DCDDDF] pt-[20px]">
            <Metta1 />
            <div className="flex gap-[16px] font-workSans font-light text-[16px] text-[#3B3C4A] items-center">
              <p>Terms of Use</p>
              <Divider />
              <p>Privacy Policy </p>
              <Divider />
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
