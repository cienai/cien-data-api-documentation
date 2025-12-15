---
id: di-003
title: Buyer Attributes & Outcomes
version: v1.0
category: Deal Intelligence
slug: /di/di-003
---

## Description

### Purpose of Analysis

Deal outcomes are influenced by a combination of sales execution and buyer characteristics. Understanding which buyer attributes correlate with successful outcomes helps teams refine targeting, prioritize opportunities, and interpret performance more accurately.

The TrueAI platform enriches and standardizes buyer-related attributes, enabling consistent analysis across deals and time periods.

**This analysis answers:**  
Which buyer attributes are most strongly associated with successful deal outcomes?

---

## Query

### Query Intent

This query compares win and loss outcomes across selected buyer attributes. By grouping deals by attribute values and outcome status, it highlights patterns that may indicate stronger product fit, clearer use cases, or more favorable buying conditions.

The goal is not to create deterministic rules, but to surface correlations that inform strategy and prioritization.

```sql
SELECT
  buyer_industry,
  buyer_company_size,
  outcome,
  COUNT(*) AS deal_count

FROM ssr

WHERE outcome IN ('Closed Won', 'Closed Lost')

GROUP BY
  buyer_industry,
  buyer_company_size,
  outcome

ORDER BY
  deal_count DESC;
```

### Sample Output

In this example, certain industries and company sizes show a higher proportion of successful outcomes. These patterns suggest areas where targeting and messaging may be more effective.

| buyer_industry | buyer_company_size | outcome | deal_count |
| --- | --- | --- | ---:|
| SaaS | 50–200 | Closed Won | 312 |
| SaaS | 50–200 | Closed Lost | 148 |
| Manufacturing | 200–1,000 | Closed Lost | 221 |
| Finance | 1,000+ | Closed Won | 94 |
| Retail | 10–50 | Closed Lost | 173 |

## How to Interpret the Results

- `deal_count` shows the volume of wins and losses for each attribute combination
- A higher proportion of Closed Won outcomes suggests stronger alignment with buyer needs
- Attribute patterns should be interpreted alongside deal size and sales cycle length
- Correlation does not imply causation; these signals support prioritization, not exclusion

---

## Why This Matters

Buyer attribute analysis:
- improves targeting and qualification strategies,
- provides context for interpreting rep performance,
- and helps teams focus on segments with higher likelihood of success.

This example completes the Deal Intelligence narrative by connecting deal behavior and timing to buyer-level factors.
