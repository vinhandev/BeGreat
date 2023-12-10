import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { useTheme } from '@/theme';

import type { ApplicationStackParamList } from '@/types/navigation';
import HomeNavigator from './Homepage';
import AuthorizationNavigator from './Authorization';
import { LoadingScreen, Startup } from '@/screens';
import { useUserStore } from '@/store/useUserStore';
import { View, Animated, Easing } from 'react-native';

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="StartUp"
          key={variant}
          screenOptions={{ headerShown: false, presentation: 'transparentModal' }}
        >
          <Stack.Screen name="StartUp" component={Startup} />
          <Stack.Screen
            name="Authorization"
            component={AuthorizationNavigator}
          />
          <Stack.Screen name="Homepage" component={HomeNavigator} />
        </Stack.Navigator>
        <LoadingScreen />
      </View>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
