window.BENCHMARK_DATA = {
  "lastUpdate": 1641724779506,
  "repoUrl": "https://github.com/esigo/opentelemetry-cpp",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ehsan.sadroid@gmail.com",
            "name": "esigo",
            "username": "esigo"
          },
          "committer": {
            "email": "ehsan.sadroid@gmail.com",
            "name": "esigo",
            "username": "esigo"
          },
          "distinct": true,
          "id": "b13c708cae5a8e07dc77e634d0d914dda553937e",
          "message": "copy result to root",
          "timestamp": "2022-01-09T11:21:03+01:00",
          "tree_id": "9a07eeb8a817611624143ef7e120c8e887fbd70d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/b13c708cae5a8e07dc77e634d0d914dda553937e"
        },
        "date": 1641723957494,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_RandomIdGeneration",
            "value": 23.83682393337638,
            "unit": "ns/iter",
            "extra": "iterations: 29325808\ncpu: 23.83379172365856 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 19.536700908202576,
            "unit": "ns/iter",
            "extra": "iterations: 35823841\ncpu: 19.536324985363805 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ehsan.sadroid@gmail.com",
            "name": "esigo",
            "username": "esigo"
          },
          "committer": {
            "email": "ehsan.sadroid@gmail.com",
            "name": "esigo",
            "username": "esigo"
          },
          "distinct": true,
          "id": "7d6a2fad11fa49f3eeaff8e1cf7ca59d1a3374e4",
          "message": "store all the results",
          "timestamp": "2022-01-09T11:33:48+01:00",
          "tree_id": "7e5494967ff69c287255ce8ebad16655c2cd1853",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/7d6a2fad11fa49f3eeaff8e1cf7ca59d1a3374e4"
        },
        "date": 1641724779090,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_RandomIdGeneration",
            "value": 28.399918448070505,
            "unit": "ns/iter",
            "extra": "iterations: 23526114\ncpu: 28.390944632845017 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 22.973388613769288,
            "unit": "ns/iter",
            "extra": "iterations: 30167876\ncpu: 22.952179331418627 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}