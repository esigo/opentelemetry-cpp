#!/bin/bash

# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

set -e

format="${FORMAT:=OFF}"
thrift="${THRIFT:=OFF}"
abseil="${ABSEIL:=OFF}"
gRPC="${GRPC:=OFF}"
bazel="${BAZEL:=OFF}"

BUILD_IMAGE=opentelemetry-cpp-build-2004
docker image inspect "$BUILD_IMAGE" &> /dev/null || {
  docker build -t "$BUILD_IMAGE" \
    --build-arg FMT=${format} \
    --build-arg THFT=${thrift} \
    --build-arg ABSL=${abseil} \
    --build-arg GRPC=${gRPC} \
    --build-arg BZL=${bazel} \
    --build-arg BASE=ubuntu:20.04 \
    ci -f ci/Dockerfile.ubuntu
}

BAZEL_CACHE="/home/runner/.cache/bazel"

docker run \
  -v "$PWD":/src:Z \
  -v ${BAZEL_CACHE}:${BAZEL_CACHE}:Z \
  -w /src \
  "$BUILD_IMAGE" "$@"

docker rmi --force ${BUILD_IMAGE}
