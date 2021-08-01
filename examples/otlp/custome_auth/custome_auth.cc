#include "custome_auth.h"

TokenAuthenticator::TokenAuthenticator(const std::string& token) : token_(token) {}

grpc::Status TokenAuthenticator::GetMetadata(
    grpc::string_ref service_url, grpc::string_ref method_name,
    const grpc::AuthContext& channel_auth_context,
    std::multimap<grpc::string, grpc::string>* metadata) {
  metadata->insert(std::make_pair("authorization-token", token_));
  return grpc::Status::OK;
}
