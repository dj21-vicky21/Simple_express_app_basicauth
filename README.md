# Simple Express API with Basic Authentication

A lightweight Express.js API with basic authentication and header validation.

## Features

- Express.js REST API
- Basic authentication protection
- Custom source header validation
- Standardized JSON response format

## Requirements

- Node.js (v14 or higher recommended)
- npm (v6 or higher)

## Installation

1. Clone this repository
```bash
git clone <repository-url>
cd Simple_express_app_basicauth
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory (see `.env.example` for reference)

4. Start the server
```bash
npm start
```

## Environment Variables

The following environment variables need to be set in your `.env` file:

- `PORT`: The port on which the server will run (default: 5000)
- `USERNAME`: Username for basic authentication
- `PASSWORD`: Password for basic authentication
- `SOURCE`: Custom header value for API access verification

## API Endpoints

- GET `/api/data`: Returns sample data (requires authentication)

## Authentication

This API is protected with HTTP Basic Authentication. You must provide the username and password set in your environment variables.

Example request with curl:
```bash
curl -X GET \
  http://localhost:5000/api/data \
  -H 'Authorization: Basic <base64-encoded-credentials>' \
  -H 'Source: <your-source-value>'
```

## Header Validation

All requests must include a `Source` header matching the SOURCE value set in your environment variables.

## Response Format

All API responses follow a standard format:

```json
{
  "status": 200,
  "result": "data",
  "message": "Success"
}
```

or for errors:

```json
{
  "status": 404,
  "error": "notfound",
  "message": "Error"
}
```
