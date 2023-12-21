import { ImageVariant } from '@/components/atoms';
import { Control, FieldValues, useController } from 'react-hook-form';
import { Text, View } from 'react-native';

type Props = {
  control: Control<FieldValues>;
  name: string;
};

export function AvatarInput({ control, name }: Props) {
  const {
    field: { onChange, value },
  } = useController({ control, name });
  return (
    <View>
      <ImageVariant
        source={value}
        style={{
          height: 100,
          width: 100,
        }}
      />
    </View>
  );
}
