// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

#pragma once
#include <list>
#include "opentelemetry/nostd/shared_ptr.h"
#ifndef ENABLE_METRICS_PREVIEW
#  include "opentelemetry/sdk/common/attribute_utils.h"
#  include "opentelemetry/sdk/metrics/examplar/reservoir.h"
#  include "opentelemetry/trace/span_context.h"

OPENTELEMETRY_BEGIN_NAMESPACE
namespace sdk
{
namespace metrics
{
class NoExemplarReservoir final : public ExemplarReservoir
{

public:
  static nostd::shared_ptr<ExemplarReservoir> GetNoExemplarReservoir()
  {
    return nostd::shared_ptr<ExemplarReservoir>{new NoExemplarReservoir{}};
  }

  void offerMeasurement(long value,
                        MetricAttributes attributes,
                        opentelemetry::trace::SpanContext context) noexcept override
  {
    // Stores nothing
  }

  void offerMeasurement(double value,
                        MetricAttributes attributes,
                        opentelemetry::trace::SpanContext context) noexcept override
  {
    // Stores nothing.
  }

  std::list<ExemplarData> collectAndReset(MetricAttributes pointAttributes) noexcept override
  {
    return std::list<ExemplarData>{};
  }

private:
  explicit NoExemplarReservoir() = default;
};

}  // namespace metrics
}  // namespace sdk
OPENTELEMETRY_END_NAMESPACE
#endif
