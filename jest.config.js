export const preset = "react-native";
export const moduleFileExtensions = ["ts", "tsx", "js", "jsx", "json"];
export const setupFilesAfterEnv = [
  "./node_modules/react-native-gesture-handler/jestSetup.js",
  "<rootDir>/jest.setup.js",
];
export const transformIgnorePatterns = [
  "node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|ky)",
];
export const collectCoverageFrom = [
  "<rootDir>/src/Components/**/*.jsx",
  "<rootDir>/src/App.jsx",
  "<rootDir>/src/Components/**/*.tsx",
  "<rootDir>/src/App.tsx",
];
export const coverageReporters = ["html", "text", "text-summary", "cobertura"];
export const testMatch = ["**/*.test.ts?(x)", "**/*.test.js?(x)"];
