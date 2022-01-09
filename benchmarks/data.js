window.BENCHMARK_DATA = {
  "lastUpdate": 1641758952321,
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
      }
    ]
  }
}