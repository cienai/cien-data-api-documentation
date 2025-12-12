---
title: products
---

## products

This entity represents **products** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| _sys_as_of | DATETIME | The date of the last data request from the platform |
| _sys_doc_id | STRING | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) |
| _sys_is_active | BOOLEAN | Boolean flag that indicates whether the record was set to inactive in the remote system |
| _sys_is_deleted | BOOLEAN | Boolean flag that indicates whether the record was set to deleted in the remote system |
| _sys_last_modified_on | DATETIME | The date of the last data modification in the platform |
| crm_created_on | DATETIME | Product's creation date in the CRM |
| crm_currency | STRING | Product's currency in the CRM |
| crm_description | MEMO | Product's description in the CRM |
| crm_family | STRING | Product's family in the CRM |
| crm_modified_on | DATETIME | Product's modified on date in the CRM |
| crm_name | STRING | Product name in the CRM |
| crm_product_code | STRING | Product code in the CRM |
| trueai_family | STRING | Product's family |
| trueai_name | STRING | Product name |
