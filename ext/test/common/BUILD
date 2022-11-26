package(default_visibility = ["//visibility:public"])

cc_library(
    name = "http_client_nosend",
    srcs = [
        "http_client_factory_nosend.cc",
        "http_client_nosend.cc",
    ],
    hdrs = [
        "http_client_nosend.h",
    ],
    # include_prefix = "test/include/opentelemetry/ext/http/client",
    tags = [
        "test",
    ],
    deps = [
        "//api",
        "//ext:headers",
        "//sdk:headers",
        "@com_google_googletest//:gtest_main",
    ],
)
