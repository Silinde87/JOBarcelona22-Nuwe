module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/**/*.test.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/index.ts',
    '/src/types.d.ts',
    '/src/**/**/index.ts',
    '.+.story..+',
    '.+.example..+',
  ],
  coverageReporters: ['json', 'html'],
};
