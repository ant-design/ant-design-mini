const config = {
  roots: [__dirname],
  transform: {
    "^.+\\.[jt]s?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)test)\\.ts$",
  moduleFileExtensions: ["js", "ts"],
  testTimeout: 20000,
};
  
module.exports = config;
