window.BENCHMARK_DATA = {
  "lastUpdate": 1647370834604,
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
    ],
    "OpenTelemetry-cpp sdk Benchmark": [
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
        "date": 1647370833545,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 18819999.69482422,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 12602580 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 246.62112114340079,
            "unit": "ns/iter",
            "extra": "iterations: 571039\ncpu: 246.01577125205108 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.8734200221743285,
            "unit": "ns/iter",
            "extra": "iterations: 52438778\ncpu: 2.848502686313552 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.9227133636834877,
            "unit": "ns/iter",
            "extra": "iterations: 51065817\ncpu: 2.731882268719993 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 120.26368893374757,
            "unit": "ns/iter",
            "extra": "iterations: 1446024\ncpu: 96.31983978135906 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 400.88961230186396,
            "unit": "ns/iter",
            "extra": "iterations: 349672\ncpu: 399.7614907684918 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 51.27462743326328,
            "unit": "ns/iter",
            "extra": "iterations: 2794300\ncpu: 50.73921912464657 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 54.734886819689976,
            "unit": "ns/iter",
            "extra": "iterations: 2828791\ncpu: 50.54926291832796 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 70.07461114154006,
            "unit": "ns/iter",
            "extra": "iterations: 2920859\ncpu: 49.25807784627743 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 36.71418052765212,
            "unit": "ns/iter",
            "extra": "iterations: 5844389\ncpu: 24.1157972202056 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1163.7270101053493,
            "unit": "ns/iter",
            "extra": "iterations: 143240\ncpu: 981.4451270594828 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1261.5933566314336,
            "unit": "ns/iter",
            "extra": "iterations: 142690\ncpu: 1012.7850585184649 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 183.61468570528646,
            "unit": "ns/iter",
            "extra": "iterations: 762311\ncpu: 183.310748500284 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.4036259748588957,
            "unit": "ns/iter",
            "extra": "iterations: 41073304\ncpu: 3.3999870085932216 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.763452558567755,
            "unit": "ns/iter",
            "extra": "iterations: 16513368\ncpu: 8.753532289718247 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 514782.4287414551,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 24041.600000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 5163925.396997515,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 205289.36170212767 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11207449.436187744,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 436131.0000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 378193.9953270621,
            "unit": "ns/iter",
            "extra": "iterations: 6163\ncpu: 23655.81697225377 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1240751.3102105896,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 199245.1499118165 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 1776273.9620907768,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 382192.67015706823 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}