if(NOT TARGET react-native-reanimated::reanimated)
add_library(react-native-reanimated::reanimated SHARED IMPORTED)
set_target_properties(react-native-reanimated::reanimated PROPERTIES
    IMPORTED_LOCATION "/Users/administrator/Desktop/nhan_tran/VNHabitTracker/node_modules/react-native-reanimated/android/build/intermediates/cxx/Debug/3m352h1h/obj/x86/libreanimated.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/administrator/Desktop/nhan_tran/VNHabitTracker/node_modules/react-native-reanimated/android/build/prefab-headers/reanimated"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

