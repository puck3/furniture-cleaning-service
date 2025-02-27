import { NextRequest, NextResponse } from "next/server";
import { drive_v3, google } from "googleapis";

const getAuth = () => {
  const credentials = process.env.GOOGLE_CREDS;
  if (!credentials) {
    throw new Error("Google credentials not found");
  }
  return new google.auth.GoogleAuth({
    credentials: JSON.parse(credentials),
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });
};

const getQueryParams = () => {
  const folderId = process.env.FOLDER_ID;
  if (!folderId) {
    throw new Error("Folder ID is not set in environment variables");
  }
  return {
    q: `'${folderId}' in parents`,
    fields: "files(id)",
  };
};

const fetchUrls = async (
  auth: drive_v3.Params$Resource$Files$List["auth"],
  params: drive_v3.Params$Resource$Files$List
): Promise<string[]> => {
  const drive = google.drive({ version: "v3", auth });
  const response = await drive.files.list(params);
  const files = response.data.files || [];
  return files.map(
    (file) =>
      `https://drive.google.com/uc?id=${file.id}&export=download&format=webp&width=1200&quality=85`
  );
};

export const GET = async (req: NextRequest) => {
  try {
    const auth = getAuth();
    const params = getQueryParams();
    const fileUrls = await fetchUrls(auth, params);
    return NextResponse.json(fileUrls, {
      headers: {
        "Cache-Control": "public, max-age=600, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Ошибка при загрузке файлов:", error);
    return NextResponse.json(
      { error: "Не удалось получить файлы" },
      { status: 500 }
    );
  }
};
