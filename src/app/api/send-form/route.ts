import { NextRequest, NextResponse } from "next/server";

import FormattedFieldValues from "@/types/FormattedFieldValues";

export async function POST(req: NextRequest) {
  try {
    const formData = await getFormData(req);
    if (!formData) {
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }
    const message = getMessage(formData);
    if (!message.trim()) {
      return NextResponse.json(
        { error: "No valid data to send" },
        { status: 400 }
      );
    }
    const { URL, CHAT_ID } = getCreds();
    await sendMessage(message, URL, CHAT_ID);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Ошибка обработки запроса:", error);
    return NextResponse.json(
      { error: "Ошибка при отправке заявки." },
      { status: 500 }
    );
  }
}

const getFormData = async (req: NextRequest) => {
  const json = await req.json();
  const { formData }: { formData: FormattedFieldValues[] } = json;
  return formData;
};

const getCreds = () => {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  if (!BOT_TOKEN || !CHAT_ID) {
    throw new Error("Missing Telegram credentials");
  }
  const URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  return { URL, CHAT_ID };
};

const getMessage = (formData: FormattedFieldValues[]) => {
  return formData
    .map(({ title, data }) => {
      const filteredData = Object.entries(data).filter(([, value]) => value);
      const formattedData = filteredData
        .map(([key, value]) => (value.trim() ? `${key}: ${value.trim()}` : ""))
        .join("\n");

      return `*${title}*` + (formattedData ? `\n${formattedData}` : "");
    })
    .join("\n\n");
};

const sendMessage = async (message: string, URL: string, CHAT_ID: string) => {
  const telegramResponse = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    }),
  });
  if (!telegramResponse.ok) {
    throw new Error("Failed to send message to Telegram");
  }
};
