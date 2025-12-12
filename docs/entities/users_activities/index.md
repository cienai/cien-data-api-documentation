---
title: users_activities
---

## users_activities

This entity represents **users_activities** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| _sys_as_of | DATETIME | The date of the last data request from the platform |
| _sys_co_id | STRING | The Cien company ID |
| _sys_doc_id | STRING | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) |
| _sys_filt_end_date | DATE | The last date of the month that the record applies to (for past months) or the last date of aggregated data (for the present month), stripped of time |
| _sys_filt_start_date | DATE | The first date of the month that the records applies to, stripped of time |
| _sys_is_active | BOOLEAN | Boolean flag that indicates whether the record was set to inactive in the remote system |
| _sys_is_deleted | BOOLEAN | Boolean flag that indicates whether the record was set to deleted in the remote system |
| _sys_user_id | STRING | The ID of the document in the remote system (such as Salesforce ID) |
| trueai_adj_dur | FLOAT | Activities Total Adj Duration |
| trueai_adj_dur_rule | FLOAT | Activities Total Adj Duration Rule |
| trueai_adj_eng_dur | FLOAT | Activities Engaged Adj Duration |
| trueai_count | INTEGER | Activities Total Count |
| trueai_dur | INTEGER | Activities Total Duration |
| trueai_end_date | DATE | The date of the last data request from the platform in UTC |
| trueai_eng_count | INTEGER | Activities Engaged Count |
| trueai_eng_dur | FLOAT | Activities Engaged Duration |
| trueai_eng_unique_ssr_ids | INTEGER | Activities Engaged Unique Ids |
| trueai_owner_act_capt_lvl | FLOAT | Activities Capture Level |
| trueai_owner_act_capt_lvl_conf | FLOAT | Activities Capture Level Confidence |
| trueai_owner_prep_factor | FLOAT | Prep factor |
| trueai_purpose_exist_cust_selling_count | INTEGER | Activities Existing Customer Selling Count |
| trueai_purpose_exist_cust_selling_dur | FLOAT | Activities Existing Customer Selling Duration |
| trueai_purpose_exist_cust_selling_eng_count | INTEGER | Activities Existing Customer Selling Engaged Count |
| trueai_purpose_exist_cust_selling_eng_dur | FLOAT | Activities Existing Customer Selling Engaged Duration |
| trueai_purpose_exist_cust_selling_eng_unique_ids | INTEGER | Activities Existing Customer Selling Engaged Unique Ids |
| trueai_purpose_exist_cust_selling_unique_ids | INTEGER | Activities Existing Customer Selling Unique Ids |
| trueai_purpose_internal_count | INTEGER | Activities Internal Count |
| trueai_purpose_internal_dur | FLOAT | Activities Internal Duration |
| trueai_purpose_internal_eng_count | INTEGER | Activities Internal Engaged Count |
| trueai_purpose_internal_eng_dur | FLOAT | Activities Internal Engaged Duration |
| trueai_purpose_internal_eng_unique_ids | INTEGER | Activities Internal Engaged Unique Ids |
| trueai_purpose_internal_unique_ids | INTEGER | Activities Internal Unique Ids |
| trueai_purpose_new_logo_count | INTEGER | Activities New Logo Count |
| trueai_purpose_new_logo_dur | FLOAT | Activities New Logo Duration |
| trueai_purpose_new_logo_eng_count | INTEGER | Activities New Logo Engaged Count |
| trueai_purpose_new_logo_eng_dur | FLOAT | Activities New Logo Engaged Duration |
| trueai_purpose_new_logo_eng_unique_ids | INTEGER | Activities New Logo Engaged Unique Ids |
| trueai_purpose_new_logo_unique_ids | INTEGER | Activities New Logo Unique Ids |
| trueai_purpose_post_sales_count | INTEGER | Activities Post Selling Count |
| trueai_purpose_post_sales_dur | FLOAT | Activities Post Selling Duration |
| trueai_purpose_post_sales_eng_count | INTEGER | Activities Post Selling Engaged Count |
| trueai_purpose_post_sales_eng_dur | FLOAT | Activities Post Selling Engaged Duration |
| trueai_purpose_post_sales_eng_unique_ids | INTEGER | Activities Post Selling Engaged Unique Ids |
| trueai_purpose_post_sales_unique_ids | INTEGER | Activities Post Selling Unique Ids |
| trueai_purpose_prospecting_count | INTEGER | Activities Prospecting Count |
| trueai_purpose_prospecting_dur | FLOAT | Activities Prospecting Duration |
| trueai_purpose_prospecting_eng_count | INTEGER | Activities Prospecting Engaged Count |
| trueai_purpose_prospecting_eng_dur | FLOAT | Activities Prospecting Engaged Duration |
| trueai_purpose_prospecting_eng_unique_ids | INTEGER | Activities Prospecting Engaged Unique Ids |
| trueai_purpose_prospecting_unique_ids | INTEGER | Activities Prospecting Unique Ids |
| trueai_purpose_upselling_count | INTEGER | Deprecated field |
| trueai_purpose_upselling_dur | FLOAT | Deprecated field |
| trueai_purpose_upselling_eng_count | INTEGER | Deprecated field |
| trueai_purpose_upselling_eng_dur | FLOAT | Deprecated field |
| trueai_purpose_upselling_eng_unique_ids | INTEGER | Deprecated field |
| trueai_purpose_upselling_unique_ids | INTEGER | Deprecated field |
| trueai_type_auto_email_count | INTEGER | Activities Automated Email Count |
| trueai_type_auto_email_dur | FLOAT | Activities Automated Email Duration |
| trueai_type_auto_email_eng_count | INTEGER | Activities Automated Email Engaged Count |
| trueai_type_auto_email_eng_dur | FLOAT | Activities Automated Email Engaged Duration |
| trueai_type_auto_email_eng_unique_ids | INTEGER | Activities Automated Email Engaged Unique Ids |
| trueai_type_auto_email_purpose_exist_cust_selling_count | INTEGER | Activities Automated Email Existing Customer Selling Count |
| trueai_type_auto_email_purpose_exist_cust_selling_eng_count | INTEGER | Activities Automated Email Existing Customer Selling Engaged Count |
| trueai_type_auto_email_purpose_internal_count | INTEGER | Activities Automated Email Internal Count |
| trueai_type_auto_email_purpose_internal_eng_count | INTEGER | Activities Automated Email Internal Engaged Count |
| trueai_type_auto_email_purpose_new_logo_count | INTEGER | Activities Automated Email New Logo Count |
| trueai_type_auto_email_purpose_new_logo_eng_count | INTEGER | Activities Automated Email New Logo Engaged Count |
| trueai_type_auto_email_purpose_post_sales_count | INTEGER | Activities Automated Email Post Selling Count |
| trueai_type_auto_email_purpose_post_sales_eng_count | INTEGER | Activities Automated Email Post Selling Engaged Count |
| trueai_type_auto_email_purpose_prospecting_count | INTEGER | Activities Automated Email Prospecting Count |
| trueai_type_auto_email_purpose_prospecting_eng_count | INTEGER | Activities Automated Email Prospecting Engaged Count |
| trueai_type_auto_email_purpose_upselling_count | INTEGER | Deprecated field |
| trueai_type_auto_email_purpose_upselling_eng_count | INTEGER | Deprecated field |
| trueai_type_auto_email_unique_ids | INTEGER | Activities Automated Email Unique Ids |
| trueai_type_call_count | INTEGER | Activities Call Count |
| trueai_type_call_dur | FLOAT | Activities Call Duration |
| trueai_type_call_eng_count | INTEGER | Activities Call Engaged Count |
| trueai_type_call_eng_dur | FLOAT | Activities Call Engaged Duration |
| trueai_type_call_eng_unique_ids | INTEGER | Activities Call Engaged Unique Ids |
| trueai_type_call_purpose_exist_cust_selling_count | INTEGER | Activities Call Existing Customer Selling Count |
| trueai_type_call_purpose_exist_cust_selling_eng_count | INTEGER | Activities Call Existing Customer Selling Engaged Count |
| trueai_type_call_purpose_internal_count | INTEGER | Activities Call Internal Count |
| trueai_type_call_purpose_internal_eng_count | INTEGER | Activities Call Internal Engaged Count |
| trueai_type_call_purpose_new_logo_count | INTEGER | Activities Call New Logo Count |
| trueai_type_call_purpose_new_logo_eng_count | INTEGER | Activities Call New Logo Engaged Count |
| trueai_type_call_purpose_post_sales_count | INTEGER | Activities Call Post Selling Count |
| trueai_type_call_purpose_post_sales_eng_count | INTEGER | Activities Call Post Selling Engaged Count |
| trueai_type_call_purpose_prospecting_count | INTEGER | Activities Call ProspectingCount |
| trueai_type_call_purpose_prospecting_eng_count | INTEGER | Activities Call Prospecting Engaged Count |
| trueai_type_call_purpose_upselling_count | INTEGER | Deprecated field |
| trueai_type_call_purpose_upselling_eng_count | INTEGER | Deprecated field |
| trueai_type_call_unique_ids | INTEGER | Activities Call Unique Ids |
| trueai_type_email_count | INTEGER | Activities Email Count |
| trueai_type_email_dur | FLOAT | Activities Email Duration |
| trueai_type_email_eng_count | INTEGER | Activities Email Engaged Count |
| trueai_type_email_eng_dur | FLOAT | Activities Email Engaged Duration |
| trueai_type_email_eng_unique_ids | INTEGER | Activities Email Engaged Unique Ids |
| trueai_type_email_purpose_exist_cust_selling_count | INTEGER | Activities Email Existing Customer Selling Count |
| trueai_type_email_purpose_exist_cust_selling_eng_count | INTEGER | Activities Email Existing Customer Selling Engaged Count |
| trueai_type_email_purpose_internal_count | INTEGER | Activities Email Internal Count |
| trueai_type_email_purpose_internal_eng_count | INTEGER | Activities Email Internal Engaged Count |
| trueai_type_email_purpose_new_logo_count | INTEGER | Activities Email New Logo Count |
| trueai_type_email_purpose_new_logo_eng_count | INTEGER | Activities Email New Logo Engaged Count |
| trueai_type_email_purpose_post_sales_count | INTEGER | Activities Email Post Selling Count |
| trueai_type_email_purpose_post_sales_eng_count | INTEGER | Activities Email Post Selling Engaged Count |
| trueai_type_email_purpose_prospecting_count | INTEGER | Activities Call Prospecting Count |
| trueai_type_email_purpose_prospecting_eng_count | INTEGER | Activities Call Prospecting Engaged Count |
| trueai_type_email_purpose_upselling_count | INTEGER | Deprecated field |
| trueai_type_email_purpose_upselling_eng_count | INTEGER | Deprecated field |
| trueai_type_email_unique_ids | INTEGER | Activities Email Unique Ids |
| trueai_type_meeting_count | INTEGER | Activities Meeting Count |
| trueai_type_meeting_dur | FLOAT | Activities Meeting Duration |
| trueai_type_meeting_eng_count | INTEGER | Activities Meeting Engaged Count |
| trueai_type_meeting_eng_dur | FLOAT | Activities Meeting Engaged Duration |
| trueai_type_meeting_eng_unique_ids | INTEGER | Activities Meeting Engaged Unique Ids |
| trueai_type_meeting_purpose_exist_cust_selling_count | INTEGER | Activities Meeting Existing Customer Selling Count |
| trueai_type_meeting_purpose_exist_cust_selling_eng_count | INTEGER | Activities Meeting Existing Customer Selling Engaged Count |
| trueai_type_meeting_purpose_internal_count | INTEGER | Activities Meeting Internal Count |
| trueai_type_meeting_purpose_internal_eng_count | INTEGER | Activities Meeting Internal Engaged Count |
| trueai_type_meeting_purpose_new_logo_count | INTEGER | Activities Meeting New Logo Count |
| trueai_type_meeting_purpose_new_logo_eng_count | INTEGER | Activities Meeting New Logo Engaged Count |
| trueai_type_meeting_purpose_post_sales_count | INTEGER | Activities Meeting Post Selling Count |
| trueai_type_meeting_purpose_post_sales_eng_count | INTEGER | Activities Meeting Post Selling Engaged Count |
| trueai_type_meeting_purpose_prospecting_count | INTEGER | Activities Meeting Prospecting Count |
| trueai_type_meeting_purpose_prospecting_eng_count | INTEGER | Activities Meeting Prospecting Engaged Count |
| trueai_type_meeting_purpose_upselling_count | INTEGER | Deprecated field |
| trueai_type_meeting_purpose_upselling_eng_count | INTEGER | Deprecated field |
| trueai_type_meeting_unique_ids | INTEGER | Activities Meeting Unique Ids |
| trueai_type_nd_count | INTEGER | Activities Non Determinable Count |
| trueai_type_nd_dur | FLOAT | Activities Non Determinable Duration |
| trueai_type_nd_eng_count | INTEGER | Activities Non Determinable Engaged Count |
| trueai_type_nd_eng_dur | FLOAT | Activities Non Determinable Engaged Duration |
| trueai_type_nd_eng_unique_ids | INTEGER | Activities Non Determinable Engaged Unique Ids |
| trueai_type_nd_purpose_exist_cust_selling_count | INTEGER | Activities Non Determinable Existing Customer Selling Count |
| trueai_type_nd_purpose_exist_cust_selling_eng_count | INTEGER | Activities Non Determinable Existing Customer Selling Engaged Count |
| trueai_type_nd_purpose_internal_count | INTEGER | Activities Non Determinable Internal Count |
| trueai_type_nd_purpose_internal_eng_count | INTEGER | Activities Non Determinable Internal Engaged Count |
| trueai_type_nd_purpose_new_logo_count | INTEGER | Activities Non Determinable New Logo Count |
| trueai_type_nd_purpose_new_logo_eng_count | INTEGER | Activities Non Determinable New Logo Engaged Count |
| trueai_type_nd_purpose_post_sales_count | INTEGER | Activities Non Determinable Post Selling Count |
| trueai_type_nd_purpose_post_sales_eng_count | INTEGER | Activities Non Determinable Post Selling Engaged Count |
| trueai_type_nd_purpose_prospecting_count | INTEGER | Activities Non Determinable Prospecting Count |
| trueai_type_nd_purpose_prospecting_eng_count | INTEGER | Activities Non Determinable Prospecting Engaged Count |
| trueai_type_nd_purpose_upselling_count | INTEGER | Deprecated field |
| trueai_type_nd_purpose_upselling_eng_count | INTEGER | Deprecated field |
| trueai_type_nd_unique_ids | INTEGER | Activities Non Determinable Unique Ids |
| trueai_type_no_interaction_count | INTEGER | Activities No Interaction Count |
| trueai_type_no_interaction_dur | FLOAT | Activities No Interaction Duration |
| trueai_type_no_interaction_eng_count | INTEGER | Activities No Interaction Engaged Count |
| trueai_type_no_interaction_eng_dur | FLOAT | Activities No Interaction Engaged Duration |
| trueai_type_no_interaction_eng_unique_ids | INTEGER | Activities No Interaction Engaged Unique Ids |
| trueai_type_no_interaction_purpose_exist_cust_selling_count | INTEGER | Activities No Interaction Existing Customer Selling Count |
| trueai_type_no_interaction_purpose_exist_cust_selling_eng_count | INTEGER | Activities No Interaction Existing Customer Selling Engaged Count |
| trueai_type_no_interaction_purpose_internal_count | INTEGER | Activities No Interaction Internal Count |
| trueai_type_no_interaction_purpose_internal_eng_count | INTEGER | Activities No Interaction Internal Engaged Count |
| trueai_type_no_interaction_purpose_new_logo_count | INTEGER | Activities No Interaction New Logo Count |
| trueai_type_no_interaction_purpose_new_logo_eng_count | INTEGER | Activities No Interaction New Logo Engaged Count |
| trueai_type_no_interaction_purpose_post_sales_count | INTEGER | Activities No Interaction Post Selling Count |
| trueai_type_no_interaction_purpose_post_sales_eng_count | INTEGER | Activities No Interaction Post Selling Engaged Count |
| trueai_type_no_interaction_purpose_prospecting_count | INTEGER | Activities No Interaction Prospecting Count |
| trueai_type_no_interaction_purpose_prospecting_eng_count | INTEGER | Activities No Interaction Prospecting Engaged Count |
| trueai_type_no_interaction_purpose_upselling_count | INTEGER | Deprecated field |
| trueai_type_no_interaction_purpose_upselling_eng_count | INTEGER | Deprecated field |
| trueai_type_no_interaction_unique_ids | INTEGER | Activities No Interaction Unique Ids |
| trueai_type_social_count | INTEGER | Activities Social Count |
| trueai_type_social_dur | FLOAT | Activities Social Duration |
| trueai_type_social_eng_count | INTEGER | Activities Social Engaged Count |
| trueai_type_social_eng_dur | FLOAT | Activities Social Engaged Duration |
| trueai_type_social_eng_unique_ids | INTEGER | Activities Social Engaged Unique Ids |
| trueai_type_social_purpose_exist_cust_selling_count | INTEGER | Activities Social Existing Customer Selling Count |
| trueai_type_social_purpose_exist_cust_selling_eng_count | INTEGER | Activities Social Existing Customer Selling Engaged Count |
| trueai_type_social_purpose_internal_count | INTEGER | Activities Social Internal Count |
| trueai_type_social_purpose_internal_eng_count | INTEGER | Activities Social Internal Engaged Count |
| trueai_type_social_purpose_new_logo_count | INTEGER | Activities Social New Logo Count |
| trueai_type_social_purpose_new_logo_eng_count | INTEGER | Activities Social New Logo Engaged Count |
| trueai_type_social_purpose_post_sales_count | INTEGER | Activities Social Post Selling Count |
| trueai_type_social_purpose_post_sales_eng_count | INTEGER | Activities Social Post Selling Engaged Count |
| trueai_type_social_purpose_prospecting_count | INTEGER | Activities Social Prospecting Count |
| trueai_type_social_purpose_prospecting_eng_count | INTEGER | Activities Social Prospecting Engaged Count |
| trueai_type_social_purpose_upselling_count | INTEGER | Deprecated field |
| trueai_type_social_purpose_upselling_eng_count | INTEGER | Deprecated field |
| trueai_type_social_unique_ids | INTEGER | Activities Social Unique Ids |
| trueai_unique_ssr_ids | INTEGER | Activities Total Unique Ids |
| trueai_user_role | STRING | User's standardized and combined role |
| trueai_user_role_alias | STRING | User's standardized and combined role aliased |
| trueai_user_role_dept | STRING | User's function derived from the standardized and combined role |
| trueai_user_role_function | STRING | User's department derived from the standardized and combined role |
