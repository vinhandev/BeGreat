import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/theme';
import { Brand } from '@/components/molecules';
import { SafeScreen } from '@/components/template';

import type { ApplicationScreenProps } from '@/types/navigation';
import { delay } from '@/utils/helper';

function Startup({ navigation }: ApplicationScreenProps) {
  const { layout, gutters, fonts, backgrounds } = useTheme();
  const { t } = useTranslation(['startup']);

  const { isSuccess, isFetching, isError } = useQuery({
    queryKey: ['startup'],
    queryFn: async () => {
      await delay(5000);
      return true;
    },
  });

  useEffect(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Authorization' }],
    });
  }, [isSuccess]);

  return (
    <SafeScreen>
      <View
        style={[
          layout.flex_1,
          layout.col,
          layout.itemsCenter,
          layout.justifyCenter,
          backgrounds.primary,
        ]}
      >
        <Brand />
        {isFetching && (
          <ActivityIndicator size="large" style={[gutters.marginVertical_20]} />
        )}
        {isError && (
          <Text style={[fonts.size_16, fonts.red]}>{t('startup:error')}</Text>
        )}
      </View>
    </SafeScreen>
  );
}

export default Startup;
