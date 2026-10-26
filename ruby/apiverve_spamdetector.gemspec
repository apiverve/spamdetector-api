# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "apiverve_spamdetector"
  spec.version       = "1.2.3"
  spec.authors       = ["APIVerve"]
  spec.email         = ["hello@apiverve.com"]

  spec.summary       = "Spam Detector API - Ruby Client"
  spec.description   = "Spam Detector is a spam detection API that evaluates text submissions to determine whether content is likely spam. Pass a message body and an optional sender email to check for spam patterns, with paid plans adding IP blocklist and disposable email checks."
  spec.homepage      = "https://apiverve.com/marketplace/spamdetector?utm_source=ruby&utm_medium=referral&utm_content=homepage"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 2.7.0"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/apiverve/spamdetector-API/tree/main/ruby"
  spec.metadata["changelog_uri"] = "https://apiverve.com/changelog"
  spec.metadata["documentation_uri"] = "https://docs.apiverve.com/ref/spamdetector"

  spec.files = Dir.glob("{lib}/**/*") + %w[README.md LICENSE]
  spec.require_paths = ["lib"]

  spec.add_dependency "faraday", ">= 1.0", "< 3.0"
  spec.add_dependency "faraday-multipart", "~> 1.0"
  spec.add_dependency "json", "~> 2.0"
end
