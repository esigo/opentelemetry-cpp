// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

#pragma once
#ifndef ENABLE_METRICS_PREVIEW
#  include <memory>
#  include <vector>
#  include "opentelemetry/context/context.h"
#  include "opentelemetry/nostd/shared_ptr.h"
#  include "opentelemetry/sdk/common/attribute_utils.h"
#  include "opentelemetry/sdk/metrics/exemplar/filter.h"
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
  HistogramExemplarReservoir(size_t size,
                             std::shared_ptr<ReservoirCellSelector> reservoir_cell_selector,
                             nostd::function_ref < T(const ReservoirCell &reservoir_cell,
                                                     const MetricAttributes &attributes)
                                                       map_and_reset_cell)
      : reservoir_cell_selector_(reservoir_cell_selector), map_and_reset_cell_(map_and_reset_cell)
  {}

  class HistogramCellSelector : public ReservoirCellSelector
  {
    HistogramCellSelector(std::list<double> boundaries) : boundaries_(boundaries) {}

    int reservoirCellIndexFor(const std::vector<ReservoirCell> &cells,
                              double value,
                              const MetricAttributes &attributes,
                              const opentelemetry::context::Context &context) override
    {
      return reservoirCellIndexFor(cells, (double)value, attributes, context);
    }

    int reservoirCellIndexFor(const std::vector<ReservoirCell> &cells,
                              double value,
                              const MetricAttributes &attributes,
                              const opentelemetry::context::Context &context) override
    {
      for (int i = 0; i < boundaries_.size(); ++i)
      {
        if (value <= boundaries[i])
        {
          return i;
        }
      }
      return boundaries.size();
    }

    void reset()
    {
      // Do nothing
    }

  private:
    std::list<double> boundaries_;
  }
};

}  // namespace metrics
}  // namespace sdk
OPENTELEMETRY_END_NAMESPACE
#endif
