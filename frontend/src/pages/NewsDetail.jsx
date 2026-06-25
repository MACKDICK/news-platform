import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [news, setNews] = useState(null);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    loadNews();
    loadRecommended();
  }, [id]);

  const loadNews = async () => {
    try {
      const res = await api.get(`/news/${id}`);
      setNews(res.data);
    } catch (error) {
      console.log("Error cargando noticia:", error);
    }
  };

  const loadRecommended = async () => {
    try {
      const res = await api.get(`/news/${id}/recommended`);
      setRecommended(res.data);
    } catch (error) {
      console.log("Error cargando recomendadas:", error);
    }
  };

  if (!news) {
    return <p>Cargando noticia...</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      {/* 🔙 volver */}
      <button onClick={() => navigate("/")}>
        ← Volver
      </button>

      {/* 📰 noticia principal */}
      <h1>{news.title}</h1>

      <img
        src={news.image}
        alt={news.title}
        style={{ width: "100%", maxWidth: 600 }}
      />

      <h3>{news.summary}</h3>

      <p>{news.body}</p>

      <small>
        Publicado: {new Date(news.published_at).toLocaleString()}
      </small>

      {/* 🔥 RECOMENDADAS */}
      <hr style={{ margin: "30px 0" }} />

      <h2>📰 Noticias recomendadas</h2>

      {recommended.length === 0 && (
        <p>No hay recomendaciones</p>
      )}

      {recommended.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <h4>{item.title}</h4>
          <p>{item.summary}</p>

          <Link to={`/news/${item.id}`}>
            Ver noticia →
          </Link>
        </div>
      ))}
    </div>
  );
}