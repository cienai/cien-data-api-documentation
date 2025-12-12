---
title: activities
---

## activities

This entity represents **activities** records in the Cien platform.

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
| crm_account_id | STRING | Activity's account id in the CRM |
| crm_contact_id | STRING | Activity's contact id in the CRM |
| crm_created_on | DATETIME | Activity creation date in the CRM |
| crm_creator_id | STRING | Activity creator's id in the CRM |
| crm_description | MEMO | Activity's description in the CRM |
| crm_dur | FLOAT | Activity's duration in the CRM |
| crm_end | DATETIME | Activity's end date in the CRM |
| crm_lead_id | STRING | Activity's lead id in the CRM |
| crm_modified_by | STRING | Activity's modified by user id in the CRM |
| crm_modified_on | DATETIME | Activity's modified on date in the CRM |
| crm_name | STRING | Deprecated field |
| crm_opp_id | STRING | Activity's opp id in the CRM |
| crm_owner_id | STRING | Activity owner's id in the CRM |
| crm_performed_on | DATETIME | Activity's performed on date in the CRM |
| crm_start | DATETIME | Activity's start date in the CRM |
| crm_subject | STRING | Activity's subject in the CRM |
| crm_subtype | STRING | Activity's subtype in the CRM |
| crm_what_id | STRING | Activity's what id in the CRM |
| crm_what_type | STRING | Activity's what type in the CRM |
| crm_who_id | STRING | Activity's who id in the CRM |
| crm_who_type | STRING | Activity's who type in the CRM |
| trueai_contact_id | STRING | contactid of the activity |
| trueai_contact_id_rule | INTEGER | rule lookup for contact id |
| trueai_dur | INTEGER | Activity's duration |
| trueai_elapsed_time | FLOAT | Time passed between the previous activity and the current activity |
| trueai_eng | STRING | Activity engagement prediction |
| trueai_eng_conf | FLOAT | Activity engagement prediction confidence |
| trueai_eng_pred | FLOAT | Activity engagement probability prediction |
| trueai_lead_id | STRING | lead id of the activity |
| trueai_lead_id_rule | INTEGER | rule lookup for lead id |
| trueai_opp_id | STRING | opp id of the activity |
| trueai_opp_id_rule | INTEGER | rule lookup for the opp id |
| trueai_performed_on | DATETIME | Activity's performed on date |
| trueai_purpose | STRING | Activity purpose prediction |
| trueai_purpose_rule | INTEGER | Activity purpose prediction rule |
| trueai_related_to_entity | STRING | Entity of the object the activity is primarily related to |
| trueai_related_to_id | STRING | Id of the object the activity is primarily related to |
| trueai_type | STRING | Activity type prediction |
| trueai_type_conf | FLOAT | Activity type prediction confidence |
