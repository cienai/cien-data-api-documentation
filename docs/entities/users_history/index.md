---
title: users_history
---

## users_history

This entity represents **users_history** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| _sys_as_of | DATETIME | The last date of the month that the record applies to (for past months) or the last date of aggregated data (for the present month) |
| _sys_co_id | STRING | The Cien company ID |
| _sys_doc_id | STRING | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) and date |
| _sys_filt_end_date | DATE | The last date of the month that the record applies to (for past months) or the last date of aggregated data (for the present month), stripped of time |
| _sys_filt_start_date | DATE | The first date of the month that the records applies to, stripped of time |
| _sys_is_active | BOOLEAN | Boolean flag that indicates whether the record was set to inactive in the remote system |
| _sys_is_deleted | BOOLEAN | Boolean flag that indicates whether the record was set to deleted in the remote system |
| _sys_user_id | STRING | The ID of the document in the remote system (such as Salesforce ID) |
| ci_act_capt_lvl | FLOAT | User's act_capture_level score in the period |
| ci_act_capt_lvl_conf | FLOAT | User's act_capture_level score confidence in the period |
| ci_act_capt_lvl_pi_exist_cust_expect_owner_dur | FLOAT | Expected duration of activities performed on existing customer selling steps that completed in the period |
| ci_act_capt_lvl_pi_exist_cust_expect_owner_dur_closed_lost | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_exist_cust_expect_owner_dur_closed_won | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_exist_cust_owner_act | INTEGER | Number of owner activities performed on existing customer selling steps that completed in the period |
| ci_act_capt_lvl_pi_exist_cust_owner_act_closed_lost | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_exist_cust_owner_act_closed_won | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_exist_cust_owner_dur | FLOAT | Duration of activities performed on existing customer selling steps that completed in the period |
| ci_act_capt_lvl_pi_exist_cust_owner_dur_closed_lost | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_exist_cust_owner_dur_closed_won | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_exist_cust_steps | INTEGER | Number of existing customer selling steps that completed in the period |
| ci_act_capt_lvl_pi_exist_cust_steps_closed_lost | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_exist_cust_steps_closed_won | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_new_logo_expected_owner_dur | FLOAT | Expected duration of activities performed on new logo selling steps that completed in the period |
| ci_act_capt_lvl_pi_new_logo_expected_owner_dur_closed_lost | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_new_logo_expected_owner_dur_closed_won | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_new_logo_owner_act | INTEGER | Number of owner activities performed on new logo selling steps that completed in the period |
| ci_act_capt_lvl_pi_new_logo_owner_act_closed_lost | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_new_logo_owner_act_closed_won | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_new_logo_owner_dur | FLOAT | Duration of activities performed on new logo selling steps that completed in the period |
| ci_act_capt_lvl_pi_new_logo_owner_dur_closed_lost | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_new_logo_owner_dur_closed_won | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_new_logo_steps | INTEGER | Number of new logo selling steps that completed in the period |
| ci_act_capt_lvl_pi_new_logo_steps_closed_lost | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_new_logo_steps_closed_won | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_post_sales_expect_owner_dur | FLOAT | Expected duration of activities performed on post-sales support steps that completed in the period |
| ci_act_capt_lvl_pi_post_sales_expect_owner_dur_churned | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_post_sales_expect_owner_dur_sell_start | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_post_sales_expect_owner_dur_upsell_start | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_post_sales_owner_act | INTEGER | Number of owner activities performed on post-sales support steps that completed in the period |
| ci_act_capt_lvl_pi_post_sales_owner_act_churned | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_post_sales_owner_act_sell_start | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_post_sales_owner_act_upsell_start | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_post_sales_owner_dur | FLOAT | Duration of activities performed on post-sales support steps that completed in the period |
| ci_act_capt_lvl_pi_post_sales_owner_dur_churned | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_post_sales_owner_dur_sell_start | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_post_sales_owner_dur_upsell_start | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_post_sales_steps | INTEGER | Number of post-sales support steps that completed in the period |
| ci_act_capt_lvl_pi_post_sales_steps_churned | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_post_sales_steps_sell_start | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_post_sales_steps_upsell_start | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_prospecting_expect_owner_dur | FLOAT | Expected duration of activities performed on prospecting steps that completed in the period |
| ci_act_capt_lvl_pi_prospecting_expect_owner_dur_abandoned | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_prospecting_expect_owner_dur_converted | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_prospecting_expect_owner_dur_disqual | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_prospecting_owner_act | INTEGER | Number of owner activities performed on prospecting steps that completed in the period |
| ci_act_capt_lvl_pi_prospecting_owner_act_abandoned | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_prospecting_owner_act_converted | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_prospecting_owner_act_disqual | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_prospecting_owner_dur | FLOAT | Duration of activities performed on prospecting steps that completed in the period |
| ci_act_capt_lvl_pi_prospecting_owner_dur_abandoned | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_prospecting_owner_dur_converted | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_prospecting_owner_dur_disqual | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_prospecting_steps | INTEGER | Number of prospecting steps that completed in the period |
| ci_act_capt_lvl_pi_prospecting_steps_abandoned | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_prospecting_steps_converted | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_prospecting_steps_disqual | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_timeliness | FLOAT | User's timeliness score in the period |
| ci_act_capt_lvl_pi_tot_expect_owner_dur | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_tot_owner_act | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_tot_owner_dur | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_tot_steps | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_upselling_expect_owner_dur | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_upselling_expect_owner_dur_closed_lost | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_upselling_expect_owner_dur_closed_won | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_upselling_owner_act | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_upselling_owner_act_closed_lost | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_upselling_owner_act_closed_won | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_upselling_owner_dur | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_upselling_owner_dur_closed_lost | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_upselling_owner_dur_closed_won | FLOAT | Deprecated field |
| ci_act_capt_lvl_pi_upselling_steps | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_upselling_steps_closed_lost | INTEGER | Deprecated field |
| ci_act_capt_lvl_pi_upselling_steps_closed_won | INTEGER | Deprecated field |
| ci_act_capt_lvl_raw | FLOAT | Deprecated field |
| ci_perf_qtly_avg_bookings_peers | CURRENCY | Average quarterly sum of the booking amounts of opportunities won by the user's peers in the period |
| ci_perf_qtly_avg_pipeline_peers | CURRENCY | Average quarterly sum of the booking amounts of opportunities created by the user's peers in the period |
| ci_perf_qtly_bookings_user | CURRENCY | Quarterly sum of the booking amounts of opportunities won by the user in the period |
| ci_perf_qtly_performance_peer_count | INTEGER | Number of peers the user was compared to when determining the performance tier |
| ci_perf_qtly_performance_tier | STRING | User's performance tier expressed as "underperformer", "overperformer" or "performer", based on their quarterly sum of booking amounts of won opportunities compared to their peers |
| ci_perf_qtly_performance_tier_conf | FLOAT | User's performance tier confidence |
| ci_perf_qtly_performance_tier_num | INTEGER | User's performance tier expressed as an integer from 1 to 3, based on their quarterly sum of booking amounts of won opportunities compared to their peers |
| ci_perf_qtly_pipeline_user | CURRENCY | Quarterly sum of the booking amounts of opportunities created by the user in the period |
| ci_perf_ramping_status | STRING | User's ramping status indicating whether the user's tenure is lower than 6 months |
| ci_sb_close_ability | STRING | Deprecated field |
| ci_sb_close_ability_conf | FLOAT | Deprecated field |
| ci_sb_close_ability_num | FLOAT | Deprecated field |
| ci_sb_closing_ability | FLOAT | Deprecated field |
| ci_sb_closing_ability_actual_vs_predicted | FLOAT | The ratio between actual and expected success rate. Over 1 indicates an overperformance, lower than 1 indicates underperformance. |
| ci_sb_closing_ability_actual_vs_predicted_norm | FLOAT | Deprecated field |
| ci_sb_closing_ability_actual_vs_predicted_smooth | FLOAT | Deprecated field |
| ci_sb_closing_ability_conf | FLOAT | The confidence value based on the number of actual samples vs. number of expected samples, adjusted with an exponent factor. |
| ci_sb_closing_ability_conf_expected_sample_count | INTEGER | Deprecated field |
| ci_sb_closing_ability_num | FLOAT | Closing ability final score as compared to peers. |
| ci_sb_closing_ability_opps_closed_count | FLOAT | Deprecated field |
| ci_sb_closing_ability_opps_closed_prob_sum | FLOAT | Deprecated field |
| ci_sb_closing_ability_opps_won_count | FLOAT | Deprecated field |
| ci_sb_closing_ability_peer_actual_vs_pred_ratio_derived_max | FLOAT | Two standard deviations above the mean of the average vs expected success rate of the peer group. |
| ci_sb_closing_ability_peer_actual_vs_pred_ratio_derived_min | FLOAT | Two standard deviations below the mean of the average vs expected success rate of the peer group. |
| ci_sb_closing_ability_peer_actual_vs_predicted | FLOAT | Mean of the average vs expected success rate of the peer group. |
| ci_sb_closing_ability_peer_opps_closed_count | FLOAT | Deprecated field |
| ci_sb_closing_ability_peer_opps_closed_prob | FLOAT | Deprecated field |
| ci_sb_closing_ability_peer_opps_won_count | FLOAT | Deprecated field |
| ci_sb_closing_ability_tier | STRING | Closing ability final score tier as compared to peers. |
| ci_sb_deal_maxing | FLOAT | Deprecated field |
| ci_sb_deal_maxing_actual_vs_predicted | FLOAT | The ratio between actual and expected success rate. Over 1 indicates an overperformance, lower than 1 indicates underperformance. |
| ci_sb_deal_maxing_conf | FLOAT | The confidence value based on the number of actual samples vs. number of expected samples, adjusted with an exponent factor. |
| ci_sb_deal_maxing_num | FLOAT | Deal maximizing final score as compared to peers. |
| ci_sb_deal_maxing_peer_actual_vs_pred_ratio_derived_max | FLOAT | Two standard deviations above the mean of the average vs expected success rate of the peer group. |
| ci_sb_deal_maxing_peer_actual_vs_pred_ratio_derived_min | FLOAT | Two standard deviations below the mean of the average vs expected success rate of the peer group. |
| ci_sb_deal_maxing_peer_actual_vs_predicted | FLOAT | Mean of the average vs expected success rate of the peer group. |
| ci_sb_deal_maxing_tier | STRING | Deal maximizing final score tier as compared to peers. |
| ci_sb_disc_skills | STRING | Deprecated field |
| ci_sb_disc_skills_conf | FLOAT | Deprecated field |
| ci_sb_disc_skills_num | FLOAT | Deprecated field |
| ci_sb_discov_skills | FLOAT | Deprecated field |
| ci_sb_discov_skills_actual_vs_predicted | FLOAT | The ratio between actual and expected success rate. Over 1 indicates an overperformance, lower than 1 indicates underperformance. |
| ci_sb_discov_skills_actual_vs_predicted_norm | FLOAT | Deprecated field |
| ci_sb_discov_skills_actual_vs_predicted_smooth | FLOAT | Deprecated field |
| ci_sb_discov_skills_conf | FLOAT | The confidence value based on the number of actual samples vs. number of expected samples, adjusted with an exponent factor. |
| ci_sb_discov_skills_conf_expected_sample_count | FLOAT | Deprecated field |
| ci_sb_discov_skills_hatleads_closed_count | FLOAT | Deprecated field |
| ci_sb_discov_skills_hatleads_closed_prob_sum | FLOAT | Deprecated field |
| ci_sb_discov_skills_hatleads_converted_count | FLOAT | Deprecated field |
| ci_sb_discov_skills_num | FLOAT | Discovery skills final score as compared to peers. |
| ci_sb_discov_skills_peer_actual_vs_pred_ratio_derived_max | FLOAT | Two standard deviations above the mean of the average vs expected success rate of the peer group. |
| ci_sb_discov_skills_peer_actual_vs_pred_ratio_derived_min | FLOAT | Two standard deviations below the mean of the average vs expected success rate of the peer group. |
| ci_sb_discov_skills_peer_actual_vs_predicted | FLOAT | Mean of the average vs expected success rate of the peer group. |
| ci_sb_discov_skills_peer_actual_vs_predicted_ratio_max | FLOAT | Deprecated field |
| ci_sb_discov_skills_peer_actual_vs_predicted_ratio_min | FLOAT | Deprecated field |
| ci_sb_discov_skills_peer_hatleads_closed_count | FLOAT | Deprecated field |
| ci_sb_discov_skills_peer_hatleads_closed_prob_sum | FLOAT | Deprecated field |
| ci_sb_discov_skills_peer_hatleads_converted_count | FLOAT | Deprecated field |
| ci_sb_discov_skills_peer_post_sales_steps | FLOAT | Deprecated field |
| ci_sb_discov_skills_peer_post_sales_steps_prob | FLOAT | Deprecated field |
| ci_sb_discov_skills_peer_post_sales_steps_sell_start | FLOAT | Deprecated field |
| ci_sb_discov_skills_peer_post_sales_steps_upsell_start | FLOAT | Deprecated field |
| ci_sb_discov_skills_peer_recycled_steps | FLOAT | Deprecated field |
| ci_sb_discov_skills_peer_recycled_steps_converted | FLOAT | Deprecated field |
| ci_sb_discov_skills_peer_recycled_steps_prob | FLOAT | Deprecated field |
| ci_sb_discov_skills_post_sales_steps | INTEGER | Deprecated field |
| ci_sb_discov_skills_post_sales_steps_prob | FLOAT | Deprecated field |
| ci_sb_discov_skills_post_sales_steps_sell_start | INTEGER | Deprecated field |
| ci_sb_discov_skills_post_sales_steps_upsell_start | INTEGER | Deprecated field |
| ci_sb_discov_skills_recycled_steps | INTEGER | Deprecated field |
| ci_sb_discov_skills_recycled_steps_converted | INTEGER | Deprecated field |
| ci_sb_discov_skills_recycled_steps_prob | FLOAT | Deprecated field |
| ci_sb_discov_skills_tier | STRING | Discovery skills final score tier as compared to peers. |
| ci_sb_engmt_ability | FLOAT | Deprecated field |
| ci_sb_engmt_ability_actual_vs_predicted | FLOAT | The ratio between actual and expected success rate. Over 1 indicates an overperformance, lower than 1 indicates underperformance. |
| ci_sb_engmt_ability_conf | FLOAT | The confidence value based on the number of actual samples vs. number of expected samples, adjusted with an exponent factor. |
| ci_sb_engmt_ability_num | FLOAT | Engagement ability final score as compared to peers. |
| ci_sb_engmt_ability_peer_actual_vs_pred_ratio_derived_max | FLOAT | Two standard deviations above the mean of the average vs expected success rate of the peer group. |
| ci_sb_engmt_ability_peer_actual_vs_pred_ratio_derived_min | FLOAT | Two standard deviations below the mean of the average vs expected success rate of the peer group. |
| ci_sb_engmt_ability_peer_actual_vs_predicted | FLOAT | Mean of the average vs expected success rate of the peer group. |
| ci_sb_engmt_ability_tier | STRING | Engagement ability final score tier as compared to peers. |
| ci_sb_time_mgmt | STRING | Deprecated field |
| ci_sb_time_mgmt_conf | FLOAT | Deprecated field |
| ci_sb_time_mgmt_num | FLOAT | Deprecated field |
| ci_sb_work_effort | FLOAT | Deprecated field |
| ci_sb_work_effort_actual_vs_predicted | FLOAT | The ratio between actual and expected success rate. Over 1 indicates an overperformance, lower than 1 indicates underperformance. |
| ci_sb_work_effort_conf | FLOAT | The confidence value based on the number of actual samples vs. number of expected samples, adjusted with an exponent factor. |
| ci_sb_work_effort_num | FLOAT | Work effort final score as compared to peers. |
| ci_sb_work_effort_peer_actual_vs_pred_ratio_derived_max | FLOAT | Two standard deviations above the mean of the average vs expected success rate of the peer group. |
| ci_sb_work_effort_peer_actual_vs_pred_ratio_derived_min | FLOAT | Two standard deviations below the mean of the average vs expected success rate of the peer group. |
| ci_sb_work_effort_peer_actual_vs_predicted | FLOAT | Mean of the average vs expected success rate of the peer group. |
| ci_sb_work_effort_tier | STRING | Work effort final score tier as compared to peers. |
| ci_time_alloc_act_capt_lvl_adjustment | FLOAT | act_capture_level adjustment factor to account for the user's act_capture_level score |
| ci_time_alloc_conf | FLOAT | User's time allocation values confidence in the period |
| ci_time_alloc_existing_customer_selling | FLOAT | Average number of weekly hours the user spent on existing customer selling activities in the period |
| ci_time_alloc_existing_customer_selling_dur | FLOAT | Deprecated field |
| ci_time_alloc_existing_customer_selling_eng | FLOAT | Average number of weekly hours the user spent on engaged existing customer selling activities in the period |
| ci_time_alloc_existing_customer_selling_eng_dur | FLOAT | Deprecated field |
| ci_time_alloc_internal | FLOAT | Average number of weekly hours the user spent on internal activities in the period |
| ci_time_alloc_internal_dur | FLOAT | Deprecated field |
| ci_time_alloc_internal_eng | FLOAT | Average number of weekly hours the user spent on engaged internal activities in the period |
| ci_time_alloc_internal_eng_dur | FLOAT | Deprecated field |
| ci_time_alloc_month_to_week_adjustment | FLOAT | Week adjustment factor to convert monthly to weekly |
| ci_time_alloc_new_logo | FLOAT | Average number of weekly hours the user spent on new logo selling activities in the period |
| ci_time_alloc_new_logo_dur | FLOAT | Deprecated field |
| ci_time_alloc_new_logo_eng | FLOAT | Average number of weekly hours the user spent on engaged new logo selling activities in the period |
| ci_time_alloc_new_logo_eng_dur | FLOAT | Deprecated field |
| ci_time_alloc_post_sales | FLOAT | Average number of weekly hours the user spent on post-sales support activities in the period |
| ci_time_alloc_post_sales_dur | FLOAT | Deprecated field |
| ci_time_alloc_post_sales_eng | FLOAT | Average number of weekly hours the user spent on engaged post-sales support activities in the period |
| ci_time_alloc_post_sales_eng_dur | FLOAT | Deprecated field |
| ci_time_alloc_potential | FLOAT | Potential number of hours a user can put in during a given month |
| ci_time_alloc_prep_adjustment | FLOAT | Prep adjustment factor to account for the preparation time needed apart from sales related activities |
| ci_time_alloc_prospecting | FLOAT | Average number of weekly hours the user spent on prospecting activities in the period |
| ci_time_alloc_prospecting_dur | FLOAT | Deprecated field |
| ci_time_alloc_prospecting_eng | FLOAT | Average number of weekly hours the user spent on engaged prospecting activities in the period |
| ci_time_alloc_prospecting_eng_dur | FLOAT | Deprecated field |
| ci_time_alloc_tot | FLOAT | Average number of weekly hours the user spent on activities in the period |
| ci_time_alloc_tot_dur | FLOAT | Duration of the activities the user performed in the period |
| ci_time_alloc_tot_eng | FLOAT | Average number of weekly hours the user spent on engaged activities in the period |
| ci_time_alloc_tot_eng_dur | FLOAT | Duration of the engaged activities the user performed in the period |
| ci_time_alloc_tot_selling | FLOAT | Average number of weekly hours the user spent on sales related activities in the period |
| ci_time_alloc_tot_selling_dur | FLOAT | Deprecated field |
| ci_time_alloc_tot_selling_eng | FLOAT | Average number of weekly hours the user spent on engaged sales related activities in the period |
| ci_time_alloc_tot_selling_eng_dur | FLOAT | Deprecated field |
| ci_time_alloc_upselling | FLOAT | Deprecated field |
| ci_time_alloc_upselling_dur | FLOAT | Deprecated field |
| ci_time_alloc_upselling_eng | FLOAT | Deprecated field |
| ci_time_alloc_upselling_eng_dur | FLOAT | Deprecated field |
| crm_addr_city | FLOAT | Deprecated field |
| crm_addr_country | FLOAT | Deprecated field |
| crm_addr_postal_code | FLOAT | Deprecated field |
| crm_addr_state | FLOAT | Deprecated field |
| crm_addr_street | FLOAT | Deprecated field |
| crm_created_on | DATETIME | User's creation date in the CRM |
| crm_creator_id | FLOAT | Deprecated field |
| crm_dept | FLOAT | Deprecated field |
| crm_division | FLOAT | Deprecated field |
| crm_email | FLOAT | Deprecated field |
| crm_first_name | FLOAT | Deprecated field |
| crm_language_locale | FLOAT | Deprecated field |
| crm_last_login_time | DATETIME | User's last login time in the CRM |
| crm_last_name | FLOAT | Deprecated field |
| crm_locale | FLOAT | Deprecated field |
| crm_mgr_id | FLOAT | Deprecated field |
| crm_profile_url | FLOAT | Deprecated field |
| crm_role | FLOAT | Deprecated field |
| crm_time_zone | FLOAT | Deprecated field |
| crm_title | FLOAT | Deprecated field |
| crm_user_type | FLOAT | Deprecated field |
| crm_username | FLOAT | Deprecated field |
| trueai_billable | FLOAT | Deprecated field |
| trueai_direct_reports | FLOAT | Deprecated field |
| trueai_end_date | DATE | The date of the last data request from the platform in UTC |
| trueai_group | STRING | User's group |
| trueai_group_conf | FLOAT | Deprecated field |
| trueai_hire_date | DATETIME | User's hire date |
| trueai_is_mgr | FLOAT | Deprecated field |
| trueai_mgr_id | FLOAT | Deprecated field |
| trueai_mgr_id_conf | FLOAT | Deprecated field |
| trueai_mgr_ids | FLOAT | Deprecated field |
| trueai_role | FLOAT | Deprecated field |
| trueai_role_conf | FLOAT | Deprecated field |
| trueai_tenure | INTEGER | Number of months since the user's hire date |
| trueai_termination_date | DATETIME | User's termination date |
| trueai_title | FLOAT | Deprecated field |
| trueai_title_conf | FLOAT | Deprecated field |
| trueai_tot_reports | FLOAT | Deprecated field |
| trueai_user_behavior | FLOAT | Deprecated field |
| trueai_user_behavior_conf | FLOAT | Deprecated field |
| trueai_user_role | STRING | User's standardized and combined role |
| trueai_user_role_alias | STRING | User's standardized and combined role aliased |
| trueai_user_role_dept | STRING | User's department derived from the standardized and combined role |
| trueai_user_role_function | STRING | User's function derived from the standardized and combined role |
| vi_value_created_leads_and_accounts | CURRENCY | Deprecated field |
| vi_value_created_leads_and_accounts_lead_gen | CURRENCY | Deprecated field |
| vi_value_created_leads_and_accounts_repeat | CURRENCY | Deprecated field |
| vi_value_created_leads_and_accounts_repeat_existing_customer | CURRENCY | Deprecated field |
| vi_value_created_leads_and_accounts_repeat_new_logo | CURRENCY | Deprecated field |
| vi_value_created_preselling | CURRENCY | Deprecated field |
| vi_value_created_preselling_post_sales | CURRENCY | Deprecated field |
| vi_value_created_preselling_prospecting | CURRENCY | Deprecated field |
| vi_value_created_selling | CURRENCY | Deprecated field |
| vi_value_created_selling_existing_customer | CURRENCY | Deprecated field |
| vi_value_created_selling_new_logo | CURRENCY | Deprecated field |
| vi_value_created_selling_upselling | CURRENCY | Deprecated field |
| vi_value_created_tot | CURRENCY | Deprecated field |
| vi_value_delivered_expect | CURRENCY | Deprecated field |
| vi_value_delivered_leads_and_accounts | CURRENCY | Deprecated field |
| vi_value_delivered_leads_and_accounts_lead_gen | CURRENCY | Deprecated field |
| vi_value_delivered_leads_and_accounts_repeat | CURRENCY | Deprecated field |
| vi_value_delivered_leads_and_accounts_repeat_existing_customer | CURRENCY | Deprecated field |
| vi_value_delivered_leads_and_accounts_repeat_new_logo | CURRENCY | Deprecated field |
| vi_value_delivered_potential | CURRENCY | Deprecated field |
| vi_value_delivered_preselling | CURRENCY | Deprecated field |
| vi_value_delivered_preselling_post_sales | CURRENCY | Deprecated field |
| vi_value_delivered_preselling_prospecting | CURRENCY | Deprecated field |
| vi_value_delivered_selling | CURRENCY | Deprecated field |
| vi_value_delivered_selling_existing_customer | CURRENCY | Deprecated field |
| vi_value_delivered_selling_new_logo | CURRENCY | Deprecated field |
| vi_value_delivered_selling_upselling | CURRENCY | Deprecated field |
| vi_value_delivered_tot | CURRENCY | Deprecated field |
| vi_value_received_for_preselling | CURRENCY | Deprecated field |
| vi_value_received_for_preselling_post_sales | CURRENCY | Deprecated field |
| vi_value_received_for_preselling_prospecting | CURRENCY | Deprecated field |
| vi_value_received_for_selling | CURRENCY | Deprecated field |
| vi_value_received_for_selling_existing_customer | CURRENCY | Deprecated field |
| vi_value_received_for_selling_new_logo | CURRENCY | Deprecated field |
| vi_value_received_for_selling_upselling | CURRENCY | Deprecated field |
| vi_value_received_tot | CURRENCY | Deprecated field |
