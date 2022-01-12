window.BENCHMARK_DATA = {
  "lastUpdate": 1642025162676,
  "repoUrl": "https://github.com/esigo/opentelemetry-cpp",
  "entries": {
    "OpenTelemetry-cpp Benchmark": [
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
          "id": "4d5713517a5a59f17017d3b19aee8d600bff117b",
          "message": "fix docker start",
          "timestamp": "2022-01-11T22:42:59Z",
          "tree_id": "f5b334ee66d4c0f2410bed36657c731dbd360a2d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/4d5713517a5a59f17017d3b19aee8d600bff117b"
        },
        "date": 1641942100428,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 16895.537305055164,
            "unit": "ns/iter",
            "extra": "iterations: 41369\ncpu: 16893.265488650923 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 460.19051951169365,
            "unit": "ns/iter",
            "extra": "iterations: 1519699\ncpu: 460.1594789494499 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 314556.29327324,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 314532.44943820214 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 7190.055908526363,
            "unit": "ns/iter",
            "extra": "iterations: 91391\ncpu: 7189.61823374293 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3099.001549262457,
            "unit": "ns/iter",
            "extra": "iterations: 223799\ncpu: 3098.7640695445475 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 52766.440727391935,
            "unit": "ns/iter",
            "extra": "iterations: 13275\ncpu: 52762.854990583815 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 5029.446560207513,
            "unit": "ns/iter",
            "extra": "iterations: 137465\ncpu: 5029.291092278032 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 89133.12639508929,
            "unit": "ns/iter",
            "extra": "iterations: 7875\ncpu: 89129.76507936502 ns\nthreads: 1"
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
          "id": "244302c52884b58ba0748db46617cf9b096401d9",
          "message": "print all benchmarks",
          "timestamp": "2022-01-12T00:15:15+01:00",
          "tree_id": "29e29cfd2affaa6bba869c382b756a64aed7a8c2",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/244302c52884b58ba0748db46617cf9b096401d9"
        },
        "date": 1641944074946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 17118.595131503494,
            "unit": "ns/iter",
            "extra": "iterations: 40876\ncpu: 17116.444857618164 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 446.2311877910496,
            "unit": "ns/iter",
            "extra": "iterations: 1470966\ncpu: 446.20650647261715 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 314370.045278658,
            "unit": "ns/iter",
            "extra": "iterations: 2227\ncpu: 314349.2590929501 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 7201.883299468912,
            "unit": "ns/iter",
            "extra": "iterations: 95994\ncpu: 7201.478217388585 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3317.316696544033,
            "unit": "ns/iter",
            "extra": "iterations: 208541\ncpu: 3316.233258687738 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 52803.7395071231,
            "unit": "ns/iter",
            "extra": "iterations: 13246\ncpu: 52798.92797825756 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4975.195306769304,
            "unit": "ns/iter",
            "extra": "iterations: 141120\ncpu: 4974.7307256235845 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 89264.82836244315,
            "unit": "ns/iter",
            "extra": "iterations: 7892\ncpu: 89008.94576786619 ns\nthreads: 1"
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
          "id": "47e38fd6cfb55977a642fc48c749259bb374aed7",
          "message": "release build",
          "timestamp": "2022-01-12T16:45:38Z",
          "tree_id": "bf3300eab7b584c06f4d607ed04e80ba25f759a2",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/47e38fd6cfb55977a642fc48c749259bb374aed7"
        },
        "date": 1642007885989,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4324.6827421922135,
            "unit": "ns/iter",
            "extra": "iterations: 161615\ncpu: 4324.185873835969 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.8847806747113636,
            "unit": "ns/iter",
            "extra": "iterations: 370332945\ncpu: 1.884491805070164 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 86715.78548498651,
            "unit": "ns/iter",
            "extra": "iterations: 8111\ncpu: 86703.82197016403 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.8873417728896256,
            "unit": "ns/iter",
            "extra": "iterations: 369881696\ncpu: 1.887102031672311 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 813.7843933208692,
            "unit": "ns/iter",
            "extra": "iterations: 863284\ncpu: 813.6928287794055 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 19563.97440695495,
            "unit": "ns/iter",
            "extra": "iterations: 36328\ncpu: 19560.028077515963 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3022.140759781294,
            "unit": "ns/iter",
            "extra": "iterations: 228420\ncpu: 3021.7971280973634 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 53187.436617781335,
            "unit": "ns/iter",
            "extra": "iterations: 13230\ncpu: 53180.937263794454 ns\nthreads: 1"
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
          "id": "ced837c1ef403420e0dfe972da9fb1211f94cfea",
          "message": "Merge branch 'open-telemetry:main' into benchmark-action",
          "timestamp": "2022-01-12T22:37:39+01:00",
          "tree_id": "144790b7eaba396b34bd04b1a0df8a1b066b5a32",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/ced837c1ef403420e0dfe972da9fb1211f94cfea"
        },
        "date": 1642025161229,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3633.9815865029555,
            "unit": "ns/iter",
            "extra": "iterations: 192221\ncpu: 3633.401137232664 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6097430837045854,
            "unit": "ns/iter",
            "extra": "iterations: 434919568\ncpu: 1.6096516494286595 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 73333.13838653325,
            "unit": "ns/iter",
            "extra": "iterations: 9555\ncpu: 73329.76452119311 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6095935095976965,
            "unit": "ns/iter",
            "extra": "iterations: 434534573\ncpu: 1.609510366854055 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 697.6847618522926,
            "unit": "ns/iter",
            "extra": "iterations: 1044845\ncpu: 697.6418511836683 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17028.508141752176,
            "unit": "ns/iter",
            "extra": "iterations: 40959\ncpu: 17028.22090383066 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2737.801343949685,
            "unit": "ns/iter",
            "extra": "iterations: 252869\ncpu: 2736.992276633354 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 47842.688639508844,
            "unit": "ns/iter",
            "extra": "iterations: 14663\ncpu: 47840.27825138105 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}