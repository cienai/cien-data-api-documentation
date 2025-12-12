---
title: ssr
---

## ssr

This entity represents **ssr** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| _sys_as_of | DATETIME | The date of the last data request from the platform |
| _sys_doc_id | STRING | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) |
| _sys_filt_end_date | DATE | The end date of the record, stripped of time |
| _sys_filt_start_date | DATE | The start date of the record, stripped of time |
| crm_account_count | INTEGER | Number of accounts related to the sales process |
| crm_account_custom_value_1 | STRING | Custom categorical variable on the account |
| crm_account_custom_value_2 | STRING | Custom categorical variable on the account |
| crm_account_custom_value_3 | STRING | Custom categorical variable on the account |
| crm_act_count | INTEGER | Number of activities related to the sales process |
| crm_contact_count | INTEGER | Number of contacts related to the sales process |
| crm_custom_value_1 | STRING | Custom categorical variable |
| crm_custom_value_2 | STRING | Custom categorical variable |
| crm_custom_value_3 | STRING | Custom categorical variable |
| crm_industry | STRING | Account's industry |
| crm_lead_count | INTEGER | Number of leads related to the sales process |
| crm_leadsource | STRING | Account's leadsource |
| crm_name | STRING | Account's name |
| crm_num_employees | INTEGER | Account's number of employees |
| crm_opp_count | INTEGER | Number of opportunities related to the sales process |
| crm_owner_id | STRING | Account owner's id in the CRM |
| crm_parent_id | STRING | Account's parent id in the CRM |
| crm_type | STRING | Account's type in the CRM |
| crm_web_url | STRING | Account's URL in the CRM |
| sales_proc_account_prospecting | BOOLEAN | Deprecated field |
| sales_proc_ae_did_new_logo | BOOLEAN | Deprecated field |
| sales_proc_am_did_post_sales | BOOLEAN | Deprecated field |
| sales_proc_determinable | BOOLEAN | Deprecated field |
| sales_proc_handoffs | STRING | Deprecated field |
| sales_proc_mgr_involved | BOOLEAN | Deprecated field |
| sales_proc_mkt_did_lead_gen | BOOLEAN | Deprecated field |
| sales_proc_multiple_reps_per_stage | BOOLEAN | Deprecated field |
| sales_proc_new_logo_more_than_one_rep | BOOLEAN | Deprecated field |
| sales_proc_post_sales_more_than_one_rep | BOOLEAN | Deprecated field |
| sales_proc_prospecting_end_rule | INTEGER | Deprecated field |
| sales_proc_prospecting_more_than_one_rep | BOOLEAN | Deprecated field |
| sales_proc_sdr_did_prospecting | BOOLEAN | Deprecated field |
| trueai_account_dupe_conf | STRING | Account's duplication confidence |
| trueai_account_dupe_id | STRING | Account's duplication id |
| trueai_account_is_master | BOOLEAN | Boolean flag that indicates whether the account is the master account in its group of duplicates |
| trueai_added_on | DATETIME | Start date of the first step in the sales process |
| trueai_addr_city | STRING | Record's city |
| trueai_addr_country | STRING | Record's country |
| trueai_addr_lat | FLOAT | Record's latitude |
| trueai_addr_long | FLOAT | Record's longitude |
| trueai_addr_postal_code | STRING | Record's postal code |
| trueai_addr_rule | INTEGER | Record's address prediction rule |
| trueai_addr_state | STRING | Record's state |
| trueai_addr_street | STRING | Record's street |
| trueai_churned_on | DATETIME | Date when the account churned |
| trueai_company_size | STRING | Record's standardized company size |
| trueai_company_size_num | INTEGER | Company size number of the account |
| trueai_company_size_rule | INTEGER | Record's standardized company size prediction rule |
| trueai_complt_accounts | FLOAT | Average TrueAI Completeness of Accounts |
| trueai_complt_all | FLOAT | Overall Average TrueAI Completeness Across Entities |
| trueai_complt_contacts | FLOAT | Average TrueAI Completeness of Contacts |
| trueai_complt_leads | FLOAT | Average TrueAI Completeness of Leads |
| trueai_complt_opps | FLOAT | Average TrueAI Completeness of Opps |
| trueai_creator_id | STRING | Creator id of the first step in the sales process |
| trueai_crm_complt_accounts | FLOAT | Average CRM Completeness of Accounts |
| trueai_crm_complt_all | FLOAT | Overall Average CRM Completeness Across Entities |
| trueai_crm_complt_contacts | FLOAT | Average CRM Completeness of Contacts |
| trueai_crm_complt_leads | FLOAT | Average CRM Completeness of Leads |
| trueai_crm_complt_opps | FLOAT | Average CRM Completeness of Opps |
| trueai_curr_acv | CURRENCY | Current ACV of the account |
| trueai_curr_step | INTEGER | Current step id |
| trueai_curr_step_name | STRING | Current step name |
| trueai_days_to_first_touch | INTEGER | Number of days from the start to the first touch |
| trueai_first_amt | CURRENCY | Booking amount of the first opportunity won |
| trueai_first_purchase | DATETIME | Close date of the first opportunity won |
| trueai_first_touch | DATETIME | First time when the record was touched |
| trueai_group | STRING | Group of the owner of the last step in the sales process |
| trueai_industry | STRING | Record's standardized industry |
| trueai_industry_conf | FLOAT | Record's standardized industry prediction confidence |
| trueai_industry_rule | INTEGER | Record's standardized industry prediction rule |
| trueai_last_outcome | STRING | Outcome of the last step in the sales process |
| trueai_last_purchase | DATETIME | Close date of the last opportunity won |
| trueai_last_touch | DATETIME | Last time when the record was touched |
| trueai_latest_amt | CURRENCY | Booking amount of the last opportunity won |
| trueai_leadsource | STRING | Record's standardized lead source |
| trueai_leadsource_conf | FLOAT | Record's standardized lead source prediction confidence |
| trueai_leadsource_is_inbound | BOOLEAN | Boolean flag that indicates whether the record's standardized lead source is inbound |
| trueai_leadsource_rule | INTEGER | Record's standardized lead source prediction rule |
| trueai_owner_id | STRING | Owner id of the last step in the sales process |
| trueai_parent_name | STRING | Record's parent account name |
| trueai_potential_acv | CURRENCY | Potential ACV of the account |
| trueai_potential_acv_factor | FLOAT | Potential ACV factor of the account |
| trueai_ssr_is_master | BOOLEAN | Boolean flag that indicates whether the account is the master account in its group of duplicates taking into account whether it has revenue |
| trueai_tot_amt | CURRENCY | Sum of the booking amounts of all the opportunities won |
| trueai_tot_length_in_days | INTEGER | Number of days since the start of the first step until the end of the last step in the sales process |
| trueai_tot_pipeline_amt | CURRENCY | Sum of the booking amounts of opportunities created |
| trueai_tot_purchases | INTEGER | Number of opportunities won |
| trueai_tot_steps | INTEGER | Number of steps in the sales process |
| trueai_type | STRING | Record's standardized type |
| trueai_type_rule | INTEGER | Record's standardized type rule |
