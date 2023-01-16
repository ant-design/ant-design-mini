/** @format */

const config = {
  transform: {
    "^.+\\.[jt]s?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)test)\\.ts$",
  moduleFileExtensions: ["js", "ts"],
  setupFiles: ['<rootDir>/tests/setup.js'],
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!src/.umi',
    '!src/**/*.d.ts'
  ],
  globals: {
    'ts-jest': {
      diagnostics: {
        exclude: ['!**/*.test.ts'],
      },
    },
  },
  testTimeout: 20000,
};
  
module.exports = config;
