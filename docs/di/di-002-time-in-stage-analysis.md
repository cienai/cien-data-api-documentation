---
id: di-002
title: Time in Stage Analysis
version: v1.0
category: Deal Intelligence
---

## Description

### Purpose of Analysis

Deal outcomes are influenced not only by whether deals progress through stages, but also by how long they remain in each stage. Excessive time spent in a stage often indicates friction such as poor qualification, misaligned buyer expectations, or internal process breakdowns.

The TrueAI platform records the full history of deal stage transitions, enabling accurate measurement of time spent in each stage without relying on inferred timestamps.

**This analysis answers:**  
Which stages in the sales process cause deals to slow down or stall, and how long do deals typically remain in each stage?

---

## Query

### Query Intent

This query calculates the duration deals spend in each stage by measuring the time between successive stage transitions. It aggregates these durations to identify stages with the highest average or median time spent.

The goal is to surface structural bottlenecks in the sales process rather than individual deal anomalies.

```sql
SELECT
  stage,
  COUNT(*) AS deal_count,
  AVG(days_in_stage) AS avg_days_in_stage,
  PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY days_in_stage) AS median_days_in_stage

FROM ssr_history

WHERE days_in_stage IS NOT NULL

GROUP BY
  stage

ORDER BY
  avg_days_in_stage DESC;
```

### Sample Output

In this example, later sales stages show significantly longer durations, suggesting that deal complexity and buyer decision processes increase as opportunities mature.

| stage | deal_count | avg_days_in_stage | median_days_in_stage |
| --- | ---:| ---:| ---:|
| New Logo | 1,482 | 47.3 | 39 |
| Prospecting | 3,216 | 28.9 | 24 |
| Untouched | 4,109 | 11.4 | 8 |
| Lead Gen | 5,032 | 6.2 | 5 |
| Closed Won | 612 | 3.1 | 2 |

## How to Interpret the Results

- `avg_days_in_stage` highlights stages that slow overall deal velocity
- `median_days_in_stage` helps distinguish systemic delays from outliers
- High duration in early stages may indicate targeting or qualification issues
- High duration in later stages often reflects buyer complexity or approval cycles

---

## Why This Matters

Time-in-stage analysis:
- identifies bottlenecks that reduce pipeline velocity,
- informs process improvements and enablement priorities,
- and provides context for interpreting win rates and revenue forecasts.

This analysis complements stage conversion metrics by explaining why deals fail to progress at expected rates.
