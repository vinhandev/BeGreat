import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { ScrollView, View } from 'react-native';
import { styles } from './styles';
import { BasicInfo, DetailInfo, Tasks } from '@/components/molecules';
import { DetailInfoActionType } from '@/types/home/detailAction';

export default function MainPage() {
  const { colors, backgrounds } = useTheme();

  const Actions: DetailInfoActionType[] = [
    {
      icon: 'clear',
      title: 'My Face',
      onPress: () => {},
    },
    {
      icon: 'clear',
      title: 'My Face',
      onPress: () => {},
    },
    {
      icon: 'clear',
      title: 'My Face',
      onPress: () => {},
    },
    {
      icon: 'clear',
      title: 'My Face',
      onPress: () => {},
    },
    {
      icon: 'clear',
      title: 'My Face',
      onPress: () => {},
    },
  ];

  return (
    <SafeScreen background={colors.primary}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container, backgrounds.white]}>
          <View style={[styles.background, backgrounds.primary]} />
          <View style={[styles.main]}>
            <BasicInfo />
            <DetailInfo actions={Actions} />
            <Tasks />
          </View>
        </View>
      </ScrollView>
    </SafeScreen>
  );
}
