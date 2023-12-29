/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTheme } from '@/theme';
import { Control, useController } from 'react-hook-form';
import { TextInput as RNTextInput, TextInputProps, View } from 'react-native';

type Props = TextInputProps & {
  control: Control<any>;
  name: string;
  defaultValue?: string;
};

export default function TextInput({
  defaultValue,
  control,
  name,
  ...props
}: Props) {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
  });

  const { components, colors } = useTheme();

  return (
    <View style={[components.form, components.border1]}>
      <RNTextInput
        style={components.formText}
        defaultValue={defaultValue}
        value={value}
        onChangeText={onChange}
        placeholderTextColor={colors.grey}
        {...props}
      />
    </View>
  );
}
