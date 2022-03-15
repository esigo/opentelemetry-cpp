window.BENCHMARK_DATA = {
  "lastUpdate": 1647370836213,
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
    ],
    "OpenTelemetry-cpp api Benchmark": [
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
        "date": 1647370834083,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4156.701473419428,
            "unit": "ns/iter",
            "extra": "iterations: 33061\ncpu: 4144.529808535737 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.675261281333472,
            "unit": "ns/iter",
            "extra": "iterations: 52957086\ncpu: 2.674971579818422 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 86668.53109995525,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 86660.91666666667 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.723818824369189,
            "unit": "ns/iter",
            "extra": "iterations: 51963477\ncpu: 2.7238342807583886 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 714.3397493498517,
            "unit": "ns/iter",
            "extra": "iterations: 194954\ncpu: 714.3423576843768 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17916.121068788845,
            "unit": "ns/iter",
            "extra": "iterations: 7497\ncpu: 17916.273175937025 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3065.41609719903,
            "unit": "ns/iter",
            "extra": "iterations: 42617\ncpu: 3064.9881502686744 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 55885.63358258901,
            "unit": "ns/iter",
            "extra": "iterations: 2544\ncpu: 55881.092767295624 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 61.93497688536974,
            "unit": "ns/iter",
            "extra": "iterations: 2278568\ncpu: 61.850205918805145 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 385.5124779163691,
            "unit": "ns/iter",
            "extra": "iterations: 337805\ncpu: 384.1680851378754 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1205.0463555915896,
            "unit": "ns/iter",
            "extra": "iterations: 115846\ncpu: 1193.0502563748419 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 263.5333789203418,
            "unit": "ns/iter",
            "extra": "iterations: 542619\ncpu: 262.17327443381095 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1113.8200345058485,
            "unit": "ns/iter",
            "extra": "iterations: 132190\ncpu: 1110.9433391330667 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.390757717993152,
            "unit": "ns/iter",
            "extra": "iterations: 53059244\ncpu: 2.389570420566113 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.6744377437699565,
            "unit": "ns/iter",
            "extra": "iterations: 47429330\ncpu: 2.674197590393961 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.644284747811707,
            "unit": "ns/iter",
            "extra": "iterations: 13039024\ncpu: 10.641371624133834 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.2726784174055803,
            "unit": "ns/iter",
            "extra": "iterations: 63522312\ncpu: 2.271507372086834 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.6436907351787085,
            "unit": "ms/iter",
            "extra": "iterations: 387\ncpu: 0.1626669250645995 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 1.0492996293671277,
            "unit": "ms/iter",
            "extra": "iterations: 98\ncpu: 0.30854693877551026 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 1.25654935836792,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.16142800000000013 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.5516462326049805,
            "unit": "ms/iter",
            "extra": "iterations: 250\ncpu: 0.3300436000000001 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.9685541163979238,
            "unit": "ms/iter",
            "extra": "iterations: 173\ncpu: 0.16401156069364167 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.5782508404455452,
            "unit": "ms/iter",
            "extra": "iterations: 214\ncpu: 0.3116308411214953 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 25.569677352905273,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 7.346657142857141 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 44.06205813090006,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 24.39636666666667 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}