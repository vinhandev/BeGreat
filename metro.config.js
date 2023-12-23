import { getDefaultConfig, mergeConfig } from "@react-native/metro-config";

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    sourceExts: ["js", "jsx", "ts", "tsx", "cjs", "mjs", "json"],
  },
};

export default mergeConfig(getDefaultConfig(__dirname), config);
