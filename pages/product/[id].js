import products from "../../products.json";

export default function ProductPage({ product }) {
  if (!product) return <h1>المنتج غير موجود</h1>;

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "350px",
          marginTop: "20px",
          borderRadius: "14px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        }}
      />

      <p style={{ marginTop: "25px", fontSize: "18px", color: "#444" }}>
        {product.description}
      </p>

      <h2 style={{ marginTop: "20px", fontSize: "26px", fontWeight: "600" }}>
        السعر: {product.price} دج
      </h2>

      <a
        href="https://t.me/misteraidz_bot"
        style={{
          marginTop: "30px",
          display: "inline-block",
          padding: "12px 25px",
          background: "green",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        شراء الآن
      </a>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const product = products.find((p) => p.id == params.id) || null;

  return {
    props: { product },
  };
}
