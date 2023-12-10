import React from 'react';

import ImageVariant from '../ImageVariant/ImageVariant';

interface CountryFlagProps {
  isoCode: string;
  size: number;
  style?: any;
}

const FLAG_CDN_URL = 'https://flagcdn.com/w80/';
const FORMAT = '.png';

const CountryFlag = ({ isoCode, size, style }: CountryFlagProps) => {
  return (
    <ImageVariant
      key={isoCode}
      source={{ uri: FLAG_CDN_URL + isoCode.toLocaleLowerCase() + FORMAT }}
      style={[{ width: 22.16, height: 16,resizeMode:'cover' }, style]}
    />
  );
};

export default CountryFlag;
