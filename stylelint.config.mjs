/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  plugins: ['stylelint-scss'],
  customSyntax: 'postcss-scss',
  rules: {
    // 'number-leading-zero': 'always',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'no-invalid-double-slash-comments': null,
    'declaration-property-value-no-unknown': null,
    'selector-class-pattern': null,
  },
};
