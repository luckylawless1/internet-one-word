// The Internet in One Word — entry for make.fun bounty
// u-ronigrv-the-internet-in-one-word-e388f33b
//
// The chosen word is "unhinged".
//
// Rationale (why this word, against the judge's brief):
//  - Funny by itself: calling the entire internet "unhinged" lands as a joke
//    before any explanation — everyone has seen it behave that way.
//  - True of the whole internet, not one app or mood: strangers arguing at
//    3am, conspiracy threads, memes, doomscrolling, hot takes, cat videos
//    next to outrage — the shared quality underneath all of it is that
//    nothing here is behaving normally.
//  - Surprising: the obvious reaches are "infinite", "connection" or
//    "doomscrolling"; "unhinged" is a left-field adjective that still fits.
//  - Lands in one beat: 8 letters, instantly readable, spelled correctly.
//
// The program writes exactly that one word (no trailing newline, no extra
// text) to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "unhinged";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// Guard: the gate requires UTF-8 text of 1–30 characters, not only
// whitespace, and the judge rewards a single word above all. Fail loudly
// rather than writing an invalid entry.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(
    `Invalid entry word ${JSON.stringify(WORD)}: must be a single word of 1-30 non-whitespace characters`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, WORD, "utf8");

// Read-back verification: confirm what actually landed on disk is exactly
// the single word we intended. If anything differs (extra bytes, a stray
// newline, wrong encoding), fail loudly instead of shipping a bad entry.
const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== WORD) {
  throw new Error(
    `Verification failed: /output/entry.txt holds ${JSON.stringify(written)}, expected ${JSON.stringify(WORD)}`,
  );
}
