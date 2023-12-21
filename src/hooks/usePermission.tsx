import { Alert, Linking } from 'react-native';
import { Permission, check, request } from 'react-native-permissions';

export const useCameraPermission = () => {
  const permission: Permission = 'ios.permission.CAMERA';
  const blockedAlert = () => {
    Alert.alert(
      'Blocked Camera',
      'We need your camera permission for your avatar image',
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Confirm',
          onPress: () => Linking.openSettings(),
        },
      ]
    );
  };

  const requestCamera = async () => {
    const status = await check(permission);
    switch (status) {
      case 'limited':
      case 'granted':
        return true;
      case 'blocked':
        blockedAlert();
        return false;
      case 'denied': {
        const response = await request(permission);
        if (response === 'granted' || response === 'limited') {
          return true;
        } else {
          return false;
        }
      }
      default:
        console.log('unavailable');

        return false;
    }
  };
  return { requestCamera };
};

export const useLibraryPermission = () => {
  const permission: Permission = 'ios.permission.PHOTO_LIBRARY';
  const blockedAlert = () => {
    Alert.alert(
      'Blocked Camera',
      'We need your camera permission for your avatar image',
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Confirm',
          onPress: () => Linking.openSettings(),
        },
      ]
    );
  };

  const requestPhoto = async () => {
    const status = await check(permission);
    switch (status) {
      case 'limited':
      case 'granted':
        return true;
      case 'blocked':
        blockedAlert();
        return false;
      case 'denied': {
        const response = await request(permission);
        if (response === 'granted' || response === 'limited') {
          return true;
        } else {
          return false;
        }
      }
      default:
        console.log('unavailable');
        return false;
    }
  };
  return { requestPhoto };
};
