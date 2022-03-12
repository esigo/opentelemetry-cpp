window.BENCHMARK_DATA = {
  "lastUpdate": 1647081062429,
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
        "date": 1647081060242,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.843445184447576,
            "unit": "ns/iter",
            "extra": "iterations: 78064012\ncpu: 1.8054286013380916 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.154892375494938,
            "unit": "ns/iter",
            "extra": "iterations: 73126143\ncpu: 1.8396020148361985 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 254.36035598895953,
            "unit": "ns/iter",
            "extra": "iterations: 568782\ncpu: 249.67738078912478 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 329.6243036356403,
            "unit": "ns/iter",
            "extra": "iterations: 429014\ncpu: 323.09668215955656 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 59.261839011201786,
            "unit": "ns/iter",
            "extra": "iterations: 3248561\ncpu: 43.912058292887245 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 50.80444042830253,
            "unit": "ns/iter",
            "extra": "iterations: 3215951\ncpu: 43.61602524416573 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 59.31154352394449,
            "unit": "ns/iter",
            "extra": "iterations: 2855861\ncpu: 48.53002299481655 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 34.854006839041766,
            "unit": "ns/iter",
            "extra": "iterations: 4771155\ncpu: 29.032383144123365 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2224.507196117747,
            "unit": "ns/iter",
            "extra": "iterations: 69204\ncpu: 1977.6602508525493 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2027.1048313831814,
            "unit": "ns/iter",
            "extra": "iterations: 71553\ncpu: 1978.8967618408708 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 7250344.200001564,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 78159.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7838971.810001568,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 109760 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5718164.810000417,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 146759.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3087902.7790001603,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 77552 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2181960.684323512,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 98951.32426628488 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2510225.5799598233,
            "unit": "ns/iter",
            "extra": "iterations: 988\ncpu: 168152.83400809712 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.28869985434002,
            "unit": "ns/iter",
            "extra": "iterations: 28223530\ncpu: 4.999410066706751 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.945655146557199,
            "unit": "ns/iter",
            "extra": "iterations: 26780420\ncpu: 5.131510260107947 ns\nthreads: 1"
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
        "date": 1647081060191,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.30056667863992,
            "unit": "ns/iter",
            "extra": "iterations: 72572702\ncpu: 1.8829945176906877 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.8781857889612232,
            "unit": "ns/iter",
            "extra": "iterations: 77313894\ncpu: 1.8531468612873132 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 1.694751013367004,
            "unit": "ns/iter",
            "extra": "iterations: 77237118\ncpu: 1.691207587522881 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.1577958626949783,
            "unit": "ns/iter",
            "extra": "iterations: 77476480\ncpu: 1.8596998727871998 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 220.5868044685235,
            "unit": "ns/iter",
            "extra": "iterations: 2181875\ncpu: 63.61088513319966 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 800.1872922051581,
            "unit": "ns/iter",
            "extra": "iterations: 181070\ncpu: 766.2671894847294 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2540.4887170848347,
            "unit": "ns/iter",
            "extra": "iterations: 55748\ncpu: 2520.7182320442 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 405.41638336596014,
            "unit": "ns/iter",
            "extra": "iterations: 337098\ncpu: 403.70159419515977 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2525.879474457401,
            "unit": "ns/iter",
            "extra": "iterations: 54420\ncpu: 2522.087467842704 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.14377337199994145,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.14471799999999999 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.36325152989098053,
            "unit": "ms/iter",
            "extra": "iterations: 368\ncpu: 0.2757880434782608 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 0.7273543223146332,
            "unit": "ms/iter",
            "extra": "iterations: 363\ncpu: 0.37851515151515136 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.2600419843315544,
            "unit": "ms/iter",
            "extra": "iterations: 1085\ncpu: 0.13409953917050693 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.5267338607138429,
            "unit": "ms/iter",
            "extra": "iterations: 280\ncpu: 0.8625928571428572 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.007704772354469,
            "unit": "ms/iter",
            "extra": "iterations: 123\ncpu: 2.00789430894309 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.15686344311338662,
            "unit": "ms/iter",
            "extra": "iterations: 1002\ncpu: 0.13909381237524954 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.43217455925986104,
            "unit": "ms/iter",
            "extra": "iterations: 270\ncpu: 0.6261111111111108 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.3413848585863741,
            "unit": "ms/iter",
            "extra": "iterations: 99\ncpu: 2.360424242424242 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 17.356315500001074,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 2.9359000000000135 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 52.430851499821074,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 50.87400000000009 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 139.4237859999521,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 136.285 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 7093.568191919786,
            "unit": "ns/iter",
            "extra": "iterations: 20259\ncpu: 6883.311120983267 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.3958136367266274,
            "unit": "ns/iter",
            "extra": "iterations: 73479242\ncpu: 1.934600795147015 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 111560.07233705821,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 111228.93481717007 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.686831438080071,
            "unit": "ns/iter",
            "extra": "iterations: 84230792\ncpu: 1.6611502358899823 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3248.364386233472,
            "unit": "ns/iter",
            "extra": "iterations: 44129\ncpu: 3026.0146388995913 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 63290.353990607764,
            "unit": "ns/iter",
            "extra": "iterations: 3195\ncpu: 43696.71361502346 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4519.329534687274,
            "unit": "ns/iter",
            "extra": "iterations: 39049\ncpu: 3617.1732950907813 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 80894.73574291405,
            "unit": "ns/iter",
            "extra": "iterations: 2490\ncpu: 56594.779116465885 ns\nthreads: 1"
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