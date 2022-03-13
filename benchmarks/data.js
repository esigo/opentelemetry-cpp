window.BENCHMARK_DATA = {
  "lastUpdate": 1647210986896,
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
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28bd6215522ef82eca8c3138a2f369ad5e122243",
          "message": "Asynchronous Aggregation storage (#1232)",
          "timestamp": "2022-03-11T22:36:10Z",
          "tree_id": "90032e5cc1c11b63572bf8dc9232bdf94176867e",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/28bd6215522ef82eca8c3138a2f369ad5e122243"
        },
        "date": 1647104407463,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 22407015.164693195,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 12605366.66666667 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 219.2834572136134,
            "unit": "ns/iter",
            "extra": "iterations: 632992\ncpu: 219.16280142561044 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.7822236854045552,
            "unit": "ns/iter",
            "extra": "iterations: 79139415\ncpu: 1.7764169725035244 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.7735301722051164,
            "unit": "ns/iter",
            "extra": "iterations: 81381154\ncpu: 1.7623429129550063 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 90.07595216009777,
            "unit": "ns/iter",
            "extra": "iterations: 1541024\ncpu: 89.94713904520633 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 345.4245588546574,
            "unit": "ns/iter",
            "extra": "iterations: 402232\ncpu: 344.44723443187 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 39.45205654503432,
            "unit": "ns/iter",
            "extra": "iterations: 3496128\ncpu: 39.24015367858385 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 39.47957219625481,
            "unit": "ns/iter",
            "extra": "iterations: 3564028\ncpu: 39.25535938550424 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 42.594683865901516,
            "unit": "ns/iter",
            "extra": "iterations: 3331224\ncpu: 42.40450356985906 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 21.930854698014947,
            "unit": "ns/iter",
            "extra": "iterations: 6350819\ncpu: 21.831877116951393 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 915.9503868354512,
            "unit": "ns/iter",
            "extra": "iterations: 159696\ncpu: 913.0228684500547 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 894.9517830207869,
            "unit": "ns/iter",
            "extra": "iterations: 154466\ncpu: 894.6881514378576 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 221.22702908311143,
            "unit": "ns/iter",
            "extra": "iterations: 782009\ncpu: 183.18497613198826 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.6645692990075123,
            "unit": "ns/iter",
            "extra": "iterations: 53444906\ncpu: 2.637517970374951 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 11.769160952306686,
            "unit": "ns/iter",
            "extra": "iterations: 17119958\ncpu: 8.036923922360092 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 7708737.850189209,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 70010 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 2492464.065551758,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 62287.90000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11585991.382598877,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 292870.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 332375.760995399,
            "unit": "ns/iter",
            "extra": "iterations: 7119\ncpu: 18728.37477173761 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1188756.2274932861,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 50399.10000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8438673.01940918,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 260061.99999999977 ns\nthreads: 1"
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
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28bd6215522ef82eca8c3138a2f369ad5e122243",
          "message": "Asynchronous Aggregation storage (#1232)",
          "timestamp": "2022-03-11T22:36:10Z",
          "tree_id": "90032e5cc1c11b63572bf8dc9232bdf94176867e",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/28bd6215522ef82eca8c3138a2f369ad5e122243"
        },
        "date": 1647104410219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3658.7040671743657,
            "unit": "ns/iter",
            "extra": "iterations: 39541\ncpu: 3651.7412306213805 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6664457172641067,
            "unit": "ns/iter",
            "extra": "iterations: 91054542\ncpu: 1.6558229462073406 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 79234.74329959304,
            "unit": "ns/iter",
            "extra": "iterations: 1841\ncpu: 79092.01520912546 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.5760485242601,
            "unit": "ns/iter",
            "extra": "iterations: 90755867\ncpu: 1.574686075116224 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 666.7577277542802,
            "unit": "ns/iter",
            "extra": "iterations: 210166\ncpu: 666.1538973953924 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 19378.81173085711,
            "unit": "ns/iter",
            "extra": "iterations: 7330\ncpu: 19372.89222373804 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3148.6526824572293,
            "unit": "ns/iter",
            "extra": "iterations: 46234\ncpu: 3131.8099234329707 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 51901.7588893873,
            "unit": "ns/iter",
            "extra": "iterations: 2644\ncpu: 51834.19062027227 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 60.424019363886416,
            "unit": "ns/iter",
            "extra": "iterations: 2331884\ncpu: 60.3078455017488 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 371.0474881943771,
            "unit": "ns/iter",
            "extra": "iterations: 386846\ncpu: 367.9981181141849 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1152.780597456492,
            "unit": "ns/iter",
            "extra": "iterations: 123763\ncpu: 1151.9363622407343 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 274.63708450599773,
            "unit": "ns/iter",
            "extra": "iterations: 516788\ncpu: 274.0195205771032 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1087.724738749203,
            "unit": "ns/iter",
            "extra": "iterations: 129827\ncpu: 1085.654755944449 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.876400656430111,
            "unit": "ns/iter",
            "extra": "iterations: 72160857\ncpu: 1.8728463826309603 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.8873305203631967,
            "unit": "ns/iter",
            "extra": "iterations: 76285132\ncpu: 1.8844930359430982 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.157942771911621,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 10.14488 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.906496579502213,
            "unit": "ns/iter",
            "extra": "iterations: 73365649\ncpu: 1.9041159167010155 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1167428298074691,
            "unit": "ms/iter",
            "extra": "iterations: 1220\ncpu: 0.1142895901639344 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.22845022931359588,
            "unit": "ms/iter",
            "extra": "iterations: 622\ncpu: 0.22305498392282957 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.11550825039232068,
            "unit": "ms/iter",
            "extra": "iterations: 1267\ncpu: 0.11297679558011048 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.25475273132324217,
            "unit": "ms/iter",
            "extra": "iterations: 625\ncpu: 0.22890288000000006 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12066303155361077,
            "unit": "ms/iter",
            "extra": "iterations: 1170\ncpu: 0.11790188034188034 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.23205151862969703,
            "unit": "ms/iter",
            "extra": "iterations: 594\ncpu: 0.22597626262626247 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.569819016890093,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.527050000000009 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 26.22380256652832,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 26.154920000000015 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "49648bd8f741a28a2b111c8d8ecad75a070ea649",
          "message": "Remove nostd::span as dependency from Dependency document (#1260)",
          "timestamp": "2022-03-13T13:19:09-07:00",
          "tree_id": "d98354c87d76ae368a9bc8c2089235ace5df9bf2",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/49648bd8f741a28a2b111c8d8ecad75a070ea649"
        },
        "date": 1647210985688,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3734.836589497786,
            "unit": "ns/iter",
            "extra": "iterations: 37706\ncpu: 3716.7877791332944 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.8919888605248512,
            "unit": "ns/iter",
            "extra": "iterations: 86625087\ncpu: 1.6237813417722744 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 142104.22458680454,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 77607.94003331485 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.8184855840912615,
            "unit": "ns/iter",
            "extra": "iterations: 84563531\ncpu: 1.624461495109517 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 895.2704209576074,
            "unit": "ns/iter",
            "extra": "iterations: 207394\ncpu: 682.3505019431616 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 20888.903650411612,
            "unit": "ns/iter",
            "extra": "iterations: 7910\ncpu: 17743.2869785082 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2720.313009084252,
            "unit": "ns/iter",
            "extra": "iterations: 52201\ncpu: 2719.961303423308 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46509.99340238056,
            "unit": "ns/iter",
            "extra": "iterations: 2998\ncpu: 46507.13809206142 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 91.67669702268171,
            "unit": "ns/iter",
            "extra": "iterations: 2645028\ncpu: 52.938683446829295 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 315.7391383967271,
            "unit": "ns/iter",
            "extra": "iterations: 443760\ncpu: 315.05115377681636 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 995.3139514735457,
            "unit": "ns/iter",
            "extra": "iterations: 140785\ncpu: 994.0753631423798 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 230.67148870598197,
            "unit": "ns/iter",
            "extra": "iterations: 608088\ncpu: 230.21947481285602 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 978.46219284256,
            "unit": "ns/iter",
            "extra": "iterations: 147988\ncpu: 945.3698948563391 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6887062021747694,
            "unit": "ns/iter",
            "extra": "iterations: 83094930\ncpu: 1.6811206171062423 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.694344532756863,
            "unit": "ns/iter",
            "extra": "iterations: 82709077\ncpu: 1.6913476135152612 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.992161497665009,
            "unit": "ns/iter",
            "extra": "iterations: 15638859\ncpu: 8.952711959357138 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.693391802225198,
            "unit": "ns/iter",
            "extra": "iterations: 79229437\ncpu: 1.6892812200596603 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1107818283056404,
            "unit": "ms/iter",
            "extra": "iterations: 1238\ncpu: 0.10608101777059775 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21521719346135298,
            "unit": "ms/iter",
            "extra": "iterations: 644\ncpu: 0.20892965838509317 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10838670370297517,
            "unit": "ms/iter",
            "extra": "iterations: 1297\ncpu: 0.10572397841171938 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21262487258100726,
            "unit": "ms/iter",
            "extra": "iterations: 659\ncpu: 0.2073213960546282 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10759778564120896,
            "unit": "ms/iter",
            "extra": "iterations: 1286\ncpu: 0.1051424572317263 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21196172592487741,
            "unit": "ms/iter",
            "extra": "iterations: 658\ncpu: 0.20671200607902732 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.322513927112926,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.288945454545452 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.21065870920817,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 25.16713333333335 ms\nthreads: 1"
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
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28bd6215522ef82eca8c3138a2f369ad5e122243",
          "message": "Asynchronous Aggregation storage (#1232)",
          "timestamp": "2022-03-11T22:36:10Z",
          "tree_id": "90032e5cc1c11b63572bf8dc9232bdf94176867e",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/28bd6215522ef82eca8c3138a2f369ad5e122243"
        },
        "date": 1647104410458,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 38.44747651984209,
            "unit": "ns/iter",
            "extra": "iterations: 4301000\ncpu: 33.54392001860033 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 146.7978274142062,
            "unit": "ns/iter",
            "extra": "iterations: 1332000\ncpu: 106.3852852852853 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1027.1584246791688,
            "unit": "ns/iter",
            "extra": "iterations: 177000\ncpu: 796.0378531073446 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2015197.8390980004,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 365221.5880893299 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}