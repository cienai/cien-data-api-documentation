---
title: contacts
---

## contacts

This entity represents **contacts** records in the Cien platform.

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
| crm_account_id | STRING | CRM account id of the contact |
| crm_addr_city | STRING | Contact's city in the CRM |
| crm_addr_country | STRING | Contact's country in the CRM |
| crm_addr_postal_code | STRING | Contact's postal code in the CRM |
| crm_addr_state | STRING | Contact's state in the CRM |
| crm_addr_street | STRING | Contact's street in the CRM |
| crm_complt | FLOAT | Contact's completeness score based on the CRM data |
| crm_complt_contact | FLOAT | Contact's contact information completeness score based on the CRM data |
| crm_complt_contact_method | FLOAT | Contact's contact method completeness score based on the CRM data |
| crm_complt_geo | FLOAT | Contact's location completeness score based on the CRM data |
| crm_complt_marketing | FLOAT | Contact's marketing completeness score based on the CRM data |
| crm_created_on | DATETIME | Contact creation date in the CRM |
| crm_creator_id | STRING | Contact creator's id in the CRM |
| crm_deep_link | STRING | Link to the contact in the remote system (such as Salesforce) |
| crm_email | STRING | Contact's email |
| crm_first_name | STRING | Contact's first name |
| crm_last_act_time | DATETIME | Contact's last activity time in the CRM |
| crm_last_name | STRING | Contact's last name |
| crm_leadsource | STRING | Contact's lead source in the CRM |
| crm_modified_on | DATETIME | Contact modified on date in the CRM |
| crm_owner_id | STRING | Contact owner's id in the CRM |
| crm_phone | STRING | Contact's phone number |
| crm_salutation | STRING | Contact's salutation in the CRM |
| crm_title | STRING | Contact's title in the CRM |
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
| trueai_addr_city | STRING | Contact's city |
| trueai_addr_country | STRING | Contact's country |
| trueai_addr_lat | FLOAT | Contact's latitude |
| trueai_addr_long | FLOAT | Contact's longitude |
| trueai_addr_postal_code | STRING | Contact's postal code |
| trueai_addr_rule | INTEGER | Contact's address prediction rule |
| trueai_addr_state | STRING | Contact's state |
| trueai_addr_street | STRING | Contact's street |
| trueai_complt | FLOAT | Completeness score of the contact based on the standardized data |
| trueai_complt_contact | FLOAT | Contact information completeness score of the contact based on the standardized data |
| trueai_complt_contact_method | FLOAT | Contact method completeness score of the contact based on the standardized data |
| trueai_complt_geo | FLOAT | Location completeness score of the contact based on the standardized data |
| trueai_complt_marketing | FLOAT | Marketing completeness score of the contact based on the standardized data |
| trueai_created_on | DATE | Contact creation date |
| trueai_creator_id | STRING | Contact creator's id |
| trueai_leadsource | STRING | Contact's standardized lead source |
| trueai_leadsource_conf | FLOAT | Contact's standardized lead source prediction confidence |
| trueai_leadsource_rule | INTEGER | Contact's standardized lead source prediction rule |
| trueai_owner_id | STRING | Contact owner's id |
| trueai_test | STRING | Test model |
| trueai_test_conf | FLOAT | Test model confidence |
| trueai_test_debug | STRING | Test model debug information |
| trueai_test_rule | STRING | Test model rule |
| trueai_title_dept | STRING | Contact's standardized department |
| trueai_title_dept_conf | FLOAT | Contact's standardized department prediction confidence |
| trueai_title_seniority | STRING | Contact's standardized seniority |
| trueai_title_seniority_conf | FLOAT | Contact's standardized seniority prediction confidence |
