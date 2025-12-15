---
id: ade-002
title: Company Consolidation
version: v1.0
category: "Analytics & Data Examples"
sidebar_label: ade-002
---

## Description

### Purpose of Analysis

Lead records often represent interactions tied to the same company. Even when exact lead duplication is low, multiple leads may cluster around a single account, indicating consolidation opportunities for prospecting and reporting.

TrueAI provides signals to identify company-level relationships so that teams can operate on a consolidated company context. This analysis highlights where consolidation can reduce fragmentation and improve account-level insights.

**This analysis answers:**  
Which teams and roles generate leads that cluster around the same company, and what is the magnitude of those clusters?

---

## Query

### Query Intent

This query groups leads by team/role and measures the extent to which those leads map to the same company using company-level identifiers. It computes ratios showing how much activity concentrates on shared accounts.

```sql
SELECT
  -- Grouping dimensions (who is creating the leads)
  u.trueai_group,
  u.trueai_user_role_dept,

  -- Volume metrics
  COUNT(*) AS lead_count,

  -- Company-level consolidation metrics
  COUNT(l.trueai_company_dupe_id) AS company_dupe_records,
  COUNT(DISTINCT l.trueai_company_dupe_id) AS unique_company_ids,
  COUNT(l.trueai_company_dupe_id) / CAST(COUNT(*) AS float) AS company_dupe_ratio,

  -- Optional: hat_leads usage (logical, consolidated leads)
  COUNT(DISTINCT hl._sys_doc_id) AS hat_lead_count

FROM leads AS l
LEFT JOIN users AS u
  ON l.trueai_creator_id = u._sys_doc_id
LEFT JOIN hat_leads AS hl
  ON l.trueai_company_dupe_id = hl.trueai_company_dupe_id

GROUP BY
  u.trueai_group,
  u.trueai_user_role_dept

ORDER BY
  company_dupe_records DESC;
```

### Sample Output

| trueai_group | trueai_user_role_dept | lead_count | company_dupe_records | unique_company_ids | company_dupe_ratio | hat_lead_count |
| --- | --- | ---:| ---:| ---:| ---:| ---:|
| ND | MKT | 35,657 | 3,306 | 1,842 | 9% | 1,212 |
| ND | ND | 17 | 3 | 2 | 18% | 2 |
| Enterprise | SALES | 7 | 2 | 2 | 29% | 1 |
| SMB | SALES | 14 | 4 | 3 | 29% | 3 |
| ND | SALES | 736 | 93 | 65 | 13% | 58 |

## How to Interpret the Results

- `company_dupe_ratio` quantifies consolidation opportunities at the company level (shared account context)
- High `company_dupe_records` with relatively low `unique_company_ids` indicates clustering around fewer companies
- `hat_lead_count` suggests the presence of consolidated logical lead entities suitable for analysis and reporting
- Teams with high clustering benefit from company-level strategies (account-based marketing, consolidated outreach)
