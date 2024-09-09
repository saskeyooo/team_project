import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const SinglePostPage = () => {
  const router = useRouter();
  const [article, setArticle] = useState({});
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Header />
      <div className="container m-auto pt-[100px] pb-[100px] flex justify-center">
        <div className="px-20 w-full h-auto flex items-center flex-col">
          <div>
            <div className="text-[36px] font-workSans leading-10 font-semibold ">
              {article.title}
            </div>
            <div className="flex gap-[24px] items-center">
              <div
                className=""
                style={{
                  backgroundImage: `url(${article.user?.profile_image})`,
                  width: "28px",
                  height: "28px",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="text-[14px] text-[#696A75] font-workSans">
                {article?.user?.name}
              </div>
              <div className="text-[14px] text-[#696A75] font-workSans font-light">
                {article?.readable_publish_date}
              </div>
            </div>
            <div
              className="flex justify-center items-center"
              style={{
                background: `url(${article?.cover_image}) no-repeat cover`,
                width: "100%",
                height: "462px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
