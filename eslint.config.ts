/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/no-unused-vars': 'warn',
    'vue/no-mutating-props': 'error',
    'vue/require-prop-types': 'warn',
    'vue/require-default-prop': 'warn',
    'vue/no-v-html': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/no-ref-as-operand': 'error',
    'vue/require-explicit-emits': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    semi: ['error', 'always'],
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
    'no-else-return': 'error',
    'no-unused-expressions': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'object-shorthand': ['error', 'always'],
    'array-callback-return': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-return': 'error',
    'no-param-reassign': ['error', { props: true }],
    'prefer-arrow-callback': 'error',
    'consistent-return': 'error',
    'default-case': 'error',
    'no-shadow': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'prefer-template': 'error',
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
    'lines-between-class-members': ['error', 'always'],
    'newline-before-return': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'block-like', next: '*' }
    ],
    'no-magic-numbers': ['warn', { ignore: [0, 1], enforceConst: true }],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true
      }
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }]
  }
};
