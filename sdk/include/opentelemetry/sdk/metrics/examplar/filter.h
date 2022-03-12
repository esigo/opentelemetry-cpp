// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

#pragma once
#ifndef ENABLE_METRICS_PREVIEW
#  include "opentelemetry/sdk/common/attribute_utils.h"
#  include "opentelemetry/trace/span_context.h"

OPENTELEMETRY_BEGIN_NAMESPACE
namespace sdk
{
namespace metrics
{
using MetricAttributes = opentelemetry::sdk::common::OrderedAttributeMap;

/**
 * Exemplar filters are used to pre-filter measurements before attempting to store them in a
 * reservoir.
 */
class ExemplarFilter
{
public:
  // Returns whether or not a reservoir should attempt to filter a measurement.
  virtual bool shouldSampleMeasurement(
      long value,
      const MetricAttributes &attributes,
      const opentelemetry::trace::SpanContext &context) noexcept = 0;

  // Returns whether or not a reservoir should attempt to filter a measurement.
  virtual bool shouldSampleMeasurement(
      double value,
      const MetricAttributes &attributes,
      const opentelemetry::trace::SpanContext &context) noexcept = 0;

  virtual ~ExemplarFilter() = default;
};

}  // namespace metrics
}  // namespace sdk
OPENTELEMETRY_END_NAMESPACE
#endif
