module.exports = {
  displayName: "lint",
  runner: "jest-runner-eslint",
  testMatch: ["<rootDir>/**/*.js", "<rootDir>/**/*.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/dist",
    "<rootDir>/coverage",
    "<rootDir>/webpack.config.js",
  ],
};
