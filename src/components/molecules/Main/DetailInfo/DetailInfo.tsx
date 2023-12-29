import { Icon } from '@/components/atoms/Icon/Icon';
import { useTheme } from '@/theme';
import { DetailInfoActionType } from '@/types/home/detailAction';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Action } from '../Action/Action';

type Props = {
  name: string;
  weight: number;
  height: number;
  streak: number;
  actions: DetailInfoActionType[];
};

export default function DetailInfo({
  height = 0,
  name,
  streak = 0,
  weight = 0,
  actions,
}: Props) {
  const { t } = useTranslation('main');
  const { gutters, components, colors } = useTheme();
  return (
    <View style={[gutters.paddingTop_20, gutters.paddingHorizontal_20]}>
      <View style={[components.border2, gutters.padding_20]}>
        <Text numberOfLines={1} style={[styles.name, components.text5]}>
          {name?.toLocaleLowerCase() ?? t('DEFAULT_NAME')}
        </Text>
        <Text
          style={[components.text6]}
        >{`${weight} kg | ${height} cm`}</Text>
        <View style={[styles.streak, gutters.paddingTop_5]}>
          <Icon name="fire" color={colors.red} size={12} />
          <Text style={components.text7}>{`${streak} ${t('STREAKS')}`}</Text>
        </View>
        <View style={[styles.actions, gutters.paddingTop_10]}>
          {actions?.length !== 0 &&
            actions?.map((item, index) => <Action key={index} action={item} />)}
        </View>
      </View>
    </View>
  );
}
