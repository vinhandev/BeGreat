import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import { UIActivityIndicator } from 'react-native-indicators';

import { useTheme } from '@/theme';

type Props = PressableProps & {
  children: string;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  style: StyleProp<ViewStyle>;
};

function Button({
  variant = 'primary',
  isLoading = false,
  children,
  disabled,
  style,
  ...props
}: Props) {
  const { borders, colors, layout, fonts, gutters, backgrounds } = useTheme();

  let styles:
      | StyleProp<ViewStyle>
      | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>),
    textStyles: StyleProp<TextStyle>,
    iconColor: string = colors.white;
  switch (true) {
    case disabled: {
      styles = [
        backgrounds.quaternary,
        borders.rounded_6,
        gutters.padding_15,
        layout.justifyCenter,
        layout.itemsCenter,
      ];
      textStyles = [fonts.quaternary, fonts.size_16, fonts.weight600];
      iconColor = colors.white;
      break;
    }
    case variant === 'primary':
      styles = ({ pressed }) => {
        return [
          isLoading
            ? backgrounds.secondary
            : pressed
              ? backgrounds.primary
              : backgrounds.tertiary,
          ,
          {
            transform: [{ scale: pressed ? 0.98 : 1 }],
            height: 46,
          },
          borders.rounded_6,
          gutters.paddingHorizontal_15,
          layout.justifyCenter,
          layout.itemsCenter,
          layout.row,
        ];
      };
      textStyles = [
        disabled ? fonts.quaternary : fonts.white,
        fonts.size_16,
        fonts.weight600,
      ];
      iconColor = colors.white;
      break;
    case variant === 'secondary':
      styles = ({ pressed }) => {
        return [
          isLoading
            ? backgrounds.white
            : pressed
              ? backgrounds.quaternary
              : backgrounds.white,
          ,
          {
            transform: [{ scale: pressed ? 0.98 : 1 }],
            height: 46,
            borderWidth: 1,
          },
          borders.rounded_6,
          borders.quaternary,
          gutters.paddingHorizontal_15,
          layout.justifyCenter,
          layout.itemsCenter,
          layout.row,
        ];
      };
      textStyles = [
        disabled ? fonts.quaternary : fonts.black,
        fonts.size_16,
        fonts.weight600,
      ];
      iconColor = colors.black;
      break;

    default:
      break;
  }

  return (
    <View style={style}>
      <Pressable disabled={disabled || isLoading} style={styles} {...props}>
        <Text numberOfLines={1} style={textStyles}>
          {children}
        </Text>
        {isLoading && (
          <View style={gutters.marginLeft_10}>
            <UIActivityIndicator count={8} color={iconColor} size={16} />
          </View>
        )}
      </Pressable>
    </View>
  );
}

export default Button;
