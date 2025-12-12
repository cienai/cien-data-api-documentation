---
title: opp_line_items
---

## opp_line_items

This entity represents **opp_line_items** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| _sys_as_of | DATETIME | The date of the last data request from the platform |
| _sys_doc_id | STRING | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) |
| _sys_is_deleted | BOOLEAN | Boolean flag that indicates whether the stage was set to deleted in the remote system |
| _sys_last_modified_on | DATETIME | The date of the last data modification in the platform |
| _sys_ssr_id | STRING | Id of the SSR document the record belongs to |
| crm_created_on | DATETIME | Product's creation date in the CRM |
| crm_currency | STRING | Product's currency in the CRM |
| crm_description | MEMO | Product's description in the CRM |
| crm_list_price | CURRENCY | Product's list_price in the CRM |
| crm_modified_on | DATETIME | Product's modified on date in the CRM |
| crm_name | STRING | Product name in the CRM |
| crm_opp_id | STRING | Product oppid in the CRM |
| crm_product_code | STRING | Product code in the CRM |
| crm_product_id | STRING | Product product_id in the CRM |
| crm_qty | INTEGER | Product's qty in the CRM |
| crm_total_price | CURRENCY | Product's total_price in the CRM |
| crm_unit_price | CURRENCY | Product's unit_price in the CRM |
| cust_bool1 | BOOLEAN | cust_bool1 |
| cust_bool2 | BOOLEAN | cust_bool2 |
| cust_num1 | FLOAT | cust_num1 |
| cust_num2 | FLOAT | cust_num2 |
| cust_num3 | FLOAT | cust_num3 |
| cust_num4 | FLOAT | cust_num4 |
| cust_num5 | FLOAT | cust_num5 |
| cust_num6 | FLOAT | cust_num6 |
| cust_num7 | FLOAT | cust_num7 |
| cust_text1 | STRING | cust_text1 |
| cust_text2 | STRING | cust_text2 |
| cust_text3 | STRING | cust_text3 |
| cust_text4 | STRING | cust_text4 |
| cust_text5 | STRING | cust_text5 |
| trueai_discount_amt | CURRENCY | Product's discount amount |
| trueai_discount_pct | FLOAT | Product's discount percentage |
| trueai_list_price | CURRENCY | Product's list price |
| trueai_list_price_rule | INTEGER | Product's list price rule |
| trueai_product_type | STRING | Product Type |
| trueai_qty | FLOAT | Products quantity |
| trueai_revenue_type | STRING | Revenue Type |
| trueai_revenue_type_context | STRING | Prompt Used To Classify Product Type |
| trueai_revenue_type_rule | INTEGER | Revenue Type Rule |
| trueai_total_price | CURRENCY | Product's total price |
| trueai_total_price_rule | INTEGER | Product's total price rule |
| trueai_unit_price | CURRENCY | Product's unit price |
| trueai_unit_price_rule | INTEGER | Product's unit price rule |
