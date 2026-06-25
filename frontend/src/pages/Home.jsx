import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const res = await api.get("/news");
      setNews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>📰 Noticias</h1>

      {news.map((item) => (
        <div key={item.id} style={{ marginBottom: 20 }}>
          <h2>{item.title}</h2>
          <p>{item.summary}</p>

          <Link to={`/news/${item.id}`}>
            Ver detalle →
          </Link>
        </div>
      ))}
    </div>
  );
}