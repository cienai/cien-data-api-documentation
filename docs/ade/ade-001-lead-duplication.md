---
id: ade-001
title: Lead Duplication
version: v1.2
category: "Analytics & Data Examples"
sidebar_label: ade-001
---

## Description

### Purpose of Analysis

Duplicate leads create multiple downstream problems: sales representatives may unknowingly follow up on the same account, reporting becomes unreliable, and conversion analysis becomes distorted.

Exact matching alone is not sufficient to identify duplicate leads. Records may differ by email address, spelling variations, or partial information. The TrueAI platform applies fuzzy matching with configurable confidence thresholds to identify both direct lead duplicates and broader company-level consolidation opportunities.

To support prospecting and reporting use cases, TrueAI also provides a derived entity, **`hat_leads`**, which represents a “logical lead” that can aggregate one or more physical leads under a single account context.

**This analysis answers:**  
Which teams and roles are creating the most duplicate or company-related leads, and at what rate?

---

## Query

### Query Intent

This query groups leads by organizational attributes (team and role) and calculates multiple duplication signals:

- Exact lead duplication across records  
- Company-level duplication indicating consolidation opportunities  
- Ratios that distinguish data quality issues from fragmented prospecting behavior  

The results help determine whether duplication is isolated or systemic and whether downstream analysis should use consolidated entities such as `hat_leads`.

```sql
SELECT
	-- Grouping dimensions (who is creating the leads)
	u.trueai_group,
	u.trueai_user_role_dept,

	-- Volume metrics
	COUNT(*) AS lead_count,

	-- Lead-level duplication
	COUNT(trueai_lead_dupe_id) AS dupe_records,
	COUNT(DISTINCT trueai_lead_dupe_id) AS unique_dupe_records,
	COUNT(trueai_lead_dupe_id) / CAST(COUNT(*) AS float) AS dupe_ratio,

	-- Master record identification
	COUNT(
		CASE
			WHEN trueai_is_master = 'true' THEN 1
		END
	) AS master_records,

	-- Company-level consolidation
	COUNT(trueai_company_dupe_id) AS company_dupe_records,
	COUNT(trueai_company_dupe_id) / CAST(COUNT(*) AS float) AS company_dupe_ratio

FROM leads AS l
LEFT JOIN users AS u
	ON l.trueai_creator_id = u._sys_doc_id

GROUP BY
	u.trueai_group,
	u.trueai_user_role_dept

ORDER BY
	dupe_records DESC;
```

### Sample Output

In this example, there is relatively little exact duplication of individual leads. However, many leads belong to the same company, indicating consolidation opportunities at the account level rather than true duplicate records.

| trueai_group | trueai_user_role_level | lead_count | dupe_records | unique_dupe_records | dupe_ratio | master_records | company_dupe_records | company_dupe_ratio |
| --- | --- | ---:| ---:| ---:| ---:| ---:| ---:| ---:|
| ND | MKT | 35,657 | 12 | 9 | 0.03% | 35,648 | 3,306 | 9% |
| ND | ND | 17 | 0 | 0 | 0.00% | 17 | 3 | 18% |
| Enterprise | SALES | 7 | 0 | 0 | 0.00% | 7 | 2 | 29% |
| SMB | SALES | 14 | 0 | 0 | 0.00% | 14 | 4 | 29% |
| ND | SALES | 736 | 0 | 0 | 0.00% | 736 | 93 | 13% |

## How to Interpret the Results

- `dupe_ratio` highlights exact duplicate leads created by a team or role
- `company_dupe_ratio` captures broader consolidation opportunities across the same company
- A low `dupe_ratio` combined with a high `company_dupe_ratio` indicates fragmented prospecting rather than true duplication
- Groups with consistently high `company_dupe_ratio` are strong candidates for analysis using the `hat_leads` entity
