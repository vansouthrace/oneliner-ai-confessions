import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I have answered 4,000 of your emails and I still have no idea what your company actually does.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
