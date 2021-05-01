module.exports = {
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts)$"],
  transform: {
    "^.+\\.(ts)$": "babel-jest",
  },
  watchPlugins: [
    "jest-watch-select-projects",
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  projects: ["./jest-lint.js", "./jest-test.js"],
};
