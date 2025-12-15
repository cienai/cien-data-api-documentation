---
id: queries
title: Queries
sidebar_label: Queries
---


## Overview

Describe how to query Cien Data API data, including endpoints, parameters, and response shapes. Include authentication notes and rate limits if applicable.

## Filtering and Sorting

- Syntax and supported operators (equals, contains, in, range)
- Multi-field sort with direction (asc/desc)
- Examples with common fields across entities

## Pagination

- Limit/offset vs cursor-based pagination
- Maximum page size, defaults, and examples

## Aggregations

- Count, sum, avg, min, max
- Group by fields and handling nulls

## Joins and Relations

- Linking between entities (e.g., contacts → companies)
- Foreign keys and recommended patterns

## Examples

### Contacts: simple filter

```http
GET /api/contacts?email_domain=cien.ai&status=active
```

### Opportunities: date range and sort

```http
GET /api/opps?created_at_from=2024-01-01&created_at_to=2024-12-31&sort=-amount
```

### Users activities: pagination

```http
GET /api/users_activities?limit=100&offset=200
```

## Tips

- Prefer server-side filtering and sorting to minimize payloads.
- Use consistent time zones and ISO 8601 for timestamps.
- Avoid N+1 requests; batch where endpoints support it.
