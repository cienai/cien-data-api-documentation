---
title: ssr_history
---

## ssr_history

This entity represents **ssr_history** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| _sys_as_of | DATETIME | The date of the last data request from the platform |
| _sys_doc_id | STRING | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) |
| _sys_filt_end_date | DATE | The end date of the record, stripped of time |
| _sys_filt_start_date | DATE | The start date of the record, stripped of time |
| _sys_ssr_id | STRING | Id of the SSR document the record belongs to |
| account_crm_custom_value_1 | STRING | Custom categorical variable on the account |
| account_crm_custom_value_2 | STRING | Custom categorical variable on the account |
| account_crm_custom_value_3 | STRING | Custom categorical variable on the account |
| entity_account_id | STRING | Account id, if account already exists |
| entity_crm_custom_value_1 | STRING | Custom categorical variable |
| entity_crm_custom_value_2 | STRING | Custom categorical variable |
| entity_crm_custom_value_3 | STRING | Custom categorical variable |
| entity_hat_lead_recycled | BOOLEAN | Boolean flag that indicates whether the current step is recycled |
| entity_hat_lead_restarted | BOOLEAN | Boolean flag that indicates whether the current step is restarted |
| entity_hat_lead_winback | BOOLEAN | Boolean flag that indicates whether the current step is winback |
| entity_lead_id | STRING | Lead id, if the prospecting object is a lead |
| entity_opp_id | STRING | Opportunity id on selling steps, first opportunity id on steps prior to that, last opportunity id on post-sales support steps |
| entity_primary | STRING | Entity of the primary object related to the step |
| entity_primary_crm_complt | FLOAT | Completeness score of the account based on the CRM data |
| entity_primary_doc_id | STRING | Unique record identifier of the primary object related to the step, based on the ID of the document in the remote system (such as Salesforce ID) |
| entity_primary_trueai_complt | FLOAT | Completeness score of the account based on the standardized data |
| entity_qual_bucket | STRING | Quality bucket based on the probability of success |
| entity_qual_bucket_num | INTEGER | Quality bucket expressed as an integer from 1 to 5 based on the probability of success |
| opp_arr_amt | CURRENCY | Opportunity's ARR amount |
| opp_booking_amt | CURRENCY | Opportunity's booking amount |
| opp_crm_pipeline_name | STRING | CRM pipeline name |
| opp_crm_stage | STRING | Opportunity's current CRM stage name, present in selling steps |
| opp_crm_type | STRING | Opportunity's CRM type, present in selling steps |
| opp_cross_sale_amt | CURRENCY | Opportunity's cross-sale amount |
| opp_downgrade_amt | CURRENCY | Opportunity's downgrade amount |
| opp_erp | BOOLEAN | Boolean flag that indicates whether the current step is based on an ERP order |
| opp_existing_customer_selling_combination | BOOLEAN | Boolean flag that indicates whether the current step is combination |
| opp_existing_customer_selling_cross_sale | BOOLEAN | Boolean flag that indicates whether the current step is cross-sale |
| opp_existing_customer_selling_downgrade | BOOLEAN | Boolean flag that indicates whether the current step is downgrade |
| opp_existing_customer_selling_expansion | BOOLEAN | Boolean flag that indicates whether the current step is expansion |
| opp_existing_customer_selling_renewal | BOOLEAN | Boolean flag that indicates whether the current step is renewal |
| opp_expansion_amt | CURRENCY | Opportunity's expansion amount |
| opp_final_stage | STRING | Opportunity's current normalized stage, present in selling steps |
| opp_initial_amt | CURRENCY | Opportunity's booking amount in the first opportunity history entry, present in selling steps |
| opp_initial_close_date | DATETIME | Opportunity's close date in the first opportunity history entry, present in selling steps |
| opp_late_date | DATETIME | Date when the opportunity entered the late stage, present in selling steps |
| opp_lost_crm_stage | STRING | Opportunity's last crm stage, before it was lost |
| opp_lost_stage | STRING | Opportunity's last normalized stage, before it was lost |
| opp_mid_date | DATETIME | Date when the opportunity entered the middle stage, present in selling steps |
| opp_nd_amt | CURRENCY | Opportunity's ND amount |
| opp_nnb_amt | CURRENCY | Opportunity's NNB amount |
| opp_one_time_amt | CURRENCY | Opportunity's one time amount |
| opp_pipeline_amt | CURRENCY | Pipeline amount created in step |
| opp_pipeline_name | STRING | Pipeline name of the opportunity |
| opp_pred_booking_amt | CURRENCY | Deprecated field |
| opp_renewal_amt | CURRENCY | Opportunity's renewal amount |
| opp_sale_type | STRING | Opportunity's sale type, present in selling steps |
| opp_stage | STRING | Opportunity's stage name |
| opp_upsell_combination | BOOLEAN | Deprecated field |
| opp_upsell_cross_sale | BOOLEAN | Deprecated field |
| opp_upsell_downgrade | BOOLEAN | Deprecated field |
| opp_upsell_expansion | BOOLEAN | Deprecated field |
| opp_upsell_renewal | BOOLEAN | Deprecated field |
| opp_won_amt | CURRENCY | Opportunity's value when closed, present in closed selling steps |
| step_ae_count_involved | INTEGER | Count of account executives (AEs) involved in the step as the owner of activities related to the step. |
| step_am_count_involved | INTEGER | Count of account managers (AMs) involved in the step as the owner of activities related to the step. |
| step_days_pushed_pulled | INTEGER | Difference in days between the step length and expected step length |
| step_end_date | DATETIME | End date of the step |
| step_end_rule | INTEGER | Rule used to determine the end date of the step |
| step_expected_length_in_days | INTEGER | Expected number of days from the step start date to end date |
| step_handed_off_to_id | STRING | ID of the users the step was handed off to |
| step_id | STRING | Id of the step, specific to every step name |
| step_length_in_days | INTEGER | Number of days from the step start date to end date |
| step_mgmt_count_involved | INTEGER | Count of management (MGMT) users involved in the step as the owner of activities related to the step. |
| step_mgr_act | INTEGER | Number of activities performed during the step by a manager |
| step_mgr_involved | BOOLEAN | Boolean flag indicating whether a manager was involved in the step, either as the owner of the step or as the owner of activities related to the step. |
| step_mkt_count_involved | INTEGER | Count of marketing (MKT) users involved in the step as the owner of activities related to the step. |
| step_name | STRING | Name of the step |
| step_next_qual_bucket | STRING | Quality bucket of the next step based on the probability of success |
| step_next_qual_bucket_num | INTEGER | Quality bucket of the next step expressed as an integer from 1 to 5 based on the probability of success |
| step_next_success_prob | FLOAT | Probability of successful outcome of the step |
| step_other_count_involved | INTEGER | Count of other users involved in the step as the owner of activities related to the step. |
| step_outcome | STRING | Outcome of the step, if end date present |
| step_outcome_rule | INTEGER | Rule used to determine the outcome of the step, if end date present |
| step_owner_act | FLOAT | Number of activities performed by the owner of the step |
| step_owner_act_capt_lvl | FLOAT | Act_capture_level score of the owner of the step |
| step_owner_dur | FLOAT | Duration of activities performed by the owner of the step |
| step_owner_expected_dur | FLOAT | Expected duration of activities performed by the owner of the step |
| step_owner_id | STRING | Id of the owner of the step |
| step_owner_prep_factor | FLOAT | Prep factor of the owner of the step |
| step_owner_rule | INTEGER | Rule used to determine the owner of the step |
| step_owner_user_role | STRING | User role of the owner of the step |
| step_received_from_id | STRING | ID of the user the step was received from |
| step_sales_engineer_involved | BOOLEAN | Boolean flag indicating whether a sales engineer was involved in the step, either as the owner of the step or as the owner of activities related to the step. |
| step_sdr_count_involved | INTEGER | Count of sales development representatives (SDRs) involved in the step as the owner of activities related to the step. |
| step_sequence | INTEGER | Ordinal number based on the position of the step in the sequence |
| step_start_date | DATETIME | Start date of the step |
| step_sub_type | STRING | Sub type of the step |
| step_success | BOOLEAN | Boolean flag that indicates whether the outcome of the step was successful |
| step_success_prob | FLOAT | Probability of successful outcome of the step |
| step_success_prob_factors | OBJECT | Deprecated field |
| step_users_tot | INTEGER | Number of users involved in the step, based on activities and ownership |
| stkhlds_all_act_count | INTEGER | Number of activities performed during the step |
| stkhlds_all_act_eng_count | INTEGER | Number of engaged activities performed during the step |
| stkhlds_all_act_type_auto_email_count | INTEGER | Number of automated emails performed during the step |
| stkhlds_all_act_type_auto_email_eng_count | INTEGER | Number of engaged automated emails performed during the step |
| stkhlds_all_act_type_call_count | INTEGER | Number of calls performed during the step |
| stkhlds_all_act_type_call_eng_count | INTEGER | Number of engaged calls performed during the step |
| stkhlds_all_act_type_email_count | INTEGER | Number of emails performed during the step |
| stkhlds_all_act_type_email_eng_count | INTEGER | Number of engaged emails performed during the step |
| stkhlds_all_act_type_meeting_count | INTEGER | Number of meetings performed during the step |
| stkhlds_all_act_type_meeting_eng_count | INTEGER | Number of engaged meetings performed during the step |
| stkhlds_all_act_type_nd_count | INTEGER | Number of activities with unknown type performed during the step |
| stkhlds_all_act_type_nd_eng_count | INTEGER | Number of engaged activities with unknown type performed during the step |
| stkhlds_all_act_type_no_interaction_count | INTEGER | Number of activities with no customer interaction performed during the step |
| stkhlds_all_act_type_no_interaction_eng_count | INTEGER | Number of engaged activities with no customer interaction performed during the step |
| stkhlds_all_act_type_social_count | INTEGER | Number of social media activities performed during the step |
| stkhlds_all_act_type_social_eng_count | INTEGER | Number of engaged social media activities performed during the step |
| stkhlds_all_adj_dur | FLOAT | Adjusted duration of activities performed during the step |
| stkhlds_all_adj_dur_conf | FLOAT | Confidence in the adjusted duration of activities performed during the step |
| stkhlds_all_adj_dur_prior_step | FLOAT | Adjusted duration of activities performed during the prior step |
| stkhlds_all_adj_dur_rule | INTEGER | Rule used to determine the adjusted duration of activities performed during the step |
| stkhlds_all_adj_eng_dur | FLOAT | Adjusted duration of engaged activities performed during the step |
| stkhlds_all_contacts_count | INTEGER | Number of contacts involved in the step |
| stkhlds_all_dur | FLOAT | Duration of activities performed during the step |
| stkhlds_all_dur_eng | FLOAT | Duration of activities performed during the step |
| stkhlds_all_first_act | DATETIME | Date when the first activity was performed during the step |
| stkhlds_all_first_eng | DATETIME | Date when the first engaged activity was performed during the step |
| stkhlds_all_last_act | DATETIME | Date when the last activity was performed during the step |
| stkhlds_all_last_eng | DATETIME | Date when the last engaged activity was performed during the step |
| stkhlds_all_max_title_seniority | STRING | Highest seniority amongst all contacts of the step |
| stkhlds_all_most_common_title_dept | STRING | Most common department amongst all contacts of the step |
| stkhlds_all_most_common_title_seniority | STRING | Most common seniority amongst all contacts of the step |
| stkhlds_all_unique_title_depts | INTEGER | Unique departments amongst all contacts of the step |
| stkhlds_all_unique_title_seniorities | INTEGER | Unique seniority in all contacts of the step |
| stkhlds_primary_contact_act_count | INTEGER | Number of activities performed by the primary stakeholder during the step |
| stkhlds_primary_contact_act_eng_count | INTEGER | Number of engaged activities performed by the primary stakeholder during the step |
| stkhlds_primary_contact_dur | FLOAT | Duration of activities performed by the primary contact of the step during the step |
| stkhlds_primary_contact_eng_dur | FLOAT | Duration of activities performed by the primary contact of the step during the step |
| stkhlds_primary_contact_first_act | DATETIME | Date when the first activity by the primary contact was performed during the step |
| stkhlds_primary_contact_first_eng | DATETIME | Date when the first engaged activity by the primary contact was performed during the step |
| stkhlds_primary_contact_last_act | DATETIME | Date when the last activity by the primary contact was performed during the step |
| stkhlds_primary_contact_last_eng | DATETIME | Date when the last engaged activity by the primary contact was performed during the step |
| stkhlds_primary_contact_title_dept | STRING | Department of the primary contact of the step |
| stkhlds_primary_contact_title_seniority | STRING | Seniority of the primary contact of the step |
| stkhlds_primary_entity_id | STRING | Id of the primary contact of the step |
| stkhlds_primary_entity_type | STRING | Entity of the primary contact of the step: lead or contact |
| stkhlds_secondary_contact_act_count | INTEGER | Number of activities performed by the secondary stakeholder during the step |
| stkhlds_secondary_contact_act_eng_count | INTEGER | Number of engaged activities performed by the secondary stakeholder during the step |
| stkhlds_secondary_contact_dur | FLOAT | Duration of activities performed by the secondary contact of the step during the step |
| stkhlds_secondary_contact_eng_dur | FLOAT | Duration of activities performed by the secondary contact of the step during the step |
| stkhlds_secondary_contact_first_act | DATETIME | Date when the first activity by the secondary contact was performed during the step |
| stkhlds_secondary_contact_first_eng | DATETIME | Date when the first engaged activity by the secondary contact was performed during the step |
| stkhlds_secondary_contact_last_act | DATETIME | Date when the last activity by the secondary contact was performed during the step |
| stkhlds_secondary_contact_last_eng | DATETIME | Date when the last engaged activity by the secondary contact was performed during the step |
| stkhlds_secondary_contact_title_dept | STRING | Department of the secondary contact of the step |
| stkhlds_secondary_contact_title_seniority | STRING | Seniority of the secondary contact of the step |
| stkhlds_secondary_entity_id | STRING | Id of the secondary contact of the step |
| stkhlds_secondary_entity_type | STRING | Entity of the secondary contact of the step: lead or contact |
| vi_value_created | CURRENCY | Value created during the step |
| vi_value_delivered | CURRENCY | Value delivered at the end of the step |
| vi_value_repeat | CURRENCY | Repeat value of the step |
