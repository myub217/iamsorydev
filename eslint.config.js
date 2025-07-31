<<<<<<< HEAD
// eslint.config.js
import parserTs from "@typescript-eslint/parser";
import tseslint from "@typescript-eslint/eslint-plugin";
=======
<<<<<<< HEAD
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
>>>>>>> b269264 (update)

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/dev-dist/**",
      "**/.backup/**",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/consistent-type-imports": "error",
      // ❌ Remove problematic rules (ban-types, no-unsafe-*)
    },
  },
<<<<<<< HEAD
];
=======
)
=======
// eslint.config.js
import parserTs from "@typescript-eslint/parser";
import tseslint from "@typescript-eslint/eslint-plugin";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/dev-dist/**",
      "**/.backup/**",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/consistent-type-imports": "error",
      // ❌ Remove problematic rules (ban-types, no-unsafe-*)
    },
  },
];
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
