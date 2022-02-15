module.exports = {
  displayName: 'antd-mini',
  preset: '@ali/minist/jest-preset/ts',
  rootDir: './',
  testMatch: ['<rootDir>/tests/pages/**/__tests__/**/*.spec.ts'],
  collectCoverageFrom: ['<rootDir>/tests/es/**/*.{ts,js}'],
};
