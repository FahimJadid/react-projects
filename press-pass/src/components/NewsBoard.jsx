import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      import.meta.env.VITE_APP_NEWS_API_KEY
    }`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.articles);
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge text-bg-primary">News</span>
        {articles.map((news, index) => {
          return <NewsItem values={news} key={index} />;
        })}
      </h2>
    </div>
  );
};

export default NewsBoard;
