if(BUILD_TESTING)
  add_library(opentelemetry_teset_common INTERFACE)
  target_include_directories(
    opentelemetry_teset_common
    INTERFACE "$<BUILD_INTERFACE:${CMAKE_CURRENT_LIST_DIR}/include>"
              "$<INSTALL_INTERFACE:include>")

  set_target_properties(opentelemetry_teset_common PROPERTIES EXPORT_NAME
                                                              "teset_common")
  target_link_libraries(opentelemetry_teset_common INTERFACE opentelemetry_api)

  add_subdirectory(src)
endif()
