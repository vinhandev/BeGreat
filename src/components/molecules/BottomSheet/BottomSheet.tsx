import { useRef, useMemo, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { default as RNBottomSheet } from '@gorhom/bottom-sheet';
import { useSettingStore } from '@/store/useSettingStore';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default function BottomSheet() {
  const openBottomSheet = useSettingStore((state) => state.openBottomSheet);
  // ref
  const bottomSheetRef = useRef<RNBottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['20%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const open = () => {
    bottomSheetRef.current?.expand();
  };

  const close = () => {
    bottomSheetRef.current?.close();
  };

  useEffect(() => {
    if (openBottomSheet) {
      open();
    } else {
      close();
    }
  }, [openBottomSheet]);

  // renders
  return (
    <RNBottomSheet
      enablePanDownToClose
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
      </View>
    </RNBottomSheet>
  );
}
