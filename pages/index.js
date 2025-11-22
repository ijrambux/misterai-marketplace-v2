import products from "../products.json";
import Link from "next/link";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="background">
      <h1 className="title">MisterAI Marketplace</h1>

      <div className="products">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} className="product-img" />

            <h2>{p.title}</h2>

            <p className="desc">{p.shortDesc}</p>

            <Link href={`/product/${p.id}`} className="btn">
              عرض التفاصيل
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
