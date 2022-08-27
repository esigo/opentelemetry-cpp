// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

#pragma once
#ifndef ENABLE_METRICS_PREVIEW
#  include <memory>
#  include <vector>
#  include "opentelemetry/context/context.h"
#  include "opentelemetry/nostd/function_ref.h"
#  include "opentelemetry/nostd/shared_ptr.h"
#  include "opentelemetry/sdk/common/attribute_utils.h"
#  include "opentelemetry/sdk/metrics/exemplar/reservoir.h"
#  include "opentelemetry/sdk/metrics/exemplar/reservoir_cell.h"
#  include "opentelemetry/sdk/metrics/exemplar/reservoir_cell_selector.h"

OPENTELEMETRY_BEGIN_NAMESPACE
namespace sdk
{
namespace metrics
{

template <typename T>
class FixedSizeExemplarReservoir : public ExemplarReservoir
{

public:
  FixedSizeExemplarReservoir(
      size_t size,
      std::shared_ptr<ReservoirCellSelector> reservoir_cell_selector,
      nostd::function_ref<T(const ReservoirCell &reservoir_cell,
                            const MetricAttributes &attributes)> map_and_reset_cell)
      : storage_(size),
        reservoir_cell_selector_(reservoir_cell_selector),
        map_and_reset_cell_(map_and_reset_cell)
  {}

  static nostd::shared_ptr<ExemplarReservoir> GetFixedSizeExemplarReservoir(
      std::shared_ptr<ExemplarFilter> filter,
      std::shared_ptr<ExemplarReservoir> reservoir)
  {
    return nostd::shared_ptr<ExemplarReservoir>{new FixedSizeExemplarReservoir{filter, reservoir}};
  }

  void OfferMeasurement(long value,
                        const MetricAttributes &attributes,
                        const opentelemetry::context::Context &context,
                        const opentelemetry::common::SystemTimestamp &timestamp) noexcept override
  {
    if (!reservoir_cell_selector_)
    {
      return;
    }
    auto idx =
        reservoir_cell_selector_->ReservoirCellIndexFor(storage_, value, attributes, context);
    if (idx != -1)
    {
      storage_[idx].RecordDoubleMeasurement(value, attributes, context);
    }
  }

  void OfferMeasurement(double value,
                        const MetricAttributes &attributes,
                        const opentelemetry::context::Context &context,
                        const opentelemetry::common::SystemTimestamp &timestamp) noexcept override
  {
    if (!reservoir_cell_selector_)
    {
      return;
    }
    auto idx =
        reservoir_cell_selector_->ReservoirCellIndexFor(storage_, value, attributes, context);
    if (idx != -1)
    {
      storage_[idx].RecordDoubleMeasurement(value, attributes, context);
    }
  }

  std::vector<ExemplarData> CollectAndReset(
      const MetricAttributes &pointAttributes) noexcept override
  {
    std::vector<ExemplarData> results;
    if (!reservoir_cell_selector_)
    {
      return results;
    }
    if (!map_and_reset_cell_)
    {
      reservoir_cell_selector_.reset();
      return results;
    }
    for (auto reservoirCell : storage_)
    {
      auto result = map_and_reset_cell_(reservoirCell, pointAttributes);
      results.push_back(result);
    }
    reservoir_cell_selector_.reset();
    return results;
  }

private:
  explicit FixedSizeExemplarReservoir() = default;
  std::vector<ReservoirCell> storage_;
  std::shared_ptr<ReservoirCellSelector> reservoir_cell_selector_;
  nostd::function_ref<T(const ReservoirCell &reservoir_cell, const MetricAttributes &attributes)>
      map_and_reset_cell_;
};

}  // namespace metrics
}  // namespace sdk
OPENTELEMETRY_END_NAMESPACE
#endif
