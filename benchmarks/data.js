window.BENCHMARK_DATA = {
  "lastUpdate": 1644910742789,
  "repoUrl": "https://github.com/esigo/opentelemetry-cpp",
  "entries": {
    "OpenTelemetry-cpp exporters Benchmark": [
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
          "id": "6382d9b820a298da0c24404a00153d0c1357117a",
          "message": "revert checks",
          "timestamp": "2022-01-15T23:07:57+01:00",
          "tree_id": "54bc2392cd03f14f24053a270e30e48a610cd918",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/6382d9b820a298da0c24404a00153d0c1357117a"
        },
        "date": 1642285054271,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 25.330333930698536,
            "unit": "ns/iter",
            "extra": "iterations: 5524000\ncpu: 25.305467052860248 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 74.87974467601195,
            "unit": "ns/iter",
            "extra": "iterations: 1871000\ncpu: 74.68562266167825 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 633.2559283502501,
            "unit": "ns/iter",
            "extra": "iterations: 221000\ncpu: 633.0493212669681 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_local",
            "value": 1841661.9395829767,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 268974.3027888446 ns\nthreads: 1"
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
          "id": "07b9b8a210bc62365c93fc0567fc9b5f921fbd23",
          "message": "chckout",
          "timestamp": "2022-01-16T09:15:04+01:00",
          "tree_id": "0b4fffa334b2e2f78ab51a0814a82db9a92b5198",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/07b9b8a210bc62365c93fc0567fc9b5f921fbd23"
        },
        "date": 1642321647248,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 29.323384410045186,
            "unit": "ns/iter",
            "extra": "iterations: 4880000\ncpu: 29.260081967213114 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 79.3487000813254,
            "unit": "ns/iter",
            "extra": "iterations: 1782000\ncpu: 78.7980920314254 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 677.2178915602651,
            "unit": "ns/iter",
            "extra": "iterations: 201000\ncpu: 674.1587064676617 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_local",
            "value": 2119661.867618561,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 448469.6874999999 ns\nthreads: 1"
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
          "id": "2a821fdfa5a7ef3850319483df002f42f6d8b691",
          "message": "Continuous benchmark tests as part of the CI (#1174)",
          "timestamp": "2022-01-21T10:12:39-08:00",
          "tree_id": "be73c679916ac58ef57ef857fd51e17edd33b0c8",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/2a821fdfa5a7ef3850319483df002f42f6d8b691"
        },
        "date": 1642884714001,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 32.0779543211328,
            "unit": "ns/iter",
            "extra": "iterations: 4531000\ncpu: 31.705870668726558 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 88.93619149418201,
            "unit": "ns/iter",
            "extra": "iterations: 1652000\ncpu: 88.11089588377725 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 822.3621097542125,
            "unit": "ns/iter",
            "extra": "iterations: 169000\ncpu: 816.7218934911241 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2811750.919698811,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 457690.64748201467 ns\nthreads: 1"
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
          "id": "16a9c53680079a7a5f6728dd4bf4938efa214b30",
          "message": "Add @esigo as approver (#1183)",
          "timestamp": "2022-01-26T08:58:05-08:00",
          "tree_id": "ce15f948274aaca62ea8d3f05725540721d025fc",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/16a9c53680079a7a5f6728dd4bf4938efa214b30"
        },
        "date": 1643393394607,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 29.046734918220512,
            "unit": "ns/iter",
            "extra": "iterations: 4806000\ncpu: 29.044860590928007 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 79.7890775503594,
            "unit": "ns/iter",
            "extra": "iterations: 1757000\ncpu: 79.76084234490611 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 663.5516740699514,
            "unit": "ns/iter",
            "extra": "iterations: 211000\ncpu: 663.5421800947868 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1511746.9769124547,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 337215.98062953993 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "reyang@microsoft.com",
            "name": "Reiley Yang",
            "username": "reyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "43ad7b9fea54d6ff5400778e14e0b4b4ac41b7da",
          "message": "move non-active members to Emeritus (#1186)",
          "timestamp": "2022-01-31T17:54:10Z",
          "tree_id": "0daef00e22b53e70822c388c416989b402414274",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/43ad7b9fea54d6ff5400778e14e0b4b4ac41b7da"
        },
        "date": 1643745240179,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 36.59788104390702,
            "unit": "ns/iter",
            "extra": "iterations: 3979000\ncpu: 36.53066097009299 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 93.86625446257044,
            "unit": "ns/iter",
            "extra": "iterations: 1525000\ncpu: 93.7633442622951 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 869.5861439646026,
            "unit": "ns/iter",
            "extra": "iterations: 162000\ncpu: 867.7783950617284 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2503282.988249366,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 443334.7014925374 ns\nthreads: 1"
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
          "id": "033b16fe19f2ec13f4b96a74b3b33a04e1bc83a2",
          "message": "Prepare for 1.2.0 release (#1188)",
          "timestamp": "2022-02-01T11:58:47-08:00",
          "tree_id": "0dac4978a6de140a9ef209e3b12c97501a37329d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/033b16fe19f2ec13f4b96a74b3b33a04e1bc83a2"
        },
        "date": 1643816668210,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 25.86885653229606,
            "unit": "ns/iter",
            "extra": "iterations: 5410000\ncpu: 25.776210720887246 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 71.3295406765408,
            "unit": "ns/iter",
            "extra": "iterations: 1980000\ncpu: 71.00520202020202 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 593.1258201599121,
            "unit": "ns/iter",
            "extra": "iterations: 236000\ncpu: 590.875847457627 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1852969.4201210127,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 301027.41935483867 ns\nthreads: 1"
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
          "id": "44795b6d21738a8478d620c6f4cde6f12ea5ccac",
          "message": "Add Aggregation as part of metrics SDK. (#1178)",
          "timestamp": "2022-02-04T21:53:10-08:00",
          "tree_id": "4e8e0f917db86d65af01d12113128c0637c8e104",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/44795b6d21738a8478d620c6f4cde6f12ea5ccac"
        },
        "date": 1644049286280,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 29.099444929414037,
            "unit": "ns/iter",
            "extra": "iterations: 4796000\ncpu: 29.07821100917431 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 79.87918506179149,
            "unit": "ns/iter",
            "extra": "iterations: 1756000\ncpu: 79.78445330296128 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 664.020484348513,
            "unit": "ns/iter",
            "extra": "iterations: 212000\ncpu: 663.2580188679246 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1880519.604556775,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 307280.6878306878 ns\nthreads: 1"
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
          "id": "e1c85570329bb775d5294a1eb2d3f1d2b9f7e4b0",
          "message": "fix errors in SDK documentation (#1201)",
          "timestamp": "2022-02-09T12:35:54-08:00",
          "tree_id": "6f0fa081aec644ec46538fc807881e46f6abc82d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/e1c85570329bb775d5294a1eb2d3f1d2b9f7e4b0"
        },
        "date": 1644443558473,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 33.48621935520924,
            "unit": "ns/iter",
            "extra": "iterations: 4083000\ncpu: 33.42561841783003 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 87.42183864080391,
            "unit": "ns/iter",
            "extra": "iterations: 1643000\ncpu: 87.17212416311625 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 813.4488221053239,
            "unit": "ns/iter",
            "extra": "iterations: 182000\ncpu: 810.8362637362638 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2676890.5085486337,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 471115.5405405408 ns\nthreads: 1"
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
          "id": "7485102bfaa68f8a5d4d70312c60cb928e70f00c",
          "message": "Change Monday's community meeting time (13:00 PT - 14:00 PT) (#1204)",
          "timestamp": "2022-02-11T09:47:47-08:00",
          "tree_id": "5402daaa08f470822751ac029072af80d68fefaa",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/7485102bfaa68f8a5d4d70312c60cb928e70f00c"
        },
        "date": 1644603110914,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 25.863202213471084,
            "unit": "ns/iter",
            "extra": "iterations: 5419000\ncpu: 25.855065510241747 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 77.46917766760725,
            "unit": "ns/iter",
            "extra": "iterations: 1810000\ncpu: 77.15734806629833 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 646.8459351422035,
            "unit": "ns/iter",
            "extra": "iterations: 219000\ncpu: 645.7054794520546 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1542288.229006146,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 270808.2568807339 ns\nthreads: 1"
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
          "id": "9ed312b29ca0af1d92bbf0cf63ab8a6d88272bfb",
          "message": "fix ostream_log_test Mac (#1208)",
          "timestamp": "2022-02-14T13:05:25-08:00",
          "tree_id": "1c45c26c34a4c593b49c6a31c05a8d7e9bb60312",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/9ed312b29ca0af1d92bbf0cf63ab8a6d88272bfb"
        },
        "date": 1644876177866,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 32.73266722753997,
            "unit": "ns/iter",
            "extra": "iterations: 4306000\ncpu: 32.68351137947051 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 91.128018040654,
            "unit": "ns/iter",
            "extra": "iterations: 1569000\ncpu: 90.36978967495217 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 738.3508026284516,
            "unit": "ns/iter",
            "extra": "iterations: 189000\ncpu: 737.8190476190476 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2090883.7649911484,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 387950.8021390376 ns\nthreads: 1"
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
          "id": "15c6f33631d8cdf09b85911f35263449294d31a4",
          "message": "Update grpc to v1.43.2 to support VS2022/MSVC 19.30 and bazel 5.0 (#1207)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-02-14T20:24:58-08:00",
          "tree_id": "dff039d78807ee53fdc13748fd26ef7b48546fa8",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/15c6f33631d8cdf09b85911f35263449294d31a4"
        },
        "date": 1644910740240,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 38.11284798343166,
            "unit": "ns/iter",
            "extra": "iterations: 3675000\ncpu: 38.07224489795918 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 110.45100642185585,
            "unit": "ns/iter",
            "extra": "iterations: 1275000\ncpu: 110.15498039215686 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 854.3780355742483,
            "unit": "ns/iter",
            "extra": "iterations: 165000\ncpu: 852.112121212121 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2130230.153328404,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 386581.8443804037 ns\nthreads: 1"
          }
        ]
      }
    ],
    "OpenTelemetry-cpp sdk Benchmark": [
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
          "id": "6382d9b820a298da0c24404a00153d0c1357117a",
          "message": "revert checks",
          "timestamp": "2022-01-15T23:07:57+01:00",
          "tree_id": "54bc2392cd03f14f24053a270e30e48a610cd918",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/6382d9b820a298da0c24404a00153d0c1357117a"
        },
        "date": 1642285114923,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.7763561425541603,
            "unit": "ns/iter",
            "extra": "iterations: 97122402\ncpu: 1.4396760903833499 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.4429942484381837,
            "unit": "ns/iter",
            "extra": "iterations: 97391982\ncpu: 1.4355760826389181 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 75.12328011481152,
            "unit": "ns/iter",
            "extra": "iterations: 1870168\ncpu: 75.07202561481111 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 294.2585923476481,
            "unit": "ns/iter",
            "extra": "iterations: 476773\ncpu: 293.3588940648905 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 33.118569077888516,
            "unit": "ns/iter",
            "extra": "iterations: 4255358\ncpu: 32.90451708175907 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 32.93937363635121,
            "unit": "ns/iter",
            "extra": "iterations: 4263496\ncpu: 32.85951247520814 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 35.73270106539359,
            "unit": "ns/iter",
            "extra": "iterations: 3926650\ncpu: 35.62171316516625 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 18.214225534015938,
            "unit": "ns/iter",
            "extra": "iterations: 7746191\ncpu: 18.069229121770935 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 885.0563099444038,
            "unit": "ns/iter",
            "extra": "iterations: 196946\ncpu: 709.5858763315827 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 723.7154998127279,
            "unit": "ns/iter",
            "extra": "iterations: 195644\ncpu: 712.5922594099494 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 451258.0466210464,
            "unit": "ns/iter",
            "extra": "iterations: 8347\ncpu: 17424.991014735835 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 2306352.8537750244,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 52796.10000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12248668.670654297,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 144933.99999999988 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 281806.3436584899,
            "unit": "ns/iter",
            "extra": "iterations: 7881\ncpu: 17807.76551199087 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 917101.1447906494,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 47803.5 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7680356.502532959,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 137934.9999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.5068818506505055,
            "unit": "ns/iter",
            "extra": "iterations: 55875509\ncpu: 2.501104732665612 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.535574788173326,
            "unit": "ns/iter",
            "extra": "iterations: 18728621\ncpu: 7.4693486509230995 ns\nthreads: 1"
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
          "id": "07b9b8a210bc62365c93fc0567fc9b5f921fbd23",
          "message": "chckout",
          "timestamp": "2022-01-16T09:15:04+01:00",
          "tree_id": "0b4fffa334b2e2f78ab51a0814a82db9a92b5198",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/07b9b8a210bc62365c93fc0567fc9b5f921fbd23"
        },
        "date": 1642321650367,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.3951248924961397,
            "unit": "ns/iter",
            "extra": "iterations: 54674045\ncpu: 2.391590013140605 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.471283370906495,
            "unit": "ns/iter",
            "extra": "iterations: 54516922\ncpu: 2.4625583227167525 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 93.78891843426442,
            "unit": "ns/iter",
            "extra": "iterations: 1475449\ncpu: 92.09318654863708 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 382.5008928493517,
            "unit": "ns/iter",
            "extra": "iterations: 365732\ncpu: 381.25157218947226 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 44.034983913583844,
            "unit": "ns/iter",
            "extra": "iterations: 3355761\ncpu: 41.741828455602196 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 42.02317650622823,
            "unit": "ns/iter",
            "extra": "iterations: 3273032\ncpu: 41.87829510985529 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 45.6075093006442,
            "unit": "ns/iter",
            "extra": "iterations: 3100672\ncpu: 45.50136228533685 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 24.652882443285876,
            "unit": "ns/iter",
            "extra": "iterations: 5603990\ncpu: 24.538284329558053 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1056.2223174645649,
            "unit": "ns/iter",
            "extra": "iterations: 117626\ncpu: 990.0336660262177 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 952.739276877626,
            "unit": "ns/iter",
            "extra": "iterations: 130041\ncpu: 941.470766911975 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6251280.307769775,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 71075 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 5344475.269317627,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 76997.7 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 10221254.825592041,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 156463.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 5322294.235229492,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 52203.00000000011 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1405555.009841919,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 68611.80000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7623798.847198486,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 179739.99999999988 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 4.641780330055118,
            "unit": "ns/iter",
            "extra": "iterations: 41351607\ncpu: 3.3785313349490873 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 10.911760148388689,
            "unit": "ns/iter",
            "extra": "iterations: 16900211\ncpu: 8.080952362074061 ns\nthreads: 1"
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
          "id": "2a821fdfa5a7ef3850319483df002f42f6d8b691",
          "message": "Continuous benchmark tests as part of the CI (#1174)",
          "timestamp": "2022-01-21T10:12:39-08:00",
          "tree_id": "be73c679916ac58ef57ef857fd51e17edd33b0c8",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/2a821fdfa5a7ef3850319483df002f42f6d8b691"
        },
        "date": 1642884711190,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 3.631833565355562,
            "unit": "ns/iter",
            "extra": "iterations: 56066383\ncpu: 2.526035967042854 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.6882572088201897,
            "unit": "ns/iter",
            "extra": "iterations: 54370199\ncpu: 2.6344634125764377 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.49176082425059,
            "unit": "ns/iter",
            "extra": "iterations: 1542187\ncpu: 85.38504085431923 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 389.63671158349575,
            "unit": "ns/iter",
            "extra": "iterations: 375264\ncpu: 388.4787776072313 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 45.693858396464655,
            "unit": "ns/iter",
            "extra": "iterations: 3200190\ncpu: 43.35042606845219 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 43.41601318370614,
            "unit": "ns/iter",
            "extra": "iterations: 3214998\ncpu: 43.2049413405545 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 44.873423933402755,
            "unit": "ns/iter",
            "extra": "iterations: 3184619\ncpu: 44.80353850806011 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 22.708685055220283,
            "unit": "ns/iter",
            "extra": "iterations: 6225626\ncpu: 22.647168332951583 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 972.0740145262008,
            "unit": "ns/iter",
            "extra": "iterations: 151178\ncpu: 922.0746404900184 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1137.728997696174,
            "unit": "ns/iter",
            "extra": "iterations: 148979\ncpu: 984.2064989025283 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 736448.7648010254,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 22863.800000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 1710700.273513794,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 68737.10000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11735293.865203857,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 299631.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 387853.9811634329,
            "unit": "ns/iter",
            "extra": "iterations: 6508\ncpu: 24788.952059004303 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1386301.2790679932,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 67174.30000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7470927.2384643555,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 270407.99999999977 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.2466624049644954,
            "unit": "ns/iter",
            "extra": "iterations: 41895095\ncpu: 3.237090165328424 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.16254865685739,
            "unit": "ns/iter",
            "extra": "iterations: 17562633\ncpu: 8.132470797516524 ns\nthreads: 1"
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
          "id": "16a9c53680079a7a5f6728dd4bf4938efa214b30",
          "message": "Add @esigo as approver (#1183)",
          "timestamp": "2022-01-26T08:58:05-08:00",
          "tree_id": "ce15f948274aaca62ea8d3f05725540721d025fc",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/16a9c53680079a7a5f6728dd4bf4938efa214b30"
        },
        "date": 1643393440496,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6647028559696522,
            "unit": "ns/iter",
            "extra": "iterations: 84267296\ncpu: 1.6583313649936031 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6589868005703747,
            "unit": "ns/iter",
            "extra": "iterations: 84414645\ncpu: 1.6584622253638572 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 86.61752979063807,
            "unit": "ns/iter",
            "extra": "iterations: 1650965\ncpu: 84.80785480007147 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 330.61914812609507,
            "unit": "ns/iter",
            "extra": "iterations: 422562\ncpu: 330.43009073224744 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.28888162032043,
            "unit": "ns/iter",
            "extra": "iterations: 3761257\ncpu: 37.20032957067279 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.41885375262486,
            "unit": "ns/iter",
            "extra": "iterations: 3765141\ncpu: 37.17220683103231 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.33721124683095,
            "unit": "ns/iter",
            "extra": "iterations: 3482535\ncpu: 40.22874141968417 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.44385633973581,
            "unit": "ns/iter",
            "extra": "iterations: 6849416\ncpu: 20.42731818303924 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 800.9845692052049,
            "unit": "ns/iter",
            "extra": "iterations: 175461\ncpu: 795.4582499814773 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 882.8957588605019,
            "unit": "ns/iter",
            "extra": "iterations: 175028\ncpu: 801.5294695705835 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 501313.0555475809,
            "unit": "ns/iter",
            "extra": "iterations: 7339\ncpu: 20177.762637961576 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8302633.762359619,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 68599.99999999978 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11686222.553253174,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 409920 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 309110.70725013467,
            "unit": "ns/iter",
            "extra": "iterations: 7250\ncpu: 18424.89655172414 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1215112.9245758057,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 51303.69999999995 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8129906.65435791,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 392914.99999999977 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.508447360231569,
            "unit": "ns/iter",
            "extra": "iterations: 55802904\ncpu: 2.500593875902946 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.486202469794713,
            "unit": "ns/iter",
            "extra": "iterations: 18712900\ncpu: 7.478247625969251 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "reyang@microsoft.com",
            "name": "Reiley Yang",
            "username": "reyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "43ad7b9fea54d6ff5400778e14e0b4b4ac41b7da",
          "message": "move non-active members to Emeritus (#1186)",
          "timestamp": "2022-01-31T17:54:10Z",
          "tree_id": "0daef00e22b53e70822c388c416989b402414274",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/43ad7b9fea54d6ff5400778e14e0b4b4ac41b7da"
        },
        "date": 1643745242099,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 3.128169991865792,
            "unit": "ns/iter",
            "extra": "iterations: 49182516\ncpu: 3.1089828751339197 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.256416486624273,
            "unit": "ns/iter",
            "extra": "iterations: 44282637\ncpu: 3.249702586591671 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 147.58465917536995,
            "unit": "ns/iter",
            "extra": "iterations: 1232253\ncpu: 111.61766293123249 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 474.2603457855067,
            "unit": "ns/iter",
            "extra": "iterations: 295061\ncpu: 471.3235568238432 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 51.890875421875414,
            "unit": "ns/iter",
            "extra": "iterations: 2717370\ncpu: 51.8722514784516 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 50.522513115181134,
            "unit": "ns/iter",
            "extra": "iterations: 2765853\ncpu: 50.47263900142198 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 50.5900390253567,
            "unit": "ns/iter",
            "extra": "iterations: 2795471\ncpu: 50.45886721772468 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 26.337963822633228,
            "unit": "ns/iter",
            "extra": "iterations: 5440718\ncpu: 25.85892156145567 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1036.4140609128015,
            "unit": "ns/iter",
            "extra": "iterations: 139052\ncpu: 1019.0942956591786 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1170.2378919025339,
            "unit": "ns/iter",
            "extra": "iterations: 121102\ncpu: 1020.2176677511524 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 560544.2523956299,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 24245.1 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 5297666.549682617,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 84292.30000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11780877.113342285,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 332631.0000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 404299.38276685483,
            "unit": "ns/iter",
            "extra": "iterations: 5699\ncpu: 25208.01895069311 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1363578.5579681396,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 73591.80000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7525768.280029297,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 337337.0000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.178354500746179,
            "unit": "ns/iter",
            "extra": "iterations: 37667925\ncpu: 3.6318353081567416 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 11.0319865254032,
            "unit": "ns/iter",
            "extra": "iterations: 15715028\ncpu: 8.878386980920427 ns\nthreads: 1"
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
          "id": "033b16fe19f2ec13f4b96a74b3b33a04e1bc83a2",
          "message": "Prepare for 1.2.0 release (#1188)",
          "timestamp": "2022-02-01T11:58:47-08:00",
          "tree_id": "0dac4978a6de140a9ef209e3b12c97501a37329d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/033b16fe19f2ec13f4b96a74b3b33a04e1bc83a2"
        },
        "date": 1643816670854,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.4458225006143723,
            "unit": "ns/iter",
            "extra": "iterations: 96730509\ncpu: 1.4406333786582266 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.4625472584782324,
            "unit": "ns/iter",
            "extra": "iterations: 97189151\ncpu: 1.4417843818802372 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 75.43360967389292,
            "unit": "ns/iter",
            "extra": "iterations: 1859538\ncpu: 75.19760284543797 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 297.33242493421744,
            "unit": "ns/iter",
            "extra": "iterations: 474560\ncpu: 294.35329568442364 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 33.07524502440304,
            "unit": "ns/iter",
            "extra": "iterations: 4239970\ncpu: 32.946318016401065 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 33.65182055769441,
            "unit": "ns/iter",
            "extra": "iterations: 4245782\ncpu: 32.95338762093765 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 36.14590753345831,
            "unit": "ns/iter",
            "extra": "iterations: 3924702\ncpu: 35.66573971730848 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 18.13798923658892,
            "unit": "ns/iter",
            "extra": "iterations: 7735490\ncpu: 18.09841393370038 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 712.0121935565018,
            "unit": "ns/iter",
            "extra": "iterations: 197436\ncpu: 708.6554630361228 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 716.9825275925768,
            "unit": "ns/iter",
            "extra": "iterations: 196198\ncpu: 711.4827877960014 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 12391824.722290039,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 58946 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9029099.941253662,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 133482.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6566326.61819458,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 481662.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3908987.7605438232,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 58620.80000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3871906.462242548,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 112667.89431545236 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5294256.210327148,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 478287 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.22369496452382,
            "unit": "ns/iter",
            "extra": "iterations: 62874157\ncpu: 2.215132681619891 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.714483279679286,
            "unit": "ns/iter",
            "extra": "iterations: 21137691\ncpu: 6.625780460126889 ns\nthreads: 1"
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
          "id": "44795b6d21738a8478d620c6f4cde6f12ea5ccac",
          "message": "Add Aggregation as part of metrics SDK. (#1178)",
          "timestamp": "2022-02-04T21:53:10-08:00",
          "tree_id": "4e8e0f917db86d65af01d12113128c0637c8e104",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/44795b6d21738a8478d620c6f4cde6f12ea5ccac"
        },
        "date": 1644049285081,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 246.4317940735189,
            "unit": "ns/iter",
            "extra": "iterations: 780396\ncpu: 186.00800106612542 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.67214472357439,
            "unit": "ns/iter",
            "extra": "iterations: 86042124\ncpu: 1.6245170795644233 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6309455407735758,
            "unit": "ns/iter",
            "extra": "iterations: 86190975\ncpu: 1.6276089230920059 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.00055944348141,
            "unit": "ns/iter",
            "extra": "iterations: 1647268\ncpu: 84.88885840069742 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 332.4388213739906,
            "unit": "ns/iter",
            "extra": "iterations: 422899\ncpu: 330.13674659906997 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.17767938778465,
            "unit": "ns/iter",
            "extra": "iterations: 3767999\ncpu: 37.14799287367115 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.160572479137535,
            "unit": "ns/iter",
            "extra": "iterations: 3767796\ncpu: 37.14293449008387 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.216408303967,
            "unit": "ns/iter",
            "extra": "iterations: 3483220\ncpu: 40.19984382266983 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.422005878873737,
            "unit": "ns/iter",
            "extra": "iterations: 6859920\ncpu: 20.4114042146264 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 795.150727016854,
            "unit": "ns/iter",
            "extra": "iterations: 176029\ncpu: 794.6588346238402 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 809.3350887839817,
            "unit": "ns/iter",
            "extra": "iterations: 175323\ncpu: 799.6418039846453 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 168.4645241056778,
            "unit": "ns/iter",
            "extra": "iterations: 843353\ncpu: 166.46196788296245 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.2134192464107225,
            "unit": "ns/iter",
            "extra": "iterations: 63088924\ncpu: 2.2113818267054297 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.603227541181448,
            "unit": "ns/iter",
            "extra": "iterations: 21167829\ncpu: 6.597048757338319 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 11797204.25605774,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 34757.80000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7197575.569152832,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 71027.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5070648.193359375,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 122815 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3753915.0714874268,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 31164.200000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3884940.1473999023,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 66494.2 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4485994.214596956,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 123492.86956521739 ns\nthreads: 1"
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
          "id": "e1c85570329bb775d5294a1eb2d3f1d2b9f7e4b0",
          "message": "fix errors in SDK documentation (#1201)",
          "timestamp": "2022-02-09T12:35:54-08:00",
          "tree_id": "6f0fa081aec644ec46538fc807881e46f6abc82d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/e1c85570329bb775d5294a1eb2d3f1d2b9f7e4b0"
        },
        "date": 1644443556595,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 249.545119660328,
            "unit": "ns/iter",
            "extra": "iterations: 602703\ncpu: 244.06515315171822 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.463353091633482,
            "unit": "ns/iter",
            "extra": "iterations: 55756012\ncpu: 2.4549783079894594 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.759811114694116,
            "unit": "ns/iter",
            "extra": "iterations: 56333268\ncpu: 2.7090989999017983 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 92.6169491303449,
            "unit": "ns/iter",
            "extra": "iterations: 1453006\ncpu: 92.48681698492638 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 382.01755832506603,
            "unit": "ns/iter",
            "extra": "iterations: 364788\ncpu: 379.7687972192069 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 43.27318500712034,
            "unit": "ns/iter",
            "extra": "iterations: 3170326\ncpu: 43.136163284154385 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 45.03285763007819,
            "unit": "ns/iter",
            "extra": "iterations: 3381120\ncpu: 44.801722506151826 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 47.712191797469785,
            "unit": "ns/iter",
            "extra": "iterations: 3066054\ncpu: 47.54857546540277 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 24.313099009920844,
            "unit": "ns/iter",
            "extra": "iterations: 6140109\ncpu: 24.29466643018882 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1144.5075582266993,
            "unit": "ns/iter",
            "extra": "iterations: 158011\ncpu: 955.6144825360255 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 921.3223546358914,
            "unit": "ns/iter",
            "extra": "iterations: 153942\ncpu: 911.6868690805637 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 185.71917114077098,
            "unit": "ns/iter",
            "extra": "iterations: 800453\ncpu: 164.60666647510848 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.2126915382796857,
            "unit": "ns/iter",
            "extra": "iterations: 42803769\ncpu: 3.208532874756894 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.173076096083594,
            "unit": "ns/iter",
            "extra": "iterations: 17163615\ncpu: 8.103333709128293 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 518105.50689697266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 22091.9 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9411416.053771973,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 79126.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11696839.332580566,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 286116.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 327398.43558804796,
            "unit": "ns/iter",
            "extra": "iterations: 4972\ncpu: 21782.300884955752 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1430856.2278747559,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 69010.2 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7438073.15826416,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 288951.00000000006 ns\nthreads: 1"
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
          "id": "7485102bfaa68f8a5d4d70312c60cb928e70f00c",
          "message": "Change Monday's community meeting time (13:00 PT - 14:00 PT) (#1204)",
          "timestamp": "2022-02-11T09:47:47-08:00",
          "tree_id": "5402daaa08f470822751ac029072af80d68fefaa",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/7485102bfaa68f8a5d4d70312c60cb928e70f00c"
        },
        "date": 1644603110592,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 154.8461599933188,
            "unit": "ns/iter",
            "extra": "iterations: 902521\ncpu: 154.1404576735611 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.9344046177312535,
            "unit": "ns/iter",
            "extra": "iterations: 45331796\ncpu: 2.9320391365036587 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.085095021270295,
            "unit": "ns/iter",
            "extra": "iterations: 45259108\ncpu: 3.0811057964288655 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 77.41976238913676,
            "unit": "ns/iter",
            "extra": "iterations: 1826744\ncpu: 77.3197010637506 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 332.1901742597453,
            "unit": "ns/iter",
            "extra": "iterations: 423072\ncpu: 331.69838703577665 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 38.434514124142815,
            "unit": "ns/iter",
            "extra": "iterations: 3708943\ncpu: 37.78931086296016 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 38.84230253170851,
            "unit": "ns/iter",
            "extra": "iterations: 3708472\ncpu: 37.78618255712867 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 58.25304388869605,
            "unit": "ns/iter",
            "extra": "iterations: 3279003\ncpu: 42.73143391451608 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 24.03830971713744,
            "unit": "ns/iter",
            "extra": "iterations: 6333781\ncpu: 22.125030846503844 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 801.8860268819412,
            "unit": "ns/iter",
            "extra": "iterations: 174359\ncpu: 801.1837645317979 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 826.1962426644992,
            "unit": "ns/iter",
            "extra": "iterations: 171603\ncpu: 821.4669906703265 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 158.68943220194151,
            "unit": "ns/iter",
            "extra": "iterations: 873842\ncpu: 158.62169591299116 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.3994455336871,
            "unit": "ns/iter",
            "extra": "iterations: 42617960\ncpu: 3.3943647232293617 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.13890352972162,
            "unit": "ns/iter",
            "extra": "iterations: 15351668\ncpu: 9.123881522190292 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 464603.11931377935,
            "unit": "ns/iter",
            "extra": "iterations: 8593\ncpu: 16118.573257302456 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 4135951.776614134,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 154923.2183908046 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11038546.562194824,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 324388.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 298192.03296246147,
            "unit": "ns/iter",
            "extra": "iterations: 8847\ncpu: 15854.346106024637 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2497045.4179634484,
            "unit": "ns/iter",
            "extra": "iterations: 944\ncpu: 151761.8644067797 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7800979.6142578125,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 312480.0000000005 ns\nthreads: 1"
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
          "id": "9ed312b29ca0af1d92bbf0cf63ab8a6d88272bfb",
          "message": "fix ostream_log_test Mac (#1208)",
          "timestamp": "2022-02-14T13:05:25-08:00",
          "tree_id": "1c45c26c34a4c593b49c6a31c05a8d7e9bb60312",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/9ed312b29ca0af1d92bbf0cf63ab8a6d88272bfb"
        },
        "date": 1644876180629,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 230.85321504258155,
            "unit": "ns/iter",
            "extra": "iterations: 599248\ncpu: 228.88169839532213 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.8725323195966606,
            "unit": "ns/iter",
            "extra": "iterations: 71984616\ncpu: 1.8516831429648803 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6679896042464333,
            "unit": "ns/iter",
            "extra": "iterations: 84286067\ncpu: 1.6501386878094573 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 89.76053059432894,
            "unit": "ns/iter",
            "extra": "iterations: 1613757\ncpu: 88.11277038612384 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 340.087620472744,
            "unit": "ns/iter",
            "extra": "iterations: 405768\ncpu: 339.63693539165257 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 40.05347539725264,
            "unit": "ns/iter",
            "extra": "iterations: 3637053\ncpu: 39.99301082497289 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 39.80211325178672,
            "unit": "ns/iter",
            "extra": "iterations: 3644334\ncpu: 39.73016743251301 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 41.891814688688356,
            "unit": "ns/iter",
            "extra": "iterations: 3231055\ncpu: 41.713960300892424 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 21.704005377447807,
            "unit": "ns/iter",
            "extra": "iterations: 6762566\ncpu: 20.274818759624665 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 845.0100390596201,
            "unit": "ns/iter",
            "extra": "iterations: 166158\ncpu: 841.3504014251496 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 862.4282412970759,
            "unit": "ns/iter",
            "extra": "iterations: 168481\ncpu: 859.519471038278 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 179.92865013147656,
            "unit": "ns/iter",
            "extra": "iterations: 727469\ncpu: 179.89618801625915 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.763830037806847,
            "unit": "ns/iter",
            "extra": "iterations: 53473485\ncpu: 2.7625822405253744 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.066417683938143,
            "unit": "ns/iter",
            "extra": "iterations: 17083317\ncpu: 8.056965752025794 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 484187.1892830127,
            "unit": "ns/iter",
            "extra": "iterations: 7826\ncpu: 18182.83925376949 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 6172625.780105591,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 57177.59999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12754461.765289307,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 127180.99999999981 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 328514.31451113673,
            "unit": "ns/iter",
            "extra": "iterations: 7651\ncpu: 18316.821330545026 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1340988.6360168457,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 49877.400000000016 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8387689.590454102,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 137905.00000000038 ns\nthreads: 1"
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
          "id": "15c6f33631d8cdf09b85911f35263449294d31a4",
          "message": "Update grpc to v1.43.2 to support VS2022/MSVC 19.30 and bazel 5.0 (#1207)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-02-14T20:24:58-08:00",
          "tree_id": "dff039d78807ee53fdc13748fd26ef7b48546fa8",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/15c6f33631d8cdf09b85911f35263449294d31a4"
        },
        "date": 1644910741629,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 244.2810382719541,
            "unit": "ns/iter",
            "extra": "iterations: 567369\ncpu: 244.28052995493232 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.944919857594913,
            "unit": "ns/iter",
            "extra": "iterations: 71642035\ncpu: 1.9353135348542239 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.9367379156635913,
            "unit": "ns/iter",
            "extra": "iterations: 71548671\ncpu: 1.9322343527526882 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 101.35769248993284,
            "unit": "ns/iter",
            "extra": "iterations: 1377275\ncpu: 101.0925922564484 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 393.6442064465521,
            "unit": "ns/iter",
            "extra": "iterations: 354500\ncpu: 392.8677009873059 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 44.44600341740186,
            "unit": "ns/iter",
            "extra": "iterations: 3156801\ncpu: 44.34460708799827 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 44.73059497420257,
            "unit": "ns/iter",
            "extra": "iterations: 3154311\ncpu: 44.567292191543565 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 48.26547077488368,
            "unit": "ns/iter",
            "extra": "iterations: 2897801\ncpu: 48.106201909654914 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 24.3779702010821,
            "unit": "ns/iter",
            "extra": "iterations: 5697055\ncpu: 24.326989997463592 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 947.1986175516085,
            "unit": "ns/iter",
            "extra": "iterations: 146607\ncpu: 945.9070849277316 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 968.2480287217353,
            "unit": "ns/iter",
            "extra": "iterations: 146532\ncpu: 957.3574372833224 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 198.1094889475334,
            "unit": "ns/iter",
            "extra": "iterations: 697847\ncpu: 197.59732434186864 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.0126232316324955,
            "unit": "ns/iter",
            "extra": "iterations: 46754721\ncpu: 3.0103034942717337 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.989596128489607,
            "unit": "ns/iter",
            "extra": "iterations: 15671700\ncpu: 8.972759815463544 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 524907.112121582,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 21182.000000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7384874.8207092285,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 73726.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12055673.599243164,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 462612.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 365685.46121454844,
            "unit": "ns/iter",
            "extra": "iterations: 6588\ncpu: 21434.98785670917 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1187242.5079345703,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 59172.400000000016 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8359959.125518799,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 436876.99999999994 ns\nthreads: 1"
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
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "distinct": true,
          "id": "6382d9b820a298da0c24404a00153d0c1357117a",
          "message": "revert checks",
          "timestamp": "2022-01-15T23:07:57+01:00",
          "tree_id": "54bc2392cd03f14f24053a270e30e48a610cd918",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/6382d9b820a298da0c24404a00153d0c1357117a"
        },
        "date": 1642285202930,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.7190435208671868,
            "unit": "ns/iter",
            "extra": "iterations: 81201315\ncpu: 1.7168588956964552 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.7183960221384895,
            "unit": "ns/iter",
            "extra": "iterations: 81594591\ncpu: 1.7157093170550974 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.996242026065934,
            "unit": "ns/iter",
            "extra": "iterations: 15598903\ncpu: 8.973214334366979 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.7133164622047492,
            "unit": "ns/iter",
            "extra": "iterations: 82004182\ncpu: 1.705165475585135 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.08436297103137,
            "unit": "ns/iter",
            "extra": "iterations: 2632638\ncpu: 53.02871112549467 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 318.3679911408984,
            "unit": "ns/iter",
            "extra": "iterations: 443098\ncpu: 315.8881330992241 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1007.0419959439942,
            "unit": "ns/iter",
            "extra": "iterations: 139537\ncpu: 1003.3869152984518 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 231.58726715746988,
            "unit": "ns/iter",
            "extra": "iterations: 605076\ncpu: 230.91264568417853 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 956.8556220244968,
            "unit": "ns/iter",
            "extra": "iterations: 147564\ncpu: 948.5938304735572 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11835430571254214,
            "unit": "ms/iter",
            "extra": "iterations: 1191\ncpu: 0.11483291351805205 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.255904221897803,
            "unit": "ms/iter",
            "extra": "iterations: 591\ncpu: 0.24463790186125214 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12832209767107983,
            "unit": "ms/iter",
            "extra": "iterations: 996\ncpu: 0.12262429718875503 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2338706013263296,
            "unit": "ms/iter",
            "extra": "iterations: 582\ncpu: 0.22405824742268052 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1173350267594757,
            "unit": "ms/iter",
            "extra": "iterations: 1189\ncpu: 0.11393372582001683 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.27970759595026734,
            "unit": "ms/iter",
            "extra": "iterations: 610\ncpu: 0.22738967213114752 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 8.06881586710612,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 6.82536000000001 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 28.63180637359619,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 26.54768333333335 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3739.005510263116,
            "unit": "ns/iter",
            "extra": "iterations: 37644\ncpu: 3715.2799914993093 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6576065287945974,
            "unit": "ns/iter",
            "extra": "iterations: 84742685\ncpu: 1.653866643474891 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75183.45363394232,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 74974.66523835031 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6578573030659018,
            "unit": "ns/iter",
            "extra": "iterations: 84741659\ncpu: 1.6540329945629215 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 693.8477207728537,
            "unit": "ns/iter",
            "extra": "iterations: 202669\ncpu: 689.4670620568513 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17085.01963515544,
            "unit": "ns/iter",
            "extra": "iterations: 8212\ncpu: 17027.995616171454 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2753.5210429417966,
            "unit": "ns/iter",
            "extra": "iterations: 50688\ncpu: 2751.0061553030296 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 47154.45154000327,
            "unit": "ns/iter",
            "extra": "iterations: 2865\ncpu: 47108.586387434625 ns\nthreads: 1"
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
          "id": "07b9b8a210bc62365c93fc0567fc9b5f921fbd23",
          "message": "chckout",
          "timestamp": "2022-01-16T09:15:04+01:00",
          "tree_id": "0b4fffa334b2e2f78ab51a0814a82db9a92b5198",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/07b9b8a210bc62365c93fc0567fc9b5f921fbd23"
        },
        "date": 1642321651434,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.904626562750264,
            "unit": "ns/iter",
            "extra": "iterations: 62602568\ncpu: 2.3812681294479803 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.0139376942064664,
            "unit": "ns/iter",
            "extra": "iterations: 61957046\ncpu: 2.2547701838464023 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 13.11889103909429,
            "unit": "ns/iter",
            "extra": "iterations: 13087415\ncpu: 10.38677997144585 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.7805593073174966,
            "unit": "ns/iter",
            "extra": "iterations: 65545833\ncpu: 2.173160267869356 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 104.18373378086036,
            "unit": "ns/iter",
            "extra": "iterations: 1976167\ncpu: 73.97304984851989 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 529.7677049554161,
            "unit": "ns/iter",
            "extra": "iterations: 382718\ncpu: 382.2056971451565 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1682.679874490141,
            "unit": "ns/iter",
            "extra": "iterations: 107940\ncpu: 1241.5990365017599 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 411.26487457032005,
            "unit": "ns/iter",
            "extra": "iterations: 461924\ncpu: 295.32195772464723 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1536.8672173947302,
            "unit": "ns/iter",
            "extra": "iterations: 123962\ncpu: 1108.8002775043965 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.13771686215622728,
            "unit": "ms/iter",
            "extra": "iterations: 902\ncpu: 0.1346062084257206 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2731599203160448,
            "unit": "ms/iter",
            "extra": "iterations: 489\ncpu: 0.2666609406952965 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.13300373593089906,
            "unit": "ms/iter",
            "extra": "iterations: 1043\ncpu: 0.1305503355704698 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.26065576475349056,
            "unit": "ms/iter",
            "extra": "iterations: 538\ncpu: 0.2563994423791821 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.13858247566408144,
            "unit": "ms/iter",
            "extra": "iterations: 1031\ncpu: 0.13638118331716778 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.38213210169717415,
            "unit": "ms/iter",
            "extra": "iterations: 523\ncpu: 0.29746156787762895 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 9.034469723701477,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 6.450831249999997 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 55.344025293986,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 28.13736666666659 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4119.891162258807,
            "unit": "ns/iter",
            "extra": "iterations: 33166\ncpu: 4095.787855032262 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.3975000339628303,
            "unit": "ns/iter",
            "extra": "iterations: 62233563\ncpu: 2.2759712472191254 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 81252.7281126825,
            "unit": "ns/iter",
            "extra": "iterations: 1768\ncpu: 81075.45248868782 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.373968192097464,
            "unit": "ns/iter",
            "extra": "iterations: 63707021\ncpu: 2.3669479067307195 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 757.8478358771453,
            "unit": "ns/iter",
            "extra": "iterations: 196284\ncpu: 747.1215178007377 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 18283.724784851074,
            "unit": "ns/iter",
            "extra": "iterations: 8528\ncpu: 17814.08302063788 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4324.314927863743,
            "unit": "ns/iter",
            "extra": "iterations: 49414\ncpu: 3006.7207673938565 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 55033.66736709332,
            "unit": "ns/iter",
            "extra": "iterations: 2499\ncpu: 54821.84873949584 ns\nthreads: 1"
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
          "id": "2a821fdfa5a7ef3850319483df002f42f6d8b691",
          "message": "Continuous benchmark tests as part of the CI (#1174)",
          "timestamp": "2022-01-21T10:12:39-08:00",
          "tree_id": "be73c679916ac58ef57ef857fd51e17edd33b0c8",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/2a821fdfa5a7ef3850319483df002f42f6d8b691"
        },
        "date": 1642884712098,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.2915898395633585,
            "unit": "ns/iter",
            "extra": "iterations: 57395397\ncpu: 2.2858697187859858 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.596174308336322,
            "unit": "ns/iter",
            "extra": "iterations: 52099227\ncpu: 2.577128447606334 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 11.125772352323041,
            "unit": "ns/iter",
            "extra": "iterations: 13272532\ncpu: 9.927857020800552 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.098554325020996,
            "unit": "ns/iter",
            "extra": "iterations: 62341919\ncpu: 2.0914322512273 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 69.03025934436253,
            "unit": "ns/iter",
            "extra": "iterations: 1877680\ncpu: 68.94763751011888 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 354.38871331443556,
            "unit": "ns/iter",
            "extra": "iterations: 384403\ncpu: 354.0050415839627 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1110.6849112016412,
            "unit": "ns/iter",
            "extra": "iterations: 120331\ncpu: 1110.6572703625827 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 265.4886618230579,
            "unit": "ns/iter",
            "extra": "iterations: 530341\ncpu: 265.4842827539262 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1055.3136569881303,
            "unit": "ns/iter",
            "extra": "iterations: 133010\ncpu: 1054.0485677768586 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.5872062608307483,
            "unit": "ms/iter",
            "extra": "iterations: 255\ncpu: 0.1536992156862745 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.3213958412993188,
            "unit": "ms/iter",
            "extra": "iterations: 408\ncpu: 0.2871710784313726 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.34306238884706375,
            "unit": "ms/iter",
            "extra": "iterations: 478\ncpu: 0.15008744769874477 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3623157352596134,
            "unit": "ms/iter",
            "extra": "iterations: 462\ncpu: 0.31227532467532465 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.34085842741637673,
            "unit": "ms/iter",
            "extra": "iterations: 476\ncpu: 0.14944873949579823 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.32430783562038257,
            "unit": "ms/iter",
            "extra": "iterations: 460\ncpu: 0.283062391304348 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 11.639547348022461,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 7.170589999999999 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 36.0966682434082,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 26.61762000000001 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4120.244224848657,
            "unit": "ns/iter",
            "extra": "iterations: 33915\ncpu: 4109.7095680377415 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.559128103908936,
            "unit": "ns/iter",
            "extra": "iterations: 54765798\ncpu: 2.553526198960892 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 83020.6704970023,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 80259.03814262027 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.6703852650996005,
            "unit": "ns/iter",
            "extra": "iterations: 52899057\ncpu: 2.6626448180352247 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 722.8949635817933,
            "unit": "ns/iter",
            "extra": "iterations: 189537\ncpu: 720.8502825305882 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17492.595511664633,
            "unit": "ns/iter",
            "extra": "iterations: 7561\ncpu: 17460.772384605196 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2994.9448602503617,
            "unit": "ns/iter",
            "extra": "iterations: 45682\ncpu: 2988.7110897071057 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 52530.24387800455,
            "unit": "ns/iter",
            "extra": "iterations: 2596\ncpu: 52476.81047765792 ns\nthreads: 1"
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
          "id": "16a9c53680079a7a5f6728dd4bf4938efa214b30",
          "message": "Add @esigo as approver (#1183)",
          "timestamp": "2022-01-26T08:58:05-08:00",
          "tree_id": "ce15f948274aaca62ea8d3f05725540721d025fc",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/16a9c53680079a7a5f6728dd4bf4938efa214b30"
        },
        "date": 1643393392258,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.7060877769367446,
            "unit": "ns/iter",
            "extra": "iterations: 82651947\ncpu: 1.6910031169622661 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.9145449908052319,
            "unit": "ns/iter",
            "extra": "iterations: 82776562\ncpu: 1.6938623278410616 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.990544361021973,
            "unit": "ns/iter",
            "extra": "iterations: 15600833\ncpu: 8.975738667287828 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.7028933663391133,
            "unit": "ns/iter",
            "extra": "iterations: 82639262\ncpu: 1.698229105676186 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.35400254699218,
            "unit": "ns/iter",
            "extra": "iterations: 2640224\ncpu: 52.925698728592735 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 358.29832198396963,
            "unit": "ns/iter",
            "extra": "iterations: 443621\ncpu: 316.0005951025763 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1027.0565662920008,
            "unit": "ns/iter",
            "extra": "iterations: 136617\ncpu: 1024.1441401875318 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 231.42322653611217,
            "unit": "ns/iter",
            "extra": "iterations: 606599\ncpu: 230.96592641926554 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 950.9874721804226,
            "unit": "ns/iter",
            "extra": "iterations: 147301\ncpu: 949.3913822716748 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3681.036938182084,
            "unit": "ns/iter",
            "extra": "iterations: 37971\ncpu: 3672.7818598404046 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6746517182776974,
            "unit": "ns/iter",
            "extra": "iterations: 86651358\ncpu: 1.6175407199042398 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 74865.33510247676,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 74427.48538011695 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6272605057589897,
            "unit": "ns/iter",
            "extra": "iterations: 86654576\ncpu: 1.6179503319016881 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 677.2149611944147,
            "unit": "ns/iter",
            "extra": "iterations: 208073\ncpu: 674.3066135442849 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17227.238931844684,
            "unit": "ns/iter",
            "extra": "iterations: 8284\ncpu: 16934.66924191213 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2733.3179880525054,
            "unit": "ns/iter",
            "extra": "iterations: 51679\ncpu: 2729.019524371601 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46587.62933421175,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 46527.80569514238 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11272441791237253,
            "unit": "ms/iter",
            "extra": "iterations: 1258\ncpu: 0.10988585055643878 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.22205188990021976,
            "unit": "ms/iter",
            "extra": "iterations: 623\ncpu: 0.21537736757624398 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.11253491199889303,
            "unit": "ms/iter",
            "extra": "iterations: 1243\ncpu: 0.10949477071600966 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.22116680688495877,
            "unit": "ms/iter",
            "extra": "iterations: 632\ncpu: 0.2149704113924052 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1113093852619283,
            "unit": "ms/iter",
            "extra": "iterations: 1263\ncpu: 0.1084898653998416 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.22158691626681945,
            "unit": "ms/iter",
            "extra": "iterations: 623\ncpu: 0.21514301765650087 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.451986052773216,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.428595454545448 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.806808471679688,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.754959999999993 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "reyang@microsoft.com",
            "name": "Reiley Yang",
            "username": "reyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "43ad7b9fea54d6ff5400778e14e0b4b4ac41b7da",
          "message": "move non-active members to Emeritus (#1186)",
          "timestamp": "2022-01-31T17:54:10Z",
          "tree_id": "0daef00e22b53e70822c388c416989b402414274",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/43ad7b9fea54d6ff5400778e14e0b4b4ac41b7da"
        },
        "date": 1643745247739,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.5528765074620723,
            "unit": "ns/iter",
            "extra": "iterations: 56928388\ncpu: 2.551031306208776 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.6523019982867297,
            "unit": "ns/iter",
            "extra": "iterations: 56565199\ncpu: 2.6518177722666545 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 11.414061490167313,
            "unit": "ns/iter",
            "extra": "iterations: 12647250\ncpu: 11.413437703848668 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.4624202422596353,
            "unit": "ns/iter",
            "extra": "iterations: 59044325\ncpu: 2.4624568068142043 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 99.92135837608149,
            "unit": "ns/iter",
            "extra": "iterations: 1973524\ncpu: 70.58900727835082 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 540.8158336674879,
            "unit": "ns/iter",
            "extra": "iterations: 348945\ncpu: 405.2119961598533 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1798.2413434295415,
            "unit": "ns/iter",
            "extra": "iterations: 108990\ncpu: 1337.0657858519135 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 422.13449016961033,
            "unit": "ns/iter",
            "extra": "iterations: 480013\ncpu: 300.56081814450863 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1756.9543651702859,
            "unit": "ns/iter",
            "extra": "iterations: 120834\ncpu: 1227.7595709816771 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4238.397692846823,
            "unit": "ns/iter",
            "extra": "iterations: 33194\ncpu: 4206.582514912335 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.6194516360466786,
            "unit": "ns/iter",
            "extra": "iterations: 52557090\ncpu: 2.616794422978898 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 121006.31405848154,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 90702.23602484475 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 4.014693104024858,
            "unit": "ns/iter",
            "extra": "iterations: 55315854\ncpu: 2.6536045163471575 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 2181.181045714074,
            "unit": "ns/iter",
            "extra": "iterations: 181161\ncpu: 865.6559634799985 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 21034.76259897167,
            "unit": "ns/iter",
            "extra": "iterations: 7591\ncpu: 20967.461467527315 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3425.8564093238606,
            "unit": "ns/iter",
            "extra": "iterations: 42443\ncpu: 3416.556322597363 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 58672.02264321996,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 58667.2031317965 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.17048877562391815,
            "unit": "ms/iter",
            "extra": "iterations: 844\ncpu: 0.16218376777251187 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.3346755876013981,
            "unit": "ms/iter",
            "extra": "iterations: 398\ncpu: 0.3284206030150754 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.16493395813058678,
            "unit": "ms/iter",
            "extra": "iterations: 867\ncpu: 0.16205513264129182 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3353598992210857,
            "unit": "ms/iter",
            "extra": "iterations: 439\ncpu: 0.325789749430524 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1683520071161618,
            "unit": "ms/iter",
            "extra": "iterations: 795\ncpu: 0.16428289308176103 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.3443757225485409,
            "unit": "ms/iter",
            "extra": "iterations: 425\ncpu: 0.3359578823529412 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.495668199327257,
            "unit": "ms/iter",
            "extra": "iterations: 18\ncpu: 7.486383333333328 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 30.834484100341797,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 30.602599999999967 ms\nthreads: 1"
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
          "id": "033b16fe19f2ec13f4b96a74b3b33a04e1bc83a2",
          "message": "Prepare for 1.2.0 release (#1188)",
          "timestamp": "2022-02-01T11:58:47-08:00",
          "tree_id": "0dac4978a6de140a9ef209e3b12c97501a37329d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/033b16fe19f2ec13f4b96a74b3b33a04e1bc83a2"
        },
        "date": 1643816670941,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.532563689350486,
            "unit": "ns/iter",
            "extra": "iterations: 92739184\ncpu: 1.506955247740804 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.5116159641990286,
            "unit": "ns/iter",
            "extra": "iterations: 93153237\ncpu: 1.5021163462092038 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 7.956764702955891,
            "unit": "ns/iter",
            "extra": "iterations: 17623031\ncpu: 7.94108005597902 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.5039839123640053,
            "unit": "ns/iter",
            "extra": "iterations: 93167495\ncpu: 1.498462527086297 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 68.2939995949224,
            "unit": "ns/iter",
            "extra": "iterations: 2401100\ncpu: 58.25259256174253 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 615.4263656295641,
            "unit": "ns/iter",
            "extra": "iterations: 464137\ncpu: 299.9969836492244 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1027.571867110926,
            "unit": "ns/iter",
            "extra": "iterations: 156813\ncpu: 894.40607602686 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 479.94817406400244,
            "unit": "ns/iter",
            "extra": "iterations: 662296\ncpu: 222.85790643458523 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1314.9994002573267,
            "unit": "ns/iter",
            "extra": "iterations: 154186\ncpu: 871.6128571984492 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3733.482007194298,
            "unit": "ns/iter",
            "extra": "iterations: 37538\ncpu: 3725.7259310565296 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6223564770839636,
            "unit": "ns/iter",
            "extra": "iterations: 86332355\ncpu: 1.6210897988361375 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75659.95988244964,
            "unit": "ns/iter",
            "extra": "iterations: 1857\ncpu: 75412.9240710824 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.8408764853762873,
            "unit": "ns/iter",
            "extra": "iterations: 86346731\ncpu: 1.6302504839471004 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 1104.3170453317684,
            "unit": "ns/iter",
            "extra": "iterations: 197529\ncpu: 705.0787479306839 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 26899.779401399763,
            "unit": "ns/iter",
            "extra": "iterations: 8154\ncpu: 17476.31837135148 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 5469.225287608002,
            "unit": "ns/iter",
            "extra": "iterations: 51021\ncpu: 2585.888163697299 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 47047.30531893972,
            "unit": "ns/iter",
            "extra": "iterations: 3039\ncpu: 46991.08259295819 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11477311723468246,
            "unit": "ms/iter",
            "extra": "iterations: 1172\ncpu: 0.10968950511945394 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2242725360223495,
            "unit": "ms/iter",
            "extra": "iterations: 631\ncpu: 0.21681679873217113 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.11178195429189135,
            "unit": "ms/iter",
            "extra": "iterations: 1259\ncpu: 0.10902374900714855 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.24057516656198039,
            "unit": "ms/iter",
            "extra": "iterations: 639\ncpu: 0.21726619718309856 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12156866075196532,
            "unit": "ms/iter",
            "extra": "iterations: 1201\ncpu: 0.1184512073272273 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2308027653754512,
            "unit": "ms/iter",
            "extra": "iterations: 632\ncpu: 0.21500569620253165 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.478927352211692,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.455649999999994 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.803089141845703,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.740799999999986 ms\nthreads: 1"
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
          "id": "44795b6d21738a8478d620c6f4cde6f12ea5ccac",
          "message": "Add Aggregation as part of metrics SDK. (#1178)",
          "timestamp": "2022-02-04T21:53:10-08:00",
          "tree_id": "4e8e0f917db86d65af01d12113128c0637c8e104",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/44795b6d21738a8478d620c6f4cde6f12ea5ccac"
        },
        "date": 1644049283260,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4302.4962618975005,
            "unit": "ns/iter",
            "extra": "iterations: 42608\ncpu: 3349.807547878332 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.2283071039657476,
            "unit": "ns/iter",
            "extra": "iterations: 96888495\ncpu: 1.4423301755280644 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 106559.78983512642,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 66992.50596658711 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.889637013454276,
            "unit": "ns/iter",
            "extra": "iterations: 98654077\ncpu: 1.5513215941394898 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 584.3684877502925,
            "unit": "ns/iter",
            "extra": "iterations: 239185\ncpu: 583.8075130129399 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 15019.98925765635,
            "unit": "ns/iter",
            "extra": "iterations: 9381\ncpu: 14950.239846498222 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2393.1427452172998,
            "unit": "ns/iter",
            "extra": "iterations: 58294\ncpu: 2390.6662778330515 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 41079.22062221003,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 41045.14805042508 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.059880585452916,
            "unit": "ns/iter",
            "extra": "iterations: 2645558\ncpu: 52.890770113526145 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 319.0233001187728,
            "unit": "ns/iter",
            "extra": "iterations: 439682\ncpu: 318.2550115765485 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1003.3233268711766,
            "unit": "ns/iter",
            "extra": "iterations: 139827\ncpu: 1000.1759316870131 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 230.81728159928994,
            "unit": "ns/iter",
            "extra": "iterations: 606954\ncpu: 230.55025586782523 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1056.294048685133,
            "unit": "ns/iter",
            "extra": "iterations: 148200\ncpu: 950.3643724696354 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.5075372469431516,
            "unit": "ns/iter",
            "extra": "iterations: 93125973\ncpu: 1.497425428242237 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.4982391899281897,
            "unit": "ns/iter",
            "extra": "iterations: 94323733\ncpu: 1.4934321990839785 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.00960139549319,
            "unit": "ns/iter",
            "extra": "iterations: 17717168\ncpu: 7.914645275136523 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.504580131155021,
            "unit": "ns/iter",
            "extra": "iterations: 87236111\ncpu: 1.503288013377854 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.09697313834467886,
            "unit": "ms/iter",
            "extra": "iterations: 1433\ncpu: 0.09410600139567343 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.19169018413480474,
            "unit": "ms/iter",
            "extra": "iterations: 724\ncpu: 0.1868259668508288 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.09854145116047051,
            "unit": "ms/iter",
            "extra": "iterations: 1445\ncpu: 0.09471397923875431 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.18919943463899783,
            "unit": "ms/iter",
            "extra": "iterations: 734\ncpu: 0.18505040871934608 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.09735484621418056,
            "unit": "ms/iter",
            "extra": "iterations: 1474\ncpu: 0.0931531207598372 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.18698483826177806,
            "unit": "ms/iter",
            "extra": "iterations: 741\ncpu: 0.18283022941970334 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.721120834350586,
            "unit": "ms/iter",
            "extra": "iterations: 25\ncpu: 5.7153720000000074 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 22.850751876831055,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 22.708516666666657 ms\nthreads: 1"
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
          "id": "e1c85570329bb775d5294a1eb2d3f1d2b9f7e4b0",
          "message": "fix errors in SDK documentation (#1201)",
          "timestamp": "2022-02-09T12:35:54-08:00",
          "tree_id": "6f0fa081aec644ec46538fc807881e46f6abc82d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/e1c85570329bb775d5294a1eb2d3f1d2b9f7e4b0"
        },
        "date": 1644443558627,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 5392.974039415397,
            "unit": "ns/iter",
            "extra": "iterations: 36849\ncpu: 3869.7685147493826 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.3803665428373004,
            "unit": "ns/iter",
            "extra": "iterations: 61039680\ncpu: 2.379098317684497 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 83293.48359749168,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 82871.69700528483 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.342256309626031,
            "unit": "ns/iter",
            "extra": "iterations: 52370514\ncpu: 2.341202914296392 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 689.2462315898621,
            "unit": "ns/iter",
            "extra": "iterations: 189226\ncpu: 688.6157293395204 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17177.244233378304,
            "unit": "ns/iter",
            "extra": "iterations: 8973\ncpu: 17161.451019725835 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3257.2845470903344,
            "unit": "ns/iter",
            "extra": "iterations: 48648\ncpu: 3247.303075152115 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 54927.93611321316,
            "unit": "ns/iter",
            "extra": "iterations: 2510\ncpu: 54911.07569721117 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 78.93395176339524,
            "unit": "ns/iter",
            "extra": "iterations: 2461720\ncpu: 58.97165396552004 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 475.72231521501,
            "unit": "ns/iter",
            "extra": "iterations: 377674\ncpu: 351.64189221392 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1582.651114498451,
            "unit": "ns/iter",
            "extra": "iterations: 107356\ncpu: 1149.0443012034725 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 331.97615687469295,
            "unit": "ns/iter",
            "extra": "iterations: 544455\ncpu: 252.4612686080577 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1371.7901841462055,
            "unit": "ns/iter",
            "extra": "iterations: 138257\ncpu: 1041.265903353899 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.607415266864335,
            "unit": "ns/iter",
            "extra": "iterations: 60042287\ncpu: 2.6065096421127336 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.390896519909925,
            "unit": "ns/iter",
            "extra": "iterations: 57107660\ncpu: 2.390961212558876 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.095523469601995,
            "unit": "ns/iter",
            "extra": "iterations: 13894678\ncpu: 10.093907897685716 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.1966677675274533,
            "unit": "ns/iter",
            "extra": "iterations: 64008193\ncpu: 2.1880870781651343 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.16796701511069026,
            "unit": "ms/iter",
            "extra": "iterations: 741\ncpu: 0.17119379217273956 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.3066525680606375,
            "unit": "ms/iter",
            "extra": "iterations: 474\ncpu: 0.299770253164557 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.15597062316340923,
            "unit": "ms/iter",
            "extra": "iterations: 882\ncpu: 0.15128446712018137 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2995618616912911,
            "unit": "ms/iter",
            "extra": "iterations: 441\ncpu: 0.2938655328798185 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1543933785135186,
            "unit": "ms/iter",
            "extra": "iterations: 962\ncpu: 0.1519797297297297 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.31794835162419144,
            "unit": "ms/iter",
            "extra": "iterations: 465\ncpu: 0.3125064516129033 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 17.96631585984003,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 7.890061904761904 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 50.160884857177734,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 27.25080000000002 ms\nthreads: 1"
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
          "id": "7485102bfaa68f8a5d4d70312c60cb928e70f00c",
          "message": "Change Monday's community meeting time (13:00 PT - 14:00 PT) (#1204)",
          "timestamp": "2022-02-11T09:47:47-08:00",
          "tree_id": "5402daaa08f470822751ac029072af80d68fefaa",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/7485102bfaa68f8a5d4d70312c60cb928e70f00c"
        },
        "date": 1644603110057,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3766.832833255993,
            "unit": "ns/iter",
            "extra": "iterations: 37468\ncpu: 3743.7066296573075 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.1477868964893903,
            "unit": "ns/iter",
            "extra": "iterations: 46493710\ncpu: 3.0088435618495484 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 86243.54721584228,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 74677.07552222817 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.0155134141441993,
            "unit": "ns/iter",
            "extra": "iterations: 46451133\ncpu: 3.0128543904408094 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 634.325553089098,
            "unit": "ns/iter",
            "extra": "iterations: 220424\ncpu: 633.3402896236346 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 15888.841329777108,
            "unit": "ns/iter",
            "extra": "iterations: 8834\ncpu: 15824.315146026705 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2897.541391450618,
            "unit": "ns/iter",
            "extra": "iterations: 48652\ncpu: 2890.471100879716 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 50982.84272278703,
            "unit": "ns/iter",
            "extra": "iterations: 2733\ncpu: 50745.88364434678 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 56.66375637976927,
            "unit": "ns/iter",
            "extra": "iterations: 2460989\ncpu: 56.66400784400093 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 318.3758105513746,
            "unit": "ns/iter",
            "extra": "iterations: 438406\ncpu: 318.37794190772945 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1001.6168400176082,
            "unit": "ns/iter",
            "extra": "iterations: 139841\ncpu: 1001.5567680437069 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 250.16928849539397,
            "unit": "ns/iter",
            "extra": "iterations: 559631\ncpu: 250.17002274713164 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 952.5683795587042,
            "unit": "ns/iter",
            "extra": "iterations: 147026\ncpu: 952.5750547522211 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.0227934648441184,
            "unit": "ns/iter",
            "extra": "iterations: 46145074\ncpu: 3.016822554017359 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.3910473653184763,
            "unit": "ns/iter",
            "extra": "iterations: 46490622\ncpu: 3.0153393086459457 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.78268970731773,
            "unit": "ns/iter",
            "extra": "iterations: 16163874\ncpu: 8.734261353435448 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 3.0876232496627196,
            "unit": "ns/iter",
            "extra": "iterations: 45234249\ncpu: 3.082177842722668 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.12161910950720727,
            "unit": "ms/iter",
            "extra": "iterations: 1144\ncpu: 0.11842499999999999 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2420412283551057,
            "unit": "ms/iter",
            "extra": "iterations: 581\ncpu: 0.23538399311531838 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12508127516116238,
            "unit": "ms/iter",
            "extra": "iterations: 1156\ncpu: 0.11875441176470589 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2463218493339343,
            "unit": "ms/iter",
            "extra": "iterations: 585\ncpu: 0.23318307692307688 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12647127813901785,
            "unit": "ms/iter",
            "extra": "iterations: 1146\ncpu: 0.11826256544502614 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.24507832281368294,
            "unit": "ms/iter",
            "extra": "iterations: 582\ncpu: 0.23455429553264592 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.37251509152926,
            "unit": "ms/iter",
            "extra": "iterations: 26\ncpu: 5.360953846153846 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 22.01688289642334,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 21.979866666666663 ms\nthreads: 1"
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
          "id": "9ed312b29ca0af1d92bbf0cf63ab8a6d88272bfb",
          "message": "fix ostream_log_test Mac (#1208)",
          "timestamp": "2022-02-14T13:05:25-08:00",
          "tree_id": "1c45c26c34a4c593b49c6a31c05a8d7e9bb60312",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/9ed312b29ca0af1d92bbf0cf63ab8a6d88272bfb"
        },
        "date": 1644876176387,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4182.979969893585,
            "unit": "ns/iter",
            "extra": "iterations: 34941\ncpu: 4163.3067170372915 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.8267112973657815,
            "unit": "ns/iter",
            "extra": "iterations: 82404323\ncpu: 1.823731990371427 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 92006.51658085224,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 78396.69947886508 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.718705722960389,
            "unit": "ns/iter",
            "extra": "iterations: 76865217\ncpu: 1.7174972653755731 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 695.5913551416132,
            "unit": "ns/iter",
            "extra": "iterations: 190365\ncpu: 693.5534368187429 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17394.58702862293,
            "unit": "ns/iter",
            "extra": "iterations: 7916\ncpu: 17382.756442647795 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2864.2839436980285,
            "unit": "ns/iter",
            "extra": "iterations: 50813\ncpu: 2861.5925058548005 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 49662.1228608531,
            "unit": "ns/iter",
            "extra": "iterations: 2909\ncpu: 49632.8635269853 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 57.327128023853284,
            "unit": "ns/iter",
            "extra": "iterations: 2517823\ncpu: 57.2650261753904 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 349.47095904284976,
            "unit": "ns/iter",
            "extra": "iterations: 384581\ncpu: 347.8536381152475 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1170.7550900376382,
            "unit": "ns/iter",
            "extra": "iterations: 117512\ncpu: 1164.2130165429915 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 257.62270232717657,
            "unit": "ns/iter",
            "extra": "iterations: 534812\ncpu: 256.70198125696504 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1210.5225243236282,
            "unit": "ns/iter",
            "extra": "iterations: 129367\ncpu: 1091.7490550140296 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.7637366838773731,
            "unit": "ns/iter",
            "extra": "iterations: 83778657\ncpu: 1.7292327806114152 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.8441542686231556,
            "unit": "ns/iter",
            "extra": "iterations: 81447911\ncpu: 1.808291927831028 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.71535720081749,
            "unit": "ns/iter",
            "extra": "iterations: 15006002\ncpu: 9.519311006355995 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.9593921839175785,
            "unit": "ns/iter",
            "extra": "iterations: 72189136\ncpu: 1.924321410357371 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11429235264782897,
            "unit": "ms/iter",
            "extra": "iterations: 1202\ncpu: 0.11044725457570716 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.22051718674207987,
            "unit": "ms/iter",
            "extra": "iterations: 608\ncpu: 0.214435197368421 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.11879945103126237,
            "unit": "ms/iter",
            "extra": "iterations: 1185\ncpu: 0.11563122362869198 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.25191436560390096,
            "unit": "ms/iter",
            "extra": "iterations: 626\ncpu: 0.22738450479233224 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.11510469401285718,
            "unit": "ms/iter",
            "extra": "iterations: 917\ncpu: 0.11388658669574703 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2225171746531583,
            "unit": "ms/iter",
            "extra": "iterations: 663\ncpu: 0.21699095022624434 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.382848905480427,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 6.374639130434774 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 27.630186080932617,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 27.50400000000002 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}