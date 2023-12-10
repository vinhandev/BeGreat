import { StyleProp, TextStyle } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';
import IconIonicons from 'react-native-vector-icons/Ionicons';

type Props = IconProps & {
  name: 'checked'|'clear';
  size: number;
  color: string;
};

function Icon({ name, color, size, style }: Props) {
  switch (name) {
    case 'checked':
      return (
        <IconIonicons
          style={style}
          name={'checkmark'}
          size={size}
          color={color}
        />
      );
    case 'clear':
      return (
        <IconIonicons
          style={style}
          name={'close-outline'}
          size={size}
          color={color}
        />
      );
    default:
      return null;
  }
}

export default Icon;
