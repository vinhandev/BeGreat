import { createStackNavigator } from '@react-navigation/stack';

import type { AuthorizationStackParamList } from '@/types/navigation';
import { LogInScreen } from '@/screens';

const AuthStack = createStackNavigator<AuthorizationStackParamList>();

function AuthorizationNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={'LogIn'} component={LogInScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthorizationNavigator;
