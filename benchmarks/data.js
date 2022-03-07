window.BENCHMARK_DATA = {
  "lastUpdate": 1646667895446,
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
          "id": "3a9d0870bc846f79f97c81796ce70440d944aa88",
          "message": "Detect vs2022 as build environment (#1212)",
          "timestamp": "2022-02-17T08:10:19Z",
          "tree_id": "361c175d162ec52518c7ad2e0eba088e6987fb3a",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/3a9d0870bc846f79f97c81796ce70440d944aa88"
        },
        "date": 1645123242901,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 28.803723151787263,
            "unit": "ns/iter",
            "extra": "iterations: 5047000\ncpu: 27.795938181097682 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 88.81393105092675,
            "unit": "ns/iter",
            "extra": "iterations: 1584000\ncpu: 88.675 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 689.6098846285214,
            "unit": "ns/iter",
            "extra": "iterations: 203000\ncpu: 689.2556650246304 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1668677.3933140577,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 266293.3628318585 ns\nthreads: 1"
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
          "id": "1026ec3ffcf794d91af0459ce1c30faef154eba2",
          "message": "Run apt update before install thrift dependencies (#1225)",
          "timestamp": "2022-02-18T18:56:06-08:00",
          "tree_id": "bc4374ba9a8bb4a340c2645f23f510af35c3c534",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/1026ec3ffcf794d91af0459ce1c30faef154eba2"
        },
        "date": 1645256063004,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.86012248940759,
            "unit": "ns/iter",
            "extra": "iterations: 4388000\ncpu: 31.837306289881496 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 91.36507287621498,
            "unit": "ns/iter",
            "extra": "iterations: 1536000\ncpu: 91.24459635416666 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 715.9168070012873,
            "unit": "ns/iter",
            "extra": "iterations: 198000\ncpu: 712.420202020202 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2091162.3072880572,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 365816.93548387074 ns\nthreads: 1"
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
          "id": "9502339a588a11642b14d795e316bb7095c63adc",
          "message": "Ostream metric exporter (#1196)",
          "timestamp": "2022-02-19T00:23:57-08:00",
          "tree_id": "8bba508dead7ada7d1d67f23d4c40d644b9ba41f",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/9502339a588a11642b14d795e316bb7095c63adc"
        },
        "date": 1645260350924,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 28.16822668464401,
            "unit": "ns/iter",
            "extra": "iterations: 4969000\ncpu: 28.15940833165627 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 90.32701306735639,
            "unit": "ns/iter",
            "extra": "iterations: 1737000\ncpu: 81.13131836499714 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 651.0715139397669,
            "unit": "ns/iter",
            "extra": "iterations: 221000\ncpu: 634.0769230769228 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1773702.1197133989,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 293669.40298507456 ns\nthreads: 1"
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
          "id": "31cb6a33a8fa401fc08fd690d54a5617ee28e455",
          "message": "bot for updating GHA (#7)",
          "timestamp": "2022-02-19T11:01:40+01:00",
          "tree_id": "5637ecc00982f21986da8b416fa986ae3d8cae90",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/31cb6a33a8fa401fc08fd690d54a5617ee28e455"
        },
        "date": 1645267363067,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 32.18068911211334,
            "unit": "ns/iter",
            "extra": "iterations: 4384000\ncpu: 31.97570711678832 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 91.49492176529628,
            "unit": "ns/iter",
            "extra": "iterations: 1530000\ncpu: 91.40359477124183 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 712.438283232868,
            "unit": "ns/iter",
            "extra": "iterations: 197000\ncpu: 711.6436548223346 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2182112.5861137146,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 378375.8064516129 ns\nthreads: 1"
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
          "id": "9157fd474883b4d90dab2e4f5aa887a705c2ab94",
          "message": "Mock for http exporters (#1185)",
          "timestamp": "2022-02-19T02:12:02-08:00",
          "tree_id": "31e46179e76115440287b60a704b41bc2c6dc874",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/9157fd474883b4d90dab2e4f5aa887a705c2ab94"
        },
        "date": 1645372803632,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 34.59976674544405,
            "unit": "ns/iter",
            "extra": "iterations: 4371000\ncpu: 34.559871882864336 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 91.79260574165194,
            "unit": "ns/iter",
            "extra": "iterations: 1477000\ncpu: 91.76431956668924 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 713.0444049835205,
            "unit": "ns/iter",
            "extra": "iterations: 200000\ncpu: 710.6810000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2873559.2026915094,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 487473.5973597361 ns\nthreads: 1"
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
          "id": "c10bc36e7d7776ac74d45b5b2ca02eaf0df028b4",
          "message": "[Metric SDK] Synchronous Instruments - Aggregation Storage(s) creation for configured views (#1219)",
          "timestamp": "2022-02-24T00:12:23-08:00",
          "tree_id": "b998be5fbaeb2cb623f5f11eba18a4c509c0d472",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/c10bc36e7d7776ac74d45b5b2ca02eaf0df028b4"
        },
        "date": 1645721439147,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 32.20814799501252,
            "unit": "ns/iter",
            "extra": "iterations: 4385000\ncpu: 31.89532497149373 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 91.95347717963769,
            "unit": "ns/iter",
            "extra": "iterations: 1529000\ncpu: 91.62786134728579 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 716.6412411903848,
            "unit": "ns/iter",
            "extra": "iterations: 196000\ncpu: 716.0102040816325 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1942289.2261953915,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 342875.0000000002 ns\nthreads: 1"
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
          "id": "11a219c80a7a3c47f479ce9d20e590e5900d0248",
          "message": "Jaeger bazel windows (#1227)",
          "timestamp": "2022-02-28T20:22:13-08:00",
          "tree_id": "7bd6be3b9e9daf38f60d24a464baa814c128ee02",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/11a219c80a7a3c47f479ce9d20e590e5900d0248"
        },
        "date": 1646150942980,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 40.2174119009541,
            "unit": "ns/iter",
            "extra": "iterations: 3643000\ncpu: 40.11660719187483 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 108.56133566145357,
            "unit": "ns/iter",
            "extra": "iterations: 1297000\ncpu: 108.08627602158826 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 893.750786781311,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 884.2681250000002 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2720029.1554133096,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 528209.5833333334 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "artiom.vaskov@ibm.com",
            "name": "Artiom Vaskov",
            "username": "velemas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84394fda87e80697ee0534311021926b529c8342",
          "message": "Added s390x arch into CMake build. (#1216)",
          "timestamp": "2022-03-02T07:52:37-08:00",
          "tree_id": "e328dfc358d429ff046cb55b8f5d310864548cb6",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/84394fda87e80697ee0534311021926b529c8342"
        },
        "date": 1646237686328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 28.311313766547418,
            "unit": "ns/iter",
            "extra": "iterations: 4942000\ncpu: 28.303460137596122 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 82.36538330900026,
            "unit": "ns/iter",
            "extra": "iterations: 1708000\ncpu: 82.0121194379391 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 651.6906950208876,
            "unit": "ns/iter",
            "extra": "iterations: 216000\ncpu: 651.428703703704 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1929813.25226389,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 340673.26007325994 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9447643+devjgm@users.noreply.github.com",
            "name": "Greg Miller",
            "username": "devjgm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99c483c790204870aae017ab37b3cf8f2785d46b",
          "message": "chore: update prometheus to 1.0 version (#1242)",
          "timestamp": "2022-03-03T19:08:15-08:00",
          "tree_id": "4ba6a1f890b1587de222ce6f361e6f7a850f03b8",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/99c483c790204870aae017ab37b3cf8f2785d46b"
        },
        "date": 1646412314019,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 32.20220224572978,
            "unit": "ns/iter",
            "extra": "iterations: 4360000\ncpu: 32.10133027522936 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 92.79213128852464,
            "unit": "ns/iter",
            "extra": "iterations: 1507000\ncpu: 92.65587259455873 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 744.9363407335783,
            "unit": "ns/iter",
            "extra": "iterations: 190000\ncpu: 739.486842105263 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2068936.9780238918,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 338085.8611825192 ns\nthreads: 1"
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
          "id": "50fabb5fa09faff9f9767802fd3b9b9b440b0afa",
          "message": "dependabot for GitHub actions (#1246)",
          "timestamp": "2022-03-04T15:00:10-08:00",
          "tree_id": "ae28278c1f0c2fc60ef18d9bdf20b54ee3cef35d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/50fabb5fa09faff9f9767802fd3b9b9b440b0afa"
        },
        "date": 1646477806407,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 27.81194964731772,
            "unit": "ns/iter",
            "extra": "iterations: 5080000\ncpu: 27.741043307086613 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 79.92370232880488,
            "unit": "ns/iter",
            "extra": "iterations: 1761000\ncpu: 79.69091425326519 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 638.9040925187063,
            "unit": "ns/iter",
            "extra": "iterations: 219000\ncpu: 637.4155251141556 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1945762.4648428205,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 357321.57360406086 ns\nthreads: 1"
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
          "distinct": true,
          "id": "b46cd6f580a90a615accdc635e6878999521fbf5",
          "message": "Update Maintainers (#1249)",
          "timestamp": "2022-03-06T20:35:50-08:00",
          "tree_id": "965591cd0aa891d6ee4140a1b3b0ebf5cbda2be3",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/b46cd6f580a90a615accdc635e6878999521fbf5"
        },
        "date": 1646667891108,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 56.68544312983609,
            "unit": "ns/iter",
            "extra": "iterations: 5016000\ncpu: 27.942085326953755 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 113.57859465953592,
            "unit": "ns/iter",
            "extra": "iterations: 1579000\ncpu: 88.33470550981635 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 847.5520823261526,
            "unit": "ns/iter",
            "extra": "iterations: 202000\ncpu: 691.341584158416 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1636173.9900377062,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 285153.4722222224 ns\nthreads: 1"
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
          "id": "3a9d0870bc846f79f97c81796ce70440d944aa88",
          "message": "Detect vs2022 as build environment (#1212)",
          "timestamp": "2022-02-17T08:10:19Z",
          "tree_id": "361c175d162ec52518c7ad2e0eba088e6987fb3a",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/3a9d0870bc846f79f97c81796ce70440d944aa88"
        },
        "date": 1645123242928,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 16077041.625976562,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 10006956.25 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 156.2456799934118,
            "unit": "ns/iter",
            "extra": "iterations: 900797\ncpu: 155.76994594786618 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 3.060071645209349,
            "unit": "ns/iter",
            "extra": "iterations: 45909617\ncpu: 3.058058619831222 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.0948136503004795,
            "unit": "ns/iter",
            "extra": "iterations: 45240242\ncpu: 3.0939334939897103 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 76.40204775580851,
            "unit": "ns/iter",
            "extra": "iterations: 1830731\ncpu: 76.36233832277927 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 376.9726668610302,
            "unit": "ns/iter",
            "extra": "iterations: 425479\ncpu: 329.4035663334734 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 49.614939690514944,
            "unit": "ns/iter",
            "extra": "iterations: 3706331\ncpu: 37.82209414107914 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 48.26659663261146,
            "unit": "ns/iter",
            "extra": "iterations: 3678287\ncpu: 37.8108070414299 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 64.00744016686907,
            "unit": "ns/iter",
            "extra": "iterations: 3268119\ncpu: 42.75740877244679 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 31.333502954704752,
            "unit": "ns/iter",
            "extra": "iterations: 6446177\ncpu: 21.712171415708866 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 936.8028736804058,
            "unit": "ns/iter",
            "extra": "iterations: 174538\ncpu: 800.0779199945002 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 820.4333182405527,
            "unit": "ns/iter",
            "extra": "iterations: 174162\ncpu: 820.449925931031 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 175.7042627448082,
            "unit": "ns/iter",
            "extra": "iterations: 930084\ncpu: 149.99709703639675 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 4.4508517948650415,
            "unit": "ns/iter",
            "extra": "iterations: 41474108\ncpu: 3.2980600812439413 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 11.06333294332509,
            "unit": "ns/iter",
            "extra": "iterations: 15330739\ncpu: 9.132286447509154 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 441349.4466714779,
            "unit": "ns/iter",
            "extra": "iterations: 8761\ncpu: 15900.45656888483 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 5197928.428649902,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 56048.09999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7644710.540771484,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 119333.00000000007 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 2892731.189727783,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 29585.29999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2963525.7720947266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 61008.399999999965 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 3984474.9522474306,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 108740.37639007698 ns\nthreads: 1"
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
          "id": "1026ec3ffcf794d91af0459ce1c30faef154eba2",
          "message": "Run apt update before install thrift dependencies (#1225)",
          "timestamp": "2022-02-18T18:56:06-08:00",
          "tree_id": "bc4374ba9a8bb4a340c2645f23f510af35c3c534",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/1026ec3ffcf794d91af0459ce1c30faef154eba2"
        },
        "date": 1645256059617,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 15846784.298236553,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 11026376.923076926 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 204.16847693737637,
            "unit": "ns/iter",
            "extra": "iterations: 684757\ncpu: 203.93175973374497 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6263147433430274,
            "unit": "ns/iter",
            "extra": "iterations: 85949683\ncpu: 1.6247634095404404 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6689241353539108,
            "unit": "ns/iter",
            "extra": "iterations: 86209020\ncpu: 1.6262880612724748 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.1361333020799,
            "unit": "ns/iter",
            "extra": "iterations: 1645723\ncpu: 85.03296119699368 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 331.29496958270903,
            "unit": "ns/iter",
            "extra": "iterations: 423710\ncpu: 330.36628826319867 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 42.931755624368385,
            "unit": "ns/iter",
            "extra": "iterations: 3767015\ncpu: 37.15384727695536 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.35797295577731,
            "unit": "ns/iter",
            "extra": "iterations: 3768405\ncpu: 37.16941252333547 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 41.39848464602757,
            "unit": "ns/iter",
            "extra": "iterations: 3480457\ncpu: 40.26663739847952 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 22.700040059050203,
            "unit": "ns/iter",
            "extra": "iterations: 6789624\ncpu: 20.4345336354414 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 798.7811308827553,
            "unit": "ns/iter",
            "extra": "iterations: 175888\ncpu: 795.3453333939776 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 800.6001213519442,
            "unit": "ns/iter",
            "extra": "iterations: 175025\ncpu: 799.2138265961997 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 197.64442139280084,
            "unit": "ns/iter",
            "extra": "iterations: 822890\ncpu: 169.04920463245386 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.50846441860852,
            "unit": "ns/iter",
            "extra": "iterations: 55938915\ncpu: 2.497518945442542 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.559903635718009,
            "unit": "ns/iter",
            "extra": "iterations: 18736817\ncpu: 7.479045133439689 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 451819.0414818329,
            "unit": "ns/iter",
            "extra": "iterations: 8146\ncpu: 17320.20623618954 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 5995268.34487915,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 54390.2 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11950700.283050537,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 284424.9999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 304871.6738021568,
            "unit": "ns/iter",
            "extra": "iterations: 8043\ncpu: 17398.333954991915 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1064121.0079193115,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 48042.9 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7510738.372802734,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 254268.00000000026 ns\nthreads: 1"
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
          "id": "9502339a588a11642b14d795e316bb7095c63adc",
          "message": "Ostream metric exporter (#1196)",
          "timestamp": "2022-02-19T00:23:57-08:00",
          "tree_id": "8bba508dead7ada7d1d67f23d4c40d644b9ba41f",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/9502339a588a11642b14d795e316bb7095c63adc"
        },
        "date": 1645260334917,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 15019357.204437256,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 10257475.000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 182.1731965819744,
            "unit": "ns/iter",
            "extra": "iterations: 767809\ncpu: 180.83898469541256 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.4359734729324962,
            "unit": "ns/iter",
            "extra": "iterations: 97848726\ncpu: 1.4329404758933704 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.4571760238534552,
            "unit": "ns/iter",
            "extra": "iterations: 97560976\ncpu: 1.4394136442423457 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 74.92267669997025,
            "unit": "ns/iter",
            "extra": "iterations: 1859398\ncpu: 74.59774615224929 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 291.2336183672981,
            "unit": "ns/iter",
            "extra": "iterations: 480868\ncpu: 290.942212831796 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 32.79317902320018,
            "unit": "ns/iter",
            "extra": "iterations: 4338623\ncpu: 32.756591204167755 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 32.94954096781643,
            "unit": "ns/iter",
            "extra": "iterations: 4277108\ncpu: 32.674204158510854 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 35.542180932081244,
            "unit": "ns/iter",
            "extra": "iterations: 3953038\ncpu: 35.45435181751353 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 17.988509881369048,
            "unit": "ns/iter",
            "extra": "iterations: 7862209\ncpu: 17.978967488653634 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 706.5079281723504,
            "unit": "ns/iter",
            "extra": "iterations: 200240\ncpu: 701.6704954055132 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 706.5707818710079,
            "unit": "ns/iter",
            "extra": "iterations: 199493\ncpu: 705.7636107532592 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 146.91935719835058,
            "unit": "ns/iter",
            "extra": "iterations: 944969\ncpu: 146.80957788033257 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.603951919143332,
            "unit": "ns/iter",
            "extra": "iterations: 63210840\ncpu: 2.223120274940184 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.8416792067063374,
            "unit": "ns/iter",
            "extra": "iterations: 21073483\ncpu: 6.653257081423131 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 649277.6870727539,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 19324.6 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 2224576.473236084,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 48413 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11878197.193145752,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 272768.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 264625.51200103335,
            "unit": "ns/iter",
            "extra": "iterations: 8945\ncpu: 15386.607043040802 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 992452.1446228027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 42768.20000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8000445.365905762,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 249262.00000000012 ns\nthreads: 1"
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
          "id": "31cb6a33a8fa401fc08fd690d54a5617ee28e455",
          "message": "bot for updating GHA (#7)",
          "timestamp": "2022-02-19T11:01:40+01:00",
          "tree_id": "5637ecc00982f21986da8b416fa986ae3d8cae90",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/31cb6a33a8fa401fc08fd690d54a5617ee28e455"
        },
        "date": 1645267377212,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 17222523.68927002,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 10987133.333333334 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 204.52151122569077,
            "unit": "ns/iter",
            "extra": "iterations: 683167\ncpu: 204.17672399281585 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6328809322930191,
            "unit": "ns/iter",
            "extra": "iterations: 86060636\ncpu: 1.6259733427951892 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6287469883960877,
            "unit": "ns/iter",
            "extra": "iterations: 86007237\ncpu: 1.625513211173148 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.01717027670344,
            "unit": "ns/iter",
            "extra": "iterations: 1652639\ncpu: 84.70192219837486 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 332.6691477744492,
            "unit": "ns/iter",
            "extra": "iterations: 423912\ncpu: 330.7386910490855 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.2267590417609,
            "unit": "ns/iter",
            "extra": "iterations: 3766336\ncpu: 37.176051207327205 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.4555953992038,
            "unit": "ns/iter",
            "extra": "iterations: 3765496\ncpu: 37.189177733823115 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.38902677364427,
            "unit": "ns/iter",
            "extra": "iterations: 3476680\ncpu: 40.233441098979476 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.53880843574251,
            "unit": "ns/iter",
            "extra": "iterations: 6845564\ncpu: 20.430164702280187 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 799.3033248237037,
            "unit": "ns/iter",
            "extra": "iterations: 176032\ncpu: 796.2540901654239 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 801.020904382456,
            "unit": "ns/iter",
            "extra": "iterations: 174953\ncpu: 798.9500037152831 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 167.16832219542033,
            "unit": "ns/iter",
            "extra": "iterations: 839913\ncpu: 166.89800015001558 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.500640648610775,
            "unit": "ns/iter",
            "extra": "iterations: 55938691\ncpu: 2.4991324877444843 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.484680605107628,
            "unit": "ns/iter",
            "extra": "iterations: 18709474\ncpu: 7.478638897063593 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 436968.1461779864,
            "unit": "ns/iter",
            "extra": "iterations: 7901\ncpu: 17440.602455385393 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 10852410.793304443,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 65932.99999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11576361.656188965,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 301282.00000000023 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 308229.72912877984,
            "unit": "ns/iter",
            "extra": "iterations: 7185\ncpu: 18006.165622825334 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1129091.0243988037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 48003.79999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8639905.452728271,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 278340.00000000023 ns\nthreads: 1"
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
          "id": "221265f449b03ac39335a47e6ca4547cabcd184a",
          "message": "Merge branch 'open-telemetry:main' into main",
          "timestamp": "2022-02-19T11:47:59+01:00",
          "tree_id": "29c4e965c50df0df3cd7b725d5960532c03fe4f8",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/221265f449b03ac39335a47e6ca4547cabcd184a"
        },
        "date": 1645268631912,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 22513222.694396973,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 14469310.000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 253.80119289298725,
            "unit": "ns/iter",
            "extra": "iterations: 509413\ncpu: 253.2860370661919 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.6831583369648553,
            "unit": "ns/iter",
            "extra": "iterations: 50868396\ncpu: 2.6664414580715303 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.7724527279696924,
            "unit": "ns/iter",
            "extra": "iterations: 48723785\ncpu: 2.7588148170344318 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 102.64277458190918,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 102.17900000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 670.4787407239099,
            "unit": "ns/iter",
            "extra": "iterations: 332227\ncpu: 406.7511069238803 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 47.46596049069498,
            "unit": "ns/iter",
            "extra": "iterations: 3194895\ncpu: 47.22746756935674 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 50.878175037665535,
            "unit": "ns/iter",
            "extra": "iterations: 2970564\ncpu: 49.963205640410386 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 49.435097632182135,
            "unit": "ns/iter",
            "extra": "iterations: 2990405\ncpu: 49.04288883947158 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 27.49339396642317,
            "unit": "ns/iter",
            "extra": "iterations: 5715989\ncpu: 25.86801689086529 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1006.2956809997559,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 1005.5599999999987 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1046.3008859489653,
            "unit": "ns/iter",
            "extra": "iterations: 130915\ncpu: 1043.7642745292746 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 175.55291414415035,
            "unit": "ns/iter",
            "extra": "iterations: 740749\ncpu: 175.37222459969573 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.8701822259710013,
            "unit": "ns/iter",
            "extra": "iterations: 40043934\ncpu: 3.79002722359896 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.683934428036537,
            "unit": "ns/iter",
            "extra": "iterations: 15336667\ncpu: 8.848780507524877 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 896606.2068939209,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 29816.900000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7129442.6918029785,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 105936.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11847417.35458374,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 395813 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 432045.45083367696,
            "unit": "ns/iter",
            "extra": "iterations: 5617\ncpu: 25839.4338614919 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1702876.091003418,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 80788.40000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8174557.685852051,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 388737.99999999953 ns\nthreads: 1"
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
          "id": "9157fd474883b4d90dab2e4f5aa887a705c2ab94",
          "message": "Mock for http exporters (#1185)",
          "timestamp": "2022-02-19T02:12:02-08:00",
          "tree_id": "31e46179e76115440287b60a704b41bc2c6dc874",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/9157fd474883b4d90dab2e4f5aa887a705c2ab94"
        },
        "date": 1645372802142,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 19732773.303985596,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 11744491.666666666 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 215.44802329675053,
            "unit": "ns/iter",
            "extra": "iterations: 637186\ncpu: 215.3339841113898 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.6859821668567125,
            "unit": "ns/iter",
            "extra": "iterations: 63257680\ncpu: 2.383359617361876 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.2303733586705357,
            "unit": "ns/iter",
            "extra": "iterations: 52368751\ncpu: 2.8200768049633265 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 114.66398277796083,
            "unit": "ns/iter",
            "extra": "iterations: 1263743\ncpu: 104.83492292341086 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 524.2194306294251,
            "unit": "ns/iter",
            "extra": "iterations: 346108\ncpu: 421.4305939186614 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 45.47537050326661,
            "unit": "ns/iter",
            "extra": "iterations: 3266342\ncpu: 45.46774342674466 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 48.23550440397682,
            "unit": "ns/iter",
            "extra": "iterations: 3338102\ncpu: 44.265963113170315 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 57.55145934489226,
            "unit": "ns/iter",
            "extra": "iterations: 2733873\ncpu: 48.878898178518185 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 30.433374580795984,
            "unit": "ns/iter",
            "extra": "iterations: 4744364\ncpu: 24.55758032056566 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1259.0065114561032,
            "unit": "ns/iter",
            "extra": "iterations: 137795\ncpu: 971.3879313472919 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1185.5030059814453,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 1001.8210000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 156.47995486000875,
            "unit": "ns/iter",
            "extra": "iterations: 875832\ncpu: 153.6134783839823 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.0243835698106185,
            "unit": "ns/iter",
            "extra": "iterations: 48489718\ncpu: 2.9420113352690564 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.348446069468005,
            "unit": "ns/iter",
            "extra": "iterations: 18768970\ncpu: 7.299665351907963 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 887067.0795440674,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 26323.200000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 4163492.202758789,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 83671.50000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 10891535.28213501,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 348774 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 8206980.228424072,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 108235.00000000013 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1516448.2593536377,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 72323.60000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7939777.374267578,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 346325.00000000006 ns\nthreads: 1"
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
          "id": "c10bc36e7d7776ac74d45b5b2ca02eaf0df028b4",
          "message": "[Metric SDK] Synchronous Instruments - Aggregation Storage(s) creation for configured views (#1219)",
          "timestamp": "2022-02-24T00:12:23-08:00",
          "tree_id": "b998be5fbaeb2cb623f5f11eba18a4c509c0d472",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/c10bc36e7d7776ac74d45b5b2ca02eaf0df028b4"
        },
        "date": 1645721441369,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 17474611.60024007,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 10970266.666666668 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 204.41282245108093,
            "unit": "ns/iter",
            "extra": "iterations: 685099\ncpu: 204.088168279329 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.0598326495258537,
            "unit": "ns/iter",
            "extra": "iterations: 85981882\ncpu: 1.6255389711055641 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6704705662137893,
            "unit": "ns/iter",
            "extra": "iterations: 86040009\ncpu: 1.626282954015033 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.35922747575998,
            "unit": "ns/iter",
            "extra": "iterations: 1648304\ncpu: 84.72005164095944 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 331.2480832750883,
            "unit": "ns/iter",
            "extra": "iterations: 423811\ncpu: 330.54875876275054 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.29841117460821,
            "unit": "ns/iter",
            "extra": "iterations: 3764240\ncpu: 37.18665653624637 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 38.54504803862913,
            "unit": "ns/iter",
            "extra": "iterations: 3768648\ncpu: 37.20413792957049 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.41403598030468,
            "unit": "ns/iter",
            "extra": "iterations: 3470045\ncpu: 40.31722931547 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.471290309673844,
            "unit": "ns/iter",
            "extra": "iterations: 6853875\ncpu: 20.425379803395895 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 810.5903078104618,
            "unit": "ns/iter",
            "extra": "iterations: 172677\ncpu: 809.3457727433317 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 817.7256417312097,
            "unit": "ns/iter",
            "extra": "iterations: 170467\ncpu: 816.3462722990373 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 166.56428703727855,
            "unit": "ns/iter",
            "extra": "iterations: 837501\ncpu: 166.55227874354782 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.4998095053639227,
            "unit": "ns/iter",
            "extra": "iterations: 56002688\ncpu: 2.4973997676682953 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.479303931850726,
            "unit": "ns/iter",
            "extra": "iterations: 18732455\ncpu: 7.474540843685465 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 472596.68694849696,
            "unit": "ns/iter",
            "extra": "iterations: 7704\ncpu: 17717.056074766355 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8158545.49407959,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 255787.00000000012 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12163348.197937012,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 533721.0000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 432641.754181633,
            "unit": "ns/iter",
            "extra": "iterations: 7326\ncpu: 19104.190554190554 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2964456.659571676,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 199532.69754768402 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7977192.401885986,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 460885.0000000009 ns\nthreads: 1"
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
          "id": "11a219c80a7a3c47f479ce9d20e590e5900d0248",
          "message": "Jaeger bazel windows (#1227)",
          "timestamp": "2022-02-28T20:22:13-08:00",
          "tree_id": "7bd6be3b9e9daf38f60d24a464baa814c128ee02",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/11a219c80a7a3c47f479ce9d20e590e5900d0248"
        },
        "date": 1646150940212,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 23058811.82352702,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 14542644.444444446 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 277.3646197163436,
            "unit": "ns/iter",
            "extra": "iterations: 513353\ncpu: 275.518210665955 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.862713161613071,
            "unit": "ns/iter",
            "extra": "iterations: 49976975\ncpu: 2.8489259303909455 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.02128062461995,
            "unit": "ns/iter",
            "extra": "iterations: 42163341\ncpu: 3.0024636804754166 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 110.73504401712457,
            "unit": "ns/iter",
            "extra": "iterations: 1209347\ncpu: 105.68935136069301 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 449.9524786105733,
            "unit": "ns/iter",
            "extra": "iterations: 310644\ncpu: 429.1877518960611 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 47.58154531728337,
            "unit": "ns/iter",
            "extra": "iterations: 2943056\ncpu: 47.22319249107053 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 47.51181895651092,
            "unit": "ns/iter",
            "extra": "iterations: 3016695\ncpu: 47.25956717533591 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 50.84740259542947,
            "unit": "ns/iter",
            "extra": "iterations: 2809699\ncpu: 50.59527728770944 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 27.939932021606023,
            "unit": "ns/iter",
            "extra": "iterations: 5307574\ncpu: 26.051544453266214 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1053.0810399056077,
            "unit": "ns/iter",
            "extra": "iterations: 135887\ncpu: 1049.8848307785145 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1023.7694926380057,
            "unit": "ns/iter",
            "extra": "iterations: 125510\ncpu: 1021.6907019361017 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 230.19405321491263,
            "unit": "ns/iter",
            "extra": "iterations: 748663\ncpu: 188.39798413972645 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.453387236767772,
            "unit": "ns/iter",
            "extra": "iterations: 33563000\ncpu: 3.672585883264309 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 10.682775233810943,
            "unit": "ns/iter",
            "extra": "iterations: 15564220\ncpu: 8.819651739695278 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 564993.6199188232,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 25497.2 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8319888.114929199,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 294153 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 9059367.179870605,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 578356 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 369280.89201689546,
            "unit": "ns/iter",
            "extra": "iterations: 5482\ncpu: 25630.189711784027 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3798628.2662395793,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 264237.22943722946 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5154821.872711182,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 520298.0000000002 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "artiom.vaskov@ibm.com",
            "name": "Artiom Vaskov",
            "username": "velemas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84394fda87e80697ee0534311021926b529c8342",
          "message": "Added s390x arch into CMake build. (#1216)",
          "timestamp": "2022-03-02T07:52:37-08:00",
          "tree_id": "e328dfc358d429ff046cb55b8f5d310864548cb6",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/84394fda87e80697ee0534311021926b529c8342"
        },
        "date": 1646237688199,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 19520139.694213867,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 12946920 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 182.27557394586034,
            "unit": "ns/iter",
            "extra": "iterations: 769345\ncpu: 181.1715160298696 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.437466719173785,
            "unit": "ns/iter",
            "extra": "iterations: 97468601\ncpu: 1.4339048531126453 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.4445969691451765,
            "unit": "ns/iter",
            "extra": "iterations: 97618799\ncpu: 1.4353526312078475 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 74.85526007976969,
            "unit": "ns/iter",
            "extra": "iterations: 1874211\ncpu: 74.7558305868443 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 295.21895745633657,
            "unit": "ns/iter",
            "extra": "iterations: 478471\ncpu: 291.2546423921199 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 33.011761160046696,
            "unit": "ns/iter",
            "extra": "iterations: 4269126\ncpu: 32.81936396349043 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 32.87915638186939,
            "unit": "ns/iter",
            "extra": "iterations: 4263444\ncpu: 32.79815566945407 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 35.57612024391172,
            "unit": "ns/iter",
            "extra": "iterations: 3940166\ncpu: 35.4868551223477 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 18.04109400599547,
            "unit": "ns/iter",
            "extra": "iterations: 7762684\ncpu: 18.021086521105346 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 706.8559514001569,
            "unit": "ns/iter",
            "extra": "iterations: 198006\ncpu: 704.9614658141678 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 714.4464823804857,
            "unit": "ns/iter",
            "extra": "iterations: 197392\ncpu: 710.1741711923482 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 146.0811536143314,
            "unit": "ns/iter",
            "extra": "iterations: 955671\ncpu: 145.5089669980569 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.5063807574162404,
            "unit": "ns/iter",
            "extra": "iterations: 55993505\ncpu: 2.4982576104139222 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.7602427003775825,
            "unit": "ns/iter",
            "extra": "iterations: 18710849\ncpu: 7.489382229528975 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 13834736.347198486,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 45241.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 6843023.300170898,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 292109.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6278395.652770996,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 493639.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3483922.243118286,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 45269 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3780919.4239958944,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 252464.08094435075 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4826880.531546511,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 390705.86419753084 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9447643+devjgm@users.noreply.github.com",
            "name": "Greg Miller",
            "username": "devjgm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99c483c790204870aae017ab37b3cf8f2785d46b",
          "message": "chore: update prometheus to 1.0 version (#1242)",
          "timestamp": "2022-03-03T19:08:15-08:00",
          "tree_id": "4ba6a1f890b1587de222ce6f361e6f7a850f03b8",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/99c483c790204870aae017ab37b3cf8f2785d46b"
        },
        "date": 1646412312478,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 15527395.10169396,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 10525630.769230772 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 254.68493618678212,
            "unit": "ns/iter",
            "extra": "iterations: 682408\ncpu: 204.8780201873366 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.626261132226519,
            "unit": "ns/iter",
            "extra": "iterations: 86023620\ncpu: 1.6244561668062798 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.63512453996363,
            "unit": "ns/iter",
            "extra": "iterations: 86186199\ncpu: 1.6248622357739666 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.77940494211757,
            "unit": "ns/iter",
            "extra": "iterations: 1653902\ncpu: 84.61305446150978 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 328.67498819442807,
            "unit": "ns/iter",
            "extra": "iterations: 425541\ncpu: 328.1063399296425 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.556588051005996,
            "unit": "ns/iter",
            "extra": "iterations: 3767451\ncpu: 37.16300490703132 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.288375725474864,
            "unit": "ns/iter",
            "extra": "iterations: 3768060\ncpu: 37.15288503898555 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.3030281380459,
            "unit": "ns/iter",
            "extra": "iterations: 3484347\ncpu: 40.17972377607625 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.49363972553461,
            "unit": "ns/iter",
            "extra": "iterations: 6856359\ncpu: 20.41399815849784 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1002.141394020538,
            "unit": "ns/iter",
            "extra": "iterations: 173603\ncpu: 796.7057020904005 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 801.8289032315693,
            "unit": "ns/iter",
            "extra": "iterations: 174441\ncpu: 800.7750471506127 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 165.33096057600466,
            "unit": "ns/iter",
            "extra": "iterations: 846438\ncpu: 165.15964547905457 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.500947068075703,
            "unit": "ns/iter",
            "extra": "iterations: 56025548\ncpu: 2.497619478884883 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.481682570685755,
            "unit": "ns/iter",
            "extra": "iterations: 18731152\ncpu: 7.468937308287284 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 10050194.303950744,
            "unit": "ns/iter",
            "extra": "iterations: 7831\ncpu: 33779.05759162304 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9371829.03289795,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 76993.00000000019 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6530168.056488037,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 249505.99999999988 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3738493.2041168213,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 32038.49999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3811405.897140503,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 71634.49999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4699608.642761022,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 253530.82191780818 ns\nthreads: 1"
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
          "id": "50fabb5fa09faff9f9767802fd3b9b9b440b0afa",
          "message": "dependabot for GitHub actions (#1246)",
          "timestamp": "2022-03-04T15:00:10-08:00",
          "tree_id": "ae28278c1f0c2fc60ef18d9bdf20b54ee3cef35d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/50fabb5fa09faff9f9767802fd3b9b9b440b0afa"
        },
        "date": 1646477789916,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 19296864.66852824,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 11801508.333333334 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 176.73550020242158,
            "unit": "ns/iter",
            "extra": "iterations: 787202\ncpu: 176.49548654602 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.4078775797991478,
            "unit": "ns/iter",
            "extra": "iterations: 101443395\ncpu: 1.4055119113472099 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.454809519508239,
            "unit": "ns/iter",
            "extra": "iterations: 98868660\ncpu: 1.4110265072875472 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 74.24335468356408,
            "unit": "ns/iter",
            "extra": "iterations: 1907362\ncpu: 74.14287377016007 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 286.33486729871896,
            "unit": "ns/iter",
            "extra": "iterations: 485915\ncpu: 286.09160038278304 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 32.86223941249938,
            "unit": "ns/iter",
            "extra": "iterations: 4265276\ncpu: 32.75098727491493 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 32.75992843462199,
            "unit": "ns/iter",
            "extra": "iterations: 4252979\ncpu: 32.676554480988486 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 35.080819253536276,
            "unit": "ns/iter",
            "extra": "iterations: 3967096\ncpu: 35.02804066248963 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 17.742108677785353,
            "unit": "ns/iter",
            "extra": "iterations: 7924648\ncpu: 17.596415638902833 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 716.163048736661,
            "unit": "ns/iter",
            "extra": "iterations: 196030\ncpu: 714.9283272968424 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 735.9360477794336,
            "unit": "ns/iter",
            "extra": "iterations: 198145\ncpu: 713.4053344772775 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 142.88628318576627,
            "unit": "ns/iter",
            "extra": "iterations: 975284\ncpu: 142.70971327326194 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.9096294613774556,
            "unit": "ns/iter",
            "extra": "iterations: 48515428\ncpu: 2.884533967215543 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.445032382402374,
            "unit": "ns/iter",
            "extra": "iterations: 18862078\ncpu: 7.42074123540365 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 505724.1916656494,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 16566.9 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 1047162.2943878174,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 44958.30000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 9339283.472337063,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 264097.3270440252 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 1094066.6090699395,
            "unit": "ns/iter",
            "extra": "iterations: 7945\ncpu: 21236.68974197609 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3723606.586456299,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 67645.29999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4527522.356082232,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 239737.26495726506 ns\nthreads: 1"
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
          "distinct": true,
          "id": "b46cd6f580a90a615accdc635e6878999521fbf5",
          "message": "Update Maintainers (#1249)",
          "timestamp": "2022-03-06T20:35:50-08:00",
          "tree_id": "965591cd0aa891d6ee4140a1b3b0ebf5cbda2be3",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/b46cd6f580a90a615accdc635e6878999521fbf5"
        },
        "date": 1646667890670,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 18800735.473632812,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 10549407.142857144 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 159.4965808183441,
            "unit": "ns/iter",
            "extra": "iterations: 880625\ncpu: 158.75406671398156 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 3.1991320341274507,
            "unit": "ns/iter",
            "extra": "iterations: 45738929\ncpu: 3.080955393599181 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.095197197619221,
            "unit": "ns/iter",
            "extra": "iterations: 45215841\ncpu: 3.0937918416689416 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 74.26710325062096,
            "unit": "ns/iter",
            "extra": "iterations: 1844739\ncpu: 74.2173825131902 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 327.73991161879195,
            "unit": "ns/iter",
            "extra": "iterations: 427017\ncpu: 327.5736094815896 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.94337515640702,
            "unit": "ns/iter",
            "extra": "iterations: 3705370\ncpu: 37.77879132178433 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.802812714256916,
            "unit": "ns/iter",
            "extra": "iterations: 3706351\ncpu: 37.78730077102789 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 43.91850642029257,
            "unit": "ns/iter",
            "extra": "iterations: 3272618\ncpu: 42.723715386274776 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 22.835863668550843,
            "unit": "ns/iter",
            "extra": "iterations: 6447008\ncpu: 21.724620164888897 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1211.6473591221386,
            "unit": "ns/iter",
            "extra": "iterations: 171610\ncpu: 814.4443796981533 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 847.7449556785365,
            "unit": "ns/iter",
            "extra": "iterations: 170700\ncpu: 841.4792032806096 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 149.86539415157202,
            "unit": "ns/iter",
            "extra": "iterations: 932171\ncpu: 149.7603980385573 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.299622597141424,
            "unit": "ns/iter",
            "extra": "iterations: 38708143\ncpu: 3.2973294533917583 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.40290861846362,
            "unit": "ns/iter",
            "extra": "iterations: 15336298\ncpu: 9.123851140607727 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6581025.638217865,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 32312.298314808177 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9572582.244873047,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 80067.00000000033 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7296490.669250488,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 279420.9999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3241878.2711029053,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 38382.09999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3322848.7968444824,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 74177.1 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4421415.00012628,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 284107.9107505072 ns\nthreads: 1"
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
        "date": 1644910744558,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4385.395626684917,
            "unit": "ns/iter",
            "extra": "iterations: 31721\ncpu: 4363.377573216481 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.9424456033022266,
            "unit": "ns/iter",
            "extra": "iterations: 73787124\ncpu: 1.9389182318584472 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 110059.86297297206,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 89624.45997458708 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.5848274902376627,
            "unit": "ns/iter",
            "extra": "iterations: 71868583\ncpu: 1.9363940986564332 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 1220.2569647305213,
            "unit": "ns/iter",
            "extra": "iterations: 176858\ncpu: 808.7386490857077 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 24135.762496748768,
            "unit": "ns/iter",
            "extra": "iterations: 6961\ncpu: 20259.732797011915 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3342.3219099888224,
            "unit": "ns/iter",
            "extra": "iterations: 43069\ncpu: 3253.5396689033864 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 64704.700606585204,
            "unit": "ns/iter",
            "extra": "iterations: 2541\ncpu: 55863.085399449046 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 63.489603951509935,
            "unit": "ns/iter",
            "extra": "iterations: 2206469\ncpu: 63.38239966208453 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 379.86619536483266,
            "unit": "ns/iter",
            "extra": "iterations: 368735\ncpu: 379.41123028733364 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1209.7584033576697,
            "unit": "ns/iter",
            "extra": "iterations: 121426\ncpu: 1208.0254640686505 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 276.41534955613497,
            "unit": "ns/iter",
            "extra": "iterations: 504386\ncpu: 276.05068340516976 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1139.1402087676254,
            "unit": "ns/iter",
            "extra": "iterations: 121486\ncpu: 1138.38631611873 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.397636000085042,
            "unit": "ns/iter",
            "extra": "iterations: 68659761\ncpu: 2.0287501437705266 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.360266831926988,
            "unit": "ns/iter",
            "extra": "iterations: 69680862\ncpu: 2.0287335136583127 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 12.733673973168885,
            "unit": "ns/iter",
            "extra": "iterations: 12960443\ncpu: 10.779538940142713 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.7628126397586112,
            "unit": "ns/iter",
            "extra": "iterations: 67897552\ncpu: 2.0490208542422863 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.13606695202289598,
            "unit": "ms/iter",
            "extra": "iterations: 844\ncpu: 0.132850355450237 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.49171004841921356,
            "unit": "ms/iter",
            "extra": "iterations: 506\ncpu: 0.2766258893280633 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.42011199458952875,
            "unit": "ms/iter",
            "extra": "iterations: 465\ncpu: 0.15082215053763437 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 1.2219476699829102,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.5685970000000001 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.4522291201989628,
            "unit": "ms/iter",
            "extra": "iterations: 309\ncpu: 0.15392200647249205 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.9105256534515218,
            "unit": "ms/iter",
            "extra": "iterations: 187\ncpu: 0.38635935828877016 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.234320044517517,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 7.2150375 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 29.170846939086914,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 29.10663999999998 ms\nthreads: 1"
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
          "id": "3a9d0870bc846f79f97c81796ce70440d944aa88",
          "message": "Detect vs2022 as build environment (#1212)",
          "timestamp": "2022-02-17T08:10:19Z",
          "tree_id": "361c175d162ec52518c7ad2e0eba088e6987fb3a",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/3a9d0870bc846f79f97c81796ce70440d944aa88"
        },
        "date": 1645123244772,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3704.559549130982,
            "unit": "ns/iter",
            "extra": "iterations: 37846\ncpu: 3701.376631612324 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.0319607771711916,
            "unit": "ns/iter",
            "extra": "iterations: 46577858\ncpu: 3.011065901742412 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 73515.19621277659,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 73440.1893740137 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.171487264606082,
            "unit": "ns/iter",
            "extra": "iterations: 46494328\ncpu: 3.00088647372213 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 636.7923833694209,
            "unit": "ns/iter",
            "extra": "iterations: 218618\ncpu: 635.116504587911 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 15971.594174848184,
            "unit": "ns/iter",
            "extra": "iterations: 8756\ncpu: 15917.279579716753 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2920.7804678458697,
            "unit": "ns/iter",
            "extra": "iterations: 47957\ncpu: 2907.3920387013377 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 51376.48252394484,
            "unit": "ns/iter",
            "extra": "iterations: 2716\ncpu: 51196.281296023575 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 56.66730570803241,
            "unit": "ns/iter",
            "extra": "iterations: 2467108\ncpu: 56.640568633395866 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 316.0368821404662,
            "unit": "ns/iter",
            "extra": "iterations: 443526\ncpu: 315.4897345364196 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1018.9381977447151,
            "unit": "ns/iter",
            "extra": "iterations: 137541\ncpu: 1016.2329778029829 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 245.24399870714677,
            "unit": "ns/iter",
            "extra": "iterations: 571366\ncpu: 245.037681626138 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 961.3581097059138,
            "unit": "ns/iter",
            "extra": "iterations: 145649\ncpu: 960.8579530240507 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.0409842143351637,
            "unit": "ns/iter",
            "extra": "iterations: 46225063\ncpu: 3.0168266076781767 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.012155621766707,
            "unit": "ns/iter",
            "extra": "iterations: 46483522\ncpu: 3.0113811083420057 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.71842178749744,
            "unit": "ns/iter",
            "extra": "iterations: 16256500\ncpu: 8.709476209516195 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.8738400065406986,
            "unit": "ns/iter",
            "extra": "iterations: 45325779\ncpu: 2.867185139829588 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.12268012200960257,
            "unit": "ms/iter",
            "extra": "iterations: 1126\ncpu: 0.11924653641207816 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.24179493387540182,
            "unit": "ms/iter",
            "extra": "iterations: 576\ncpu: 0.23631944444444444 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12100156093180903,
            "unit": "ms/iter",
            "extra": "iterations: 1154\ncpu: 0.1188506065857886 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3655497938292832,
            "unit": "ms/iter",
            "extra": "iterations: 586\ncpu: 0.24636638225255977 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.20078250340053014,
            "unit": "ms/iter",
            "extra": "iterations: 742\ncpu: 0.1255407008086253 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.7396525109720509,
            "unit": "ms/iter",
            "extra": "iterations: 171\ncpu: 0.37976666666666636 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 12.57547310420445,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 6.105399999999999 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 38.94716501235962,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 22.426524999999977 ms\nthreads: 1"
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
          "id": "1026ec3ffcf794d91af0459ce1c30faef154eba2",
          "message": "Run apt update before install thrift dependencies (#1225)",
          "timestamp": "2022-02-18T18:56:06-08:00",
          "tree_id": "bc4374ba9a8bb4a340c2645f23f510af35c3c534",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/1026ec3ffcf794d91af0459ce1c30faef154eba2"
        },
        "date": 1645256094252,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3695.569733962067,
            "unit": "ns/iter",
            "extra": "iterations: 37910\ncpu: 3690.5882352941176 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6247744072132762,
            "unit": "ns/iter",
            "extra": "iterations: 86767358\ncpu: 1.6140320879656145 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75190.58715131946,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 74984.425349087 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6276908778929113,
            "unit": "ns/iter",
            "extra": "iterations: 86609546\ncpu: 1.6137609126827663 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 673.5617915741682,
            "unit": "ns/iter",
            "extra": "iterations: 208678\ncpu: 671.6711871879164 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16876.553622993426,
            "unit": "ns/iter",
            "extra": "iterations: 8313\ncpu: 16863.671358113774 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2744.7874928135066,
            "unit": "ns/iter",
            "extra": "iterations: 51230\ncpu: 2714.507124731606 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46570.012544063815,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 46408.211436170284 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.874088746252504,
            "unit": "ns/iter",
            "extra": "iterations: 2644483\ncpu: 52.87404002975252 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 316.28920028977143,
            "unit": "ns/iter",
            "extra": "iterations: 443087\ncpu: 316.1191820116591 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1000.1826286315918,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 1000.182 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 230.20705242510385,
            "unit": "ns/iter",
            "extra": "iterations: 607985\ncpu: 230.14367130768028 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 946.9725495166294,
            "unit": "ns/iter",
            "extra": "iterations: 147994\ncpu: 946.9687960322718 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6921703523126628,
            "unit": "ns/iter",
            "extra": "iterations: 82537923\ncpu: 1.68644539310736 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.6923285194705342,
            "unit": "ns/iter",
            "extra": "iterations: 82820144\ncpu: 1.691311959080873 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.993683786196893,
            "unit": "ns/iter",
            "extra": "iterations: 15637776\ncpu: 8.958019350066145 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.706064788881948,
            "unit": "ns/iter",
            "extra": "iterations: 79694882\ncpu: 1.7025284007572783 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.10945640286092992,
            "unit": "ms/iter",
            "extra": "iterations: 1263\ncpu: 0.10594259699129058 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2224518477551045,
            "unit": "ms/iter",
            "extra": "iterations: 489\ncpu: 0.2107008179959101 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10850981720467116,
            "unit": "ms/iter",
            "extra": "iterations: 1291\ncpu: 0.10592308288148722 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2127693193714793,
            "unit": "ms/iter",
            "extra": "iterations: 656\ncpu: 0.20752256097560978 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10786237923995308,
            "unit": "ms/iter",
            "extra": "iterations: 1288\ncpu: 0.10519805900621125 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21159053750550333,
            "unit": "ms/iter",
            "extra": "iterations: 661\ncpu: 0.2064487140695915 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.377967921170321,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.368727272727264 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.313297907511394,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 25.285133333333338 ms\nthreads: 1"
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
          "id": "9502339a588a11642b14d795e316bb7095c63adc",
          "message": "Ostream metric exporter (#1196)",
          "timestamp": "2022-02-19T00:23:57-08:00",
          "tree_id": "8bba508dead7ada7d1d67f23d4c40d644b9ba41f",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/9502339a588a11642b14d795e316bb7095c63adc"
        },
        "date": 1645260333207,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4165.460258453366,
            "unit": "ns/iter",
            "extra": "iterations: 42996\ncpu: 3239.012931435483 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.4296990715440168,
            "unit": "ns/iter",
            "extra": "iterations: 98350521\ncpu: 1.424388997390263 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 66190.79028016854,
            "unit": "ns/iter",
            "extra": "iterations: 2132\ncpu: 65529.69043151969 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.4259905459463178,
            "unit": "ns/iter",
            "extra": "iterations: 97667832\ncpu: 1.4246717383877228 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 596.3509934133228,
            "unit": "ns/iter",
            "extra": "iterations: 240340\ncpu: 593.8678538736791 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 14914.676127077084,
            "unit": "ns/iter",
            "extra": "iterations: 9438\ncpu: 14818.806950625136 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2407.395114015999,
            "unit": "ns/iter",
            "extra": "iterations: 58235\ncpu: 2402.2512234910305 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 43551.87685984486,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 43346.34433962265 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.95125435912335,
            "unit": "ns/iter",
            "extra": "iterations: 2982512\ncpu: 46.7158556277393 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 279.0941017864716,
            "unit": "ns/iter",
            "extra": "iterations: 504040\ncpu: 278.5548765970955 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 885.5751585108925,
            "unit": "ns/iter",
            "extra": "iterations: 159998\ncpu: 883.8435480443508 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 204.33154974336748,
            "unit": "ns/iter",
            "extra": "iterations: 692894\ncpu: 203.38219121539524 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 838.5466987539936,
            "unit": "ns/iter",
            "extra": "iterations: 167584\ncpu: 836.3316307046015 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.4863165740726982,
            "unit": "ns/iter",
            "extra": "iterations: 94309754\ncpu: 1.4860180846193283 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.4979866883513981,
            "unit": "ns/iter",
            "extra": "iterations: 93928842\ncpu: 1.4967415439870964 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 7.891505822093532,
            "unit": "ns/iter",
            "extra": "iterations: 17795291\ncpu: 7.886670692825422 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.4759026267340645,
            "unit": "ns/iter",
            "extra": "iterations: 93456072\ncpu: 1.4749453625656344 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.09959785950278274,
            "unit": "ms/iter",
            "extra": "iterations: 1389\ncpu: 0.09472872570194385 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.18953794409871583,
            "unit": "ms/iter",
            "extra": "iterations: 741\ncpu: 0.18499662618083668 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.09624388803660251,
            "unit": "ms/iter",
            "extra": "iterations: 1445\ncpu: 0.09429238754325259 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.18937773601983182,
            "unit": "ms/iter",
            "extra": "iterations: 744\ncpu: 0.1852206989247311 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.09553486316845403,
            "unit": "ms/iter",
            "extra": "iterations: 1461\ncpu: 0.09360328542094452 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.1877990548796053,
            "unit": "ms/iter",
            "extra": "iterations: 746\ncpu: 0.18391581769436985 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.6366729736328125,
            "unit": "ms/iter",
            "extra": "iterations: 25\ncpu: 5.633647999999996 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 22.524476051330566,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 22.471616666666677 ms\nthreads: 1"
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
          "id": "9157fd474883b4d90dab2e4f5aa887a705c2ab94",
          "message": "Mock for http exporters (#1185)",
          "timestamp": "2022-02-19T02:12:02-08:00",
          "tree_id": "31e46179e76115440287b60a704b41bc2c6dc874",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/9157fd474883b4d90dab2e4f5aa887a705c2ab94"
        },
        "date": 1645372800675,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3866.124997070239,
            "unit": "ns/iter",
            "extra": "iterations: 39749\ncpu: 3854.8164733704 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.1608127396955976,
            "unit": "ns/iter",
            "extra": "iterations: 65305209\ncpu: 2.154973579519514 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 70467.49229996437,
            "unit": "ns/iter",
            "extra": "iterations: 1957\ncpu: 70316.65815022994 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.1051160512932605,
            "unit": "ns/iter",
            "extra": "iterations: 64670504\ncpu: 2.095949337274378 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 652.4842982510881,
            "unit": "ns/iter",
            "extra": "iterations: 210352\ncpu: 651.6092074237469 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16016.555282304871,
            "unit": "ns/iter",
            "extra": "iterations: 9540\ncpu: 15899.73794549266 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2627.4061904771406,
            "unit": "ns/iter",
            "extra": "iterations: 50893\ncpu: 2626.426031084826 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 49886.24150365282,
            "unit": "ns/iter",
            "extra": "iterations: 2890\ncpu: 49764.152249134946 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 56.622373483501796,
            "unit": "ns/iter",
            "extra": "iterations: 2768226\ncpu: 56.299810781345165 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 329.4503975274636,
            "unit": "ns/iter",
            "extra": "iterations: 421636\ncpu: 327.29676782817404 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1056.9190979003906,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 1053.1769999999995 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 229.6903782497276,
            "unit": "ns/iter",
            "extra": "iterations: 625889\ncpu: 229.2328192379161 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 950.5994703224422,
            "unit": "ns/iter",
            "extra": "iterations: 143446\ncpu: 948.3889407860797 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.5731603082446783,
            "unit": "ns/iter",
            "extra": "iterations: 58470251\ncpu: 2.563146171546279 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.536298169242639,
            "unit": "ns/iter",
            "extra": "iterations: 55099238\ncpu: 2.5285449501134662 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.687446953639821,
            "unit": "ns/iter",
            "extra": "iterations: 11989073\ncpu: 10.660540643968051 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.3155988724170813,
            "unit": "ns/iter",
            "extra": "iterations: 63517125\ncpu: 2.3097282819397127 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.13468676130619647,
            "unit": "ms/iter",
            "extra": "iterations: 1051\ncpu: 0.1315155090390105 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.26445371824651426,
            "unit": "ms/iter",
            "extra": "iterations: 562\ncpu: 0.25870480427046266 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.13697380152170116,
            "unit": "ms/iter",
            "extra": "iterations: 973\ncpu: 0.1342914696813977 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.25939359897520486,
            "unit": "ms/iter",
            "extra": "iterations: 533\ncpu: 0.2543212007504691 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14358633442928917,
            "unit": "ms/iter",
            "extra": "iterations: 760\ncpu: 0.13713578947368416 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.26200531985509257,
            "unit": "ms/iter",
            "extra": "iterations: 514\ncpu: 0.2559274319066148 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.0849086098048994,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 6.069095652173912 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.529225667317707,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 25.471716666666662 ms\nthreads: 1"
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
          "id": "c10bc36e7d7776ac74d45b5b2ca02eaf0df028b4",
          "message": "[Metric SDK] Synchronous Instruments - Aggregation Storage(s) creation for configured views (#1219)",
          "timestamp": "2022-02-24T00:12:23-08:00",
          "tree_id": "b998be5fbaeb2cb623f5f11eba18a4c509c0d472",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/c10bc36e7d7776ac74d45b5b2ca02eaf0df028b4"
        },
        "date": 1645721438871,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4662.5362879728245,
            "unit": "ns/iter",
            "extra": "iterations: 37927\ncpu: 3703.4777335407503 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.0774379668661784,
            "unit": "ns/iter",
            "extra": "iterations: 86443231\ncpu: 1.620559509165038 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75161.29760578905,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 74588.1754949171 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6195961171037239,
            "unit": "ns/iter",
            "extra": "iterations: 86611689\ncpu: 1.6162575931292595 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 687.1043978549599,
            "unit": "ns/iter",
            "extra": "iterations: 210586\ncpu: 664.7972799711283 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17067.368402446486,
            "unit": "ns/iter",
            "extra": "iterations: 8270\ncpu: 16966.009673518725 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2738.5135778635663,
            "unit": "ns/iter",
            "extra": "iterations: 50753\ncpu: 2738.3721159340334 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46740.24805177414,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 46712.04013377927 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 56.59680094397737,
            "unit": "ns/iter",
            "extra": "iterations: 2610494\ncpu: 53.030843970528196 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 315.6860786788914,
            "unit": "ns/iter",
            "extra": "iterations: 443642\ncpu: 315.27808458171233 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1003.8257382748653,
            "unit": "ns/iter",
            "extra": "iterations: 139648\ncpu: 1002.6380614115491 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 231.0173322881042,
            "unit": "ns/iter",
            "extra": "iterations: 606512\ncpu: 230.70409159258193 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 954.8079588891258,
            "unit": "ns/iter",
            "extra": "iterations: 147639\ncpu: 948.7357676494695 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.7041257341746043,
            "unit": "ns/iter",
            "extra": "iterations: 82610979\ncpu: 1.6876764043675114 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.693805483405702,
            "unit": "ns/iter",
            "extra": "iterations: 82709077\ncpu: 1.6913983939150963 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.137839098196045,
            "unit": "ns/iter",
            "extra": "iterations: 15632712\ncpu: 8.956181115599136 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.7062050946063034,
            "unit": "ns/iter",
            "extra": "iterations: 79468244\ncpu: 1.6991957189843028 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11031390630710892,
            "unit": "ms/iter",
            "extra": "iterations: 1197\ncpu: 0.10650827067669173 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21583952518723767,
            "unit": "ms/iter",
            "extra": "iterations: 644\ncpu: 0.21029409937888205 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1088239753882459,
            "unit": "ms/iter",
            "extra": "iterations: 1293\ncpu: 0.10626945088940448 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21442419253521083,
            "unit": "ms/iter",
            "extra": "iterations: 644\ncpu: 0.20950139751552788 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10820013553506665,
            "unit": "ms/iter",
            "extra": "iterations: 1286\ncpu: 0.10596578538102638 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2151095285648253,
            "unit": "ms/iter",
            "extra": "iterations: 656\ncpu: 0.2091847560975609 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.494099443609064,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.397768181818182 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.562572479248047,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.45793999999999 ms\nthreads: 1"
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
          "id": "11a219c80a7a3c47f479ce9d20e590e5900d0248",
          "message": "Jaeger bazel windows (#1227)",
          "timestamp": "2022-02-28T20:22:13-08:00",
          "tree_id": "7bd6be3b9e9daf38f60d24a464baa814c128ee02",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/11a219c80a7a3c47f479ce9d20e590e5900d0248"
        },
        "date": 1646150939893,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 5510.186768893254,
            "unit": "ns/iter",
            "extra": "iterations: 32487\ncpu: 4307.190568535108 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.6031439125582674,
            "unit": "ns/iter",
            "extra": "iterations: 54471741\ncpu: 2.580150687674918 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 89363.14889700105,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 87525.9900990099 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.6404648443654533,
            "unit": "ns/iter",
            "extra": "iterations: 53392116\ncpu: 2.6185439063699962 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 781.9995068126534,
            "unit": "ns/iter",
            "extra": "iterations: 176782\ncpu: 781.3210620990822 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 19289.746114611233,
            "unit": "ns/iter",
            "extra": "iterations: 7607\ncpu: 18979.80807151309 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3464.3948867162985,
            "unit": "ns/iter",
            "extra": "iterations: 42229\ncpu: 3424.331620450398 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 105004.63083893637,
            "unit": "ns/iter",
            "extra": "iterations: 2174\ncpu: 63175.8509659614 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 69.26534376859634,
            "unit": "ns/iter",
            "extra": "iterations: 2187616\ncpu: 64.6240930766643 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 406.8743357386479,
            "unit": "ns/iter",
            "extra": "iterations: 367220\ncpu: 381.8803442078319 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2300.9295912578946,
            "unit": "ns/iter",
            "extra": "iterations: 111941\ncpu: 1238.7266506463222 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 314.72117627775145,
            "unit": "ns/iter",
            "extra": "iterations: 494922\ncpu: 281.5742682685353 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1141.6854066028086,
            "unit": "ns/iter",
            "extra": "iterations: 124016\ncpu: 1140.7576441749447 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.7899373529916724,
            "unit": "ns/iter",
            "extra": "iterations: 51732866\ncpu: 2.764714408051547 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.6197135617923126,
            "unit": "ns/iter",
            "extra": "iterations: 54039657\ncpu: 2.610797474158653 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 11.22137962034395,
            "unit": "ns/iter",
            "extra": "iterations: 11553062\ncpu: 11.166650018843493 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.4176810460850575,
            "unit": "ns/iter",
            "extra": "iterations: 58409509\ncpu: 2.3883148889335795 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1701864396563228,
            "unit": "ms/iter",
            "extra": "iterations: 805\ncpu: 0.16582596273291927 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.337408021892733,
            "unit": "ms/iter",
            "extra": "iterations: 391\ncpu: 0.32907647058823536 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1677774521241705,
            "unit": "ms/iter",
            "extra": "iterations: 830\ncpu: 0.1642562650602409 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3275613829563481,
            "unit": "ms/iter",
            "extra": "iterations: 426\ncpu: 0.32065633802816884 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1697731572528218,
            "unit": "ms/iter",
            "extra": "iterations: 860\ncpu: 0.1665737209302325 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.3343713733385194,
            "unit": "ms/iter",
            "extra": "iterations: 424\ncpu: 0.32670306603773586 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.797545856899685,
            "unit": "ms/iter",
            "extra": "iterations: 18\ncpu: 7.776233333333327 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 30.5478572845459,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 30.447340000000004 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "artiom.vaskov@ibm.com",
            "name": "Artiom Vaskov",
            "username": "velemas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84394fda87e80697ee0534311021926b529c8342",
          "message": "Added s390x arch into CMake build. (#1216)",
          "timestamp": "2022-03-02T07:52:37-08:00",
          "tree_id": "e328dfc358d429ff046cb55b8f5d310864548cb6",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/84394fda87e80697ee0534311021926b529c8342"
        },
        "date": 1646237686985,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3426.5972384743463,
            "unit": "ns/iter",
            "extra": "iterations: 41511\ncpu: 3375.43301775433 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.4272776014826747,
            "unit": "ns/iter",
            "extra": "iterations: 98120983\ncpu: 1.4254738968524194 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 67913.35312533136,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 67726.22394571014 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.4471183777994667,
            "unit": "ns/iter",
            "extra": "iterations: 98260784\ncpu: 1.4257600468565357 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 614.4982361748467,
            "unit": "ns/iter",
            "extra": "iterations: 226508\ncpu: 613.4869408586012 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 15605.683324600974,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 15577.078701645165 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2447.8846181552944,
            "unit": "ns/iter",
            "extra": "iterations: 57360\ncpu: 2442.880055788004 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 42273.46487908025,
            "unit": "ns/iter",
            "extra": "iterations: 3272\ncpu: 42197.066014669894 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 46.70741785821582,
            "unit": "ns/iter",
            "extra": "iterations: 2996466\ncpu: 46.67281390811709 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 278.2336429957026,
            "unit": "ns/iter",
            "extra": "iterations: 502807\ncpu: 278.0762797653971 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 891.3857191258716,
            "unit": "ns/iter",
            "extra": "iterations: 157431\ncpu: 889.6703952842832 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 205.53789836178828,
            "unit": "ns/iter",
            "extra": "iterations: 682082\ncpu: 205.14366307863287 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1080.274768881583,
            "unit": "ns/iter",
            "extra": "iterations: 165770\ncpu: 843.8016528925615 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6991254672951654,
            "unit": "ns/iter",
            "extra": "iterations: 82542303\ncpu: 1.6951901620675647 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.6971563653963386,
            "unit": "ns/iter",
            "extra": "iterations: 82597332\ncpu: 1.695013587121676 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.974720476368642,
            "unit": "ns/iter",
            "extra": "iterations: 15607964\ncpu: 8.96555117630974 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.594195838170185,
            "unit": "ns/iter",
            "extra": "iterations: 82552037\ncpu: 1.9675068708480203 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.09963261548720193,
            "unit": "ms/iter",
            "extra": "iterations: 1321\ncpu: 0.09502891748675246 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.18991529941558838,
            "unit": "ms/iter",
            "extra": "iterations: 736\ncpu: 0.18557540760869567 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.09660950463486799,
            "unit": "ms/iter",
            "extra": "iterations: 1412\ncpu: 0.09451104815864023 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2294777201957443,
            "unit": "ms/iter",
            "extra": "iterations: 735\ncpu: 0.1986096598639456 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1082378049050608,
            "unit": "ms/iter",
            "extra": "iterations: 1240\ncpu: 0.09920362903225813 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.1932424976679882,
            "unit": "ms/iter",
            "extra": "iterations: 703\ncpu: 0.18740853485064007 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.609159469604492,
            "unit": "ms/iter",
            "extra": "iterations: 25\ncpu: 5.600620000000003 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 22.332072257995605,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 22.321133333333336 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9447643+devjgm@users.noreply.github.com",
            "name": "Greg Miller",
            "username": "devjgm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99c483c790204870aae017ab37b3cf8f2785d46b",
          "message": "chore: update prometheus to 1.0 version (#1242)",
          "timestamp": "2022-03-03T19:08:15-08:00",
          "tree_id": "4ba6a1f890b1587de222ce6f361e6f7a850f03b8",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/99c483c790204870aae017ab37b3cf8f2785d46b"
        },
        "date": 1646412312540,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3721.526542100005,
            "unit": "ns/iter",
            "extra": "iterations: 37770\ncpu: 3703.8840349483717 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6230586681399621,
            "unit": "ns/iter",
            "extra": "iterations: 86637416\ncpu: 1.6153840506969877 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 76068.54309906831,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 75724.97297297296 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6195400715916586,
            "unit": "ns/iter",
            "extra": "iterations: 86669597\ncpu: 1.615598835656292 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 704.1678706093909,
            "unit": "ns/iter",
            "extra": "iterations: 202426\ncpu: 696.3240888028216 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17608.73134209173,
            "unit": "ns/iter",
            "extra": "iterations: 7972\ncpu: 17598.469643753127 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2723.8561085213264,
            "unit": "ns/iter",
            "extra": "iterations: 51733\ncpu: 2716.2584810469116 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 47348.13432143712,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 46457.514161946005 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.92161958081803,
            "unit": "ns/iter",
            "extra": "iterations: 2644838\ncpu: 52.889326302783005 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 316.2573979421966,
            "unit": "ns/iter",
            "extra": "iterations: 443072\ncpu: 315.87597501083343 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1000.9968925210471,
            "unit": "ns/iter",
            "extra": "iterations: 140091\ncpu: 999.3796889164897 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 232.05335937444207,
            "unit": "ns/iter",
            "extra": "iterations: 603873\ncpu: 231.79426800005962 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 954.3960158889358,
            "unit": "ns/iter",
            "extra": "iterations: 148000\ncpu: 945.8020270270264 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.1907527788776235,
            "unit": "ns/iter",
            "extra": "iterations: 82535004\ncpu: 1.6881661506916508 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.0763120471245826,
            "unit": "ns/iter",
            "extra": "iterations: 82683676\ncpu: 1.6917317512588579 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.981938584098451,
            "unit": "ns/iter",
            "extra": "iterations: 15629902\ncpu: 8.95060634417286 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.7131218716937846,
            "unit": "ns/iter",
            "extra": "iterations: 79306184\ncpu: 1.7059867613854678 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.13716823806173553,
            "unit": "ms/iter",
            "extra": "iterations: 1036\ncpu: 0.13494314671814675 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2297636191320988,
            "unit": "ms/iter",
            "extra": "iterations: 587\ncpu: 0.22505093696763206 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10932818461021097,
            "unit": "ms/iter",
            "extra": "iterations: 1285\ncpu: 0.10619813229571984 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21424621116114026,
            "unit": "ms/iter",
            "extra": "iterations: 655\ncpu: 0.20813725190839696 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1081767950856988,
            "unit": "ms/iter",
            "extra": "iterations: 1301\ncpu: 0.1054052267486549 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2132113316352161,
            "unit": "ms/iter",
            "extra": "iterations: 659\ncpu: 0.20716949924127473 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.460301572626287,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.459845454545456 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.6070613861084,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.578420000000033 ms\nthreads: 1"
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
          "id": "50fabb5fa09faff9f9767802fd3b9b9b440b0afa",
          "message": "dependabot for GitHub actions (#1246)",
          "timestamp": "2022-03-04T15:00:10-08:00",
          "tree_id": "ae28278c1f0c2fc60ef18d9bdf20b54ee3cef35d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/50fabb5fa09faff9f9767802fd3b9b9b440b0afa"
        },
        "date": 1646477810683,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3715.3598832898015,
            "unit": "ns/iter",
            "extra": "iterations: 37667\ncpu: 3696.9230360793267 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6903758066281738,
            "unit": "ns/iter",
            "extra": "iterations: 85024718\ncpu: 1.653360379272296 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75962.17083763341,
            "unit": "ns/iter",
            "extra": "iterations: 1849\ncpu: 75701.51433207138 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6526893054387868,
            "unit": "ns/iter",
            "extra": "iterations: 85070700\ncpu: 1.6467385362998075 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 683.5278755822532,
            "unit": "ns/iter",
            "extra": "iterations: 207753\ncpu: 671.9094309107451 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17784.451708074135,
            "unit": "ns/iter",
            "extra": "iterations: 7966\ncpu: 17581.0569922169 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2789.139610017525,
            "unit": "ns/iter",
            "extra": "iterations: 51980\ncpu: 2458.661023470565 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 41991.7047385431,
            "unit": "ns/iter",
            "extra": "iterations: 3461\ncpu: 41909.043629008964 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 63.64482956756101,
            "unit": "ns/iter",
            "extra": "iterations: 3041719\ncpu: 45.82165545206511 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 347.09995388836546,
            "unit": "ns/iter",
            "extra": "iterations: 511003\ncpu: 276.0633499216247 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1075.200423096028,
            "unit": "ns/iter",
            "extra": "iterations: 160742\ncpu: 864.3198417339586 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 254.80173926327478,
            "unit": "ns/iter",
            "extra": "iterations: 698324\ncpu: 199.28829597722537 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1020.9016275625709,
            "unit": "ns/iter",
            "extra": "iterations: 171581\ncpu: 821.8171009610616 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.4634500394647292,
            "unit": "ns/iter",
            "extra": "iterations: 96509792\ncpu: 1.4617345771504722 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.4701092892894918,
            "unit": "ns/iter",
            "extra": "iterations: 96225883\ncpu: 1.469037182023053 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 7.75145073132956,
            "unit": "ns/iter",
            "extra": "iterations: 18043586\ncpu: 7.738633551002556 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.4612318341741533,
            "unit": "ns/iter",
            "extra": "iterations: 92433646\ncpu: 1.459088825729108 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 1.374044418334961,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.110792 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.22748214804866232,
            "unit": "ms/iter",
            "extra": "iterations: 642\ncpu: 0.2099038940809969 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.18868934519766017,
            "unit": "ms/iter",
            "extra": "iterations: 1094\ncpu: 0.10810648994515543 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.23146324157714843,
            "unit": "ms/iter",
            "extra": "iterations: 625\ncpu: 0.21084688000000004 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.3256531950671805,
            "unit": "ms/iter",
            "extra": "iterations: 1139\ncpu: 0.11017111501316951 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.29347928737964796,
            "unit": "ms/iter",
            "extra": "iterations: 341\ncpu: 0.1848422287390028 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 12.72900104522705,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 6.775529999999996 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 39.59186871846517,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 24.42656666666665 ms\nthreads: 1"
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
          "distinct": true,
          "id": "b46cd6f580a90a615accdc635e6878999521fbf5",
          "message": "Update Maintainers (#1249)",
          "timestamp": "2022-03-06T20:35:50-08:00",
          "tree_id": "965591cd0aa891d6ee4140a1b3b0ebf5cbda2be3",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/b46cd6f580a90a615accdc635e6878999521fbf5"
        },
        "date": 1646667892158,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3791.1138472624043,
            "unit": "ns/iter",
            "extra": "iterations: 36809\ncpu: 3788.8994539378964 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.023045732606673,
            "unit": "ns/iter",
            "extra": "iterations: 46521520\ncpu: 3.0137106440202306 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 76892.90879017767,
            "unit": "ns/iter",
            "extra": "iterations: 1839\ncpu: 76327.29744426318 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.020927950777082,
            "unit": "ns/iter",
            "extra": "iterations: 46428489\ncpu: 3.013910273926855 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 638.1588852391435,
            "unit": "ns/iter",
            "extra": "iterations: 219620\ncpu: 637.6969310627449 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16292.093026191187,
            "unit": "ns/iter",
            "extra": "iterations: 8617\ncpu: 16279.702912846687 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2864.585343953533,
            "unit": "ns/iter",
            "extra": "iterations: 48254\ncpu: 2861.039499316116 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 51399.24157307188,
            "unit": "ns/iter",
            "extra": "iterations: 2695\ncpu: 51349.01669758808 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 57.38877846276151,
            "unit": "ns/iter",
            "extra": "iterations: 2462552\ncpu: 56.806231909011466 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 317.0931548833676,
            "unit": "ns/iter",
            "extra": "iterations: 441923\ncpu: 316.67779228508147 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1023.1198144710532,
            "unit": "ns/iter",
            "extra": "iterations: 136994\ncpu: 1020.088471027928 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 245.9679146294259,
            "unit": "ns/iter",
            "extra": "iterations: 570139\ncpu: 245.69359401830084 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 970.4990154756559,
            "unit": "ns/iter",
            "extra": "iterations: 144074\ncpu: 965.5198023238061 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.0255454015415557,
            "unit": "ns/iter",
            "extra": "iterations: 46300737\ncpu: 3.018653893133494 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.025351471272509,
            "unit": "ns/iter",
            "extra": "iterations: 46406942\ncpu: 3.0154669531985108 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.64976783711981,
            "unit": "ns/iter",
            "extra": "iterations: 16258406\ncpu: 8.639672302438507 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 3.2024366657352954,
            "unit": "ns/iter",
            "extra": "iterations: 45158377\ncpu: 3.114839578933494 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.12233081080503795,
            "unit": "ms/iter",
            "extra": "iterations: 1123\ncpu: 0.11874897595725734 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.24193133449884435,
            "unit": "ms/iter",
            "extra": "iterations: 578\ncpu: 0.2352960207612457 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14561342407967023,
            "unit": "ms/iter",
            "extra": "iterations: 1154\ncpu: 0.11925372616984406 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.24286093290385175,
            "unit": "ms/iter",
            "extra": "iterations: 577\ncpu: 0.23704835355285958 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12228007902178847,
            "unit": "ms/iter",
            "extra": "iterations: 1140\ncpu: 0.1195232456140351 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.24038419871239983,
            "unit": "ms/iter",
            "extra": "iterations: 581\ncpu: 0.23484010327022378 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.492063669057993,
            "unit": "ms/iter",
            "extra": "iterations: 26\ncpu: 5.466642307692307 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 22.25204308827718,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 22.21893333333332 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}