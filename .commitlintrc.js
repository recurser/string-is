module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Dependabot lines can get quite long unfortunately:
    'body-max-line-length': () => [2, 'always', 150],
  },
}
