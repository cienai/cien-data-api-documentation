---
title: erp_orders
---

## erp_orders

This entity represents **erp_orders** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| _sys_as_of | DATETIME | The date of the last data request from the platform |
| _sys_doc_id | STRING | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) |
| _sys_filt_end_date | DATE | The end date of the record, stripped of time |
| _sys_filt_start_date | DATE | The start date of the record, stripped of time |
| _sys_last_modified_on | DATETIME | The date of the last data modification in the platform |
| crm_opp_id | STRING | A matching opportunity id (if supplied) |
| erp_account_id | STRING | The ERP Account ID |
| erp_arr_amt | CURRENCY | Any recurring fees normalized. |
| erp_arr_delta | CURRENCY |  |
| erp_created_on | DATETIME | Account creation date in the ERP |
| erp_creator_email | STRING | The creators email to be used for lookups |
| erp_creator_id | STRING | Order creator's ID in the ERP |
| erp_creator_name | STRING | The creators name to be used for lookups |
| erp_currency | STRING | The currency of the order. |
| erp_description | STRING | description of the order |
| erp_discount_amt | CURRENCY | The discount deducted from the order |
| erp_leadsource | STRING | The channel the order came through |
| erp_modified_on | DATETIME | Order modified on the date in the CRM |
| erp_name | STRING | Name of the order |
| erp_one_time_amt | CURRENCY | Any one-time fees |
| erp_order_end_date | DATE | The end date |
| erp_order_start_date | DATE | The effective date of the order |
| erp_status | STRING | The status of the order |
| erp_sub_total_amt | CURRENCY | The amount of the order before taxes and discounts |
| erp_tax_amt | CURRENCY | The taxes added to the oder |
| erp_total_amt | CURRENCY |  |
| erp_type | STRING | The type of order in the ERP system |
| trueai_account_id | STRING | The matched-up CRM account sys id |
| trueai_arr_amt | CURRENCY | Any recurring fees normalized. |
| trueai_arr_delta | CURRENCY |  |
| trueai_created_on | DATETIME | Order creation date |
| trueai_creator_id | STRING | Order creator's id |
| trueai_discount_amt | CURRENCY | The discount deducted from the order |
| trueai_leadsource | STRING | The leadsource |
| trueai_one_time_amt | CURRENCY | Any one-time fees |
| trueai_opp_id | STRING | Any Opp matched to the Order. |
| trueai_opp_id_conf | FLOAT | The confidence in the association between an opp and an Order. |
| trueai_order_end_date | DATETIME | If an annual order 12 months from now. Otherwise today. Used for churn calculation. |
| trueai_owner_id | STRING | Order owner's id |
| trueai_status | STRING | The status of the Order (Placed, Cancelled) |
| trueai_sub_total_amt | CURRENCY | The amount of the order before taxes and discounts |
| trueai_tax_amt | CURRENCY | The taxes added to the oder |
| trueai_total_amt | CURRENCY | Total final amount |
| trueai_type | STRING | Standardized Order Type (eCommerce New, eCommerce Upgrade, eCommerce Downgrade, eCommerce Cancellation, Manual New, Manual Existing, Manual Cancellation) |
