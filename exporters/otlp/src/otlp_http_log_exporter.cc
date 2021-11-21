// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

#ifdef ENABLE_LOGS_PREVIEW

#  include "opentelemetry/exporters/otlp/otlp_http_log_exporter.h"
#  include "opentelemetry/exporters/otlp/otlp_log_recordable.h"
#  include "opentelemetry/exporters/otlp/otlp_recordable_utils.h"

#  include "opentelemetry/exporters/otlp/protobuf_include_prefix.h"

#  include "opentelemetry/proto/collector/logs/v1/logs_service.pb.h"

#  include "opentelemetry/exporters/otlp/protobuf_include_suffix.h"

namespace nostd = opentelemetry::nostd;

OPENTELEMETRY_BEGIN_NAMESPACE
namespace exporter
{
namespace otlp
{

OtlpHttpLogExporter::OtlpHttpLogExporter()
    : OtlpHttpLogExporter(GetDefaultOtlpHttpLogExporterOptions())
{}

OtlpHttpLogExporter::OtlpHttpLogExporter(const OtlpHttpExporterOptions &options)
    : options_(options),
      http_client_(OtlpHttpClientOptions(options.url,
                                         options.content_type,
                                         options.json_bytes_mapping,
                                         options.use_json_name,
                                         options.console_debug,
                                         options.timeout,
                                         options.http_headers))
{}

// ----------------------------- Exporter methods ------------------------------

std::unique_ptr<opentelemetry::sdk::logs::Recordable> OtlpHttpLogExporter::MakeRecordable() noexcept
{
  return std::unique_ptr<opentelemetry::sdk::logs::Recordable>(
      new exporter::otlp::OtlpLogRecordable());
}

opentelemetry::sdk::common::ExportResult OtlpHttpLogExporter::Export(
    const nostd::span<std::unique_ptr<opentelemetry::sdk::logs::Recordable>> &logs) noexcept
{
  proto::collector::logs::v1::ExportLogsServiceRequest service_request;
  OtlpRecordableUtils::PopulateRequest(logs, &service_request);
  return http_client_.Export(service_request);
}

bool OtlpHttpLogExporter::Shutdown(std::chrono::microseconds timeout) noexcept
{
  return http_client_.Shutdown(timeout);
}

}  // namespace otlp
}  // namespace exporter
OPENTELEMETRY_END_NAMESPACE

#endif
