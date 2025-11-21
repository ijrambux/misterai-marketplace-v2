import { useRouter } from "next/router";
import products from "../../products.json";
import "../../styles/home.css";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id == id);

  if (!product) return <h1>المنتج غير موجود</h1>;

  return (
    <div className="product-page matrix-bg">
      <button className="back-btn" onClick={() => router.back()}>
        ◀ رجوع
      </button>

      <div className="product-box">
        <img src={product.image} className="big-img" />

        <h1>{product.title}</h1>
        <p className="price">{product.price}</p>

        <p className="desc">{product.description}</p>

        <div className="contact-box">
          <p>البائع: {product.contact.name}</p>
          <p>الهاتف: {product.contact.phone}</p>

          <a href={product.contact.whatsapp} target="_blank">
            <button className="glass-btn whats">تواصل عبر WhatsApp</button>
          </a>
        </div>
      </div>
    </div>
  );
}
