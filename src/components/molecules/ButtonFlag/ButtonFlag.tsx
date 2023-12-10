import { Pressable, Text, View } from 'react-native';
import { IconFlag } from '@/components/atoms';
import { useTheme } from '@/theme';

type FlagProps = {
  ISOcode: string;
  countryNumber: number;
};

type Props = {
  onPress: () => void;
  item: FlagProps;
  isOpen: boolean;
  isError: boolean;
};

function ButtonFlag({ onPress, item, isOpen, isError }: Props) {
  const { gutters, layout, borders, fonts } = useTheme();

  const { countryNumber, ISOcode } = item;

  return (
    <Pressable
      style={({ pressed }) => {
        return [
          layout.row,
          layout.itemsCenter,
          {
            paddingHorizontal: 15,
            height: 46,
            borderWidth: 1,
            transform: [{ scale: pressed ? 0.98 : 1 }],
          },
          borders.rounded_6,
          isOpen ? borders.pink600 : isError ? borders.red : borders.grey,
        ];
      }}
      onPress={onPress}
    >
      <IconFlag isoCode={ISOcode} size={23} />
      <Text
        style={[
          gutters.marginLeft_10,
          fonts.black300,
          fonts.weight400,
          fonts.size_16,
        ]}
      >{`+${countryNumber}`}</Text>
    </Pressable>
  );
}

export default ButtonFlag;
