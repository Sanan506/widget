import fs from "fs/promises";

export async function getStoredMessages() {
  const rawFileContent = await fs.readFile("content.json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const storedContent = data.content ?? [];
  return storedContent;
}
