import FormattedFieldValues from "@/types/FormattedFieldValues";
import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    console.log("Полученные данные:", JSON.stringify(json, null, 2));
    const { formData }: { formData: FormattedFieldValues[] } = json;

    if (!formData || !Array.isArray(formData)) {
      console.error("Некорректные данные:", json);
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json(
        { error: "Server configuration error: Missing Telegram credentials" },
        { status: 500 }
      );
    }

    const message = formData
      .map(({ title, data }) => {
        const filteredData = Object.entries(data).filter(([, value]) => value);
        const formattedData = filteredData
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n");

        return `*${title}*` + (formattedData ? `\n${formattedData}` : "");
      })
      .join("\n\n");

    if (!message.trim()) {
      return NextResponse.json(
        { error: "No valid data to send" },
        { status: 400 }
      );
    }

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramResponse.ok) {
      throw new Error("Failed to send message to Telegram");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Ошибка обработки запроса:", error);
    return NextResponse.json(
      { error: "Ошибка при отправке заявки." },
      { status: 500 }
    );
  }
}
