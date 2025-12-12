---
title: opps
---

## opps

This entity represents **opps** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| _sys_as_of | DATETIME | The date of the last data request from the platform |
| _sys_doc_id | STRING | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) |
| _sys_filt_end_date | DATE | The end date of the record, stripped of time |
| _sys_filt_start_date | DATE | The start date of the record, stripped of time |
| _sys_is_active | BOOLEAN | Boolean flag that indicates whether the opportunity is active |
| _sys_last_modified_on | DATETIME | The date of the last data modification in the platform |
| _sys_ssr_id | STRING | Id of the SSR document the record belongs to |
| crm_account_custom_value_1 | STRING | Custom categorical variable on the account |
| crm_account_custom_value_2 | STRING | Custom categorical variable on the account |
| crm_account_custom_value_3 | STRING | Custom categorical variable on the account |
| crm_account_id | STRING | CRM account id of the opportunity |
| crm_booking_amt | CURRENCY | Opportunity's booking amount in the CRM |
| crm_close_date | DATETIME | Opportunity's close date in the CRM |
| crm_complt | FLOAT | Opportunity's completeness score based on the CRM data |
| crm_complt_contact | FLOAT | Opportunity's contact information completeness score based on the CRM data |
| crm_complt_custom | FLOAT | Opportunity's custom completeness score based on the CRM data |
| crm_complt_marketing | FLOAT | Opportunity's marketing completeness score based on the CRM data |
| crm_created_on | DATETIME | Opportunity creation date in the CRM |
| crm_creator_id | STRING | Opportunity creator's id in the CRM |
| crm_currency | STRING | Opportunity's currency in the CRM |
| crm_custom_value_1 | STRING | Custom categorical variable |
| crm_custom_value_2 | STRING | Custom categorical variable |
| crm_custom_value_3 | STRING | Custom categorical variable |
| crm_deep_link | STRING | Link to the opportunity in the remote system (such as Salesforce) |
| crm_is_closed | BOOLEAN | Boolean flag that indicates whether the opportunity is closed in the CRM |
| crm_is_won | BOOLEAN | Boolean flag that indicates whether the opportunity is won in the CRM |
| crm_last_act_time | DATETIME | Opportunity's last activity time in the CRM |
| crm_leadsource | STRING | Opportunity's lead source in the CRM |
| crm_loss_reason | STRING | Opportunity's loss reason in the CRM |
| crm_modified_on | DATETIME | Opportunity modified on date in the CRM |
| crm_name | STRING | Name of the opportunity |
| crm_owner_id | STRING | Opportunity owner's id in the CRM |
| crm_pipeline_id | STRING | CRM pipeline id of the opportunity |
| crm_pipeline_name | STRING | CRM pipeline name of the opportunity |
| crm_stage_id | STRING | Opportunity's stage ID in the CRM |
| crm_stage_name | STRING | Opportunity's stage name in the CRM |
| crm_stage_num | INTEGER | Opportunity's stage number in the CRM |
| crm_type | STRING | Opportunity's type in the CRM |
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
| trueai_account_id | STRING | Opportunity's account id |
| trueai_account_id_conf | FLOAT | Opportunity's account id confidence |
| trueai_account_id_rule | INTEGER | Opportunity's account id rule |
| trueai_addr_city | STRING | Opportunity's city |
| trueai_addr_country | STRING | Opportunity's country |
| trueai_addr_lat | FLOAT | Opportunity's latitude |
| trueai_addr_long | FLOAT | Opportunity's longitude |
| trueai_addr_postal_code | STRING | Opportunity's postal code |
| trueai_addr_rule | INTEGER | Opportunity's address prediction rule |
| trueai_addr_state | STRING | Opportunity's state |
| trueai_addr_street | STRING | Opportunity's street |
| trueai_age | INTEGER | Opportunity Age |
| trueai_arr_amt | CURRENCY | Opportunity's ARR amount |
| trueai_booking_amt | CURRENCY | Opportunity's booking amount |
| trueai_booking_amt_currency_rule | INTEGER | Opportunity's booking amount currency conversion rule |
| trueai_booking_amt_rule | INTEGER | Opportunity's booking amount rule related to the presence or absence of opp line items and custom mappings |
| trueai_close_date | DATETIME | Opportunity's close date |
| trueai_close_date_rule | INTEGER | Opportunity's close date rule |
| trueai_company_size | STRING | Opportunity's standardized company size |
| trueai_company_size_rule | INTEGER | Opportunity's standardized company size prediction rule |
| trueai_complt | FLOAT | Completeness score of the opportunity based on the standardized data |
| trueai_complt_contact | FLOAT | Contact information completeness score of the opportunity based on the standardized data |
| trueai_complt_marketing | FLOAT | Marketing completeness score of the opportunity based on the standardized data |
| trueai_created_from_entity | STRING | Opportunity's prospecting entity |
| trueai_created_from_id | STRING | Opportunity's prospecting object's id |
| trueai_created_on | DATETIME | Opportunity creation date |
| trueai_created_on_rule | INTEGER | Opportunity creation date rule |
| trueai_creator_id | STRING | Opportunity creator's id |
| trueai_creator_id_rule | INTEGER | Opportunity creator's id rule |
| trueai_cross_sale_amt | CURRENCY | Opportunity's Cross-Sale amount |
| trueai_discount | CURRENCY | Deprecated field |
| trueai_discount_amt | CURRENCY | Opportunity discount amount |
| trueai_discount_pct | FLOAT | Opportunity discount percentage |
| trueai_discount_pct_tier | STRING | Opportunity discount percentage tier |
| trueai_downgrade_amt | CURRENCY | Opportunity's downgrade amount |
| trueai_dur | INTEGER | Total duration of activities performed on the opportunity |
| trueai_expansion_amt | CURRENCY | Opportunity's expansion amount |
| trueai_industry | STRING | Opportunity's standardized industry |
| trueai_industry_conf | FLOAT | Opportunity's standardized industry prediction confidence |
| trueai_industry_rule | INTEGER | Opportunity's standardized industry prediction rule |
| trueai_is_erp | BOOLEAN | Deprecated field |
| trueai_is_new_logo | BOOLEAN | Boolean flag that indicates whether the opportunity is a new logo |
| trueai_is_won | BOOLEAN | Boolean flag that indicates whether the opportunity is won |
| trueai_leadsource | STRING | Opportunity's standardized lead source |
| trueai_leadsource_conf | FLOAT | Opportunity's standardized lead source prediction confidence |
| trueai_leadsource_rule | INTEGER | Opportunity's standardized lead source prediction rule |
| trueai_loss_reason | STRING | Opportunity's loss reason |
| trueai_nd_amt | CURRENCY | Opportunity's non determinable amount |
| trueai_nnb_amt | CURRENCY | Opportunity's NNB amount |
| trueai_one_time_amt | CURRENCY | Opportunity's one time amount |
| trueai_opp_stage_late_date | DATETIME | Date when the opportunity entered the late stage |
| trueai_opp_stage_mid_date | DATETIME | Date when the opportunity entered the middle stage |
| trueai_owner_id | STRING | Opportunity owner's id |
| trueai_owner_id_rule | INTEGER | Opportunity owner's id rule |
| trueai_pipeline_name | STRING | Pipeline name of the opportunity |
| trueai_pred_booking_amt | CURRENCY | Deprecated field |
| trueai_prob_of_next_opp | FLOAT | Deprecated field |
| trueai_prob_of_next_opp_explained | OBJECT | Deprecated field |
| trueai_prob_of_win | FLOAT | Probability of win |
| trueai_prob_of_win_explained | OBJECT | Deprecated field |
| trueai_qual_bucket | STRING | Quality bucket based on the probability of win |
| trueai_qual_bucket_num | INTEGER | Quality bucket expressed as an integer from 1 to 5 based on the probability of win |
| trueai_renewal_amt | CURRENCY | Opportunity's renewal amount |
| trueai_sale_type | STRING | Opportunity's sale type |
| trueai_sale_type_conf | FLOAT | Opportunity's sale type prediction confidence |
| trueai_stage | STRING | Opportunity's normalized stage |
| trueai_stage_id | STRING | Opportunity's stage ID |
| trueai_stage_name | STRING | Opportunity's stage name |
| trueai_start_date_rule | INTEGER | Opportunity's start date rule |
| trueai_test | STRING | Test model |
| trueai_test_conf | FLOAT | Test model confidence |
| trueai_test_debug | STRING | Test model debug information |
| trueai_test_rule | STRING | Test model rule |
| trueai_vi_opp_value | CURRENCY | Deprecated field |
| trueai_vi_post_sales_value | CURRENCY | Deprecated field |
| trueai_vi_prospecting_value | CURRENCY | Deprecated field |
| trueai_vi_repeat_value | CURRENCY | Deprecated field |
