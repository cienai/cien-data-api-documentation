---
title: erp_accounts
---

## erp_accounts

This entity represents **erp_accounts** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| _sys_as_of | DATETIME | The date of the last data request from the platform |
| _sys_doc_id | STRING | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) |
| _sys_filt_end_date | DATE | The end date of the record, stripped of time |
| _sys_filt_start_date | DATE | The start date of the record, stripped of time |
| _sys_last_modified_on | DATETIME | The date of the last data modification in the platform |
| _sys_ssr_id | STRING | Id of the SSR document the record belongs to |
| crm_account_id | STRING | If available the CRM Id |
| crm_owner_id | STRING | If available the CRM Owner Id |
| erp_account_type | STRING | Account type in the ERP |
| erp_addr_city | STRING | Account's city in the ERP |
| erp_addr_country | STRING | Account's country in the ERP |
| erp_addr_postal_code | STRING | Account's postal code in the ERP |
| erp_addr_state | STRING | Account's state in the ERP |
| erp_addr_street | STRING | Account's street in the ERP |
| erp_created_on | DATETIME | Account creation date in the ERP |
| erp_creator_id | STRING | Account creator's ID in the ERP |
| erp_description | STRING | The description |
| erp_modified_on | DATETIME | Account modified on a date in the CRM |
| erp_name | STRING | The name of the account |
| erp_owner_email | STRING | The email of the owner in the ERP for lookup purposes |
| erp_owner_id | STRING | Account owner's ID in the ERP |
| erp_owner_name | STRING | The name of the owner in the ERP for lookup purposes |
| erp_parent_id | STRING | Account's parent ID in the ERP |
| erp_web_url | STRING | The account's URL in the ERP |
| trueai_account_id | STRING | The matched-up CRM account sys id |
| trueai_created_on | DATETIME | Account creation date |
| trueai_creator_id | STRING | Account creator's id |
| trueai_owner_id | STRING | Account owner's id |
