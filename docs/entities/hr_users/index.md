---
title: hr_users
---

## hr_users

This entity represents **hr_users** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
| crm_user_id | STRING | If matched with CRM data, the user id of that record |
| hr_addr_city | STRING | The employee's work address |
| hr_addr_country | STRING | The employee's work address |
| hr_addr_postal_code | STRING | The employee's work address |
| hr_addr_state | STRING | The employee's work address |
| hr_addr_street | STRING | The employee's work address |
| hr_classification | STRING | The employee classification (e.g. full-time, part-time) |
| hr_dept | STRING | The dept of the employee - will be used to match group |
| hr_direct_reports | INTEGER | How many direct reports? |
| hr_division | STRING | The division of the employee - will be used to match group |
| hr_email | STRING | The employee's work email |
| hr_employee_type | STRING | The type of employee |
| hr_first_name | STRING | The employee's first name |
| hr_hire_date | DATETIME | The employee's hire date |
| hr_id | STRING | The HRIS unique ID |
| hr_is_mgr | BOOLEAN | Is the employee a manager? |
| hr_is_remote | BOOLEAN | Is the employee a remote worker |
| hr_last_name | STRING | The employee's last  name |
| hr_mgr_id | STRING | The ID of the manager (can leave blank if Manager name is supplied instead) |
| hr_mgr_name | STRING | The NAME of the manager (can leave blank if Manager name is supplied instead) |
| hr_profile_url | STRING | The url to a photo of the employee |
| hr_role | STRING | The employee's work role |
| hr_status | STRING | The curent status of the employee (e.g. active, terminated etc.) |
| hr_termination_date | DATETIME | The employee's termination date. Blank if currently active |
| hr_time_zone | STRING | The employee's time zone |
| hr_title | STRING | The employee's title |
| hr_username | STRING | The user name of the employee |
| trueai_group | STRING | Specific override field that bypasses the TrueAI engine, to set a specific group. Must match existing defined groups in system |
| trueai_user_role | STRING | Specific override field that bypasses the TrueAI engine, to set a specific user role. Must match existing defined roles in classes |
