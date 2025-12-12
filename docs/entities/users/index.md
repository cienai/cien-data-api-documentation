---
title: users
---

## users

This entity represents **users** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| _sys_as_of | DATETIME | The date of the last data request from the platform |
| _sys_co_id | STRING | The Cien company ID |
| _sys_doc_id | STRING | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) |
| _sys_filt_end_date | DATE | The end date of the record, stripped of time |
| _sys_filt_start_date | DATE | The start date of the record, stripped of time |
| _sys_last_modified_on | DATETIME | The date of the last data modification in the platform |
| crm_addr_city | STRING | User's city in the CRM |
| crm_addr_country | STRING | User's country in the CRM |
| crm_addr_postal_code | STRING | User's postal code in the CRM |
| crm_addr_state | STRING | User's state in the CRM |
| crm_addr_street | STRING | User's street in the CRM |
| crm_created_on | DATETIME | User creation date in the CRM |
| crm_creator_id | STRING | User creator's id in the CRM |
| crm_deep_link | STRING | Link to the user in the remote system (such as Salesforce) |
| crm_dept | STRING | User's department in the CRM |
| crm_division | STRING | User's division in the CRM |
| crm_email | STRING | User's email |
| crm_first_name | STRING | User's first name |
| crm_language_locale | STRING | User's language locale |
| crm_last_login_time | DATETIME | User's last login time in the CRM |
| crm_last_name | STRING | User's last name |
| crm_locale | STRING | User's locale |
| crm_mgr_id | STRING | User manager's id in the CRM |
| crm_profile_url | STRING | User's avatar URL |
| crm_role | STRING | User's CRM role |
| crm_time_zone | STRING | User's time zone |
| crm_title | STRING | User's CRM title |
| crm_user_type | STRING | User's CRM type |
| crm_username | STRING | User's username |
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
| trueai_addr_city | STRING | Lead's city |
| trueai_addr_country | STRING | Lead's country |
| trueai_addr_lat | FLOAT | Lead's latitude |
| trueai_addr_long | FLOAT | Lead's longitude |
| trueai_addr_postal_code | STRING | Lead's postal code |
| trueai_addr_state | STRING | Lead's state |
| trueai_addr_street | STRING | Lead's street |
| trueai_billable | BOOLEAN | Boolean flag that indicates whether the user is billable |
| trueai_direct_reports | INTEGER | User's number of direct reports |
| trueai_ext_match_id | STRING | User ID in the externel HR file |
| trueai_ext_match_rule | INTEGER | Rule used to determine user's match with an external HR file |
| trueai_full_name | STRING | User's full name |
| trueai_group | STRING | User's group |
| trueai_group_conf | FLOAT | User's group prediction confidence |
| trueai_group_rule | INTEGER | Rule used to determine user's group |
| trueai_hire_date | DATETIME | User's hire date |
| trueai_is_dummy | BOOLEAN | Boolean flag that indicates whether the user was added to account for all creation and ownership of entries |
| trueai_is_mgr | BOOLEAN | Boolean flag that indicates whether the user is a manager |
| trueai_mgr_id | STRING | User manager's id |
| trueai_mgr_id_conf | FLOAT | User's manager's id prediction confidence |
| trueai_mgr_id_rule | INTEGER | Rule used to determine user's manager's id |
| trueai_mgr_ids | STRING | User managers' ids |
| trueai_performance_lvl_reached_on | DATETIME | First date when the user reached the performance tier of "Performer" or "Overperformer" |
| trueai_ramping_status | STRING | Ramping or Ramped depending on users tenure |
| trueai_role | STRING | User's standardized role |
| trueai_role_conf | FLOAT | User's standardized role prediction confidence |
| trueai_tenure | INTEGER | Number of months since the user's hire date |
| trueai_termination_date | DATETIME | User's termination date |
| trueai_test | STRING | Test model |
| trueai_test_conf | FLOAT | Test model confidence |
| trueai_test_debug | STRING | Test model debug information |
| trueai_test_rule | STRING | Test model rule |
| trueai_title | STRING | User's standardized title |
| trueai_title_conf | FLOAT | User's standardized title prediction confidence |
| trueai_tot_reports | INTEGER | User's number of total reports |
| trueai_user_behavior | STRING | User's standardized behavior |
| trueai_user_behavior_conf | FLOAT | User's standardized behavior prediction confidence |
| trueai_user_role | STRING | User's standardized and combined role |
| trueai_user_role_alias | STRING | User's standardized and combined role aliased |
| trueai_user_role_dept | STRING | User's department derived from the standardized and combined role |
| trueai_user_role_function | STRING | User's function derived from the standardized and combined role |
