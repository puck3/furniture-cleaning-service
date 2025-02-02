import { readdirSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const imagesDir = join(process.cwd(), "public/images");
  const images = readdirSync(imagesDir)
    .filter((file) => /\.(png|jpe?g|svg|webp)$/i.test(file))
    .map((file) => `/images/${file}`);

  return NextResponse.json(images);
}
