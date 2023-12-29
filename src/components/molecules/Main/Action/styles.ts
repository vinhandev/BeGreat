import { HOME_MAIN_DEFAULT_INFO_ACTION_BUTTON_SIZE } from '@/constants';
import { StyleSheet } from 'react-native';

const itemSize = HOME_MAIN_DEFAULT_INFO_ACTION_BUTTON_SIZE;
export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  item: {
    width: itemSize,
    height: itemSize,

    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: itemSize,
    textAlign: 'center',
  },
});
