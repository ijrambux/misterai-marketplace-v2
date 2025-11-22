import { useRouter } from "next/router";
import productsData from "../../products.json";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const product = productsData.products.find((item) => item.id === id);

  if (!product) {
    return <h1 style={{ textAlign: "center", marginTop: "50px" }}>المنتج غير موجود</h1>;
  }

  const handleContact = async () => {
    await fetch("/api/sendToTelegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `🚨 تطوير جديد  
المنتج: ${product.title}  
السعر: ${product.price}  
الشاري يريد التواصل.`
      })
    });
    alert("تم إرسال طلبك بنجاح، سيتواصل معك صاحب المتجر.");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h1 style={{ marginTop: "20px" }}>{product.title}</h1>

      <p style={{ fontSize: "20px", color: "green" }}>{product.price}</p>

      <p style={{ marginTop: "10px" }}>{product.description}</p>

      <button
        onClick={handleContact}
        style={{
          padding: "12px 20px",
          marginTop: "20px",
          background: "#0088cc",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          width: "100%"
        }}
      >
        تواصل مع البائع
      </button>
    </div>
  );
}
