---
id: index
title: Entities
sidebar_label: Entities
slug: /docs/entities/
---

<!--
Alphabetical index of all entities exposed by the Cien.ai API.
Do NOT categorize or group entities.
List entities alphabetically by entity name.
Each entity name must be a Markdown link to a nested entity detail page.
Include entities documented in the PDF, entities exposed via metadata, and entities already present on the site.
Use a neutral, factual documentation tone.
Each entity should have a short one-line description.
-->

# Entities (Alphabetical Index)

This page provides an index of all entities exposed by the Cien Data API. While the platform contains many entities and fields, most use cases rely on only a subset. Each entity name links to a dedicated page describing its structure, available fields, and intended usage.

- [accounts](/docs/entities/accounts/): CRM account records with standardized and TrueAI-enriched fields.
- [activities](/docs/entities/activities/): CRM activity records (calls, emails, meetings) captured or inferred.
- [aliasing](/docs/entities/aliasing/): Metadata for standardized aliasing and value normalization.
- [companies_history](/docs/entities/companies_history/): Company-level processing metadata and quality metrics per cycle.
- [contacts](/docs/entities/contacts/): CRM contact records with additional TrueAI fields.
- [erp_accounts](/docs/entities/erp_accounts/): ERP-provided account records when available.
- [erp_orders](/docs/entities/erp_orders/): ERP order records used for revenue and churn validations.
- [groups](/docs/entities/groups/): List of user groups and membership data.
- [hat_leads](/docs/entities/hat_leads/): Consolidated prospecting cycle derived from multiple lead/account signals.
- [hr_users](/docs/entities/hr_users/): HR user records provided by the client.
- [leads](/docs/entities/leads/): CRM lead records with duplicate detection and enrichment.
- [metadata_ai_scores](/docs/entities/metadata_ai_scores/): AI score outputs and metadata by model/version.
- [metadata_ai_scores_analysis_categories](/docs/entities/metadata_ai_scores_analysis_categories/): Analysis categories used for AI score interpretation.
- [metadata_ai_scores_category_links](/docs/entities/metadata_ai_scores_category_links/): Links between AI score categories and entities/fields.
- [metadata_graphics](/docs/entities/metadata_graphics/): Graphics metadata collection for visualizations.
- [metadata_heatmap_items](/docs/entities/metadata_heatmap_items/): Heatmap items and display metadata.
- [metadata_reference_values](/docs/entities/metadata_reference_values/): Standardized reference values for TrueAI fields.
- [open_pipeline](/docs/entities/open_pipeline/): Open pipeline snapshots for in-period analysis.
- [opp_line_items](/docs/entities/opp_line_items/): Opportunity line item records (product-level revenue details).
- [opps](/docs/entities/opps/): CRM opportunity records with additional TrueAI fields.
- [opps_histories](/docs/entities/opps_histories/): CRM opportunity history records (raw stage changes and edits).
- [opps_stages](/docs/entities/opps_stages/): Master list of opportunity stages and normalized mappings.
- [pipelines](/docs/entities/pipelines/): Pipeline aggregates and normalized structures.
- [products](/docs/entities/products/): Master list of products and product metadata.
- [ssr](/docs/entities/ssr/): Single Sales Record (deduplicated/consolidated customer record).
- [ssr_history](/docs/entities/ssr_history/): Historical SSR progression across standardized sales steps.
- [ssr_history_stakeholders](/docs/entities/ssr_history_stakeholders/): Stakeholder involvement per SSR step.
- [ssr_history_success_factors](/docs/entities/ssr_history_success_factors/): Success factor signals per SSR step.
- [users](/docs/entities/users/): CRM users and TrueAI platform users.
- [users_activities](/docs/entities/users_activities/): Aggregated user activity records (per user, per period).
- [users_history](/docs/entities/users_history/): Monthly snapshots of user records for historical reporting.

Note: Some entities may not appear in the PDF but are included here if exposed via the API or metadata.

