import images from '@/assets/images';
import { Icon, ImageVariant } from '@/components/atoms';
import { useSettingStore } from '@/store/useSettingStore';
import { useTheme } from '@/theme';
import { Control, FieldValues, useController } from 'react-hook-form';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { jsiConfigureProps } from 'react-native-reanimated/lib/typescript/reanimated2/core';

type Props = {
  control: Control<FieldValues>;
  name: string;
};

const styles = StyleSheet.create({
  absoluteRight0: {
    position: 'absolute',
    right: -10,
  },
  smallCircle: {
    height: 25,
    width: 25,
    borderRadius: 1000,
  },
});

export function AvatarInput({ control, name }: Props) {
  const { components, colors, backgrounds, layout } = useTheme();
  const {
    field: { onChange, value },
  } = useController({ control, name });
  const setOpenSheet = useSettingStore((state) => state.setOpenSheet);
  const openBottomSheet = useSettingStore((state) => state.openBottomSheet);

  const onOpenBottomSheet = () => {
    setOpenSheet(!openBottomSheet, 'image');
  };

  return (
    <View style={components.center}>
      <View style={layout.justifyCenter}>
        <ImageVariant
          defaultSource={images.default_avatar}
          source={value}
          style={{
            height: 100,
            width: 100,
            borderRadius: 1000,
          }}
        />
        <TouchableOpacity
          onPress={onOpenBottomSheet}
          style={[
            backgrounds.purple,
            styles.absoluteRight0,
            styles.smallCircle,
            components.center,
          ]}
        >
          <Icon name="edit" color={colors.white} size={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
