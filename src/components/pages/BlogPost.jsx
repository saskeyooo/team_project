import { Worksans } from "../fonts/Worksans";
import { Blogcards } from "../blog-post/Blogcards";

export const BlogPost = ({ articles }) => {
  return (
    <main>
      <div className="container m-auto pt-[100px] pb-[100px] flex justify-center ">
        <div className="px-20 w-full h-auto flex flex-col gap-4 ">
          <div className="font-semibold flex text-[24px]">
            <Worksans text={"All characters"} />
          </div>
          <div className="flex  flex-wrap gap-6 justify-between">
            {articles.map((article) => {
              return (
                <Blogcards
                  postImg={article?.cover_image}
                  description={article.description}
                  userName={article.user.name}
                  tag={article.tag_list[0]}
                  title={article.title}
                  date={article.readable_publish_date}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
