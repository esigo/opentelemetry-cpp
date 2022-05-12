set(COMMON_PROTO "${PROTO_PATH}/opentelemetry/proto/common/v1/common.proto")
set(RESOURCE_PROTO
    "${PROTO_PATH}/opentelemetry/proto/resource/v1/resource.proto")
set(TRACE_PROTO "${PROTO_PATH}/opentelemetry/proto/trace/v1/trace.proto")
set(LOGS_PROTO "${PROTO_PATH}/opentelemetry/proto/logs/v1/logs.proto")
set(METRICS_PROTO "${PROTO_PATH}/opentelemetry/proto/metrics/v1/metrics.proto")

set(TRACE_SERVICE_PROTO
    "${PROTO_PATH}/opentelemetry/proto/collector/trace/v1/trace_service.proto")
set(LOGS_SERVICE_PROTO
    "${PROTO_PATH}/opentelemetry/proto/collector/logs/v1/logs_service.proto")
set(METRICS_SERVICE_PROTO
    "${PROTO_PATH}/opentelemetry/proto/collector/metrics/v1/metrics_service.proto"
)
set(GENERATED_PROTOBUF_PATH
    "${CMAKE_BINARY_DIR}/generated/third_party/opentelemetry-proto")

file(MAKE_DIRECTORY "${GENERATED_PROTOBUF_PATH}")

foreach(IMPORT_DIR ${PROTOBUF_IMPORT_DIRS})
  list(APPEND PROTOBUF_INCLUDE_FLAGS "-I${IMPORT_DIR}")
endforeach()

if(WITH_OTLP_GRPC)
  if(CMAKE_CROSSCOMPILING)
    find_program(gRPC_CPP_PLUGIN_EXECUTABLE grpc_cpp_plugin)
  else()
    if(TARGET gRPC::grpc_cpp_plugin)
      project_build_tools_get_imported_location(gRPC_CPP_PLUGIN_EXECUTABLE
                                                gRPC::grpc_cpp_plugin)
    else()
      find_program(gRPC_CPP_PLUGIN_EXECUTABLE grpc_cpp_plugin)
    endif()
  endif()
  message(STATUS "gRPC_CPP_PLUGIN_EXECUTABLE=${gRPC_CPP_PLUGIN_EXECUTABLE}")
endif()

if(WITH_OTLP_GRPC)
  foreach(proto_file ${COMMON_PROTO}
    ${RESOURCE_PROTO} ${TRACE_PROTO} ${LOGS_PROTO} ${METRICS_PROTO}
    ${TRACE_SERVICE_PROTO} ${LOGS_SERVICE_PROTO} ${METRICS_SERVICE_PROTO}
  )
    if(EXISTS ${proto_file})
      message("${proto_file} exists")
    else()
      message("NO ${proto_file} found")
    endif()
    set("ENV{LD_LIBRARY_PATH}" "/workspace/grpc/build/stage/lib")
    set("ENV{PATH}" "/workspace/grpc/build/stage/bin")
    set(arg --proto_path=${PROTO_PATH} ${PROTOBUF_INCLUDE_FLAGS} --cpp_out=${GENERATED_PROTOBUF_PATH} --grpc_out=generate_mock_code=true:${GENERATED_PROTOBUF_PATH} --plugin=protoc-gen-grpc=${gRPC_CPP_PLUGIN_EXECUTABLE} ${proto_file})
    execute_process(COMMAND 
      ${PROTOBUF_PROTOC_EXECUTABLE} ${arg}
      COMMAND_ECHO STDOUT
      COMMAND_ERROR_IS_FATAL ANY
      WORKING_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR}
    )
  endforeach()
else()
  add_custom_command(
    OUTPUT ${COMMON_PB_H_FILE}
           ${COMMON_PB_CPP_FILE}
           ${RESOURCE_PB_H_FILE}
           ${RESOURCE_PB_CPP_FILE}
           ${TRACE_PB_H_FILE}
           ${TRACE_PB_CPP_FILE}
           ${LOGS_PB_H_FILE}
           ${LOGS_PB_CPP_FILE}
           ${METRICS_PB_H_FILE}
           ${METRICS_PB_CPP_FILE}
           ${TRACE_SERVICE_PB_H_FILE}
           ${TRACE_SERVICE_PB_CPP_FILE}
           ${LOGS_SERVICE_PB_H_FILE}
           ${LOGS_SERVICE_PB_CPP_FILE}
           ${METRICS_SERVICE_PB_H_FILE}
           ${METRICS_SERVICE_PB_CPP_FILE}
    COMMAND
      ${PROTOBUF_PROTOC_EXECUTABLE} ARGS "--proto_path=${PROTO_PATH}"
      ${PROTOBUF_INCLUDE_FLAGS} "--cpp_out=${GENERATED_PROTOBUF_PATH}"
      ${COMMON_PROTO} ${RESOURCE_PROTO} ${TRACE_PROTO} ${LOGS_PROTO}
      ${METRICS_PROTO} ${TRACE_SERVICE_PROTO} ${LOGS_SERVICE_PROTO}
      ${METRICS_SERVICE_PROTO})
endif()
