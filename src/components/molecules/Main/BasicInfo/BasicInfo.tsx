import { Text, View } from 'react-native';
import { styles } from './styles';
import { useTheme } from '@/theme';
import { useTranslation } from 'react-i18next';
import { ImageVariant } from '@/components/atoms';
import Images from '@/assets/images';
import { memo } from 'react';

type Props = {
  time: number;
  avatar: string;
  nextStep: string;
};

const defaultAvatar = Images.default_avatar;
function BasicInfo({ time, avatar, nextStep }: Props) {
  const { t } = useTranslation('main');
  const { components, gutters } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text numberOfLines={1} style={[components.text3]}>
          {time ?? '00:00'}
        </Text>
        <Text
          numberOfLines={1}
          style={[components.text4, gutters.marginRight_20]}
        >
          {nextStep
            ? `${t('NEXT_STEP')}${nextStep}`
            : t('YOU_DO_NOT_HAVE_ANY_TASKS')}
        </Text>
      </View>
      <View style={styles.view2}>
        <ImageVariant
          style={styles.image}
          defaultSource={defaultAvatar}
          source={{ uri: avatar ?? undefined }}
        />
      </View>
    </View>
  );
}

export default memo(BasicInfo);
