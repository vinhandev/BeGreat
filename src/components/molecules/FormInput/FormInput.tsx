import { memo } from 'react';
import { Control, FieldValues } from 'react-hook-form';
import { StyleProp, Text, TextInputProps, View, ViewStyle } from 'react-native';
import TextInput from './TextInput';
import { useTheme } from '@/theme';
import { AvatarInput } from './AvatarInput';

type Props<T extends FieldValues> = {
  label?: string;
  control: Control<T>;
  name: T;
  wrapStyle?: StyleProp<ViewStyle>;
} & (
  | ({
      variant: 'text' | 'password' | 'avatar';
    } & TextInputProps)
  | {
      variant: 'age' | 'number' | 'selection';
    }
);

function FormInput<T>(props: Props<T extends FieldValues>) {
  const { gutters, components } = useTheme();
  const { control, name, variant, label, wrapStyle } = props;

  let body;
  switch (variant) {
    case 'text':
      body = <TextInput {...props} control={control} name={name} />;
      break;
    case 'password':
      body = (
        <TextInput secureTextEntry {...props} control={control} name={name} />
      );
      break;
    case 'avatar':
      body = <AvatarInput />;
      break;
    default:
      break;
  }

  return (
    <View style={wrapStyle}>
      {label && (
        <Text style={[gutters.marginBottom_10, components.text1]}>{label}</Text>
      )}
      <View>{body}</View>
    </View>
  );
}

export default memo(FormInput);
