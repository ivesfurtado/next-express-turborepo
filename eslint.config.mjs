import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import importX from "eslint-plugin-import-x";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "path";
import { fileURLToPath } from "url";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const flatCompat = new FlatCompat({ baseDirectory: __dirname });

const tsConfig = /** @type {import("eslint").Linter.Config[]} */ (
  tseslint.configs.strict
);

/** @type {import("eslint").Linter.Config[]} */
export default [
  eslint.configs.recommended,
  ...tsConfig,
  eslintConfigPrettier,
  perfectionist.configs["recommended-natural"],
  ...flatCompat.plugins("eslint-plugin-only-warn"),
  {
    languageOptions: {
      globals: {
        ...globals.node,
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
      "import-x": importX,
      prettier,
    },
  },
  {
    ignores: [
      ".*.?(c)js",
      "*.config*.?(c)js",
      ".*.ts",
      "*.config*.ts",
      "*.d.ts",
      "dist",
      ".git",
      "node_modules",
      "build",
      ".next",
      "*rollup*",
    ],
  },
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          fixStyle: "inline-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          format: ["PascalCase"],
          selector: "typeLike",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "arrow-body-style": "off",
      "import-x/no-anonymous-default-export": "off",
      "no-duplicate-imports": "error",
      "no-unused-vars": "off",
      "perfectionist/sort-objects": [
        "error",
        {
          type: "alphabetical",
        },
      ],
      "prefer-arrow-callback": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "lf",
          printWidth: 80,
          semi: true,
          singleQuote: false,
          tabWidth: 2,
          trailingComma: "all",
        },
      ],
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
    },
  },
];
