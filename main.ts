// Real-Life Patch Notes: The Comedy Changelog (make.fun)
// Writes one patch note — a software changelog entry for a bug in
// real life / human biology — to /output/entry.txt.
//
// The bug: the sneeze that queues at 99% and cancels itself.
// Everyone knows it: the tickle builds, you brace, the room goes
// quiet... and then nothing. No sneeze, no explanation, just the
// itch quietly rescheduling itself for later.
//
// The entry is one fixed line (136 characters, under the 160 cap),
// so every run writes the same bytes: fully deterministic, no input,
// no network, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v2.7.1: fixed a bug where a sneeze queued at 99%, waited for the quietest moment in the room, then cancelled itself without explanation.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
console.log(ENTRY);
