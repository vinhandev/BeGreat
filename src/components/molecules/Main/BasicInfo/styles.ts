import { HOME_MAIN_BASIC_INFO_AVATAR_SIZE } from '@/constants';
import { dimensionSize } from '@/theme/_config';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: dimensionSize.screen.width - 20 * 2,
    alignSelf: 'center',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  view1: {
    flexGrow: 1,
    flex: 1,
  },
  view2: {
    height: HOME_MAIN_BASIC_INFO_AVATAR_SIZE,
  },
  image: {
    height: HOME_MAIN_BASIC_INFO_AVATAR_SIZE,
    width: HOME_MAIN_BASIC_INFO_AVATAR_SIZE,
    borderRadius: 1000,
  },
});
