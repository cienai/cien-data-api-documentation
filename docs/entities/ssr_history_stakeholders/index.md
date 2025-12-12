---
title: ssr_history_stakeholders
---

## ssr_history_stakeholders

This entity represents **ssr_history_stakeholders** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| _sys_as_of | DATETIME | The date of the last data request from the platform |
| _sys_doc_id | STRING | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) |
| _sys_filt_end_date | DATE | The end date of the engagement with this stake holder |
| _sys_filt_start_date | DATE | The start date of the record, stripped of time |
| _sys_last_modified_on | DATETIME | The date of the last data modification in the platform |
| _sys_ssr_history_id | STRING | The link to a specific ssr history id |
| _sys_ssr_id | STRING | Id of the SSR document the record belongs to |
| crm_complt | FLOAT | Contact's completeness score based on the CRM data |
| crm_first_name | STRING | Contact's first name in the CRM |
| crm_last_name | STRING | Contact's last name in the CRM |
| crm_title | STRING | Contact's title in the CRM |
| trueai_act_adj_dur | FLOAT | Adjusted duration of activities performed during the step that were related to the stake holder |
| trueai_act_adj_dur_rule | INTEGER | Rule used to determine the adjusted duration of activities performed during the step |
| trueai_act_adj_eng_dur | FLOAT | Adjusted duration of engaged activities performed during the step that were related to the stake holder |
| trueai_act_count | INTEGER | Number of activities performed during the step that were related to the stake holder |
| trueai_act_dur | FLOAT | Duration of activities performed during the step that were related to the stake holder |
| trueai_act_dur_eng | FLOAT | Duration of activities performed during the step that were related to the stake holder |
| trueai_act_eng_count | INTEGER | Number of engaged activities performed during the step that were related to the stake holder |
| trueai_act_type_auto_email_count | INTEGER | Number of automated emails performed during the step that were related to the stake holder |
| trueai_act_type_auto_email_eng_count | INTEGER | Number of engaged automated emails performed during the step that were related to the stake holder |
| trueai_act_type_call_count | INTEGER | Number of calls performed during the step that were related to the stake holder |
| trueai_act_type_call_eng_count | INTEGER | Number of engaged calls performed during the step that were related to the stake holder |
| trueai_act_type_email_count | INTEGER | Number of emails performed during the step that were related to the stake holder |
| trueai_act_type_email_eng_count | INTEGER | Number of engaged emails performed during the step that were related to the stake holder |
| trueai_act_type_meeting_count | INTEGER | Number of meetings performed during the step that were related to the stake holder |
| trueai_act_type_meeting_eng_count | INTEGER | Number of engaged meetings performed during the step that were related to the stake holder |
| trueai_act_type_nd_count | INTEGER | Number of activities with unknown type performed during the step that were related to the stake holder |
| trueai_act_type_nd_eng_count | INTEGER | Number of engaged activities with unknown type performed during the step that were related to the stake holder |
| trueai_act_type_no_interaction_count | INTEGER | Number of activities with no customer interaction performed during the step that were related to the stake holder |
| trueai_act_type_no_interaction_eng_count | INTEGER | Number of engaged activities with no customer interaction performed during the step that were related to the stake holder |
| trueai_act_type_social_count | INTEGER | Number of social media activities performed during the step that were related to the stake holder |
| trueai_act_type_social_eng_count | INTEGER | Number of engaged social media activities performed during the step that were related to the stake holder |
| trueai_complt | FLOAT | Completeness score of the contact based on the standardized data |
| trueai_created_by_step_owner | BOOLEAN | Boolean flag indicating whether the contact was created by the step owner as part of the sales process |
| trueai_created_on | DATE | Contact creation date |
| trueai_creator_id | STRING | Contact creator's id |
| trueai_first_act | DATETIME | Date when the first activity was performed during the step that was related to the stake holder |
| trueai_first_eng | DATETIME | Date when the first engaged activity was performed during the step that was related to the stake holder |
| trueai_last_act | DATETIME | Date when the last activity was performed during the step that was related to the stake holder |
| trueai_last_eng | DATETIME | Date when the last engaged activity was performed during the step that was related to the stake holder |
| trueai_leadsource | STRING | Contact's standardized lead source |
| trueai_leadsource_conf | FLOAT | Contact's standardized lead source prediction confidence |
| trueai_owner_act_capt_lvl | FLOAT | Act_capture_level score of the owner of the step |
| trueai_owner_id | STRING | Contact owner's id |
| trueai_owner_prep_factor | FLOAT | Prep factor of the owner of the step |
| trueai_primary_entity_id | STRING | Id of the contact or lead corresponding to the primary stake holder |
| trueai_primary_entity_type | STRING | Entity (lead/contact) that the primary stake holder corresponds to |
| trueai_stkhld_ranking | INTEGER | The primary stake holder will have a value of 1, the secondary 2 etc. Based on the number of engagements with the contact, in decreasing order. |
| trueai_title_dept | STRING | Contact's standardized department |
| trueai_title_dept_conf | FLOAT | Contact's standardized department prediction confidence |
| trueai_title_seniority | STRING | Contact's standardized seniority |
| trueai_title_seniority_conf | FLOAT | Contact's standardized seniority prediction confidence |
