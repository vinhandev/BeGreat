import { Example } from '@/screens';
import { HomepageTabParamList } from '@/types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeTab = createBottomTabNavigator<HomepageTabParamList>();

function HomepageNavigator() {
  return (
    <HomeTab.Navigator initialRouteName="Group">
      <HomeTab.Screen name="Group" component={Example} />
    </HomeTab.Navigator>
  );
}

export default HomepageNavigator;
