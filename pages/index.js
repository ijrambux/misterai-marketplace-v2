import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FloatingButton from "../components/FloatingButton";
import "../styles/home.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  // تحميل البيانات من ملف JSON
  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch(() => console.log("Error loading products"));
  }, []);

  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="title">MisterAI Marketplace</h1>
        <p className="subtitle">بيع وشراء — نشر مجاني عبر التلغرام</p>

        <a
          href="https://t.me/YOUR_TELEGRAM_USERNAME"
          target="_blank"
          className="hero-btn"
        >
          أرسل معلومات منتجك للنشر مجاناً
        </a>
      </div>

      <div className="product-section">
        <h2 className="section-title">المنتجات الجديدة</h2>

        <div className="product-grid">
          {products.length > 0 ? (
            products.map((p, i) => <ProductCard key={i} product={p} />)
          ) : (
            <p className="loading">جاري تحميل المنتجات...</p>
          )}
        </div>
      </div>

      <FloatingButton />
    </div>
  );
}
