//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-classnames",
    "prettier-plugin-merge",
  ],
  tailwindFunctions: ["clsx", "tw", "cn", "cva"], // For prettier-plugin-tailwindcss
  customFunctions: ["clsx", "tw", "cn", "cva"], // For prettier-plugin-classnames

  // Import Sorting
  importOrder: [
    "^react(.*)|next(.*)|@tanstack(.*)",
    "<THIRD_PARTY_MODULES>",
    "@/(.*)",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
