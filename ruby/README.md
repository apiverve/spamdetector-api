# Spam Detector API - Ruby Gem

Spam Detector is a spam detection API that evaluates text submissions to determine whether content is likely spam. Pass a message body and an optional sender email to check for spam patterns, with paid plans adding IP blocklist and disposable email checks.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_spamdetector'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_spamdetector
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_spamdetector'

# Initialize the client
client = APIVerve::Spamdetector::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  text: "Can you please spare some change?! Desperate!!! Send cash",
  email: "bankers@fre.323hotlain.net",
  ip: "122.180.184.182"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ text: "Can you please spare some change?! Desperate!!! Send cash", email: "bankers@fre.323hotlain.net", ip: "122.180.184.182" })
  puts response["data"]
rescue APIVerve::Spamdetector::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Spamdetector::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Spamdetector::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "likelySpam": true,
    "isDisposableEmail": false,
    "isIPBlacklisted": false,
    "ipDetails": {
      "country": "IN",
      "region": "DL"
    },
    "parsed": true
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/spamdetector?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/spamdetector?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/spamdetector?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
