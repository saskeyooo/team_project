import Link from "next/link";
import { HeaderButton } from "./HeaderButton";
import { HeaderSearchIcon } from "./HeaderSearchIcon";
import { Metta } from "./Metta";

export const Header = () => {
  return (
    <main>
      <div className="py-8 container m-auto  flex justify-center">
        <div className="w-full px-20">
          <div className="flex items-center justify-between ">
            <div>
              <Metta />
            </div>
            <div className="flex justify-center items-center gap-10">
              <Link href={"/"}>
                <HeaderButton text={"Home"} />
              </Link>
              <Link href="/blog-post">
                <HeaderButton text={"Blog"} />
              </Link>
              <Link href={"/contact"}>
                <HeaderButton text={"Contact"} />
              </Link>
            </div>
            <div className="flex items-center bg-[#F4F4F5] p-2 rounded-[5px]">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#F4F4F5] rounded-[5px] font-inter"
              />
              <HeaderSearchIcon />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
