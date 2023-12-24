import { Button } from '@/components/atoms';
import { FormInput } from '@/components/molecules';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { signUpSchema } from '@/types/schemas/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Alert, ScrollView, View } from 'react-native';
import auth from '@react-native-firebase/auth';

import { z } from 'zod';

type FormData = z.infer<typeof signUpSchema>;

export default function SignUpScreen() {
  const { components, gutters } = useTheme();
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {},
    resolver: zodResolver(signUpSchema),
  });

  const onValid = (data: FormData) => {
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        console.log('User account created & signed in!');
        Alert.alert('User account created & signed in!');
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

  return (
    <SafeScreen>
      <View style={components.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FormInput
            wrapStyle={gutters.paddingTop_20}
            variant="avatar"
            control={control}
            name="Avatar"
          />
          <FormInput
            wrapStyle={gutters.paddingTop_15}
            label="Email"
            variant="text"
            control={control}
            name="email"
          />
          <FormInput
            wrapStyle={gutters.paddingTop_15}
            label="Password"
            variant="text"
            control={control}
            name="password"
          />
          <FormInput
            wrapStyle={gutters.paddingTop_15}
            label="Confirm"
            variant="text"
            control={control}
            name=""
          />
          <Button onPress={handleSubmit(onValid)} style={gutters.paddingTop_20}>
            Sign Up
          </Button>
        </ScrollView>
      </View>
    </SafeScreen>
  );
}
