title: API Reference
---

This page describes how to connect and query the API.

## Base URL

<!-- Fill from PDF p.37/38 -->
`https://<base-url>/api`

## Authentication

<!-- Fill from PDF p.37/38: auth scheme (e.g., bearer token), header names, token lifecycle -->

- Send credentials in the Authorization header.
- Example: `Authorization: Bearer <token>`

## Pagination

<!-- Fill from PDF p.37/38: parameters and response shape -->

- Parameters: `limit`, `offset` (or `page`, `page_size`).
- Responses include total count and cursors if applicable.

## Request parameters

<!-- Fill from PDF p.37/38: filtering, sorting, date formats -->

- Filtering: `?field=value`, date ranges, wildcards.
- Sorting: `?sort=field` or `?sort=-field`.

## Errors

<!-- Fill from PDF p.37/38: error codes and response body -->

- 400 Bad Request — invalid parameter
- 401 Unauthorized — missing/invalid token
- 404 Not Found — resource doesn’t exist
- 429 Too Many Requests — rate limited
- 5xx Server errors — retry with backoff

## Rate limits

<!-- Fill from PDF p.37/38: limits, headers, retry policy -->

Use exponential backoff on 429 responses. Respect `Retry-After` if provided.