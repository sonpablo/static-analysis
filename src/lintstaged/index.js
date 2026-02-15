import path from "path";

const buildEslintFixCommand = (filenames) =>
  `eslint --fix ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

export default {
  "*.{js,jsx,ts,tsx}": [buildEslintFixCommand, buildPrettierCommand],
  "*.{json,md,css}": [buildPrettierCommand],
};
