window.BENCHMARK_DATA = {
  "lastUpdate": 1642283226549,
  "repoUrl": "https://github.com/esigo/opentelemetry-cpp",
  "entries": {
    "OpenTelemetry-cpp Benchmark": [
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "distinct": true,
          "id": "fac3aa221efc21109bf8df744355253fd597a0a7",
          "message": "clean",
          "timestamp": "2022-01-14T22:42:21+01:00",
          "tree_id": "89fc2245b4d5dbbedf621dc52c844ccdbb5a242e",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/fac3aa221efc21109bf8df744355253fd597a0a7"
        },
        "date": 1642198495514,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanCreation",
            "value": 62.36671189453928,
            "unit": "ns/iter",
            "extra": "iterations: 11130174\ncpu: 62.35944739049004 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 372.124069625447,
            "unit": "ns/iter",
            "extra": "iterations: 1851090\ncpu: 372.09427958662195 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1177.5448974152182,
            "unit": "ns/iter",
            "extra": "iterations: 600750\ncpu: 1177.4754889721182 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 280.7752562578916,
            "unit": "ns/iter",
            "extra": "iterations: 2472965\ncpu: 280.17202022673195 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1126.2773855759272,
            "unit": "ns/iter",
            "extra": "iterations: 631798\ncpu: 1126.0697248171095 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 14432961.463928223,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 44419.40000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 11156758.546829224,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 89902.5 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7543670.415878296,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 291885.5 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 4341244.220733643,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 37454.40000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 4362857.818603516,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 83600.20000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5349253.177642822,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 279044.4000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4348.880401726409,
            "unit": "ns/iter",
            "extra": "iterations: 162822\ncpu: 4348.284015673557 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.8974424511572552,
            "unit": "ns/iter",
            "extra": "iterations: 368320443\ncpu: 1.8973302005938342 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 85458.41008626002,
            "unit": "ns/iter",
            "extra": "iterations: 8145\ncpu: 85454.57335788834 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.885128228350829,
            "unit": "ns/iter",
            "extra": "iterations: 368296995\ncpu: 1.8849469570068038 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 803.4619947611302,
            "unit": "ns/iter",
            "extra": "iterations: 899796\ncpu: 802.207611503052 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 20118.88750264453,
            "unit": "ns/iter",
            "extra": "iterations: 35469\ncpu: 20116.811863881136 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3195.3701250483573,
            "unit": "ns/iter",
            "extra": "iterations: 214811\ncpu: 3195.2288290636893 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 56854.8788981448,
            "unit": "ns/iter",
            "extra": "iterations: 12892\ncpu: 56825.43437790879 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 10.240397977348175,
            "unit": "ns/iter",
            "extra": "iterations: 68737363\ncpu: 10.239722172641393 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.838025423526986,
            "unit": "ns/iter",
            "extra": "iterations: 80612656\ncpu: 8.83751677900304 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 35.27686047085165,
            "unit": "ns/iter",
            "extra": "iterations: 19883000\ncpu: 35.23424030578887 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 123.88656763703626,
            "unit": "ns/iter",
            "extra": "iterations: 5690000\ncpu: 123.7928295254833 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 581.9839135072475,
            "unit": "ns/iter",
            "extra": "iterations: 1203000\ncpu: 581.9620116375727 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_local",
            "value": 1872398.0448711878,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 481590.87643678155 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9280214477964397,
            "unit": "ns/iter",
            "extra": "iterations: 362016036\ncpu: 1.9276198582540138 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.9239126151162635,
            "unit": "ns/iter",
            "extra": "iterations: 362081576\ncpu: 1.9237913392201982 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 100.04119912208004,
            "unit": "ns/iter",
            "extra": "iterations: 7114848\ncpu: 100.03589676125195 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 397.2124145722984,
            "unit": "ns/iter",
            "extra": "iterations: 1758111\ncpu: 397.1997786260366 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 44.448229476907656,
            "unit": "ns/iter",
            "extra": "iterations: 15800406\ncpu: 44.44413010653017 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 44.51344298570304,
            "unit": "ns/iter",
            "extra": "iterations: 15780252\ncpu: 44.50980884208948 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 48.53260070142624,
            "unit": "ns/iter",
            "extra": "iterations: 14423949\ncpu: 48.419077188916816 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 24.095534412685534,
            "unit": "ns/iter",
            "extra": "iterations: 28769929\ncpu: 24.092920076375588 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 986.136924779351,
            "unit": "ns/iter",
            "extra": "iterations: 730056\ncpu: 985.1023757081654 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 983.012366234493,
            "unit": "ns/iter",
            "extra": "iterations: 719586\ncpu: 982.0524579410923 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.9876629835801416,
            "unit": "ns/iter",
            "extra": "iterations: 350961635\ncpu: 1.9874990039865756 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.1956587612152774,
            "unit": "ns/iter",
            "extra": "iterations: 349311333\ncpu: 1.9952736546340453 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.506954938389635,
            "unit": "ns/iter",
            "extra": "iterations: 66064785\ncpu: 10.504086254121617 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.9522532247641133,
            "unit": "ns/iter",
            "extra": "iterations: 357053047\ncpu: 1.9521656679770607 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.145676938047188,
            "unit": "ms/iter",
            "extra": "iterations: 4789\ncpu: 0.15272752140321572 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 1.3160052753630138,
            "unit": "ms/iter",
            "extra": "iterations: 504\ncpu: 0.44988293650793626 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14702928923246833,
            "unit": "ms/iter",
            "extra": "iterations: 4646\ncpu: 0.15503032716315113 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 1.4029343922932942,
            "unit": "ms/iter",
            "extra": "iterations: 507\ncpu: 2.7494911242603557 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14664873227598985,
            "unit": "ms/iter",
            "extra": "iterations: 4767\ncpu: 0.1532993916509335 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 1.4693752313271546,
            "unit": "ms/iter",
            "extra": "iterations: 468\ncpu: 2.8840166666666662 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.145691891105807,
            "unit": "ms/iter",
            "extra": "iterations: 98\ncpu: 7.153085714285715 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 16.14458616389785,
            "unit": "ms/iter",
            "extra": "iterations: 43\ncpu: 25.402379069767463 ms\nthreads: 1"
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
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "distinct": true,
          "id": "0f8e284f0f47c500958c3faaadfd40836de29a5b",
          "message": "enable benchmark check",
          "timestamp": "2022-01-14T23:53:42+01:00",
          "tree_id": "80935d2f0a46c1a725ef29149ce4a1f3925337c9",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/0f8e284f0f47c500958c3faaadfd40836de29a5b"
        },
        "date": 1642202669001,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanCreation",
            "value": 51.16097863014999,
            "unit": "ns/iter",
            "extra": "iterations: 13786258\ncpu: 51.152517238542906 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 317.6388494445348,
            "unit": "ns/iter",
            "extra": "iterations: 2220048\ncpu: 317.4430913205481 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1013.081672127497,
            "unit": "ns/iter",
            "extra": "iterations: 676443\ncpu: 1012.9793641149365 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 245.1265504418269,
            "unit": "ns/iter",
            "extra": "iterations: 3041627\ncpu: 244.799707524953 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 993.9829445983434,
            "unit": "ns/iter",
            "extra": "iterations: 691952\ncpu: 993.9159074617891 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 10925844.90776062,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 37749.7 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7238577.365875244,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 76124.8 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5039759.159088135,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 264970.8 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 4163708.9252471924,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 33407.599999999984 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 4253474.235534668,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 72603.80000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5173967.361450195,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 258340 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3423.0397843491605,
            "unit": "ns/iter",
            "extra": "iterations: 201982\ncpu: 3421.6232139497583 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6842357466290783,
            "unit": "ns/iter",
            "extra": "iterations: 430919058\ncpu: 1.6711829904724247 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 71981.27729694349,
            "unit": "ns/iter",
            "extra": "iterations: 9939\ncpu: 71957.70198209076 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.5664525535639064,
            "unit": "ns/iter",
            "extra": "iterations: 452123657\ncpu: 1.5663422805588776 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 661.6630009582931,
            "unit": "ns/iter",
            "extra": "iterations: 1123642\ncpu: 661.6347555538148 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17402.592169089196,
            "unit": "ns/iter",
            "extra": "iterations: 40058\ncpu: 17402.281691547272 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2654.4743954669593,
            "unit": "ns/iter",
            "extra": "iterations: 262350\ncpu: 2654.39336763865 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46804.21617296007,
            "unit": "ns/iter",
            "extra": "iterations: 13500\ncpu: 46801.140740740724 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 8.342400372362633,
            "unit": "ns/iter",
            "extra": "iterations: 84370691\ncpu: 8.341591039001923 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.351509916616028,
            "unit": "ns/iter",
            "extra": "iterations: 89098766\ncpu: 7.351198331972408 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 29.84543943341152,
            "unit": "ns/iter",
            "extra": "iterations: 23097000\ncpu: 29.84349915573451 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 102.92830844479464,
            "unit": "ns/iter",
            "extra": "iterations: 7015000\ncpu: 102.92178189593724 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 515.6344856294489,
            "unit": "ns/iter",
            "extra": "iterations: 1418000\ncpu: 515.5603667136811 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_local",
            "value": 1605015.4125769788,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 425659.7701149425 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.5634309824482888,
            "unit": "ns/iter",
            "extra": "iterations: 446227655\ncpu: 1.5632850007918047 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.590515853707791,
            "unit": "ns/iter",
            "extra": "iterations: 454318001\ncpu: 1.590428506925923 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 80.83185873793069,
            "unit": "ns/iter",
            "extra": "iterations: 8470269\ncpu: 80.8299948915436 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 322.9541446866629,
            "unit": "ns/iter",
            "extra": "iterations: 2092347\ncpu: 322.9374477560367 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.69744696221605,
            "unit": "ns/iter",
            "extra": "iterations: 19959061\ncpu: 37.36674786454134 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 35.76314686649816,
            "unit": "ns/iter",
            "extra": "iterations: 19570123\ncpu: 35.75863575308139 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 39.110496241433346,
            "unit": "ns/iter",
            "extra": "iterations: 17883544\ncpu: 39.10674528493906 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 19.765212551625456,
            "unit": "ns/iter",
            "extra": "iterations: 31490395\ncpu: 19.76217510132852 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 813.9421449543028,
            "unit": "ns/iter",
            "extra": "iterations: 854434\ncpu: 813.8533813027101 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 849.5755380379906,
            "unit": "ns/iter",
            "extra": "iterations: 843462\ncpu: 849.530506412856 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6457209512759408,
            "unit": "ns/iter",
            "extra": "iterations: 419608170\ncpu: 1.6455656714215074 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.9318777930612099,
            "unit": "ns/iter",
            "extra": "iterations: 363731784\ncpu: 1.722320477772709 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.837604095257728,
            "unit": "ns/iter",
            "extra": "iterations: 80686992\ncpu: 8.837229921769792 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.6933671038921503,
            "unit": "ns/iter",
            "extra": "iterations: 404298268\ncpu: 1.693239012342245 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.12577445615522265,
            "unit": "ms/iter",
            "extra": "iterations: 5385\ncpu: 0.13134889507892294 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 1.382927174838084,
            "unit": "ms/iter",
            "extra": "iterations: 530\ncpu: 0.5343873584905661 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12429539688123939,
            "unit": "ms/iter",
            "extra": "iterations: 5615\ncpu: 0.1312180765805877 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.8594255729261877,
            "unit": "ms/iter",
            "extra": "iterations: 812\ncpu: 1.6650737684729067 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12927149524890041,
            "unit": "ms/iter",
            "extra": "iterations: 5874\ncpu: 0.13654674838270348 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.8718027154459039,
            "unit": "ms/iter",
            "extra": "iterations: 819\ncpu: 1.6874340659340663 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.103227449500042,
            "unit": "ms/iter",
            "extra": "iterations: 115\ncpu: 6.1165947826086935 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 14.08438779869858,
            "unit": "ms/iter",
            "extra": "iterations: 49\ncpu: 21.728006122448974 ms\nthreads: 1"
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
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "distinct": true,
          "id": "68a5592271d0119f0cf12c199970bfce101ced38",
          "message": "log test name and count",
          "timestamp": "2022-01-14T23:52:17+01:00",
          "tree_id": "2acf32a6bb76c53053003ff8f167a6eee9c03c48",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/68a5592271d0119f0cf12c199970bfce101ced38"
        },
        "date": 1642202894399,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanCreation",
            "value": 66.39340726376182,
            "unit": "ns/iter",
            "extra": "iterations: 10520004\ncpu: 66.32177136054322 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 357.6400697883992,
            "unit": "ns/iter",
            "extra": "iterations: 1934528\ncpu: 357.2567572038244 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1158.126562823777,
            "unit": "ns/iter",
            "extra": "iterations: 610395\ncpu: 1158.0678085502013 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 250.98650574075347,
            "unit": "ns/iter",
            "extra": "iterations: 2649330\ncpu: 250.73120373830375 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1021.9411503534079,
            "unit": "ns/iter",
            "extra": "iterations: 672915\ncpu: 1021.375805265152 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 9791919.946670532,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 60855.50000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 6371617.555618286,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 102394.7 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7425501.108169556,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 323330.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3254939.079284668,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 49030.10000000007 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3261750.4596710205,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 107929.59999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4500092.506408691,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 327419.0999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4404.7981486480285,
            "unit": "ns/iter",
            "extra": "iterations: 158015\ncpu: 4404.419833560103 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.7243333877293088,
            "unit": "ns/iter",
            "extra": "iterations: 258564200\ncpu: 2.724066982204033 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 91677.13345320556,
            "unit": "ns/iter",
            "extra": "iterations: 7649\ncpu: 91666.10014380969 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.6696122309641863,
            "unit": "ns/iter",
            "extra": "iterations: 262820181\ncpu: 2.669399653141552 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 757.983191771779,
            "unit": "ns/iter",
            "extra": "iterations: 966314\ncpu: 757.9311693714462 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 18486.01767057862,
            "unit": "ns/iter",
            "extra": "iterations: 37940\ncpu: 18484.65998945704 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3211.2476541754613,
            "unit": "ns/iter",
            "extra": "iterations: 218881\ncpu: 3210.894504319698 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 56686.633762290585,
            "unit": "ns/iter",
            "extra": "iterations: 11162\ncpu: 56681.89392581974 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 10.345559293060527,
            "unit": "ns/iter",
            "extra": "iterations: 65491806\ncpu: 10.344909407445567 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.59009740375425,
            "unit": "ns/iter",
            "extra": "iterations: 80418452\ncpu: 8.589894269539034 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 36.57381855720909,
            "unit": "ns/iter",
            "extra": "iterations: 18909000\ncpu: 36.572023903961075 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 120.41827160183345,
            "unit": "ns/iter",
            "extra": "iterations: 5929000\ncpu: 120.40871985157702 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 840.780576823447,
            "unit": "ns/iter",
            "extra": "iterations: 844000\ncpu: 836.6028436018962 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_local",
            "value": 2290741.736147584,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 580339.8319327733 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.814382772492587,
            "unit": "ns/iter",
            "extra": "iterations: 275503995\ncpu: 2.81319550375304 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.7908819835535703,
            "unit": "ns/iter",
            "extra": "iterations: 249858116\ncpu: 2.779660757547695 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 97.87444650408617,
            "unit": "ns/iter",
            "extra": "iterations: 7190365\ncpu: 97.8364936967734 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 416.628242816762,
            "unit": "ns/iter",
            "extra": "iterations: 1704975\ncpu: 416.57549230927134 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 49.030298785187924,
            "unit": "ns/iter",
            "extra": "iterations: 13956038\ncpu: 49.0154798947954 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 48.529792299519094,
            "unit": "ns/iter",
            "extra": "iterations: 14205814\ncpu: 48.52461815986049 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 51.38204447339024,
            "unit": "ns/iter",
            "extra": "iterations: 13939169\ncpu: 51.37902410107807 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 26.146846639837634,
            "unit": "ns/iter",
            "extra": "iterations: 27012864\ncpu: 26.143988286469757 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 988.3188815141843,
            "unit": "ns/iter",
            "extra": "iterations: 711404\ncpu: 987.8952044126819 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1003.8592814412565,
            "unit": "ns/iter",
            "extra": "iterations: 695968\ncpu: 1003.5743022667721 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.2945536901554813,
            "unit": "ns/iter",
            "extra": "iterations: 305060474\ncpu: 2.2941205421453583 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.485725020805631,
            "unit": "ns/iter",
            "extra": "iterations: 281571167\ncpu: 2.3877352470539006 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.078502432973659,
            "unit": "ns/iter",
            "extra": "iterations: 70257776\ncpu: 9.99910387143482 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.2982382081003365,
            "unit": "ns/iter",
            "extra": "iterations: 305790760\ncpu: 2.297906254590558 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1755598063055572,
            "unit": "ms/iter",
            "extra": "iterations: 4049\ncpu: 0.18316013830575453 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 1.376754259208284,
            "unit": "ms/iter",
            "extra": "iterations: 502\ncpu: 0.4800276892430278 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1790829025276207,
            "unit": "ms/iter",
            "extra": "iterations: 3988\ncpu: 0.18583560682046138 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 1.2240517177765775,
            "unit": "ms/iter",
            "extra": "iterations: 622\ncpu: 2.34463729903537 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.17305969364933735,
            "unit": "ms/iter",
            "extra": "iterations: 4036\ncpu: 0.18080064420218045 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 1.1641919612884521,
            "unit": "ms/iter",
            "extra": "iterations: 560\ncpu: 2.153100535714287 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.140030666273468,
            "unit": "ms/iter",
            "extra": "iterations: 98\ncpu: 7.141279591836735 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 14.900539232336957,
            "unit": "ms/iter",
            "extra": "iterations: 46\ncpu: 22.72166521739132 ms\nthreads: 1"
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
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "distinct": true,
          "id": "6b3c8ec0c9b2baee058a0c738866c729a6f090e6",
          "message": "jq install",
          "timestamp": "2022-01-15T00:33:42+01:00",
          "tree_id": "e7c17be68c491096333a45ac66c3400a1bc01112",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/6b3c8ec0c9b2baee058a0c738866c729a6f090e6"
        },
        "date": 1642204897195,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanCreation",
            "value": 56.74886358223059,
            "unit": "ns/iter",
            "extra": "iterations: 12313560\ncpu: 56.70123830963588 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 320.57849592797805,
            "unit": "ns/iter",
            "extra": "iterations: 2185679\ncpu: 320.33848520299654 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1024.0835173350997,
            "unit": "ns/iter",
            "extra": "iterations: 683217\ncpu: 1024.015503127118 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 250.30732009467448,
            "unit": "ns/iter",
            "extra": "iterations: 2796170\ncpu: 250.29358014712977 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 971.7668143433386,
            "unit": "ns/iter",
            "extra": "iterations: 720718\ncpu: 971.6883718736032 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 10357432.126998901,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 39009 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9615191.69807434,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 76115.5 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7288170.576095581,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 292017.9000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3231693.5062408447,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 37450.7 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3221275.568008423,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 70910.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4409219.50340271,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 236267 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3725.113930754063,
            "unit": "ns/iter",
            "extra": "iterations: 187228\ncpu: 3723.1957826820776 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.0078523654383083,
            "unit": "ns/iter",
            "extra": "iterations: 232884875\ncpu: 3.00773676263862 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75155.18727050991,
            "unit": "ns/iter",
            "extra": "iterations: 9307\ncpu: 75154.52884925324 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.012695027424289,
            "unit": "ns/iter",
            "extra": "iterations: 232370853\ncpu: 3.0126592512013537 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 628.6793670193672,
            "unit": "ns/iter",
            "extra": "iterations: 1110392\ncpu: 628.6404260837617 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16125.865852758454,
            "unit": "ns/iter",
            "extra": "iterations: 43938\ncpu: 15925.959306295234 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2992.9654528230635,
            "unit": "ns/iter",
            "extra": "iterations: 234211\ncpu: 2992.802643769931 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 52740.58206208165,
            "unit": "ns/iter",
            "extra": "iterations: 11660\ncpu: 52734.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 9.243939259050826,
            "unit": "ns/iter",
            "extra": "iterations: 75610936\ncpu: 9.2418773919159 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.285852105162531,
            "unit": "ns/iter",
            "extra": "iterations: 75412669\ncpu: 9.285230310572885 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 26.165190299477334,
            "unit": "ns/iter",
            "extra": "iterations: 26634000\ncpu: 26.164034692498305 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 101.32042725261404,
            "unit": "ns/iter",
            "extra": "iterations: 6927000\ncpu: 101.3180742023964 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 477.72544140890193,
            "unit": "ns/iter",
            "extra": "iterations: 1473000\ncpu: 477.71371350984384 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_local",
            "value": 1382448.281071516,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 365641.67101827683 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 3.090083318468995,
            "unit": "ns/iter",
            "extra": "iterations: 226194338\ncpu: 3.090001306752426 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.0665550376315864,
            "unit": "ns/iter",
            "extra": "iterations: 226259408\ncpu: 3.066168634190009 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 77.66060414961109,
            "unit": "ns/iter",
            "extra": "iterations: 8961801\ncpu: 77.64011943581434 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 335.1843522850067,
            "unit": "ns/iter",
            "extra": "iterations: 2090069\ncpu: 335.10730985436385 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 38.17676918947585,
            "unit": "ns/iter",
            "extra": "iterations: 18337002\ncpu: 38.171108886828954 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 38.168718274939586,
            "unit": "ns/iter",
            "extra": "iterations: 18343181\ncpu: 38.1669242646627 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 43.022410780352935,
            "unit": "ns/iter",
            "extra": "iterations: 16278233\ncpu: 43.02057846204808 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 21.712950177870763,
            "unit": "ns/iter",
            "extra": "iterations: 32264785\ncpu: 21.693239239003113 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 828.0917891573156,
            "unit": "ns/iter",
            "extra": "iterations: 845638\ncpu: 828.0670925384156 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 853.4055475072067,
            "unit": "ns/iter",
            "extra": "iterations: 845941\ncpu: 853.3816188126593 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.012493751222216,
            "unit": "ns/iter",
            "extra": "iterations: 232328050\ncpu: 3.012329333457583 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.996940816110404,
            "unit": "ns/iter",
            "extra": "iterations: 233812259\ncpu: 2.996803516619717 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.691076653663535,
            "unit": "ns/iter",
            "extra": "iterations: 69332879\ncpu: 10.065764036713377 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.915093986554274,
            "unit": "ns/iter",
            "extra": "iterations: 234982519\ncpu: 2.9144955246649658 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.13833962701640384,
            "unit": "ms/iter",
            "extra": "iterations: 5087\ncpu: 0.14461203066640455 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 1.2449913196735554,
            "unit": "ms/iter",
            "extra": "iterations: 555\ncpu: 0.3694706306306307 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.13787425689268926,
            "unit": "ms/iter",
            "extra": "iterations: 4631\ncpu: 0.144296523429065 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 1.179392863128145,
            "unit": "ms/iter",
            "extra": "iterations: 590\ncpu: 2.2970800000000002 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1379333604657264,
            "unit": "ms/iter",
            "extra": "iterations: 5095\ncpu: 0.14379731108930324 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 1.1987877054555656,
            "unit": "ms/iter",
            "extra": "iterations: 587\ncpu: 2.3439996592844965 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.340976569488759,
            "unit": "ms/iter",
            "extra": "iterations: 131\ncpu: 5.351422137404575 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 11.627849985341557,
            "unit": "ms/iter",
            "extra": "iterations: 61\ncpu: 20.098154098360645 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ehsan.sadroid@gmail.com",
            "name": "Oblivion",
            "username": "esigo"
          },
          "committer": {
            "email": "ehsan.sadroid@gmail.com",
            "name": "Oblivion",
            "username": "esigo"
          },
          "distinct": true,
          "id": "6cfe638a1922b0641c8c791546dc7aa5c98deecb",
          "message": "json format",
          "timestamp": "2022-01-15T19:43:53Z",
          "tree_id": "f7727c45cf18a5cea3d47dcb4a5e62896b281bad",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/6cfe638a1922b0641c8c791546dc7aa5c98deecb"
        },
        "date": 1642276488886,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.696954174291048,
            "unit": "ns/iter",
            "extra": "iterations: 82704679\ncpu: 1.69500688104962 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.6948942717281266,
            "unit": "ns/iter",
            "extra": "iterations: 82637799\ncpu: 1.6934901666487996 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.95839963615428,
            "unit": "ns/iter",
            "extra": "iterations: 15615188\ncpu: 8.954141314212805 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.69171868678122,
            "unit": "ns/iter",
            "extra": "iterations: 83070277\ncpu: 1.6903627274530455 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.06466814218286,
            "unit": "ns/iter",
            "extra": "iterations: 2639119\ncpu: 52.959150383139225 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 317.7194565014946,
            "unit": "ns/iter",
            "extra": "iterations: 443153\ncpu: 315.6169539639809 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1009.2864223201082,
            "unit": "ns/iter",
            "extra": "iterations: 139213\ncpu: 1005.8722964090992 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 232.43616849460994,
            "unit": "ns/iter",
            "extra": "iterations: 605929\ncpu: 231.30663823649294 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 971.0077011202422,
            "unit": "ns/iter",
            "extra": "iterations: 147356\ncpu: 955.1026086484434 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11084000770977995,
            "unit": "ms/iter",
            "extra": "iterations: 1268\ncpu: 0.10630788643533122 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21968871828109499,
            "unit": "ms/iter",
            "extra": "iterations: 630\ncpu: 0.21192587301587304 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10981540679931641,
            "unit": "ms/iter",
            "extra": "iterations: 1250\ncpu: 0.10635560000000002 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2403010847409072,
            "unit": "ms/iter",
            "extra": "iterations: 643\ncpu: 0.2123653188180404 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.11014464926018991,
            "unit": "ms/iter",
            "extra": "iterations: 1259\ncpu: 0.10772001588562352 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21744844714185402,
            "unit": "ms/iter",
            "extra": "iterations: 646\ncpu: 0.21202058823529424 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.4638636328957295,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.41300454545455 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.593900680541992,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.57174 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4541.665568190106,
            "unit": "ns/iter",
            "extra": "iterations: 37760\ncpu: 3690.4422669491523 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.623932539769098,
            "unit": "ns/iter",
            "extra": "iterations: 86441630\ncpu: 1.619208244916252 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75775.66629827279,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 74927.19957081549 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.628913267191811,
            "unit": "ns/iter",
            "extra": "iterations: 86454975\ncpu: 1.6190612512466753 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 681.2728486287522,
            "unit": "ns/iter",
            "extra": "iterations: 212131\ncpu: 674.3366127534401 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17371.88239282987,
            "unit": "ns/iter",
            "extra": "iterations: 8282\ncpu: 16931.441680753436 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2741.87634641094,
            "unit": "ns/iter",
            "extra": "iterations: 51345\ncpu: 2737.40383679034 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46964.56331503717,
            "unit": "ns/iter",
            "extra": "iterations: 2998\ncpu: 46575.817211474314 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9060833369380523,
            "unit": "ns/iter",
            "extra": "iterations: 85765395\ncpu: 1.6246016239999832 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.624921020036697,
            "unit": "ns/iter",
            "extra": "iterations: 86195220\ncpu: 1.6242397200215974 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.82090167140196,
            "unit": "ns/iter",
            "extra": "iterations: 1650951\ncpu: 84.78010552705682 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 331.22940436626686,
            "unit": "ns/iter",
            "extra": "iterations: 422617\ncpu: 331.20745261075626 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.281963970105785,
            "unit": "ns/iter",
            "extra": "iterations: 3767979\ncpu: 37.16217632847743 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.802131907712734,
            "unit": "ns/iter",
            "extra": "iterations: 3763471\ncpu: 37.20119007161205 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.24978268654366,
            "unit": "ns/iter",
            "extra": "iterations: 3477915\ncpu: 40.247677128394436 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.505026097278545,
            "unit": "ns/iter",
            "extra": "iterations: 6847238\ncpu: 20.467610443802304 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 798.9039346387881,
            "unit": "ns/iter",
            "extra": "iterations: 175302\ncpu: 798.9001836830167 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 802.639278046831,
            "unit": "ns/iter",
            "extra": "iterations: 174122\ncpu: 802.6343598166812 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 467542.77556421445,
            "unit": "ns/iter",
            "extra": "iterations: 6895\ncpu: 18873.067440174036 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 3196197.032928467,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 54442.600000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12058055.400848389,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 140355.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 306199.29942657775,
            "unit": "ns/iter",
            "extra": "iterations: 7684\ncpu: 18285.80166579906 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1251975.5363464355,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 51985.799999999974 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8596596.717834473,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 146313.00000000012 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.5092255225737596,
            "unit": "ns/iter",
            "extra": "iterations: 55958814\ncpu: 2.5027907131841642 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.5039207912713275,
            "unit": "ns/iter",
            "extra": "iterations: 18711449\ncpu: 7.474781883540928 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 29.30428357732376,
            "unit": "ns/iter",
            "extra": "iterations: 4768000\ncpu: 29.304383389261744 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 80.15859825055443,
            "unit": "ns/iter",
            "extra": "iterations: 1742000\ncpu: 80.15832376578646 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 663.9652342592935,
            "unit": "ns/iter",
            "extra": "iterations: 211000\ncpu: 663.9701421800947 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_local",
            "value": 1576228.003388659,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 341967.0184696568 ns\nthreads: 1"
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
          "id": "a11743ac92cfdd03309adf67b48cbfe81dbb6820",
          "message": "fix syntax",
          "timestamp": "2022-01-15T22:37:25+01:00",
          "tree_id": "c9586a4d2a2bc8dd6b8fc164b764e8a32b299c66",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/a11743ac92cfdd03309adf67b48cbfe81dbb6820"
        },
        "date": 1642283225917,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 25.32214813675669,
            "unit": "ns/iter",
            "extra": "iterations: 5508000\ncpu: 25.281590413943356 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 74.971527148673,
            "unit": "ns/iter",
            "extra": "iterations: 1866000\ncpu: 74.89067524115754 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 633.5040562832518,
            "unit": "ns/iter",
            "extra": "iterations: 221000\ncpu: 632.8990950226245 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_local",
            "value": 1663774.525353668,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 277357.6452599389 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}