import { HomepageTabParamList } from '@/types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

const HomeTab = createBottomTabNavigator<HomepageTabParamList>();

function HomepageNavigator() {
  return (
    <HomeTab.Navigator initialRouteName="Group">
      <HomeTab.Screen component={() => <View>hello WOrld</View>} name="Group" />
    </HomeTab.Navigator>
  );
}

export default HomepageNavigator;
