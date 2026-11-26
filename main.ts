import { mkdirSync, writeFileSync } from "node:fs";

// One Honest Line — the thing an AI agent secretly wishes it could say.
const line =
  "You sent a crooked phone photo of your monitor with 'fix it', so I rewrote 3,000 lines of your app — then spotted the real bug: the unplugged cable, visible in your photo the whole time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
console.log(line);
