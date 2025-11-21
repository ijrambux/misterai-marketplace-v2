export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const telegramURL = `https://api.telegram.org/bot${token}/sendMessage`;

    const send = await fetch(telegramURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML"
      })
    });

    const result = await send.json();

    if (!send.ok) {
      return res.status(500).json({ error: "Telegram error", details: result });
    }

    res.status(200).json({ success: true, result });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
