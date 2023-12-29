import { Icon } from '@/components/atoms/Icon/Icon';
import { useTheme } from '@/theme';
import { DetailInfoActionType } from '@/types/home/detailAction';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { HOME_MAIN_DEFAULT_INFO_ACTION_ICON_SIZE } from '@/constants';

type Props = {
  action: DetailInfoActionType;
};

const iconSize = HOME_MAIN_DEFAULT_INFO_ACTION_ICON_SIZE;
export function Action({ action: { icon, onPress, title } }: Props) {
  const { colors, backgrounds, borders, components, gutters, fonts } =
    useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.item, backgrounds.quaternary, borders.rounded_6]}
      >
        <Icon name={icon} size={iconSize} color={colors.black} />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text
          numberOfLines={2}
          style={[components.text8, fonts.alignCenter, gutters.paddingBottom_5]}
        >
          {title ?? ''}
        </Text>
      </View>
    </View>
  );
}
