---
title: ssr_history_success_factors
---

## ssr_history_success_factors

This entity represents **ssr_history_success_factors** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| _sys_doc_id | STRING | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) |
| _sys_ssr_history_id | STRING | The link to a specific ssr history id |
| trueai_factor_impact | FLOAT | The impact of the success factor |
| trueai_factor_name | STRING | The name of the success factor |
| trueai_is_significant | BOOLEAN | Boolean flag indicating if the value is significant |
| trueai_model_name | STRING | The model used to generate the success factor |
| trueai_ordering_factor | FLOAT | The ordering factor of the value within its success factor |
| trueai_sort | FLOAT | The sort order of the value within its success factor |
| trueai_ssr_history_name | STRING | Name of the ssr history step |
| trueai_value | STRING | The value of the success factor |
| trueai_value_impact | FLOAT | The impact of the value of the success factor |
| trueai_value_impact_sign | STRING | The sign (direction) of the success factor: positive, negative or neutral |
