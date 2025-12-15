---
id: ade-003
title: Master Record Selection
version: v1.0
category: Automatic Data Enhancement
---

## Description

### Purpose of Analysis

When multiple records represent the same real-world entity, consolidation alone is not sufficient. One record must be selected as the authoritative representation — the *master record* — to ensure stable joins, consistent reporting, and predictable downstream behavior.

Selecting a master record requires balancing multiple factors, such as data completeness, recency, and signal confidence. Poor master selection can lead to lost information, unstable identifiers, and confusing analytics.

The TrueAI platform applies deterministic and confidence-based logic to identify a master record among related duplicates.

**This analysis answers:**  
Which record is selected as the master among duplicates, and what signals influence that selection?

---

## Query

### Query Intent

This query examines duplicate record groups and compares master and non-master records across key signals. It surfaces the attributes that differentiate the master record from its related records and makes the selection logic transparent.

The goal is to validate that master selection is stable, explainable, and aligned with analytical use cases.

```sql
SELECT
  trueai_lead_dupe_id AS duplicate_group_id,
  _sys_doc_id AS record_id,
  trueai_is_master,
  trueai_record_score,
  updated_at,
  created_at

FROM leads

WHERE trueai_lead_dupe_id IS NOT NULL

ORDER BY
  duplicate_group_id,
  trueai_is_master DESC,
  trueai_record_score DESC;
```

### Sample Output

In this example, each duplicate group contains one master record and one or more non-master records. Master records consistently score higher and are typically more recent or more complete than their counterparts.

| duplicate_group_id | record_id | trueai_is_master | trueai_record_score | updated_at | created_at |
| --- | --- | --- | ---:| --- | --- |
| D-44291 | L-88120 | true | 0.92 | 2024-10-14 | 2024-06-01 |
| D-44291 | L-77402 | false | 0.61 | 2024-08-03 | 2024-05-19 |
| D-55218 | L-19330 | true | 0.88 | 2024-09-22 | 2024-04-11 |
| D-55218 | L-14429 | false | 0.54 | 2024-07-02 | 2024-03-30 |

## How to Interpret the Results

- `trueai_is_master` identifies the authoritative record within a duplicate group
- `trueai_record_score` reflects the relative quality and confidence of each record
- Master records generally have higher scores and more recent updates
- Non-master records remain accessible but should not be used as primary analytical joins

---

## Why This Matters

Master record selection ensures:
- stable entity identifiers across analyses,
- consistent joins between entities,
- and predictable historical reporting.

Understanding how master records are chosen helps teams trust consolidated data and avoid unintended analytical drift when duplicates are resolved.
