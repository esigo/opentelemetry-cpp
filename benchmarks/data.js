window.BENCHMARK_DATA = {
  "lastUpdate": 1647454396762,
  "repoUrl": "https://github.com/esigo/opentelemetry-cpp",
  "entries": {
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
          "id": "f7088444f783ac96669f27c7f86d5db1ed12eb32",
          "message": "Benchmark action Mac (#13)",
          "timestamp": "2022-03-16T16:51:08Z",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/f7088444f783ac96669f27c7f86d5db1ed12eb32"
        },
        "date": 1647451839586,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.2256704073935776,
            "unit": "ns/iter",
            "extra": "iterations: 68466354\ncpu: 2.024833979037353 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.3659906472009147,
            "unit": "ns/iter",
            "extra": "iterations: 65823499\ncpu: 2.046017031090978 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 1.9949076926903766,
            "unit": "ns/iter",
            "extra": "iterations: 81775701\ncpu: 1.7401257128936134 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.8400420015939374,
            "unit": "ns/iter",
            "extra": "iterations: 70365903\ncpu: 2.0273171226126374 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 59.49322571746187,
            "unit": "ns/iter",
            "extra": "iterations: 2325929\ncpu: 59.36165721309636 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 824.8226510489017,
            "unit": "ns/iter",
            "extra": "iterations: 186711\ncpu: 807.9491834974906 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2685.894002375851,
            "unit": "ns/iter",
            "extra": "iterations: 53888\ncpu: 2614.904988123516 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 400.70369325556305,
            "unit": "ns/iter",
            "extra": "iterations: 354484\ncpu: 398.3987993816363 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2703.6362146816655,
            "unit": "ns/iter",
            "extra": "iterations: 54928\ncpu: 2633.593067288085 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.17975223947915056,
            "unit": "ms/iter",
            "extra": "iterations: 998\ncpu: 0.14957515030060117 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.642266259023589,
            "unit": "ms/iter",
            "extra": "iterations: 471\ncpu: 0.3158535031847134 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 0.9943744435480356,
            "unit": "ms/iter",
            "extra": "iterations: 124\ncpu: 0.44691129032258103 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14049593603937482,
            "unit": "ms/iter",
            "extra": "iterations: 813\ncpu: 0.13994710947109465 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6217121732673843,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 1.0925841584158413 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.2991002201838748,
            "unit": "ms/iter",
            "extra": "iterations: 109\ncpu: 3.4260183486238542 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1598204556330756,
            "unit": "ms/iter",
            "extra": "iterations: 1003\ncpu: 0.13549750747756734 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.6260170506917884,
            "unit": "ms/iter",
            "extra": "iterations: 217\ncpu: 1.1591935483870974 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.4655190729158107,
            "unit": "ms/iter",
            "extra": "iterations: 96\ncpu: 4.12771875 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 3.4388943877553286,
            "unit": "ms/iter",
            "extra": "iterations: 49\ncpu: 3.2602857142857133 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 64.73958633334102,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 60.33999999999991 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 15527.33252600001,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 141.3609999999994 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 20175.80720034938,
            "unit": "ns/iter",
            "extra": "iterations: 18138\ncpu: 7673.778806924688 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 4.2302643938225755,
            "unit": "ns/iter",
            "extra": "iterations: 70365903\ncpu: 1.9785150771105715 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 119416.97253316153,
            "unit": "ns/iter",
            "extra": "iterations: 983\ncpu: 118865.7171922686 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.7336464385077293,
            "unit": "ns/iter",
            "extra": "iterations: 82894191\ncpu: 1.703171214976933 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3821.72485447539,
            "unit": "ns/iter",
            "extra": "iterations: 45525\ncpu: 3314.8380010982964 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 50308.00132230942,
            "unit": "ns/iter",
            "extra": "iterations: 3025\ncpu: 44656.198347107435 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4021.994816856682,
            "unit": "ns/iter",
            "extra": "iterations: 37429\ncpu: 3761.1477731171017 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 62341.762003370604,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 58514.48675496685 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "f7088444f783ac96669f27c7f86d5db1ed12eb32",
          "message": "Benchmark action Mac (#13)",
          "timestamp": "2022-03-16T16:51:08Z",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/f7088444f783ac96669f27c7f86d5db1ed12eb32"
        },
        "date": 1647454394037,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.9778421532745247,
            "unit": "ns/iter",
            "extra": "iterations: 69923085\ncpu: 1.9025762378762319 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.619771789274141,
            "unit": "ns/iter",
            "extra": "iterations: 71776468\ncpu: 1.9642510132986761 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 2.071529804641778,
            "unit": "ns/iter",
            "extra": "iterations: 80054895\ncpu: 1.7866115494873858 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.104005231704765,
            "unit": "ns/iter",
            "extra": "iterations: 78882128\ncpu: 1.8472245069250663 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 166.8208589172302,
            "unit": "ns/iter",
            "extra": "iterations: 2341646\ncpu: 62.205388858947934 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 2609.01370072803,
            "unit": "ns/iter",
            "extra": "iterations: 169845\ncpu: 835.9092113397511 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2640.1681427231883,
            "unit": "ns/iter",
            "extra": "iterations: 46972\ncpu: 2608.3198501234792 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 1882.063590677159,
            "unit": "ns/iter",
            "extra": "iterations: 343651\ncpu: 421.8960515173822 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 3003.134102096011,
            "unit": "ns/iter",
            "extra": "iterations: 50991\ncpu: 2705.144045027554 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.16012354696151043,
            "unit": "ms/iter",
            "extra": "iterations: 905\ncpu: 0.1527049723756906 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.5952790273031093,
            "unit": "ms/iter",
            "extra": "iterations: 293\ncpu: 0.30621160409556303 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 1.7239362362194848,
            "unit": "ms/iter",
            "extra": "iterations: 127\ncpu: 0.4645826771653543 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.16707318254869913,
            "unit": "ms/iter",
            "extra": "iterations: 871\ncpu: 0.14110677382319167 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.681572309999865,
            "unit": "ms/iter",
            "extra": "iterations: 200\ncpu: 1.1491650000000002 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.1958080333329235,
            "unit": "ms/iter",
            "extra": "iterations: 120\ncpu: 2.588416666666668 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14241923670470727,
            "unit": "ms/iter",
            "extra": "iterations: 959\ncpu: 0.14314911366006264 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.7029843846147252,
            "unit": "ms/iter",
            "extra": "iterations: 182\ncpu: 1.2168846153846156 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.3217113376608072,
            "unit": "ms/iter",
            "extra": "iterations: 77\ncpu: 2.7728051948051973 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.035163913042118,
            "unit": "ms/iter",
            "extra": "iterations: 46\ncpu: 3.0059347826086924 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 143.37203099989893,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 61.693 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 363.47535300001255,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 150.31599999999966 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 116552.99366292571,
            "unit": "ns/iter",
            "extra": "iterations: 19883\ncpu: 7457.576824422874 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 31.590091142128383,
            "unit": "ns/iter",
            "extra": "iterations: 68040435\ncpu: 2.045607145221808 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 1269677.0769880398,
            "unit": "ns/iter",
            "extra": "iterations: 1182\ncpu: 123335.02538071068 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.0227541866842222,
            "unit": "ns/iter",
            "extra": "iterations: 82756990\ncpu: 1.706550709492939 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 4221.807483520988,
            "unit": "ns/iter",
            "extra": "iterations: 46422\ncpu: 3024.815820085303 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 61404.61233056747,
            "unit": "ns/iter",
            "extra": "iterations: 3098\ncpu: 44473.208521626846 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4420.721148069513,
            "unit": "ns/iter",
            "extra": "iterations: 36618\ncpu: 3856.1090174231244 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 72812.5619545916,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 60526.614310645644 ns\nthreads: 1"
          }
        ]
      }
    ],
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
          "id": "f7088444f783ac96669f27c7f86d5db1ed12eb32",
          "message": "Benchmark action Mac (#13)",
          "timestamp": "2022-03-16T16:51:08Z",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/f7088444f783ac96669f27c7f86d5db1ed12eb32"
        },
        "date": 1647451841026,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 72.64480662116438,
            "unit": "ns/iter",
            "extra": "iterations: 1903000\ncpu: 70.51287440882815 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 236.00509878687197,
            "unit": "ns/iter",
            "extra": "iterations: 577000\ncpu: 235.31889081455802 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1943.4127808219198,
            "unit": "ns/iter",
            "extra": "iterations: 73000\ncpu: 1888.2465753424653 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 130289855.83969362,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 1071229.0076335876 ns\nthreads: 1"
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
          "id": "f7088444f783ac96669f27c7f86d5db1ed12eb32",
          "message": "Benchmark action Mac (#13)",
          "timestamp": "2022-03-16T16:51:08Z",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/f7088444f783ac96669f27c7f86d5db1ed12eb32"
        },
        "date": 1647451857868,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 22110067.000016898,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 21924699.999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 431.1504769659476,
            "unit": "ns/iter",
            "extra": "iterations: 491125\ncpu: 286.18172562993124 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.5692681503584365,
            "unit": "ns/iter",
            "extra": "iterations: 69877714\ncpu: 2.013517500014382 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.226704609171581,
            "unit": "ns/iter",
            "extra": "iterations: 68870523\ncpu: 2.0034260521006932 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 352.4284692980093,
            "unit": "ns/iter",
            "extra": "iterations: 559508\ncpu: 253.99636823780892 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 342.4674525261759,
            "unit": "ns/iter",
            "extra": "iterations: 430187\ncpu: 326.3627213281666 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 44.75697659773904,
            "unit": "ns/iter",
            "extra": "iterations: 3176620\ncpu: 44.21145746107494 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 44.92369370135518,
            "unit": "ns/iter",
            "extra": "iterations: 3115195\ncpu: 44.247310360988685 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 71.16162002473953,
            "unit": "ns/iter",
            "extra": "iterations: 2847438\ncpu: 49.525573515560254 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 30.102884323803085,
            "unit": "ns/iter",
            "extra": "iterations: 4725579\ncpu: 29.34031999041805 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2032.2350719408435,
            "unit": "ns/iter",
            "extra": "iterations: 73603\ncpu: 1939.4997486515483 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1994.0061680251897,
            "unit": "ns/iter",
            "extra": "iterations: 73119\ncpu: 1938.0188459907838 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5045250.650000526,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 82889.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 6799480.600000151,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 125219.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6444462.189999741,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 229279.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3277622.1469998746,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 78767 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2626128.218623385,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 110337.65182186235 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2845030.465346718,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 176944.30693069307 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 138.78482415782634,
            "unit": "ns/iter",
            "extra": "iterations: 986054\ncpu: 138.1902005366846 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 7.115070771590899,
            "unit": "ns/iter",
            "extra": "iterations: 26553876\ncpu: 5.298209572116703 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.556312403153408,
            "unit": "ns/iter",
            "extra": "iterations: 26796823\ncpu: 5.192667802448077 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "f7088444f783ac96669f27c7f86d5db1ed12eb32",
          "message": "Benchmark action Mac (#13)",
          "timestamp": "2022-03-16T16:51:08Z",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/f7088444f783ac96669f27c7f86d5db1ed12eb32"
        },
        "date": 1647454394649,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 24024635.699993268,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 22676600 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 485.7471677308835,
            "unit": "ns/iter",
            "extra": "iterations: 484329\ncpu: 295.09486320249243 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.577845144742766,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 1.970691955487982 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.1123499792155362,
            "unit": "ns/iter",
            "extra": "iterations: 70929172\ncpu: 1.9125276127571318 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 984.6133560442091,
            "unit": "ns/iter",
            "extra": "iterations: 537779\ncpu: 263.4093186978293 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 1200.2174280813153,
            "unit": "ns/iter",
            "extra": "iterations: 383037\ncpu: 357.13260076702744 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 109.75721414001289,
            "unit": "ns/iter",
            "extra": "iterations: 3103731\ncpu: 44.72520331175605 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 117.74364793475289,
            "unit": "ns/iter",
            "extra": "iterations: 3045663\ncpu: 45.470559283807845 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 174.46052821880616,
            "unit": "ns/iter",
            "extra": "iterations: 2765596\ncpu: 60.67118986287229 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 56.1979743286692,
            "unit": "ns/iter",
            "extra": "iterations: 4242939\ncpu: 32.39499790121896 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 6079.816363741744,
            "unit": "ns/iter",
            "extra": "iterations: 67454\ncpu: 2143.8313517359966 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 6504.157648672463,
            "unit": "ns/iter",
            "extra": "iterations: 62671\ncpu: 2161.8611478993435 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5547344.970000267,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 82229.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7527076.360001956,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 112360 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5744381.869999416,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 229479.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3433118.7870000126,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 80679.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2761579.484421349,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 105731.45400593469 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2453677.817087984,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 162521.0589651022 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 160.77395473628152,
            "unit": "ns/iter",
            "extra": "iterations: 1006325\ncpu: 137.5142225424192 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.592491772443514,
            "unit": "ns/iter",
            "extra": "iterations: 27712346\ncpu: 5.0971505624244156 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.6634362133223615,
            "unit": "ns/iter",
            "extra": "iterations: 26712969\ncpu: 5.2692383239017735 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}