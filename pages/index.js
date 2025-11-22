export default function Home() {
  return (
    <div style={{
      maxWidth: "900px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial",
    }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        MisterAI Marketplace
      </h1>

      <div style={{
        display: "flex",
        gap: "20px",
        alignItems: "flex-start"
      }}>
        <img 
          src="/products/xiaomi-redmi-12-1.webp"
          alt="Xiaomi Redmi 12"
          style={{
            width: "300px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
          }}
        />

        <div>
          <h2 style={{ marginBottom: "10px" }}>Xiaomi Redmi 12</h2>
          <p style={{ fontSize: "18px" }}>
            هاتف ممتاز من شاومي لمحبّي الأداء الممتاز بالسعر المعقول.
          </p>

          <a 
            href="/product/redmi12"
            style={{
              marginTop: "20px",
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
              textDecoration: "none"
            }}
          >
            عرض التفاصيل
          </a>
        </div>
      </div>
    </div>
  );
}
