import { useUserStore } from '@/store/useUserStore';
import { useTheme } from '@/theme';
import { View } from 'react-native';
import { UIActivityIndicator } from 'react-native-indicators';

function LoadingScreen() {
  const { colors } = useTheme();

  const isLoading = useUserStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            height: 55,
          }}
        >
          <UIActivityIndicator count={12} color={colors.white} size={40} />
        </View>
      </View>
    </View>
  );
}

export default LoadingScreen;
