foreach(testname meter_provider_sdk_test view_registry_test)
  add_executable(${testname} "${testname}.cc")
  target_link_libraries(
    ${testname} ${GTEST_BOTH_LIBRARIES} ${CMAKE_THREAD_LIBS_INIT}
    opentelemetry_resources opentelemetry_metrics)
  gtest_add_tests(
    TARGET ${testname}
    TEST_PREFIX metrics.
    TEST_LIST ${testname})
endforeach()