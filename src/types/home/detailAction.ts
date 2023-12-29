import { IconType } from '../common/icon';

export type DetailInfoActionType = {
  icon: IconType;
  title: string;
  onPress: () => void;
};
