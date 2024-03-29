import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { ComponentTheme } from '@/types/theme/theme';
import { dimensionSize } from './_config';

export default ({
  layout,
  backgrounds,
  fonts,
  colors,
  borders,
}: ComponentTheme) => {
  return {
    center: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    container: {
      flex: 1,
      alignSelf: 'center',
      width: dimensionSize.screen.width - 20 * 2,
    },
    text1: {
      ...fonts.black,
      ...fonts.weight300,
      ...fonts.size_16,
    },
    text2: {
      ...fonts.black,
      ...fonts.weight400,
      ...fonts.size_24,
    },
    text3: {
      ...fonts.white,
      ...fonts.weight700,
      ...fonts.size_24,
    },
    text4: {
      ...fonts.white,
      ...fonts.weight300,
      ...fonts.size_18,
    },
    text5: {
      ...fonts.black,
      ...fonts.weight700,
      ...fonts.size_24,
    },
    text6: {
      ...fonts.black,
      ...fonts.weight300,
      ...fonts.size_12,
    },
    text7: {
      ...fonts.red,
      ...fonts.weight600,
      ...fonts.size_12,
    },
    text8: {
      ...fonts.black,
      ...fonts.weight300,
      ...fonts.size_10,
    },
    text9: {
      ...fonts.black,
      ...fonts.weight700,
      ...fonts.size_18,
    },
    formText: {
      ...fonts.black,
      ...fonts.weight400,
      ...fonts.size_16,
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
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    border1: {
      borderRadius: 10,
      borderWidth: 0.3,
      borderColor: colors.grey,
    },
    border2: {
      ...borders.rounded_20,
      ...borders.grey,
      ...backgrounds.white,
      borderWidth: 0.5,
    },
    border3: {
      ...borders.rounded_6,
      ...borders.grey,
      ...backgrounds.white,
      borderWidth: 0.5,
    },
    form: {
      height: 58,
      justifyContent: 'center',
      padding: 20,
    },
  } as const satisfies Record<string, ImageStyle | TextStyle | ViewStyle>;
};
