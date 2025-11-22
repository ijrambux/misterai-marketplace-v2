export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "'Poppins', sans-serif",
        color: "white",
        background: "linear-gradient(-45deg, #006233, #ffffff, #d60000, #006233)",
        backgroundSize: "400% 400%",
        animation: "moveBg 8s ease infinite",
      }}
    >

      <style jsx>{`
        @keyframes moveBg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .glass {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.15);
          border-radius: 18px;
          padding: 25px 35px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: 0.2s;
        }

        .glass:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-4px);
        }

        .btn-glass {
          padding: 14px 26px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(10px);
          font-size: 18px;
          color: white;
          cursor: pointer;
          margin-top: 15px;
          transition: 0.2s;
          text-decoration: none;
          display: inline-block;
        }

        .btn-glass:hover {
          background: rgba(255, 255, 255, 0.35);
          transform: scale(1.05);
        }
      `}</style>

      <h1 style={{ fontSize: "45px", fontWeight: "bold", marginBottom: "30px" }}>
        🇩🇿 MisterAI Marketplace
      </h1>

      <div className="glass" style={{ maxWidth: "650px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
          هاتف Xiaomi Redmi 12
        </h2>

        <img
          src="/products/xiaomi-redmi-12-1.webp"
          style={{
            width: "260px",
            borderRadius: "15px",
            boxShadow: "0 5px 18px rgba(0,0,0,0.4)",
            marginBottom: "15px",
          }}
        />

        <p style={{ fontSize: "18px", marginBottom: "18px" }}>
          أداء ممتاز، بطارية قوية، شاشة محترمة… وسعر اقتصادي!
        </p>

        <a href="/product/1" className="btn-glass">
          عرض التفاصيل
        </a>
      </div>
    </div>
  );
}
