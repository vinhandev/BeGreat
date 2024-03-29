import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { useTheme } from '@/theme';

import type { ApplicationStackParamList } from '@/types/navigation';
import HomeNavigator from './Homepage';
import AuthorizationNavigator from './Authorization';
import { LoadingScreen, Startup } from '@/screens';
import { View } from 'react-native';
import { BottomSheet } from '@/components/molecules';
import { useInitialize } from '@/theme/hooks/firebase/useInitialize';

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();
  const { user,initializing } = useInitialize();

  return (
    <NavigationContainer theme={navigationTheme}>
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="StartUp"
          key={variant}
          screenOptions={{
            headerShown: false,
            presentation: 'transparentModal',
          }}
        >
          {initializing && <Stack.Screen name="StartUp" component={Startup} />}
          {!user ? (
            <Stack.Screen
              name="Authorization"
              component={AuthorizationNavigator}
            />
          ) : (
            <Stack.Screen name="Homepage" component={HomeNavigator} />
          )}
        </Stack.Navigator>
        <LoadingScreen />
        <BottomSheet />
      </View>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
