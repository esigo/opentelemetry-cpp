window.BENCHMARK_DATA = {
  "lastUpdate": 1642202670079,
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
      }
    ]
  }
}