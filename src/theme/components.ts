import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import type { ComponentTheme } from "@/types/theme/theme";
import { dimensionSize, metricsSize } from "./_config";

export default ({ layout, backgrounds, fonts, gutters }: ComponentTheme) => {
  return {
    container: {
      flex: 1,
      alignSelf: 'center',
      width: dimensionSize.screen.width - (metricsSize[1] * 2)
    },
    text1: {
      ...fonts.white,
      ...fonts.weight700,
      ...fonts.size_40
    },
    text2: {
      ...fonts.black,
      ...fonts.weight400,
      ...fonts.size_20
    },

    buttonCircle: {
      ...layout.justifyCenter,
      ...layout.itemsCenter,
      ...backgrounds.white,
      ...fonts.black,
      height: 70,
      width: 70,
      borderRadius: 35,
    },
    circle250: {
      borderRadius: 140,
      height: 250,
      width: 250,
    },
  } as const satisfies Record<string, ImageStyle | TextStyle | ViewStyle>;
};
