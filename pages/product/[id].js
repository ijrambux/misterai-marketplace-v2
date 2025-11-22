import { useRouter } from "next/router";
import products from "../../products.json";
import "../../styles/home.css";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id == id);

  if (!product)
    return <h1 className="notfound">المنتج غير موجود</h1>;

  return (
    <div className="background">
      <div className="card product-card">
        <img src={product.image} className="product-img" />

        <h1>{product.title}</h1>

        <p className="desc">{product.fullDesc}</p>

        <a href={product.contact} className="btn">
          تواصل مع المعلن
        </a>
      </div>
    </div>
  );
}
