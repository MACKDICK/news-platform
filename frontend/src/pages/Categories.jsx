import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📂 Categorías</h1>

      {categories.map((cat) => (
        <div
          key={cat.id}
          style={{
            border: "1px solid #ddd",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <h3>{cat.name}</h3>
        </div>
      ))}
    </div>
  );
}