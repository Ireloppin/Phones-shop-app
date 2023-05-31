export default {
  rootDir: "../../",
  verbose: true,
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/config/test/setup-after.js"],
  restoreMocks: true,
};
