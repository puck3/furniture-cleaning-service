import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  try {
    const { formData, serviceTitle } = await req.json();

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json(
        { error: "Server configuration error: Missing Telegram credentials" },
        { status: 500 }
      );
    }

    const formattedMessage = Object.entries(formData)
      .filter(([_, value]) => typeof value === "string" && value.trim() !== "")
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    const message = `Услуга: ${serviceTitle}\n${formattedMessage}`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      }
    );

    if (!telegramResponse.ok) {
      throw new Error("Failed to send message to Telegram");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Ошибка отправки формы:", error);
    return NextResponse.json(
      { error: "Ошибка при отправке заявки." },
      { status: 500 }
    );
  }
}
