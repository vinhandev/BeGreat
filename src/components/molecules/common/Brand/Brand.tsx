import { View, DimensionValue } from 'react-native';

import { ImageVariant } from '@/components/atoms';
import { useTheme } from '@/theme';
import { isImageSourcePropType } from '@/types/guards/image';
import Images from '@/assets/images';

type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

function Brand({ height, width, mode }: Props) {
  const { layout } = useTheme();

  if (!isImageSourcePropType(Images.logo)) {
    throw new Error('Image source is not valid');
  }

  return (
    <View
      testID="brand-img-wrapper"
      style={[{ height, width, borderRadius: 1000 }]}
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
        source={Images.logo}
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
