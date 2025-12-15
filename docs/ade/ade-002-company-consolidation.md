---
id: ade-002
title: Company Consolidation
version: v1.0
category: Automatic Data Enhancement
---

## Description

### Purpose of Analysis

In many datasets, multiple leads or accounts may represent the same underlying company. These records often differ due to spelling variations, incomplete enrichment, multiple data sources, or independent prospecting efforts by different reps.

Without consolidation, company-level analysis becomes fragmented, leading to:
- inflated account counts,
- duplicated pipeline attribution,
- and misleading performance metrics.

The TrueAI platform applies company-level matching logic to identify related records and enable consolidation across leads and accounts.

**This analysis answers:**  
Which records belong to the same underlying company, and how does company-level consolidation change analytical results?

---

## Query

### Query Intent

This query compares raw record counts with company-level consolidated counts. It highlights how many individual records map to the same company identifier and how consolidation reduces fragmentation in downstream reporting.

The query is intended to make the impact of company consolidation explicit and measurable.

```sql
SELECT
  trueai_company_dupe_id AS company_id,

  COUNT(*) AS raw_record_count,
  COUNT(DISTINCT trueai_lead_id) AS distinct_leads,
  COUNT(DISTINCT trueai_account_id) AS distinct_accounts,

  COUNT(*) - 1 AS consolidation_savings

FROM leads

WHERE trueai_company_dupe_id IS NOT NULL

GROUP BY
  trueai_company_dupe_id

ORDER BY
  raw_record_count DESC;
```

### Sample Output

In this example, several companies are represented by multiple lead and account records. Consolidation significantly reduces the number of logical companies that need to be analyzed or managed.

| company_id | raw_record_count | distinct_leads | distinct_accounts | consolidation_savings |
| --- | ---:| ---:| ---:| ---:|
| C-10293 | 18 | 14 | 4 | 17 |
| C-84721 | 11 | 9 | 2 | 10 |
| C-55210 | 7 | 6 | 1 | 6 |
| C-33901 | 5 | 5 | 0 | 4 |
| C-99817 | 4 | 3 | 1 | 3 |

## How to Interpret the Results

- `raw_record_count` shows how many individual records reference the same company
- `distinct_leads` and `distinct_accounts` show how fragmentation occurs across entity types
- `consolidation_savings` represents the reduction in records after company-level consolidation
- High consolidation savings indicate strong candidates for company-centric analysis and reporting

---

## Why This Matters

Company-level consolidation:
- simplifies account-based reporting,
- prevents over-counting in pipeline and revenue analysis,
- and enables more accurate attribution of sales and marketing activity.

This analysis provides transparency into how consolidation logic changes the shape of the data before it is used in downstream analytics.
