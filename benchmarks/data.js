window.BENCHMARK_DATA = {
  "lastUpdate": 1647366808811,
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
          "id": "1dfc7dd7247183840151833090dbe944ec8a3975",
          "message": "rename",
          "timestamp": "2022-03-14T23:50:41+01:00",
          "tree_id": "d255e57a678e1902422bbf0dcb4c312552dad54c",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/1dfc7dd7247183840151833090dbe944ec8a3975"
        },
        "date": 1647299649234,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.2636238114047966,
            "unit": "ns/iter",
            "extra": "iterations: 70857374\ncpu: 1.9254312190570309 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.3366758547505064,
            "unit": "ns/iter",
            "extra": "iterations: 71152673\ncpu: 1.8836115967140123 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 345.5138975208103,
            "unit": "ns/iter",
            "extra": "iterations: 510055\ncpu: 269.9434374724295 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 449.3430489650722,
            "unit": "ns/iter",
            "extra": "iterations: 427181\ncpu: 337.7654905063663 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 46.65888276318762,
            "unit": "ns/iter",
            "extra": "iterations: 3144866\ncpu: 44.14210335193931 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 47.82926658009384,
            "unit": "ns/iter",
            "extra": "iterations: 3133253\ncpu: 44.2680498510653 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 55.63695096999395,
            "unit": "ns/iter",
            "extra": "iterations: 2698327\ncpu: 52.297219721701666 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 34.69778747065393,
            "unit": "ns/iter",
            "extra": "iterations: 4773270\ncpu: 29.65870357218423 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2221.592317435131,
            "unit": "ns/iter",
            "extra": "iterations: 70263\ncpu: 2029.845010887664 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2220.991354853962,
            "unit": "ns/iter",
            "extra": "iterations: 67321\ncpu: 2037.9227878373756 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6562748.117999945,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 88954.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7378199.830000085,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 119720.00000000012 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5789253.720001852,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 162960.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3118477.827000106,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 87543.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2374284.6743044327,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 112235.6792144026 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5849034.961587614,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 176504.48143405886 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.181584593493043,
            "unit": "ns/iter",
            "extra": "iterations: 27086114\ncpu: 5.16194386540646 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.823736927858161,
            "unit": "ns/iter",
            "extra": "iterations: 26924630\ncpu: 5.236357936952152 ns\nthreads: 1"
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
          "id": "1dfc7dd7247183840151833090dbe944ec8a3975",
          "message": "rename",
          "timestamp": "2022-03-14T23:50:41+01:00",
          "tree_id": "d255e57a678e1902422bbf0dcb4c312552dad54c",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/1dfc7dd7247183840151833090dbe944ec8a3975"
        },
        "date": 1647299647754,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 70.1767003909593,
            "unit": "ns/iter",
            "extra": "iterations: 2046000\ncpu: 69.16226783968719 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 238.0207892978141,
            "unit": "ns/iter",
            "extra": "iterations: 598000\ncpu: 235.47157190635463 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1882.1933552610396,
            "unit": "ns/iter",
            "extra": "iterations: 76000\ncpu: 1810.434210526317 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_local",
            "value": 143732195.40000266,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1230500.0000000012 ns\nthreads: 1"
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
          "id": "58013e60f0b4a5ca8c02f36cb50f876c2f0fcae7",
          "message": "schedule",
          "timestamp": "2022-03-15T18:25:19+01:00",
          "tree_id": "72a4dff18e739cbe7bcc3e717cee0a9591bc65f0",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/58013e60f0b4a5ca8c02f36cb50f876c2f0fcae7"
        },
        "date": 1647366806905,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 498.2300660049303,
            "unit": "ns/iter",
            "extra": "iterations: 2015000\ncpu: 140.09330024813895 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 278.93780067590853,
            "unit": "ns/iter",
            "extra": "iterations: 592000\ncpu: 237.84290540540536 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 2069.493076923652,
            "unit": "ns/iter",
            "extra": "iterations: 78000\ncpu: 1808.128205128205 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_local",
            "value": 523393679.0000371,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3171999.9999999525 ns\nthreads: 1"
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
          "id": "1dfc7dd7247183840151833090dbe944ec8a3975",
          "message": "rename",
          "timestamp": "2022-03-14T23:50:41+01:00",
          "tree_id": "d255e57a678e1902422bbf0dcb4c312552dad54c",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/1dfc7dd7247183840151833090dbe944ec8a3975"
        },
        "date": 1647299649892,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.0258679329950735,
            "unit": "ns/iter",
            "extra": "iterations: 79482230\ncpu: 1.9439691110830686 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.3334466846234085,
            "unit": "ns/iter",
            "extra": "iterations: 79302141\ncpu: 1.9441215338688014 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 2.199791139492396,
            "unit": "ns/iter",
            "extra": "iterations: 81277213\ncpu: 1.783931739883846 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.8086342177410784,
            "unit": "ns/iter",
            "extra": "iterations: 75301205\ncpu: 1.7692147157538833 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 96.20755201485734,
            "unit": "ns/iter",
            "extra": "iterations: 2231431\ncpu: 63.30825376182369 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 923.1470700027295,
            "unit": "ns/iter",
            "extra": "iterations: 181519\ncpu: 794.2970157393994 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2928.8834907420496,
            "unit": "ns/iter",
            "extra": "iterations: 52940\ncpu: 2597.7521722704937 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 478.14159419570353,
            "unit": "ns/iter",
            "extra": "iterations: 346921\ncpu: 415.90160295859897 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 3271.958015125632,
            "unit": "ns/iter",
            "extra": "iterations: 53948\ncpu: 2637.669607770444 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.14866408858071237,
            "unit": "ms/iter",
            "extra": "iterations: 937\ncpu: 0.15307577374599787 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 1.018425390000175,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.3115299999999996 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 2.5637462500007757,
            "unit": "ms/iter",
            "extra": "iterations: 64\ncpu: 0.4696093750000004 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14310398776760885,
            "unit": "ms/iter",
            "extra": "iterations: 981\ncpu: 0.14406422018348622 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.5659588923607985,
            "unit": "ms/iter",
            "extra": "iterations: 288\ncpu: 0.43592013888888875 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.1800162863633803,
            "unit": "ms/iter",
            "extra": "iterations: 220\ncpu: 2.598595454545455 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14904153926710162,
            "unit": "ms/iter",
            "extra": "iterations: 955\ncpu: 0.14710680628272255 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.609620783783661,
            "unit": "ms/iter",
            "extra": "iterations: 222\ncpu: 1.0844549549549554 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 0.8577541127273104,
            "unit": "ms/iter",
            "extra": "iterations: 275\ncpu: 1.6607636363636347 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 4.218175030301251,
            "unit": "ms/iter",
            "extra": "iterations: 33\ncpu: 2.9639090909090853 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 54.99981250000019,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 53.10249999999983 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 218.36228199981633,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 139.23300000000037 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 8097.359402376918,
            "unit": "ns/iter",
            "extra": "iterations: 19410\ncpu: 6993.096342091704 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.250519932877802,
            "unit": "ns/iter",
            "extra": "iterations: 71732336\ncpu: 1.9649854983113888 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 128971.80491809642,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 114885.24590163934 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.996891499282216,
            "unit": "ns/iter",
            "extra": "iterations: 82703214\ncpu: 1.6872016606271194 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 4648.044382773894,
            "unit": "ns/iter",
            "extra": "iterations: 46482\ncpu: 3078.6325889591676 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 64427.652317867134,
            "unit": "ns/iter",
            "extra": "iterations: 2718\ncpu: 45073.95143487856 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4074.3846907961365,
            "unit": "ns/iter",
            "extra": "iterations: 37742\ncpu: 3662.471517142704 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 83126.23498463164,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 61486.190267426464 ns\nthreads: 1"
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
          "id": "58013e60f0b4a5ca8c02f36cb50f876c2f0fcae7",
          "message": "schedule",
          "timestamp": "2022-03-15T18:25:19+01:00",
          "tree_id": "72a4dff18e739cbe7bcc3e717cee0a9591bc65f0",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/58013e60f0b4a5ca8c02f36cb50f876c2f0fcae7"
        },
        "date": 1647366807519,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.00039106532678,
            "unit": "ns/iter",
            "extra": "iterations: 79835766\ncpu: 1.8047174495701588 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.640700029008238,
            "unit": "ns/iter",
            "extra": "iterations: 71246819\ncpu: 2.02729050962963 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 2.1261237751352478,
            "unit": "ns/iter",
            "extra": "iterations: 78935498\ncpu: 1.8108836153792303 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.3914932677961165,
            "unit": "ns/iter",
            "extra": "iterations: 68396111\ncpu: 1.9882416998826147 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 61.278201930980266,
            "unit": "ns/iter",
            "extra": "iterations: 2349387\ncpu: 60.05183479775787 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 888.5436206566502,
            "unit": "ns/iter",
            "extra": "iterations: 172361\ncpu: 818.1607208127125 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 4189.286853644899,
            "unit": "ns/iter",
            "extra": "iterations: 52912\ncpu: 2691.9602358633188 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 434.3585425546631,
            "unit": "ns/iter",
            "extra": "iterations: 318283\ncpu: 394.2749062940839 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 6233.07451158474,
            "unit": "ns/iter",
            "extra": "iterations: 52824\ncpu: 2798.1220657276986 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1765839197786242,
            "unit": "ms/iter",
            "extra": "iterations: 723\ncpu: 0.15726141078838174 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.47283368951618115,
            "unit": "ms/iter",
            "extra": "iterations: 496\ncpu: 0.4040947580645162 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 1.9138846300006662,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.43167999999999984 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.16608100842694348,
            "unit": "ms/iter",
            "extra": "iterations: 712\ncpu: 0.148320224719101 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6177776682464342,
            "unit": "ms/iter",
            "extra": "iterations: 211\ncpu: 1.037848341232227 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.1918220263163148,
            "unit": "ms/iter",
            "extra": "iterations: 114\ncpu: 3.142464912280702 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14325839896371342,
            "unit": "ms/iter",
            "extra": "iterations: 965\ncpu: 0.1437616580310881 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.7072548649995269,
            "unit": "ms/iter",
            "extra": "iterations: 200\ncpu: 1.2050499999999997 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.3340800566041098,
            "unit": "ms/iter",
            "extra": "iterations: 106\ncpu: 3.3273207547169825 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 214.6321129999933,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3.5840000000000316 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 4089.1409539999586,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 64.64200000000008 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 2395.7389309999826,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 136.41999999999976 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 23534.379646493966,
            "unit": "ns/iter",
            "extra": "iterations: 18670\ncpu: 7449.919657204071 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 4.045458026933953,
            "unit": "ns/iter",
            "extra": "iterations: 70489905\ncpu: 1.9837166754587057 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 339798.1939799501,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 117505.01672240802 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.2758870909934217,
            "unit": "ns/iter",
            "extra": "iterations: 80728866\ncpu: 1.7429453301127753 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 10168.660646495066,
            "unit": "ns/iter",
            "extra": "iterations: 44517\ncpu: 3235.370757238809 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 129022.56567933028,
            "unit": "ns/iter",
            "extra": "iterations: 3106\ncpu: 51570.508692852556 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3666.1711470003406,
            "unit": "ns/iter",
            "extra": "iterations: 37646\ncpu: 3652.0480263507434 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 57996.132183895505,
            "unit": "ns/iter",
            "extra": "iterations: 2436\ncpu: 57005.3366174055 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}