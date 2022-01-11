window.BENCHMARK_DATA = {
  "lastUpdate": 1641939198153,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf8d894ef6e8577b838a7dda858ee64664bbb63e",
          "message": "Update do_ci.sh",
          "timestamp": "2022-01-09T20:44:31+01:00",
          "tree_id": "7664e5ef6a3b0f085fe13eddac0ff73369b1560d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/bf8d894ef6e8577b838a7dda858ee64664bbb63e"
        },
        "date": 1641758951334,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 20118.1928309009,
            "unit": "ns/iter",
            "extra": "iterations: 35923\ncpu: 20113.06962113409 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 572.8451340781365,
            "unit": "ns/iter",
            "extra": "iterations: 1226738\ncpu: 572.7959026295754 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 388916.4944955789,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 388895.3091684436 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 9506.548892381206,
            "unit": "ns/iter",
            "extra": "iterations: 77785\ncpu: 9505.742752458702 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3662.372409795353,
            "unit": "ns/iter",
            "extra": "iterations: 187229\ncpu: 3661.8419155152264 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 63667.51602660667,
            "unit": "ns/iter",
            "extra": "iterations: 10729\ncpu: 63659.968310187374 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 6551.143305453477,
            "unit": "ns/iter",
            "extra": "iterations: 116908\ncpu: 6550.7116707154355 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 113747.41433380713,
            "unit": "ns/iter",
            "extra": "iterations: 6138\ncpu: 113735.09286412514 ns\nthreads: 1"
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
          "id": "10fd25d618bf8f961fd6364a4aa89f8d07e1320e",
          "message": "otlp_grpc with collector",
          "timestamp": "2022-01-11T20:54:52Z",
          "tree_id": "c6a3671a8687f5f7bcd1765a392c29576b0dd69e",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/10fd25d618bf8f961fd6364a4aa89f8d07e1320e"
        },
        "date": 1641935701346,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 18416.529632754555,
            "unit": "ns/iter",
            "extra": "iterations: 39992\ncpu: 18411.612322464494 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 484.07346581931915,
            "unit": "ns/iter",
            "extra": "iterations: 1297705\ncpu: 484.0373582593886 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 352450.35442286835,
            "unit": "ns/iter",
            "extra": "iterations: 1923\ncpu: 352422.8289131565 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 8068.026882117499,
            "unit": "ns/iter",
            "extra": "iterations: 82943\ncpu: 8067.9213435732945 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3408.5703844736045,
            "unit": "ns/iter",
            "extra": "iterations: 200111\ncpu: 3408.4458125740216 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 60695.86907228736,
            "unit": "ns/iter",
            "extra": "iterations: 11459\ncpu: 60689.3533467144 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 5461.042659564702,
            "unit": "ns/iter",
            "extra": "iterations: 125297\ncpu: 5460.450768972924 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 98153.43669640634,
            "unit": "ns/iter",
            "extra": "iterations: 7653\ncpu: 98145.99503462703 ns\nthreads: 1"
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
          "id": "c45aebad84613c3d5b5442361986c0e672b87946",
          "message": "fix CI",
          "timestamp": "2022-01-11T21:50:06Z",
          "tree_id": "cd305673eb77fe4267116e804c6c77ee8b033e18",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/c45aebad84613c3d5b5442361986c0e672b87946"
        },
        "date": 1641939196918,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 18606.979794910403,
            "unit": "ns/iter",
            "extra": "iterations: 36603\ncpu: 18605.87929951097 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 529.7180751079967,
            "unit": "ns/iter",
            "extra": "iterations: 1363507\ncpu: 529.654853257079 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 358468.58205922705,
            "unit": "ns/iter",
            "extra": "iterations: 1946\ncpu: 356354.5734840701 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 8567.142962685917,
            "unit": "ns/iter",
            "extra": "iterations: 81724\ncpu: 8563.298419069062 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3545.621417887435,
            "unit": "ns/iter",
            "extra": "iterations: 200333\ncpu: 3545.473286977182 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 64945.14544212694,
            "unit": "ns/iter",
            "extra": "iterations: 10736\ncpu: 64939.36289120722 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 6312.866664556863,
            "unit": "ns/iter",
            "extra": "iterations: 113696\ncpu: 6312.558929074021 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 109826.34938361561,
            "unit": "ns/iter",
            "extra": "iterations: 6475\ncpu: 109824.4324324324 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}