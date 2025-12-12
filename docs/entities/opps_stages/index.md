---
title: opps_stages
---

## opps_stages

This entity represents **opps_stages** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| _sys_as_of | DATETIME | The date of the last data request from the platform |
| _sys_doc_id | STRING | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) |
| _sys_is_deleted | BOOLEAN | Boolean flag that indicates whether the stage was set to deleted in the remote system |
| _sys_last_modified_on | DATETIME | The date of the last data modification in the platform |
| crm_created_on | DATETIME | Stage's creation date in the CRM |
| crm_creator_id | STRING | Stage's creator's id in the CRM |
| crm_description | STRING | Stage description in the CRM |
| crm_is_active | BOOLEAN | Boolean flag that indicates whether the stage was set to inactive in CRM |
| crm_is_closed | BOOLEAN | Boolean flag that indicates whether the stage is closed in the CRM |
| crm_is_won | BOOLEAN | Boolean flag that indicates whether the opportunity is won in the CRM |
| crm_modified_by | STRING | Stage's modified by user id in the CRM |
| crm_modified_on | DATETIME | Stage's modified on date in the CRM |
| crm_name | STRING | Stage name in the CRM |
| crm_order | FLOAT | Stage's order number in the CRM |
| crm_pipeline_id | STRING | CRM pipeline id of the opportunity stage |
| crm_pipeline_name | STRING | CRM pipeline name of the opportunity stage |
| crm_prob_of_win | FLOAT | Stage's probability of win in the CRM |
