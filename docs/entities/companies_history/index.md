---
title: companies_history
---

## companies_history

This entity represents **companies_history** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| _sys_as_of | DATETIME | The date of the last data request from the platform |
| _sys_co_id | STRING | The Cien company ID |
| _sys_doc_id | STRING | Unique record identifier |
| _sys_filt_end_date | DATE | The end date of the record, stripped of time |
| _sys_filt_start_date | DATE | The start date of the record, stripped of time |
| _sys_image_size | STRING | The processing cluster imaging size |
| _sys_last_modified_on | DATETIME | The date of the last data modification in the platform |
| _sys_processed_as_of | DATETIME | The date of running the export |
| _sys_reference_date | DATETIME | The reference date used as benchmark for the calculations |
| _sys_scheduled_daily | BOOLEAN | Boolean flag indicating whether the company is scheduled daily |
| _sys_scheduled_weekly | BOOLEAN | Boolean flag indicating whether the company is scheduled weekly |
| _sys_version | STRING | The current release version |
| accounts_avg_match_conf | FLOAT | Average match confidence for accounts |
| added_on | DATETIME | Added On Date |
| co_hq_country | STRING | co_hq_country |
| co_target_geo | STRING | co_target_geo |
| co_target_market | STRING | co_target_market |
| co_type_industry | STRING | co_type_industry |
| company_currency | STRING | Company's currency |
| company_currency_symbol | STRING | Company's currency symbol |
| company_logo | STRING | Company's logo URL |
| company_name | STRING | Company name |
| consolidation_status | STRING | consolidation_status |
| contacts_avg_match_conf | FLOAT | Average match confidence for contacts |
| crm_conn_status | STRING | crm_conn_status |
| deactivated_on | DATETIME | deactivated_on |
| dev_tracked | BOOLEAN | Boolean flag indicating whether the company is dev tracked |
| di_acv_company_size_factors | OBJECT | Company size factors impacting the ACV |
| di_acv_country_factors | OBJECT | Country factors impacting the ACV |
| di_acv_industry_factors | OBJECT | Industry factors impacting the ACV |
| di_amt_won_last12months | CURRENCY | Sum of booking amounts of opportunities won in the past 12 months |
| di_pred_all_label | STRING | Overall quality score label |
| di_pred_all_score | FLOAT | Overall quality score |
| di_pred_existing_customer_selling_attempts | INTEGER | Number of datapoints used to determine the R2 score of the probability of existing customer selling win |
| di_pred_existing_customer_selling_auc | FLOAT | AUC score of the probability of existing customer selling win |
| di_pred_existing_customer_selling_avg_p_val | FLOAT | Average predicted probability of existing customer selling win |
| di_pred_existing_customer_selling_end_date | DATETIME | End of the period used to compute the R2 score of the probability of existing customer selling win |
| di_pred_existing_customer_selling_r2 | FLOAT | R2 score of the probability of existing customer selling win |
| di_pred_existing_customer_selling_r2_data | OBJECT | Coordinates data used to determine the R2 score of the probability of existing customer selling win |
| di_pred_existing_customer_selling_score | FLOAT | Quality score for existing customer selling activities |
| di_pred_existing_customer_selling_start_date | DATETIME | Start of the period used to compute the R2 score of the probability of existing customer selling win |
| di_pred_existing_customer_selling_successes | INTEGER | Number of successful outcomes in the sample used to determine the R2 score of the probability of existing customer selling win |
| di_pred_new_logo_attempts | INTEGER | Number of datapoints used to determine the R2 score of the probability of new logo win |
| di_pred_new_logo_auc | FLOAT | AUC score of the probability of new logo win |
| di_pred_new_logo_avg_p_val | FLOAT | Average predicted probability of new logo win |
| di_pred_new_logo_end_date | DATETIME | End of the period used to compute the R2 score of the probability of new logo win |
| di_pred_new_logo_r2 | FLOAT | R2 score of the probability of new logo win |
| di_pred_new_logo_r2_data | OBJECT | Coordinates data used to determine the R2 score of the probability of new logo win |
| di_pred_new_logo_score | FLOAT | Quality score for new logo selling activities |
| di_pred_new_logo_start_date | DATETIME | Start of the period used to compute the R2 score of the probability of new logo win |
| di_pred_new_logo_successes | INTEGER | Number of successful outcomes in the sample used to determine the R2 score of the probability of new logo win |
| di_pred_post_sales_attempts | INTEGER | Number of datapoints used to determine the R2 score of the probability of next opportunity creation |
| di_pred_post_sales_auc | FLOAT | AUC score of the probability of next opportunity creation |
| di_pred_post_sales_avg_p_val | FLOAT | Average predicted probability of next opportunity creation |
| di_pred_post_sales_end_date | DATETIME | End of the period used to compute the R2 score of the probability of next opportunity creation |
| di_pred_post_sales_qual_bucket_tiers | OBJECT | Tiers for the probability of next opportunity creation prediction buckets |
| di_pred_post_sales_r2 | FLOAT | R2 score of the probability of next opportunity creation |
| di_pred_post_sales_r2_data | OBJECT | Coordinates data used to determine the R2 score of the probability of next opportunity creation |
| di_pred_post_sales_score | FLOAT | Quality score for post sales support activities |
| di_pred_post_sales_start_date | DATETIME | Start of the period used to compute the R2 score of the probability of next opportunity creation |
| di_pred_post_sales_successes | INTEGER | Number of successful outcomes in the sample used to determine the R2 score of the probability of next opportunity creation |
| di_pred_prospecting_attempts | INTEGER | Number of datapoints used to determine the R2 score of the probability of conversion |
| di_pred_prospecting_auc | FLOAT | AUC score of the probability of conversion |
| di_pred_prospecting_avg_p_val | FLOAT | Average predicted probability of conversion |
| di_pred_prospecting_end_date | DATETIME | End of the period used to compute the R2 score of the probability of conversion |
| di_pred_prospecting_model_reset_on | DATETIME | Date when the probability of conversion model was last trained |
| di_pred_prospecting_qual_bucket_tiers | OBJECT | Tiers for the probability of conversion prediction buckets |
| di_pred_prospecting_r2 | FLOAT | R2 score of the probability of conversion |
| di_pred_prospecting_r2_data | OBJECT | Coordinates data used to determine the R2 score of the probability of conversion |
| di_pred_prospecting_score | FLOAT | Quality score for prospecting activities |
| di_pred_prospecting_start_date | DATETIME | Start of the period used to compute the R2 score of the probability of conversion |
| di_pred_prospecting_successes | INTEGER | Number of successful outcomes in the sample used to determine the R2 score of the probability of conversion |
| di_pred_selling_existing_customer_qual_bucket_tiers | OBJECT | Tiers for the probability of existing_customer_selling opportunity win prediction buckets |
| di_pred_selling_new_logo_qual_bucket_tiers | OBJECT | Tiers for the probability of new logo opportunity win prediction buckets |
| di_success_prob_training_score | FLOAT | Average AUC score of the success probability when training |
| di_success_prob_validation_score | FLOAT | Average AUC score of the success probability on the validation set |
| erp_conn_status | STRING | erp_conn_status |
| fiscal_year_offset | INTEGER | Fiscal year offset |
| founded_year | INTEGER | founded_year |
| geo_api_requests_accounts | INTEGER | Number of geocoding API requests sent |
| geo_api_requests_contacts | INTEGER | Number of geocoding API requests sent |
| geo_api_requests_hr_users | INTEGER | Number of geocoding API requests sent |
| geo_api_requests_leads | INTEGER | Number of geocoding API requests sent |
| geo_api_requests_users | INTEGER | Number of geocoding API requests sent |
| geo_required_accounts | INTEGER | Number of docs that require geocoding API requests |
| geo_required_contacts | INTEGER | Number of docs that require geocoding API requests |
| geo_required_hr_users | INTEGER | Number of docs that require geocoding API requests |
| geo_required_leads | INTEGER | Number of docs that require geocoding API requests |
| geo_required_users | INTEGER | Number of docs that require geocoding API requests |
| job_status | STRING | job_status |
| leads_avg_match_conf | FLOAT | Average match confidence for leads |
| matched_accounts_percentage | FLOAT | Percentage of matched accounts |
| matched_contacts_percentage | FLOAT | Percentage of matched contacts |
| matched_leads_percentage | FLOAT | Percentage of matched leads |
| min_ext_match_confidence | FLOAT | Minimum external match confidence |
| partner_base64_logo | OBJECT | Partner company logo |
| partner_co_id | STRING | Partner company ID |
| partner_name | STRING | Partner company name |
| partner_product_name | STRING | Partner company product name |
| pbi_report_links | OBJECT | PBI report page links |
| pbi_version | STRING | PBI report version |
| pbi_workspace_name | STRING | Workspace or group name in powerBI |
| pbi_workspace_url | STRING | Workspace or group url in powerBI |
| primary_contact | STRING | primary_contact |
| processing_all_last_attempt | DATETIME | Date of last attempt to run the company's processing |
| processing_all_last_success | DATETIME | Date of last successful attempt to run the company's processing |
| processing_all_last_success_time_sec | FLOAT | Time in seconds it took to run the company's processing |
| processing_api_export_last_attempt | DATETIME | Date of last attempt to run the company's API exports |
| processing_api_export_last_success | DATETIME | Date of last successful attempt to run the company's API exports |
| processing_api_export_last_success_time_sec | FLOAT | Time in seconds it took to run the company's API exports |
| processing_max_last_modified_on_act | DATETIME | Latest system modstamp date on activities |
| processing_max_last_modified_on_opp_histories | DATETIME | Latest system modstamp date on opp_histories |
| processing_max_last_modified_on_opps | DATETIME | Latest system modstamp date on opps |
| processing_max_last_modified_on_users | DATETIME | Latest system modstamp date on users |
| processing_mode | STRING | Processing mode |
| processing_post_ssr_ml_last_attempt | DATETIME | Last time the post ssr jobstep was attempted |
| processing_post_ssr_ml_last_success | DATETIME | Last time the post ssr jobstep was successful |
| processing_post_ssr_ml_last_success_time_sec | FLOAT | Time taken for the last time the post ssr jobstep was successful |
| processing_pre_ssr_ml_last_attempt | DATETIME | Last time the pre ssr jobstep was attempted |
| processing_pre_ssr_ml_last_success | DATETIME | Last time the pre ssr jobstep was successful |
| processing_pre_ssr_ml_last_success_time_sec | FLOAT | Time taken for the Last time the pre ssr jobstep was successful |
| processing_sync_last_attempt | DATETIME | Date of last attempt to run the company's sync |
| processing_sync_last_success | DATETIME | Date of last successful attempt to run the company's sync |
| processing_sync_last_success_time_sec | FLOAT | Time in seconds it took to run the company's sync |
| processing_transform_last_attempt | DATETIME | Date of last attempt to run the company's raw transform |
| processing_transform_last_success | DATETIME | Date of last successful attempt to run the company's raw transform |
| processing_transform_last_success_time_sec | FLOAT | Time in seconds it took to run the company's raw transform |
| purged_on | DATETIME | purged_on |
| ref_currency | STRING | ref_currency |
| ref_dare_potential_growth_rate | FLOAT | ref_dare_potential_growth_rate |
| region | STRING | region |
| status | STRING | STATUS |
| total_employees | INTEGER | total_employees |
| ttm_ref_date_bookings | INTEGER | TTM_ref_date_bookings |
| ttm_ref_date_revenue | INTEGER | TTM_ref_date_revenue |
| users | INTEGER | Number of users |
| users_active | INTEGER | Number of active users |
| users_hr_file | INTEGER | users_hr_file |
| users_match_hr_id | INTEGER | users_match_hr_id |
| users_match_hr_id_nd_role | INTEGER | users_match_hr_id_nd_role |
| users_non_match_hr_id_leads | INTEGER | users_non_match_hr_id_leads |
| users_non_match_hr_id_nd_group | INTEGER | users_non_match_hr_id_nd_group |
| users_non_match_hr_id_pipeline | INTEGER | users_non_match_hr_id_pipeline |
| users_non_match_hr_id_won_deals | INTEGER | users_non_match_hr_id_won_deals |
| users_sales | INTEGER | Number of active sales users |
