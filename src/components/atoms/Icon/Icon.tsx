import { Text, View } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';

type Props = IconProps & {
  name: 'checked'|'clear'|'google'|'facebook'|'apple';
  size: number;
  color: string;
};

function Icon({ name, color, size, style }: Props) {
  switch (name) {
    // case 'checked':
    //   return (
    //     <IconIonicons
    //       style={style}
    //       name={'checkmark'}
    //       size={size}
    //       color={color}
    //     />
    //   );
    // case 'clear':
    //   return (
    //     <IconIonicons
    //       style={style}
    //       name={'close-outline'}
    //       size={size}
    //       color={color}
    //     />
    //   );
    // case 'google':
    //   return (
    //     <IconIonicons
    //       style={style}
    //       name={'logo-google'}
    //       size={size}
    //       color={color}
    //     />
    //   );
    // case 'facebook':
    //   return (
    //     <IconIonicons
    //       style={style}
    //       name={'logo-facebook'}
    //       size={size}
    //       color={color}
    //     />
    //   );
    // case 'apple':
    //   return (
    //     <IconIonicons
    //       style={style}
    //       name={'logo-apple'}
    //       size={size}
    //       color={color}
    //     />
    //   );
    default:
      return <View>
        <Text>Hello</Text>
      </View>;
  }
}

export default Icon;
