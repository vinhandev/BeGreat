import { HomepageTabParamList } from '@/types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainPage } from '@/screens';

const HomeTab = createBottomTabNavigator<HomepageTabParamList>();

function HomepageNavigator() {
  return (
    <HomeTab.Navigator
      initialRouteName="Group"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeTab.Screen component={MainPage} name="Group" />
    </HomeTab.Navigator>
  );
}

export default HomepageNavigator;
