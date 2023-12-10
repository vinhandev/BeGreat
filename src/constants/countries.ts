import { CountryCode } from 'libphonenumber-js';
import type { ImageSourcePropType } from 'react-native';

type CountryProps = {
    id: number;
    label: string;
    value: {
        phoneCode: number;
        isoCode: CountryCode;
    };
}

const countries: CountryProps[] = [
    {
        id: 0,
        label: 'Vietnam',
        value: {
            isoCode: 'VN',
            phoneCode: 84
        },
    },
    {
        id: 1,
        label: 'Singapore',
        value: {
            isoCode: 'SG',
            phoneCode: 65
        }
    }
]

export default countries;