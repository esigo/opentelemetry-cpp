window.BENCHMARK_DATA = {
  "lastUpdate": 1642321651305,
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
      }
    ]
  }
}