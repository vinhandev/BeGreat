import { memo, useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
type Props = IconProps & {
  name:
    | 'checked'
    | 'clear'
    | 'logo-google'
    | 'logo-facebook'
    | 'logo-apple'
    | 'edit';
  size: number;
  color: string;
  wrapStyle?: StyleProp<ViewStyle>;
};

export function Icon({ name, color, size, wrapStyle, ...props }: Props) {
  const BodyIcon = useMemo(() => {
    switch (name) {
      case 'logo-facebook':
      case 'logo-google':
      case 'logo-apple':
        return <Ionicons name={name} color={color} size={size} {...props} />;
      case 'edit':
        return <MaterialIcons name={name} color={color} size={size} {...props} />;
      default:
        return <Ionicons name="image" color={color} size={size} {...props} />;
    }
  }, [name, color, size]);

  return <View style={wrapStyle}>{BodyIcon}</View>;
}

export default memo(Icon);
