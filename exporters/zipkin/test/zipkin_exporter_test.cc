// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

#ifndef HAVE_CPP_STDLIB

#  include "opentelemetry/exporters/zipkin/zipkin_exporter.h"
#  include "opentelemetry/ext/http/server/http_server.h"
#  include "opentelemetry/sdk/trace/batch_span_processor.h"
#  include "opentelemetry/sdk/trace/tracer_provider.h"
#  include "opentelemetry/trace/provider.h"

#  include <gtest/gtest.h>

#  include "nlohmann/json.hpp"

using namespace testing;

OPENTELEMETRY_BEGIN_NAMESPACE
namespace exporter
{
namespace zipkin
{

namespace trace_api = opentelemetry::trace;
namespace resource  = opentelemetry::sdk::resource;

template <class T, size_t N>
static nostd::span<T, N> MakeSpan(T (&array)[N])
{
  return nostd::span<T, N>(array);
}

class ZipkinExporterTestPeer
{
protected:

public:
  ZipkinExporterTestPeer() = default;

public:
  std::unique_ptr<sdk::trace::SpanExporter> GetExporter()
  {
    return std::unique_ptr<sdk::trace::SpanExporter>(new ZipkinExporter(ZipkinExporterOptions{}));
  }

  // Get the options associated with the given exporter.
  const ZipkinExporterOptions &GetOptions(std::unique_ptr<ZipkinExporter> &exporter)
  {
    return exporter->options_;
  }
};

#  endif

}  // namespace zipkin
}  // namespace exporter
OPENTELEMETRY_END_NAMESPACE