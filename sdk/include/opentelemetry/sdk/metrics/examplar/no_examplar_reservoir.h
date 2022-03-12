// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

#pragma once
#ifndef ENABLE_METRICS_PREVIEW
#  include "opentelemetry/sdk/common/attribute_utils.h"
#  include "opentelemetry/sdk/metrics/examplar/reservoir.h"
#  include "opentelemetry/trace/span_context.h"
#include <vector>
#include "opentelemetry/nostd/shared_ptr.h"

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

  void OfferMeasurement(long value,
                        const MetricAttributes &attributes,
                        const opentelemetry::trace::SpanContext &context) noexcept override
  {
    // Stores nothing
  }

  void OfferMeasurement(double value,
                        const MetricAttributes &attributes,
                        const opentelemetry::trace::SpanContext &context) noexcept override
  {
    // Stores nothing.
  }

  std::vector<ExemplarData> CollectAndReset(
      const MetricAttributes &pointAttributes) noexcept override
  {
    return std::vector<ExemplarData>{};
  }

private:
  explicit NoExemplarReservoir() = default;
};

}  // namespace metrics
}  // namespace sdk
OPENTELEMETRY_END_NAMESPACE
#endif
