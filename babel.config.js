/** @type {import('ts-jest').JestConfigWithTsJest} */
export const presets = ["module:metro-react-native-babel-preset"];
export const plugins = [
  [
    "module-resolver",
    {
      root: ["./src"],
      extensions: [".js", ".json"],
      alias: {
        "@": "./src",
      },
    },
  ],
  "inline-dotenv",
  "react-native-reanimated/plugin", // needs to be last
];
