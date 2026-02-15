# Contact Form API

## Overview
PHP endpoint for handling contact form submissions on IONOS shared hosting.

## Files
- `contact.php` - Main contact form endpoint

## Configuration
The PHP script sends emails to: **info@atclean.de**

## IONOS Deployment Notes
This implementation is specifically designed for IONOS shared hosting:

1. **No custom From headers** - IONOS rejects custom From headers, so we only use Reply-To
2. **Rate limiting** - 30-second cooldown between submissions per IP address
3. **Input sanitization** - All inputs are sanitized with `strip_tags()` and `trim()`
4. **Email validation** - Uses PHP's `FILTER_VALIDATE_EMAIL`

## Testing
To test the form locally, you need a PHP server. The Vite dev server cannot execute PHP.

For local testing with PHP:
```bash
php -S localhost:8000 -t public
```

Then access the form at `http://localhost:8000`

## Deployment to IONOS
1. Upload the entire `public/api/` directory to your IONOS web space
2. Ensure the path is accessible at `https://atclean.de/api/contact.php`
3. Test the form submission on the live site

## Form Fields
- `name` (required) - Contact name
- `email` (required) - Contact email address
- `phone` (optional) - Contact phone number
- `message` (required) - Message content

## Response Format
Success:
```json
{
  "success": true,
  "message": "Ihre Nachricht wurde erfolgreich gesendet."
}
```

Error:
```json
{
  "success": false,
  "message": "Error description in German"
}
```

## Security Features
- Rate limiting (30 seconds between requests per IP)
- Input sanitization
- Email validation
- CORS headers for cross-origin requests
- HTTP method validation (POST only)
