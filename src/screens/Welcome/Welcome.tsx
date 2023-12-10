import { Button } from '@/components/atoms';
import PhoneInput from '@/components/molecules/FormComponents/PhoneInput';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert, ScrollView, Text, View } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import validator from 'validator';
import { useUserStore } from '@/store/useUserStore';
import i18n from '@/translations';

const FormSchema = z.object({
  phone: z
    .string()
    .refine(validator.isMobilePhone, i18n.t('error:phoneInvalidFormat')),
});

type FormData = z.infer<typeof FormSchema>;

function WelcomeScreen() {
  const { handleSubmit, control, setError, formState } = useForm<FormData>({
    defaultValues: {
      phone: '',
    },
    resolver: zodResolver(FormSchema),
  });
  const [phone, setPhone] = useState('');
  const setLoadingIn = useUserStore((state) => state.setLoadingIn);
  const setLoadingOut = useUserStore((state) => state.setLoadingOut);
  const { t } = useTranslation(['welcome', 'error']);

  const { components, layout, gutters } = useTheme();

  function wait<T>(ms: number, value: T) {
    return new Promise<T>((resolve) => setTimeout(resolve, ms, value));
  }

  async function onValid(data: any) {
    setLoadingIn(t('welcome:loadingSubmitPhone'));
    try {
      await wait(2000, 'ok');
      setError('phone', {
        message: t('error:serverSideError'),
      });
    } catch (error) {}
    setLoadingOut();
  }

  return (
    <SafeScreen>
      <View style={[components.container]}>
        <Text
          style={[
            components.text1,
            {
              marginTop: 137,
            },
          ]}
        >
          {t('welcome:title')}
        </Text>
        <Text
          style={[
            components.text2,
            {
              marginTop: 10,
            },
          ]}
        >
          {t('welcome:subtitle')}
        </Text>
        <PhoneInput
          style={{
            marginTop: 55,
          }}
          control={control}
          name={'phone'}
        />
        <Text style={[components.text2]}>{t('welcome:otpMessage')}</Text>
        <Button
          disabled={!formState.isDirty}
          style={{
            marginTop: 70,
          }}
          onPress={handleSubmit(onValid)}
        >
          {t('welcome:submitButton')}
        </Button>
      </View>
    </SafeScreen>
  );
}

export default WelcomeScreen;
