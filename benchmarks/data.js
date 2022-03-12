window.BENCHMARK_DATA = {
  "lastUpdate": 1647081060138,
  "repoUrl": "https://github.com/esigo/opentelemetry-cpp",
  "entries": {
    "OpenTelemetry-cpp sdk Benchmark": [
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c33028b38870dcbe32031bc3f66f6b67c1b59acf",
          "message": "docker action",
          "timestamp": "2022-03-12T10:44:28+01:00",
          "tree_id": "3c281253e68244357e60ecd5a114247f0141a0f9",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/c33028b38870dcbe32031bc3f66f6b67c1b59acf"
        },
        "date": 1647079645943,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9102557105179687,
            "unit": "ns/iter",
            "extra": "iterations: 75321461\ncpu: 1.8562305901103007 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.2896772097218583,
            "unit": "ns/iter",
            "extra": "iterations: 69902137\ncpu: 1.9227738345109535 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 292.2860924432818,
            "unit": "ns/iter",
            "extra": "iterations: 535680\ncpu: 267.2621714456392 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 342.314584824368,
            "unit": "ns/iter",
            "extra": "iterations: 423447\ncpu: 330.49708700262386 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 49.41017729811995,
            "unit": "ns/iter",
            "extra": "iterations: 3167206\ncpu: 45.74441952938961 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 82.36633932329968,
            "unit": "ns/iter",
            "extra": "iterations: 3114364\ncpu: 45.30812711680457 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 63.540622451455114,
            "unit": "ns/iter",
            "extra": "iterations: 2834984\ncpu: 49.62250227867247 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 30.44012460292032,
            "unit": "ns/iter",
            "extra": "iterations: 4753981\ncpu: 29.616231112408737 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2571.575445174083,
            "unit": "ns/iter",
            "extra": "iterations: 58685\ncpu: 2435.068586521255 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2420.464654265145,
            "unit": "ns/iter",
            "extra": "iterations: 60856\ncpu: 2372.6994873143117 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5919329.860003017,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 85960 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8954991.450000307,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 115349.99999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5814129.3500011675,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 223340 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3101486.4029998537,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 83034.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2416789.076999976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 100938.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2568578.2213111822,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 164413.34894613584 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.56137687887219,
            "unit": "ns/iter",
            "extra": "iterations: 27078780\ncpu: 5.397104300858457 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.203055066608033,
            "unit": "ns/iter",
            "extra": "iterations: 26728779\ncpu: 5.28217169965003 ns\nthreads: 1"
          }
        ]
      }
    ],
    "OpenTelemetry-cpp api Benchmark": [
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c33028b38870dcbe32031bc3f66f6b67c1b59acf",
          "message": "docker action",
          "timestamp": "2022-03-12T10:44:28+01:00",
          "tree_id": "3c281253e68244357e60ecd5a114247f0141a0f9",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/c33028b38870dcbe32031bc3f66f6b67c1b59acf"
        },
        "date": 1647079651508,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.7545348236591116,
            "unit": "ns/iter",
            "extra": "iterations: 77207302\ncpu: 1.747567866054949 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 5.439689002215092,
            "unit": "ns/iter",
            "extra": "iterations: 78904357\ncpu: 2.011992823159309 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 3.9554122185441782,
            "unit": "ns/iter",
            "extra": "iterations: 75200086\ncpu: 1.8114208007687647 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 3.5901237880649957,
            "unit": "ns/iter",
            "extra": "iterations: 73386801\ncpu: 1.9150991470523437 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 61.94296518959455,
            "unit": "ns/iter",
            "extra": "iterations: 2301647\ncpu: 60.47452107121551 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 911.4405355646518,
            "unit": "ns/iter",
            "extra": "iterations: 171632\ncpu: 825.0850657220101 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 3448.1363561479584,
            "unit": "ns/iter",
            "extra": "iterations: 54673\ncpu: 2669.288314158725 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 410.9298266151219,
            "unit": "ns/iter",
            "extra": "iterations: 341497\ncpu: 406.89962137295515 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2776.391467712651,
            "unit": "ns/iter",
            "extra": "iterations: 54827\ncpu: 2639.8672187061134 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.14351793047000186,
            "unit": "ms/iter",
            "extra": "iterations: 978\ncpu: 0.14039775051124748 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 3.2222922999987227,
            "unit": "ms/iter",
            "extra": "iterations: 60\ncpu: 0.3665500000000002 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 9.83374720408392,
            "unit": "ms/iter",
            "extra": "iterations: 49\ncpu: 0.7383877551020412 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14022067369453625,
            "unit": "ms/iter",
            "extra": "iterations: 996\ncpu: 0.14430120481927708 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6488538256881847,
            "unit": "ms/iter",
            "extra": "iterations: 218\ncpu: 1.190357798165138 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.1111366864389634,
            "unit": "ms/iter",
            "extra": "iterations: 118\ncpu: 2.8452288135593236 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14041017317327903,
            "unit": "ms/iter",
            "extra": "iterations: 999\ncpu: 0.14430830830830826 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.6351781383935011,
            "unit": "ms/iter",
            "extra": "iterations: 224\ncpu: 1.1719151785714281 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.5018200315831851,
            "unit": "ms/iter",
            "extra": "iterations: 95\ncpu: 4.248326315789474 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 2.8446296326513463,
            "unit": "ms/iter",
            "extra": "iterations: 49\ncpu: 2.8425714285714334 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 6.660634739111392,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 11.723739130434796 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 9.418866333332213,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 25.053733333333355 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 7902.607052373388,
            "unit": "ns/iter",
            "extra": "iterations: 19738\ncpu: 7144.239537947107 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.004721465462091,
            "unit": "ns/iter",
            "extra": "iterations: 71669909\ncpu: 1.9654831709078906 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 123754.8567901903,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 116548.14814814815 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.7457614616511714,
            "unit": "ns/iter",
            "extra": "iterations: 82372323\ncpu: 1.6741666979575158 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 5112.119138782247,
            "unit": "ns/iter",
            "extra": "iterations: 44402\ncpu: 3237.9847754605635 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 52615.23913053753,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 50281.60535117056 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4483.499986441803,
            "unit": "ns/iter",
            "extra": "iterations: 36889\ncpu: 3783.70245872753 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 60091.932409918714,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 58413.51805205717 ns\nthreads: 1"
          }
        ]
      }
    ],
    "OpenTelemetry-cpp exporters Benchmark": [
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c33028b38870dcbe32031bc3f66f6b67c1b59acf",
          "message": "docker action",
          "timestamp": "2022-03-12T10:44:28+01:00",
          "tree_id": "3c281253e68244357e60ecd5a114247f0141a0f9",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/c33028b38870dcbe32031bc3f66f6b67c1b59acf"
        },
        "date": 1647079654725,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 71.59221528106987,
            "unit": "ns/iter",
            "extra": "iterations: 2081000\ncpu: 68.47717443536763 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 227.98789176071037,
            "unit": "ns/iter",
            "extra": "iterations: 619000\ncpu: 226.6558966074313 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 2542.513341769002,
            "unit": "ns/iter",
            "extra": "iterations: 79000\ncpu: 1793.2025316455693 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_local",
            "value": 91439362.19998068,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1213299.9999999949 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c57999a7805bd1e8fe306622e507e98495b32c4d",
          "message": "mac bazel cache",
          "timestamp": "2022-03-12T11:09:26+01:00",
          "tree_id": "8912608dc2ae52cc2813d7b44c080b8956aa11b2",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/c57999a7805bd1e8fe306622e507e98495b32c4d"
        },
        "date": 1647081059605,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 76.54987476359784,
            "unit": "ns/iter",
            "extra": "iterations: 2116000\ncpu: 69.40831758034027 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 239.4955741934727,
            "unit": "ns/iter",
            "extra": "iterations: 620000\ncpu: 227.83225806451614 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1821.9461012680006,
            "unit": "ns/iter",
            "extra": "iterations: 79000\ncpu: 1780.050632911392 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_local",
            "value": 108904641.09997992,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 999700.0000000034 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}