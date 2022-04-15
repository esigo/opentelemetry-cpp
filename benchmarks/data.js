window.BENCHMARK_DATA = {
  "lastUpdate": 1650012054452,
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
        "date": 1647457744156,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.8007768361151626,
            "unit": "ns/iter",
            "extra": "iterations: 72909072\ncpu: 1.7914917364467349 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.9120428214649279,
            "unit": "ns/iter",
            "extra": "iterations: 77416501\ncpu: 1.8529899717374199 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 1.8546141476566063,
            "unit": "ns/iter",
            "extra": "iterations: 82556905\ncpu: 1.7565217591429814 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.8335721250418284,
            "unit": "ns/iter",
            "extra": "iterations: 75054951\ncpu: 1.8289799429753808 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 63.293927699482886,
            "unit": "ns/iter",
            "extra": "iterations: 2245821\ncpu: 62.34112157647469 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 1121.4871141193782,
            "unit": "ns/iter",
            "extra": "iterations: 172204\ncpu: 807.2344428700843 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2656.555382246428,
            "unit": "ns/iter",
            "extra": "iterations: 55135\ncpu: 2555.7087149723407 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 413.7742240945988,
            "unit": "ns/iter",
            "extra": "iterations: 358001\ncpu: 410.02678763467134 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2586.0813099818083,
            "unit": "ns/iter",
            "extra": "iterations: 54077\ncpu: 2575.771584962184 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1648976454651902,
            "unit": "ms/iter",
            "extra": "iterations: 849\ncpu: 0.14893875147232036 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.5768273431149652,
            "unit": "ms/iter",
            "extra": "iterations: 443\ncpu: 0.2922076749435666 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 1.3496119756116347,
            "unit": "ms/iter",
            "extra": "iterations: 82\ncpu: 0.4319999999999995 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1858216752311412,
            "unit": "ms/iter",
            "extra": "iterations: 973\ncpu: 0.14969064748201436 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6819918518519645,
            "unit": "ms/iter",
            "extra": "iterations: 216\ncpu: 1.2511296296296293 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.1316183934423698,
            "unit": "ms/iter",
            "extra": "iterations: 122\ncpu: 3.0777622950819685 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.17260789874866214,
            "unit": "ms/iter",
            "extra": "iterations: 879\ncpu: 0.15395563139931764 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.7245773623178934,
            "unit": "ms/iter",
            "extra": "iterations: 207\ncpu: 1.361492753623188 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.353925147057845,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 3.788558823529414 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 4.201043108690536,
            "unit": "ms/iter",
            "extra": "iterations: 46\ncpu: 2.991565217391301 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 212.15794999989157,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 61.85399999999986 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 146.88953666670082,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 131.9033333333334 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 7459.009836411401,
            "unit": "ns/iter",
            "extra": "iterations: 18706\ncpu: 7374.585694429595 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.0765370510174535,
            "unit": "ns/iter",
            "extra": "iterations: 71337580\ncpu: 2.046340792608888 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 122386.79138509245,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 120606.41891891889 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.862296830000105,
            "unit": "ns/iter",
            "extra": "iterations: 81046660\ncpu: 1.70695498124167 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3457.766562008865,
            "unit": "ns/iter",
            "extra": "iterations: 43956\ncpu: 3211.324961324963 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 56561.082374809674,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 44679.515076157884 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4034.107558493651,
            "unit": "ns/iter",
            "extra": "iterations: 32996\ncpu: 3875.894047763363 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 65188.116651675686,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 62418.52181656282 ns\nthreads: 1"
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
        "date": 1647464749045,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 4.113694561507411,
            "unit": "ns/iter",
            "extra": "iterations: 70753525\ncpu: 1.9070003932666253 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.5200043709053346,
            "unit": "ns/iter",
            "extra": "iterations: 73769628\ncpu: 1.8672725311831582 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 2.0087765432362947,
            "unit": "ns/iter",
            "extra": "iterations: 76767012\ncpu: 1.775215635590975 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.9330290206140766,
            "unit": "ns/iter",
            "extra": "iterations: 76792277\ncpu: 1.8238683038399812 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 65.53459501890941,
            "unit": "ns/iter",
            "extra": "iterations: 2350295\ncpu: 59.85589043077571 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 815.3621957365772,
            "unit": "ns/iter",
            "extra": "iterations: 180477\ncpu: 784.3769566205114 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2987.630026006357,
            "unit": "ns/iter",
            "extra": "iterations: 53447\ncpu: 2632.9073661758393 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 467.10795858915964,
            "unit": "ns/iter",
            "extra": "iterations: 341455\ncpu: 416.92170271338813 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2994.1822387185534,
            "unit": "ns/iter",
            "extra": "iterations: 53611\ncpu: 2644.6065173192073 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.15449693654271981,
            "unit": "ms/iter",
            "extra": "iterations: 914\ncpu: 0.15149015317286652 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.8342542516340645,
            "unit": "ms/iter",
            "extra": "iterations: 306\ncpu: 0.3122516339869282 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 0.546681860696345,
            "unit": "ms/iter",
            "extra": "iterations: 201\ncpu: 0.41216915422885586 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14919524496297407,
            "unit": "ms/iter",
            "extra": "iterations: 943\ncpu: 0.14947720042417814 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6947936717172828,
            "unit": "ms/iter",
            "extra": "iterations: 198\ncpu: 1.2727777777777782 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.3257193904759592,
            "unit": "ms/iter",
            "extra": "iterations: 105\ncpu: 3.723009523809523 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.13976143216628328,
            "unit": "ms/iter",
            "extra": "iterations: 914\ncpu: 0.13982932166301973 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.6736927647059566,
            "unit": "ms/iter",
            "extra": "iterations: 221\ncpu: 1.2246018099547502 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.2632693968256832,
            "unit": "ms/iter",
            "extra": "iterations: 126\ncpu: 3.015738095238093 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.021829281247392,
            "unit": "ms/iter",
            "extra": "iterations: 32\ncpu: 2.993093749999995 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 71.13147699999445,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 51.808500000000144 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 257.1699310000213,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 136.32000000000045 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 19110.980837544415,
            "unit": "ns/iter",
            "extra": "iterations: 19987\ncpu: 7232.7012558162805 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 4.470365478796346,
            "unit": "ns/iter",
            "extra": "iterations: 70302300\ncpu: 1.9888111768747245 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 293548.12215670286,
            "unit": "ns/iter",
            "extra": "iterations: 1187\ncpu: 117354.67565290646 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.3798087508207666,
            "unit": "ns/iter",
            "extra": "iterations: 82068117\ncpu: 1.711895010336352 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 61966.26260141187,
            "unit": "ns/iter",
            "extra": "iterations: 42277\ncpu: 3390.6142819973047 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 720028.6869999672,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 47867.0000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 45741.47465425516,
            "unit": "ns/iter",
            "extra": "iterations: 36732\ncpu: 3974.953718828267 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 56814.05783026931,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 56521.73913043475 ns\nthreads: 1"
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
        "date": 1647468225822,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.0464307605709187,
            "unit": "ns/iter",
            "extra": "iterations: 68382748\ncpu: 2.0092055967098603 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.588567991723393,
            "unit": "ns/iter",
            "extra": "iterations: 68945139\ncpu: 2.0194172064835487 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 2.3362065791954536,
            "unit": "ns/iter",
            "extra": "iterations: 80840744\ncpu: 1.7859434841421058 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.4225381374454638,
            "unit": "ns/iter",
            "extra": "iterations: 68560235\ncpu: 2.032986030459201 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 65.93986232280355,
            "unit": "ns/iter",
            "extra": "iterations: 2279536\ncpu: 62.03499308631229 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 1033.5982729521502,
            "unit": "ns/iter",
            "extra": "iterations: 177760\ncpu: 796.9509450945097 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2708.473420394247,
            "unit": "ns/iter",
            "extra": "iterations: 54064\ncpu: 2606.0964782480028 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 432.49315526901347,
            "unit": "ns/iter",
            "extra": "iterations: 358524\ncpu: 416.87585768316774 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2601.007490987388,
            "unit": "ns/iter",
            "extra": "iterations: 53531\ncpu: 2531.710597597656 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.14704609477135136,
            "unit": "ms/iter",
            "extra": "iterations: 918\ncpu: 0.14904793028322438 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.37491485597886665,
            "unit": "ms/iter",
            "extra": "iterations: 368\ncpu: 0.4348614130434782 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 0.9851381025627288,
            "unit": "ms/iter",
            "extra": "iterations: 234\ncpu: 0.4274572649572653 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14209672265597106,
            "unit": "ms/iter",
            "extra": "iterations: 1024\ncpu: 0.1395644531250001 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6613979820886288,
            "unit": "ms/iter",
            "extra": "iterations: 335\ncpu: 1.2279880597014927 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.163871619832027,
            "unit": "ms/iter",
            "extra": "iterations: 121\ncpu: 3.1508264462809943 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14567065797410114,
            "unit": "ms/iter",
            "extra": "iterations: 997\ncpu: 0.14505416248746267 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.7908011382974013,
            "unit": "ms/iter",
            "extra": "iterations: 188\ncpu: 1.5118882978723394 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.401050940591748,
            "unit": "ms/iter",
            "extra": "iterations: 101\ncpu: 3.917772277227722 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 2.929844634142749,
            "unit": "ms/iter",
            "extra": "iterations: 41\ncpu: 2.8543658536585377 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 193.38780499992936,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 58.2360000000004 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 139.09876300022006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 136.77399999999994 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 16741.957651933553,
            "unit": "ns/iter",
            "extra": "iterations: 19812\ncpu: 7080.607712497476 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.610830571185656,
            "unit": "ns/iter",
            "extra": "iterations: 71330310\ncpu: 2.338571078690111 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 273139.82250007027,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 115032.49999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 7.68224153838774,
            "unit": "ns/iter",
            "extra": "iterations: 82732538\ncpu: 1.7209673901216465 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 41770.826740696175,
            "unit": "ns/iter",
            "extra": "iterations: 41966\ncpu: 3530.643854548922 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 779508.7433154936,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 49744.3181818182 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 50744.348699981856,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 4063.5999999999894 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 65347.64169783272,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 56751.97669579688 ns\nthreads: 1"
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
        "date": 1647471847401,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.0100034949956207,
            "unit": "ns/iter",
            "extra": "iterations: 68506557\ncpu: 2.0079537787893793 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.0449243298004225,
            "unit": "ns/iter",
            "extra": "iterations: 70465069\ncpu: 2.023215218876746 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 1.7289260053484454,
            "unit": "ns/iter",
            "extra": "iterations: 83165023\ncpu: 1.7127152120188789 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 3.2106460167827042,
            "unit": "ns/iter",
            "extra": "iterations: 69163126\ncpu: 2.0418972965449815 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 61.74447822608017,
            "unit": "ns/iter",
            "extra": "iterations: 2035623\ncpu: 60.69100221406419 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 784.1509931254961,
            "unit": "ns/iter",
            "extra": "iterations: 173392\ncpu: 778.7268155393559 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 3245.963374815289,
            "unit": "ns/iter",
            "extra": "iterations: 53597\ncpu: 2652.49920704517 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 460.5944583260243,
            "unit": "ns/iter",
            "extra": "iterations: 334592\ncpu: 422.09018745218066 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2853.6063015371215,
            "unit": "ns/iter",
            "extra": "iterations: 54209\ncpu: 2609.289970300135 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.15928044408561834,
            "unit": "ms/iter",
            "extra": "iterations: 930\ncpu: 0.15354408602150538 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.3681734609169431,
            "unit": "ms/iter",
            "extra": "iterations: 371\ncpu: 0.3791698113207546 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 0.8441034388712428,
            "unit": "ms/iter",
            "extra": "iterations: 319\ncpu: 0.4070846394984327 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14603202661585338,
            "unit": "ms/iter",
            "extra": "iterations: 1052\ncpu: 0.14783365019011407 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.7644817157908715,
            "unit": "ms/iter",
            "extra": "iterations: 190\ncpu: 1.42628947368421 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.3389433888901463,
            "unit": "ms/iter",
            "extra": "iterations: 108\ncpu: 3.5195833333333333 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1460622395628252,
            "unit": "ms/iter",
            "extra": "iterations: 1006\ncpu: 0.14636878727634184 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.7385924689279012,
            "unit": "ms/iter",
            "extra": "iterations: 177\ncpu: 1.3714463276836142 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.2917129897965536,
            "unit": "ms/iter",
            "extra": "iterations: 98\ncpu: 3.2495816326530593 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 4.549210116280403,
            "unit": "ms/iter",
            "extra": "iterations: 43\ncpu: 3.617837209302326 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 65.17534299996441,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 53.544500000000106 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 162.11724100003266,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 134.78499999999994 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 6907.2770503317115,
            "unit": "ns/iter",
            "extra": "iterations: 19704\ncpu: 6887.8907835972395 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.9894190803529934,
            "unit": "ns/iter",
            "extra": "iterations: 71556351\ncpu: 1.9567794897758264 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 122639.33497524406,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 115499.17898193767 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.8095291323010367,
            "unit": "ns/iter",
            "extra": "iterations: 83254044\ncpu: 1.6927105667083282 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3284.9161205778414,
            "unit": "ns/iter",
            "extra": "iterations: 46543\ncpu: 3049.3736974410717 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 45548.544631713135,
            "unit": "ns/iter",
            "extra": "iterations: 3204\ncpu: 43821.47315855184 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3995.3321583276606,
            "unit": "ns/iter",
            "extra": "iterations: 37163\ncpu: 3772.9462099399957 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 63569.47671468577,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 59989.415749365 ns\nthreads: 1"
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
        "date": 1647475428991,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 4.687793402001373,
            "unit": "ns/iter",
            "extra": "iterations: 77130737\ncpu: 1.933094454938243 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 5.121756782911025,
            "unit": "ns/iter",
            "extra": "iterations: 74203636\ncpu: 1.9233424087197024 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 3.492032449025586,
            "unit": "ns/iter",
            "extra": "iterations: 78766738\ncpu: 1.8010013312979891 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 3.260719822796334,
            "unit": "ns/iter",
            "extra": "iterations: 73726895\ncpu: 1.8926607447662078 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 64.53720286849882,
            "unit": "ns/iter",
            "extra": "iterations: 2310803\ncpu: 62.05202260859104 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 824.5085009281893,
            "unit": "ns/iter",
            "extra": "iterations: 166570\ncpu: 814.9666806747911 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2726.313461419275,
            "unit": "ns/iter",
            "extra": "iterations: 51681\ncpu: 2655.8696619647462 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 466.4407317645183,
            "unit": "ns/iter",
            "extra": "iterations: 306547\ncpu: 446.05884252659473 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2717.4459957964636,
            "unit": "ns/iter",
            "extra": "iterations: 51783\ncpu: 2611.1851379796453 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.14409432065815356,
            "unit": "ms/iter",
            "extra": "iterations: 973\ncpu: 0.1490472764645427 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 6.660252786665903,
            "unit": "ms/iter",
            "extra": "iterations: 75\ncpu: 0.5701733333333336 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 9.433621428570405,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 1.1957857142857147 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1405054185068138,
            "unit": "ms/iter",
            "extra": "iterations: 951\ncpu: 0.14670557308096746 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.5593716788630778,
            "unit": "ms/iter",
            "extra": "iterations: 246\ncpu: 1.0126341463414634 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.1487107619056285,
            "unit": "ms/iter",
            "extra": "iterations: 126\ncpu: 3.0793253968253977 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14126790945690743,
            "unit": "ms/iter",
            "extra": "iterations: 994\ncpu: 0.14639034205231397 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.5960720762721518,
            "unit": "ms/iter",
            "extra": "iterations: 236\ncpu: 1.098300847457627 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.3503457980776217,
            "unit": "ms/iter",
            "extra": "iterations: 104\ncpu: 3.8023076923076946 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 2.786033820002558,
            "unit": "ms/iter",
            "extra": "iterations: 50\ncpu: 2.7901600000000037 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 6.285876391302736,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 10.026999999999969 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 9.160832466659485,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 18.926533333333346 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 18046.9528552155,
            "unit": "ns/iter",
            "extra": "iterations: 19981\ncpu: 10523.046894549821 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.581166879553512,
            "unit": "ns/iter",
            "extra": "iterations: 45248869\ncpu: 2.4958855877701605 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 2067136.4473010448,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 556957.5835475578 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.3453758770057145,
            "unit": "ns/iter",
            "extra": "iterations: 82756990\ncpu: 1.6865040644905036 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 6939.78336632247,
            "unit": "ns/iter",
            "extra": "iterations: 46484\ncpu: 3017.4038378797 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 99357.58092850137,
            "unit": "ns/iter",
            "extra": "iterations: 3188\ncpu: 43338.143036386486 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 10713.259932824643,
            "unit": "ns/iter",
            "extra": "iterations: 38106\ncpu: 3692.751797617175 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 105071.66694164283,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 57646.743610882084 ns\nthreads: 1"
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
        "date": 1647483915129,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.0393075384475483,
            "unit": "ns/iter",
            "extra": "iterations: 72753729\ncpu: 1.9541953650238326 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.059713333353729,
            "unit": "ns/iter",
            "extra": "iterations: 69351563\ncpu: 1.9868333753343088 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 1.8274322775750276,
            "unit": "ns/iter",
            "extra": "iterations: 78475336\ncpu: 1.8078546360094592 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.1479182164911785,
            "unit": "ns/iter",
            "extra": "iterations: 71607590\ncpu: 2.027326991454397 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 61.711033666949625,
            "unit": "ns/iter",
            "extra": "iterations: 2296136\ncpu: 61.21762822411216 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 912.4981389820507,
            "unit": "ns/iter",
            "extra": "iterations: 177591\ncpu: 796.4705418630447 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 3181.837082857138,
            "unit": "ns/iter",
            "extra": "iterations: 54807\ncpu: 2638.38560767785 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 443.1541511670513,
            "unit": "ns/iter",
            "extra": "iterations: 326089\ncpu: 412.3782157631813 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 3038.090375946181,
            "unit": "ns/iter",
            "extra": "iterations: 52348\ncpu: 2616.1839993887074 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.15669142424257113,
            "unit": "ms/iter",
            "extra": "iterations: 924\ncpu: 0.15695779220779224 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.4084134869974223,
            "unit": "ms/iter",
            "extra": "iterations: 423\ncpu: 0.3270756501182033 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 0.9399778364485147,
            "unit": "ms/iter",
            "extra": "iterations: 214\ncpu: 0.4501822429906543 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1517663132036975,
            "unit": "ms/iter",
            "extra": "iterations: 977\ncpu: 0.1423899692937565 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.724722113445483,
            "unit": "ms/iter",
            "extra": "iterations: 238\ncpu: 1.3320714285714286 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.2892479158882817,
            "unit": "ms/iter",
            "extra": "iterations: 107\ncpu: 3.1754112149532734 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14721047037894647,
            "unit": "ms/iter",
            "extra": "iterations: 844\ncpu: 0.146607819905213 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.7335477202071825,
            "unit": "ms/iter",
            "extra": "iterations: 193\ncpu: 1.3383212435233167 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.3550772783491056,
            "unit": "ms/iter",
            "extra": "iterations: 97\ncpu: 3.2565876288659776 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.672575400004159,
            "unit": "ms/iter",
            "extra": "iterations: 30\ncpu: 3.050099999999996 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 65.16226000007919,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 54.8575 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 205.91350900008365,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 142.0650000000001 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 18095.410827708187,
            "unit": "ns/iter",
            "extra": "iterations: 19524\ncpu: 7597.316123745136 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 4.931312209716673,
            "unit": "ns/iter",
            "extra": "iterations: 69166543\ncpu: 2.0153096273728757 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 123976.31803005864,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 116618.53088480803 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.7523736544898252,
            "unit": "ns/iter",
            "extra": "iterations: 80868762\ncpu: 1.6790290421411427 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3315.8809795230623,
            "unit": "ns/iter",
            "extra": "iterations: 45614\ncpu: 3198.579383522603 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 50893.59161144843,
            "unit": "ns/iter",
            "extra": "iterations: 3171\ncpu: 43953.32702617469 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 5703.3915196103035,
            "unit": "ns/iter",
            "extra": "iterations: 36154\ncpu: 3883.304751894676 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 84765.14153325571,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 59138.58466722823 ns\nthreads: 1"
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
        "date": 1647487483220,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.3673589356741505,
            "unit": "ns/iter",
            "extra": "iterations: 76327554\ncpu: 1.914682081912385 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.8536779848192615,
            "unit": "ns/iter",
            "extra": "iterations: 72456267\ncpu: 1.9473677825549582 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 1.8938252529566058,
            "unit": "ns/iter",
            "extra": "iterations: 79876762\ncpu: 1.7793410303737647 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.8369123388590938,
            "unit": "ns/iter",
            "extra": "iterations: 75926026\ncpu: 1.8146478521080502 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 67.14208466552697,
            "unit": "ns/iter",
            "extra": "iterations: 2356426\ncpu: 59.843593645631124 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 785.5375438036059,
            "unit": "ns/iter",
            "extra": "iterations: 176354\ncpu: 779.9823083116911 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2693.434546807677,
            "unit": "ns/iter",
            "extra": "iterations: 55131\ncpu: 2619.3792965844978 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 415.80661300273243,
            "unit": "ns/iter",
            "extra": "iterations: 343989\ncpu: 389.1083726514511 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2653.615077994569,
            "unit": "ns/iter",
            "extra": "iterations: 52182\ncpu: 2635.1423862634615 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.15900018002207092,
            "unit": "ms/iter",
            "extra": "iterations: 911\ncpu: 0.14148737650933038 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.4586806264232356,
            "unit": "ms/iter",
            "extra": "iterations: 439\ncpu: 0.3095512528473804 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 0.902696819742314,
            "unit": "ms/iter",
            "extra": "iterations: 233\ncpu: 0.4050386266094421 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14048311770436975,
            "unit": "ms/iter",
            "extra": "iterations: 1028\ncpu: 0.14154085603112843 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6541497345974181,
            "unit": "ms/iter",
            "extra": "iterations: 211\ncpu: 1.1846729857819902 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.3482615321112912,
            "unit": "ms/iter",
            "extra": "iterations: 109\ncpu: 3.219275229357799 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.21457167824302073,
            "unit": "ms/iter",
            "extra": "iterations: 979\ncpu: 0.1379785495403473 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.6823954690834707,
            "unit": "ms/iter",
            "extra": "iterations: 469\ncpu: 1.2454776119402984 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.3615037938136796,
            "unit": "ms/iter",
            "extra": "iterations: 97\ncpu: 3.4701340206185587 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 4.144242444447678,
            "unit": "ms/iter",
            "extra": "iterations: 36\ncpu: 2.9615555555555506 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 79.80524350000451,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 60.29799999999996 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 180.5194839998876,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 141.77600000000012 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 9006.247216489577,
            "unit": "ns/iter",
            "extra": "iterations: 19849\ncpu: 7136.32928611013 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 4.964139463759313,
            "unit": "ns/iter",
            "extra": "iterations: 69176796\ncpu: 2.0369402479987646 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 242546.7940425501,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 119837.4468085107 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 4.410823604296397,
            "unit": "ns/iter",
            "extra": "iterations: 80789428\ncpu: 1.716412696968222 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3207.487064166906,
            "unit": "ns/iter",
            "extra": "iterations: 44025\ncpu: 3091.243611584327 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 43449.129313021054,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 43098.22816288467 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3950.087527589051,
            "unit": "ns/iter",
            "extra": "iterations: 37154\ncpu: 3840.0979706088206 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 80117.81431004636,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 59158.432708688204 ns\nthreads: 1"
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
        "date": 1647490013228,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.9213503961727267,
            "unit": "ns/iter",
            "extra": "iterations: 73475386\ncpu: 1.840003943633586 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.774996285209513,
            "unit": "ns/iter",
            "extra": "iterations: 79122867\ncpu: 1.7723068604174816 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 1.7662185994178425,
            "unit": "ns/iter",
            "extra": "iterations: 75798592\ncpu: 1.7626053001090043 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.164475549826904,
            "unit": "ns/iter",
            "extra": "iterations: 75634792\ncpu: 1.8920260929652575 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 67.37957873676879,
            "unit": "ns/iter",
            "extra": "iterations: 2233995\ncpu: 62.84749965868321 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 848.6352273829827,
            "unit": "ns/iter",
            "extra": "iterations: 175057\ncpu: 792.1305631879902 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2733.9901379226185,
            "unit": "ns/iter",
            "extra": "iterations: 53944\ncpu: 2663.984873201839 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 508.07918043300543,
            "unit": "ns/iter",
            "extra": "iterations: 337154\ncpu: 424.3491104955007 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2814.1050352988873,
            "unit": "ns/iter",
            "extra": "iterations: 53125\ncpu: 2713.1482352941184 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.15317599481837874,
            "unit": "ms/iter",
            "extra": "iterations: 965\ncpu: 0.15861243523316063 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 4.335570454548526,
            "unit": "ms/iter",
            "extra": "iterations: 33\ncpu: 0.397060606060607 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 5.036910659090278,
            "unit": "ms/iter",
            "extra": "iterations: 44\ncpu: 0.597022727272727 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1659228563016152,
            "unit": "ms/iter",
            "extra": "iterations: 849\ncpu: 0.17107302709069494 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6936000135740198,
            "unit": "ms/iter",
            "extra": "iterations: 221\ncpu: 1.2580678733031672 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.065277266187347,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 2.3945611510791363 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.16172580244145363,
            "unit": "ms/iter",
            "extra": "iterations: 901\ncpu: 0.16785904550499464 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.7592964924624174,
            "unit": "ms/iter",
            "extra": "iterations: 199\ncpu: 1.353130653266331 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.0822212499988382,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 2.0831500000000025 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 3.2807087142865217,
            "unit": "ms/iter",
            "extra": "iterations: 49\ncpu: 2.88116326530612 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 10.02523789998122,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 12.62129999999999 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 154.42901333335612,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 108.98299999999999 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 7011.337189584303,
            "unit": "ns/iter",
            "extra": "iterations: 20054\ncpu: 6974.668395332602 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.0218207712934917,
            "unit": "ns/iter",
            "extra": "iterations: 71684588\ncpu: 1.970507244876682 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 120109.8827413908,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 113691.99009083412 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.852139389029552,
            "unit": "ns/iter",
            "extra": "iterations: 83482409\ncpu: 1.6855886370025566 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3665.9847563115272,
            "unit": "ns/iter",
            "extra": "iterations: 44543\ncpu: 3214.8485732887343 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 48405.910593778266,
            "unit": "ns/iter",
            "extra": "iterations: 2964\ncpu: 45776.3157894737 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3697.5420592475994,
            "unit": "ns/iter",
            "extra": "iterations: 38315\ncpu: 3653.268954717478 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 58999.96957395147,
            "unit": "ns/iter",
            "extra": "iterations: 2465\ncpu: 56915.21298174441 ns\nthreads: 1"
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
        "date": 1647494139173,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.1170109295196227,
            "unit": "ns/iter",
            "extra": "iterations: 81291372\ncpu: 1.8993405597829 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.3889674086008856,
            "unit": "ns/iter",
            "extra": "iterations: 77493634\ncpu: 1.9019497782230728 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 1.9828954975021746,
            "unit": "ns/iter",
            "extra": "iterations: 77220077\ncpu: 1.7753932050598706 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.194568956674232,
            "unit": "ns/iter",
            "extra": "iterations: 72708387\ncpu: 2.0445096657143544 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 63.77720043552895,
            "unit": "ns/iter",
            "extra": "iterations: 2218595\ncpu: 62.447179408589655 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 802.7828265595482,
            "unit": "ns/iter",
            "extra": "iterations: 184599\ncpu: 787.9132606352149 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2593.485994527637,
            "unit": "ns/iter",
            "extra": "iterations: 54443\ncpu: 2589.478904542366 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 418.62445776062697,
            "unit": "ns/iter",
            "extra": "iterations: 316742\ncpu: 417.0934072525904 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2929.0934887191734,
            "unit": "ns/iter",
            "extra": "iterations: 50113\ncpu: 2825.9932552431515 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.14988698101273112,
            "unit": "ms/iter",
            "extra": "iterations: 948\ncpu: 0.15124789029535862 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 1.1239088700040156,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.2987599999999996 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 2.782038800000919,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.51934 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14577366598566202,
            "unit": "ms/iter",
            "extra": "iterations: 979\ncpu: 0.13905720122574056 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6756370532315583,
            "unit": "ms/iter",
            "extra": "iterations: 263\ncpu: 1.2533307984790878 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.3810182692325794,
            "unit": "ms/iter",
            "extra": "iterations: 104\ncpu: 3.7773076923076934 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1501291546499957,
            "unit": "ms/iter",
            "extra": "iterations: 957\ncpu: 0.14926332288401242 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.7707263369549923,
            "unit": "ms/iter",
            "extra": "iterations: 184\ncpu: 1.4497282608695643 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.5245837934808941,
            "unit": "ms/iter",
            "extra": "iterations: 92\ncpu: 4.278402173913041 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.048642375006314,
            "unit": "ms/iter",
            "extra": "iterations: 48\ncpu: 2.919250000000003 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 67.00697500006451,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 56.58099999999999 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 134.06477299986364,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 110.41599999999985 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 9557.57001175099,
            "unit": "ns/iter",
            "extra": "iterations: 19561\ncpu: 7219.467307397371 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.643937715369847,
            "unit": "ns/iter",
            "extra": "iterations: 70189512\ncpu: 1.975252371037998 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 292738.3718592354,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 118091.28978224451 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.8973484892882104,
            "unit": "ns/iter",
            "extra": "iterations: 82517977\ncpu: 1.6997023569785292 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3100.7983893815376,
            "unit": "ns/iter",
            "extra": "iterations: 45945\ncpu: 3010.556099684405 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 44011.11751929054,
            "unit": "ns/iter",
            "extra": "iterations: 3225\ncpu: 43227.28682170542 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 6892.896295120934,
            "unit": "ns/iter",
            "extra": "iterations: 37761\ncpu: 3778.6075580625584 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 72218.04856793913,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 60901.618929016164 ns\nthreads: 1"
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
        "date": 1647497398885,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.8565488445855185,
            "unit": "ns/iter",
            "extra": "iterations: 73863037\ncpu: 1.817390747147318 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.083971519449328,
            "unit": "ns/iter",
            "extra": "iterations: 67512176\ncpu: 1.9507444109044865 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 2.454721999246691,
            "unit": "ns/iter",
            "extra": "iterations: 76049758\ncpu: 1.8100254835787906 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.253619779643291,
            "unit": "ns/iter",
            "extra": "iterations: 68136468\ncpu: 1.9868215065095534 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 61.53504930014292,
            "unit": "ns/iter",
            "extra": "iterations: 2318149\ncpu: 59.74206144643853 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 1322.258464114102,
            "unit": "ns/iter",
            "extra": "iterations: 168476\ncpu: 830.9254730644129 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 3455.658639008171,
            "unit": "ns/iter",
            "extra": "iterations: 51198\ncpu: 2735.8685886167427 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 493.16558197926844,
            "unit": "ns/iter",
            "extra": "iterations: 326515\ncpu: 412.7191706353462 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 3369.8235892783086,
            "unit": "ns/iter",
            "extra": "iterations: 51091\ncpu: 2899.160321778788 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.14817856919664102,
            "unit": "ms/iter",
            "extra": "iterations: 896\ncpu: 0.14778906249999998 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 1.1030690697659105,
            "unit": "ms/iter",
            "extra": "iterations: 129\ncpu: 0.39498449612403097 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 1.3308375217396435,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 0.5604710144927536 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.16317151444296263,
            "unit": "ms/iter",
            "extra": "iterations: 727\ncpu: 0.14447042640990373 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6109166153843028,
            "unit": "ms/iter",
            "extra": "iterations: 247\ncpu: 0.9950080971659918 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 0.9228902252244052,
            "unit": "ms/iter",
            "extra": "iterations: 111\ncpu: 1.453180180180179 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.17674454833577732,
            "unit": "ms/iter",
            "extra": "iterations: 631\ncpu: 0.1647385103011097 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.7146278522173511,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 1.323906403940887 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.32956567368446,
            "unit": "ms/iter",
            "extra": "iterations: 95\ncpu: 3.2907578947368394 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 144.52205099996718,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3.4809999999998453 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 87.19013699999323,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 58.68099999999998 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 146.08098799999425,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 130.5799999999997 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 7675.318285332043,
            "unit": "ns/iter",
            "extra": "iterations: 19759\ncpu: 6813.755756870287 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.004768227417276,
            "unit": "ns/iter",
            "extra": "iterations: 70760677\ncpu: 1.9618523434986355 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 118085.3744922687,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 115377.7416734363 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.0641453254434836,
            "unit": "ns/iter",
            "extra": "iterations: 83432658\ncpu: 1.7366101413190007 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3120.756801902077,
            "unit": "ns/iter",
            "extra": "iterations: 43701\ncpu: 3053.248209423124 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 70004.28350514814,
            "unit": "ns/iter",
            "extra": "iterations: 3104\ncpu: 44396.262886597964 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4428.577379670992,
            "unit": "ns/iter",
            "extra": "iterations: 37064\ncpu: 3685.543924023317 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 76487.62301256611,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 58303.347280334754 ns\nthreads: 1"
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
        "date": 1647501020259,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.9131013230511404,
            "unit": "ns/iter",
            "extra": "iterations: 80082370\ncpu: 1.8451127258096882 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.7761584133073869,
            "unit": "ns/iter",
            "extra": "iterations: 75983718\ncpu: 1.7686552269000573 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 1.763620221535582,
            "unit": "ns/iter",
            "extra": "iterations: 77708703\ncpu: 1.7523519855942005 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.8468558678090488,
            "unit": "ns/iter",
            "extra": "iterations: 82121070\ncpu: 1.8116178953830002 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 72.63382721219494,
            "unit": "ns/iter",
            "extra": "iterations: 2233746\ncpu: 63.28203833381234 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 831.1287142725,
            "unit": "ns/iter",
            "extra": "iterations: 176616\ncpu: 804.1400552611317 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2684.8013785997446,
            "unit": "ns/iter",
            "extra": "iterations: 52517\ncpu: 2654.9117428642144 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 423.5878104776552,
            "unit": "ns/iter",
            "extra": "iterations: 355863\ncpu: 405.2711296201067 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2995.753331942328,
            "unit": "ns/iter",
            "extra": "iterations: 52747\ncpu: 2638.7472273304647 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.14780416739125465,
            "unit": "ms/iter",
            "extra": "iterations: 920\ncpu: 0.14973043478260867 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.5765913677130673,
            "unit": "ms/iter",
            "extra": "iterations: 223\ncpu: 0.27244394618834084 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 0.9711072380947045,
            "unit": "ms/iter",
            "extra": "iterations: 273\ncpu: 0.41488644688644705 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.18354334474887138,
            "unit": "ms/iter",
            "extra": "iterations: 876\ncpu: 0.14075684931506854 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6711929124994261,
            "unit": "ms/iter",
            "extra": "iterations: 240\ncpu: 1.2203458333333332 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.2510172068981116,
            "unit": "ms/iter",
            "extra": "iterations: 116\ncpu: 3.385836206896551 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14063650657242574,
            "unit": "ms/iter",
            "extra": "iterations: 989\ncpu: 0.13755207280080892 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.6204769109459239,
            "unit": "ms/iter",
            "extra": "iterations: 539\ncpu: 1.1034508348794054 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.366607484536046,
            "unit": "ms/iter",
            "extra": "iterations: 97\ncpu: 3.6188865979381446 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.453631513516705,
            "unit": "ms/iter",
            "extra": "iterations: 37\ncpu: 2.978864864864869 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 60.22711966663034,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 58.51100000000005 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 164.7938080000131,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 141.66000000000034 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 6939.047600218943,
            "unit": "ns/iter",
            "extra": "iterations: 20231\ncpu: 6930.9475557313035 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.9842153711672474,
            "unit": "ns/iter",
            "extra": "iterations: 71112917\ncpu: 1.9531613363575002 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 118478.95645162005,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 113671.77419354844 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.701418034605083,
            "unit": "ns/iter",
            "extra": "iterations: 83672006\ncpu: 1.673104383322661 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3234.5116359232015,
            "unit": "ns/iter",
            "extra": "iterations: 46408\ncpu: 3024.1122220306843 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 45099.10480623529,
            "unit": "ns/iter",
            "extra": "iterations: 3225\ncpu: 44205.581395348905 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4409.715521508007,
            "unit": "ns/iter",
            "extra": "iterations: 38379\ncpu: 3690.846556710706 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 160451.49773944123,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 74671.18783394978 ns\nthreads: 1"
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
        "date": 1647504148547,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.9040368875145939,
            "unit": "ns/iter",
            "extra": "iterations: 73306105\ncpu: 1.854893258890238 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.9466295906988,
            "unit": "ns/iter",
            "extra": "iterations: 76469303\ncpu: 1.86406825232865 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 2.227806122582944,
            "unit": "ns/iter",
            "extra": "iterations: 71972034\ncpu: 1.925831358330098 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.0183609341349333,
            "unit": "ns/iter",
            "extra": "iterations: 73664825\ncpu: 1.9209846762006137 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 69.92511769021856,
            "unit": "ns/iter",
            "extra": "iterations: 2063892\ncpu: 64.39484236578271 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 942.7628804177182,
            "unit": "ns/iter",
            "extra": "iterations: 173461\ncpu: 824.9347115489934 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 3224.5348536489323,
            "unit": "ns/iter",
            "extra": "iterations: 48718\ncpu: 2724.41397430108 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 544.7308105265038,
            "unit": "ns/iter",
            "extra": "iterations: 289651\ncpu: 430.811562880846 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 3273.7808320226204,
            "unit": "ns/iter",
            "extra": "iterations: 50167\ncpu: 2698.467119819802 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.2570036570858775,
            "unit": "ms/iter",
            "extra": "iterations: 1009\ncpu: 0.1330882061446977 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 2.240100229996642,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.2751300000000001 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 2.138708695647306,
            "unit": "ms/iter",
            "extra": "iterations: 69\ncpu: 0.42123188405797113 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.4199735692769668,
            "unit": "ms/iter",
            "extra": "iterations: 332\ncpu: 0.129933734939759 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 1.1082578600007764,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.5640799999999996 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 2.0422871962607396,
            "unit": "ms/iter",
            "extra": "iterations: 107\ncpu: 0.878570093457944 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.35702343137291476,
            "unit": "ms/iter",
            "extra": "iterations: 306\ncpu: 0.12928104575163377 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.8288262173908856,
            "unit": "ms/iter",
            "extra": "iterations: 506\ncpu: 0.6419861660079049 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.799889149997398,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.8330700000000002 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 1297.2691179998037,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 5.392999999999981 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 6.819526210524361,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 10.965789473684211 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 76.35937833341207,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 111.16933333333331 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 7990.182207352703,
            "unit": "ns/iter",
            "extra": "iterations: 18221\ncpu: 7617.254815871795 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.1043617607840615,
            "unit": "ns/iter",
            "extra": "iterations: 70904026\ncpu: 1.9865303558362115 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 130583.81219108783,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 119855.84843492587 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.8581302451003219,
            "unit": "ns/iter",
            "extra": "iterations: 69881202\ncpu: 1.7173001689352734 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3463.295171233872,
            "unit": "ns/iter",
            "extra": "iterations: 44442\ncpu: 3194.073174024573 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 47608.24175133711,
            "unit": "ns/iter",
            "extra": "iterations: 3152\ncpu: 43859.45431472087 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4105.77860322988,
            "unit": "ns/iter",
            "extra": "iterations: 36613\ncpu: 3906.727118782942 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 67495.6050129772,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 62306.395851339585 ns\nthreads: 1"
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
        "date": 1647508097187,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.099897524632839,
            "unit": "ns/iter",
            "extra": "iterations: 69947539\ncpu: 1.9083730737117142 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.2883960357545248,
            "unit": "ns/iter",
            "extra": "iterations: 76800702\ncpu: 1.8756599386292063 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 2.1446891005699156,
            "unit": "ns/iter",
            "extra": "iterations: 81248912\ncpu: 1.7956178908586489 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.8380904786520897,
            "unit": "ns/iter",
            "extra": "iterations: 74428495\ncpu: 1.815218754591237 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 68.12345490640699,
            "unit": "ns/iter",
            "extra": "iterations: 2175839\ncpu: 65.64548204164002 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 799.8300453347032,
            "unit": "ns/iter",
            "extra": "iterations: 178224\ncpu: 771.0465481641081 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 4748.930836058738,
            "unit": "ns/iter",
            "extra": "iterations: 53525\ncpu: 3398.8042970574497 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 3366.3496911354646,
            "unit": "ns/iter",
            "extra": "iterations: 240558\ncpu: 1411.3477830710265 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 39953.19769744706,
            "unit": "ns/iter",
            "extra": "iterations: 13637\ncpu: 10065.043631297203 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.13919070807443057,
            "unit": "ms/iter",
            "extra": "iterations: 805\ncpu: 0.13625962732919253 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2947493918575005,
            "unit": "ms/iter",
            "extra": "iterations: 393\ncpu: 0.263615776081425 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 0.4151207259481336,
            "unit": "ms/iter",
            "extra": "iterations: 343\ncpu: 0.38947521865889206 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14081569208760045,
            "unit": "ms/iter",
            "extra": "iterations: 1049\ncpu: 0.1279189704480457 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2745059671813993,
            "unit": "ms/iter",
            "extra": "iterations: 518\ncpu: 0.25465444015443994 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 0.41115723606559246,
            "unit": "ms/iter",
            "extra": "iterations: 305\ncpu: 0.4084196721311472 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1386227148323609,
            "unit": "ms/iter",
            "extra": "iterations: 1045\ncpu: 0.12702296650717698 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2645693757336655,
            "unit": "ms/iter",
            "extra": "iterations: 511\ncpu: 0.2507221135029356 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 0.4098495210086139,
            "unit": "ms/iter",
            "extra": "iterations: 357\ncpu: 0.39375070028011183 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 2.9819244736915462,
            "unit": "ms/iter",
            "extra": "iterations: 38\ncpu: 2.870789473684214 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 81.81809400002749,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 79.35650000000005 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 184.56157200034795,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 178.06599999999983 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 6874.653428335912,
            "unit": "ns/iter",
            "extra": "iterations: 19791\ncpu: 6805.921883684501 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.031144071088663,
            "unit": "ns/iter",
            "extra": "iterations: 71658904\ncpu: 1.94338724466118 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 113958.09200002988,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 113509.60000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.7021262758305373,
            "unit": "ns/iter",
            "extra": "iterations: 83492366\ncpu: 1.6903222026310758 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3385.351376460711,
            "unit": "ns/iter",
            "extra": "iterations: 46278\ncpu: 3095.552962530791 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 44884.08442189819,
            "unit": "ns/iter",
            "extra": "iterations: 3139\ncpu: 43732.717425931856 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3736.1448882244763,
            "unit": "ns/iter",
            "extra": "iterations: 38333\ncpu: 3658.440508178332 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 59322.04393827488,
            "unit": "ns/iter",
            "extra": "iterations: 2458\ncpu: 57991.45646867376 ns\nthreads: 1"
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
        "date": 1647511857823,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.8961397882740736,
            "unit": "ns/iter",
            "extra": "iterations: 73847452\ncpu: 1.8577621337564902 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.1201523321321734,
            "unit": "ns/iter",
            "extra": "iterations: 78833268\ncpu: 1.9810671809267115 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 1.933967427188783,
            "unit": "ns/iter",
            "extra": "iterations: 76465126\ncpu: 1.7950405260562843 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.1827180374458117,
            "unit": "ns/iter",
            "extra": "iterations: 75683858\ncpu: 1.9029949556746946 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 60.62127056032245,
            "unit": "ns/iter",
            "extra": "iterations: 2321763\ncpu: 60.264979672774516 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 796.1008766076322,
            "unit": "ns/iter",
            "extra": "iterations: 179556\ncpu: 792.8055871148833 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2633.5607312412985,
            "unit": "ns/iter",
            "extra": "iterations: 53498\ncpu: 2623.668174511196 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 427.1108797849476,
            "unit": "ns/iter",
            "extra": "iterations: 348233\ncpu: 419.2279307245437 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2739.3606526157996,
            "unit": "ns/iter",
            "extra": "iterations: 52527\ncpu: 2631.6751385001994 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1544674863257369,
            "unit": "ms/iter",
            "extra": "iterations: 841\ncpu: 0.1585267538644471 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.38319300595247346,
            "unit": "ms/iter",
            "extra": "iterations: 504\ncpu: 0.324 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 0.5990798786115192,
            "unit": "ms/iter",
            "extra": "iterations: 173\ncpu: 0.40415606936416193 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1717108368955244,
            "unit": "ms/iter",
            "extra": "iterations: 889\ncpu: 0.1473678290213723 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.8082577088121471,
            "unit": "ms/iter",
            "extra": "iterations: 261\ncpu: 1.5256858237547888 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.464476206184869,
            "unit": "ms/iter",
            "extra": "iterations: 97\ncpu: 4.120515463917525 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1476739397589398,
            "unit": "ms/iter",
            "extra": "iterations: 913\ncpu: 0.14768455640744818 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.7577909247301964,
            "unit": "ms/iter",
            "extra": "iterations: 186\ncpu: 1.4390053763440884 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.4747791489361723,
            "unit": "ms/iter",
            "extra": "iterations: 94\ncpu: 4.083446808510641 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 19.01577872340664,
            "unit": "ms/iter",
            "extra": "iterations: 47\ncpu: 3.3764042553191422 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 65.01810249994833,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 60.36949999999997 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 178.02343950006616,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 142.1629999999998 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 8197.647017202642,
            "unit": "ns/iter",
            "extra": "iterations: 18372\ncpu: 7280.807750925321 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.336270313317343,
            "unit": "ns/iter",
            "extra": "iterations: 68812976\ncpu: 2.054161994098323 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 137477.83033193118,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 126582.93838862563 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.6369927646543614,
            "unit": "ns/iter",
            "extra": "iterations: 78168621\ncpu: 1.7434873259437444 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3287.091748811976,
            "unit": "ns/iter",
            "extra": "iterations: 45145\ncpu: 3195.879942407798 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 49842.3518257979,
            "unit": "ns/iter",
            "extra": "iterations: 2848\ncpu: 47413.2724719101 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4822.080779055467,
            "unit": "ns/iter",
            "extra": "iterations: 34452\ncpu: 4424.822942064328 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 60597.002166432154,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 59860.91854419417 ns\nthreads: 1"
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
        "date": 1647515796292,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.911020551992213,
            "unit": "ns/iter",
            "extra": "iterations: 75720699\ncpu: 1.8230153950374917 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.9424676984790543,
            "unit": "ns/iter",
            "extra": "iterations: 74329705\ncpu: 1.9060751014685176 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 1.845609215264257,
            "unit": "ns/iter",
            "extra": "iterations: 73571917\ncpu: 1.7941900304160896 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.1446065373981096,
            "unit": "ns/iter",
            "extra": "iterations: 70886076\ncpu: 1.9563221414597702 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 73.71172821598395,
            "unit": "ns/iter",
            "extra": "iterations: 2188355\ncpu: 65.60727121513646 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 941.7717264813286,
            "unit": "ns/iter",
            "extra": "iterations: 173590\ncpu: 783.2017973385565 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 3151.3483161226677,
            "unit": "ns/iter",
            "extra": "iterations: 51904\ncpu: 2641.723181257707 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 470.8079267922549,
            "unit": "ns/iter",
            "extra": "iterations: 328708\ncpu: 416.8988889835355 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2995.6613179863803,
            "unit": "ns/iter",
            "extra": "iterations: 52474\ncpu: 2612.874947593096 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.17162146118721985,
            "unit": "ms/iter",
            "extra": "iterations: 876\ncpu: 0.15765068493150683 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.9676259243685056,
            "unit": "ms/iter",
            "extra": "iterations: 119\ncpu: 0.32068907563025184 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 1.5185148151274672,
            "unit": "ms/iter",
            "extra": "iterations: 119\ncpu: 0.49590756302521044 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.159173234883806,
            "unit": "ms/iter",
            "extra": "iterations: 860\ncpu: 0.14944534883720936 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6258102372886103,
            "unit": "ms/iter",
            "extra": "iterations: 236\ncpu: 1.1100847457627119 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.0677578067231992,
            "unit": "ms/iter",
            "extra": "iterations: 119\ncpu: 2.1646638655462187 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.15783906315787746,
            "unit": "ms/iter",
            "extra": "iterations: 855\ncpu: 0.15081754385964938 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.6533641428571205,
            "unit": "ms/iter",
            "extra": "iterations: 224\ncpu: 1.144232142857143 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 0.9754710582517838,
            "unit": "ms/iter",
            "extra": "iterations: 103\ncpu: 1.8970970873786424 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 981.7579940001906,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 8.569999999999744 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 211.01166600010401,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 64.03900000000019 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 182.35901899993223,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 141.702 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 68969.3579526374,
            "unit": "ns/iter",
            "extra": "iterations: 17818\ncpu: 8854.585250869906 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 25.2553906346468,
            "unit": "ns/iter",
            "extra": "iterations: 69423783\ncpu: 2.2361357058286493 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 1795893.2558574332,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 132493.908153702 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 17.07479958044219,
            "unit": "ns/iter",
            "extra": "iterations: 39908780\ncpu: 2.440239967245303 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 19487.728042220893,
            "unit": "ns/iter",
            "extra": "iterations: 40168\ncpu: 3184.1017725552674 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 64494.14773496454,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 45696.41649763354 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 6431.192531651562,
            "unit": "ns/iter",
            "extra": "iterations: 34519\ncpu: 3855.934412932014 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 68884.83801020391,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 61463.43537414951 ns\nthreads: 1"
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
        "date": 1647518993578,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.9740688441991863,
            "unit": "ns/iter",
            "extra": "iterations: 74766355\ncpu: 1.8839356285323794 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.354146697704359,
            "unit": "ns/iter",
            "extra": "iterations: 70380052\ncpu: 2.0289555909961527 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 2.1499829738806624,
            "unit": "ns/iter",
            "extra": "iterations: 71783828\ncpu: 1.9441147663509948 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.395173152751803,
            "unit": "ns/iter",
            "extra": "iterations: 71592943\ncpu: 2.0112038137613646 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 71.75047322536788,
            "unit": "ns/iter",
            "extra": "iterations: 2266362\ncpu: 62.27734139559347 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 955.1979894682552,
            "unit": "ns/iter",
            "extra": "iterations: 156675\ncpu: 880.7531514281152 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 3312.6276940420985,
            "unit": "ns/iter",
            "extra": "iterations: 49693\ncpu: 2820.2563741372032 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 535.5578534336339,
            "unit": "ns/iter",
            "extra": "iterations: 293846\ncpu: 450.2222252472386 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 3221.239720821985,
            "unit": "ns/iter",
            "extra": "iterations: 50004\ncpu: 2775.2779777617784 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.19581408528173355,
            "unit": "ms/iter",
            "extra": "iterations: 727\ncpu: 0.16344566712517195 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.49901037650615543,
            "unit": "ms/iter",
            "extra": "iterations: 332\ncpu: 0.3256897590361445 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 1.4742395380117639,
            "unit": "ms/iter",
            "extra": "iterations: 171\ncpu: 0.5483742690058477 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1476656874249833,
            "unit": "ms/iter",
            "extra": "iterations: 835\ncpu: 0.14627904191616772 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.5529404631151099,
            "unit": "ms/iter",
            "extra": "iterations: 244\ncpu: 0.9436311475409834 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.1404126698563193,
            "unit": "ms/iter",
            "extra": "iterations: 209\ncpu: 2.6783779904306235 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.16394599014235908,
            "unit": "ms/iter",
            "extra": "iterations: 913\ncpu: 0.14537239868565144 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.6567962799999805,
            "unit": "ms/iter",
            "extra": "iterations: 200\ncpu: 1.14448 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 0.8398434788736728,
            "unit": "ms/iter",
            "extra": "iterations: 142\ncpu: 1.4915915492957756 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 4.093885928568852,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 3.2746071428571315 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 6.88090661904945,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 12.227857142857156 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 12.74270299999595,
            "unit": "ms/iter",
            "extra": "iterations: 12\ncpu: 26.994 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 6919.548391919525,
            "unit": "ns/iter",
            "extra": "iterations: 20086\ncpu: 6857.0646221248635 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.584065254595597,
            "unit": "ns/iter",
            "extra": "iterations: 68476400\ncpu: 2.0673691958105276 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 140853.55857388975,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 119522.0713073005 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.088383488146177,
            "unit": "ns/iter",
            "extra": "iterations: 82044069\ncpu: 1.7458300367818194 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 4390.439745087247,
            "unit": "ns/iter",
            "extra": "iterations: 41897\ncpu: 3229.873260615317 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 53502.20792412388,
            "unit": "ns/iter",
            "extra": "iterations: 2953\ncpu: 45242.465289536056 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4782.0416622499,
            "unit": "ns/iter",
            "extra": "iterations: 37756\ncpu: 3813.433626443479 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 71435.56668146176,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 60253.876827647335 ns\nthreads: 1"
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
        "date": 1647524010475,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.3764737378878653,
            "unit": "ns/iter",
            "extra": "iterations: 72430027\ncpu: 1.9578896470658498 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.0804886877819633,
            "unit": "ns/iter",
            "extra": "iterations: 70305830\ncpu: 1.9977290645740184 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 2.2722073049841063,
            "unit": "ns/iter",
            "extra": "iterations: 77151989\ncpu: 1.8955830160127174 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.073690626238584,
            "unit": "ns/iter",
            "extra": "iterations: 71134597\ncpu: 1.9117701615713083 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 63.573943498151046,
            "unit": "ns/iter",
            "extra": "iterations: 2321340\ncpu: 60.14198695580999 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 1710.5226421172104,
            "unit": "ns/iter",
            "extra": "iterations: 176949\ncpu: 966.1088788294929 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 5816.918553722838,
            "unit": "ns/iter",
            "extra": "iterations: 34931\ncpu: 3655.406372563053 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 7213.896372250167,
            "unit": "ns/iter",
            "extra": "iterations: 224795\ncpu: 1550.933072354812 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 7930.87983695175,
            "unit": "ns/iter",
            "extra": "iterations: 52745\ncpu: 2678.813157645275 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.15338058938239868,
            "unit": "ms/iter",
            "extra": "iterations: 923\ncpu: 0.15394691224268686 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 2.0813278211379638,
            "unit": "ms/iter",
            "extra": "iterations: 123\ncpu: 0.5965284552845526 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 3.2677561016961114,
            "unit": "ms/iter",
            "extra": "iterations: 118\ncpu: 1.1409830508474574 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1466015817203531,
            "unit": "ms/iter",
            "extra": "iterations: 930\ncpu: 0.14546344086021515 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.546708095237776,
            "unit": "ms/iter",
            "extra": "iterations: 231\ncpu: 0.9244805194805198 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.0257631900003616,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 1.8247000000000013 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.26156389138579356,
            "unit": "ms/iter",
            "extra": "iterations: 534\ncpu: 0.19499438202247207 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.6109333672567415,
            "unit": "ms/iter",
            "extra": "iterations: 226\ncpu: 1.061765486725663 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.1064602318843966,
            "unit": "ms/iter",
            "extra": "iterations: 138\ncpu: 2.497746376811593 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 228.98395400011395,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4.5840000000001435 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 737.1519519999765,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 57.85700000000027 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 189.57991999991464,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 126.82200000000022 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 7056.355260497548,
            "unit": "ns/iter",
            "extra": "iterations: 19808\ncpu: 6908.925686591278 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.1498350464116163,
            "unit": "ns/iter",
            "extra": "iterations: 71058776\ncpu: 1.9783481775706357 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 124341.1224322886,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 115910.43549712408 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.0526638576875995,
            "unit": "ns/iter",
            "extra": "iterations: 81981613\ncpu: 1.6966609329826186 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3272.8434342325672,
            "unit": "ns/iter",
            "extra": "iterations: 45029\ncpu: 3082.8355060072417 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 49233.83853845389,
            "unit": "ns/iter",
            "extra": "iterations: 3202\ncpu: 44305.74640849472 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 5222.171803986327,
            "unit": "ns/iter",
            "extra": "iterations: 36303\ncpu: 3857.5599812687683 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 73724.42247388451,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 61043.118466898966 ns\nthreads: 1"
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
        "date": 1647526570199,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.4414044030559263,
            "unit": "ns/iter",
            "extra": "iterations: 76691317\ncpu: 1.8747885109340343 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.6796406654668004,
            "unit": "ns/iter",
            "extra": "iterations: 74266617\ncpu: 1.9249025440326704 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 4.557598526719331,
            "unit": "ns/iter",
            "extra": "iterations: 79109454\ncpu: 1.7773223412716257 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.6531806715785513,
            "unit": "ns/iter",
            "extra": "iterations: 74610957\ncpu: 1.8832354609792756 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 61.75504405984017,
            "unit": "ns/iter",
            "extra": "iterations: 2181229\ncpu: 61.17468638093479 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 804.6658009191292,
            "unit": "ns/iter",
            "extra": "iterations: 175186\ncpu: 803.5973194205017 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2655.8104460270356,
            "unit": "ns/iter",
            "extra": "iterations: 53494\ncpu: 2606.8157176505774 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 420.25306717894205,
            "unit": "ns/iter",
            "extra": "iterations: 361244\ncpu: 418.0055585698312 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2605.24288039692,
            "unit": "ns/iter",
            "extra": "iterations: 54673\ncpu: 2601.851005066487 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.14939997002403774,
            "unit": "ms/iter",
            "extra": "iterations: 834\ncpu: 0.15260431654676257 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.804863152090907,
            "unit": "ms/iter",
            "extra": "iterations: 263\ncpu: 0.35581368821292786 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 1.7093104300010964,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.5685999999999997 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.6891711428582082,
            "unit": "ms/iter",
            "extra": "iterations: 364\ncpu: 0.1839175824175823 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 1.030719553958949,
            "unit": "ms/iter",
            "extra": "iterations: 139\ncpu: 0.35536690647481967 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 2.33422782353313,
            "unit": "ms/iter",
            "extra": "iterations: 68\ncpu: 0.591867647058824 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.5564732551925443,
            "unit": "ms/iter",
            "extra": "iterations: 337\ncpu: 0.14927299703264077 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.3160170041153781,
            "unit": "ms/iter",
            "extra": "iterations: 486\ncpu: 0.2621913580246914 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 0.4848444489048931,
            "unit": "ms/iter",
            "extra": "iterations: 274\ncpu: 0.39804379562043773 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 155.5455460002122,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4.382000000000108 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 9874.348619999637,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 85.89899999999994 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 854.8074180002914,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 116.93299999999995 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 8107.278079507267,
            "unit": "ns/iter",
            "extra": "iterations: 18412\ncpu: 7761.677167064956 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.3519146121662917,
            "unit": "ns/iter",
            "extra": "iterations: 65359477\ncpu: 2.055998703906397 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 120725.74215432566,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 115603.05343511458 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.8529815762599686,
            "unit": "ns/iter",
            "extra": "iterations: 77851304\ncpu: 1.696940105203632 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3424.93640987049,
            "unit": "ns/iter",
            "extra": "iterations: 44834\ncpu: 3122.139447740555 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 63881.810327701874,
            "unit": "ns/iter",
            "extra": "iterations: 3021\ncpu: 47016.55081098977 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 5300.820381638355,
            "unit": "ns/iter",
            "extra": "iterations: 36160\ncpu: 4015.320796460172 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 90143.17353580293,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 59823.42733188713 ns\nthreads: 1"
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
        "date": 1647534222468,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 4.968800468835706,
            "unit": "ns/iter",
            "extra": "iterations: 71864894\ncpu: 2.07398900497926 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.5585265326501383,
            "unit": "ns/iter",
            "extra": "iterations: 64784822\ncpu: 1.9018806596396918 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 2.334208795567511,
            "unit": "ns/iter",
            "extra": "iterations: 82953131\ncpu: 1.7393315750794272 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 3.507471391509972,
            "unit": "ns/iter",
            "extra": "iterations: 71446798\ncpu: 1.9713969546962766 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 111.4274827426109,
            "unit": "ns/iter",
            "extra": "iterations: 2352902\ncpu: 59.05770831084336 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 14562.69266000163,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 902.2199999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 52641.49790000374,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 2942.6000000000063 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 7482.944840003255,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 431.38000000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 29292.73801363048,
            "unit": "ns/iter",
            "extra": "iterations: 47262\ncpu: 2837.09957259532 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.14228131763485147,
            "unit": "ms/iter",
            "extra": "iterations: 998\ncpu: 0.14719639278557112 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 4.770429608707554,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 0.4204782608695646 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 12.444270214278472,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 0.6156428571428563 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1402660183219342,
            "unit": "ms/iter",
            "extra": "iterations: 1037\ncpu: 0.1422468659594985 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.7030810000004242,
            "unit": "ms/iter",
            "extra": "iterations: 199\ncpu: 1.3390100502512563 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.2639421559620256,
            "unit": "ms/iter",
            "extra": "iterations: 109\ncpu: 3.3874036697247702 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.13568175071357855,
            "unit": "ms/iter",
            "extra": "iterations: 1051\ncpu: 0.13969647954329198 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.5801225491801293,
            "unit": "ms/iter",
            "extra": "iterations: 244\ncpu: 0.9637622950819672 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.0673907999989751,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 2.5309700000000013 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 3.940843558137753,
            "unit": "ms/iter",
            "extra": "iterations: 43\ncpu: 2.9895348837209337 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 8.203338176452448,
            "unit": "ms/iter",
            "extra": "iterations: 17\ncpu: 12.801411764705897 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 105.38659500002723,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 138.49 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 7206.779153560875,
            "unit": "ns/iter",
            "extra": "iterations: 19706\ncpu: 6888.206637572313 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.091460637314197,
            "unit": "ns/iter",
            "extra": "iterations: 72806698\ncpu: 1.9282154507267995 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 112919.74818994837,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 112521.31938857603 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6716806472726817,
            "unit": "ns/iter",
            "extra": "iterations: 85013359\ncpu: 1.6536106989961414 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 4691.351299878617,
            "unit": "ns/iter",
            "extra": "iterations: 45158\ncpu: 3133.730457504761 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 52077.58134132901,
            "unit": "ns/iter",
            "extra": "iterations: 3012\ncpu: 45171.64674634797 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3984.2153280886973,
            "unit": "ns/iter",
            "extra": "iterations: 38374\ncpu: 3600.2241100745305 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 58747.46557237756,
            "unit": "ns/iter",
            "extra": "iterations: 2498\ncpu: 56035.22818254599 ns\nthreads: 1"
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
        "date": 1647538127255,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.1012492692386657,
            "unit": "ns/iter",
            "extra": "iterations: 68924774\ncpu: 2.028501391966842 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.1973642743989386,
            "unit": "ns/iter",
            "extra": "iterations: 68533386\ncpu: 2.0413846180020934 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 1.9206433164235417,
            "unit": "ns/iter",
            "extra": "iterations: 81675515\ncpu: 1.7652658817027356 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 3.286933047796506,
            "unit": "ns/iter",
            "extra": "iterations: 68526676\ncpu: 2.027298099210298 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 66.93709026652932,
            "unit": "ns/iter",
            "extra": "iterations: 2235600\ncpu: 62.97996063696545 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 994.7154775318421,
            "unit": "ns/iter",
            "extra": "iterations: 171287\ncpu: 790.0949867765795 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 3055.592428257778,
            "unit": "ns/iter",
            "extra": "iterations: 52062\ncpu: 2657.927086934808 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 419.57428441488224,
            "unit": "ns/iter",
            "extra": "iterations: 329800\ncpu: 414.83323226197706 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2866.7386286088727,
            "unit": "ns/iter",
            "extra": "iterations: 52764\ncpu: 2647.828064589493 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.15012871380468087,
            "unit": "ms/iter",
            "extra": "iterations: 891\ncpu: 0.15178563411896748 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 1.862735979381524,
            "unit": "ms/iter",
            "extra": "iterations: 97\ncpu: 0.32242268041237054 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 2.2767815660373807,
            "unit": "ms/iter",
            "extra": "iterations: 53\ncpu: 0.5165094339622649 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14972836475867088,
            "unit": "ms/iter",
            "extra": "iterations: 891\ncpu: 0.15171604938271613 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.5934636266667641,
            "unit": "ms/iter",
            "extra": "iterations: 225\ncpu: 1.0408533333333336 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.2407723084116042,
            "unit": "ms/iter",
            "extra": "iterations: 107\ncpu: 3.305775700934581 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14757632157679043,
            "unit": "ms/iter",
            "extra": "iterations: 964\ncpu: 0.14829668049792522 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.7158476141307307,
            "unit": "ms/iter",
            "extra": "iterations: 184\ncpu: 1.3218423913043482 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.211685545455442,
            "unit": "ms/iter",
            "extra": "iterations: 110\ncpu: 3.111745454545455 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 358.9418310000383,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 5.1009999999998 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 777.6329649998388,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 74.91800000000026 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 148.509550999961,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 128.68999999999974 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 6812.551128621621,
            "unit": "ns/iter",
            "extra": "iterations: 20556\ncpu: 6780.502043199066 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.0015815604103167,
            "unit": "ns/iter",
            "extra": "iterations: 71772788\ncpu: 1.9609939076074352 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 114297.35294125277,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 113497.54901960782 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.7188031621038917,
            "unit": "ns/iter",
            "extra": "iterations: 82982633\ncpu: 1.6815687205297527 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3226.977634876576,
            "unit": "ns/iter",
            "extra": "iterations: 45875\ncpu: 3075.1607629427795 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 43789.633167375534,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 43208.46297448666 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3761.5329583885564,
            "unit": "ns/iter",
            "extra": "iterations: 37517\ncpu: 3681.424420929182 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 60378.674816696934,
            "unit": "ns/iter",
            "extra": "iterations: 2454\ncpu: 57090.05704971474 ns\nthreads: 1"
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
        "date": 1647540632962,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.4473358952257067,
            "unit": "ns/iter",
            "extra": "iterations: 68600549\ncpu: 2.033146994202627 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 4.184162035379129,
            "unit": "ns/iter",
            "extra": "iterations: 67411402\ncpu: 2.117164096364588 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 1.7574343802594519,
            "unit": "ns/iter",
            "extra": "iterations: 73968405\ncpu: 1.725020297517568 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.7268690652377794,
            "unit": "ns/iter",
            "extra": "iterations: 67987568\ncpu: 2.0930885481886925 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 102.32753250144773,
            "unit": "ns/iter",
            "extra": "iterations: 2281282\ncpu: 62.93347337155161 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 1261.5990177813783,
            "unit": "ns/iter",
            "extra": "iterations: 154548\ncpu: 863.2851929497629 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 4042.229872201432,
            "unit": "ns/iter",
            "extra": "iterations: 48279\ncpu: 2862.3003790467906 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 625.2013620952167,
            "unit": "ns/iter",
            "extra": "iterations: 325528\ncpu: 452.532501044457 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 3180.187128229771,
            "unit": "ns/iter",
            "extra": "iterations: 51275\ncpu: 2704.378352023403 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1735765550662341,
            "unit": "ms/iter",
            "extra": "iterations: 908\ncpu: 0.1858909691629956 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.4800934125874541,
            "unit": "ms/iter",
            "extra": "iterations: 286\ncpu: 0.3254160839160838 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 0.6801598241207414,
            "unit": "ms/iter",
            "extra": "iterations: 199\ncpu: 0.4291105527638191 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14604183350895814,
            "unit": "ms/iter",
            "extra": "iterations: 949\ncpu: 0.14632033719704943 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.7112756923083324,
            "unit": "ms/iter",
            "extra": "iterations: 195\ncpu: 1.3237487179487184 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.2484610294124792,
            "unit": "ms/iter",
            "extra": "iterations: 102\ncpu: 3.3031764705882374 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.15437633398808434,
            "unit": "ms/iter",
            "extra": "iterations: 1018\ncpu: 0.14986836935166992 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.7351871907895944,
            "unit": "ms/iter",
            "extra": "iterations: 152\ncpu: 1.3532631578947376 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.2720083418804653,
            "unit": "ms/iter",
            "extra": "iterations: 117\ncpu: 3.3532051282051287 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 103.36694550005632,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 5.241999999999969 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 1056.5528189999895,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 78.67300000000021 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 610.1494150000235,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 153.08299999999963 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 85469.39909999764,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 7861.0999999999985 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 24.85241396092998,
            "unit": "ns/iter",
            "extra": "iterations: 66275327\ncpu: 2.1127621143234787 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 1635892.18193234,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 138765.3701380176 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.691547406384572,
            "unit": "ns/iter",
            "extra": "iterations: 81056044\ncpu: 1.6890165525472707 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3094.772803687316,
            "unit": "ns/iter",
            "extra": "iterations: 46396\ncpu: 3087.5075437537707 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 43894.95313969071,
            "unit": "ns/iter",
            "extra": "iterations: 3201\ncpu: 43706.65417057172 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3929.982123142337,
            "unit": "ns/iter",
            "extra": "iterations: 38038\ncpu: 3740.7329512592646 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 58788.897502112886,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 58224.375538329026 ns\nthreads: 1"
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
        "date": 1647544670788,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.3638097642208313,
            "unit": "ns/iter",
            "extra": "iterations: 70457977\ncpu: 2.064748467018859 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.1635812782878587,
            "unit": "ns/iter",
            "extra": "iterations: 70040075\ncpu: 2.002296542372348 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 2.4924839524596716,
            "unit": "ns/iter",
            "extra": "iterations: 79207921\ncpu: 1.7660986203639903 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.1767173258992822,
            "unit": "ns/iter",
            "extra": "iterations: 68779170\ncpu: 2.034700331510252 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 84.72623112724887,
            "unit": "ns/iter",
            "extra": "iterations: 2372399\ncpu: 61.06561333064126 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 2577.235090884967,
            "unit": "ns/iter",
            "extra": "iterations: 161797\ncpu: 1015.896462851598 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 8181.367768802798,
            "unit": "ns/iter",
            "extra": "iterations: 40588\ncpu: 3212.7476101310713 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 539.1373900018839,
            "unit": "ns/iter",
            "extra": "iterations: 337732\ncpu: 426.72296377009013 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 7770.867468775288,
            "unit": "ns/iter",
            "extra": "iterations: 43635\ncpu: 3284.4963905122027 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1647447147088934,
            "unit": "ms/iter",
            "extra": "iterations: 1013\ncpu: 0.173675222112537 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 1.1193572727269545,
            "unit": "ms/iter",
            "extra": "iterations: 231\ncpu: 0.5496839826839827 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 1.8674273232333847,
            "unit": "ms/iter",
            "extra": "iterations: 99\ncpu: 0.9593535353535353 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14865171104240996,
            "unit": "ms/iter",
            "extra": "iterations: 969\ncpu: 0.1484468524251806 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.7028227536938816,
            "unit": "ms/iter",
            "extra": "iterations: 203\ncpu: 1.3256502463054192 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.4940485638304535,
            "unit": "ms/iter",
            "extra": "iterations: 94\ncpu: 4.059712765957447 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14468160589521728,
            "unit": "ms/iter",
            "extra": "iterations: 916\ncpu: 0.14556659388646298 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.743941474490143,
            "unit": "ms/iter",
            "extra": "iterations: 196\ncpu: 1.4090663265306118 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.3365487113389332,
            "unit": "ms/iter",
            "extra": "iterations: 97\ncpu: 3.365618556701029 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 253.9282060001824,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3.7209999999996413 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 58.96332400004667,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 53.04500000000023 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 710.8966629998577,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 144.48899999999963 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 7224.466264621874,
            "unit": "ns/iter",
            "extra": "iterations: 19401\ncpu: 6990.619040255657 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.458124552033737,
            "unit": "ns/iter",
            "extra": "iterations: 64596503\ncpu: 1.9866090893496204 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 139367.75652165007,
            "unit": "ns/iter",
            "extra": "iterations: 1035\ncpu: 116920.77294685983 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.8081571158492418,
            "unit": "ns/iter",
            "extra": "iterations: 82958047\ncpu: 1.8445588527415557 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 6423.26294705958,
            "unit": "ns/iter",
            "extra": "iterations: 38194\ncpu: 3672.0427292244854 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 107800.61445307964,
            "unit": "ns/iter",
            "extra": "iterations: 2560\ncpu: 51836.718750000044 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 10340.997571321846,
            "unit": "ns/iter",
            "extra": "iterations: 30881\ncpu: 4484.7317120559555 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 113332.74879452906,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 64080.52073288332 ns\nthreads: 1"
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
        "date": 1647547935524,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 6.82360508568703,
            "unit": "ns/iter",
            "extra": "iterations: 70028011\ncpu: 2.0143225258818216 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 7.845746975728867,
            "unit": "ns/iter",
            "extra": "iterations: 67001675\ncpu: 2.0584560012865354 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 3.314490286206887,
            "unit": "ns/iter",
            "extra": "iterations: 77386546\ncpu: 1.7881532017206199 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 33.1441252083267,
            "unit": "ns/iter",
            "extra": "iterations: 72343944\ncpu: 2.142971359150671 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 120.5224142459574,
            "unit": "ns/iter",
            "extra": "iterations: 2169870\ncpu: 65.59194790471318 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 917.9800746974759,
            "unit": "ns/iter",
            "extra": "iterations: 163862\ncpu: 841.4214399921883 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 3002.3651373693765,
            "unit": "ns/iter",
            "extra": "iterations: 52268\ncpu: 2688.738807683476 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 470.6614077747957,
            "unit": "ns/iter",
            "extra": "iterations: 306782\ncpu: 453.6283093532214 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 3110.6111231752443,
            "unit": "ns/iter",
            "extra": "iterations: 50651\ncpu: 2810.605911038282 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.15733868872796772,
            "unit": "ms/iter",
            "extra": "iterations: 967\ncpu: 0.15973216132368148 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 1.331703439998364,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.4303800000000002 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 1.6515472533319553,
            "unit": "ms/iter",
            "extra": "iterations: 75\ncpu: 0.5766133333333331 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.18118386956521385,
            "unit": "ms/iter",
            "extra": "iterations: 874\ncpu: 0.16240617848970249 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.5507568958336151,
            "unit": "ms/iter",
            "extra": "iterations: 240\ncpu: 0.8834 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 0.9482912615374937,
            "unit": "ms/iter",
            "extra": "iterations: 130\ncpu: 1.740884615384614 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.15661820148467503,
            "unit": "ms/iter",
            "extra": "iterations: 943\ncpu: 0.1448981972428417 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.5951148495581287,
            "unit": "ms/iter",
            "extra": "iterations: 226\ncpu: 0.9961371681415924 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.0281466710526537,
            "unit": "ms/iter",
            "extra": "iterations: 152\ncpu: 1.154256578947369 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 1342.3133519997918,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 7.049000000000083 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 87.57415849993322,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 57.92049999999993 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 190.60525899999448,
            "unit": "ms/iter",
            "extra": "iterations: 2\ncpu: 137.14349999999988 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 9418.871366698102,
            "unit": "ns/iter",
            "extra": "iterations: 17546\ncpu: 7777.214179870056 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.174751066772553,
            "unit": "ns/iter",
            "extra": "iterations: 67101227\ncpu: 2.082257005523908 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 172159.35813562496,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 119446.4431725266 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.473412478636383,
            "unit": "ns/iter",
            "extra": "iterations: 81675515\ncpu: 1.7600623638553115 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 10340.312137152558,
            "unit": "ns/iter",
            "extra": "iterations: 43923\ncpu: 3287.4803633631577 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 74576.47111854285,
            "unit": "ns/iter",
            "extra": "iterations: 2995\ncpu: 45403.33889816364 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3982.113245705466,
            "unit": "ns/iter",
            "extra": "iterations: 37582\ncpu: 3708.3178117183784 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 64386.80100546911,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 58343.946376204454 ns\nthreads: 1"
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
        "date": 1647551045063,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.0716319869699795,
            "unit": "ns/iter",
            "extra": "iterations: 68583746\ncpu: 2.031093489702356 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.0648259861055793,
            "unit": "ns/iter",
            "extra": "iterations: 68731897\ncpu: 2.036085225466714 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 1.7593545618527144,
            "unit": "ns/iter",
            "extra": "iterations: 80128205\ncpu: 1.7383267227813235 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 3.064480594333844,
            "unit": "ns/iter",
            "extra": "iterations: 69351563\ncpu: 2.034993789541556 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 62.22314696486264,
            "unit": "ns/iter",
            "extra": "iterations: 2249755\ncpu: 61.95385719778375 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 804.076539500647,
            "unit": "ns/iter",
            "extra": "iterations: 179685\ncpu: 788.5354926677239 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2664.39360655962,
            "unit": "ns/iter",
            "extra": "iterations: 54900\ncpu: 2562.3679417122044 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 546.2318082330232,
            "unit": "ns/iter",
            "extra": "iterations: 354556\ncpu: 411.10290052911273 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 2544.7597162552584,
            "unit": "ns/iter",
            "extra": "iterations: 53570\ncpu: 2505.6561508306872 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.15299073267336702,
            "unit": "ms/iter",
            "extra": "iterations: 1010\ncpu: 0.15001188118811878 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2821777826084719,
            "unit": "ms/iter",
            "extra": "iterations: 506\ncpu: 0.3044268774703558 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 1.5110444400003569,
            "unit": "ms/iter",
            "extra": "iterations: 75\ncpu: 0.4111733333333338 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14188016442325044,
            "unit": "ms/iter",
            "extra": "iterations: 1040\ncpu: 0.1334201923076923 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6521154266657605,
            "unit": "ms/iter",
            "extra": "iterations: 225\ncpu: 1.2011599999999998 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.2375834351848458,
            "unit": "ms/iter",
            "extra": "iterations: 108\ncpu: 3.3132222222222225 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.13021333720935005,
            "unit": "ms/iter",
            "extra": "iterations: 1032\ncpu: 0.1279767441860467 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.6626276493059259,
            "unit": "ms/iter",
            "extra": "iterations: 576\ncpu: 1.1962743055555558 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 1.1011118510641158,
            "unit": "ms/iter",
            "extra": "iterations: 141\ncpu: 2.6636524822695034 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.265526095246189,
            "unit": "ms/iter",
            "extra": "iterations: 42\ncpu: 2.981738095238088 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 55.039121136360336,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 51.98759090909089 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 143.38072600003215,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 141.6359999999992 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 7228.084977003259,
            "unit": "ns/iter",
            "extra": "iterations: 20229\ncpu: 7073.409461663948 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.9459892854440748,
            "unit": "ns/iter",
            "extra": "iterations: 72595281\ncpu: 1.9390792081926096 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 114915.31936749215,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 112599.20948616596 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.457323139082057,
            "unit": "ns/iter",
            "extra": "iterations: 85152971\ncpu: 1.6742340088169088 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3222.6130399225735,
            "unit": "ns/iter",
            "extra": "iterations: 46488\ncpu: 3105.1884357253457 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 46063.43406085339,
            "unit": "ns/iter",
            "extra": "iterations: 3253\ncpu: 43074.39286812178 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4015.4104404945815,
            "unit": "ns/iter",
            "extra": "iterations: 39002\ncpu: 3717.578585713557 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 72089.65898049828,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 56869.33656957931 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "0b1a74c7abd3375ef459b28f6b3536a42cf9e71a",
          "message": "Enable line-length lint for markdown docs (#1268)",
          "timestamp": "2022-03-16T07:17:12-07:00",
          "tree_id": "c63c50aa237422d2259c610614e4461ba2d6f3ef",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/0b1a74c7abd3375ef459b28f6b3536a42cf9e71a"
        },
        "date": 1647555060284,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4433.670350437877,
            "unit": "ns/iter",
            "extra": "iterations: 33605\ncpu: 4428.715964886178 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.6661364974368618,
            "unit": "ns/iter",
            "extra": "iterations: 52379919\ncpu: 2.6634596361250584 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 87621.05187373376,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 87465.98258706469 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.643640996288692,
            "unit": "ns/iter",
            "extra": "iterations: 50433730\ncpu: 2.6390393889169017 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 770.5650095392679,
            "unit": "ns/iter",
            "extra": "iterations: 185362\ncpu: 768.6775067165867 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 19540.15226848168,
            "unit": "ns/iter",
            "extra": "iterations: 7290\ncpu: 19483.347050754455 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3242.9947470659613,
            "unit": "ns/iter",
            "extra": "iterations: 40174\ncpu: 3239.2019714243033 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 55417.03397198867,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 55187.693529178236 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 65.21164231573046,
            "unit": "ns/iter",
            "extra": "iterations: 2168092\ncpu: 65.20590454648604 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 367.43376486521515,
            "unit": "ns/iter",
            "extra": "iterations: 381678\ncpu: 367.43066144760775 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1129.5598696450165,
            "unit": "ns/iter",
            "extra": "iterations: 110930\ncpu: 1129.4446948526092 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 250.44613995160617,
            "unit": "ns/iter",
            "extra": "iterations: 571944\ncpu: 250.3717147133285 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1082.9347743150856,
            "unit": "ns/iter",
            "extra": "iterations: 132301\ncpu: 1080.2858632965736 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.8468358930584077,
            "unit": "ns/iter",
            "extra": "iterations: 50498492\ncpu: 2.8394234029800343 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.796409338629905,
            "unit": "ns/iter",
            "extra": "iterations: 50776150\ncpu: 2.781831627644081 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.589436726852101,
            "unit": "ns/iter",
            "extra": "iterations: 11810858\ncpu: 10.574439215169633 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.2409735102627693,
            "unit": "ns/iter",
            "extra": "iterations: 63044320\ncpu: 2.236423519200462 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1512904631553523,
            "unit": "ms/iter",
            "extra": "iterations: 842\ncpu: 0.14810273159144896 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.31318965258899034,
            "unit": "ms/iter",
            "extra": "iterations: 444\ncpu: 0.2960612612612613 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.15099771665209713,
            "unit": "ms/iter",
            "extra": "iterations: 887\ncpu: 0.1485891770011274 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.30126785620664936,
            "unit": "ms/iter",
            "extra": "iterations: 468\ncpu: 0.2934891025641026 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.31092666395282126,
            "unit": "ms/iter",
            "extra": "iterations: 926\ncpu: 0.16035194384449253 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.9328760419573102,
            "unit": "ms/iter",
            "extra": "iterations: 175\ncpu: 0.4059348571428568 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 22.545933723449707,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 8.29195000000001 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 33.834218978881836,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 26.227 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tom Tan",
            "username": "ThomsonTan",
            "email": "Tom.Tan@microsoft.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0b1a74c7abd3375ef459b28f6b3536a42cf9e71a",
          "message": "Enable line-length lint for markdown docs (#1268)",
          "timestamp": "2022-03-16T14:17:12Z",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/0b1a74c7abd3375ef459b28f6b3536a42cf9e71a"
        },
        "date": 1647555079108,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.9436010786845037,
            "unit": "ns/iter",
            "extra": "iterations: 72516316\ncpu: 1.912135194512639 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.842327514609751,
            "unit": "ns/iter",
            "extra": "iterations: 67849181\ncpu: 2.2259369645154594 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 2.719609001694528,
            "unit": "ns/iter",
            "extra": "iterations: 71138211\ncpu: 1.8703731529037184 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.9592719650917034,
            "unit": "ns/iter",
            "extra": "iterations: 60516988\ncpu: 1.852967302338314 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 61.91548214628234,
            "unit": "ns/iter",
            "extra": "iterations: 2346238\ncpu: 60.49301051299997 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 994.072000531988,
            "unit": "ns/iter",
            "extra": "iterations: 165346\ncpu: 794.0863401594237 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 4584.139728460513,
            "unit": "ns/iter",
            "extra": "iterations: 43971\ncpu: 3029.928816720112 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 705.1423915066753,
            "unit": "ns/iter",
            "extra": "iterations: 311402\ncpu: 466.89167057372805 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 7940.455779793886,
            "unit": "ns/iter",
            "extra": "iterations: 45884\ncpu: 3237.991456716937 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1655923075144255,
            "unit": "ms/iter",
            "extra": "iterations: 865\ncpu: 0.15307514450867052 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.5555163394827212,
            "unit": "ms/iter",
            "extra": "iterations: 271\ncpu: 0.3962509225092252 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/3/process_time/real_time",
            "value": 0.9726439115047067,
            "unit": "ms/iter",
            "extra": "iterations: 113\ncpu: 0.49972566371681454 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.15784320298177107,
            "unit": "ms/iter",
            "extra": "iterations: 872\ncpu: 0.1424942660550459 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6971874422104054,
            "unit": "ms/iter",
            "extra": "iterations: 199\ncpu: 1.2773015075376888 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/3/process_time/real_time",
            "value": 1.3686042086963268,
            "unit": "ms/iter",
            "extra": "iterations: 115\ncpu: 3.386000000000002 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.20102333694338634,
            "unit": "ms/iter",
            "extra": "iterations: 831\ncpu: 0.1470348977135982 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.5716343663791655,
            "unit": "ms/iter",
            "extra": "iterations: 232\ncpu: 0.9194698275862068 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/3/process_time/real_time",
            "value": 0.9505018601392332,
            "unit": "ms/iter",
            "extra": "iterations: 143\ncpu: 1.625349650349651 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 518.9590570000746,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 5.033000000000065 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 229.90397800003848,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 58.76700000000001 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/3/process_time/real_time",
            "value": 965.8982960002049,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 154.90899999999996 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 37703.53652262642,
            "unit": "ns/iter",
            "extra": "iterations: 19440\ncpu: 7232.510288065843 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 7.465313594155274,
            "unit": "ns/iter",
            "extra": "iterations: 71112917\ncpu: 1.9853073949982951 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 1495873.0794430948,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 118185.09418509419 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 30.709179452783037,
            "unit": "ns/iter",
            "extra": "iterations: 76315072\ncpu: 1.8096163232342872 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 38737.66905316882,
            "unit": "ns/iter",
            "extra": "iterations: 41623\ncpu: 3267.8567138360995 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 56672.46307001101,
            "unit": "ns/iter",
            "extra": "iterations: 3114\ncpu: 43882.787411689176 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3829.8306474784417,
            "unit": "ns/iter",
            "extra": "iterations: 38287\ncpu: 3658.5002742445186 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 133029.8832617544,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 66042.48927038621 ns\nthreads: 1"
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
          "id": "31d888a540c00e03fd430c724a15420ef3281e78",
          "message": "Enable metric collection from MetricReader (#1241)",
          "timestamp": "2022-03-17T18:15:35-07:00",
          "tree_id": "1fe56a5fd8cec65eab979e5fd25a9866de69ef4d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/31d888a540c00e03fd430c724a15420ef3281e78"
        },
        "date": 1647636618682,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3194.3640020646694,
            "unit": "ns/iter",
            "extra": "iterations: 42330\ncpu: 3192.428537680133 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.137364634044042,
            "unit": "ns/iter",
            "extra": "iterations: 67884383\ncpu: 2.1367653882926216 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 71137.29556853822,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 70972.89187790999 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.1961376015952094,
            "unit": "ns/iter",
            "extra": "iterations: 65442885\ncpu: 2.189136374412588 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 653.9773304337574,
            "unit": "ns/iter",
            "extra": "iterations: 226772\ncpu: 651.214435644612 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 15004.31372194874,
            "unit": "ns/iter",
            "extra": "iterations: 9310\ncpu: 14898.6895810956 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2479.022357082384,
            "unit": "ns/iter",
            "extra": "iterations: 55690\ncpu: 2472.52289459508 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46135.4340501177,
            "unit": "ns/iter",
            "extra": "iterations: 3148\ncpu: 46003.526048284584 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 57.120142588922484,
            "unit": "ns/iter",
            "extra": "iterations: 2938510\ncpu: 48.05486454019215 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 371.4737620394061,
            "unit": "ns/iter",
            "extra": "iterations: 489213\ncpu: 296.4453111425903 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1228.7316895505578,
            "unit": "ns/iter",
            "extra": "iterations: 150344\ncpu: 957.3424945458418 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 283.6489708029229,
            "unit": "ns/iter",
            "extra": "iterations: 645132\ncpu: 215.3039998015911 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1096.8339484481317,
            "unit": "ns/iter",
            "extra": "iterations: 160873\ncpu: 885.5954697183481 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.343315875353303,
            "unit": "ns/iter",
            "extra": "iterations: 53673984\ncpu: 2.335941747868018 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.0619580171374183,
            "unit": "ns/iter",
            "extra": "iterations: 59952038\ncpu: 2.3936700867450083 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 11.767915439070093,
            "unit": "ns/iter",
            "extra": "iterations: 14952121\ncpu: 9.680071476147099 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.4363831137657157,
            "unit": "ns/iter",
            "extra": "iterations: 69203126\ncpu: 1.9555316041648172 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.3751222376744073,
            "unit": "ms/iter",
            "extra": "iterations: 661\ncpu: 0.12837897125567324 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.3934211815166684,
            "unit": "ms/iter",
            "extra": "iterations: 453\ncpu: 0.23949735099337757 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.5787541699963946,
            "unit": "ms/iter",
            "extra": "iterations: 344\ncpu: 0.13895639534883733 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.4993822284325392,
            "unit": "ms/iter",
            "extra": "iterations: 501\ncpu: 0.2721502994011976 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 1.1224794387817383,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.14021599999999967 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.6595181637122983,
            "unit": "ms/iter",
            "extra": "iterations: 305\ncpu: 0.26521081967213095 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 27.158641815185547,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 9.007400000000022 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 40.048956871032715,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 23.569050000000008 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ec1b596fde0a2d443f5d730bcd14384b68c68e9",
          "message": "Bump actions/cache from 2 to 3 (#1277)",
          "timestamp": "2022-03-22T18:27:20+01:00",
          "tree_id": "9bdf4515d8c5ba0079d9d0f961a26912f59a5b4f",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/6ec1b596fde0a2d443f5d730bcd14384b68c68e9"
        },
        "date": 1647974305379,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4039.366841496184,
            "unit": "ns/iter",
            "extra": "iterations: 36433\ncpu: 4027.0414184942233 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.924593828742861,
            "unit": "ns/iter",
            "extra": "iterations: 51097874\ncpu: 2.913520433355016 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 86019.34504406521,
            "unit": "ns/iter",
            "extra": "iterations: 1629\ncpu: 85691.83548189077 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.6163819240640303,
            "unit": "ns/iter",
            "extra": "iterations: 52942066\ncpu: 2.609012273907103 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 725.072626652718,
            "unit": "ns/iter",
            "extra": "iterations: 194414\ncpu: 721.6342444474162 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 20784.74177622037,
            "unit": "ns/iter",
            "extra": "iterations: 7137\ncpu: 18237.35463079726 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3476.6949694421955,
            "unit": "ns/iter",
            "extra": "iterations: 43971\ncpu: 3188.333219622025 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 57230.05594375478,
            "unit": "ns/iter",
            "extra": "iterations: 2534\ncpu: 54513.73322809786 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 61.28945596463971,
            "unit": "ns/iter",
            "extra": "iterations: 2413215\ncpu: 57.84892767532109 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 369.99382270717325,
            "unit": "ns/iter",
            "extra": "iterations: 421736\ncpu: 337.98727165809885 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1112.5298628175954,
            "unit": "ns/iter",
            "extra": "iterations: 133082\ncpu: 1077.4995867209693 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 298.74805381988364,
            "unit": "ns/iter",
            "extra": "iterations: 569214\ncpu: 243.2652745716022 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1566.324234008789,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 1064.0970000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.6321509416023705,
            "unit": "ns/iter",
            "extra": "iterations: 38751214\ncpu: 2.6211849775854765 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.492722779979529,
            "unit": "ns/iter",
            "extra": "iterations: 59526340\ncpu: 2.4795174707532834 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.620869624178297,
            "unit": "ns/iter",
            "extra": "iterations: 14314899\ncpu: 9.592593003974397 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.050856194790867,
            "unit": "ns/iter",
            "extra": "iterations: 69288065\ncpu: 2.045498023360877 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.15330136711917705,
            "unit": "ms/iter",
            "extra": "iterations: 938\ncpu: 0.14531876332622604 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.31167417426768884,
            "unit": "ms/iter",
            "extra": "iterations: 441\ncpu: 0.30577687074829923 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.15666873558707858,
            "unit": "ms/iter",
            "extra": "iterations: 920\ncpu: 0.1530728260869565 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.30729304189267365,
            "unit": "ms/iter",
            "extra": "iterations: 460\ncpu: 0.29257478260869574 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.18018371044458736,
            "unit": "ms/iter",
            "extra": "iterations: 738\ncpu: 0.1778995934959349 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.28096737504816377,
            "unit": "ms/iter",
            "extra": "iterations: 441\ncpu: 0.27312222222222204 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.548888524373372,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 7.530452380952376 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 26.030826568603516,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.994540000000036 ms\nthreads: 1"
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
          "id": "b5155a5dea3a8816d1d0aa3f513d6a5c13245d9b",
          "message": " Add owent as an Approver (#1276)\n\n* add owent as reviewer\r\n\r\n* fix order",
          "timestamp": "2022-03-23T08:06:46-07:00",
          "tree_id": "87d7621ac28ba57d5748930eb19560dd42849fbf",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/b5155a5dea3a8816d1d0aa3f513d6a5c13245d9b"
        },
        "date": 1648050372221,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3722.41806230273,
            "unit": "ns/iter",
            "extra": "iterations: 37613\ncpu: 3716.536835668519 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.620266061757128,
            "unit": "ns/iter",
            "extra": "iterations: 86619727\ncpu: 1.615949447635641 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75911.57346158414,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 75744.32432432429 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6170892810993323,
            "unit": "ns/iter",
            "extra": "iterations: 86509467\ncpu: 1.6163988156348252 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 1377.6988025730052,
            "unit": "ns/iter",
            "extra": "iterations: 199894\ncpu: 700.0625331425654 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 23492.957153633877,
            "unit": "ns/iter",
            "extra": "iterations: 7786\ncpu: 17891.677369637797 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 5762.221751682629,
            "unit": "ns/iter",
            "extra": "iterations: 45576\ncpu: 2928.622520624894 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46627.3846390728,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 46555.3070761015 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 67.21870369620247,
            "unit": "ns/iter",
            "extra": "iterations: 2618349\ncpu: 53.25252668761881 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 418.76122788868656,
            "unit": "ns/iter",
            "extra": "iterations: 438638\ncpu: 319.47870453540276 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1325.5056923341783,
            "unit": "ns/iter",
            "extra": "iterations: 139474\ncpu: 1005.6024778811824 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 230.93227983346554,
            "unit": "ns/iter",
            "extra": "iterations: 606373\ncpu: 230.5935455569428 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 947.9384075178916,
            "unit": "ns/iter",
            "extra": "iterations: 147767\ncpu: 946.737092855645 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.689814125678361,
            "unit": "ns/iter",
            "extra": "iterations: 82713963\ncpu: 1.6883340482670381 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.6945682077268034,
            "unit": "ns/iter",
            "extra": "iterations: 82684653\ncpu: 1.691992345907287 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.954480206915878,
            "unit": "ns/iter",
            "extra": "iterations: 15633392\ncpu: 8.951256387609293 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.6939984953363183,
            "unit": "ns/iter",
            "extra": "iterations: 82903027\ncpu: 1.6931673677005787 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11001226892433014,
            "unit": "ms/iter",
            "extra": "iterations: 1245\ncpu: 0.10641108433734942 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21617886419400736,
            "unit": "ms/iter",
            "extra": "iterations: 639\ncpu: 0.21067996870109548 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10825035183928734,
            "unit": "ms/iter",
            "extra": "iterations: 1290\ncpu: 0.10626565891472867 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2133514538452895,
            "unit": "ms/iter",
            "extra": "iterations: 654\ncpu: 0.20899770642201823 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10805982287014577,
            "unit": "ms/iter",
            "extra": "iterations: 1298\ncpu: 0.1058416024653313 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21190701284669453,
            "unit": "ms/iter",
            "extra": "iterations: 658\ncpu: 0.20757917933130693 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.444508379155939,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.421922727272721 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.589799880981445,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.550039999999985 ms\nthreads: 1"
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
          "distinct": false,
          "id": "0c9aecea7af2f3f835f79397feb1436f8d51cc25",
          "message": "Disable benchmark action failure (#1284)",
          "timestamp": "2022-03-24T16:45:38+01:00",
          "tree_id": "a113fc6f58ec10b3a7dbd69d14b5baa94e19f8ad",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/0c9aecea7af2f3f835f79397feb1436f8d51cc25"
        },
        "date": 1648139463749,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3721.7210677559706,
            "unit": "ns/iter",
            "extra": "iterations: 37549\ncpu: 3720.6290447149067 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.614983600629398,
            "unit": "ns/iter",
            "extra": "iterations: 86756604\ncpu: 1.6148050239495313 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 79604.50953267801,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 76046.60879001628 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6179167148061548,
            "unit": "ns/iter",
            "extra": "iterations: 86566167\ncpu: 1.6175418740672662 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 674.4719262650101,
            "unit": "ns/iter",
            "extra": "iterations: 208436\ncpu: 670.5444357020863 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 18828.148817896243,
            "unit": "ns/iter",
            "extra": "iterations: 7960\ncpu: 17632.437185929633 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2742.976927806784,
            "unit": "ns/iter",
            "extra": "iterations: 51034\ncpu: 2735.601755692282 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 47519.912541350604,
            "unit": "ns/iter",
            "extra": "iterations: 2994\ncpu: 47295.156980627944 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.9158988589202,
            "unit": "ns/iter",
            "extra": "iterations: 2645178\ncpu: 52.875194032310866 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 321.56906570596635,
            "unit": "ns/iter",
            "extra": "iterations: 437426\ncpu: 320.3378400003657 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1018.1854028766573,
            "unit": "ns/iter",
            "extra": "iterations: 137919\ncpu: 1018.1454331890455 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 231.44158852480422,
            "unit": "ns/iter",
            "extra": "iterations: 607512\ncpu: 230.4122387705921 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 950.324308485907,
            "unit": "ns/iter",
            "extra": "iterations: 147748\ncpu: 950.0406096867639 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6880886109494295,
            "unit": "ns/iter",
            "extra": "iterations: 82649507\ncpu: 1.6850820416871937 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.7012257851322345,
            "unit": "ns/iter",
            "extra": "iterations: 82758947\ncpu: 1.6918714540918462 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.0215965881621,
            "unit": "ns/iter",
            "extra": "iterations: 15634161\ncpu: 8.956342460589983 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.6982657366946163,
            "unit": "ns/iter",
            "extra": "iterations: 81140605\ncpu: 1.69123461674953 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11000170069894973,
            "unit": "ms/iter",
            "extra": "iterations: 1256\ncpu: 0.10613789808917198 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21694110105030215,
            "unit": "ms/iter",
            "extra": "iterations: 638\ncpu: 0.2099296238244514 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.11240306848324604,
            "unit": "ms/iter",
            "extra": "iterations: 1288\ncpu: 0.1064197204968944 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21704136861798182,
            "unit": "ms/iter",
            "extra": "iterations: 643\ncpu: 0.21035583203732514 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10846990235844013,
            "unit": "ms/iter",
            "extra": "iterations: 1288\ncpu: 0.10579013975155273 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21293541280234732,
            "unit": "ms/iter",
            "extra": "iterations: 656\ncpu: 0.20748490853658538 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 8.802947543916249,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 6.494452380952375 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.770092010498047,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.695179999999947 ms\nthreads: 1"
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
          "distinct": false,
          "id": "3c7b44bf4f7a615364b78d4449eaa5f7ac121249",
          "message": "metrics exemplar round 1 (#1264)",
          "timestamp": "2022-03-24T22:31:41+01:00",
          "tree_id": "c5847c4090ac2472cf9eb12e045cce3e0ff2af9e",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/3c7b44bf4f7a615364b78d4449eaa5f7ac121249"
        },
        "date": 1648161133480,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3751.3020656206572,
            "unit": "ns/iter",
            "extra": "iterations: 37330\ncpu: 3747.1068845432637 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.0149449823424783,
            "unit": "ns/iter",
            "extra": "iterations: 46434032\ncpu: 3.00930145372687 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75739.73457768279,
            "unit": "ns/iter",
            "extra": "iterations: 1855\ncpu: 75303.71967654987 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.012840400249777,
            "unit": "ns/iter",
            "extra": "iterations: 46583903\ncpu: 3.0079489045819106 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 641.7162748545765,
            "unit": "ns/iter",
            "extra": "iterations: 219182\ncpu: 641.0932467082152 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16927.662471264608,
            "unit": "ns/iter",
            "extra": "iterations: 8418\ncpu: 16897.45782846282 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2873.833339615948,
            "unit": "ns/iter",
            "extra": "iterations: 48892\ncpu: 2870.8807166816628 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 51424.45754441412,
            "unit": "ns/iter",
            "extra": "iterations: 2708\ncpu: 50938.6632200886 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 80.82361841744016,
            "unit": "ns/iter",
            "extra": "iterations: 2462569\ncpu: 56.883238601639185 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 412.1918059906031,
            "unit": "ns/iter",
            "extra": "iterations: 437335\ncpu: 320.0937496427224 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1345.5873397226883,
            "unit": "ns/iter",
            "extra": "iterations: 138819\ncpu: 1005.8565470144579 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 359.52088812296324,
            "unit": "ns/iter",
            "extra": "iterations: 556997\ncpu: 251.12379420355938 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1491.9514100793838,
            "unit": "ns/iter",
            "extra": "iterations: 146536\ncpu: 955.5126385325112 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.0263349602406056,
            "unit": "ns/iter",
            "extra": "iterations: 46386031\ncpu: 3.0131204801721454 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.066451293882318,
            "unit": "ns/iter",
            "extra": "iterations: 46462233\ncpu: 3.0089901189208885 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.688883705103288,
            "unit": "ns/iter",
            "extra": "iterations: 16156841\ncpu: 8.679357555106224 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.986730415894155,
            "unit": "ns/iter",
            "extra": "iterations: 46412481\ncpu: 2.982464996861512 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1256403340473434,
            "unit": "ms/iter",
            "extra": "iterations: 1105\ncpu: 0.12225972850678736 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.24875600070239387,
            "unit": "ms/iter",
            "extra": "iterations: 561\ncpu: 0.24258948306595368 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12477706460391774,
            "unit": "ms/iter",
            "extra": "iterations: 1122\ncpu: 0.1221401960784314 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.5303077121822702,
            "unit": "ms/iter",
            "extra": "iterations: 563\ncpu: 0.3263516873889876 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12522211092137164,
            "unit": "ms/iter",
            "extra": "iterations: 1102\ncpu: 0.1222311252268603 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.24778544377187361,
            "unit": "ms/iter",
            "extra": "iterations: 567\ncpu: 0.24117865961199283 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.486937669607309,
            "unit": "ms/iter",
            "extra": "iterations: 26\ncpu: 5.4573923076923085 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 22.172967592875164,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 22.137733333333315 ms\nthreads: 1"
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
          "id": "91b05720ef38bcd065e1ebb8c9c857764d8d0e3b",
          "message": "fix compilation error with protobuf 3.5 (#1289)",
          "timestamp": "2022-03-25T17:40:21+01:00",
          "tree_id": "c875ed27837cc5d253823727efbff74ccac4ba16",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/91b05720ef38bcd065e1ebb8c9c857764d8d0e3b"
        },
        "date": 1648240102323,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3634.934111544993,
            "unit": "ns/iter",
            "extra": "iterations: 43139\ncpu: 3623.3779178933214 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.0673227814864354,
            "unit": "ns/iter",
            "extra": "iterations: 69825785\ncpu: 2.0645625394687652 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 68975.06636055923,
            "unit": "ns/iter",
            "extra": "iterations: 1961\ncpu: 68550.17848036715 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.0494204566791634,
            "unit": "ns/iter",
            "extra": "iterations: 67788075\ncpu: 2.037958741268284 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 611.7973929445574,
            "unit": "ns/iter",
            "extra": "iterations: 217735\ncpu: 608.8864904585853 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 14967.478238619291,
            "unit": "ns/iter",
            "extra": "iterations: 9750\ncpu: 14925.692307692305 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2465.8800460090392,
            "unit": "ns/iter",
            "extra": "iterations: 54487\ncpu: 2448.049993576451 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 47523.9295225877,
            "unit": "ns/iter",
            "extra": "iterations: 3120\ncpu: 46922.11538461535 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 51.2165738697725,
            "unit": "ns/iter",
            "extra": "iterations: 2826855\ncpu: 51.09989723562052 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 311.18695607545845,
            "unit": "ns/iter",
            "extra": "iterations: 441384\ncpu: 310.7946821815018 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1036.0068219292543,
            "unit": "ns/iter",
            "extra": "iterations: 147043\ncpu: 1034.5762804077722 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 220.36829123619648,
            "unit": "ns/iter",
            "extra": "iterations: 599207\ncpu: 220.20086547720564 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 956.3503750477307,
            "unit": "ns/iter",
            "extra": "iterations: 156804\ncpu: 955.6305961582613 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.3740841907381305,
            "unit": "ns/iter",
            "extra": "iterations: 58079478\ncpu: 2.3719806848126286 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.2123787887041386,
            "unit": "ns/iter",
            "extra": "iterations: 66398228\ncpu: 2.2033012688230182 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.186328314067735,
            "unit": "ns/iter",
            "extra": "iterations: 16308691\ncpu: 9.168209760059838 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.8639238792618278,
            "unit": "ns/iter",
            "extra": "iterations: 77191551\ncpu: 1.8626287221512106 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1350095063561269,
            "unit": "ms/iter",
            "extra": "iterations: 1052\ncpu: 0.13192252851711025 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.26061372517684883,
            "unit": "ms/iter",
            "extra": "iterations: 558\ncpu: 0.2529017921146954 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.13599978736252658,
            "unit": "ms/iter",
            "extra": "iterations: 867\ncpu: 0.13307254901960783 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2563982196218379,
            "unit": "ms/iter",
            "extra": "iterations: 563\ncpu: 0.2515158081705151 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.13213064571133523,
            "unit": "ms/iter",
            "extra": "iterations: 1127\ncpu: 0.12969751552795025 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.26057369640201383,
            "unit": "ms/iter",
            "extra": "iterations: 589\ncpu: 0.255549066213922 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.956302086512248,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 5.942083333333329 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 24.504979451497395,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 24.48030000000001 ms\nthreads: 1"
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
          "id": "c1b959079bd6ae03183f54f246017aa1be5c706b",
          "message": "Fix span SetAttribute crash (#1283)",
          "timestamp": "2022-03-26T08:25:42Z",
          "tree_id": "13862d3814fa9d6f4edac4cef175701f1d00d248",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/c1b959079bd6ae03183f54f246017aa1be5c706b"
        },
        "date": 1648290914292,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3939.3165308958405,
            "unit": "ns/iter",
            "extra": "iterations: 37680\ncpu: 3715.5918259023356 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6172536280839072,
            "unit": "ns/iter",
            "extra": "iterations: 86635272\ncpu: 1.6156098638439091 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 76289.04541741841,
            "unit": "ns/iter",
            "extra": "iterations: 1849\ncpu: 75860.08653326124 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.9576203367123919,
            "unit": "ns/iter",
            "extra": "iterations: 86614368\ncpu: 1.640338702234714 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 680.5465160278096,
            "unit": "ns/iter",
            "extra": "iterations: 202547\ncpu: 679.9340400005926 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17706.575089592807,
            "unit": "ns/iter",
            "extra": "iterations: 7966\ncpu: 17616.05573688173 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2736.145173107473,
            "unit": "ns/iter",
            "extra": "iterations: 51566\ncpu: 2733.01012294923 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46863.19784074272,
            "unit": "ns/iter",
            "extra": "iterations: 2983\ncpu: 46803.855179349615 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.166613300335456,
            "unit": "ns/iter",
            "extra": "iterations: 2634942\ncpu: 52.94010266639645 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 316.5013765982625,
            "unit": "ns/iter",
            "extra": "iterations: 443999\ncpu: 315.3583679242521 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1006.4977688944557,
            "unit": "ns/iter",
            "extra": "iterations: 139097\ncpu: 1005.5953758887681 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 232.45167622628975,
            "unit": "ns/iter",
            "extra": "iterations: 607304\ncpu: 230.5211228643314 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 959.4939022522786,
            "unit": "ns/iter",
            "extra": "iterations: 147363\ncpu: 955.4528613016836 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.693495155708557,
            "unit": "ns/iter",
            "extra": "iterations: 83274843\ncpu: 1.6865345516172272 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.6972740134420823,
            "unit": "ns/iter",
            "extra": "iterations: 82752587\ncpu: 1.6926274461969388 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.982311969726176,
            "unit": "ns/iter",
            "extra": "iterations: 15621077\ncpu: 8.957314530873898 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.7023457721500916,
            "unit": "ns/iter",
            "extra": "iterations: 82087846\ncpu: 1.6942678700571587 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1615252198472535,
            "unit": "ms/iter",
            "extra": "iterations: 1239\ncpu: 0.10874237288135595 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2192698504081697,
            "unit": "ms/iter",
            "extra": "iterations: 526\ncpu: 0.21148079847908752 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10837334057418622,
            "unit": "ms/iter",
            "extra": "iterations: 1291\ncpu: 0.10580844306738962 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21302082189699498,
            "unit": "ms/iter",
            "extra": "iterations: 656\ncpu: 0.2078080792682927 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10759103252160503,
            "unit": "ms/iter",
            "extra": "iterations: 1295\ncpu: 0.10504463320463325 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21221171018748072,
            "unit": "ms/iter",
            "extra": "iterations: 659\ncpu: 0.20692503793626693 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.395675919272683,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.389354545454549 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.41085084279378,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 25.368883333333315 ms\nthreads: 1"
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
          "id": "a7e814a632fdaee0c76246358ffad811ac06a7e9",
          "message": "Synchronous Metric collection (Delta , Cumulative) (#1265)",
          "timestamp": "2022-03-30T01:01:37Z",
          "tree_id": "c0d9fb9e062e573ec2d6d2d5369689eaed72408c",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/a7e814a632fdaee0c76246358ffad811ac06a7e9"
        },
        "date": 1648663129821,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3849.7731497592717,
            "unit": "ns/iter",
            "extra": "iterations: 36705\ncpu: 3849.0968532897427 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.357760115237306,
            "unit": "ns/iter",
            "extra": "iterations: 59637405\ncpu: 2.3556658778161124 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 78482.27716991203,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 78435.76512455515 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.4809182980295033,
            "unit": "ns/iter",
            "extra": "iterations: 49204642\ncpu: 2.480398089269707 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 813.3582272874986,
            "unit": "ns/iter",
            "extra": "iterations: 217196\ncpu: 679.9061677010626 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 19707.336734976572,
            "unit": "ns/iter",
            "extra": "iterations: 7896\ncpu: 17294.769503546093 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3303.0144656778252,
            "unit": "ns/iter",
            "extra": "iterations: 48716\ncpu: 2804.0068971179912 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 53620.21644213046,
            "unit": "ns/iter",
            "extra": "iterations: 2736\ncpu: 49678.07017543861 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 63.87160849508594,
            "unit": "ns/iter",
            "extra": "iterations: 2395451\ncpu: 59.73647551129203 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 364.438442114735,
            "unit": "ns/iter",
            "extra": "iterations: 385831\ncpu: 362.21480389082257 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1123.0254238725536,
            "unit": "ns/iter",
            "extra": "iterations: 123860\ncpu: 1118.7736153721944 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 253.3582155640849,
            "unit": "ns/iter",
            "extra": "iterations: 604950\ncpu: 252.25737664269775 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1059.275730888292,
            "unit": "ns/iter",
            "extra": "iterations: 141812\ncpu: 1052.8305079965023 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.523619071130795,
            "unit": "ns/iter",
            "extra": "iterations: 52357783\ncpu: 2.515679474052597 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.439038828791901,
            "unit": "ns/iter",
            "extra": "iterations: 55120931\ncpu: 2.4305521980388898 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.504757735434936,
            "unit": "ns/iter",
            "extra": "iterations: 13727240\ncpu: 9.49112130333556 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.11722611640365,
            "unit": "ns/iter",
            "extra": "iterations: 68925452\ncpu: 2.083804978166846 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.15911810738699778,
            "unit": "ms/iter",
            "extra": "iterations: 875\ncpu: 0.16354925714285715 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.30288345369941744,
            "unit": "ms/iter",
            "extra": "iterations: 462\ncpu: 0.3215746753246754 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1533451435080764,
            "unit": "ms/iter",
            "extra": "iterations: 914\ncpu: 0.14244551422319468 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.27655015486327167,
            "unit": "ms/iter",
            "extra": "iterations: 511\ncpu: 0.2713307240704502 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14654229422963932,
            "unit": "ms/iter",
            "extra": "iterations: 969\ncpu: 0.14323653250773996 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.27911176959287776,
            "unit": "ms/iter",
            "extra": "iterations: 515\ncpu: 0.27269300970873783 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.91313970656622,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 6.872223809523813 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.51746368408203,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.353819999999992 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76c664a20b8219b91ead69ded6b7ee873b1a85ba",
          "message": "Rename `http_client_curl` to `opentelemetry_http_client_curl` (#1301)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-03-31T11:51:26-07:00",
          "tree_id": "e2f6346906aa6f84e0ce077d65078685ead26980",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/76c664a20b8219b91ead69ded6b7ee873b1a85ba"
        },
        "date": 1648754178512,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3732.252076633066,
            "unit": "ns/iter",
            "extra": "iterations: 38716\ncpu: 3723.674966422151 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.2098568501448628,
            "unit": "ns/iter",
            "extra": "iterations: 66563335\ncpu: 2.1927567180941283 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75304.96814079404,
            "unit": "ns/iter",
            "extra": "iterations: 1918\ncpu: 75188.89468196039 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.3299903740294,
            "unit": "ns/iter",
            "extra": "iterations: 62783648\ncpu: 2.2783559821181463 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 692.6709812776879,
            "unit": "ns/iter",
            "extra": "iterations: 191497\ncpu: 684.4190770612593 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16248.94024913312,
            "unit": "ns/iter",
            "extra": "iterations: 8948\ncpu: 16175.067054090287 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2764.630722284877,
            "unit": "ns/iter",
            "extra": "iterations: 51974\ncpu: 2756.7745411167116 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 51772.92451717921,
            "unit": "ns/iter",
            "extra": "iterations: 2781\ncpu: 51648.00431499451 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.43436347241509,
            "unit": "ns/iter",
            "extra": "iterations: 2348229\ncpu: 53.394409148341154 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 355.01115503627386,
            "unit": "ns/iter",
            "extra": "iterations: 388099\ncpu: 354.931602503485 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1121.7670673710832,
            "unit": "ns/iter",
            "extra": "iterations: 120725\ncpu: 1121.7734520604686 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 231.68672440530688,
            "unit": "ns/iter",
            "extra": "iterations: 545520\ncpu: 231.68756415896763 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 983.0957664459944,
            "unit": "ns/iter",
            "extra": "iterations: 150783\ncpu: 982.6578593077471 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.1891366178137646,
            "unit": "ns/iter",
            "extra": "iterations: 55965078\ncpu: 2.169745926200621 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.3416603750744946,
            "unit": "ns/iter",
            "extra": "iterations: 68207174\ncpu: 2.336254247976907 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.860495537606925,
            "unit": "ns/iter",
            "extra": "iterations: 13756375\ncpu: 9.817848088613461 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.3663531316222075,
            "unit": "ns/iter",
            "extra": "iterations: 63397183\ncpu: 2.3279157372023924 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.7891169182416901,
            "unit": "ms/iter",
            "extra": "iterations: 373\ncpu: 0.15255308310991958 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.7226482127447548,
            "unit": "ms/iter",
            "extra": "iterations: 159\ncpu: 0.2931012578616352 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.6111594271068731,
            "unit": "ms/iter",
            "extra": "iterations: 242\ncpu: 0.14914793388429745 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.7315814222919342,
            "unit": "ms/iter",
            "extra": "iterations: 219\ncpu: 0.30021141552511416 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 1.0066819190979004,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.16219700000000004 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 1.5838392002066386,
            "unit": "ms/iter",
            "extra": "iterations: 194\ncpu: 0.5928788659793816 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 29.679715633392334,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 6.861900000000004 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 47.974189122517906,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 25.101366666666664 ms\nthreads: 1"
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
          "id": "33d9c628f2e7029b6b92733df69336f7e384c7e4",
          "message": "Implement periodic exporting metric reader (#1286)",
          "timestamp": "2022-04-01T14:07:44-07:00",
          "tree_id": "08bc3c6b0d5e345e481dfc903e1c4ae1147d2c38",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/33d9c628f2e7029b6b92733df69336f7e384c7e4"
        },
        "date": 1648888381021,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4469.220039775832,
            "unit": "ns/iter",
            "extra": "iterations: 31590\ncpu: 4436.7141500474845 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.9367363876530386,
            "unit": "ns/iter",
            "extra": "iterations: 72303966\ncpu: 1.9358191222871513 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 100278.91666105881,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 91424.16721097322 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.9663208430287642,
            "unit": "ns/iter",
            "extra": "iterations: 72011275\ncpu: 1.9417001018243323 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 807.2658303933821,
            "unit": "ns/iter",
            "extra": "iterations: 173516\ncpu: 805.6369441434799 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 21197.99122221063,
            "unit": "ns/iter",
            "extra": "iterations: 6627\ncpu: 21165.91217745587 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3277.494028146254,
            "unit": "ns/iter",
            "extra": "iterations: 42584\ncpu: 3274.614878827725 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 57291.64875728983,
            "unit": "ns/iter",
            "extra": "iterations: 2485\ncpu: 56285.95573440646 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 74.1951720850576,
            "unit": "ns/iter",
            "extra": "iterations: 2192093\ncpu: 63.87078467929966 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 449.8091308454369,
            "unit": "ns/iter",
            "extra": "iterations: 366087\ncpu: 383.8814270924673 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1631.626080686104,
            "unit": "ns/iter",
            "extra": "iterations: 113502\ncpu: 1211.4738066289578 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 389.393073440946,
            "unit": "ns/iter",
            "extra": "iterations: 500293\ncpu: 279.54778499799136 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1617.3984128072614,
            "unit": "ns/iter",
            "extra": "iterations: 122037\ncpu: 1144.2595278481112 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.030970180783818,
            "unit": "ns/iter",
            "extra": "iterations: 68835307\ncpu: 2.030707874957251 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.032206512251953,
            "unit": "ns/iter",
            "extra": "iterations: 68852911\ncpu: 2.0316090920251724 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.756906428842727,
            "unit": "ns/iter",
            "extra": "iterations: 13024346\ncpu: 10.756202269196473 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.0494313770966155,
            "unit": "ns/iter",
            "extra": "iterations: 66969304\ncpu: 2.04941505738211 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.13112033121322933,
            "unit": "ms/iter",
            "extra": "iterations: 1061\ncpu: 0.1262780395852969 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.25701303692425,
            "unit": "ms/iter",
            "extra": "iterations: 544\ncpu: 0.25006911764705875 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12979569087288276,
            "unit": "ms/iter",
            "extra": "iterations: 1083\ncpu: 0.12617645429362878 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.25466912022086974,
            "unit": "ms/iter",
            "extra": "iterations: 551\ncpu: 0.24888784029038113 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12997637099217743,
            "unit": "ms/iter",
            "extra": "iterations: 1066\ncpu: 0.12654887429643527 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2565149827436967,
            "unit": "ms/iter",
            "extra": "iterations: 550\ncpu: 0.24879781818181826 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.36161282188014,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 7.355957894736841 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 29.532957077026367,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 29.440359999999988 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "237a0b26372b8a75ae941272b78bc07f12692c7b",
          "message": "Excempt should be applied on issue instead of PR (#1316)",
          "timestamp": "2022-04-04T20:41:02-07:00",
          "tree_id": "2d6d0e656fc5dfad523d31bfef3949ed51344b5b",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/237a0b26372b8a75ae941272b78bc07f12692c7b"
        },
        "date": 1649174063041,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.15198166607416164,
            "unit": "ms/iter",
            "extra": "iterations: 855\ncpu: 0.14799918128654974 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.3146610476753928,
            "unit": "ms/iter",
            "extra": "iterations: 440\ncpu: 0.307276590909091 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.20513224275144812,
            "unit": "ms/iter",
            "extra": "iterations: 876\ncpu: 0.1468412100456621 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.28644579611796106,
            "unit": "ms/iter",
            "extra": "iterations: 481\ncpu: 0.27886424116424124 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1398299763621034,
            "unit": "ms/iter",
            "extra": "iterations: 946\ncpu: 0.13698911205074005 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2781211275951333,
            "unit": "ms/iter",
            "extra": "iterations: 509\ncpu: 0.27237210216110025 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.609984806605747,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 6.545947619047625 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 28.19809913635254,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 28.123640000000005 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 56.14821923103888,
            "unit": "ns/iter",
            "extra": "iterations: 2568030\ncpu: 56.05522521154348 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 335.81763034433754,
            "unit": "ns/iter",
            "extra": "iterations: 411795\ncpu: 335.34744229531685 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1112.4201178012759,
            "unit": "ns/iter",
            "extra": "iterations: 131184\ncpu: 1102.9599646298334 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 248.20587979742092,
            "unit": "ns/iter",
            "extra": "iterations: 579305\ncpu: 247.79209570088295 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1005.5021279708367,
            "unit": "ns/iter",
            "extra": "iterations: 134372\ncpu: 1002.9738338344298 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.675807572667462,
            "unit": "ns/iter",
            "extra": "iterations: 51494632\ncpu: 2.6730125967304708 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.5902392157741883,
            "unit": "ns/iter",
            "extra": "iterations: 52751360\ncpu: 2.5759127347617197 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.548373518893778,
            "unit": "ns/iter",
            "extra": "iterations: 13862347\ncpu: 10.54203880482865 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.338233631851597,
            "unit": "ns/iter",
            "extra": "iterations: 63818827\ncpu: 2.2265059807507903 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4153.712232945085,
            "unit": "ns/iter",
            "extra": "iterations: 37115\ncpu: 3821.9911087161527 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.588640398768932,
            "unit": "ns/iter",
            "extra": "iterations: 53791535\ncpu: 2.46138727961565 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 110802.19632103329,
            "unit": "ns/iter",
            "extra": "iterations: 1680\ncpu: 82490.41666666669 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.7680005719260676,
            "unit": "ns/iter",
            "extra": "iterations: 58606341\ncpu: 2.502433994301061 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 665.7832543461789,
            "unit": "ns/iter",
            "extra": "iterations: 212672\ncpu: 659.4008614204031 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 18507.193174261323,
            "unit": "ns/iter",
            "extra": "iterations: 8510\ncpu: 16520.92831962395 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2966.317943766008,
            "unit": "ns/iter",
            "extra": "iterations: 48877\ncpu: 2948.988276694558 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 52170.31999067827,
            "unit": "ns/iter",
            "extra": "iterations: 2673\ncpu: 50555.51814440701 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71329856+benlandrum@users.noreply.github.com",
            "name": "Ben Landrum",
            "username": "benlandrum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "3122254e8238738d74f78130817b090a8fdc0a9a",
          "message": "Remove implicitly deleted default constructor (#1267)\n\nCo-authored-by: Tom Tan <Tom.Tan@microsoft.com>\r\nCo-authored-by: Lalit Kumar Bhasin <lalit_fin@yahoo.com>",
          "timestamp": "2022-04-07T10:02:11-07:00",
          "tree_id": "46ac29c32e449bf28f39f4ff841d32efae30ce24",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/3122254e8238738d74f78130817b090a8fdc0a9a"
        },
        "date": 1649439457798,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.14318956955775802,
            "unit": "ms/iter",
            "extra": "iterations: 1061\ncpu: 0.13731215834118757 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.6579910625110973,
            "unit": "ms/iter",
            "extra": "iterations: 550\ncpu: 0.2694469090909091 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.19591258394408728,
            "unit": "ms/iter",
            "extra": "iterations: 809\ncpu: 0.14906983930778742 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3341971611490055,
            "unit": "ms/iter",
            "extra": "iterations: 392\ncpu: 0.28520841836734695 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1323147847238468,
            "unit": "ms/iter",
            "extra": "iterations: 1077\ncpu: 0.1263304549675024 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2918926710934983,
            "unit": "ms/iter",
            "extra": "iterations: 485\ncpu: 0.24945422680412388 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.457632767526727,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 7.434205263157896 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 30.54184913635254,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 30.362979999999993 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 63.60678024247058,
            "unit": "ns/iter",
            "extra": "iterations: 2219133\ncpu: 63.6017760089188 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 378.99187176096973,
            "unit": "ns/iter",
            "extra": "iterations: 369022\ncpu: 378.98688967053454 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1202.8700502538777,
            "unit": "ns/iter",
            "extra": "iterations: 118201\ncpu: 1202.8561518092058 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 273.91479626267085,
            "unit": "ns/iter",
            "extra": "iterations: 510297\ncpu: 273.80819405169933 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1132.0558101683503,
            "unit": "ns/iter",
            "extra": "iterations: 124739\ncpu: 1131.9515147628247 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.2927818096477015,
            "unit": "ns/iter",
            "extra": "iterations: 67593992\ncpu: 2.036655861367087 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.0411515862931378,
            "unit": "ns/iter",
            "extra": "iterations: 68817373\ncpu: 2.03493091780763 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.81416104687028,
            "unit": "ns/iter",
            "extra": "iterations: 13009581\ncpu: 10.776788276271155 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.032357771113333,
            "unit": "ns/iter",
            "extra": "iterations: 69007330\ncpu: 2.024953001369566 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4454.50149719343,
            "unit": "ns/iter",
            "extra": "iterations: 31482\ncpu: 4446.315354805921 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.9480428646446475,
            "unit": "ns/iter",
            "extra": "iterations: 72412420\ncpu: 1.9372215429342097 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 91160.52730295427,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 90896.56067488645 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.9533678453455996,
            "unit": "ns/iter",
            "extra": "iterations: 72226005\ncpu: 1.9385690791010792 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 855.2729693699368,
            "unit": "ns/iter",
            "extra": "iterations: 173263\ncpu: 808.1408032874878 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 21125.28962909051,
            "unit": "ns/iter",
            "extra": "iterations: 6625\ncpu: 21093.61509433961 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3250.4126730332946,
            "unit": "ns/iter",
            "extra": "iterations: 43102\ncpu: 3240.2997540717342 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 56212.29987881729,
            "unit": "ns/iter",
            "extra": "iterations: 2503\ncpu: 55821.37435077904 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "e200c1f183ab1340448b0992e96054f5aa591f46",
          "message": "Bump actions/stale from 4 to 5 (#1323)",
          "timestamp": "2022-04-11T07:55:15-07:00",
          "tree_id": "7dcecc3fc7868dd3e9f82b71a8f69effcbfbb23d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/e200c1f183ab1340448b0992e96054f5aa591f46"
        },
        "date": 1649780151161,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.12080092890480115,
            "unit": "ms/iter",
            "extra": "iterations: 1129\ncpu: 0.11754880425155005 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.23905802995730668,
            "unit": "ms/iter",
            "extra": "iterations: 585\ncpu: 0.23324 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1197891219035492,
            "unit": "ms/iter",
            "extra": "iterations: 1169\ncpu: 0.11733746792130025 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.23663790294563306,
            "unit": "ms/iter",
            "extra": "iterations: 591\ncpu: 0.23164686971235185 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.11978601026046805,
            "unit": "ms/iter",
            "extra": "iterations: 1172\ncpu: 0.11735486348122862 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.23641417155394684,
            "unit": "ms/iter",
            "extra": "iterations: 592\ncpu: 0.23145996621621637 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.609025955200195,
            "unit": "ms/iter",
            "extra": "iterations: 25\ncpu: 5.544188000000002 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 22.94770876566569,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 22.917633333333338 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 56.70405524859583,
            "unit": "ns/iter",
            "extra": "iterations: 2467439\ncpu: 56.70438053382475 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 316.5667803028583,
            "unit": "ns/iter",
            "extra": "iterations: 442163\ncpu: 315.87152249283633 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1292.6239131198702,
            "unit": "ns/iter",
            "extra": "iterations: 137882\ncpu: 1017.8899348718473 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 244.55958163624697,
            "unit": "ns/iter",
            "extra": "iterations: 572150\ncpu: 244.34274228786157 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 962.6483176389949,
            "unit": "ns/iter",
            "extra": "iterations: 145591\ncpu: 961.740080087368 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.016454909207493,
            "unit": "ns/iter",
            "extra": "iterations: 46437267\ncpu: 3.0132759535568705 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.012380483891477,
            "unit": "ns/iter",
            "extra": "iterations: 46458841\ncpu: 3.010477596718351 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.688447180802983,
            "unit": "ns/iter",
            "extra": "iterations: 16273563\ncpu: 8.685012618318437 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.956740570842243,
            "unit": "ns/iter",
            "extra": "iterations: 47992541\ncpu: 2.9537798384128062 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3726.352793574756,
            "unit": "ns/iter",
            "extra": "iterations: 38063\ncpu: 3693.539657935528 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.6246662414931774,
            "unit": "ns/iter",
            "extra": "iterations: 46426641\ncpu: 3.002086668298919 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 74669.49821778634,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 74154.59830866808 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.0144054587008986,
            "unit": "ns/iter",
            "extra": "iterations: 46428027\ncpu: 3.005499242946507 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 645.4061029391536,
            "unit": "ns/iter",
            "extra": "iterations: 217387\ncpu: 640.2512569748885 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16822.85334136688,
            "unit": "ns/iter",
            "extra": "iterations: 8444\ncpu: 16776.243486499272 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2911.4739317773874,
            "unit": "ns/iter",
            "extra": "iterations: 48713\ncpu: 2905.2799047482204 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 52189.349259617986,
            "unit": "ns/iter",
            "extra": "iterations: 2745\ncpu: 50678.761384335136 ns\nthreads: 1"
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
          "id": "755f109a0d44f277da33145af1e285da624b3fd8",
          "message": "ostream metrics example (#1312)",
          "timestamp": "2022-04-12T11:12:21-07:00",
          "tree_id": "b2e577139c4acaf1d5091a2992e92267b856bb46",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/755f109a0d44f277da33145af1e285da624b3fd8"
        },
        "date": 1649788171772,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.12866905045758398,
            "unit": "ms/iter",
            "extra": "iterations: 1053\ncpu: 0.12551566951566953 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.25616853665082884,
            "unit": "ms/iter",
            "extra": "iterations: 546\ncpu: 0.25027655677655675 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12955648121816335,
            "unit": "ms/iter",
            "extra": "iterations: 1092\ncpu: 0.12609560439560444 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.25321380026250595,
            "unit": "ms/iter",
            "extra": "iterations: 557\ncpu: 0.24810502692998204 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12755934858927925,
            "unit": "ms/iter",
            "extra": "iterations: 1102\ncpu: 0.12510825771324863 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2512931823730469,
            "unit": "ms/iter",
            "extra": "iterations: 555\ncpu: 0.24658216216216208 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.502053913317229,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 7.474647368421048 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 30.374526977539062,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 30.21822000000003 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 63.576570590683154,
            "unit": "ns/iter",
            "extra": "iterations: 2230759\ncpu: 63.03912704151367 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 380.2747405160478,
            "unit": "ns/iter",
            "extra": "iterations: 374132\ncpu: 375.3445308073087 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1203.4676090587843,
            "unit": "ns/iter",
            "extra": "iterations: 120690\ncpu: 1190.7548264147815 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 273.9231888284005,
            "unit": "ns/iter",
            "extra": "iterations: 510586\ncpu: 271.26086496692034 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1131.665793866262,
            "unit": "ns/iter",
            "extra": "iterations: 123129\ncpu: 1127.5012385384434 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.0080505559791417,
            "unit": "ns/iter",
            "extra": "iterations: 70155394\ncpu: 2.0075391494487222 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.02804925604878,
            "unit": "ns/iter",
            "extra": "iterations: 69545175\ncpu: 2.0122761931363318 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.954093147103697,
            "unit": "ns/iter",
            "extra": "iterations: 13390722\ncpu: 10.623273338061983 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.9923230439258732,
            "unit": "ns/iter",
            "extra": "iterations: 70890024\ncpu: 1.9891712831131223 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4730.724559422934,
            "unit": "ns/iter",
            "extra": "iterations: 31627\ncpu: 4432.216144433553 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.9150363513833915,
            "unit": "ns/iter",
            "extra": "iterations: 72701969\ncpu: 1.9127680021981248 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 90709.01705562648,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 90528.54393842208 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.9440665986962902,
            "unit": "ns/iter",
            "extra": "iterations: 72260675\ncpu: 1.9379102118821898 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 803.9900227414853,
            "unit": "ns/iter",
            "extra": "iterations: 173715\ncpu: 801.3948133436946 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 22561.591521442653,
            "unit": "ns/iter",
            "extra": "iterations: 6741\ncpu: 20779.69144043911 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4363.45335140586,
            "unit": "ns/iter",
            "extra": "iterations: 43398\ncpu: 3231.006037144569 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 56399.56402684389,
            "unit": "ns/iter",
            "extra": "iterations: 2530\ncpu: 56103.95256917002 ns\nthreads: 1"
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
          "id": "75c2a8f7a6bf81d9799e76804473609cc236b7be",
          "message": "Update yield logic for ARM processor (#1325)",
          "timestamp": "2022-04-12T14:33:39-07:00",
          "tree_id": "c26515fdd5b5debb2af48f98dd0d92d81ceded34",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/75c2a8f7a6bf81d9799e76804473609cc236b7be"
        },
        "date": 1649813540601,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.151770612635277,
            "unit": "ms/iter",
            "extra": "iterations: 867\ncpu: 0.14947866205305654 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.3208973533228824,
            "unit": "ms/iter",
            "extra": "iterations: 475\ncpu: 0.31537305263157894 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.15676594196969246,
            "unit": "ms/iter",
            "extra": "iterations: 916\ncpu: 0.15432183406113537 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.30031602438818467,
            "unit": "ms/iter",
            "extra": "iterations: 467\ncpu: 0.29534946466809436 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1516021600290507,
            "unit": "ms/iter",
            "extra": "iterations: 952\ncpu: 0.14936249999999995 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.3015485584226429,
            "unit": "ms/iter",
            "extra": "iterations: 468\ncpu: 0.2960333333333331 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.092678546905518,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 7.082330000000003 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 28.472137451171875,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 28.43530000000003 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 65.70698813144635,
            "unit": "ns/iter",
            "extra": "iterations: 2366392\ncpu: 60.13568335254683 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 435.1912668344673,
            "unit": "ns/iter",
            "extra": "iterations: 385011\ncpu: 361.5452545511687 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1350.2706440987943,
            "unit": "ns/iter",
            "extra": "iterations: 124595\ncpu: 1146.3846863838837 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 305.81196971223403,
            "unit": "ns/iter",
            "extra": "iterations: 548650\ncpu: 255.861842704821 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1272.4025595580601,
            "unit": "ns/iter",
            "extra": "iterations: 121469\ncpu: 1076.2359120434023 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.7181759424338083,
            "unit": "ns/iter",
            "extra": "iterations: 50586990\ncpu: 2.709882521177876 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.6333279001894163,
            "unit": "ns/iter",
            "extra": "iterations: 49318524\ncpu: 2.609682722864943 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.642687804158802,
            "unit": "ns/iter",
            "extra": "iterations: 13161235\ncpu: 10.601451915416753 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.2599755815077245,
            "unit": "ns/iter",
            "extra": "iterations: 61446090\ncpu: 2.2555544217703685 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3958.235275578303,
            "unit": "ns/iter",
            "extra": "iterations: 33104\ncpu: 3957.739246012567 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.6039123221521803,
            "unit": "ns/iter",
            "extra": "iterations: 54684296\ncpu: 2.603957816335424 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 82632.57686656478,
            "unit": "ns/iter",
            "extra": "iterations: 1747\ncpu: 82634.05838580425 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.6409376688777857,
            "unit": "ns/iter",
            "extra": "iterations: 55153721\ncpu: 2.64086261741071 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 739.6240233573205,
            "unit": "ns/iter",
            "extra": "iterations: 190308\ncpu: 739.5332828887908 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 18380.68775114803,
            "unit": "ns/iter",
            "extra": "iterations: 7421\ncpu: 18379.57148632259 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3100.2514724235393,
            "unit": "ns/iter",
            "extra": "iterations: 44449\ncpu: 3100.3059686382153 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 52566.86800515136,
            "unit": "ns/iter",
            "extra": "iterations: 2611\ncpu: 52564.458062045225 ns\nthreads: 1"
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
          "id": "29d68f1146e0082bf774685a41ad201883461d88",
          "message": "Implement Merge and Diff operation for Histogram Aggregation (#1303)",
          "timestamp": "2022-04-14T09:53:09-07:00",
          "tree_id": "c985975fc50fb1812e9f85d0c610c8e896136da4",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/29d68f1146e0082bf774685a41ad201883461d88"
        },
        "date": 1649956848016,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.23685637568928183,
            "unit": "ms/iter",
            "extra": "iterations: 764\ncpu: 0.1354687172774869 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.329226982302782,
            "unit": "ms/iter",
            "extra": "iterations: 492\ncpu: 0.29300142276422764 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.16643555183720782,
            "unit": "ms/iter",
            "extra": "iterations: 861\ncpu: 0.15251416957026714 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.33582959856305805,
            "unit": "ms/iter",
            "extra": "iterations: 392\ncpu: 0.31274107142857155 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1564937479355756,
            "unit": "ms/iter",
            "extra": "iterations: 782\ncpu: 0.14610230179028136 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2912851236347613,
            "unit": "ms/iter",
            "extra": "iterations: 451\ncpu: 0.2832031042128602 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.06989860534668,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 6.053221739130429 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 26.37948989868164,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.55518000000001 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 65.08771180758555,
            "unit": "ns/iter",
            "extra": "iterations: 2682111\ncpu: 52.79874695715427 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 455.0826043284647,
            "unit": "ns/iter",
            "extra": "iterations: 429228\ncpu: 342.40217320398483 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1317.158330525929,
            "unit": "ns/iter",
            "extra": "iterations: 121873\ncpu: 1043.9309773288587 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 295.17170963028366,
            "unit": "ns/iter",
            "extra": "iterations: 630554\ncpu: 234.55056981638378 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1055.5725564708437,
            "unit": "ns/iter",
            "extra": "iterations: 133622\ncpu: 1008.0151472062979 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.0481273237228055,
            "unit": "ns/iter",
            "extra": "iterations: 60573545\ncpu: 2.518204935834613 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.660086854885441,
            "unit": "ns/iter",
            "extra": "iterations: 53667400\ncpu: 2.728401226815534 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 11.15868999979327,
            "unit": "ns/iter",
            "extra": "iterations: 13397770\ncpu: 9.186043647562242 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.1653234522855622,
            "unit": "ns/iter",
            "extra": "iterations: 65521292\ncpu: 2.165332759311278 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3427.7070718947443,
            "unit": "ns/iter",
            "extra": "iterations: 36779\ncpu: 3424.3127871883416 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.169437081884453,
            "unit": "ns/iter",
            "extra": "iterations: 61987771\ncpu: 2.1684615825273026 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 69383.18091523304,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 69324.10932162032 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.4023821288809333,
            "unit": "ns/iter",
            "extra": "iterations: 68811623\ncpu: 2.133280594181016 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 765.7768043795164,
            "unit": "ns/iter",
            "extra": "iterations: 208206\ncpu: 660.7187112763318 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17290.58456134048,
            "unit": "ns/iter",
            "extra": "iterations: 9309\ncpu: 15137.49060049413 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3161.3707962532053,
            "unit": "ns/iter",
            "extra": "iterations: 51076\ncpu: 2724.438092254677 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 54113.776134089814,
            "unit": "ns/iter",
            "extra": "iterations: 3062\ncpu: 47811.724363161346 ns\nthreads: 1"
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
          "id": "e3304d7897fe72f628da5a567166970b103e17b6",
          "message": "fix metrics compiler warnings (#1328)",
          "timestamp": "2022-04-15T12:50:47+05:30",
          "tree_id": "6b8621d7f00361094390222c31b3fde0c93b8d95",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/e3304d7897fe72f628da5a567166970b103e17b6"
        },
        "date": 1650012052965,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.13922127810391513,
            "unit": "ms/iter",
            "extra": "iterations: 990\ncpu: 0.13642565656565656 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.28982614410223306,
            "unit": "ms/iter",
            "extra": "iterations: 517\ncpu: 0.28251547388781434 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.15065637961291972,
            "unit": "ms/iter",
            "extra": "iterations: 967\ncpu: 0.14816080661840744 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3293818169897729,
            "unit": "ms/iter",
            "extra": "iterations: 364\ncpu: 0.30017472527472533 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14106612632446947,
            "unit": "ms/iter",
            "extra": "iterations: 927\ncpu: 0.13827874865156417 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.5748721531459263,
            "unit": "ms/iter",
            "extra": "iterations: 525\ncpu: 0.3812001904761904 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.660754030401057,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.625045454545463 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 27.231645584106445,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 27.18638000000002 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 56.390881944173195,
            "unit": "ns/iter",
            "extra": "iterations: 2518547\ncpu: 56.32795417357707 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 348.19399775644473,
            "unit": "ns/iter",
            "extra": "iterations: 365581\ncpu: 346.4244586015138 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1098.722040671317,
            "unit": "ns/iter",
            "extra": "iterations: 128513\ncpu: 1096.7108385922047 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 241.5723547552814,
            "unit": "ns/iter",
            "extra": "iterations: 604707\ncpu: 241.2277350849255 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1030.6228349387109,
            "unit": "ns/iter",
            "extra": "iterations: 143057\ncpu: 1027.8923785623915 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.5350498819447145,
            "unit": "ns/iter",
            "extra": "iterations: 54338334\ncpu: 2.530184307822172 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.476485414296814,
            "unit": "ns/iter",
            "extra": "iterations: 56317178\ncpu: 2.466004244743939 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.78995863117628,
            "unit": "ns/iter",
            "extra": "iterations: 14169940\ncpu: 10.741922689863188 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.1984580681945096,
            "unit": "ns/iter",
            "extra": "iterations: 63622482\ncpu: 2.191997162260975 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4966.118344821151,
            "unit": "ns/iter",
            "extra": "iterations: 34070\ncpu: 3823.404754916349 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.3678173271238885,
            "unit": "ns/iter",
            "extra": "iterations: 54547084\ncpu: 2.5117254663879014 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 104257.71575376212,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 83307.53012048191 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.459141517577541,
            "unit": "ns/iter",
            "extra": "iterations: 55092082\ncpu: 2.511763850202649 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 895.5448705542794,
            "unit": "ns/iter",
            "extra": "iterations: 214669\ncpu: 691.44357126553 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 20909.641509766323,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 16233.765924514813 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3869.8753304729794,
            "unit": "ns/iter",
            "extra": "iterations: 47936\ncpu: 2895.4793891855816 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 54975.192762899474,
            "unit": "ns/iter",
            "extra": "iterations: 2516\ncpu: 49930.643879173265 ns\nthreads: 1"
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
        "date": 1647454396855,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 72.91286686832588,
            "unit": "ns/iter",
            "extra": "iterations: 1983000\ncpu: 70.52798789712557 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 239.9194565586444,
            "unit": "ns/iter",
            "extra": "iterations: 587000\ncpu: 236.0664395229983 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 2123.9182000014503,
            "unit": "ns/iter",
            "extra": "iterations: 75000\ncpu: 1842.546666666666 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 115638354.99998732,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1245300.0000000047 ns\nthreads: 1"
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
        "date": 1647457744226,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 71.58538830042654,
            "unit": "ns/iter",
            "extra": "iterations: 1983000\ncpu: 70.464447806354 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 307.1818071312098,
            "unit": "ns/iter",
            "extra": "iterations: 617000\ncpu: 231.58670988654782 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 2491.925753244462,
            "unit": "ns/iter",
            "extra": "iterations: 77000\ncpu: 1814.1818181818185 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 146521073.29998216,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1411600.0000000016 ns\nthreads: 1"
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
        "date": 1647464780881,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 69.51222742809024,
            "unit": "ns/iter",
            "extra": "iterations: 2049000\ncpu: 67.63738408979991 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 229.83355500793417,
            "unit": "ns/iter",
            "extra": "iterations: 609000\ncpu: 229.20853858784898 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1855.9391200021005,
            "unit": "ns/iter",
            "extra": "iterations: 75000\ncpu: 1817.1866666666667 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 55710585.9000103,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1099200.0000000114 ns\nthreads: 1"
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
        "date": 1647468223968,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 70.33757946193833,
            "unit": "ns/iter",
            "extra": "iterations: 2045000\ncpu: 69.05867970660147 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 250.14520259292686,
            "unit": "ns/iter",
            "extra": "iterations: 617000\ncpu: 228.80875202593194 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1891.4627692316947,
            "unit": "ns/iter",
            "extra": "iterations: 78000\ncpu: 1805.2307692307684 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 55231142.00000236,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1411099.9999999986 ns\nthreads: 1"
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
        "date": 1647471844599,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 68.79045982156553,
            "unit": "ns/iter",
            "extra": "iterations: 2016000\ncpu: 68.55257936507937 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 227.8930496788398,
            "unit": "ns/iter",
            "extra": "iterations: 624000\ncpu: 225.73717948717947 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1823.3167435867542,
            "unit": "ns/iter",
            "extra": "iterations: 78000\ncpu: 1789.1025641025649 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 55088970.27351088,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 1125452.991452991 ns\nthreads: 1"
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
        "date": 1647475426182,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 70.42130691577057,
            "unit": "ns/iter",
            "extra": "iterations: 1981000\ncpu: 70.00100959111562 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 235.24042689048258,
            "unit": "ns/iter",
            "extra": "iterations: 595000\ncpu: 227.2218487394958 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 2028.9851688305914,
            "unit": "ns/iter",
            "extra": "iterations: 77000\ncpu: 1806.3506493506497 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 81125783.70000847,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1329900.000000006 ns\nthreads: 1"
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
        "date": 1647483916792,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 1073.9651796117319,
            "unit": "ns/iter",
            "extra": "iterations: 1442000\ncpu: 202.04923717059643 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 1019.707667838304,
            "unit": "ns/iter",
            "extra": "iterations: 569000\ncpu: 235.10544815465724 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 3541.158471430858,
            "unit": "ns/iter",
            "extra": "iterations: 70000\ncpu: 1954.5571428571416 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 410217461.90001523,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1200499.9999999932 ns\nthreads: 1"
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
        "date": 1647487482178,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 70.94173843067439,
            "unit": "ns/iter",
            "extra": "iterations: 1988000\ncpu: 70.61116700201208 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 231.0290807250699,
            "unit": "ns/iter",
            "extra": "iterations: 607000\ncpu: 230.7528830313014 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1940.2976133339203,
            "unit": "ns/iter",
            "extra": "iterations: 75000\ncpu: 1887.973333333334 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 64383029.09998584,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1500399.9999999907 ns\nthreads: 1"
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
        "date": 1647490013936,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 70.14554095140038,
            "unit": "ns/iter",
            "extra": "iterations: 2039000\ncpu: 69.23786169691023 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 234.81436875995394,
            "unit": "ns/iter",
            "extra": "iterations: 621000\ncpu: 227.1046698872786 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 2001.977445947764,
            "unit": "ns/iter",
            "extra": "iterations: 74000\ncpu: 1882.9864864864865 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 57683391.29999731,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1283599.9999999958 ns\nthreads: 1"
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
        "date": 1647494133810,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 73.45447587589196,
            "unit": "ns/iter",
            "extra": "iterations: 1969000\ncpu: 69.30167597765363 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 232.72255685639226,
            "unit": "ns/iter",
            "extra": "iterations: 598000\ncpu: 228.89799331103683 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1820.3953589725131,
            "unit": "ns/iter",
            "extra": "iterations: 78000\ncpu: 1804.0769230769238 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 147330103.10001191,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1419300.0000000012 ns\nthreads: 1"
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
        "date": 1647497399341,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 74.07057996929375,
            "unit": "ns/iter",
            "extra": "iterations: 1957000\ncpu: 72.8870720490547 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 251.12154861083192,
            "unit": "ns/iter",
            "extra": "iterations: 576000\ncpu: 246.29166666666666 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1862.9868399996972,
            "unit": "ns/iter",
            "extra": "iterations: 75000\ncpu: 1795.2133333333334 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 69309107.79999521,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1193699.9999999977 ns\nthreads: 1"
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
        "date": 1647501020571,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 69.20000442471866,
            "unit": "ns/iter",
            "extra": "iterations: 2034000\ncpu: 68.70452310717798 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 228.1561790324861,
            "unit": "ns/iter",
            "extra": "iterations: 620000\ncpu: 227.61935483870963 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1818.7069870148298,
            "unit": "ns/iter",
            "extra": "iterations: 77000\ncpu: 1816.064935064935 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 51173088.699988514,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 970199.9999999988 ns\nthreads: 1"
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
        "date": 1647504146460,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 69.54334670630364,
            "unit": "ns/iter",
            "extra": "iterations: 2019000\ncpu: 69.44626052501238 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 232.1197321127114,
            "unit": "ns/iter",
            "extra": "iterations: 601000\ncpu: 230.25956738768718 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1808.2287088654532,
            "unit": "ns/iter",
            "extra": "iterations: 79000\ncpu: 1796.506329113924 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 50360966.20001445,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1077600.0000000119 ns\nthreads: 1"
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
        "date": 1647508099036,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 76.12881420773527,
            "unit": "ns/iter",
            "extra": "iterations: 2013000\ncpu: 70.1465474416294 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 231.0483486839207,
            "unit": "ns/iter",
            "extra": "iterations: 608000\ncpu: 228.47368421052627 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1880.1685974048942,
            "unit": "ns/iter",
            "extra": "iterations: 77000\ncpu: 1860.0649350649344 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 69469862.00000538,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1301299.999999994 ns\nthreads: 1"
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
        "date": 1647511866575,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 184.3414060233361,
            "unit": "ns/iter",
            "extra": "iterations: 1793000\ncpu: 76.7027328499721 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 337.597428571672,
            "unit": "ns/iter",
            "extra": "iterations: 497000\ncpu: 276.0724346076459 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 5234.119985506486,
            "unit": "ns/iter",
            "extra": "iterations: 69000\ncpu: 2003.7971014492762 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 59998777.50000451,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1686699.9999999856 ns\nthreads: 1"
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
        "date": 1647515798214,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 72.26780316169159,
            "unit": "ns/iter",
            "extra": "iterations: 1961000\ncpu: 70.54513003569609 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 234.39663527396178,
            "unit": "ns/iter",
            "extra": "iterations: 584000\ncpu: 233.81506849315068 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1858.8331081077372,
            "unit": "ns/iter",
            "extra": "iterations: 74000\ncpu: 1855.8918918918919 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 59394285.60000124,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1334199.9999999965 ns\nthreads: 1"
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
        "date": 1647518993685,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 85.73393862817251,
            "unit": "ns/iter",
            "extra": "iterations: 1939000\ncpu: 82.80453842186692 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 249.30779277547668,
            "unit": "ns/iter",
            "extra": "iterations: 526000\ncpu: 236.71102661596962 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 2054.030623377038,
            "unit": "ns/iter",
            "extra": "iterations: 77000\ncpu: 1988.2597402597394 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 197646287.20001838,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1547100.0000000123 ns\nthreads: 1"
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
        "date": 1647524010196,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 71.05510918977002,
            "unit": "ns/iter",
            "extra": "iterations: 2024000\ncpu: 69.81373517786561 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 231.30333500854215,
            "unit": "ns/iter",
            "extra": "iterations: 597000\ncpu: 229.1926298157454 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1859.7915822790096,
            "unit": "ns/iter",
            "extra": "iterations: 79000\ncpu: 1828.5189873417721 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 60677793.30001031,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1430999.9999999935 ns\nthreads: 1"
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
        "date": 1647534224277,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 68.34986379059771,
            "unit": "ns/iter",
            "extra": "iterations: 2063000\ncpu: 67.96122152205525 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 279.20403986671016,
            "unit": "ns/iter",
            "extra": "iterations: 602000\ncpu: 236.79568106312288 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1833.0059487174692,
            "unit": "ns/iter",
            "extra": "iterations: 78000\ncpu: 1791.833333333333 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 154895230.7000036,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1180300.0000000007 ns\nthreads: 1"
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
        "date": 1647538126091,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 71.91274201596697,
            "unit": "ns/iter",
            "extra": "iterations: 2004000\ncpu: 70.10079840319361 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 246.0250307692157,
            "unit": "ns/iter",
            "extra": "iterations: 585000\ncpu: 238.12649572649568 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 2096.214089743416,
            "unit": "ns/iter",
            "extra": "iterations: 78000\ncpu: 1855.2307692307693 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 57804547.00000064,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1417699.9999999884 ns\nthreads: 1"
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
        "date": 1647540631194,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 95.60583480985783,
            "unit": "ns/iter",
            "extra": "iterations: 1919000\ncpu: 71.88118811881188 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 331.1394859649322,
            "unit": "ns/iter",
            "extra": "iterations: 570000\ncpu: 238.21228070175445 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 3583.661853332766,
            "unit": "ns/iter",
            "extra": "iterations: 75000\ncpu: 2507.5599999999995 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 428517971.59999025,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1724399.9999999925 ns\nthreads: 1"
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
        "date": 1647544670580,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 69.94447597606667,
            "unit": "ns/iter",
            "extra": "iterations: 1998000\ncpu: 69.72022022022023 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 229.7244256002159,
            "unit": "ns/iter",
            "extra": "iterations: 625000\ncpu: 229.408 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1871.6678356176003,
            "unit": "ns/iter",
            "extra": "iterations: 73000\ncpu: 1812.4520547945208 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 65325449.39998388,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1320199.9999999937 ns\nthreads: 1"
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
        "date": 1647547935899,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 72.72029613009994,
            "unit": "ns/iter",
            "extra": "iterations: 1783000\ncpu: 72.34548513740884 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 318.8132495783262,
            "unit": "ns/iter",
            "extra": "iterations: 593000\ncpu: 262.0033726812815 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 2174.8767397259317,
            "unit": "ns/iter",
            "extra": "iterations: 73000\ncpu: 1959.0410958904097 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 140398682.8000143,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1449099.999999992 ns\nthreads: 1"
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
        "date": 1647551044884,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 67.40336702123615,
            "unit": "ns/iter",
            "extra": "iterations: 2068000\ncpu: 67.27272727272728 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 227.0713201267314,
            "unit": "ns/iter",
            "extra": "iterations: 631000\ncpu: 224.5625990491284 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1768.5455731691213,
            "unit": "ns/iter",
            "extra": "iterations: 82000\ncpu: 1765.2317073170727 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 69927698.59998588,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 963400.0000000031 ns\nthreads: 1"
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
          "id": "31d888a540c00e03fd430c724a15420ef3281e78",
          "message": "Enable metric collection from MetricReader (#1241)",
          "timestamp": "2022-03-17T18:15:35-07:00",
          "tree_id": "1fe56a5fd8cec65eab979e5fd25a9866de69ef4d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/31d888a540c00e03fd430c724a15420ef3281e78"
        },
        "date": 1647636618531,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 28.74167589649881,
            "unit": "ns/iter",
            "extra": "iterations: 4939000\ncpu: 28.65920226766552 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 80.91855241185091,
            "unit": "ns/iter",
            "extra": "iterations: 1738000\ncpu: 80.79902186421175 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 688.0510421026321,
            "unit": "ns/iter",
            "extra": "iterations: 210000\ncpu: 687.3800000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2483481.205768467,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 448591.6149068324 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ec1b596fde0a2d443f5d730bcd14384b68c68e9",
          "message": "Bump actions/cache from 2 to 3 (#1277)",
          "timestamp": "2022-03-22T18:27:20+01:00",
          "tree_id": "9bdf4515d8c5ba0079d9d0f961a26912f59a5b4f",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/6ec1b596fde0a2d443f5d730bcd14384b68c68e9"
        },
        "date": 1647974306022,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 34.97713796593565,
            "unit": "ns/iter",
            "extra": "iterations: 3895000\ncpu: 34.96623876765084 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 97.69226642365152,
            "unit": "ns/iter",
            "extra": "iterations: 1410000\ncpu: 96.89219858156031 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 730.7326540033868,
            "unit": "ns/iter",
            "extra": "iterations: 188000\ncpu: 729.5765957446812 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2443578.6034563463,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 424679.85611510824 ns\nthreads: 1"
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
          "id": "b5155a5dea3a8816d1d0aa3f513d6a5c13245d9b",
          "message": " Add owent as an Approver (#1276)\n\n* add owent as reviewer\r\n\r\n* fix order",
          "timestamp": "2022-03-23T08:06:46-07:00",
          "tree_id": "87d7621ac28ba57d5748930eb19560dd42849fbf",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/b5155a5dea3a8816d1d0aa3f513d6a5c13245d9b"
        },
        "date": 1648050370095,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.610755533349554,
            "unit": "ns/iter",
            "extra": "iterations: 4435000\ncpu: 31.57217587373168 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 95.85868480593659,
            "unit": "ns/iter",
            "extra": "iterations: 1505000\ncpu: 93.19295681063124 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 738.2179561414217,
            "unit": "ns/iter",
            "extra": "iterations: 190000\ncpu: 736.583157894737 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1895224.8504807276,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 344150.55248618795 ns\nthreads: 1"
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
          "distinct": false,
          "id": "0c9aecea7af2f3f835f79397feb1436f8d51cc25",
          "message": "Disable benchmark action failure (#1284)",
          "timestamp": "2022-03-24T16:45:38+01:00",
          "tree_id": "a113fc6f58ec10b3a7dbd69d14b5baa94e19f8ad",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/0c9aecea7af2f3f835f79397feb1436f8d51cc25"
        },
        "date": 1648139465928,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.422295304988403,
            "unit": "ns/iter",
            "extra": "iterations: 4456000\ncpu: 31.415260323159785 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 92.59432161074515,
            "unit": "ns/iter",
            "extra": "iterations: 1516000\ncpu: 92.48660949868074 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 738.9545440673828,
            "unit": "ns/iter",
            "extra": "iterations: 190000\ncpu: 738.8973684210524 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1581325.4321795052,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 352680.82901554403 ns\nthreads: 1"
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
          "distinct": false,
          "id": "3c7b44bf4f7a615364b78d4449eaa5f7ac121249",
          "message": "metrics exemplar round 1 (#1264)",
          "timestamp": "2022-03-24T22:31:41+01:00",
          "tree_id": "c5847c4090ac2472cf9eb12e045cce3e0ff2af9e",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/3c7b44bf4f7a615364b78d4449eaa5f7ac121249"
        },
        "date": 1648161135990,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 27.89140104890227,
            "unit": "ns/iter",
            "extra": "iterations: 5005000\ncpu: 27.886373626373626 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 92.48906342440812,
            "unit": "ns/iter",
            "extra": "iterations: 1512000\ncpu: 92.43353174603176 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 687.8411068635828,
            "unit": "ns/iter",
            "extra": "iterations: 204000\ncpu: 687.5387254901964 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1821938.6206732856,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 313351.33333333355 ns\nthreads: 1"
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
          "id": "91b05720ef38bcd065e1ebb8c9c857764d8d0e3b",
          "message": "fix compilation error with protobuf 3.5 (#1289)",
          "timestamp": "2022-03-25T17:40:21+01:00",
          "tree_id": "c875ed27837cc5d253823727efbff74ccac4ba16",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/91b05720ef38bcd065e1ebb8c9c857764d8d0e3b"
        },
        "date": 1648240102137,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.923531462706208,
            "unit": "ns/iter",
            "extra": "iterations: 4660000\ncpu: 31.581781115879828 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 87.59003765178177,
            "unit": "ns/iter",
            "extra": "iterations: 1590000\ncpu: 87.45477987421381 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 699.9065136087352,
            "unit": "ns/iter",
            "extra": "iterations: 203000\ncpu: 697.8783251231528 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2691348.664996567,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 482700.34129692824 ns\nthreads: 1"
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
          "id": "c1b959079bd6ae03183f54f246017aa1be5c706b",
          "message": "Fix span SetAttribute crash (#1283)",
          "timestamp": "2022-03-26T08:25:42Z",
          "tree_id": "13862d3814fa9d6f4edac4cef175701f1d00d248",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/c1b959079bd6ae03183f54f246017aa1be5c706b"
        },
        "date": 1648290915964,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.87152472409335,
            "unit": "ns/iter",
            "extra": "iterations: 4400000\ncpu: 31.844295454545456 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 93.16546350203029,
            "unit": "ns/iter",
            "extra": "iterations: 1506000\ncpu: 92.95909694555115 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 740.6598643252725,
            "unit": "ns/iter",
            "extra": "iterations: 190000\ncpu: 739.5936842105266 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2058698.6046332817,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 367929.8701298699 ns\nthreads: 1"
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
          "id": "a7e814a632fdaee0c76246358ffad811ac06a7e9",
          "message": "Synchronous Metric collection (Delta , Cumulative) (#1265)",
          "timestamp": "2022-03-30T01:01:37Z",
          "tree_id": "c0d9fb9e062e573ec2d6d2d5369689eaed72408c",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/a7e814a632fdaee0c76246358ffad811ac06a7e9"
        },
        "date": 1648663134241,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 34.08526160827119,
            "unit": "ns/iter",
            "extra": "iterations: 4244000\ncpu: 34.01364278982092 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 97.76664106813196,
            "unit": "ns/iter",
            "extra": "iterations: 1460000\ncpu: 97.58534246575343 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 751.0945603654192,
            "unit": "ns/iter",
            "extra": "iterations: 185000\ncpu: 749.9967567567563 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2349371.152208341,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 421969.2052980133 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76c664a20b8219b91ead69ded6b7ee873b1a85ba",
          "message": "Rename `http_client_curl` to `opentelemetry_http_client_curl` (#1301)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-03-31T11:51:26-07:00",
          "tree_id": "e2f6346906aa6f84e0ce077d65078685ead26980",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/76c664a20b8219b91ead69ded6b7ee873b1a85ba"
        },
        "date": 1648754177262,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 46.644813646615404,
            "unit": "ns/iter",
            "extra": "iterations: 4129000\ncpu: 36.75199806248487 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 142.9589255817648,
            "unit": "ns/iter",
            "extra": "iterations: 1334000\ncpu: 105.85944527736135 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1095.8611965179443,
            "unit": "ns/iter",
            "extra": "iterations: 168000\ncpu: 821.6886904761905 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2684863.6689733285,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 500869.8360655738 ns\nthreads: 1"
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
          "id": "33d9c628f2e7029b6b92733df69336f7e384c7e4",
          "message": "Implement periodic exporting metric reader (#1286)",
          "timestamp": "2022-04-01T14:07:44-07:00",
          "tree_id": "08bc3c6b0d5e345e481dfc903e1c4ae1147d2c38",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/33d9c628f2e7029b6b92733df69336f7e384c7e4"
        },
        "date": 1648888379977,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 37.92519998174749,
            "unit": "ns/iter",
            "extra": "iterations: 3681000\ncpu: 37.87883727248031 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 111.78352045670651,
            "unit": "ns/iter",
            "extra": "iterations: 1254000\ncpu: 111.50781499202554 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 885.3621452859363,
            "unit": "ns/iter",
            "extra": "iterations: 159000\ncpu: 884.7295597484278 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2151934.0269746836,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 393781.28654970776 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "237a0b26372b8a75ae941272b78bc07f12692c7b",
          "message": "Excempt should be applied on issue instead of PR (#1316)",
          "timestamp": "2022-04-04T20:41:02-07:00",
          "tree_id": "2d6d0e656fc5dfad523d31bfef3949ed51344b5b",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/237a0b26372b8a75ae941272b78bc07f12692c7b"
        },
        "date": 1649174062972,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 34.2498443855097,
            "unit": "ns/iter",
            "extra": "iterations: 4003000\ncpu: 34.24798900824382 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 95.14402081185315,
            "unit": "ns/iter",
            "extra": "iterations: 1398000\ncpu: 95.12825464949931 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 770.3253831812945,
            "unit": "ns/iter",
            "extra": "iterations: 189000\ncpu: 770.1037037037037 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1849861.0301190112,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 432200.0000000001 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71329856+benlandrum@users.noreply.github.com",
            "name": "Ben Landrum",
            "username": "benlandrum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "3122254e8238738d74f78130817b090a8fdc0a9a",
          "message": "Remove implicitly deleted default constructor (#1267)\n\nCo-authored-by: Tom Tan <Tom.Tan@microsoft.com>\r\nCo-authored-by: Lalit Kumar Bhasin <lalit_fin@yahoo.com>",
          "timestamp": "2022-04-07T10:02:11-07:00",
          "tree_id": "46ac29c32e449bf28f39f4ff841d32efae30ce24",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/3122254e8238738d74f78130817b090a8fdc0a9a"
        },
        "date": 1649439460675,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 38.052470791924456,
            "unit": "ns/iter",
            "extra": "iterations: 3691000\ncpu: 37.995475480899486 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 111.41194405533055,
            "unit": "ns/iter",
            "extra": "iterations: 1262000\ncpu: 110.91957210776545 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 887.7673239078161,
            "unit": "ns/iter",
            "extra": "iterations: 159000\ncpu: 885.4899371069187 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2603320.5144545613,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 403808.6687306503 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "e200c1f183ab1340448b0992e96054f5aa591f46",
          "message": "Bump actions/stale from 4 to 5 (#1323)",
          "timestamp": "2022-04-11T07:55:15-07:00",
          "tree_id": "7dcecc3fc7868dd3e9f82b71a8f69effcbfbb23d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/e200c1f183ab1340448b0992e96054f5aa591f46"
        },
        "date": 1649780148003,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 28.083294373596814,
            "unit": "ns/iter",
            "extra": "iterations: 4997000\ncpu: 28.001440864518717 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 89.55187928729994,
            "unit": "ns/iter",
            "extra": "iterations: 1563000\ncpu: 89.13985924504159 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 687.8376007080078,
            "unit": "ns/iter",
            "extra": "iterations: 204000\ncpu: 685.7348039215686 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1711545.0997389,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 294092.55725190835 ns\nthreads: 1"
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
          "id": "755f109a0d44f277da33145af1e285da624b3fd8",
          "message": "ostream metrics example (#1312)",
          "timestamp": "2022-04-12T11:12:21-07:00",
          "tree_id": "b2e577139c4acaf1d5091a2992e92267b856bb46",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/755f109a0d44f277da33145af1e285da624b3fd8"
        },
        "date": 1649788171478,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 37.05274617935185,
            "unit": "ns/iter",
            "extra": "iterations: 3759000\ncpu: 37.043602021814316 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 108.56335813348943,
            "unit": "ns/iter",
            "extra": "iterations: 1320000\ncpu: 108.55719696969699 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 861.0737176589024,
            "unit": "ns/iter",
            "extra": "iterations: 162000\ncpu: 861.0277777777778 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1668791.4226832015,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 389681.1797752808 ns\nthreads: 1"
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
          "id": "75c2a8f7a6bf81d9799e76804473609cc236b7be",
          "message": "Update yield logic for ARM processor (#1325)",
          "timestamp": "2022-04-12T14:33:39-07:00",
          "tree_id": "c26515fdd5b5debb2af48f98dd0d92d81ceded34",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/75c2a8f7a6bf81d9799e76804473609cc236b7be"
        },
        "date": 1649813541668,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 37.1827367292847,
            "unit": "ns/iter",
            "extra": "iterations: 3657000\ncpu: 37.01279737489747 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 105.24272918701172,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 104.99240000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 812.2540084568001,
            "unit": "ns/iter",
            "extra": "iterations: 169000\ncpu: 807.7213017751476 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 3178156.3392052283,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 516596.53846153856 ns\nthreads: 1"
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
          "id": "29d68f1146e0082bf774685a41ad201883461d88",
          "message": "Implement Merge and Diff operation for Histogram Aggregation (#1303)",
          "timestamp": "2022-04-14T09:53:09-07:00",
          "tree_id": "c985975fc50fb1812e9f85d0c610c8e896136da4",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/29d68f1146e0082bf774685a41ad201883461d88"
        },
        "date": 1649956847396,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 32.251357568602685,
            "unit": "ns/iter",
            "extra": "iterations: 4114000\ncpu: 32.128366553232865 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 94.761464638079,
            "unit": "ns/iter",
            "extra": "iterations: 1466000\ncpu: 94.6074351978172 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 860.3358268737793,
            "unit": "ns/iter",
            "extra": "iterations: 200000\ncpu: 747.2765000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2557876.240855028,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 473271.30801687774 ns\nthreads: 1"
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
        "date": 1647457747066,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 50695872.53844404,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 31819153.846153848 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 300.1595666559261,
            "unit": "ns/iter",
            "extra": "iterations: 495680\ncpu: 283.11814073595866 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.791934405054478,
            "unit": "ns/iter",
            "extra": "iterations: 72340206\ncpu: 1.7809736400252993 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.116597792201255,
            "unit": "ns/iter",
            "extra": "iterations: 76586433\ncpu: 1.8604208920397172 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 301.44697388525594,
            "unit": "ns/iter",
            "extra": "iterations: 551681\ncpu: 271.04975520273484 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 350.7890367716009,
            "unit": "ns/iter",
            "extra": "iterations: 432099\ncpu: 324.754280847676 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 49.52675430980503,
            "unit": "ns/iter",
            "extra": "iterations: 2980118\ncpu: 46.94176539318243 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 52.44081943665026,
            "unit": "ns/iter",
            "extra": "iterations: 2989664\ncpu: 47.0300341443052 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 56.69124915200443,
            "unit": "ns/iter",
            "extra": "iterations: 2696093\ncpu: 51.95814832796943 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 36.78752427165816,
            "unit": "ns/iter",
            "extra": "iterations: 4355401\ncpu: 32.09945536587793 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 3906.2921529657797,
            "unit": "ns/iter",
            "extra": "iterations: 72486\ncpu: 2042.408189167562 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2308.402408045858,
            "unit": "ns/iter",
            "extra": "iterations: 71261\ncpu: 1971.1202481020462 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6649751.119998655,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 81509.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7771827.530000337,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 133180 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5978384.510003707,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 175179.9999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3230660.958000044,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 104866.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3129181.885382108,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 295873.75415282394 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4886975.013698546,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 517572.6027397258 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 140.88047201620526,
            "unit": "ns/iter",
            "extra": "iterations: 1024965\ncpu: 136.21148039201339 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.913036869131731,
            "unit": "ns/iter",
            "extra": "iterations: 26478543\ncpu: 5.253725629843 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.694024985019923,
            "unit": "ns/iter",
            "extra": "iterations: 25418497\ncpu: 5.546236663796446 ns\nthreads: 1"
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
        "date": 1647464746990,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 31811027.454554364,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 21172818.181818184 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 282.5781254123243,
            "unit": "ns/iter",
            "extra": "iterations: 492663\ncpu: 279.9093903946511 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.030874696821229,
            "unit": "ns/iter",
            "extra": "iterations: 78159893\ncpu: 1.920793315313264 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.9818286537907925,
            "unit": "ns/iter",
            "extra": "iterations: 76640937\ncpu: 1.8323497271438631 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 280.2414076032295,
            "unit": "ns/iter",
            "extra": "iterations: 481414\ncpu: 262.60557441204446 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 530.5215105096089,
            "unit": "ns/iter",
            "extra": "iterations: 439878\ncpu: 325.7675991979595 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 54.63056727489621,
            "unit": "ns/iter",
            "extra": "iterations: 3017567\ncpu: 47.137644333994885 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 51.4991523074473,
            "unit": "ns/iter",
            "extra": "iterations: 3044736\ncpu: 46.73935605582885 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 60.33803328797614,
            "unit": "ns/iter",
            "extra": "iterations: 2789956\ncpu: 50.1606476948024 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 31.607424544543132,
            "unit": "ns/iter",
            "extra": "iterations: 4703669\ncpu: 29.56925753066383 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2473.340897208259,
            "unit": "ns/iter",
            "extra": "iterations: 66941\ncpu: 2109.5591640399757 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2328.2857957107626,
            "unit": "ns/iter",
            "extra": "iterations: 68423\ncpu: 2040.7757625359877 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5722060.919999876,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 81850.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8119884.789999788,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 110320 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5495257.520000223,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 203269.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3372646.560000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 80467.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2263255.6321322024,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 97370.1201201201 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2466159.436406092,
            "unit": "ns/iter",
            "extra": "iterations: 857\ncpu: 164129.5215869311 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 164.72009463259104,
            "unit": "ns/iter",
            "extra": "iterations: 1027976\ncpu: 141.44299088694677 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.724433815992427,
            "unit": "ns/iter",
            "extra": "iterations: 27581316\ncpu: 5.10022799492236 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.2261646088256395,
            "unit": "ns/iter",
            "extra": "iterations: 27223583\ncpu: 5.132902601395267 ns\nthreads: 1"
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
        "date": 1647468224688,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 245322508.39997688,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 23003500 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 3782.4748512684437,
            "unit": "ns/iter",
            "extra": "iterations: 442408\ncpu: 328.45925028480497 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.0574581060800234,
            "unit": "ns/iter",
            "extra": "iterations: 69200732\ncpu: 2.013446909781243 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.1466469749507904,
            "unit": "ns/iter",
            "extra": "iterations: 69617106\ncpu: 2.0338535761598595 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 361.07084115421065,
            "unit": "ns/iter",
            "extra": "iterations: 502928\ncpu: 276.10711672446155 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 369.2026740969746,
            "unit": "ns/iter",
            "extra": "iterations: 413822\ncpu: 331.31636307397855 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 52.17281300705533,
            "unit": "ns/iter",
            "extra": "iterations: 2854056\ncpu: 49.09153849819344 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 92.07236130543713,
            "unit": "ns/iter",
            "extra": "iterations: 2835673\ncpu: 51.192080328020914 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 81.78517468858966,
            "unit": "ns/iter",
            "extra": "iterations: 2696456\ncpu: 51.78686394289397 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 45.3393372183771,
            "unit": "ns/iter",
            "extra": "iterations: 4566210\ncpu: 29.302638293026376 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2449.5405182187174,
            "unit": "ns/iter",
            "extra": "iterations: 69006\ncpu: 2075.949917398488 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2234.123712689977,
            "unit": "ns/iter",
            "extra": "iterations: 68651\ncpu: 2038.5282078920923 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6115292.679996856,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 99960 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8283202.600000549,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 128350 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5803546.490001282,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 214199.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3558124.3389997324,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 112168 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2327359.5435355725,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 112092.3482849604 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2284636.292682901,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 156965.8536585366 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 136.0274192666676,
            "unit": "ns/iter",
            "extra": "iterations: 1026468\ncpu: 135.48206081436538 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 6.345174960081877,
            "unit": "ns/iter",
            "extra": "iterations: 27412281\ncpu: 5.104974664457875 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.364960659855472,
            "unit": "ns/iter",
            "extra": "iterations: 27117594\ncpu: 5.199502581239324 ns\nthreads: 1"
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
        "date": 1647471844967,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 30377124.200003892,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 23533999.999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 317.42441191624386,
            "unit": "ns/iter",
            "extra": "iterations: 492022\ncpu: 286.5705192044258 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.250809168120993,
            "unit": "ns/iter",
            "extra": "iterations: 69530668\ncpu: 2.0266596604537153 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.137217472020364,
            "unit": "ns/iter",
            "extra": "iterations: 69472013\ncpu: 2.0141923914022763 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 308.190418283366,
            "unit": "ns/iter",
            "extra": "iterations: 527943\ncpu: 275.3005532794258 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 388.0276261722764,
            "unit": "ns/iter",
            "extra": "iterations: 406209\ncpu: 343.42173610136655 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 49.51623141805067,
            "unit": "ns/iter",
            "extra": "iterations: 3163556\ncpu: 44.350092111535275 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 49.32357578646477,
            "unit": "ns/iter",
            "extra": "iterations: 3159059\ncpu: 44.248936154722074 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 65.39085762894379,
            "unit": "ns/iter",
            "extra": "iterations: 2809665\ncpu: 49.60555795797712 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 37.547315986740784,
            "unit": "ns/iter",
            "extra": "iterations: 4753013\ncpu: 29.630257691279194 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2292.644087076675,
            "unit": "ns/iter",
            "extra": "iterations: 71200\ncpu: 2035.2949438202227 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2221.7937946596594,
            "unit": "ns/iter",
            "extra": "iterations: 68296\ncpu: 2043.7946585451534 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5972716.810001657,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 96899.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8656474.549998166,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 124850 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5590545.619998011,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 236930 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3195189.401999869,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 85357 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2285635.593794988,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 100978.35497835498 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2587246.791666703,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 173577.38095238092 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 148.63843176484926,
            "unit": "ns/iter",
            "extra": "iterations: 1021301\ncpu: 146.31435786315686 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 7.913275532965926,
            "unit": "ns/iter",
            "extra": "iterations: 27064646\ncpu: 5.596895669723519 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.493255566560723,
            "unit": "ns/iter",
            "extra": "iterations: 26507119\ncpu: 5.240554433697603 ns\nthreads: 1"
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
        "date": 1647475428370,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 36581668.36362398,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 21438999.999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 550.3658771978511,
            "unit": "ns/iter",
            "extra": "iterations: 493201\ncpu: 343.0122809969972 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.8997627647348583,
            "unit": "ns/iter",
            "extra": "iterations: 80686992\ncpu: 1.8580566245424042 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.8625190676230567,
            "unit": "ns/iter",
            "extra": "iterations: 75524626\ncpu: 1.8148120323032124 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 269.518689897993,
            "unit": "ns/iter",
            "extra": "iterations: 536172\ncpu: 266.5711749214803 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 343.14252594237496,
            "unit": "ns/iter",
            "extra": "iterations: 429606\ncpu: 327.2626546184181 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 64.08281941964904,
            "unit": "ns/iter",
            "extra": "iterations: 3174171\ncpu: 45.00041113096933 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 47.964252319120035,
            "unit": "ns/iter",
            "extra": "iterations: 3164485\ncpu: 43.9733479539325 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 73.45592867554193,
            "unit": "ns/iter",
            "extra": "iterations: 2895613\ncpu: 48.99791512194478 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 38.82594513443358,
            "unit": "ns/iter",
            "extra": "iterations: 4750594\ncpu: 29.341383414368813 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2105.25457928017,
            "unit": "ns/iter",
            "extra": "iterations: 69334\ncpu: 1963.5676580032914 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1951.3168216489325,
            "unit": "ns/iter",
            "extra": "iterations: 73019\ncpu: 1923.0474260124086 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6401903.309997579,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 81059.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8789931.38000169,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 107809.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5639722.959999745,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 190869.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3149305.8680002834,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 75052 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2285816.6139999414,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 97994.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2284748.9245064515,
            "unit": "ns/iter",
            "extra": "iterations: 861\ncpu: 154845.5284552846 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 153.14564851657246,
            "unit": "ns/iter",
            "extra": "iterations: 1000429\ncpu: 138.46060040242736 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.261181858343159,
            "unit": "ns/iter",
            "extra": "iterations: 26596250\ncpu: 5.207012266766932 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.205067454106835,
            "unit": "ns/iter",
            "extra": "iterations: 26942247\ncpu: 5.17885534937008 ns\nthreads: 1"
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
        "date": 1647483917680,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 30926713.636373196,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 23443363.63636364 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 311.4813518571753,
            "unit": "ns/iter",
            "extra": "iterations: 487448\ncpu: 284.3770002133561 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.0541766218484074,
            "unit": "ns/iter",
            "extra": "iterations: 68080140\ncpu: 1.9244966300010542 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.317883730360978,
            "unit": "ns/iter",
            "extra": "iterations: 69544484\ncpu: 1.962226076765484 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 357.663109460047,
            "unit": "ns/iter",
            "extra": "iterations: 499643\ncpu: 281.1987759260111 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 426.96747128771364,
            "unit": "ns/iter",
            "extra": "iterations: 401307\ncpu: 350.0113379532377 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 53.95333088402876,
            "unit": "ns/iter",
            "extra": "iterations: 3146492\ncpu: 44.56010058185433 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 73.66783846367916,
            "unit": "ns/iter",
            "extra": "iterations: 3122839\ncpu: 44.68273900767863 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 62.61381662268606,
            "unit": "ns/iter",
            "extra": "iterations: 2865447\ncpu: 49.598544310887654 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 39.99184855046416,
            "unit": "ns/iter",
            "extra": "iterations: 4738053\ncpu: 29.798526947672425 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2565.483459254756,
            "unit": "ns/iter",
            "extra": "iterations: 66442\ncpu: 2151.9069263417673 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2517.2343338744963,
            "unit": "ns/iter",
            "extra": "iterations: 67630\ncpu: 2120.153777909212 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6485193.56000179,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 82980 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7523374.409997813,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 112169.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5407582.600000751,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 213909.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3388338.981000061,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 80803.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2540569.8509998727,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 105404.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2299349.0775371627,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 160860.88939566698 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 142.5394768476015,
            "unit": "ns/iter",
            "extra": "iterations: 1010757\ncpu: 139.65671274104457 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 11.586613430411829,
            "unit": "ns/iter",
            "extra": "iterations: 27475762\ncpu: 5.246915444965639 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 32.39400722002291,
            "unit": "ns/iter",
            "extra": "iterations: 25963910\ncpu: 5.275707703500745 ns\nthreads: 1"
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
        "date": 1647487483975,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 31342571.20000257,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 20493699.999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 282.14164723780095,
            "unit": "ns/iter",
            "extra": "iterations: 494962\ncpu: 281.9489172906203 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.918598201300793,
            "unit": "ns/iter",
            "extra": "iterations: 76931531\ncpu: 1.8890303898930587 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.1927148971879107,
            "unit": "ns/iter",
            "extra": "iterations: 70007001\ncpu: 1.9354207159938195 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 297.3812549080345,
            "unit": "ns/iter",
            "extra": "iterations: 506842\ncpu: 283.99974745581454 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 340.5086865621064,
            "unit": "ns/iter",
            "extra": "iterations: 432392\ncpu: 325.4014875390851 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 51.834887243059455,
            "unit": "ns/iter",
            "extra": "iterations: 3135639\ncpu: 44.517241940159565 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 48.386743417705894,
            "unit": "ns/iter",
            "extra": "iterations: 3157918\ncpu: 44.51920537518709 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 60.27445324960113,
            "unit": "ns/iter",
            "extra": "iterations: 2836075\ncpu: 49.94226175259822 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 31.860540535267557,
            "unit": "ns/iter",
            "extra": "iterations: 4695938\ncpu: 29.561506135728322 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2176.1734568880393,
            "unit": "ns/iter",
            "extra": "iterations: 69389\ncpu: 2018.331435818361 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2475.8214956934366,
            "unit": "ns/iter",
            "extra": "iterations: 71298\ncpu: 2008.401357681842 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5870929.069999419,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 100550 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8024827.289998484,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 127269.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6079595.869998684,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 240159.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3670639.4779998846,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 102276 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2495144.7838590527,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 120398.88682745825 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2865899.461988176,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 188419.88304093562 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 142.63166924328095,
            "unit": "ns/iter",
            "extra": "iterations: 1025866\ncpu: 135.5537662813662 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.442868809248097,
            "unit": "ns/iter",
            "extra": "iterations: 27267592\ncpu: 5.160485018259038 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.258080928575206,
            "unit": "ns/iter",
            "extra": "iterations: 27131257\ncpu: 5.180629854341065 ns\nthreads: 1"
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
        "date": 1647490014653,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 26666814.400005024,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 25347000.000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 390.4676891301211,
            "unit": "ns/iter",
            "extra": "iterations: 489015\ncpu: 292.0319417604777 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.8638504402067175,
            "unit": "ns/iter",
            "extra": "iterations: 72973677\ncpu: 1.797415251529672 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.3846698585223987,
            "unit": "ns/iter",
            "extra": "iterations: 80418175\ncpu: 1.9425210781020588 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 312.1865773072794,
            "unit": "ns/iter",
            "extra": "iterations: 553272\ncpu: 252.8051302072037 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 478.72088524231725,
            "unit": "ns/iter",
            "extra": "iterations: 390266\ncpu: 360.32859639322913 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 58.36271808306651,
            "unit": "ns/iter",
            "extra": "iterations: 3061849\ncpu: 45.85464534665164 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 52.26137323527662,
            "unit": "ns/iter",
            "extra": "iterations: 3101668\ncpu: 44.4483419888911 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 58.84922841314354,
            "unit": "ns/iter",
            "extra": "iterations: 2799944\ncpu: 49.78492426991402 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 36.88254157328106,
            "unit": "ns/iter",
            "extra": "iterations: 4689489\ncpu: 30.427409041795354 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2414.606986251762,
            "unit": "ns/iter",
            "extra": "iterations: 67275\ncpu: 2038.9892233370495 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2265.3263459953014,
            "unit": "ns/iter",
            "extra": "iterations: 68648\ncpu: 2052.8056170609466 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6351659.169999948,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 91049.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8859014.899999239,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 119459.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5764069.359997847,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 216069.9999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3580784.668999968,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 99466.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2653039.5371700665,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 128126.2989608313 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2538124.3433373095,
            "unit": "ns/iter",
            "extra": "iterations: 833\ncpu: 172002.4009603842 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 2291.3997401548627,
            "unit": "ns/iter",
            "extra": "iterations: 1021376\ncpu: 149.25845134406916 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.398583576425192,
            "unit": "ns/iter",
            "extra": "iterations: 26295524\ncpu: 5.33102135557367 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.405686691440957,
            "unit": "ns/iter",
            "extra": "iterations: 26921524\ncpu: 5.30326589237667 ns\nthreads: 1"
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
        "date": 1647494134753,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 23860673.555544864,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 22538888.888888888 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 307.7886202097782,
            "unit": "ns/iter",
            "extra": "iterations: 507338\ncpu: 280.58414705778 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9218893835256077,
            "unit": "ns/iter",
            "extra": "iterations: 69070995\ncpu: 1.863300217406742 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.5349431000225797,
            "unit": "ns/iter",
            "extra": "iterations: 78277886\ncpu: 1.959927737445541 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 324.58018562393045,
            "unit": "ns/iter",
            "extra": "iterations: 532583\ncpu: 275.6941171610811 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 399.73756111341834,
            "unit": "ns/iter",
            "extra": "iterations: 404578\ncpu: 350.27114672572424 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 54.206632561909124,
            "unit": "ns/iter",
            "extra": "iterations: 3134656\ncpu: 44.70634098287021 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 48.39754861727658,
            "unit": "ns/iter",
            "extra": "iterations: 3152017\ncpu: 44.49975999494932 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 69.38147427299158,
            "unit": "ns/iter",
            "extra": "iterations: 2821784\ncpu: 49.75115033609937 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 37.706865429913435,
            "unit": "ns/iter",
            "extra": "iterations: 4709523\ncpu: 29.671794786860573 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2584.3215995758096,
            "unit": "ns/iter",
            "extra": "iterations: 68293\ncpu: 2049.0679864700624 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2284.116014450777,
            "unit": "ns/iter",
            "extra": "iterations: 68638\ncpu: 2027.9437046533994 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5668198.82000118,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 89500 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8350020.709999626,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 116720.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5696231.450001505,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 224479.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3319508.377999909,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 80360.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2599727.6411201097,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 107681.65070007372 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2682338.5448196344,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 163250.29103608843 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 138.6189654247882,
            "unit": "ns/iter",
            "extra": "iterations: 1008646\ncpu: 137.42482496336672 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.556444199612635,
            "unit": "ns/iter",
            "extra": "iterations: 26932918\ncpu: 5.190896879424651 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.268337939029837,
            "unit": "ns/iter",
            "extra": "iterations: 27005652\ncpu: 5.18143387169471 ns\nthreads: 1"
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
        "date": 1647497399460,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 28931641.999987632,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 20186666.666666668 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 297.419150573821,
            "unit": "ns/iter",
            "extra": "iterations: 492403\ncpu: 283.9889277685148 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.967857196089006,
            "unit": "ns/iter",
            "extra": "iterations: 72388831\ncpu: 1.913430540134016 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 4.287953210013866,
            "unit": "ns/iter",
            "extra": "iterations: 68752149\ncpu: 1.9808253557281532 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 409.79721748849704,
            "unit": "ns/iter",
            "extra": "iterations: 521687\ncpu: 269.7479523162357 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 629.8786496416491,
            "unit": "ns/iter",
            "extra": "iterations: 412335\ncpu: 346.66230128415 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 75.85779762446668,
            "unit": "ns/iter",
            "extra": "iterations: 3071320\ncpu: 45.54849380722295 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 92.43346685269894,
            "unit": "ns/iter",
            "extra": "iterations: 3045001\ncpu: 46.564516727580695 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 72.97650349633649,
            "unit": "ns/iter",
            "extra": "iterations: 2800672\ncpu: 50.48645467944839 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 53.592475305988124,
            "unit": "ns/iter",
            "extra": "iterations: 4618633\ncpu: 30.650411063186905 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2954.3106467733305,
            "unit": "ns/iter",
            "extra": "iterations: 68293\ncpu: 2046.2126425841598 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 4349.372323116967,
            "unit": "ns/iter",
            "extra": "iterations: 68223\ncpu: 2159.3890623396783 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5448031.590001392,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 90039.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7523406.719999457,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 125690 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5576450.510000085,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 196009.9999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3609756.5600000503,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 93834.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2841286.897727279,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 116267.85714285712 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 3397882.5185183976,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 204131.85185185185 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 140.74337532982798,
            "unit": "ns/iter",
            "extra": "iterations: 1021749\ncpu: 137.06008031326675 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 6.541440564097578,
            "unit": "ns/iter",
            "extra": "iterations: 27003047\ncpu: 5.2085973853247 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.693200247886066,
            "unit": "ns/iter",
            "extra": "iterations: 26552365\ncpu: 5.281864722784579 ns\nthreads: 1"
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
        "date": 1647501022128,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 26463787.400007278,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 17948199.999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 288.96735613691027,
            "unit": "ns/iter",
            "extra": "iterations: 497000\ncpu: 282.6579476861167 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.8962703221819028,
            "unit": "ns/iter",
            "extra": "iterations: 73808520\ncpu: 1.8502064531303433 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.8856353624112991,
            "unit": "ns/iter",
            "extra": "iterations: 76161462\ncpu: 1.8514087872945502 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 276.1926102080248,
            "unit": "ns/iter",
            "extra": "iterations: 558013\ncpu: 256.0513823154658 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 572.5164678140698,
            "unit": "ns/iter",
            "extra": "iterations: 430385\ncpu: 331.1778988579991 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 47.8581969366021,
            "unit": "ns/iter",
            "extra": "iterations: 3163627\ncpu: 44.15880886084232 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 53.60649588375931,
            "unit": "ns/iter",
            "extra": "iterations: 3175611\ncpu: 44.146465042475256 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 53.65497082995495,
            "unit": "ns/iter",
            "extra": "iterations: 2851556\ncpu: 49.148605182574 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 32.630059006088096,
            "unit": "ns/iter",
            "extra": "iterations: 4748660\ncpu: 29.324693703065677 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2177.9805853996136,
            "unit": "ns/iter",
            "extra": "iterations: 70926\ncpu: 1980.7404900882593 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2158.2390359440437,
            "unit": "ns/iter",
            "extra": "iterations: 71780\ncpu: 1981.3179158539967 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6656028.620000143,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 82770 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9132130.540001526,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 111919.99999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5712864.950000949,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 186350.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3070966.290000115,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 75965 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2264422.3669999517,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 98739 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2287281.8551198523,
            "unit": "ns/iter",
            "extra": "iterations: 918\ncpu: 155315.90413943352 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 145.89990329378293,
            "unit": "ns/iter",
            "extra": "iterations: 1031992\ncpu: 137.5136628966116 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 12.414918606801836,
            "unit": "ns/iter",
            "extra": "iterations: 26556394\ncpu: 5.388947008392781 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 18.049913541073526,
            "unit": "ns/iter",
            "extra": "iterations: 26676829\ncpu: 5.351573082392965 ns\nthreads: 1"
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
        "date": 1647504146360,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 25925630.900019314,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 15814400 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 296.7304823227932,
            "unit": "ns/iter",
            "extra": "iterations: 491849\ncpu: 290.96734973538634 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.3523255658932882,
            "unit": "ns/iter",
            "extra": "iterations: 67353026\ncpu: 2.0496629208611945 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.1273983380898933,
            "unit": "ns/iter",
            "extra": "iterations: 72456267\ncpu: 1.9573876197624147 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 301.04613099529007,
            "unit": "ns/iter",
            "extra": "iterations: 522447\ncpu: 287.1085488097355 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 408.8824580899192,
            "unit": "ns/iter",
            "extra": "iterations: 393281\ncpu: 371.84354189498094 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 66.25902251307636,
            "unit": "ns/iter",
            "extra": "iterations: 2762922\ncpu: 53.49988164703892 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 72.63307044355182,
            "unit": "ns/iter",
            "extra": "iterations: 2750329\ncpu: 50.96481184614642 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 64.50118886040461,
            "unit": "ns/iter",
            "extra": "iterations: 2684924\ncpu: 54.73153057591215 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 42.504087944088006,
            "unit": "ns/iter",
            "extra": "iterations: 4123711\ncpu: 33.786072787351 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2180.7498565510728,
            "unit": "ns/iter",
            "extra": "iterations: 60997\ncpu: 2054.2157811039833 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2165.636419329802,
            "unit": "ns/iter",
            "extra": "iterations: 68557\ncpu: 2052.3651851743793 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6867314.420001094,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 92889.99999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8461801.620001096,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 113909.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5471184.329999233,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 195580.0000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 2965606.6640000064,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 77063 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2476804.192000145,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 102721 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2564026.282994875,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 161073.6040609137 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 156.6537614384888,
            "unit": "ns/iter",
            "extra": "iterations: 951604\ncpu: 149.15027679581002 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.986095601085539,
            "unit": "ns/iter",
            "extra": "iterations: 26922559\ncpu: 5.439118918821943 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.60478953228809,
            "unit": "ns/iter",
            "extra": "iterations: 24401297\ncpu: 6.342326803366235 ns\nthreads: 1"
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
        "date": 1647508101473,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 36775106.99999816,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 22594636.36363636 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 287.18355990686206,
            "unit": "ns/iter",
            "extra": "iterations: 495277\ncpu: 282.8437419868074 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.144951381728863,
            "unit": "ns/iter",
            "extra": "iterations: 73668701\ncpu: 1.9530546629293761 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.0848596203868266,
            "unit": "ns/iter",
            "extra": "iterations: 70472163\ncpu: 2.038464464330404 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 310.3338225888825,
            "unit": "ns/iter",
            "extra": "iterations: 540958\ncpu: 267.81746457211085 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 443.5433561475489,
            "unit": "ns/iter",
            "extra": "iterations: 417288\ncpu: 337.1292728283584 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 62.969631953595,
            "unit": "ns/iter",
            "extra": "iterations: 3181963\ncpu: 44.8069320730631 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 54.7806636853497,
            "unit": "ns/iter",
            "extra": "iterations: 3118526\ncpu: 44.74389503246084 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 61.8286464865553,
            "unit": "ns/iter",
            "extra": "iterations: 2816108\ncpu: 49.84219355223598 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 34.74187227778012,
            "unit": "ns/iter",
            "extra": "iterations: 4674926\ncpu: 30.234917087457678 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2279.5155803363414,
            "unit": "ns/iter",
            "extra": "iterations: 70313\ncpu: 2000.3555530271797 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2579.3059073545996,
            "unit": "ns/iter",
            "extra": "iterations: 70116\ncpu: 2025.728792287068 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6137071.719999768,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 87260 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8552010.119997248,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 125139.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5660329.100001036,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 199019.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3213423.493999926,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 82573.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2209265.06896573,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 106152.92353823088 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2239095.9900109377,
            "unit": "ns/iter",
            "extra": "iterations: 901\ncpu: 176374.02885682572 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 150.79498431539596,
            "unit": "ns/iter",
            "extra": "iterations: 1043686\ncpu: 137.2682971698384 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.60578291334207,
            "unit": "ns/iter",
            "extra": "iterations: 27325604\ncpu: 5.150883398588372 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.769273503715238,
            "unit": "ns/iter",
            "extra": "iterations: 26901349\ncpu: 5.317354159451258 ns\nthreads: 1"
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
        "date": 1647511855160,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 22684577.00001818,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 22535200 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 294.2292504955387,
            "unit": "ns/iter",
            "extra": "iterations: 492819\ncpu: 284.7353693749632 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.05352949341034,
            "unit": "ns/iter",
            "extra": "iterations: 70454431\ncpu: 1.8720611057095895 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.1127734987976985,
            "unit": "ns/iter",
            "extra": "iterations: 75679766\ncpu: 1.8760628831754051 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 301.4062810358226,
            "unit": "ns/iter",
            "extra": "iterations: 550769\ncpu: 256.83907409458413 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 350.7437149105857,
            "unit": "ns/iter",
            "extra": "iterations: 423025\ncpu: 331.0820873470834 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 80.22985739442915,
            "unit": "ns/iter",
            "extra": "iterations: 3163270\ncpu: 57.665327335320725 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 623.851959399481,
            "unit": "ns/iter",
            "extra": "iterations: 2558386\ncpu: 99.8879762475248 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 319.6969422420212,
            "unit": "ns/iter",
            "extra": "iterations: 2799077\ncpu: 50.062216937940626 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 178.91954914642346,
            "unit": "ns/iter",
            "extra": "iterations: 4707781\ncpu: 29.84888209540759 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 4703.72041709811,
            "unit": "ns/iter",
            "extra": "iterations: 65308\ncpu: 2103.4482758620697 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 7778.918861975804,
            "unit": "ns/iter",
            "extra": "iterations: 67872\ncpu: 2113.419377652055 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5877932.47000036,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 92030 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7595462.980000321,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 117250 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5873016.439998082,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 227579.9999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3367114.9110000446,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 87225.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2547861.503731369,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 106047.76119402985 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2579168.9963896563,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 171243.08062575207 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 138.10115816801203,
            "unit": "ns/iter",
            "extra": "iterations: 1026017\ncpu: 137.33398179562323 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.7519073293541645,
            "unit": "ns/iter",
            "extra": "iterations: 27342682\ncpu: 5.1680372832482195 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.506607116817963,
            "unit": "ns/iter",
            "extra": "iterations: 26739500\ncpu: 5.215243366555094 ns\nthreads: 1"
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
        "date": 1647515796313,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 32952555.45454397,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 19695909.09090909 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 485.12786715645916,
            "unit": "ns/iter",
            "extra": "iterations: 489117\ncpu: 292.64777139212094 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 6.242428477568316,
            "unit": "ns/iter",
            "extra": "iterations: 72016461\ncpu: 2.112822511508862 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 6.674874767190475,
            "unit": "ns/iter",
            "extra": "iterations: 68216148\ncpu: 2.1491392331328947 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 345.52529197619236,
            "unit": "ns/iter",
            "extra": "iterations: 501325\ncpu: 261.8600708123472 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 1202.4922171357846,
            "unit": "ns/iter",
            "extra": "iterations: 362206\ncpu: 385.57892470030856 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 144.63467221333048,
            "unit": "ns/iter",
            "extra": "iterations: 3035099\ncpu: 48.55558253618742 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 172.40467400030735,
            "unit": "ns/iter",
            "extra": "iterations: 2914420\ncpu: 49.06293533533261 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 75.24393865785342,
            "unit": "ns/iter",
            "extra": "iterations: 2649207\ncpu: 54.56198779483825 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 50.114386809242696,
            "unit": "ns/iter",
            "extra": "iterations: 4364498\ncpu: 32.046526312991716 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 4897.797859576995,
            "unit": "ns/iter",
            "extra": "iterations: 62511\ncpu: 2339.092319751722 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 7108.472541741592,
            "unit": "ns/iter",
            "extra": "iterations: 60073\ncpu: 2361.909676560183 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5614781.799999947,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 102140 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 6942431.329998726,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 128370.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5897996.479998256,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 251559.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3888736.488999939,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 124988.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2458007.628787809,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 112546.29629629628 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 3153848.059060546,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 274954.3624161074 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 143.69891382837247,
            "unit": "ns/iter",
            "extra": "iterations: 997080\ncpu: 140.89140289645766 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.312839628965225,
            "unit": "ns/iter",
            "extra": "iterations: 24017018\ncpu: 5.150972531227649 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.59560400081928,
            "unit": "ns/iter",
            "extra": "iterations: 26393681\ncpu: 5.233487515439777 ns\nthreads: 1"
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
        "date": 1647518994698,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 37134812.99998875,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 23917900 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 361.3854014131203,
            "unit": "ns/iter",
            "extra": "iterations: 470525\ncpu: 298.6600074384996 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.8866032632510776,
            "unit": "ns/iter",
            "extra": "iterations: 77626837\ncpu: 1.8516663251395906 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.049479527575998,
            "unit": "ns/iter",
            "extra": "iterations: 73000313\ncpu: 1.9447176890871682 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 283.8152387162142,
            "unit": "ns/iter",
            "extra": "iterations: 521435\ncpu: 266.02356957242995 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 347.359007192954,
            "unit": "ns/iter",
            "extra": "iterations: 426387\ncpu: 331.08420284858596 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 51.34044736417098,
            "unit": "ns/iter",
            "extra": "iterations: 3087373\ncpu: 44.69592757337712 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 49.17356678247076,
            "unit": "ns/iter",
            "extra": "iterations: 3135358\ncpu: 44.854208036211475 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 55.575706049167295,
            "unit": "ns/iter",
            "extra": "iterations: 2767619\ncpu: 49.886201821854826 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 33.825546817087826,
            "unit": "ns/iter",
            "extra": "iterations: 4609357\ncpu: 29.866855615653108 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 3338.2594154504286,
            "unit": "ns/iter",
            "extra": "iterations: 71850\ncpu: 2016.5901183020214 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2168.505880232597,
            "unit": "ns/iter",
            "extra": "iterations: 72191\ncpu: 1958.9283982767984 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5765752.800000428,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 101509.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7767607.559999305,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 134580.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7567171.09000192,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 272719.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3228771.623770492,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 93838.52459016393 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2964778.989323893,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 316083.6298932385 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2337919.0369928926,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 163714.7971360382 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 148.5774437579472,
            "unit": "ns/iter",
            "extra": "iterations: 1020631\ncpu: 138.61424942021162 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.963606886319589,
            "unit": "ns/iter",
            "extra": "iterations: 22739824\ncpu: 5.851320573105579 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.04250134337683,
            "unit": "ns/iter",
            "extra": "iterations: 26403636\ncpu: 5.346687857687478 ns\nthreads: 1"
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
        "date": 1647524011419,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 30814435.999991477,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 19851299.999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 292.04299187739076,
            "unit": "ns/iter",
            "extra": "iterations: 490488\ncpu: 286.09262611929336 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.425801233046024,
            "unit": "ns/iter",
            "extra": "iterations: 74986610\ncpu: 2.0223210517184333 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.95820299030546,
            "unit": "ns/iter",
            "extra": "iterations: 69627493\ncpu: 2.076823303116773 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 428.2172497453369,
            "unit": "ns/iter",
            "extra": "iterations: 507393\ncpu: 275.81578776214894 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 579.1087331969479,
            "unit": "ns/iter",
            "extra": "iterations: 403575\ncpu: 343.7180201945114 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 78.0666626146784,
            "unit": "ns/iter",
            "extra": "iterations: 3027289\ncpu: 45.81260659289554 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 72.3434167372597,
            "unit": "ns/iter",
            "extra": "iterations: 2999979\ncpu: 45.405317837224814 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 56.16267440696826,
            "unit": "ns/iter",
            "extra": "iterations: 2780923\ncpu: 50.713378256068296 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 33.825083398624955,
            "unit": "ns/iter",
            "extra": "iterations: 4618481\ncpu: 30.70576667956415 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2288.9857033608077,
            "unit": "ns/iter",
            "extra": "iterations: 67988\ncpu: 2102.473965993999 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2331.988387527882,
            "unit": "ns/iter",
            "extra": "iterations: 68547\ncpu: 2027.411848804467 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5981001.729999207,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 99660 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8059725.400000843,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 127319.99999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5803530.9999991115,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 230910 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3310007.963999851,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 98809.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2835413.0905133095,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 124975.63098346391 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 3051349.053333373,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 185356 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 140.92855222627097,
            "unit": "ns/iter",
            "extra": "iterations: 1022943\ncpu: 137.86887441431244 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 6.120963830883826,
            "unit": "ns/iter",
            "extra": "iterations: 26401644\ncpu: 5.257399880098375 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.962896466586861,
            "unit": "ns/iter",
            "extra": "iterations: 26348973\ncpu: 5.358425165185755 ns\nthreads: 1"
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
        "date": 1647526571101,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 51091418.09091191,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 25334181.818181816 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 290.8926341058024,
            "unit": "ns/iter",
            "extra": "iterations: 491590\ncpu: 285.79914156105696 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.056683566757226,
            "unit": "ns/iter",
            "extra": "iterations: 74172185\ncpu: 2.0413177797040762 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.329256761674659,
            "unit": "ns/iter",
            "extra": "iterations: 74559301\ncpu: 1.9633365393272668 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 284.053585970977,
            "unit": "ns/iter",
            "extra": "iterations: 520640\ncpu: 264.51098647818066 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 380.525305410154,
            "unit": "ns/iter",
            "extra": "iterations: 407403\ncpu: 336.2125462993646 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 52.14349323263812,
            "unit": "ns/iter",
            "extra": "iterations: 3061113\ncpu: 46.00156871046575 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 52.414883978870655,
            "unit": "ns/iter",
            "extra": "iterations: 3018803\ncpu: 46.47537451102307 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 57.06778085933754,
            "unit": "ns/iter",
            "extra": "iterations: 2682660\ncpu: 51.42917850193462 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 31.933627936963624,
            "unit": "ns/iter",
            "extra": "iterations: 4696253\ncpu: 29.60232338419585 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2369.6791936525474,
            "unit": "ns/iter",
            "extra": "iterations: 68705\ncpu: 2165.4901390000714 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2531.556066548856,
            "unit": "ns/iter",
            "extra": "iterations: 66537\ncpu: 2065.0765739363073 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5077100.980001887,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 82030.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 6290038.78000276,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 99430 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5742878.139999448,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 211380.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3398316.0489997314,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 80468.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2705587.9711464453,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 112257.40318906606 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 3415120.702541154,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 197177.87742899856 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 154.5925957449403,
            "unit": "ns/iter",
            "extra": "iterations: 1022196\ncpu: 141.842660311721 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 7.4346135614754045,
            "unit": "ns/iter",
            "extra": "iterations: 27661424\ncpu: 5.122079036856525 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.261354208405377,
            "unit": "ns/iter",
            "extra": "iterations: 26774786\ncpu: 5.217333949933343 ns\nthreads: 1"
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
        "date": 1647534223011,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 200644323.76924604,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 21441692.307692308 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 305.9692868721775,
            "unit": "ns/iter",
            "extra": "iterations: 502098\ncpu: 279.8895833084378 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9887642374703696,
            "unit": "ns/iter",
            "extra": "iterations: 72659332\ncpu: 1.9332410047480206 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 6.264709968832507,
            "unit": "ns/iter",
            "extra": "iterations: 72138919\ncpu: 2.101306785592393 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 290.72060067917073,
            "unit": "ns/iter",
            "extra": "iterations: 523541\ncpu: 255.10895994774052 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 782.311028431172,
            "unit": "ns/iter",
            "extra": "iterations: 354511\ncpu: 384.15733221254055 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 84.20917229074213,
            "unit": "ns/iter",
            "extra": "iterations: 2795136\ncpu: 51.12667147501945 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 66.09962212886637,
            "unit": "ns/iter",
            "extra": "iterations: 2654079\ncpu: 44.75488483952436 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 165.34446396982017,
            "unit": "ns/iter",
            "extra": "iterations: 2592065\ncpu: 56.940701718514006 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 66.83713760927282,
            "unit": "ns/iter",
            "extra": "iterations: 4531918\ncpu: 31.09058901771838 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 5966.607501735707,
            "unit": "ns/iter",
            "extra": "iterations: 64785\ncpu: 2347.148259627995 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2206.6950538199094,
            "unit": "ns/iter",
            "extra": "iterations: 68376\ncpu: 2018.6322686322717 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6510768.630000711,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 85930 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8224054.249999426,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 121059.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5909338.460000981,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 209690 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3250114.190999739,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 81841.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2381755.1504298225,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 101349.57020057307 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2534182.241463607,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 161358.53658536592 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 135.59587073491144,
            "unit": "ns/iter",
            "extra": "iterations: 1016113\ncpu: 134.43386709942695 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 15.225671703040515,
            "unit": "ns/iter",
            "extra": "iterations: 27139672\ncpu: 5.408355708941508 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 11.583019060348132,
            "unit": "ns/iter",
            "extra": "iterations: 26082420\ncpu: 5.315572711427852 ns\nthreads: 1"
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
        "date": 1647538126256,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 50581657.18182036,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 23510090.909090906 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 1239.3880184044767,
            "unit": "ns/iter",
            "extra": "iterations: 475980\ncpu: 362.55304844741374 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.4341092312195087,
            "unit": "ns/iter",
            "extra": "iterations: 69098268\ncpu: 2.0684454782571393 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 6.28818470106484,
            "unit": "ns/iter",
            "extra": "iterations: 60962334\ncpu: 2.3377713851966364 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 809.8216675125115,
            "unit": "ns/iter",
            "extra": "iterations: 386228\ncpu: 399.90886212289104 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 659.7358909067782,
            "unit": "ns/iter",
            "extra": "iterations: 286287\ncpu: 351.937042198912 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 56.41094260870275,
            "unit": "ns/iter",
            "extra": "iterations: 3172589\ncpu: 47.0722807145836 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 137.6653799136527,
            "unit": "ns/iter",
            "extra": "iterations: 2581692\ncpu: 55.639479845000956 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 136.47608437644985,
            "unit": "ns/iter",
            "extra": "iterations: 2280873\ncpu: 59.22644531282543 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 57.6246022780766,
            "unit": "ns/iter",
            "extra": "iterations: 4635148\ncpu: 34.153386256490585 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 5689.109535235229,
            "unit": "ns/iter",
            "extra": "iterations: 42516\ncpu: 2892.7227396744743 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 6584.89847057373,
            "unit": "ns/iter",
            "extra": "iterations: 43938\ncpu: 3165.9838863853633 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6414016.590000528,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 105440.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8698482.060000287,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 139759.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5946644.160000005,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 235829.9999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3338233.018999972,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 93182.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2280730.1383285294,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 104595.82132564839 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2430053.346056087,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 174838.42239185746 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 149.71715083568137,
            "unit": "ns/iter",
            "extra": "iterations: 1023093\ncpu: 140.1055427023741 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.122314208713453,
            "unit": "ns/iter",
            "extra": "iterations: 27649952\ncpu: 5.113643596921976 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.224782840784248,
            "unit": "ns/iter",
            "extra": "iterations: 27023375\ncpu: 5.169968592005993 ns\nthreads: 1"
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
        "date": 1647540629832,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 28026969.899997313,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 19315800 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 301.6655978776567,
            "unit": "ns/iter",
            "extra": "iterations: 489339\ncpu: 286.44354935944204 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.1086312565184078,
            "unit": "ns/iter",
            "extra": "iterations: 69306931\ncpu: 2.019062133915582 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.6427143473257164,
            "unit": "ns/iter",
            "extra": "iterations: 67809745\ncpu: 2.347214253644516 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 525.0697198281866,
            "unit": "ns/iter",
            "extra": "iterations: 413211\ncpu: 297.25491334935424 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 769.8103451572562,
            "unit": "ns/iter",
            "extra": "iterations: 313480\ncpu: 430.14546382544313 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 97.98468783608752,
            "unit": "ns/iter",
            "extra": "iterations: 2545362\ncpu: 53.48001580914624 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 76.92031076511753,
            "unit": "ns/iter",
            "extra": "iterations: 2519073\ncpu: 50.085090825077344 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 106.31817401315844,
            "unit": "ns/iter",
            "extra": "iterations: 2405209\ncpu: 61.03960196390411 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 58.52990478973364,
            "unit": "ns/iter",
            "extra": "iterations: 3946107\ncpu: 37.11252634558571 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 4624.958648964387,
            "unit": "ns/iter",
            "extra": "iterations: 51220\ncpu: 2358.375634517769 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2228.277706675562,
            "unit": "ns/iter",
            "extra": "iterations: 69541\ncpu: 2016.9971671388128 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6763614.920000691,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 106269.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7035354.099998585,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 139550.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6512641.259998872,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 235599.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3399760.624999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 95862 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2298008.0375190694,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 111355.28330781011 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2403480.2440409246,
            "unit": "ns/iter",
            "extra": "iterations: 881\ncpu: 179372.30419977295 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 143.63843127188744,
            "unit": "ns/iter",
            "extra": "iterations: 1020929\ncpu: 137.72162412861226 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.2152920082520815,
            "unit": "ns/iter",
            "extra": "iterations: 26736436\ncpu: 5.178251880691953 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.198148157962714,
            "unit": "ns/iter",
            "extra": "iterations: 26977031\ncpu: 5.183669025698194 ns\nthreads: 1"
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
        "date": 1647544671046,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 43118970.181818776,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 22530181.818181816 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 296.7276553419615,
            "unit": "ns/iter",
            "extra": "iterations: 490643\ncpu: 282.1155096475441 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.328257621601626,
            "unit": "ns/iter",
            "extra": "iterations: 69053961\ncpu: 2.029311540868741 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 5.230200023566585,
            "unit": "ns/iter",
            "extra": "iterations: 68819741\ncpu: 2.159845385061824 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 585.874461677008,
            "unit": "ns/iter",
            "extra": "iterations: 430968\ncpu: 302.5630673275047 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 607.1536104544455,
            "unit": "ns/iter",
            "extra": "iterations: 394244\ncpu: 356.6167145219712 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 90.4251525181561,
            "unit": "ns/iter",
            "extra": "iterations: 2849989\ncpu: 49.030715557147765 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 60.100780934272336,
            "unit": "ns/iter",
            "extra": "iterations: 2830456\ncpu: 45.512454530294825 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 71.07125721578775,
            "unit": "ns/iter",
            "extra": "iterations: 2784518\ncpu: 49.93934318255431 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 43.90967851419757,
            "unit": "ns/iter",
            "extra": "iterations: 4696568\ncpu: 30.816971030761167 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2373.0297625699586,
            "unit": "ns/iter",
            "extra": "iterations: 71600\ncpu: 2238.8547486033544 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2188.7236973154872,
            "unit": "ns/iter",
            "extra": "iterations: 70278\ncpu: 1965.8214519479764 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6133391.1600013375,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 84769.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8072490.19999972,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 121260.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5503210.420001779,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 214470 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3251396.3540000077,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 83066.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2291056.3719192706,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 104397.31142643762 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2348045.6231384682,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 166155.78465062997 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 138.93776158773295,
            "unit": "ns/iter",
            "extra": "iterations: 1020929\ncpu: 136.66474358158106 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 6.169859817708636,
            "unit": "ns/iter",
            "extra": "iterations: 28124309\ncpu: 5.063093283465204 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.051610707224685,
            "unit": "ns/iter",
            "extra": "iterations: 26611416\ncpu: 5.234107046389414 ns\nthreads: 1"
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
        "date": 1647547937886,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 25202030.40000979,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 23565500 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 322.41098882352355,
            "unit": "ns/iter",
            "extra": "iterations: 492646\ncpu: 285.86855470256535 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9286261926473363,
            "unit": "ns/iter",
            "extra": "iterations: 75810906\ncpu: 1.8704432842419791 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.316370863402488,
            "unit": "ns/iter",
            "extra": "iterations: 74027073\ncpu: 2.003510256308526 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 542.3582335359138,
            "unit": "ns/iter",
            "extra": "iterations: 458430\ncpu: 269.22976245010136 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 1825.2128614241215,
            "unit": "ns/iter",
            "extra": "iterations: 350350\ncpu: 411.3086913086915 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 129.80387098746357,
            "unit": "ns/iter",
            "extra": "iterations: 3001973\ncpu: 45.3161970477416 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 86.28078092240085,
            "unit": "ns/iter",
            "extra": "iterations: 3126815\ncpu: 45.14913738100911 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 75.85003908437963,
            "unit": "ns/iter",
            "extra": "iterations: 2758132\ncpu: 49.75142596510973 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 58.86700790083316,
            "unit": "ns/iter",
            "extra": "iterations: 4729890\ncpu: 31.46331098609061 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2282.2913753253783,
            "unit": "ns/iter",
            "extra": "iterations: 65359\ncpu: 2152.557413669114 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2209.8587576781806,
            "unit": "ns/iter",
            "extra": "iterations: 64138\ncpu: 2123.218684711089 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5830951.59000095,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 87040 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7172837.400000844,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 124150.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5870903.550001004,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 229289.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3140064.809000023,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 79020 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2752819.7149999873,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 106188 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 3173502.915723069,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 189143.39622641506 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 154.0555330236091,
            "unit": "ns/iter",
            "extra": "iterations: 1020780\ncpu: 137.9807598111248 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 6.110066353756519,
            "unit": "ns/iter",
            "extra": "iterations: 27001485\ncpu: 5.148272400573524 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.991236223351132,
            "unit": "ns/iter",
            "extra": "iterations: 27013468\ncpu: 5.267927835108028 ns\nthreads: 1"
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
        "date": 1647551042353,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 27633094.54547363,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 23384909.090909094 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 278.67932684737633,
            "unit": "ns/iter",
            "extra": "iterations: 498966\ncpu: 277.1832148883891 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.3575891441480556,
            "unit": "ns/iter",
            "extra": "iterations: 69741955\ncpu: 2.029151606088473 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 5.486642743364995,
            "unit": "ns/iter",
            "extra": "iterations: 68149735\ncpu: 2.3802146846205643 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 294.86641698903355,
            "unit": "ns/iter",
            "extra": "iterations: 492368\ncpu: 277.6947323952816 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 348.96013557508536,
            "unit": "ns/iter",
            "extra": "iterations: 434297\ncpu: 326.4701344932153 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 72.64797614942292,
            "unit": "ns/iter",
            "extra": "iterations: 2701138\ncpu: 52.10359485520549 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 52.17168159064613,
            "unit": "ns/iter",
            "extra": "iterations: 2696352\ncpu: 51.96539620939705 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 67.63748726246897,
            "unit": "ns/iter",
            "extra": "iterations: 2792906\ncpu: 50.594971688986334 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 30.94319432138091,
            "unit": "ns/iter",
            "extra": "iterations: 4660608\ncpu: 30.408049765180866 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2066.23358322464,
            "unit": "ns/iter",
            "extra": "iterations: 73233\ncpu: 1966.8318927259565 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2018.2311243994313,
            "unit": "ns/iter",
            "extra": "iterations: 72554\ncpu: 1945.7645340022543 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5795852.839996769,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 77470 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8916400.690000046,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 105899.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5616526.570001951,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 215409.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 2982638.353999846,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 72583.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2175301.834000038,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 95636 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2165219.265458748,
            "unit": "ns/iter",
            "extra": "iterations: 938\ncpu: 154110.87420042642 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 139.81338989192028,
            "unit": "ns/iter",
            "extra": "iterations: 1027372\ncpu: 134.91023699302687 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 65.20577953607825,
            "unit": "ns/iter",
            "extra": "iterations: 25390377\ncpu: 13.70428647042145 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 16.06125364979644,
            "unit": "ns/iter",
            "extra": "iterations: 26966638\ncpu: 5.160895473881469 ns\nthreads: 1"
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
          "id": "31d888a540c00e03fd430c724a15420ef3281e78",
          "message": "Enable metric collection from MetricReader (#1241)",
          "timestamp": "2022-03-17T18:15:35-07:00",
          "tree_id": "1fe56a5fd8cec65eab979e5fd25a9866de69ef4d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/31d888a540c00e03fd430c724a15420ef3281e78"
        },
        "date": 1647636621162,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 17366541.75652398,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 11472933.333333334 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 212.31255163219203,
            "unit": "ns/iter",
            "extra": "iterations: 680295\ncpu: 212.00420405853342 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9569265894332242,
            "unit": "ns/iter",
            "extra": "iterations: 72590764\ncpu: 1.9442597408122062 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.2676824716877584,
            "unit": "ns/iter",
            "extra": "iterations: 70824754\ncpu: 2.2580127846261213 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 78.08107175775103,
            "unit": "ns/iter",
            "extra": "iterations: 1725943\ncpu: 77.55760184432509 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 314.51540038767945,
            "unit": "ns/iter",
            "extra": "iterations: 439285\ncpu: 313.3134525421992 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 35.48471270052378,
            "unit": "ns/iter",
            "extra": "iterations: 3732099\ncpu: 35.42156839890903 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 36.09271353356858,
            "unit": "ns/iter",
            "extra": "iterations: 3840404\ncpu: 35.76704430054752 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 42.497990478095225,
            "unit": "ns/iter",
            "extra": "iterations: 3599971\ncpu: 39.448206666109265 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 19.153321902002116,
            "unit": "ns/iter",
            "extra": "iterations: 6489263\ncpu: 19.103802696854775 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 789.5939548716714,
            "unit": "ns/iter",
            "extra": "iterations: 180409\ncpu: 788.7372581190506 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 860.4736572238215,
            "unit": "ns/iter",
            "extra": "iterations: 178145\ncpu: 859.4751466502 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 153.0568043304569,
            "unit": "ns/iter",
            "extra": "iterations: 998695\ncpu: 152.24968584002121 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.6603850769689865,
            "unit": "ns/iter",
            "extra": "iterations: 52575248\ncpu: 2.6588462312151147 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.720498587367983,
            "unit": "ns/iter",
            "extra": "iterations: 21429402\ncpu: 6.715763696999105 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 528955.9364318848,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 22145.8 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 1896543.264389038,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 62804.1 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7223413.490197238,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 131233.18014705883 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 2504276.6665254254,
            "unit": "ns/iter",
            "extra": "iterations: 7329\ncpu: 37275.52189930414 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3200950.6225585938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 91370.10000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4066847.7614720664,
            "unit": "ns/iter",
            "extra": "iterations: 960\ncpu: 154969.89583333328 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ec1b596fde0a2d443f5d730bcd14384b68c68e9",
          "message": "Bump actions/cache from 2 to 3 (#1277)",
          "timestamp": "2022-03-22T18:27:20+01:00",
          "tree_id": "9bdf4515d8c5ba0079d9d0f961a26912f59a5b4f",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/6ec1b596fde0a2d443f5d730bcd14384b68c68e9"
        },
        "date": 1647974307537,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 15518355.369567871,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 10473650.000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 229.817575683413,
            "unit": "ns/iter",
            "extra": "iterations: 594286\ncpu: 229.36027434602195 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.526747693128149,
            "unit": "ns/iter",
            "extra": "iterations: 57480939\ncpu: 2.520256323578848 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.6130319281671954,
            "unit": "ns/iter",
            "extra": "iterations: 50019114\ncpu: 2.511711822804378 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 88.76825888697589,
            "unit": "ns/iter",
            "extra": "iterations: 1562047\ncpu: 88.32948048298167 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 365.901690443059,
            "unit": "ns/iter",
            "extra": "iterations: 380357\ncpu: 364.07480340837685 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 42.3358254040389,
            "unit": "ns/iter",
            "extra": "iterations: 3560891\ncpu: 42.293319284415034 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 40.11421850156578,
            "unit": "ns/iter",
            "extra": "iterations: 3323845\ncpu: 40.006227727225514 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 44.96946359991848,
            "unit": "ns/iter",
            "extra": "iterations: 3319455\ncpu: 44.813591387742896 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 21.82122740331286,
            "unit": "ns/iter",
            "extra": "iterations: 6618759\ncpu: 21.722546477368354 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 902.611147206149,
            "unit": "ns/iter",
            "extra": "iterations: 156648\ncpu: 897.1764720902914 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 968.8314525850824,
            "unit": "ns/iter",
            "extra": "iterations: 146523\ncpu: 966.1486592548601 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 179.80392836830026,
            "unit": "ns/iter",
            "extra": "iterations: 864694\ncpu: 179.56722262441974 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.1622039531492727,
            "unit": "ns/iter",
            "extra": "iterations: 44691025\ncpu: 3.1362292540840135 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.64606150347161,
            "unit": "ns/iter",
            "extra": "iterations: 17719478\ncpu: 7.639051218100219 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 2856365.68069458,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 32759.3 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 6775624.752044678,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 102459.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7692596.912384033,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 283555.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 2904895.305633545,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 38800 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2979524.850845337,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 88612.69999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 3934059.7577393055,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 263850.00000000006 ns\nthreads: 1"
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
          "id": "b5155a5dea3a8816d1d0aa3f513d6a5c13245d9b",
          "message": " Add owent as an Approver (#1276)\n\n* add owent as reviewer\r\n\r\n* fix order",
          "timestamp": "2022-03-23T08:06:46-07:00",
          "tree_id": "87d7621ac28ba57d5748930eb19560dd42849fbf",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/b5155a5dea3a8816d1d0aa3f513d6a5c13245d9b"
        },
        "date": 1648050374042,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 19566731.01945357,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 12053263.636363639 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 208.9829893533739,
            "unit": "ns/iter",
            "extra": "iterations: 690829\ncpu: 202.513212386857 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6361105512098133,
            "unit": "ns/iter",
            "extra": "iterations: 97480817\ncpu: 1.434185763953948 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.447838239504194,
            "unit": "ns/iter",
            "extra": "iterations: 97597702\ncpu: 1.4351772339885622 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 75.21875361276588,
            "unit": "ns/iter",
            "extra": "iterations: 1867192\ncpu: 74.94253402970878 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 291.9146188754872,
            "unit": "ns/iter",
            "extra": "iterations: 482742\ncpu: 290.38679045950005 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 34.211594930002576,
            "unit": "ns/iter",
            "extra": "iterations: 4265835\ncpu: 32.82227277895183 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 32.930770150194995,
            "unit": "ns/iter",
            "extra": "iterations: 4264704\ncpu: 32.82504483312323 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 35.71809277164459,
            "unit": "ns/iter",
            "extra": "iterations: 3943495\ncpu: 35.522322204034715 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 18.388922238503675,
            "unit": "ns/iter",
            "extra": "iterations: 7763631\ncpu: 18.08582865414392 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 710.9185476167065,
            "unit": "ns/iter",
            "extra": "iterations: 197345\ncpu: 707.7970052446219 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 714.2931793297926,
            "unit": "ns/iter",
            "extra": "iterations: 196668\ncpu: 711.5463623975437 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 165.13278567444814,
            "unit": "ns/iter",
            "extra": "iterations: 845278\ncpu: 164.59827417725293 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.527125772654558,
            "unit": "ns/iter",
            "extra": "iterations: 55956801\ncpu: 2.4972835741628625 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.482626110001181,
            "unit": "ns/iter",
            "extra": "iterations: 18726942\ncpu: 7.475822801181317 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 444239.2349243164,
            "unit": "ns/iter",
            "extra": "iterations: 7500\ncpu: 18185.61333333334 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 5112004.280090332,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 59826.000000000044 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 10538480.281829834,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 137366.00000000015 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 315122.9545550312,
            "unit": "ns/iter",
            "extra": "iterations: 7816\ncpu: 17815.826509723647 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3008355.140686035,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 70589.69999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4771765.018653682,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 139371.5964740451 ns\nthreads: 1"
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
          "distinct": false,
          "id": "0c9aecea7af2f3f835f79397feb1436f8d51cc25",
          "message": "Disable benchmark action failure (#1284)",
          "timestamp": "2022-03-24T16:45:38+01:00",
          "tree_id": "a113fc6f58ec10b3a7dbd69d14b5baa94e19f8ad",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/0c9aecea7af2f3f835f79397feb1436f8d51cc25"
        },
        "date": 1648139463394,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 18362467.10557204,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 11508492.307692308 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 259.21927335022934,
            "unit": "ns/iter",
            "extra": "iterations: 688915\ncpu: 204.5758910750964 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6383949058647342,
            "unit": "ns/iter",
            "extra": "iterations: 85839541\ncpu: 1.6263309236474133 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6333172354951464,
            "unit": "ns/iter",
            "extra": "iterations: 86083920\ncpu: 1.6247320056986252 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.83647371692254,
            "unit": "ns/iter",
            "extra": "iterations: 1653433\ncpu: 84.65931186809505 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 329.7777825549372,
            "unit": "ns/iter",
            "extra": "iterations: 426143\ncpu: 328.47870315832955 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.34432359130509,
            "unit": "ns/iter",
            "extra": "iterations: 3765607\ncpu: 37.17907896389611 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.44574366408396,
            "unit": "ns/iter",
            "extra": "iterations: 3765729\ncpu: 37.17572347877396 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.51778415273625,
            "unit": "ns/iter",
            "extra": "iterations: 3481184\ncpu: 40.244583452066905 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.542690802107593,
            "unit": "ns/iter",
            "extra": "iterations: 6853439\ncpu: 20.42497204688042 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 799.6085253753646,
            "unit": "ns/iter",
            "extra": "iterations: 175022\ncpu: 798.717304110341 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 822.7540269884877,
            "unit": "ns/iter",
            "extra": "iterations: 173139\ncpu: 819.7378984515329 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 164.8799461967236,
            "unit": "ns/iter",
            "extra": "iterations: 850986\ncpu: 164.3689790431335 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.5072179032212185,
            "unit": "ns/iter",
            "extra": "iterations: 55891793\ncpu: 2.50252483401275 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.480756879464047,
            "unit": "ns/iter",
            "extra": "iterations: 18719606\ncpu: 7.475563321151097 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 441959.335401887,
            "unit": "ns/iter",
            "extra": "iterations: 7554\ncpu: 18027.799841143766 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 5524162.769317627,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 58586 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11416909.69467163,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 382266.99999999977 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 558211.9892886834,
            "unit": "ns/iter",
            "extra": "iterations: 7774\ncpu: 19645.30486236172 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1326620.5787658691,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 51569.49999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8078989.9826049805,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 379850.99999999994 ns\nthreads: 1"
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
          "distinct": false,
          "id": "3c7b44bf4f7a615364b78d4449eaa5f7ac121249",
          "message": "metrics exemplar round 1 (#1264)",
          "timestamp": "2022-03-24T22:31:41+01:00",
          "tree_id": "c5847c4090ac2472cf9eb12e045cce3e0ff2af9e",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/3c7b44bf4f7a615364b78d4449eaa5f7ac121249"
        },
        "date": 1648161136744,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 14142036.437988281,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 11022130.76923077 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 162.4993143156041,
            "unit": "ns/iter",
            "extra": "iterations: 891924\ncpu: 154.18230701270514 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 3.0225224968303723,
            "unit": "ns/iter",
            "extra": "iterations: 45268035\ncpu: 3.0203696714469714 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.1601577440634268,
            "unit": "ns/iter",
            "extra": "iterations: 45314923\ncpu: 3.088929446045843 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 79.48073273837593,
            "unit": "ns/iter",
            "extra": "iterations: 1776598\ncpu: 79.20807070592224 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 328.3544247289138,
            "unit": "ns/iter",
            "extra": "iterations: 427246\ncpu: 327.94525870341675 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 38.2757214741147,
            "unit": "ns/iter",
            "extra": "iterations: 3667254\ncpu: 38.18401997789083 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 38.31949805650801,
            "unit": "ns/iter",
            "extra": "iterations: 3667706\ncpu: 38.17397032368463 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 43.08726089442327,
            "unit": "ns/iter",
            "extra": "iterations: 3242234\ncpu: 43.047170562026075 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 21.767014001865142,
            "unit": "ns/iter",
            "extra": "iterations: 6452862\ncpu: 21.695071117280992 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 800.0774045135047,
            "unit": "ns/iter",
            "extra": "iterations: 175117\ncpu: 799.0931777040481 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 824.8902476480753,
            "unit": "ns/iter",
            "extra": "iterations: 174006\ncpu: 823.3882739675641 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 150.3395260650795,
            "unit": "ns/iter",
            "extra": "iterations: 921665\ncpu: 149.87430357016925 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.377164789291463,
            "unit": "ns/iter",
            "extra": "iterations: 40238673\ncpu: 3.3712468599548497 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.167388288839991,
            "unit": "ns/iter",
            "extra": "iterations: 15348622\ncpu: 9.119821961867325 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5042262.077331543,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 26183.000000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 3358643.7702178955,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 44336.200000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11960637.56942749,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 117646.99999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 2766784.66796875,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 32077.2 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2927648.0674743652,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 68722.7 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 3946138.4054090157,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 113930.4918032787 ns\nthreads: 1"
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
          "id": "91b05720ef38bcd065e1ebb8c9c857764d8d0e3b",
          "message": "fix compilation error with protobuf 3.5 (#1289)",
          "timestamp": "2022-03-25T17:40:21+01:00",
          "tree_id": "c875ed27837cc5d253823727efbff74ccac4ba16",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/91b05720ef38bcd065e1ebb8c9c857764d8d0e3b"
        },
        "date": 1648240099267,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 18077158.92791748,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 12034280 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 207.99795348853382,
            "unit": "ns/iter",
            "extra": "iterations: 668922\ncpu: 207.95503810608716 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.0868303128044903,
            "unit": "ns/iter",
            "extra": "iterations: 63007718\ncpu: 2.071477973539686 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.328523604687727,
            "unit": "ns/iter",
            "extra": "iterations: 59196117\ncpu: 2.310953943144616 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 82.72486054010662,
            "unit": "ns/iter",
            "extra": "iterations: 1790265\ncpu: 82.57235660642421 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 338.8982833664989,
            "unit": "ns/iter",
            "extra": "iterations: 408853\ncpu: 333.004527299543 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 38.46704960222168,
            "unit": "ns/iter",
            "extra": "iterations: 3548067\ncpu: 38.45857476761288 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 36.721383096642064,
            "unit": "ns/iter",
            "extra": "iterations: 3677968\ncpu: 36.64689306704134 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 41.41358869672582,
            "unit": "ns/iter",
            "extra": "iterations: 3219886\ncpu: 41.39435371314393 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 19.285071835593968,
            "unit": "ns/iter",
            "extra": "iterations: 7348618\ncpu: 19.28099950221933 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 801.0001495106679,
            "unit": "ns/iter",
            "extra": "iterations: 177965\ncpu: 795.3541426685019 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 791.9006636705834,
            "unit": "ns/iter",
            "extra": "iterations: 176317\ncpu: 791.7336388436729 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 165.01540041738548,
            "unit": "ns/iter",
            "extra": "iterations: 981836\ncpu: 164.85349895501898 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.9392949657869423,
            "unit": "ns/iter",
            "extra": "iterations: 47804901\ncpu: 2.9297058893605907 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.182371693180301,
            "unit": "ns/iter",
            "extra": "iterations: 19101910\ncpu: 6.9438396474488675 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 452900.96394377446,
            "unit": "ns/iter",
            "extra": "iterations: 6197\ncpu: 21578.521865418752 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 3315126.1806488037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 68582.1 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11587877.27355957,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 146094.00000000023 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 312180.8632132933,
            "unit": "ns/iter",
            "extra": "iterations: 6208\ncpu: 21411.58182989691 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1407438.5166168213,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 69987.69999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8039250.373840332,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 151468.00000000015 ns\nthreads: 1"
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
          "id": "c1b959079bd6ae03183f54f246017aa1be5c706b",
          "message": "Fix span SetAttribute crash (#1283)",
          "timestamp": "2022-03-26T08:25:42Z",
          "tree_id": "13862d3814fa9d6f4edac4cef175701f1d00d248",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/c1b959079bd6ae03183f54f246017aa1be5c706b"
        },
        "date": 1648290913087,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 14441403.475674717,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 12499472.727272727 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 204.91140870851976,
            "unit": "ns/iter",
            "extra": "iterations: 683197\ncpu: 204.7148918979445 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.627751748471913,
            "unit": "ns/iter",
            "extra": "iterations: 86022034\ncpu: 1.6242385061483204 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6253028151880924,
            "unit": "ns/iter",
            "extra": "iterations: 86146954\ncpu: 1.6242152914657904 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 99.72532128488825,
            "unit": "ns/iter",
            "extra": "iterations: 1649813\ncpu: 84.73239088308796 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 328.5260040462842,
            "unit": "ns/iter",
            "extra": "iterations: 427086\ncpu: 327.87518204764393 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.682897864915766,
            "unit": "ns/iter",
            "extra": "iterations: 3767249\ncpu: 37.184295489891994 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.185351098251864,
            "unit": "ns/iter",
            "extra": "iterations: 3760701\ncpu: 37.16376281975084 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.440590608235794,
            "unit": "ns/iter",
            "extra": "iterations: 3480094\ncpu: 40.23971766279873 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.43837892145109,
            "unit": "ns/iter",
            "extra": "iterations: 6856326\ncpu: 20.41718844757382 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 797.8191250150791,
            "unit": "ns/iter",
            "extra": "iterations: 175119\ncpu: 797.6022019312578 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 803.4485001274267,
            "unit": "ns/iter",
            "extra": "iterations: 173384\ncpu: 803.1167812485583 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 165.4128474950027,
            "unit": "ns/iter",
            "extra": "iterations: 841705\ncpu: 165.37836890597063 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.497865333978105,
            "unit": "ns/iter",
            "extra": "iterations: 56032723\ncpu: 2.496061096299033 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.477210193540577,
            "unit": "ns/iter",
            "extra": "iterations: 18733332\ncpu: 7.473763877136218 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 440677.10816276213,
            "unit": "ns/iter",
            "extra": "iterations: 7859\ncpu: 17822.06387581117 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7908546.924591064,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 65232.000000000065 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11957664.489746094,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 139752.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 315021.4664408779,
            "unit": "ns/iter",
            "extra": "iterations: 7637\ncpu: 17934.92208982585 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1161686.897277832,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 50013.800000000054 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8160486.221313477,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 127127.99999999968 ns\nthreads: 1"
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
          "id": "a7e814a632fdaee0c76246358ffad811ac06a7e9",
          "message": "Synchronous Metric collection (Delta , Cumulative) (#1265)",
          "timestamp": "2022-03-30T01:01:37Z",
          "tree_id": "c0d9fb9e062e573ec2d6d2d5369689eaed72408c",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/a7e814a632fdaee0c76246358ffad811ac06a7e9"
        },
        "date": 1648663132546,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 23563515.056263316,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 12667300.000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 327.46277767088577,
            "unit": "ns/iter",
            "extra": "iterations: 531937\ncpu: 235.8706012178134 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.5019009595182626,
            "unit": "ns/iter",
            "extra": "iterations: 56072895\ncpu: 2.497525765345271 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.4431964901965535,
            "unit": "ns/iter",
            "extra": "iterations: 54216494\ncpu: 2.4347553716771135 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 87.154362686887,
            "unit": "ns/iter",
            "extra": "iterations: 1615932\ncpu: 86.90180032328091 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 365.2472806318166,
            "unit": "ns/iter",
            "extra": "iterations: 387773\ncpu: 364.0354021553847 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 39.52679808213391,
            "unit": "ns/iter",
            "extra": "iterations: 3429591\ncpu: 39.327954849426646 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 39.56110610696768,
            "unit": "ns/iter",
            "extra": "iterations: 3462698\ncpu: 39.39702509430504 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 44.51278582595579,
            "unit": "ns/iter",
            "extra": "iterations: 3044186\ncpu: 44.403824207850654 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 21.456574290310304,
            "unit": "ns/iter",
            "extra": "iterations: 6638973\ncpu: 21.372552652345476 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 879.321379026975,
            "unit": "ns/iter",
            "extra": "iterations: 162689\ncpu: 876.9941421976895 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1078.5406329939344,
            "unit": "ns/iter",
            "extra": "iterations: 158088\ncpu: 926.5706441981681 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 183.7878184000733,
            "unit": "ns/iter",
            "extra": "iterations: 869009\ncpu: 172.60028377151446 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.1855784357055694,
            "unit": "ns/iter",
            "extra": "iterations: 45903596\ncpu: 3.179095162827766 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.8971990801616485,
            "unit": "ns/iter",
            "extra": "iterations: 18069179\ncpu: 7.883601130964502 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 518462.2030610933,
            "unit": "ns/iter",
            "extra": "iterations: 6164\ncpu: 21692.083062946138 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9419877.529144287,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 251913 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11300251.483917236,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 389586.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 344400.0487342457,
            "unit": "ns/iter",
            "extra": "iterations: 6729\ncpu: 22622.796849457573 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2560104.0988252196,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 187713.9332365747 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7662968.635559082,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 379418.00000000023 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76c664a20b8219b91ead69ded6b7ee873b1a85ba",
          "message": "Rename `http_client_curl` to `opentelemetry_http_client_curl` (#1301)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-03-31T11:51:26-07:00",
          "tree_id": "e2f6346906aa6f84e0ce077d65078685ead26980",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/76c664a20b8219b91ead69ded6b7ee873b1a85ba"
        },
        "date": 1648754176666,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 20217084.884643555,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 12856980.000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 246.17520395949995,
            "unit": "ns/iter",
            "extra": "iterations: 598273\ncpu: 245.87303789407176 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.5671868988999247,
            "unit": "ns/iter",
            "extra": "iterations: 57635701\ncpu: 2.444420689877616 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.2848071291952614,
            "unit": "ns/iter",
            "extra": "iterations: 54502914\ncpu: 2.2693098574509243 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 98.44956478058792,
            "unit": "ns/iter",
            "extra": "iterations: 1523941\ncpu: 98.32244161683427 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 373.16903648550897,
            "unit": "ns/iter",
            "extra": "iterations: 345098\ncpu: 372.9450764710314 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 40.341145095349894,
            "unit": "ns/iter",
            "extra": "iterations: 3518560\ncpu: 40.325189850393336 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 39.04360618815639,
            "unit": "ns/iter",
            "extra": "iterations: 3504521\ncpu: 39.01217883984717 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 42.746751902753786,
            "unit": "ns/iter",
            "extra": "iterations: 3289930\ncpu: 42.64431158109747 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 29.21380070334738,
            "unit": "ns/iter",
            "extra": "iterations: 5247750\ncpu: 26.153761135724846 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 910.2087420981549,
            "unit": "ns/iter",
            "extra": "iterations: 159483\ncpu: 909.8731526244169 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 932.3163042683038,
            "unit": "ns/iter",
            "extra": "iterations: 147965\ncpu: 932.0812354272972 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 187.12230775153571,
            "unit": "ns/iter",
            "extra": "iterations: 813178\ncpu: 186.95254913438387 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.4258055574121813,
            "unit": "ns/iter",
            "extra": "iterations: 41383143\ncpu: 3.415376159321683 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.527168559135083,
            "unit": "ns/iter",
            "extra": "iterations: 17113094\ncpu: 8.45470725515795 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 571386.0988616943,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 24857.4 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 3773561.2392425537,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 77346.40000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 10608241.558074951,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 149161.9999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 338245.33938590105,
            "unit": "ns/iter",
            "extra": "iterations: 6799\ncpu: 22309.663185762613 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1007229.3281555176,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 75699.49999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5649972.163597574,
            "unit": "ns/iter",
            "extra": "iterations: 946\ncpu: 152520.93023255814 ns\nthreads: 1"
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
          "id": "33d9c628f2e7029b6b92733df69336f7e384c7e4",
          "message": "Implement periodic exporting metric reader (#1286)",
          "timestamp": "2022-04-01T14:07:44-07:00",
          "tree_id": "08bc3c6b0d5e345e481dfc903e1c4ae1147d2c38",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/33d9c628f2e7029b6b92733df69336f7e384c7e4"
        },
        "date": 1648888382426,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 19817543.029785156,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 13151800.000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 247.01589845546175,
            "unit": "ns/iter",
            "extra": "iterations: 568972\ncpu: 245.94531892606315 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9582770282511648,
            "unit": "ns/iter",
            "extra": "iterations: 71565129\ncpu: 1.9514713653349245 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.528901956473818,
            "unit": "ns/iter",
            "extra": "iterations: 71644968\ncpu: 1.9621740915565762 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 102.26639394111163,
            "unit": "ns/iter",
            "extra": "iterations: 1371742\ncpu: 101.95692776046808 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 394.77640438533365,
            "unit": "ns/iter",
            "extra": "iterations: 355370\ncpu: 393.8227762613614 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 44.95779592833433,
            "unit": "ns/iter",
            "extra": "iterations: 3122588\ncpu: 44.7731817325885 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 63.59415748700332,
            "unit": "ns/iter",
            "extra": "iterations: 3107858\ncpu: 45.30731455555563 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 61.96437378684287,
            "unit": "ns/iter",
            "extra": "iterations: 2859255\ncpu: 48.73475783027401 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 34.60585306099317,
            "unit": "ns/iter",
            "extra": "iterations: 5624342\ncpu: 24.82599742334305 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1321.812999396109,
            "unit": "ns/iter",
            "extra": "iterations: 141577\ncpu: 988.4931874527636 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1363.7723627052242,
            "unit": "ns/iter",
            "extra": "iterations: 140756\ncpu: 985.7391514393721 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 198.31149114261157,
            "unit": "ns/iter",
            "extra": "iterations: 705731\ncpu: 197.17172690444377 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.0316359824408994,
            "unit": "ns/iter",
            "extra": "iterations: 44076164\ncpu: 3.0283760628533822 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.988624310362583,
            "unit": "ns/iter",
            "extra": "iterations: 15589020\ncpu: 8.975131214149448 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 529612.0643615723,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 21752.400000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9816231.727600098,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 79383.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6606512.069702148,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 363430 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 372390.37052353215,
            "unit": "ns/iter",
            "extra": "iterations: 6509\ncpu: 20754.34014441543 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1456846.7140197754,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 66956.79999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8577988.147735596,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 446118.00000000035 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "237a0b26372b8a75ae941272b78bc07f12692c7b",
          "message": "Excempt should be applied on issue instead of PR (#1316)",
          "timestamp": "2022-04-04T20:41:02-07:00",
          "tree_id": "2d6d0e656fc5dfad523d31bfef3949ed51344b5b",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/237a0b26372b8a75ae941272b78bc07f12692c7b"
        },
        "date": 1649174060175,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 170.27793384518301,
            "unit": "ns/iter",
            "extra": "iterations: 844569\ncpu: 170.1290243899551 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5497639.179229736,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 59168.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 3811371.326446533,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 69845.2 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 8982341.289520264,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 281290.9999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 334110.4328558937,
            "unit": "ns/iter",
            "extra": "iterations: 5683\ncpu: 24870.54372690481 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1205113.172531128,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 66635.79999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7712395.191192627,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 253153.0000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.347649203361952,
            "unit": "ns/iter",
            "extra": "iterations: 44639441\ncpu: 3.3346788549614685 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.102648007008932,
            "unit": "ns/iter",
            "extra": "iterations: 17519863\ncpu: 8.058493379771294 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.5955920381977435,
            "unit": "ns/iter",
            "extra": "iterations: 56421127\ncpu: 2.450947142548216 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.5403649827074286,
            "unit": "ns/iter",
            "extra": "iterations: 57580232\ncpu: 2.4347800474301673 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 103.40020004854564,
            "unit": "ns/iter",
            "extra": "iterations: 1601312\ncpu: 92.59276143562275 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 519.3345305019589,
            "unit": "ns/iter",
            "extra": "iterations: 379670\ncpu: 367.03479337319243 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 44.53675814672064,
            "unit": "ns/iter",
            "extra": "iterations: 3431213\ncpu: 42.867405783319185 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 39.308020947110805,
            "unit": "ns/iter",
            "extra": "iterations: 3626013\ncpu: 39.244867572179125 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 43.12612914536977,
            "unit": "ns/iter",
            "extra": "iterations: 3154567\ncpu: 43.07114098384975 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 23.864980206950946,
            "unit": "ns/iter",
            "extra": "iterations: 6610509\ncpu: 23.833368958426654 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 966.3367139983864,
            "unit": "ns/iter",
            "extra": "iterations: 120806\ncpu: 948.1937983212757 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1012.6209259033203,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 1006.2919999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 254.02515179168492,
            "unit": "ns/iter",
            "extra": "iterations: 558795\ncpu: 253.60337869880726 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 23014259.338378906,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 10730830.000000004 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71329856+benlandrum@users.noreply.github.com",
            "name": "Ben Landrum",
            "username": "benlandrum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "3122254e8238738d74f78130817b090a8fdc0a9a",
          "message": "Remove implicitly deleted default constructor (#1267)\n\nCo-authored-by: Tom Tan <Tom.Tan@microsoft.com>\r\nCo-authored-by: Lalit Kumar Bhasin <lalit_fin@yahoo.com>",
          "timestamp": "2022-04-07T10:02:11-07:00",
          "tree_id": "46ac29c32e449bf28f39f4ff841d32efae30ce24",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/3122254e8238738d74f78130817b090a8fdc0a9a"
        },
        "date": 1649439460260,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 204.3701537377286,
            "unit": "ns/iter",
            "extra": "iterations: 679899\ncpu: 203.50022576882742 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 522497.89237976074,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 19741.800000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 11549873.352050781,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 87998.00000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 10641798.973083496,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 150991.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 437622.1679926529,
            "unit": "ns/iter",
            "extra": "iterations: 6639\ncpu: 20930.00451875283 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1729402.780532837,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 58551.49999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8222122.1923828125,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 151169.9999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.0028600882978402,
            "unit": "ns/iter",
            "extra": "iterations: 46703874\ncpu: 2.9748731336505405 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.98885330543998,
            "unit": "ns/iter",
            "extra": "iterations: 15613290\ncpu: 8.970569303458786 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 20736694.3359375,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 13305409.090909092 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 247.19954395175836,
            "unit": "ns/iter",
            "extra": "iterations: 566467\ncpu: 246.57164495019128 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.663548362833805,
            "unit": "ns/iter",
            "extra": "iterations: 71554888\ncpu: 1.9564631279976292 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.069133260922287,
            "unit": "ns/iter",
            "extra": "iterations: 71867107\ncpu: 1.9496067929936292 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 108.53997270481923,
            "unit": "ns/iter",
            "extra": "iterations: 1375151\ncpu: 101.58120817277519 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 445.90551548277256,
            "unit": "ns/iter",
            "extra": "iterations: 323563\ncpu: 431.113878904572 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 44.85247947270749,
            "unit": "ns/iter",
            "extra": "iterations: 3137431\ncpu: 44.60767424048527 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 46.31547485604323,
            "unit": "ns/iter",
            "extra": "iterations: 3137719\ncpu: 44.66062767252262 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 48.49568702792768,
            "unit": "ns/iter",
            "extra": "iterations: 2893130\ncpu: 48.255557130166984 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 25.68876880432668,
            "unit": "ns/iter",
            "extra": "iterations: 5711814\ncpu: 24.55953572717881 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1011.4022065197202,
            "unit": "ns/iter",
            "extra": "iterations: 147459\ncpu: 949.398137787452 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1073.7125388283762,
            "unit": "ns/iter",
            "extra": "iterations: 147262\ncpu: 950.5310263340175 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "e200c1f183ab1340448b0992e96054f5aa591f46",
          "message": "Bump actions/stale from 4 to 5 (#1323)",
          "timestamp": "2022-04-11T07:55:15-07:00",
          "tree_id": "7dcecc3fc7868dd3e9f82b71a8f69effcbfbb23d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/e200c1f183ab1340448b0992e96054f5aa591f46"
        },
        "date": 1649780150272,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 179.31329912709597,
            "unit": "ns/iter",
            "extra": "iterations: 928628\ncpu: 150.51441481411285 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 445716.88547175314,
            "unit": "ns/iter",
            "extra": "iterations: 8858\ncpu: 15717.058026642582 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7726568.460464478,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 48573.9 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12482426.166534424,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 112804.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 297923.2676804392,
            "unit": "ns/iter",
            "extra": "iterations: 8947\ncpu: 15798.24522186208 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1130982.3989868164,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 39768.800000000054 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7665102.481842041,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 101102.00000000013 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.3343435410784754,
            "unit": "ns/iter",
            "extra": "iterations: 42862872\ncpu: 3.326083702463988 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.12051839375263,
            "unit": "ns/iter",
            "extra": "iterations: 15339037\ncpu: 9.12037698324869 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 14441728.591918945,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 9205120 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 154.9910787020483,
            "unit": "ns/iter",
            "extra": "iterations: 910273\ncpu: 154.27163059873246 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 3.1023377287441614,
            "unit": "ns/iter",
            "extra": "iterations: 45674167\ncpu: 3.086212825731446 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.0888187402494247,
            "unit": "ns/iter",
            "extra": "iterations: 45452627\ncpu: 3.0856522330381475 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 75.49410355652641,
            "unit": "ns/iter",
            "extra": "iterations: 1847263\ncpu: 75.28792597480705 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 328.39724200963985,
            "unit": "ns/iter",
            "extra": "iterations: 426473\ncpu: 327.9916899780291 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.7978759815364,
            "unit": "ns/iter",
            "extra": "iterations: 3705870\ncpu: 37.77296559242499 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.844849765509665,
            "unit": "ns/iter",
            "extra": "iterations: 3707274\ncpu: 37.767588799748786 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 42.77873891943731,
            "unit": "ns/iter",
            "extra": "iterations: 3273782\ncpu: 42.67669624916992 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 22.097148107903674,
            "unit": "ns/iter",
            "extra": "iterations: 6340379\ncpu: 22.081503329690545 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 791.2308392739326,
            "unit": "ns/iter",
            "extra": "iterations: 177997\ncpu: 790.4942218127284 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 806.1665407391872,
            "unit": "ns/iter",
            "extra": "iterations: 177248\ncpu: 805.3811608593616 ns\nthreads: 1"
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
          "id": "755f109a0d44f277da33145af1e285da624b3fd8",
          "message": "ostream metrics example (#1312)",
          "timestamp": "2022-04-12T11:12:21-07:00",
          "tree_id": "b2e577139c4acaf1d5091a2992e92267b856bb46",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/755f109a0d44f277da33145af1e285da624b3fd8"
        },
        "date": 1649788170583,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 197.15105072045276,
            "unit": "ns/iter",
            "extra": "iterations: 710642\ncpu: 196.639658224535 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 519472.1221923828,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 19790.2 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 13070509.433746338,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 266459 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 13267924.785614014,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 496184 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 376671.83376997063,
            "unit": "ns/iter",
            "extra": "iterations: 6679\ncpu: 19988.68094026052 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3251561.2691037566,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 206172.4696356275 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8708972.930908203,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 502970.00000000035 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 4.104894602216916,
            "unit": "ns/iter",
            "extra": "iterations: 46672579\ncpu: 2.981015898007265 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 12.928719596839162,
            "unit": "ns/iter",
            "extra": "iterations: 15739250\ncpu: 8.907069904855694 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 18810488.960959695,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 11905354.545454547 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 243.69688291807432,
            "unit": "ns/iter",
            "extra": "iterations: 578125\ncpu: 242.70598918918918 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.1432572416446476,
            "unit": "ns/iter",
            "extra": "iterations: 69283265\ncpu: 1.9650012163832065 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.9589733292199643,
            "unit": "ns/iter",
            "extra": "iterations: 71784564\ncpu: 1.95186252019306 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 100.28846537744944,
            "unit": "ns/iter",
            "extra": "iterations: 1385357\ncpu: 100.10971901105638 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 450.83634842893537,
            "unit": "ns/iter",
            "extra": "iterations: 358442\ncpu: 396.12126927090026 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 63.57084958133315,
            "unit": "ns/iter",
            "extra": "iterations: 3094217\ncpu: 45.55449730901226 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 61.53337143679287,
            "unit": "ns/iter",
            "extra": "iterations: 3071913\ncpu: 45.187282322123025 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 64.95355937880326,
            "unit": "ns/iter",
            "extra": "iterations: 2884035\ncpu: 48.744068639943656 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 34.31792775992791,
            "unit": "ns/iter",
            "extra": "iterations: 5632194\ncpu: 24.682335161040236 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1294.408039446492,
            "unit": "ns/iter",
            "extra": "iterations: 146523\ncpu: 954.637838428096 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1295.9850176035152,
            "unit": "ns/iter",
            "extra": "iterations: 146502\ncpu: 949.3863565002523 ns\nthreads: 1"
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
          "id": "75c2a8f7a6bf81d9799e76804473609cc236b7be",
          "message": "Update yield logic for ARM processor (#1325)",
          "timestamp": "2022-04-12T14:33:39-07:00",
          "tree_id": "c26515fdd5b5debb2af48f98dd0d92d81ceded34",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/75c2a8f7a6bf81d9799e76804473609cc236b7be"
        },
        "date": 1649813541264,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 231.73806115661648,
            "unit": "ns/iter",
            "extra": "iterations: 786756\ncpu: 181.7452933310963 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 568123.5790252686,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 26603.500000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7614272.188741141,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 236242.00913242015 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 13362452.983856201,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 417144.0000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 356532.618974051,
            "unit": "ns/iter",
            "extra": "iterations: 5719\ncpu: 23835.51320160868 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2668019.157746879,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 185043.09392265195 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7453954.219818115,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 402434.9999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.9304062464140066,
            "unit": "ns/iter",
            "extra": "iterations: 41488734\ncpu: 3.3516544515434 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 10.659959360488882,
            "unit": "ns/iter",
            "extra": "iterations: 17094476\ncpu: 8.359308586001703 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 20403099.060058594,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 13470130.000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 304.6917438761739,
            "unit": "ns/iter",
            "extra": "iterations: 567353\ncpu: 247.61903083265622 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.7629364236627993,
            "unit": "ns/iter",
            "extra": "iterations: 49772469\ncpu: 2.7439406311147634 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.6772999487793956,
            "unit": "ns/iter",
            "extra": "iterations: 51905488\ncpu: 2.666662145628994 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 94.83559813745248,
            "unit": "ns/iter",
            "extra": "iterations: 1462340\ncpu: 94.53683821819818 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 442.2793798691714,
            "unit": "ns/iter",
            "extra": "iterations: 352580\ncpu: 397.2919621078904 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 44.55041255649323,
            "unit": "ns/iter",
            "extra": "iterations: 3188245\ncpu: 43.676944525906904 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 47.37739631866059,
            "unit": "ns/iter",
            "extra": "iterations: 3188986\ncpu: 46.49299181620739 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 49.99762115421973,
            "unit": "ns/iter",
            "extra": "iterations: 2976583\ncpu: 48.139964516359896 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 41.63565429683482,
            "unit": "ns/iter",
            "extra": "iterations: 4618359\ncpu: 33.36485968284404 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1516.4518356323242,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 1000.5639999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1318.1857730685676,
            "unit": "ns/iter",
            "extra": "iterations: 142509\ncpu: 1022.3066613336699 ns\nthreads: 1"
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
          "id": "29d68f1146e0082bf774685a41ad201883461d88",
          "message": "Implement Merge and Diff operation for Histogram Aggregation (#1303)",
          "timestamp": "2022-04-14T09:53:09-07:00",
          "tree_id": "c985975fc50fb1812e9f85d0c610c8e896136da4",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/29d68f1146e0082bf774685a41ad201883461d88"
        },
        "date": 1649956850568,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 149.15235645432082,
            "unit": "ns/iter",
            "extra": "iterations: 860966\ncpu: 148.5800833017796 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 8568077.087402344,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 78784.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 1852809.6675872803,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 65451.10000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11117119.789123535,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 328644.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 312098.7626430775,
            "unit": "ns/iter",
            "extra": "iterations: 6471\ncpu: 20761.2733735126 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1246572.732925415,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 61574.20000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7830228.805541992,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 329175.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.827301701555366,
            "unit": "ns/iter",
            "extra": "iterations: 47251004\ncpu: 2.8148692882800965 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.6073674219427,
            "unit": "ns/iter",
            "extra": "iterations: 18364991\ncpu: 7.606957171936537 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 30785560.607910156,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 11266077.777777778 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 228.4385907569118,
            "unit": "ns/iter",
            "extra": "iterations: 714731\ncpu: 208.76315704789633 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.2910505676753004,
            "unit": "ns/iter",
            "extra": "iterations: 62124204\ncpu: 2.2223109691675083 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.306462764614888,
            "unit": "ns/iter",
            "extra": "iterations: 50880783\ncpu: 2.301242101561212 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 95.20737247066099,
            "unit": "ns/iter",
            "extra": "iterations: 1524719\ncpu: 92.54026479633296 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 345.5854373943286,
            "unit": "ns/iter",
            "extra": "iterations: 391470\ncpu: 344.9919534063913 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 39.411099615259744,
            "unit": "ns/iter",
            "extra": "iterations: 3698821\ncpu: 39.326747631204675 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 38.237759141039994,
            "unit": "ns/iter",
            "extra": "iterations: 3993633\ncpu: 37.98433656773166 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 55.72850423779512,
            "unit": "ns/iter",
            "extra": "iterations: 2479654\ncpu: 55.64901393500877 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 21.13398334463586,
            "unit": "ns/iter",
            "extra": "iterations: 6089843\ncpu: 21.094583226529785 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 850.0911579054251,
            "unit": "ns/iter",
            "extra": "iterations: 156109\ncpu: 849.0362503122808 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 872.2962755407473,
            "unit": "ns/iter",
            "extra": "iterations: 165438\ncpu: 870.1803696853212 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}