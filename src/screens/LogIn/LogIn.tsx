import { Brand, FormInput } from '@/components/molecules';
import { SafeScreen } from '@/components/template';
import { loginSchema } from '@/types/schemas/user';
import { useForm } from 'react-hook-form';
import { Alert, View } from 'react-native';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTheme } from '@/theme';
import { Button, TouchableIcon } from '@/components/atoms';
import { AuthorizationScreenProps } from '@/types/navigation';
import auth from '@react-native-firebase/auth';

type FormData = z.infer<typeof loginSchema>;

function LogIn({ navigation }: AuthorizationScreenProps) {
  const { components, layout, gutters } = useTheme();
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onValid = (data: FormData) => {
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        console.log('User account signed in!');
        Alert.alert('Sign In')
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const onPressSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeScreen>
      <View style={[components.container, layout.justifyCenter]}>
        <View style={components.center}>
          <Brand height={200} width={200} />
        </View>
        <View>
          <FormInput
            control={control}
            variant="text"
            name="email"
            label="Username"
            placeholder="Add your email"
          />
          <FormInput
            wrapStyle={[gutters.marginTop_20]}
            control={control}
            variant="password"
            name="password"
            label="Password"
            placeholder="Add your email"
          />
          <Button
            variant="primary"
            style={{
              marginTop: 70,
            }}
            onPress={handleSubmit(onValid)}
          >
            Login
          </Button>
          <Button
            variant="secondary"
            style={{
              marginTop: 10,
            }}
            onPress={onPressSignUp}
          >
            Sign Up
          </Button>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableIcon name="logo-google" onPress={() => {}} />
            <TouchableIcon name="logo-apple" onPress={() => {}} />
            <TouchableIcon name="logo-facebook" onPress={() => {}} />
          </View>
        </View>
      </View>
    </SafeScreen>
  );
}
export default LogIn;
