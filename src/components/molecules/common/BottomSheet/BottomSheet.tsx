import { useRef, useMemo, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { default as RNBottomSheet } from '@gorhom/bottom-sheet';
import { useSettingStore } from '@/store/useSettingStore';
import BSCamera from './BSCamera';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export type BottomSheetType = 'image';

const BSBody = ({ type }: { type: BottomSheetType }) => {
  switch (type) {
    case 'image':
      return <BSCamera />;
    default:
      return (
        <View>
          <Text>No component</Text>
        </View>
      );
  }
};

export default function BottomSheet() {
  const openBottomSheet = useSettingStore((state) => state.openBottomSheet);
  const typeBottomSheet = useSettingStore((state) => state.typeBottomSheet);
  const setOpenSheet = useSettingStore((state) => state.setOpenSheet);
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
      onClose={() => {
        setOpenSheet(false);
      }}
      enablePanDownToClose
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View style={styles.contentContainer}>
        <BSBody type={typeBottomSheet} />
      </View>
    </RNBottomSheet>
  );
}
