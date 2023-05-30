export default {
  rootDir: "../../",
  verbose: true,
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/config/test/jest.js"],
  restoreMocks: true,
};
