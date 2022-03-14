window.BENCHMARK_DATA = {
  "lastUpdate": 1647298177673,
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
          "id": "6f269de026fd918b0208714a2e7b47c37ef82306",
          "message": "downgrade collector",
          "timestamp": "2022-03-14T23:27:56+01:00",
          "tree_id": "a895b68944b018e87ce78fc70a33804c15eafe14",
          "url": "https://github.com/esigo/opentelemetry-cpp/commit/6f269de026fd918b0208714a2e7b47c37ef82306"
        },
        "date": 1647298177154,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.0212495936011385,
            "unit": "ns/iter",
            "extra": "iterations: 68119891\ncpu: 2.001089520240131 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.09455439648498,
            "unit": "ns/iter",
            "extra": "iterations: 68406137\ncpu: 2.0335602345152166 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 279.35901143132975,
            "unit": "ns/iter",
            "extra": "iterations: 495909\ncpu: 278.49665966941524 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 397.3774711456309,
            "unit": "ns/iter",
            "extra": "iterations: 430266\ncpu: 328.0807686407943 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 66.75464735919839,
            "unit": "ns/iter",
            "extra": "iterations: 2678349\ncpu: 52.18588018215699 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 79.18157185321121,
            "unit": "ns/iter",
            "extra": "iterations: 2610333\ncpu: 52.28336767761047 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 51.632161143853644,
            "unit": "ns/iter",
            "extra": "iterations: 2799832\ncpu: 50.026930187239785 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 30.991097203547554,
            "unit": "ns/iter",
            "extra": "iterations: 4590917\ncpu: 30.430739653973262 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 3004.757116541126,
            "unit": "ns/iter",
            "extra": "iterations: 69486\ncpu: 2034.7264197104466 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1993.4860926557471,
            "unit": "ns/iter",
            "extra": "iterations: 70754\ncpu: 1959.5358566300092 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 7576618.130001407,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 75920 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8307543.500000065,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 109489.99999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5656784.92999723,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 196049.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3040526.7669998463,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 79008 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2113851.0000000536,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 99169.93464052287 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2416266.190525455,
            "unit": "ns/iter",
            "extra": "iterations: 971\ncpu: 158723.9958805356 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 5.198204852591925,
            "unit": "ns/iter",
            "extra": "iterations: 27319205\ncpu: 5.113948227995652 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 5.454165883448712,
            "unit": "ns/iter",
            "extra": "iterations: 27093977\ncpu: 5.117447320487502 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}