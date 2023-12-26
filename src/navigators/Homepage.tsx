import auth from '@react-native-firebase/auth';
import { HomepageTabParamList } from '@/types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, View } from 'react-native';

const HomeTab = createBottomTabNavigator<HomepageTabParamList>();

function HomepageNavigator() {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <HomeTab.Navigator initialRouteName="Group">
      <HomeTab.Screen
        component={() => (
          <View>
            <Text>Home Page</Text>
            <Button title="Log Out" onPress={signOut} />
          </View>
        )}
        name="Group"
      />
    </HomeTab.Navigator>
  );
}

export default HomepageNavigator;
