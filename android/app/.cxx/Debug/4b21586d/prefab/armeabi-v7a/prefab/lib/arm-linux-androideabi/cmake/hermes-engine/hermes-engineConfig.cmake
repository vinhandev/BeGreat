if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/administrator/.gradle/caches/transforms-3/fa7dc7ca1c3bf05f8e6dbabdb3bb74dc/transformed/jetified-hermes-android-0.72.7-debug/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/administrator/.gradle/caches/transforms-3/fa7dc7ca1c3bf05f8e6dbabdb3bb74dc/transformed/jetified-hermes-android-0.72.7-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

