---
id: index
title: Entities
sidebar_label: Entities
slug: /docs/entities/
---

<!--
Entities landing page
- Neutral, factual tone
- List and group entities present on the site
- Include entities from PDF and metadata; do not exclude if not in PDF
-->

The Cien.ai API exposes a set of core CRM entities, derived analytical entities, historical entities, and metadata entities. While the API contains over 15 entities and more than 1,000 fields, most use cases require only a subset of these entities. Derived and historical entities (such as `ssr_history` and `users_history`) are designed to simplify accurate historical reporting and advanced analysis.

---

## Core CRM Entities

- `leads`: CRM lead records with additional TrueAI fields
- `accounts`: CRM account records with additional TrueAI fields
- `contacts`: CRM contact records with additional TrueAI fields
- `opps`: CRM opportunity records with additional TrueAI fields
- `opp_line_items`: CRM opportunity line item records
- `opps_histories`: CRM opportunity history records
- `opps_stages`: Master list of opportunity stages
- `products`: Master list of products
- `activities`: CRM activity records (typically available separately due to size)
- `users`: CRM users and additional users created in the TrueAI platform
- `groups`: List of user groups
- `hr_users`: HR user records provided by the client

---

## Derived & Analytical Entities

- `ssr`: Single Sales Record (deduplicated and consolidated representation of leads and accounts)
- `ssr_history`: Historical representation of SSR progression through sales steps
- `hat_leads`: Derived entity representing a consolidated prospecting cycle
- `customer_accounts`: Derived entity representing an account in a specific post‑selling cycle

---

## Historical & System Entities

- `users_history`: Monthly snapshots of user records for historical reporting
- `companies_history`: Company‑level metadata and quality metrics per processing cycle

---

## Metadata Entities

- `metadata_entities`: Definitions of all available API entities
- `metadata_fields`: Definitions of all available fields across entities
- `metadata_classes`: Standardized value classes for TrueAI fields

---

## Graphics & Meta Collections

- `metadata_graphics`: Graphics metadata collection
- `aliasing`: Aliasing metadata collection

---

Use the sidebar to navigate to each entity’s reference page for fields, relationships, and usage notes.

