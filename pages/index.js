import Link from "next/link";
import products from "../products.json";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="matrix-bg">
      <h1 className="title">MisterAI Marketplace 2025</h1>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.title} className="product-img" />

            <h2>{p.title}</h2>
            <p className="price">{p.price}</p>

            <Link href={`/product/${p.id}`}>
              <button className="glass-btn">التفاصيل</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
