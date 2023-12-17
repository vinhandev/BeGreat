import { View, DimensionValue } from 'react-native';

import { ImageVariant } from '@/components/atoms';
import { useTheme } from '@/theme';
import { isImageSourcePropType } from '@/types/guards/image';
import LogoDark from '@/assets/images/tom_dark.png';
import LogoLight from '@/assets/images/tom_light.png';

type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

function Brand({ height, width, mode }: Props) {
  const { layout, components, borders } = useTheme();

  if (!isImageSourcePropType(LogoLight) || !isImageSourcePropType(LogoDark)) {
    throw new Error('Image source is not valid');
  }

  return (
    <View
      testID="brand-img-wrapper"
      style={[{ height, width, borderRadius: 1000 }, components.shadow]}
    >
      <ImageVariant
        testID="brand-img"
        style={[
          layout.fullHeight,
          layout.fullWidth,
          {
            borderRadius: 1000,
          },
        ]}
        source={LogoLight}
        sourceDark={LogoDark}
        resizeMode={mode}
      />
    </View>
  );
}

Brand.defaultProps = {
  height: 200,
  width: 200,
  mode: 'contain',
};

export default Brand;
