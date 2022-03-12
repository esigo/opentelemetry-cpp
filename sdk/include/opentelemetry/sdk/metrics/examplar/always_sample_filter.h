// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

#pragma once
#ifndef ENABLE_METRICS_PREVIEW
#  include "opentelemetry/sdk/metrics/examplar/filter.h"

OPENTELEMETRY_BEGIN_NAMESPACE
namespace sdk
{
namespace metrics
{

class AlwaysSampleFilter final : public ExemplarFilter
{
public:
  static nostd::shared_ptr<ExemplarFilter> GetAlwaysSampleFilter()
  {
    return nostd::shared_ptr<ExemplarFilter>{new AlwaysSampleFilter{}};
  }

  bool shouldSampleMeasurement(long value,
                               MetricAttributes attributes,
                               opentelemetry::trace::SpanContext context) noexcept override
  {
    return true;
  }

  bool shouldSampleMeasurement(double value,
                               MetricAttributes attributes,
                               opentelemetry::trace::SpanContext context) noexcept override
  {
    return true;
  }

private:
  explicit AlwaysSampleFilter() = default;
};
}  // namespace metrics
}  // namespace sdk
OPENTELEMETRY_END_NAMESPACE
#endif