// The One-Line AI Excuse for Breaking Production
// make.fun bounty: u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
// Deterministic: no network, no randomness, no clock. One line, 100 chars.
// Guard: the excuse must stay a single line, so newlines are rejected too.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "We're still inside our 99.9% uptime SLA. " +
  "I just spent the whole year's 0.1% allowance in one deploy.";

if (ENTRY.length > 180) {
  throw new Error(`entry is ${ENTRY.length} chars, over the 180-char limit`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(ENTRY);
