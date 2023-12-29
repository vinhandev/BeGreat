import { useTheme } from '@/theme';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function Tasks() {
  const { gutters, backgrounds, colors, components } = useTheme();
  return (
    <View style={[gutters.paddingHorizontal_20, gutters.paddingTop_10]}>
      <Text style={components.text9}>Tasks</Text>
      <View style={gutters.paddingTop_10}>
        <View style={[components.border3, gutters.padding_20]}>
          {/* <AnimatedCircularProgress
            size={120}
            width={15}
            fill={100}
            tintColor={colors.primary}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#3d5875"
          /> */}
        </View>
      </View>
    </View>
  );
}
