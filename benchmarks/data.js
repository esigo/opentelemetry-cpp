window.BENCHMARK_DATA = {
  "lastUpdate": 1647079647046,
  "repoUrl": "https://github.com/esigo/opentelemetry-cpp",
  "entries": {
    "OpenTelemetry-cpp sdk Benchmark": [
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
          "id": "c33028b38870dcbe32031bc3f66f6b67c1b59acf",
          "message": "docker action",
          "timestamp": "2022-03-12T10:44:28+01:00",
          "tree_id": "3c281253e68244357e60ecd5a114247f0141a0f9",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/c33028b38870dcbe32031bc3f66f6b67c1b59acf"
        },
        "date": 1647079645943,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9102557105179687,
            "unit": "ns/iter",
            "extra": "iterations: 75321461\ncpu: 1.8562305901103007 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.2896772097218583,
            "unit": "ns/iter",
            "extra": "iterations: 69902137\ncpu: 1.9227738345109535 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 292.2860924432818,
            "unit": "ns/iter",
            "extra": "iterations: 535680\ncpu: 267.2621714456392 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 342.314584824368,
            "unit": "ns/iter",
            "extra": "iterations: 423447\ncpu: 330.49708700262386 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 49.41017729811995,
            "unit": "ns/iter",
            "extra": "iterations: 3167206\ncpu: 45.74441952938961 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 82.36633932329968,
            "unit": "ns/iter",
            "extra": "iterations: 3114364\ncpu: 45.30812711680457 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 63.540622451455114,
            "unit": "ns/iter",
            "extra": "iterations: 2834984\ncpu: 49.62250227867247 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 30.44012460292032,
            "unit": "ns/iter",
            "extra": "iterations: 4753981\ncpu: 29.616231112408737 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 2571.575445174083,
            "unit": "ns/iter",
            "extra": "iterations: 58685\ncpu: 2435.068586521255 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2420.464654265145,
            "unit": "ns/iter",
            "extra": "iterations: 60856\ncpu: 2372.6994873143117 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5919329.860003017,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 85960 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8954991.450000307,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 115349.99999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5814129.3500011675,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 223340 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3101486.4029998537,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 83034.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2416789.076999976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 100938.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2568578.2213111822,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 164413.34894613584 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.56137687887219,
            "unit": "ns/iter",
            "extra": "iterations: 27078780\ncpu: 5.397104300858457 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.203055066608033,
            "unit": "ns/iter",
            "extra": "iterations: 26728779\ncpu: 5.28217169965003 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}