import { dimensionSize } from '@/theme/_config';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
  },
  container: {
    height: dimensionSize.screen.height,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: dimensionSize.screen.height * 0.3,
    width: dimensionSize.screen.width,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  main: {
    paddingTop: 80,
  },
});
