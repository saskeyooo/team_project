import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";

export const Contact = () => {
  return (
    <main className="">
      <Header />
      <div className="container m-auto flex justify-center">
        <div className="w-[43%] flex flex-col py-[200px] gap-[40px] ">
          <div div className="  flex flex-col gap-[25px] ">
            <div className="flex flex-col gap-[10px] ">
              <div className="font-workSans font-semibold text-[36px]">
                Contact Us
              </div>
              <div className="font-workSans font-light text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div
                className="flex flex-col border-solid border-[#E8E8EA] w-[280px] 
              h-[120px]  border-[0.5px] rounded-[12px] p-4"
              >
                <p className="font-workSans font-semibold text-[24px] ">
                  Address
                </p>
                <div className="font-work font-light text-[16px] text-[#696A75]">
                  <p>328 Oak Ridge Drive, Saint</p> <p> Louis, Missouri</p>
                </div>
              </div>
              <div
                className="flex flex-col border-[#E8E8EA] w-[280px] 
              h-[120px]  border-[0.5px] rounded-[12px] p-4"
              >
                <p className="font-workSans font-semibold text-[24px]">
                  Contact
                </p>
                <div className="font-work font-light text-[16px] text-[#696A75]">
                  <p>313-332-8662</p> <p>info@email.com</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" flex flex-col gap-[15px] bg-[#F4F4F5] w-[658px] h-[440px] rounded-[10px] p-[30px]
           "
          >
            <div className="flex w-[80%] justify-start flex-col gap-[25px]">
              {" "}
              <div className="font-workSans font-semibold text-[18px]">
                Leave a Message
              </div>
              <div className="flex gap-[80px] justify-between">
                <div className="flex items-center bg-white p-2 rounded-[5px] font-light font-workSans">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="bg-white rounded-[5px] font-inter "
                  />{" "}
                </div>
                <div className="flex items-center bg-white p-2 rounded-[5px] font-light font-workSans">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="bg-white rounded-[5px] font-inter"
                  />{" "}
                </div>
              </div>
              <div className="font-light font-workSans flex items-center bg-white p-2  rounded-[5px]">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="bg-white font-inter"
                />
              </div>
              <div className="font-light font-workSans flex items-center bg-white px-2 py-3 rounded-[5px] pb-[50px] ">
                <input
                  type=""
                  placeholder="Write a message"
                  className="bg-white font-inter pb-[100px] flex"
                />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
