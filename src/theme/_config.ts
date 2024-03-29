import { Dimensions } from 'react-native';
import { DarkTheme } from '@react-navigation/native';

import type { ThemeConfiguration } from '@/types/theme/config';

const colorsLight = {
  black: '#000000',
  white: '#ffffff',
  grey: '#6B6B6B',
  primary: '#27374D',
  secondary: '#526D82',
  tertiary: '#9DB2BF',
  quaternary: '#9DB2BF',
  purple: '#7B66FF',
  success: '#C5E898',
  red: '#F05454',
} as const;

const colorsDark = {
  black: '#000000',
  white: '#ffffff',
  primary: '#27374D',
  secondary: '#526D82',
  tertiary: '#9DB2BF',
  quaternary: '#9DB2BF',
  purple: '#7B66FF',
  success: '#C5E898',
  red: '#F05454',
} as const;

export const dimensionSize = {
  screen: Dimensions.get('screen'),
  window: Dimensions.get('window'),
};
export const metricsSize = [5, 10, 15, 20] as const;
const fontSize = [10, 12, 14, 16, 18, 24, 32, 40] as const;

export const config = {
  fonts: {
    sizes: fontSize,
    colors: colorsLight,
  },
  gutters: metricsSize,
  backgrounds: colorsLight,
  borders: {
    widths: [1, 2, 1.5],
    radius: [6, 10, 20, 1000],
    colors: colorsLight,
  },
  navigationColors: {
    ...DarkTheme.colors,
    background: colorsLight.white,
    card: colorsLight.primary,
    primary: colorsLight.primary,
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
        card: colorsDark.primary,
        primary: colorsLight.primary,
      },
    },
  },
} as const satisfies ThemeConfiguration;
