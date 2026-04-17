import type { Linter } from "eslint";

import baseConfig from "../../eslint.config.ts";

const config: Linter.Config[] = [...baseConfig];

export default config;
