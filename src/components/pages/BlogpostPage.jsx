import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { BlogPost } from "./BlogPost";
import { useEffect, useState } from "react";

export const BlogpostPage = () => {
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
  return (
    <main className="">
      <Header />
      <BlogPost handleClickLoadMore={handleClickLoadMore} articles={articles} />
      <Footer />
    </main>
  );
};
