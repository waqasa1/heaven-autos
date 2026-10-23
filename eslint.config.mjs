import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      // Product photos are served directly from lh3.googleusercontent.com.
      "@next/next/no-img-element": "off",
      // Material Symbols is an icon font. next/font subsets it down to Latin and drops the icons.
      "@next/next/no-page-custom-font": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
