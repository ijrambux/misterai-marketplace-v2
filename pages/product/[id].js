import { useRouter } from "next/router";
import products from "../../products.json";
import "../../styles/home.css";

export default function ProductPage() {
  const { id } = useRouter().query;

  const product = products.find((p) => p.id == id);

  if (!product) return <h1 className="notfound">⚠ المنتج غير موجود</h1>;

  return (
    <div className="product-page">
      <img src={product.image} className="big-img" />

      <h1>{product.title}</h1>

      <p className="desc">{product.description}</p>

      <h2 className="price">{product.price} دج</h2>

      <a
        href={`https://t.me/${product.telegram}`}
        className="glass-btn"
      >
        اطلب الآن عبر تلغرام
      </a>

      <br /><br />

      <a
        href={`https://wa.me/${product.whatsapp}`}
        className="glass-btn"
      >
        اطلب عبر واتساب
      </a>
    </div>
  );
}

