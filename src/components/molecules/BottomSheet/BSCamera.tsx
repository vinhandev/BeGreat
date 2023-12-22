import { Button } from '@/components/atoms';
import { useCameraPermission, useLibraryPermission } from '@/hooks';
import { StyleSheet, View } from 'react-native';
import { openCamera, openPicker } from 'react-native-image-crop-picker';

const styles = StyleSheet.create({
  rowGap10: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default function BSCamera() {
  const { requestCamera } = useCameraPermission();
  const { requestPhoto } = useLibraryPermission();
  const openCam = async () => {
    try {
      const status = await requestCamera();
      if (status) {
        await openCamera({
          width: 100,
          height: 100,
          cropping: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const openLibrary = async () => {
    try {
      const status = await requestPhoto();
      if (status) {
        await openPicker({
          width: 100,
          height: 100,
          cropping: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.rowGap10}>
      <Button onPress={openCam} variant="primary">
        camera
      </Button>
      <Button onPress={openLibrary} variant="primary">
        library
      </Button>
    </View>
  );
}
