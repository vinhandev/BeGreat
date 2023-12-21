import { createStackNavigator } from '@react-navigation/stack';

import type { AuthorizationStackParamList } from '@/types/navigation';
import { LogInScreen, SignUpScreen } from '@/screens';

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
      <AuthStack.Screen name={'SignUp'} component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthorizationNavigator;
