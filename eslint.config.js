// Flat ESLint config compatible with Vue 3 + TS + Prettier
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '.vscode/**', 'src/components/icons/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 2022,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    rules: {
      // TS handles undefined checks and browser globals; avoid false positives
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off', // Allow optional props without defaults
      'vue/no-reserved-component-names': 'off', // Allow Button, Input, etc.
      '@typescript-eslint/no-explicit-any': 'warn', // Warn instead of error for any
    },
  },
  // Turn off any rules that conflict with Prettier's formatting
  {
    rules: {
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
  },
  // Disable all formatting-related lint rules that would conflict with Prettier
  eslintConfigPrettier,
]
