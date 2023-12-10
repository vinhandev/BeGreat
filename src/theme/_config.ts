import { Dimensions } from 'react-native'
import { DarkTheme } from "@react-navigation/native";

import type { ThemeConfiguration } from "@/types/theme/config";

const colorsLight = {
  black500: "#000000BB",
  black300: "#333333",
  black100: "#424242",
  white: "#ffffff",
  grey: "#B0B0B0",
  grey2: '#D9D9D9',
  pink900: "#A11660",
  pink600: "#D91D81",
  pink400: "#E877B3",
  green: "#558336",
  red: "#FE1B1B",
} as const;

const colorsDark = {
  black500: "#000000AA",
  black300: "#333333",
  black100: "#424242",
  white: "#ffffff",
  grey: "#B0B0B0",
  grey2: '#D9D9D9',
  pink900: "#A11660",
  pink600: "#D91D81",
  pink400: "#E877B3",
  green: "#558336",
  red: "#FE1B1B",
} as const;

export const dimensionSize = {
  screen: Dimensions.get('screen'),
  window: Dimensions.get('window')
}
export const metricsSize = [10, 15, 20] as const;
const fontSize = [14, 16, 18, 20, 40] as const;

export const config = {
  fonts: {
    sizes: fontSize,
    colors: colorsLight,
  },
  gutters: metricsSize,
  backgrounds: colorsLight,
  borders: {
    widths: [1, 2],
    radius: [6, 16, 1000],
    colors: colorsLight,
  },
  navigationColors: {
    ...DarkTheme.colors,
    background: colorsLight.white,
    card: colorsLight.pink600,
  },
  variants: {
    dark: {
      fonts: {
        colors: colorsDark,
      },
      backgrounds: colorsDark,
      navigationColors: {
        ...DarkTheme.colors,
        background: colorsDark.white,
        card: colorsDark.pink600,
      },
    },
  },
} as const satisfies ThemeConfiguration;
