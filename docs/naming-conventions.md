---
title: Naming Conventions & Special Fields
---

This page summarizes common naming patterns and special fields used across Cien datasets.

> TODO: Paste content from the PDF here. The sections below match the expected structure to simplify copy/paste.

## Prefixes

Document field prefixes (crm_, erp_, trueai_, _sys_) and what they imply.

- `crm_`: fields sourced from your CRM system.
- `erp_`: fields originating in ERP systems.
- `trueai_`: standardized fields and computed values within Cien.
- `_sys_`: system metadata such as ingestion timestamps.

## Identifiers & keys

State how IDs are formed and linked (surrogate keys, external ids, composite keys).

## Date & time semantics

UTC vs local, DATE vs DATETIME, filters using start/end date.

## Special fields

List fields that have particular behavior (owner ids, deep links, currency handling, ARR deltas).

## Display names vs field names

Explain differences and where each is used (UI display vs raw field_name).
