import { ButtonFlag, Icon, ImageVariant } from '@/components/atoms';
import CountryFlag from '@/components/atoms/IconFlag/IconFlag';
import { countries } from '@/constants';
import { useTheme } from '@/theme';
import { dimensionSize, metricsSize } from '@/theme/_config';
import phones from '@/utils/phones';
import { useEffect, useRef, useState } from 'react';
import { useController } from 'react-hook-form';
import {
  FlatList,
  Pressable,
  StyleProp,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
  name: string;
  control: any;
};

function PhoneInput({ control, name, style }: Props) {
  const { field, fieldState } = useController({ control, name });
  const { layout, gutters, borders, backgrounds, fonts, colors } = useTheme();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(countries[0].value);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    field.onChange(
      phones.formatPhoneNumber(value.isoCode, phone, {
        format: 'E.164',
      }) || ''
    );
  }, [value, phone]);

  function toggleDropdown() {
    setOpen(!open);
  }

  const renderDropDown = () => {
    if (open) {
      return (
        <View
          style={[
            {
              zIndex:1,
              position: 'absolute',
              top: 6 + 46 + 1,
              width: '100%',
              borderWidth: 1,
            },
            backgrounds.white,
            borders.rounded_6,
            borders.grey,
            gutters.paddingHorizontal_15,
          ]}
        >
          <FlatList
            data={countries}
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  onPress={() => {
                    setValue(item.value);
                    toggleDropdown();
                  }}
                  style={({ pressed }) => {
                    return [
                      {
                        flexDirection: 'row',
                        borderTopWidth: index !== 0 ? 1 : 0,
                        transform: [{ scale: pressed ? 0.98 : 1 }],
                        height: 46,
                      },
                      layout.itemsCenter,
                      borders.grey,
                    ];
                  }}
                >
                  <CountryFlag isoCode={item.value.isoCode} size={22} />
                  <Text
                    style={[
                      gutters.marginLeft_10,
                      fonts.black300,
                      fonts.size_16,
                      fonts.weight400,
                    ]}
                  >
                    {item.label}
                  </Text>
                  {value === item.value && (
                    <Icon
                      style={{
                        position: 'absolute',
                        right: 0,
                      }}
                      color={colors.pink600}
                      name="checked"
                      size={20}
                    />
                  )}
                </Pressable>
              );
            }}
          />
        </View>
      );
    }
  };

  return (
    <View
      style={{
        zIndex: 1,
      }}
    >
      <View style={style ? style : undefined}>
        <View
          style={[
            layout.row,
            {
              overflow: 'hidden',
            },
          ]}
        >
          <ButtonFlag
            isError={fieldState.invalid}
            isOpen={open}
            item={{
              countryNumber: value.phoneCode,
              ISOcode: value.isoCode,
            }}
            onPress={toggleDropdown}
          />
          <View
            style={[
              {
                flexGrow: 1,
                position: 'relative',
                borderWidth: 1,
                height: 46,
                flex: 1,
              },
              gutters.marginLeft_10,
              borders.rounded_6,
              fieldState.invalid ? borders.red : borders.grey,
              layout.row,
              layout.itemsCenter,
              gutters.paddingHorizontal_10,
            ]}
          >
            <TextInput
              keyboardType="decimal-pad"
              value={phone}
              onChangeText={setPhone}
              placeholder="Input phone"
              style={[
                {
                  overflow: 'scroll',
                  flexGrow: 1,
                  flex: 1,
                  marginLeft: 5,
                },
                fonts.black300,
                fonts.weight400,
                fonts.size_16,
              ]}
            />

            {phone && (
              <TouchableOpacity
                onPress={() => {
                  setPhone('');
                }}
                style={{}}
              >
                <Icon name="clear" color="grey" size={25} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View
          style={{
            width: dimensionSize.screen.width - 20 * 2,
            minHeight: 21,
          }}
        >
          {fieldState.invalid && (
            <Text
              numberOfLines={3}
              style={[
                fonts.red,
                fonts.size_14,
                fonts.weight400,
                { flexWrap: 'wrap' },
              ]}
            >{`${fieldState.error?.message}`}</Text>
          )}
        </View>
        {renderDropDown()}
      </View>
    </View>
  );
}

export default PhoneInput;
