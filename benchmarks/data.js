window.BENCHMARK_DATA = {
  "lastUpdate": 1643816671488,
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
      }
    ]
  }
}