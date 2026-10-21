# Spam Detector API - PHP Package

Spam Detector is a spam detection API that evaluates text submissions to determine whether content is likely spam. Pass a message body and an optional sender email to check for spam patterns, with paid plans adding IP blocklist and disposable email checks.

## Installation

Install via Composer:

```bash
composer require apiverve/spamdetector
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Spamdetector\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'text' => 'Can you please spare some change?! Desperate!!! Send cash',
    'email' => 'bankers@fre.323hotlain.net',
    'ip' => '122.180.184.182'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Spamdetector\Client;
use APIVerve\Spamdetector\Exceptions\APIException;
use APIVerve\Spamdetector\Exceptions\ValidationException;

try {
    $response = $client->execute(['text' => 'Can you please spare some change?! Desperate!!! Send cash', 'email' => 'bankers@fre.323hotlain.net', 'ip' => '122.180.184.182']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/spamdetector?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/spamdetector?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/spamdetector?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
