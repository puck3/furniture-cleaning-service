import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET(req: NextRequest) {
  try {
    const credentials = process.env.GOOGLE_CREDS;
    if (!credentials) {
      return NextResponse.json(
        { error: "Google credentials not found" },
        { status: 500 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(credentials),
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    });

    const drive = google.drive({ version: "v3", auth });

    const folderId = process.env.FOLDER_ID;
    if (!folderId) {
      return NextResponse.json(
        { error: "Folder ID is not set in environment variables" },
        { status: 400 }
      );
    }

    const response = await drive.files.list({
      q: `'${folderId}' in parents`,
      fields: "files(id, name)",
    });

    const files = response.data.files || [];
    const fileUrls = files.map(
      (file) => `https://drive.google.com/uc?id=${file.id}`
    );

    return NextResponse.json(fileUrls);
  } catch (error) {
    console.error("Ошибка при загрузке файлов:", error);
    return NextResponse.json(
      { error: "Не удалось получить файлы" },
      { status: 500 }
    );
  }
}
