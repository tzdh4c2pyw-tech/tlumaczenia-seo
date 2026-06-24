import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const content = await readFile(join(process.cwd(), "public", "llms.txt"), "utf8");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
