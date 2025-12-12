---
title: accounts
---

## accounts

This entity represents **accounts** records in the Cien platform.

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
| crm_account_type | STRING | Account's type in the CRM |
| crm_addr_city | STRING | Account's city in the CRM |
| crm_addr_country | STRING | Account's country in the CRM |
| crm_addr_postal_code | STRING | Account's postal code in the CRM |
| crm_addr_state | STRING | Account's state in the CRM |
| crm_addr_street | STRING | Account's street in the CRM |
| crm_complt | FLOAT | Account's completeness score based on the CRM data |
| crm_complt_contact | FLOAT | Account's contact information completeness score based on the CRM data |
| crm_complt_contact_method | FLOAT | Account's contact method completeness score based on the CRM data |
| crm_complt_custom | FLOAT | Account's custom completeness score based on the CRM data |
| crm_complt_geo | FLOAT | Account's location completeness score based on the CRM data |
| crm_complt_marketing | FLOAT | Account's marketing completeness score based on the CRM data |
| crm_created_on | DATETIME | Account creation date in the CRM |
| crm_creator_id | STRING | Account creator's id in the CRM |
| crm_custom_value_1 | STRING | Custom categorical variable |
| crm_custom_value_2 | STRING | Custom categorical variable |
| crm_custom_value_3 | STRING | Custom categorical variable |
| crm_deep_link | STRING | Link to the account in the remote system (such as Salesforce) |
| crm_industry | STRING | Account's industry in the CRM |
| crm_last_act_time | DATETIME | Account's last activity time in the CRM |
| crm_leadsource | STRING | Account's lead source in the CRM |
| crm_modified_on | DATETIME | Account modified on date in the CRM |
| crm_name | STRING | Name of the account |
| crm_num_employees | INTEGER | Account's number of employees in the CRM |
| crm_owner_id | STRING | Account owner's id in the CRM |
| crm_parent_id | STRING | Account's parent id in the CRM |
| crm_web_url | STRING | Account's URL in the CRM |
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
| ext_addr_city | STRING |  |
| ext_addr_country | STRING |  |
| ext_addr_postal_code | STRING |  |
| ext_addr_state | STRING |  |
| ext_addr_street | STRING |  |
| ext_debug | OBJECT |  |
| ext_id | STRING |  |
| ext_industry | STRING |  |
| ext_is_match | STRING |  |
| ext_last_updated | DATETIME |  |
| ext_linkedin_url | STRING |  |
| ext_match_conf | FLOAT |  |
| ext_match_rule | INTEGER |  |
| ext_name | STRING |  |
| ext_num_employees_range | STRING |  |
| ext_phone | STRING |  |
| ext_revenue_range | STRING |  |
| ext_self_verified | BOOLEAN |  |
| ext_source | STRING |  |
| ext_web_url | STRING |  |
| ext_year_founded | INTEGER |  |
| trueai_account_dupe_conf | FLOAT | Account's duplication confidence |
| trueai_account_dupe_id | STRING | Account's duplication id |
| trueai_addr_city | STRING | Account's city |
| trueai_addr_country | STRING | Account's country |
| trueai_addr_lat | FLOAT | Account's latitude |
| trueai_addr_long | FLOAT | Account's longitude |
| trueai_addr_postal_code | STRING | Account's postal code |
| trueai_addr_rule | INTEGER | Account's address prediction rule |
| trueai_addr_state | STRING | Account's state |
| trueai_addr_street | STRING | Account's street |
| trueai_company_size | STRING | Account's standardized company size |
| trueai_company_size_rule | INTEGER | Account's standardized company size prediction rule |
| trueai_complt | FLOAT | Completeness score of the account based on the standardized data |
| trueai_complt_contact | FLOAT | Contact information completeness score of the account based on the standardized data |
| trueai_complt_contact_method | FLOAT | Contact method completeness score of the account based on the standardized data |
| trueai_complt_geo | FLOAT | Location completeness score of the account based on the standardized data |
| trueai_complt_marketing | FLOAT | Marketing completeness score of the account based on the standardized data |
| trueai_converted_date | DATETIME | Account's converted date |
| trueai_created_on | DATETIME | Account creation date |
| trueai_created_on_rule | INTEGER | Account creation date rule |
| trueai_creator_id | STRING | Account creator's id |
| trueai_dur | INTEGER | Total duration of activities performed on the account |
| trueai_first_touch | DATETIME | Date when the account was first touched |
| trueai_first_touch_rule | INTEGER | Rule for date when the account was first touched |
| trueai_industry | STRING | Account's standardized industry |
| trueai_industry_conf | FLOAT | Account's standardized industry prediction confidence |
| trueai_industry_rule | INTEGER | Account's standardized industry prediction rule |
| trueai_is_erp | BOOLEAN | Boolean flag indicating whether the account is based on an ERP account entry |
| trueai_is_master | BOOLEAN | Boolean flag that indicates whether the account is the master account in its group of duplicates |
| trueai_last_outcome | DATETIME | Account's last outcome |
| trueai_last_outcome_rule | INTEGER | Account's last outcome rule |
| trueai_last_touch | DATETIME | Date when the account was last touched |
| trueai_last_touch_rule | INTEGER | Rule for date when the account was last touched |
| trueai_leadsource | STRING | Account's standardized lead source |
| trueai_leadsource_conf | FLOAT | Account's standardized lead source prediction confidence |
| trueai_leadsource_rule | INTEGER | Account's standardized lead source prediction rule |
| trueai_owner_id | STRING | Account owner's id |
| trueai_owner_id_rule | INTEGER | Account owner's id |
| trueai_prob_of_conversion | FLOAT | Account's probability of conversion |
| trueai_prob_of_conversion_explained | OBJECT | Deprecated field |
| trueai_prob_of_new_logo_win | FLOAT | Deprecated field |
| trueai_qual_bucket | STRING | Quality bucket based on the probability of conversion |
| trueai_qual_bucket_num | INTEGER | Quality bucket expressed as an integer from 1 to 5 based on the probability of conversion |
| trueai_ssr_is_master | BOOLEAN | Boolean flag that indicates whether the account is the master account in its group of duplicates taking into account whether it has revenue |
| trueai_test | STRING | Test model |
| trueai_test_conf | FLOAT | Test model confidence |
| trueai_test_debug | STRING | Test model debug information |
| trueai_test_rule | STRING | Test model rule |
| trueai_title_dept | STRING | Account's standardized department |
| trueai_title_dept_conf | FLOAT | Account's standardized department prediction confidence |
| trueai_title_seniority | STRING | Account's standardized seniority |
| trueai_title_seniority_conf | FLOAT | Account's standardized seniority prediction confidence |
| trueai_type | STRING | Account's standardized type |
| trueai_vi_lead_gen_value | CURRENCY | Deprecated field |
