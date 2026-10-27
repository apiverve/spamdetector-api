Pod::Spec.new do |s|
  s.name             = 'APIVerveSpamDetector'
  s.version          = '1.2.3'
  s.summary          = 'Spam Detector is a spam detection API that evaluates text submissions to determine whether content is likely spam.'
  s.description      = <<-'DESC'
Spam Detector is a spam detection API that evaluates text submissions to determine whether content is likely spam. Pass a message body and an optional sender email to check for spam patterns, with paid plans adding IP blocklist and disposable email checks.

This iOS/macOS SDK provides a convenient way to access the Spam Detector from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/spamdetector?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/spamdetector-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveSpamDetector/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
