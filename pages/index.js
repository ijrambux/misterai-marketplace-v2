export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      {/* Header */}
      <h1 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "40px" }}>
        MisterAI Marketplace
      </h1>

      {/* Product Card */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          maxWidth: "1100px",
        }}
      >
        {/* Product Image */}
        <img
          src="/products/xiaomi-redmi-12-1.webp"
          alt="Redmi 12"
          style={{
            width: "380px",
            borderRadius: "14px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
          }}
        />

        {/* Product Info */}
        <div>
          <h2 style={{ fontSize: "32px", fontWeight: "600" }}>
            Xiaomi Redmi 12
          </h2>

          <p
            style={{
              color: "#444",
              fontSize: "18px",
              marginTop: "10px",
              marginBottom: "25px",
            }}
          >
            هاتف ممتاز من شاومي لمحبي الأداء القوي، الشاشة الكبيرة، والسعر
            المميز.
          </p>

          {/* Button */}
          <a
            href="/product/1"
            style={{
              display: "inline-block",
              background: "black",
              color: "white",
              padding: "12px 22px",
              borderRadius: "8px",
              fontSize: "17px",
              textDecoration: "none",
              transition: "0.2s",
            }}
          >
            عرض التفاصيل
          </a>
        </div>
      </div>
    </div>
  );
}
