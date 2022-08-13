// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

#pragma once
#ifndef ENABLE_METRICS_PREVIEW
#  include <memory>
#  include <vector>
#  include "opentelemetry/context/context.h"
#  include "opentelemetry/nostd/shared_ptr.h"
#  include "opentelemetry/sdk/common/attribute_utils.h"
#  include "opentelemetry/sdk/metrics/exemplar/data.h"
#  include "opentelemetry/sdk/metrics/exemplar/filter.h"
#  include "opentelemetry/sdk/metrics/exemplar/fixed_size_exemplar_reservoir.h"
#  include "opentelemetry/sdk/metrics/exemplar/reservoir.h"
#  include "opentelemetry/sdk/metrics/exemplar/reservoir_cell_selector.h"

OPENTELEMETRY_BEGIN_NAMESPACE
namespace sdk
{
namespace metrics
{

class HistogramExemplarReservoir : public FixedSizeExemplarReservoir<ExemplarData>
{

public:
  static nostd::shared_ptr<ExemplarReservoir> GetHistogramExemplarReservoir(
      size_t size,
      std::shared_ptr<ReservoirCellSelector> reservoir_cell_selector,
      nostd::function_ref<ExemplarData(const ReservoirCell &reservoir_cell,
                                       const MetricAttributes &attributes)> map_and_reset_cell)

  {
    return nostd::shared_ptr<ExemplarReservoir>{
        new HistogramExemplarReservoir{size, reservoir_cell_selector, map_and_reset_cell}};
  }

  HistogramExemplarReservoir(
      size_t size,
      std::shared_ptr<ReservoirCellSelector> reservoir_cell_selector,
      nostd::function_ref<ExemplarData(const ReservoirCell &reservoir_cell,
                                       const MetricAttributes &attributes)> map_and_reset_cell)
      : FixedSizeExemplarReservoir<ExemplarData>(size, reservoir_cell_selector, map_and_reset_cell)
  {}

  class HistogramCellSelector : public ReservoirCellSelector
  {
  public:
    HistogramCellSelector(const std::vector<double> &boundaries) : boundaries_(boundaries) {}

    int ReservoirCellIndexFor(const std::vector<ReservoirCell> &cells,
                              long value,
                              const MetricAttributes &attributes,
                              const opentelemetry::context::Context &context) override
    {
      return ReservoirCellIndexFor(cells, (double)value, attributes, context);
    }

    int ReservoirCellIndexFor(const std::vector<ReservoirCell> &cells,
                              double value,
                              const MetricAttributes &attributes,
                              const opentelemetry::context::Context &context) override
    {
      for (size_t i = 0; i < boundaries_.size(); ++i)
      {
        if (value <= boundaries_[i])
        {
          return i;
        }
      }
      return boundaries_.size();
    }

  private:
    void reset() override
    {
      // Do nothing
    }
    std::vector<double> boundaries_;
  };
};

}  // namespace metrics
}  // namespace sdk
OPENTELEMETRY_END_NAMESPACE
#endif
