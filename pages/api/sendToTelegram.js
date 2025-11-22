export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const text = `📦 طلب جديد من الموقع:
  
🔹 المنتج: ${req.body.name}
🔹 السعر: ${req.body.price}
🔹 الصورة: ${req.body.image}
`;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text
    })
  });

  res.status(200).json({ ok: true });
}
