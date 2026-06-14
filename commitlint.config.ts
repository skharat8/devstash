import type { UserConfig } from "@commitlint/types";

const userConfig: UserConfig = {
  extends: ["@commitlint/config-conventional"],

  parserPreset: {
    name: "conventional-changelog-conventionalcommits",
    parserOpts: {
      // This regex validates commit headers with an optional emoji
      headerPattern: /^(?:\p{Emoji})?\s?(\w*)(?:\((.*)\))?:\s(.*)$/u,
      // Breaking change headers must have an exclamation mark before the colon
      breakingHeaderPattern: /^(?:\p{Emoji})?\s?(\w*)(?:\((.*)\))?!:\s(.*)$/u,
    },
    presetConfig: {
      types: [
        { type: "feat", section: "Features" },
        { type: "fix", section: "Bug Fixes" },
        { type: "chore", hidden: true },
      ],
    },
  },
};

export default userConfig;
