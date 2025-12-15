---
id: vi-001
title: Lead Value Distribution
version: v1.0
category: Value Intelligence
slug: /vi/vi-001
---

## Description

### Purpose of Analysis

Evaluating rep performance without understanding how value is distributed can lead to misleading conclusions. Reps who consistently receive higher-quality leads or accounts may outperform others even with similar execution, while capable reps may appear to underperform due to limited access to high-potential opportunities.

The TrueAI platform enriches leads with value-related signals that allow teams to analyze how potential value is allocated across reps and teams.

**This analysis answers:**  
How is lead value distributed across reps, and how evenly is potential opportunity allocated?

---

## Query

### Query Intent

This query aggregates lead value signals by rep to examine how potential opportunity is distributed across the organization. It highlights concentration effects where a small number of reps receive a disproportionate share of high-value leads.

The query is intended to provide context for performance evaluation rather than to assess execution quality directly.

```sql
SELECT
  owner_rep_id,
  owner_rep_name,
  COUNT(*) AS lead_count,
  SUM(trueai_lead_value_score) AS total_lead_value,
  AVG(trueai_lead_value_score) AS avg_lead_value

FROM leads

WHERE trueai_lead_value_score IS NOT NULL

GROUP BY
  owner_rep_id,
  owner_rep_name

ORDER BY
  total_lead_value DESC;
```

### Sample Output

In this example, a small number of reps receive a disproportionately large share of total lead value. Average lead value varies significantly across reps, indicating uneven access to high-potential opportunities.

| owner_rep_name | lead_count | total_lead_value | avg_lead_value |
| --- | ---:| ---:| ---:|
| Rep A | 182 | 9,420 | 51.8 |
| Rep B | 96 | 6,210 | 64.7 |
| Rep C | 211 | 5,980 | 28.3 |
| Rep D | 134 | 3,410 | 25.4 |
| Rep E | 88 | 2,950 | 33.5 |

## How to Interpret the Results

- `total_lead_value` reflects cumulative potential opportunity assigned to a rep
- `avg_lead_value` highlights differences in average lead quality
- High total value may result from volume, quality, or both
- Performance analysis should account for value distribution before drawing conclusions about effectiveness

---

## Why This Matters

Lead value distribution analysis:
- provides context for rep performance comparisons,
- surfaces structural advantages or imbalances,
- and supports fairer evaluation of execution and outcomes.

This analysis establishes a baseline for understanding how opportunity is allocated before examining pipeline creation or revenue results.
