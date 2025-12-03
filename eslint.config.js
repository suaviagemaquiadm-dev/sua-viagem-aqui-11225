import globals from "globals";
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        // Adiciona globais usadas no projeto que o ESLint não conhece
        showdown: "readonly",
        DOMPurify: "readonly",
        MercadoPago: "readonly",
        IMask: "readonly",
        Chart: "readonly",
        google: "readonly",
        L: "readonly",        // Biblioteca de mapas Leaflet
        marked: "readonly"  // Biblioteca de conversão de Markdown
      },
    },
    rules: {
      // Boa prática: avisa sobre variáveis não utilizadas sem quebrar o build.
      "no-unused-vars": ["warn", { "args": "none", "ignoreRestSiblings": true }],
    },
  },
  {
    ignores: ["dist/**", "*.config.js"],
  },
];
