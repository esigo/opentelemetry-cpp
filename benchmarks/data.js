window.BENCHMARK_DATA = {
  "lastUpdate": 1647451841966,
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
    ]
  }
}