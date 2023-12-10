import { createStackNavigator } from '@react-navigation/stack';

import type { AuthorizationStackParamList } from '@/types/navigation';
import { LogInScreen, WelcomeScreen } from '@/screens';

const AuthStack = createStackNavigator<AuthorizationStackParamList>();

function AuthorizationNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={'Welcome'} component={WelcomeScreen} />
      <AuthStack.Screen name={'LogIn'} component={LogInScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthorizationNavigator;
