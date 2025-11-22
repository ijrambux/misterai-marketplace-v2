import { useRouter } from "next/router";
import products from "../../products.json";
import "../../styles/home.css";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id == id);

  if (!product) return <h1>Produit non trouvé</h1>;

  const sendRequest = async () => {
    await fetch("/api/sendToTelegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });
    alert("تم إرسال طلب المنتج! سنتواصل معك عبر تيليغرام.");
  };

  return (
    <div className="product-page">
      <img src={product.image} className="product-big" />
      <h1>{product.name}</h1>
      <p className="price">{product.price} دج</p>

      <button className="btn" onClick={sendRequest}>
        طلب هذا المنتج
      </button>
    </div>
  );
}
