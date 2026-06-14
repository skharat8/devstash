import fs from "fs";
import { gitmojis } from "gitmojis";

const commitTypes = [
  { keyword: "chore: initial commit", emoji: ":tada:" },
  { keyword: "feat", emoji: ":sparkles:" },
  { keyword: "fix", emoji: ":bug:" },
  { keyword: "docs", emoji: ":memo:" },
  { keyword: "style", emoji: ":art:" },
  { keyword: "refactor", emoji: ":recycle:" },
  { keyword: "perf", emoji: ":zap:" },
  { keyword: "test", emoji: ":test_tube:" },
  { keyword: "build", emoji: ":package:" },
  { keyword: "ci", emoji: ":construction_worker:" },
  { keyword: "chore", emoji: ":wrench:" },
  { keyword: "revert", emoji: ":rewind:" },
];

// Read the current commit message.
// Path to the temporary commit message is in the first argument.
const commitMsgFilePath = process.argv[2];
let commitMsg = fs.readFileSync(commitMsgFilePath, "utf8");

for (const commitType of commitTypes) {
  if (commitMsg.startsWith(commitType.keyword)) {
    const gitmoji = gitmojis.filter(
      (gitmoji) => gitmoji.code === commitType.emoji,
    )[0];

    commitMsg = `${gitmoji.emoji} ${commitMsg}`;
    break;
  }
}

// Write the modified commit message back to the file
fs.writeFileSync(commitMsgFilePath, commitMsg);
