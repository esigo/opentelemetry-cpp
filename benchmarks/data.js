window.BENCHMARK_DATA = {
  "lastUpdate": 1641749876573,
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
          "id": "0dc9420f6237d34c733ccfe175fcabcc8b607987",
          "message": "Update benchmark.yml",
          "timestamp": "2022-01-09T15:20:50+01:00",
          "tree_id": "8e8a19f1b7339c944e49486b42d62083616e0050",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/0dc9420f6237d34c733ccfe175fcabcc8b607987"
        },
        "date": 1641738378109,
        "tool": "googlecpp",
        "benches": [
          {
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: undefined"
          },
          {
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: undefined"
          },
          {
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: undefined"
          },
          {
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: undefined"
          },
          {
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: undefined"
          },
          {
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: undefined"
          },
          {
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: undefined"
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
          "id": "9269696f628ba624424b501cc742b57687f282cf",
          "message": "use bazel",
          "timestamp": "2022-01-09T17:49:42+01:00",
          "tree_id": "b709932a5e935f6e53d9423864ebeaa2b0c0bd0b",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/9269696f628ba624424b501cc742b57687f282cf"
        },
        "date": 1641747329404,
        "tool": "googlecpp",
        "benches": [
          {
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: undefined"
          },
          {
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: undefined"
          },
          {
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: undefined"
          },
          {
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: undefined"
          },
          {
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: undefined"
          },
          {
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: undefined"
          },
          {
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: undefined"
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
          "id": "4c95917ee742cef1b407a067ed0fd7a7d0c52be4",
          "message": "Update benchmark.yml",
          "timestamp": "2022-01-09T18:12:28+01:00",
          "tree_id": "ef0d8d1cba502567e3717e465afd494abcaf140d",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/4c95917ee742cef1b407a067ed0fd7a7d0c52be4"
        },
        "date": 1641749875826,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 21773.53312755001,
            "unit": "ns/iter",
            "extra": "iterations: 34170\ncpu: 21764.919520046828 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 568.9040409168115,
            "unit": "ns/iter",
            "extra": "iterations: 1123516\ncpu: 568.8444134306942 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 390178.0572684922,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 390171.6335540841 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 9663.149064590078,
            "unit": "ns/iter",
            "extra": "iterations: 80206\ncpu: 9662.110066578556 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 3885.212124285117,
            "unit": "ns/iter",
            "extra": "iterations: 189562\ncpu: 3885.0006857914555 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 73256.14520920852,
            "unit": "ns/iter",
            "extra": "iterations: 10857\ncpu: 73245.39007092199 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 7147.605186918483,
            "unit": "ns/iter",
            "extra": "iterations: 93544\ncpu: 7144.590780809026 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 120576.41883425885,
            "unit": "ns/iter",
            "extra": "iterations: 5917\ncpu: 120562.26128105467 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}