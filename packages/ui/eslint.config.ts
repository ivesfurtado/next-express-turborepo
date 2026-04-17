import type { Linter } from "eslint";
import globals from "globals";
import tseslint from "typescript-eslint";

import baseConfig from "../../eslint.config.ts";

const config: Linter.Config[] = [
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        JSX: true,
        React: true,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

export default config;
