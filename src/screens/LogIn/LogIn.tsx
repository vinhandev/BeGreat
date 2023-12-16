import { Brand, FormInput } from '@/components/molecules';
import { SafeScreen } from '@/components/template';
import { loginSchema } from '@/types/schemas/user';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { z } from 'zod';
import {  } from '@hookform/resolvers';

type FormSchema = z.infer<typeof loginSchema>;

function LogIn() {
  const { control, handleSubmit } = useForm<FormSchema>({
    defaultValues: {
      email: 'Add new email',
      password: 'Add new password',
    },
    resolver: zodResolver,
  });
  return (
    <SafeScreen>
      <View>
        <Brand />
      </View>
      <View>
        <FormInput
          control={control}
          variant="text"
          name="email"
          label="Username"
        />
      </View>
    </SafeScreen>
  );
}
export default LogIn;
