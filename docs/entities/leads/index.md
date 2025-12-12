---
title: leads
---

## leads

This entity represents **leads** records in the Cien platform.

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
| crm_account_id | STRING | CRM account id of the lead |
| crm_addr_city | STRING | Lead's city in the CRM |
| crm_addr_country | STRING | Lead's country in the CRM |
| crm_addr_postal_code | STRING | Lead's postal code in the CRM |
| crm_addr_state | STRING | Lead's state in the CRM |
| crm_addr_street | STRING | Lead's street in the CRM |
| crm_complt | FLOAT | Lead's completeness score based on the CRM data |
| crm_complt_contact | FLOAT | Lead's contact information completeness score based on the CRM data |
| crm_complt_contact_method | FLOAT | Lead's contact method completeness score based on the CRM data |
| crm_complt_custom | FLOAT | Lead's custom completeness score based on the CRM data |
| crm_complt_geo | FLOAT | Lead's location completeness score based on the CRM data |
| crm_complt_marketing | FLOAT | Lead's marketing completeness score based on the CRM data |
| crm_contact_title | STRING | Lead's title in the CRM |
| crm_converted_contact_id | STRING | Lead's contact id in the CRM |
| crm_converted_date | DATETIME | Lead conversion date in the CRM |
| crm_converted_opp_id | STRING | Lead's opp id in the CRM |
| crm_created_on | DATETIME | Lead creation date in the CRM |
| crm_creator_id | STRING | Lead creator's id in the CRM |
| crm_custom_value_1 | STRING | Custom categorical variable |
| crm_custom_value_2 | STRING | Custom categorical variable |
| crm_custom_value_3 | STRING | Custom categorical variable |
| crm_deep_link | STRING | Link to the lead in the remote system (such as Salesforce) |
| crm_email | STRING | Lead's email |
| crm_first_name | STRING | Lead's first name |
| crm_industry | STRING | Lead's industry in the CRM |
| crm_last_act_time | DATETIME | Lead's last activity time in the CRM |
| crm_last_name | STRING | Lead's last name |
| crm_leadsource | STRING | Lead's lead source in the CRM |
| crm_modified_on | DATETIME | Lead modified on date in the CRM |
| crm_name | STRING | Lead name in the CRM |
| crm_num_employees | INTEGER | Lead's number of employees in the CRM |
| crm_owner_id | STRING | Lead owner's id in the CRM |
| crm_phone | STRING | Lead's phone number |
| crm_status | STRING | Lead's status in the CRM |
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
| trueai_addr_city | STRING | Lead's city |
| trueai_addr_country | STRING | Lead's country |
| trueai_addr_lat | FLOAT | Lead's latitude |
| trueai_addr_long | FLOAT | Lead's longitude |
| trueai_addr_postal_code | STRING | Lead's postal code |
| trueai_addr_rule | INTEGER | Lead's address prediction rule |
| trueai_addr_state | STRING | Lead's state |
| trueai_addr_street | STRING | Lead's street |
| trueai_company_dupe_conf | FLOAT | Lead's company duplication confidence |
| trueai_company_dupe_id | STRING | Lead's company duplication id |
| trueai_company_size | STRING | Lead's standardized company size |
| trueai_company_size_rule | INTEGER | Lead's standardized company size prediction rule |
| trueai_complt | FLOAT | Completeness score of the lead based on the standardized data |
| trueai_complt_contact | FLOAT | Contact information completeness score of the lead based on the standardized data |
| trueai_complt_contact_method | FLOAT | Contact method completeness score of the lead based on the standardized data |
| trueai_complt_geo | FLOAT | Location completeness score of the lead based on the standardized data |
| trueai_complt_marketing | FLOAT | Marketing completeness score of the lead based on the standardized data |
| trueai_converted_date | DATETIME | Lead converted date |
| trueai_converted_date_rule | INTEGER | Lead converted date rule |
| trueai_created_on | DATETIME | Lead creation date |
| trueai_creator_id | STRING | Lead creator's id |
| trueai_dur | INTEGER | Total duration of activities performed on the lead |
| trueai_first_touch | DATETIME | Date when the lead was first touched |
| trueai_first_touch_rule | INTEGER | Rule for date when the lead was first touched |
| trueai_industry | STRING | Lead's standardized industry |
| trueai_industry_conf | FLOAT | Lead's standardized industry prediction confidence |
| trueai_industry_rule | INTEGER | Lead's standardized industry prediction rule |
| trueai_is_disqualified | STRING | Lead's standardized disqualification status |
| trueai_is_disqualified_conf | FLOAT | Lead's standardized disqualification status prediction confidence |
| trueai_is_master | BOOLEAN | Boolean flag that indicates whether the lead is the master lead in its group of duplicates |
| trueai_last_outcome_date | DATETIME | Leads last outcome |
| trueai_last_outcome_date_rule | INTEGER | Leads last outcome rule |
| trueai_last_touch | DATETIME | Date when the lead was last touched |
| trueai_last_touch_rule | INTEGER | Rule for date when the lead was last touched |
| trueai_lead_dupe_conf | FLOAT | Lead's lead duplication confidence |
| trueai_lead_dupe_id | STRING | Lead's lead duplication id |
| trueai_leadsource | STRING | Lead's standardized lead source |
| trueai_leadsource_conf | FLOAT | Lead's standardized lead source prediction confidence |
| trueai_leadsource_is_inbound | BOOLEAN | Boolean flag that indicates whether the lead's standardized lead source is inbound |
| trueai_leadsource_rule | INTEGER | Lead's standardized lead source prediction rule |
| trueai_owner_id | STRING | Lead owner's id |
| trueai_owner_id_rule | INTEGER | Lead owner's id rule |
| trueai_prob_of_conversion | FLOAT | Lead's probability of conversion |
| trueai_prob_of_conversion_explained | OBJECT | Deprecated field |
| trueai_prob_of_new_logo_win | FLOAT | Deprecated field |
| trueai_qual_bucket | STRING | Quality bucket based on the probability of conversion |
| trueai_qual_bucket_num | INTEGER | Quality bucket expressed as an integer from 1 to 5 based on the probability of conversion |
| trueai_ssr_is_master | BOOLEAN | Boolean flag that indicates whether the lead is the master lead in its group of duplicates, for leads it corresponds to the trueai_is_master flag |
| trueai_test | STRING | Test model |
| trueai_test_conf | FLOAT | Test model confidence |
| trueai_test_debug | STRING | Test model debug information |
| trueai_test_rule | STRING | Test model rule |
| trueai_title_dept | STRING | Lead's standardized department |
| trueai_title_dept_conf | FLOAT | Lead's standardized department prediction confidence |
| trueai_title_seniority | STRING | Lead's standardized seniority |
| trueai_title_seniority_conf | FLOAT | Lead's standardized seniority prediction confidence |
| trueai_vi_lead_gen_value | CURRENCY | Deprecated field |
