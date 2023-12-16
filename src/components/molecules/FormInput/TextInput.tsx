import { useTheme } from '@/theme';
import { Control, useController } from 'react-hook-form';
import { TextInput as RNTextInput, View } from 'react-native';

type Props = {
  control: Control<any>;
  name: string;
  defaultValue?: string;
};

export default function TextInput({ defaultValue, control, name }: Props) {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
  });

  const { components } = useTheme();

  return (
    <View style={[components.form, components.border1]}>
      <RNTextInput
        defaultValue={defaultValue}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}
