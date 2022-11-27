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

command=$@
backup="/backup/backup.tar"
container_name="otel-run"

  # --user "$(id -u):$(id -g)" \
docker run \
  -v $(pwd):/src \
  -v /home/runner \
  -v $(pwd):/backup \
  -w /src \
  --name ${container_name} \
  "$BUILD_IMAGE" bash -c \
    "cd /home/runner/ \
    && tar xf ${backup} --strip 1 &> /dev/null || { \
    echo 'no bazel cache'
    } \
    && cd /src && ${command}"


docker run --rm --volumes-from ${container_name} -v /home/runner/.cache/bazel:/backup ubuntu tar cf ${backup} /home/runner

docker rm -f ${container_name}

docker rmi --force ${BUILD_IMAGE}
