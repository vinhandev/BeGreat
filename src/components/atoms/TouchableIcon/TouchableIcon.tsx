import { TouchableOpacity } from 'react-native';
import Icon from '../Icon/Icon';
import { useTheme } from '@/theme';

type Props = {
  name: 'logo-apple' | 'logo-facebook' | 'logo-google';
  onPress: () => void;
};

export default function TouchableIcon({ name, onPress }: Props) {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={{
        margin: 5,
      }}
      onPress={onPress}
    >
      <Icon name={name} size={30} color={colors.black} />
    </TouchableOpacity>
  );
}
