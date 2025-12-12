---
title: open_pipeline
---

## open_pipeline

This entity represents **open_pipeline** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| _sys_as_of | DATETIME | The date of the last data request from the platform |
| _sys_doc_id | STRING | Unique record identifier, based on the ID of the opp in the remote system (such as Salesforce ID) and date |
| _sys_filt_end_date | DATE | The end date of the record, stripped of time |
| _sys_filt_start_date | DATE | The start date of the record, stripped of time |
| crm_booking_amt | CURRENCY | Opportunity's booking amount in the CRM |
| crm_close_date | DATETIME | Opportunity's close date in the CRM |
| crm_created_on | DATETIME | Opportunity's creation date in the CRM |
| crm_creator_id | STRING | Opportunity's creator's id in the CRM |
| crm_opp_id | STRING | Opportunity's id in the CRM |
| crm_stage_id | STRING | Opportunity's stage ID in the CRM |
| crm_stage_name | STRING | Opportunity's stage name in the CRM |
| crm_stage_num | STRING | Opportunity's stage number in the CRM |
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
| trueai_act_adj_dur | FLOAT | Activities Adj Duration |
| trueai_act_adj_dur_rule | INTEGER | Activities Adj Duration Rule |
| trueai_act_adj_eng_dur | FLOAT | Activities Adj Engaged Duration |
| trueai_act_count | INTEGER | Activities Count |
| trueai_act_dur | FLOAT | Activities Duration |
| trueai_act_eng_count | INTEGER | Activities Engaged Count |
| trueai_act_eng_dur | FLOAT | Activities Engaged Duration |
| trueai_act_last_eng | DATETIME | Activities Last Engaged |
| trueai_act_type_auto_email_count | INTEGER | Activities Automated Email Count |
| trueai_act_type_auto_email_dur | FLOAT | Activities Automated Email Duration |
| trueai_act_type_auto_email_eng_count | INTEGER | Activities Automated Email Engaged Count |
| trueai_act_type_call_count | INTEGER | Activities Call Count |
| trueai_act_type_call_dur | FLOAT | Activities Call Duration |
| trueai_act_type_call_eng_count | INTEGER | Activities Call Engaged Count |
| trueai_act_type_email_count | INTEGER | Activities Email Count |
| trueai_act_type_email_dur | FLOAT | Activities Email Duration |
| trueai_act_type_email_eng_count | INTEGER | Activities Email Engaged Count |
| trueai_act_type_meeting_count | INTEGER | Activities Meeting Count |
| trueai_act_type_meeting_dur | FLOAT | Activities Meeting Durationuratin |
| trueai_act_type_meeting_eng_count | INTEGER | Activities Meeting Engaged Count |
| trueai_act_type_nd_count | INTEGER | Activities Non Determinable Count |
| trueai_act_type_nd_dur | FLOAT | Activities Non Determinable Duration |
| trueai_act_type_nd_eng_count | INTEGER | Activities Non Determinable Engaged Count |
| trueai_act_type_no_interaction_count | INTEGER | Activities No Interaction Count |
| trueai_act_type_no_interaction_dur | FLOAT | Activities No Interaction Duration |
| trueai_act_type_no_interaction_eng_count | INTEGER | Activities No Interaction Engaged Count |
| trueai_act_type_social_count | INTEGER | Activities Social Count |
| trueai_act_type_social_dur | FLOAT | Activities Social Duration |
| trueai_act_type_social_eng_count | INTEGER | Activities Social Engaged Count |
| trueai_attention_value_expected_success_prob | FLOAT | Expected Success Probability |
| trueai_attention_value_score | FLOAT | Attention Value Score |
| trueai_attention_value_success_prob | FLOAT | Calibrated Success Probability |
| trueai_attention_value_text | STRING | Attention Value Text |
| trueai_avg_step_sequence | FLOAT | Average Step Sequence Number Across All Opportunities |
| trueai_booking_amt | CURRENCY | Opportunity's booking amount |
| trueai_can_be_excluded | BOOLEAN | Boolean flag that indicates whether the record is redundant |
| trueai_current_prob_of_win | FLOAT | Current probability of win of the opportunity |
| trueai_days_in_opp | INTEGER | Days Since Opportunity Open |
| trueai_days_in_stage | INTEGER | Days In Stage |
| trueai_days_pushed_pulled | INTEGER | Difference In Days Between The Opportunity Expected Close Date and The Actual Close Date |
| trueai_init_close_date | DATETIME | Initial Close Date of Opp |
| trueai_is_closed | BOOLEAN | Boolean flag that indicates whether the opportunity is closed |
| trueai_is_won | BOOLEAN | Boolean flag that indicates whether the opportunity is won |
| trueai_owner_act_capt_lvl | FLOAT | Stage Owner Activity Capture Level |
| trueai_owner_act_capt_lvl_conf | FLOAT | Stage Owner Activity Capture Level Confidence |
| trueai_owner_id | STRING | Owner ID of Opp |
| trueai_owner_prep_factor | FLOAT | Stage Owner Prep Factor |
| trueai_pace_score | FLOAT | Pace Score |
| trueai_pace_score_days_in_opp | FLOAT | Pace Score Days Since Opportunity Open |
| trueai_pace_score_days_in_stage | FLOAT | Days In Stage |
| trueai_pace_tier | INTEGER | Pace Tier 0-5 |
| trueai_pipeline_name | STRING | Pipeline name of the opportunity |
| trueai_pred_booking_amt | CURRENCY | Predicted Booking Amount |
| trueai_pred_close_date | DATETIME | Predicted Close Date |
| trueai_sort_id | STRING | Sortable ID |
| trueai_stage | STRING | Opportunity's normalized stage |
| trueai_stage_id | STRING | Opportunity's stage ID |
| trueai_stage_name | STRING | Opportunity's stage name |
| trueai_step_sequence | INTEGER | Ordinal number based on the position of the step in the sequence |
| trueai_success_prob | FLOAT | Success Probability of Opp |
