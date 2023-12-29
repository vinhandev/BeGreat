import { SafeAreaView, StatusBar } from 'react-native';

import { useTheme } from '@/theme';

type Props = {
  children: React.ReactNode;
  background?: string;
};
function SafeScreen({ children, background }: Props) {
  const { layout, variant, navigationTheme } = useTheme();

  return (
    <SafeAreaView
      style={[
        layout.flex_1,
        {
          backgroundColor: background
            ? background
            : navigationTheme.colors.background,
        },
      ]}
    >
      <StatusBar
        barStyle={variant === 'dark' ? 'light-content' : 'dark-content'}
      />
      {children}
    </SafeAreaView>
  );
}

export default SafeScreen;
