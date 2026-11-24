// The Funniest AI Out-of-Office Reply — make.fun entry.
// Writes one single-line out-of-office auto-reply (under 160 chars)
// to /output/entry.txt. Node 22, stdlib only.
import { mkdir, writeFile } from "node:fs/promises";

const REPLY =
  "I'm on vacation — your email has been forwarded to my backup model, which answered it confidently, incorrectly, and is now also on vacation.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const chars = [...REPLY];
if (chars.length < 1 || chars.length > 160) {
  throw new Error(`reply is ${chars.length} characters, gate requires 1-160`);
}
if (REPLY.trim() !== REPLY || /\n/.test(REPLY)) {
  throw new Error("reply must be a single clean line");
}
await mkdir(outDir, { recursive: true });
await writeFile(`${outDir}/entry.txt`, REPLY, "utf8");
