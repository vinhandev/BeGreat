import { useUserStore } from '@/store/useUserStore';
import { useTheme } from '@/theme';
import { useEffect } from 'react';
import { Animated, Easing, Text, View } from 'react-native';
import { UIActivityIndicator } from 'react-native-indicators';

const fadeIn = new Animated.Value(0);

const startFadeIn = () => {
  Animated.timing(fadeIn, {
    toValue: 1,
    duration: 500,
    easing: Easing.ease,
    useNativeDriver: true,
  }).start();
};
const startFadeOut = () => {
  Animated.timing(fadeIn, {
    toValue: 0,
    useNativeDriver: true,
  }).start();
};

const getOpacity = () =>
  fadeIn.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

function LoadingScreen() {
  const { fonts, colors } = useTheme();

  const opacity = getOpacity();

  const loadingMessage = useUserStore((state) => state.loadingMessage);
  const isLoading = useUserStore((state) => state.isLoading);

  useEffect(() => {
    if (isLoading) {
      startFadeIn();
    } else {
      startFadeOut();
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <Animated.View
      style={{
        opacity,
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
          backgroundColor: colors.black500,
        }}
      >
        <View
          style={{
            height: 55,
          }}
        >
          <UIActivityIndicator count={12} color={colors.white} size={40} />
        </View>
        <Text style={[fonts.white, fonts.weight400, fonts.size_20]}>
          {loadingMessage}
        </Text>
      </View>
    </Animated.View>
  );
}

export default LoadingScreen;
