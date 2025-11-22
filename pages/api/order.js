export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const token = process.env.TELEGRAM_TOKEN;
  const chatId = process.env.CHAT_ID;

  const { product } = req.body;

  const text = `
📦 طلب جديد من الموقع:

🔹 المنتج: ${product.title}
🔹 السعر: ${product.price} دج
🔹 معرف المنتج: ${product.id}
`;

  await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    }
  );

  res.status(200).json({ ok: true });
}
