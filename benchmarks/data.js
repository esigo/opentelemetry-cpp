window.BENCHMARK_DATA = {
  "lastUpdate": 1647298182057,
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
          "id": "6f269de026fd918b0208714a2e7b47c37ef82306",
          "message": "downgrade collector",
          "timestamp": "2022-03-14T23:27:56+01:00",
          "tree_id": "a895b68944b018e87ce78fc70a33804c15eafe14",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/6f269de026fd918b0208714a2e7b47c37ef82306"
        },
        "date": 1647298177154,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.0212495936011385,
            "unit": "ns/iter",
            "extra": "iterations: 68119891\ncpu: 2.001089520240131 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.09455439648498,
            "unit": "ns/iter",
            "extra": "iterations: 68406137\ncpu: 2.0335602345152166 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 279.35901143132975,
            "unit": "ns/iter",
            "extra": "iterations: 495909\ncpu: 278.49665966941524 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 397.3774711456309,
            "unit": "ns/iter",
            "extra": "iterations: 430266\ncpu: 328.0807686407943 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 66.75464735919839,
            "unit": "ns/iter",
            "extra": "iterations: 2678349\ncpu: 52.18588018215699 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 79.18157185321121,
            "unit": "ns/iter",
            "extra": "iterations: 2610333\ncpu: 52.28336767761047 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 51.632161143853644,
            "unit": "ns/iter",
            "extra": "iterations: 2799832\ncpu: 50.026930187239785 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 30.991097203547554,
            "unit": "ns/iter",
            "extra": "iterations: 4590917\ncpu: 30.430739653973262 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 3004.757116541126,
            "unit": "ns/iter",
            "extra": "iterations: 69486\ncpu: 2034.7264197104466 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1993.4860926557471,
            "unit": "ns/iter",
            "extra": "iterations: 70754\ncpu: 1959.5358566300092 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 7576618.130001407,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 75920 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8307543.500000065,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 109489.99999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5656784.92999723,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 196049.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3040526.7669998463,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 79008 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2113851.0000000536,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 99169.93464052287 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2416266.190525455,
            "unit": "ns/iter",
            "extra": "iterations: 971\ncpu: 158723.9958805356 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.198204852591925,
            "unit": "ns/iter",
            "extra": "iterations: 27319205\ncpu: 5.113948227995652 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.454165883448712,
            "unit": "ns/iter",
            "extra": "iterations: 27093977\ncpu: 5.117447320487502 ns\nthreads: 1"
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
          "id": "6f269de026fd918b0208714a2e7b47c37ef82306",
          "message": "downgrade collector",
          "timestamp": "2022-03-14T23:27:56+01:00",
          "tree_id": "a895b68944b018e87ce78fc70a33804c15eafe14",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/6f269de026fd918b0208714a2e7b47c37ef82306"
        },
        "date": 1647298178142,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 72.08713671494426,
            "unit": "ns/iter",
            "extra": "iterations: 2070000\ncpu: 67.57777777777778 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 230.15344075859488,
            "unit": "ns/iter",
            "extra": "iterations: 633000\ncpu: 225.97472353870452 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1850.4278860757638,
            "unit": "ns/iter",
            "extra": "iterations: 79000\ncpu: 1753.113924050633 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_local",
            "value": 187304646.9000201,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1163499.999999995 ns\nthreads: 1"
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
          "id": "6f269de026fd918b0208714a2e7b47c37ef82306",
          "message": "downgrade collector",
          "timestamp": "2022-03-14T23:27:56+01:00",
          "tree_id": "a895b68944b018e87ce78fc70a33804c15eafe14",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/6f269de026fd918b0208714a2e7b47c37ef82306"
        },
        "date": 1647298180863,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.335264618403171,
            "unit": "ns/iter",
            "extra": "iterations: 68366051\ncpu: 2.009974219514302 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.2198903165657264,
            "unit": "ns/iter",
            "extra": "iterations: 69961521\ncpu: 2.007803689688221 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 2.1054803571101464,
            "unit": "ns/iter",
            "extra": "iterations: 79545455\ncpu: 1.7769839898458057 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.077646586415164,
            "unit": "ns/iter",
            "extra": "iterations: 66940805\ncpu: 2.0268952546955457 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 68.32143657535521,
            "unit": "ns/iter",
            "extra": "iterations: 2262297\ncpu: 62.38968623483124 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 828.1394167390632,
            "unit": "ns/iter",
            "extra": "iterations: 170661\ncpu: 816.531017631445 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2801.84852022175,
            "unit": "ns/iter",
            "extra": "iterations: 51393\ncpu: 2760.9207479617858 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 451.75695196548844,
            "unit": "ns/iter",
            "extra": "iterations: 346269\ncpu: 397.0699080772462 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2905.5681177859014,
            "unit": "ns/iter",
            "extra": "iterations: 50398\ncpu: 2808.8217786420096 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.14444668617570192,
            "unit": "ms/iter",
            "extra": "iterations: 991\ncpu: 0.14046215943491422 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.9358315976347922,
            "unit": "ms/iter",
            "extra": "iterations: 169\ncpu: 0.3587692307692309 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 0.48820915342431576,
            "unit": "ms/iter",
            "extra": "iterations: 365\ncpu: 0.38550136986301387 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.13271829963604265,
            "unit": "ms/iter",
            "extra": "iterations: 1098\ncpu: 0.13856921675774136 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6492055459203788,
            "unit": "ms/iter",
            "extra": "iterations: 196\ncpu: 1.1955306122448979 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.2218587211542888,
            "unit": "ms/iter",
            "extra": "iterations: 104\ncpu: 2.7151346153846165 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.13765154051405462,
            "unit": "ms/iter",
            "extra": "iterations: 1012\ncpu: 0.13814426877470376 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.77757976243236,
            "unit": "ms/iter",
            "extra": "iterations: 181\ncpu: 1.4604309392265205 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.4256297363648296,
            "unit": "ms/iter",
            "extra": "iterations: 110\ncpu: 3.930727272727273 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 2.8478100416672683,
            "unit": "ms/iter",
            "extra": "iterations: 48\ncpu: 2.8177083333333353 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 40.87797171431313,
            "unit": "ms/iter",
            "extra": "iterations: 7\ncpu: 32.60057142857147 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 142.28596900011325,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 137.3720000000005 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 12370.766358819781,
            "unit": "ns/iter",
            "extra": "iterations: 20249\ncpu: 6759.4449108597955 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.0127109926449145,
            "unit": "ns/iter",
            "extra": "iterations: 68962120\ncpu: 1.9887149640991315 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 118136.22572992061,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 112182.32044198892 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.7778816857935986,
            "unit": "ns/iter",
            "extra": "iterations: 83762116\ncpu: 1.671531316138193 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 4003.9122042376393,
            "unit": "ns/iter",
            "extra": "iterations: 46574\ncpu: 3257.160647571607 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 70143.02669747145,
            "unit": "ns/iter",
            "extra": "iterations: 3034\ncpu: 43676.00527356625 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 12532.078861557722,
            "unit": "ns/iter",
            "extra": "iterations: 36190\ncpu: 3834.7609836971515 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 58380.36715181781,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 58218.29521829522 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}