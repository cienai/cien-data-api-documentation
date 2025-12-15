---
id: ci-001-ra
title: Rep Activity Consistency
version: v1.0
category: Coaching Intelligence
---

## Description

### Purpose of Analysis

Effective coaching requires more than outcome-based metrics such as revenue or closed deals. To understand how and why reps perform differently, managers need visibility into day-to-day behaviors such as outreach volume, consistency, and engagement patterns.

The TrueAI platform captures rep activity signals that allow coaching teams to distinguish between:
- inconsistent execution,
- skill-related gaps,
- and structural or pipeline-driven constraints.

**This analysis answers:**  
Which reps show inconsistent activity patterns over time, and where coaching intervention may be required?

---

## Query

### Query Intent

This query analyzes rep activity over time to identify patterns of inconsistency. By aggregating activity counts by rep and time period, it highlights variability that may indicate:
- uneven execution,
- burnout,
- lack of process adherence,
- or early warning signs of underperformance.

The query is intended to support coaching conversations by grounding them in observable behavior rather than outcomes alone.

```sql
SELECT
  u.rep_id,
  u.rep_name,
  DATE_TRUNC('week', a.activity_date) AS activity_week,

  COUNT(*) AS total_activities,
  COUNT(CASE WHEN a.activity_type = 'call' THEN 1 END) AS call_activities,
  COUNT(CASE WHEN a.activity_type = 'email' THEN 1 END) AS email_activities,

  STDDEV(COUNT(*)) OVER (
    PARTITION BY u.rep_id
  ) AS activity_variance

FROM rep_activities AS a
LEFT JOIN users AS u
  ON a.rep_id = u.rep_id

GROUP BY
  u.rep_id,
  u.rep_name,
  DATE_TRUNC('week', a.activity_date)

ORDER BY
  activity_variance DESC;
```

### Sample Output

In this example, some reps demonstrate consistent weekly activity levels, while others show significant variability. High variance suggests inconsistent execution rather than a steady operating rhythm.

| rep_name | activity_week | total_activities | call_activities | email_activities | activity_variance |
| --- | --- | ---:| ---:| ---:| ---:|
| Rep A | 2024-10-07 | 42 | 18 | 24 | 15.3 |
| Rep A | 2024-10-14 | 12 | 4 | 8 | 15.3 |
| Rep B | 2024-10-07 | 31 | 15 | 16 | 2.1 |
| Rep B | 2024-10-14 | 29 | 14 | 15 | 2.1 |
| Rep C | 2024-10-07 | 8 | 3 | 5 | 18.7 |
| Rep C | 2024-10-14 | 41 | 20 | 21 | 18.7 |

## How to Interpret the Results

- `activity_variance` measures how consistent a rep’s activity levels are across time.
- High variance indicates uneven execution and may warrant coaching attention.
- Consistently low activity may point to pipeline constraints or enablement issues rather than effort.
- Combine with outcome metrics to avoid over-coaching high-performing but efficient reps.

---

## Coaching Application

This analysis supports coaching by:
- identifying reps who may benefit from process reinforcement,
- separating behavior issues from skill or opportunity gaps,
- enabling data-backed coaching conversations focused on execution consistency.
