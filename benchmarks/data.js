window.BENCHMARK_DATA = {
  "lastUpdate": 1647370831897,
  "repoUrl": "https://github.com/esigo/opentelemetry-cpp",
  "entries": {
    "OpenTelemetry-cpp exporters Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Ehsan Saei",
            "username": "esigo",
            "email": "71217171+esigo@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9f2aa70f79e1e087b51651618ceec21013bff1c0",
          "message": "benchmark cron (#12)",
          "timestamp": "2022-03-15T17:58:39Z",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/9f2aa70f79e1e087b51651618ceec21013bff1c0"
        },
        "date": 1647370831332,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 36.17830780951743,
            "unit": "ns/iter",
            "extra": "iterations: 3970000\ncpu: 36.043425692695216 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 99.93815767592278,
            "unit": "ns/iter",
            "extra": "iterations: 1380000\ncpu: 99.85463768115945 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 821.4983073147861,
            "unit": "ns/iter",
            "extra": "iterations: 176000\ncpu: 818.4335227272727 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 3173340.9963923395,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 543196.0431654677 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}