import { BlogPost } from "./BlogPost";
import { Carasoul } from "../carousel/Carousel";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Trending } from "../trending/Trending";
import { useEffect, useState } from "react";

export const Homepage = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=9&page=${page}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const handleClickLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(articles, "ajillah");

  return (
    <div className=" ">
      <Header />
      <Carasoul />
      <Trending />
      <BlogPost articles={articles} handleClickLoadMore={handleClickLoadMore} />
      <Footer />
    </div>
  );
};
