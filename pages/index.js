import productsData from "../products.json";

export default function Home() {
  const products = productsData.products;

  return (
    <div className="container">
      <h1 className="title">MisterAI Marketplace</h1>

      <div className="grid">
        {products.map((product) => (
          <a key={product.id} href={`/product/${product.id}`} className="card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p className="price">{product.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
