module.exports = {
    verbose: true,
    notify: true,
    bail: true,
    automock: false,
    rootDir: "../",
    transform: {
      "^.+\\.(js)$": "babel-jest",
    },
    testMatch: ["<rootDir>/__test__/**/*.test.js"],
    collectCoverageFrom: [
      "<rootDir>/src/**/*.js"
    ],
    coverageDirectory: "<rootDir>/__test__/coverage/",
    coveragePathIgnorePatterns: []
  };