import type { Linter } from "eslint";

import baseConfig from "../../eslint.config.ts";

const config: Linter.Config[] = [
  ...baseConfig,
  {
    files: ["src/**/*.ts"],
    ignores: ["node_modules/**"],
  },
];

export default config;
