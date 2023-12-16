import { memo } from 'react';
import { Control } from 'react-hook-form';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import TextInput from './TextInput';
import { useTheme } from '@/theme';

type Props = {
  label?: string;
  control: Control;
  name: string;
  variant: 'text' | 'password' | 'age' | 'number' | 'selection';
  wrapStyle?: StyleProp<ViewStyle>;
  defaultValue?: string;
};

function FormInput({
  label,
  control,
  name,
  wrapStyle,
  variant,
  defaultValue,
}: Props) {
  const { gutters, components } = useTheme();

  let body;
  switch (variant) {
    case 'text':
      body = (
        <TextInput defaultValue={defaultValue} control={control} name={name} />
      );
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
