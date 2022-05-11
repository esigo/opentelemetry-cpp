file(GLOB_RECURSE PROTO_FILES "${PPATH}/*.proto")

${PPATH}
foreach(proto_file ${PROTO_FILES})
if(EXISTS ${proto_file})
  message("${proto_file} exists")
else()
  message("NO ${proto_file} found")
endif()
set("ENV{LD_LIBRARY_PATH}" "/workspace/grpc/build/stage/lib")
set("ENV{PATH}" "/workspace/grpc/build/stage/bin")
execute_process(COMMAND 
  ${PROTOBUF_PROTOC_EXECUTABLE} --proto_path=${PROTO_PATH} ${PROTOBUF_INCLUDE_FLAGS} --cpp_out=${GENERATED_PROTOBUF_PATH} --grpc_out=generate_mock_code=true:${GENERATED_PROTOBUF_PATH} --plugin=protoc-gen-grpc=${gRPC_CPP_PLUGIN_EXECUTABLE} ${proto_file}
  COMMAND_ECHO STDOUT
  COMMAND_ERROR_IS_FATAL ANY
)
endforeach()