import parsePhoneNumber, { CountryCode } from 'libphonenumber-js';

interface PhoneNumberFormatOptions {
  format?: 'International' | 'National' | 'E.164';
}

function formatPhoneNumber(
  isoCode: CountryCode,
  phoneNumber: string,
  options?: PhoneNumberFormatOptions
): string | null {
  try {
    const parsedNumber = parsePhoneNumber(phoneNumber, isoCode);

    if (!parsedNumber) {
      throw new Error('Invalid phone number');
    }

    switch (options?.format) {
      case 'International':
        return parsedNumber.formatInternational();
      case 'National':
        return parsedNumber.formatNational();
      case 'E.164':
        return parsedNumber.format('E.164');
      default:
        // Default to international format if no format specified
        return parsedNumber.formatInternational();
    }
  } catch (error) {
    console.log('Error formatting phone number:', (error as Error).message);
    return null;
  }
}

export default {
  formatPhoneNumber,
};
