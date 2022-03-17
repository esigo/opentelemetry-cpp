window.BENCHMARK_DATA = {
  "lastUpdate": 1647494135632,
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
      }
    ]
  }
}