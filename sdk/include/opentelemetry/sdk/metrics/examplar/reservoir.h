// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

#pragma once
#ifndef ENABLE_METRICS_PREVIEW
#  include <list>
#  include "opentelemetry/sdk/metrics/examplar/data.h"

OPENTELEMETRY_BEGIN_NAMESPACE
namespace sdk
{
namespace metrics
{
/**
 * An interface for an exemplar reservoir of samples.
 *
 * <p>This represents a reservoir for a specific "point" of metric data.
 */
class ExemplarReservoir
{
public:
  virtual ~ExemplarReservoir() = default;

  /** Offers a long measurement to be sampled. */
  virtual void offerMeasurement(long value,
                                MetricAttributes attributes,
                                opentelemetry::trace::SpanContext context) noexcept = 0;

  /** Offers a double measurement to be sampled. */
  virtual void offerMeasurement(double value,
                                MetricAttributes attributes,
                                opentelemetry::trace::SpanContext context) noexcept = 0;

  /**
   * Builds (an immutable) list of Exemplars for exporting from the current reservoir.
   *
   * <p>Additionally, clears the reservoir for the next sampling period.
   *
   * @param pointAttributes the Attributes associated with the metric point.
   *     ExemplarDatas should filter these out of their final data state.
   * @return A list of sampled exemplars for this point. Implementers are expected to
   *     filter out pointAttributes from the original recorded attributes.
   */
  virtual std::list<ExemplarData> collectAndReset(MetricAttributes pointAttributes) noexcept = 0;
};

}  // namespace metrics
}  // namespace sdk
OPENTELEMETRY_END_NAMESPACE
#endif
