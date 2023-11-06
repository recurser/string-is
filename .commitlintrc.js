module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Dependabot lines can get quite long unfortunately:
    'body-max-line-length': () => [2, 'always', 250],
    'footer-max-line-length': () => [2, 'always', 250],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'deps',
        'devdeps',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
}
