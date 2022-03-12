// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

#ifndef ENABLE_METRICS_PREVIEW
#  include "opentelemetry/sdk/metrics/examplar/never_sample_filter.h"
#  include <gtest/gtest.h>

using namespace opentelemetry::sdk::metrics;

TEST(NeverSampleFilter, SampleMeasurement)
{
  auto filter = opentelemetry::sdk::metrics::NeverSampleFilter::GetNeverSampleFilter();
  ASSERT_FALSE(filter->shouldSampleMeasurement(1.0, MetricAttributes{},
                                               opentelemetry::trace::SpanContext{false, false}));
  ASSERT_FALSE(filter->shouldSampleMeasurement(1l, MetricAttributes{},
                                               opentelemetry::trace::SpanContext{false, false}));
}

#endif
