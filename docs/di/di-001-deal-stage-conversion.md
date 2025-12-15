---
id: di-001
title: Deal Stage Conversion
version: v1.0
category: Deal Intelligence
---

## Description

### Purpose of Analysis

Understanding revenue outcomes requires visibility into how deals progress through the sales process. Many pipeline issues are not caused by deal quality alone, but by where and how deals stall, regress, or exit the funnel.

The TrueAI platform captures each meaningful step in the lifecycle of a deal, enabling detailed analysis of stage progression and conversion behavior over time.

**This analysis answers:**  
At which stages do deals convert, stall, or drop out of the sales process?

---

## Query

### Query Intent

This query analyzes historical stage transitions for deals and calculates conversion counts between consecutive stages. It highlights where deals most frequently fail to progress and where pipeline leakage occurs.

The query uses historical deal state changes to ensure that transitions are measured accurately rather than inferred from the current deal state.

```sql
SELECT
  previous_stage,
  current_stage,
  COUNT(*) AS transition_count

FROM ssr_history

WHERE previous_stage IS NOT NULL
  AND current_stage IS NOT NULL

GROUP BY
  previous_stage,
  current_stage

ORDER BY
  transition_count DESC;
```

### Sample Output

In this example, most deals successfully move from early qualification stages into active selling, but a significant number stall or exit before reaching closing stages.

| previous_stage | current_stage | transition_count |
| --- | --- | ---:|
| Lead Gen | Untouched | 4,218 |
| Untouched | Prospecting | 3,607 |
| Prospecting | New Logo | 1,942 |
| New Logo | Closed Won | 612 |
| New Logo | Closed Lost | 1,104 |
| Prospecting | Closed Lost | 987 |

## How to Interpret the Results

- `transition_count` represents how often deals move between specific stages
- High counts into Closed Lost indicate pipeline leakage at that stage
- Large drop-offs between stages highlight friction points in the sales process
- Early-stage exits may indicate qualification or targeting issues rather than execution problems

---

## Why This Matters

Stage conversion analysis:
- identifies bottlenecks in the sales funnel,
- highlights stages that require enablement or process changes,
- and provides a foundation for more advanced time-to-close and outcome analysis.

This example establishes a baseline for understanding deal flow before examining deal velocity, buyer attributes, or revenue impact.
