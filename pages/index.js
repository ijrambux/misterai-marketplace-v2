import products from "../products.json";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">MisterAI Marketplace</h1>

      <div className="grid">
        {products.map((p) => (
          <a key={p.id} className="card" href={`/product/${p.id}`}>
            <img src={p.image} alt={p.name} className="product-img" />
            <h3>{p.name}</h3>
            <p className="price">{p.price} دج</p>
          </a>
        ))}
      </div>
    </div>
  );
}
