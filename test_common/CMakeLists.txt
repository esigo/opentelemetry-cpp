if(BUILD_TESTING)
  add_library(opentelemetry_ext INTERFACE)
  target_include_directories(
    opentelemetry_ext
    INTERFACE "$<BUILD_INTERFACE:${CMAKE_CURRENT_LIST_DIR}/include>"
              "$<INSTALL_INTERFACE:include>")

  set_target_properties(opentelemetry_ext PROPERTIES EXPORT_NAME "ext")
  target_link_libraries(opentelemetry_ext INTERFACE opentelemetry_api)

  add_subdirectory(src)
endif()
