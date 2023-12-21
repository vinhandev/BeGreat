import { FormInput } from '@/components/molecules';
import { SafeScreen } from '@/components/template';
import { signUpSchema } from '@/types/schemas/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { z } from 'zod';

type FormData = z.infer<typeof signUpSchema>;

export default function SignUpScreen() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {},
    resolver: zodResolver(signUpSchema),
  });

  return (
    <SafeScreen>
      <View>
        <FormInput control={control} name=''/>
      </View>
    </SafeScreen>
  );
}
