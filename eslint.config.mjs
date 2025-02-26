import globals from "globals";
import pluginJs from "@eslint/js";
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];

module.exports = [
  eslintPluginPrettierRecommended,
];