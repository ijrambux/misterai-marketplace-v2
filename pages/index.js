import Link from "next/link";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="hero">
      <h1 className="title">MisterAI Marketplace</h1>

      <p className="subtitle">
        أفضل المنتجات بأفضل الأسعار مع عرض احترافي وسهل.
      </p>

      <Link href="/products" className="glass-btn">
        عرض المنتجات
      </Link>
    </div>
  );
}
