import next from "@next/eslint-plugin-next";
import type { Linter } from "eslint";
import globals from "globals";
import tseslint from "typescript-eslint";

import baseConfig from "../../eslint.config.ts";

const config: Linter.Config[] = [
  ...baseConfig,
  next.configs["core-web-vitals"],
  {
    languageOptions: {
      globals: {
        ...globals.node,
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
      next,
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          fixStyle: "inline-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/no-empty-function": "off",
      "import-x/no-default-export": "off",
      "import-x/prefer-default-export": "off",
      "react/display-name": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      "import-x/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import-x/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        typescript: {
          alwaysTryTypes: true,
          project: ["./tsconfig.json"],
        },
      },
      react: {
        version: "detect",
      },
    },
  },
];

export default config;
