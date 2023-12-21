import { Button } from '@/components/atoms';
import { FormInput } from '@/components/molecules';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { signUpSchema } from '@/types/schemas/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { z } from 'zod';

type FormData = z.infer<typeof signUpSchema>;

export default function SignUpScreen() {
  const { components, gutters } = useTheme();
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {},
    resolver: zodResolver(signUpSchema),
  });

  const onValid = (data: FormData) => {};

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
            name=""
          />
          <FormInput
            wrapStyle={gutters.paddingTop_15}
            label="Password"
            variant="text"
            control={control}
            name=""
          />
          <FormInput
            wrapStyle={gutters.paddingTop_15}
            label="Confirm"
            variant="text"
            control={control}
            name=""
          />
          <FormInput
            wrapStyle={gutters.paddingTop_15}
            label="Age"
            variant="text"
            control={control}
            name=""
          />
          <FormInput
            wrapStyle={gutters.paddingTop_15}
            label="Weight"
            variant="text"
            control={control}
            name=""
          />
          <FormInput
            wrapStyle={gutters.paddingTop_15}
            label="Height"
            variant="text"
            control={control}
            name=""
          />
          <FormInput
            wrapStyle={gutters.paddingTop_15}
            label="Gender"
            variant="text"
            control={control}
            name=""
          />
          <Button style={gutters.paddingTop_20}>Sign Up</Button>
        </ScrollView>
      </View>
    </SafeScreen>
  );
}
