---
title: Rules
---

metadata_classes
model label
user_role_function AM
Coming soon: the comprehensive rule list, naming conventions, and special fields.
move createdon back
OppsCreatedon END_OPPS_CLOSED_ON_EARLER_THAN_CR
EATEDON
14 Opp CRM createdon becomes the
created date
OppsCreatedon END_OPPS_CRM_CREATEDON
15 Opp history stages present before the
createdon, move createdon back
OppsCreatedon END_OPPS_FIRST_HISTORY_STAGE
16 Opp creator is the creator in th CRM OppsCreatorid CREATOR_OPPS_CRM_CREATORID
17 Opps creator is the owner of the
hatlead
OppsCreatorid CREATOR_OPPS_HATLEAD_OWNERID
18 Lead is converted, close date is
converted_date
LeadsCloseDate END_LEADS_CRM_CONVERTED
19 Lead is disquali fi ed, close date is last
touched date if touched, and
createdon if not, adding 30 days if only
one touch to have &gt; 0 prospecting
days
LeadsCloseDate END_LEADS_DISQUALIFIED
20 Lead is ignored: no activity within
creation date + 180 days, close date is
createdon + 180 days
LeadsCloseDate END_LEADS_NO_ACTIVITY_RECORDED_IN_
CREATION_PLUS_180_DAYS
21 Lead is abandoned: no further activity
within last touch + 150 days, close date
is last touch + 150 days
LeadsCloseDate END_LEADS_NO_MORE_ACTIVITES_DETECT
ED_IN_150_DAYS
22 Lead is still open, close date is None LeadsCloseDate END_LEADS_STILL_OPEN
23 Account is converted, close date is
converted_date
AccountsCloseDat
e
END_ACCOUNTS_CRM_CONVERTED
24 Account is ignored: no activity within
creation date + 180 days, close date is
createdon + 180 days
AccountsCloseDat
e
END_ACCOUNTS_NO_ACTIVITY_RECORDED
_IN_CREATION_PLUS_180_DAYS
rule_list
_sys_docid description model rule_name
25 Account is abandoned: no further
activity within last touch + 150 days,
close date is last touch + 150 days
AccountsCloseDat
e
END_ACCOUNTS_NO_MORE_ACTIVITES_DE
TECTED_IN_150_DAYS
26 Account is still open, close date is
None
AccountsCloseDat
e
END_ACCOUNTS_STILL_OPEN
27 Opp is CRM closed: is_closed is True
and close date &lt; asof, returning
crm_close_date
OppsCloseDate END_OPPS_CRM_CLOSED
28 Opps is still open in CRM, close date is
None
OppsCloseDate END_OPPS_NOT_CLOSED
29 Opps is closed in the CRM but the
close date is in the future, so the opp
remains open asof now, close date is
None
OppsCloseDate END_OPPS_CLOSE_DATE_IN_THE_FUTURE
30 Lead is a not a hatlead, returning None LeadsFirstTouch END_LEADS_NOT_HATLEAD
31 First touch is performedon of the fi rst
activity
LeadsFirstTouch END_LEADS_FIRST_ACTIVITY_RECORDED
32 No activities but lead converted,
returning createdon
LeadsFirstTouch END_LEADS_NO_ACTIVITIES_BUT_CONVER
TED
33 No activities but lead disquali fi ed,
returning createdon
LeadsFirstTouch END_LEADS_NO_ACTIVITIES_BUT_DISQUAL
IFIED
34 No activities and lead is not converted
nor disquali fi ed, therefore untouched
LeadsFirstTouch END_LEADS_UNTOUCHED
35 No activities but crm last activity time
present, user middle between
createdon and last activity time as fi rst
touch
LeadsFirstTouch END_LEADS_NO_ACTIVITES_USE_MIDDLE_B
ETWEEN_CREATED_AND_CRM_LAST_ACTIVI
TY
36 Account is a not a hatlead, returning
None
AccountsFirstTouc
h
END_ACCOUNTS_NOT_HATLEAD
37 First touch is performedon of the fi rst
activity
AccountsFirstTouc
h
END_ACCOUNTS_FIRST_ACTIVITY_RECORD
ED
rule_list
_sys_docid description model rule_name
38 No activities but account converted,
returning createdon
AccountsFirstTouc
h
END_ACCOUNTS_NO_ACTIVITIES_BUT_CON
VERTED
39 No activities and account is not
converted nor disquali fi ed, therefore
untouched
AccountsFirstTouc
h
END_ACCOUNTS_UNTOUCHED
40 No activities but crm last activity time
present, user middle between
createdon and last activity time as fi rst
touch
AccountsFirstTouc
h
END_ACCOUNTS_NO_ACTIVITES_USE_MID
DLE_BETWEEN_CREATED_AND_CRM_LAST_
ACTIVITY
41 Lead is a not a hatlead, returning None LeadsLastTouch END_LEADS_NOT_HATLEAD
42 Last touch is performedon of the last
activity
LeadsLastTouch END_LEADS_LAST_ACTIVITY_RECORDED
43 No activities but lead converted,
returning createdon
LeadsLastTouch END_LEADS_NO_ACTIVITIES_BUT_CONVER
TED
44 No activities but lead disquali fi ed,
returning createdon
LeadsLastTouch END_LEADS_NO_ACTIVITIES_BUT_DISQUAL
IFIED
45 No activities and lead is not converted
nor disquali fi ed, therefore untouched
LeadsLastTouch END_LEADS_UNTOUCHED
46 No activities but crm last activity time
present, user middle last activity time
as last touch
LeadsLastTouch END_LEADS_NO_ACTIVITES_USE_CRM_LAS
T_ACTIVITY
47 Account is a not a hatlead, returning
None
AccountsLastTouc
h
END_ACCOUNTS_NOT_HATLEAD
48 Last touch is performedon of the last
activity
AccountsLastTouc
h
END_ACCOUNTS_LAST_ACTIVITY_RECORDE
D
49 No activities but account converted,
returning createdon
AccountsLastTouc
h
END_ACCOUNTS_NO_ACTIVITIES_BUT_CON
VERTED
50 No activities but account disquali fi ed,
returning createdon
AccountsLastTouc
h
END_ACCOUNTS_NO_ACTIVITIES_BUT_DIS
QUALIFIED
rule_list
_sys_docid description model rule_name
51 No activities and account is not
converted nor disquali fi ed, therefore
untouched
AccountsLastTouc
h
END_ACCOUNTS_UNTOUCHED
52 No activities but crm last activity time
present, user middle last activity time
as last touch
AccountsLastTouc
h
END_ACCOUNTS_NO_ACTIVITES_USE_CRM
_LAST_ACTIVITY
53 Lead is a contact, not lead, converted
date is None
LeadsConvertedD
ate
END_LEADS_LEAD_IS_CONTACT
54 Opp is closed before createdon, ae
date set to close date
OppsAeDate END_OPPS_CLOSED_BEFORE_CREATEDON
55 Opp has history stages present before
createdon, ae date set to close date
OppsAeDate END_OPPS_HISTORY_STAGES_BEFORE_CRE
ATEDON
56 Opp hando ff happened at opp
creation date, ae date set to createdon
OppsAeDate END_OPPS_NO_HANDOFF_RETURNING_ML
_CREATEDON
57 Opp hando ff from SDR to AE
happened on the date of the AE's fi rst
activity on the lead
OppsAeDate END_OPPS_HANDOFF_BEFORE_OPP_CREA
TION
58 Opp hando ff from SDR to AE
happened on the date of the AE's fi rst
activity on the opp.
OppsAeDate END_OPPS_HANDOFF_AFTER_OPP_CREATI
ON
59 New lead created, the the outcome is
'untouched' till activities performed
SsrSsrHistory OUTCOME_NEW_LEAD_CREATED
60 New account created, the the outcome
is 'untouched' till activities performed
SsrSsrHistory OUTCOME_NEW_ACCOUNT_CREATED
61 Lead ignored: no activity in 180 days
since creation
SsrSsrHistory OUTCOME_IGNORED_NO_ACTIVITIES_IN_C
REATEDON_PLUS_180_DAYS
62 Lead prospecting started: fi rst_touch is
not None
SsrSsrHistory OUTCOME_PROSPECTING_ACTIVITY_RECO
RDED
63 Lead disquali fi ed SsrSsrHistory OUTCOME_LEAD_DISQUALIFIED
64 Lead converted SsrSsrHistory OUTCOME_LEAD_CONVERTED
rule_list
_sys_docid description model rule_name
65 Lead abandoned: no activities in 150
days since last touched
SsrSsrHistory OUTCOME_ABANDONED_NO_MORE_ACTIV
ITES_IN_150_DAYS
66 Opp won in CRM SsrSsrHistory OUTCOME_CRM_ISWON_FLAG_SET_TRUE
67 Opp lost in CRM SsrSsrHistory OUTCOME_CRM_ISWON_FLAG_SET_FALSE
68 Postselling successful: upsell opp is
created
SsrSsrHistory OUTCOME_POSTSELLING_UPSELLING_STA
RTED
69 Postselling failed: no upsell opp
created and activities stopped
SsrSsrHistory OUTCOME_POSTSELLING_CHURNED
70 Restarting prospecting succeeded:
another new logo created
SsrSsrHistory OUTCOME_RECYCLED_PROSPECTING_REST
ARTED_NEW_LOGO
71 Restarting prospecting failed: no more
opps created and activities stopped
SsrSsrHistory OUTCOME_RECYCLED_PROSPECTING_SELL
ING_ABANDONED
72 Postselling ends after a number of full
years without upsell creation
SsrSsrHistory END_POSTSELLING_CHURNED_LAST_WON
_OPP_PLUS_FULL_YEARS
73 Restarting prospecting ends after a
number of full years without another
new logo creation
SsrSsrHistory END_RECYCLED_PROSPECTING_LAST_LOST
_NEW_LOGO_PLUS_FULL_YEARS
74 Lead CRM creator becomes the owner SsrSsrHistory OWNERSHIP_LEADS_CRM_CREATOR
75 Account CRM creator becomes the
owner
SsrSsrHistory OWNERSHIP_ACCOUNTS_CRM_CREATOR
76 Account owner is the CRM owner SsrSsrHistory OWNERSHIP_ACCOUNTS_CRM_OWNER
77 Selling started at or after the CRM opp
creation date, so the CRM creator of
the opp becomes the owner
SsrSsrHistory OWNERSHIP_ACCOUNTS_CRM_OPP_CREAT
OR_SELLING_STARTED_AT_OR_AFTER_OPP_
CREATION
78 Account owner overridden by owner
of the most activities
SsrSsrHistory OWNERSHIP_ACCOUNTS_CRM_OWNER_OV
ERRIDDEN_BY_ACT_COUNT
79 Adjusted duration based on expected
duration because owner activity
capture level not present or too low
SsrSsrHistory ADJUSTED_DURATION_NOT_ENOUGH_ACT
IVITY_CAPTURE_LEVEL
rule_list
_sys_docid description model rule_name
80 Adjusted duration based on expected
duration from industry defaults
because owner activity capture level
not present or too low and not enough
representative reps
SsrSsrHistory ADJUSTED_DURATION_NOT_ENOUGH_ACT
IVITY_CAPTURE_LEVEL_AND_USED_INDUST
RY_DEFAULT
81 Adjusted duration based on duration
because owner activity capture level
present and high enough and most
activities are performed by the owner
SsrSsrHistory ADJUSTED_DURATION_ENOUGH_ACTIVITY_
CAPTURE_LEVEL_AND_MOST_DURATION_B
Y_OWNER
82 Adjusted duration based on duration
because owner activity capture level
present and high enough but most
activities are not performed by the
owner
SsrSsrHistory ADJUSTED_DURATION_ENOUGH_ACTIVITY_
CAPTURE_LEVEL_BUT_MOST_DURATION_N
OT_BY_OWNER
83 Opp booking amount absent,
returning the last present booking
amount in opp history
OppsPredBooking
Amt
BOOKING_AMT_FROM_HISTORY
84 Opp booking amount absent and no
booking amount present in opp
history, returning the meadian across
similar opps
OppsPredBooking
Amt
BOOKING_AMT_FEAT_COMB_MEDIAN
85 Opp booking amount absent and no
booking amount present in opp
history, returning the meadian across
all opps
OppsPredBooking
Amt
BOOKING_AMT_FEAT_OVERALL_MEDIAN
86 Returning opp trueai booking amount OppsPredBooking
Amt
ML_BOOKING_AMT
87 Account type determined as internal ActivitiesInteractio
nPurpose
ACCOUNT_TYPE_INTERNAL
88 Activity performed before hat lead
created date, and hatlead untouched,
becomes internal
ActivitiesInteractio
nPurpose
BEFORE_HATLEAD_CREATION_AND_HATLE
AD_UNTOUCHED
89 Activity performed before hat lead
close date, becomes prospecting
ActivitiesInteractio
nPurpose
BEFORE_HATLEAD_CLOSE_DATE
rule_list
_sys_docid description model rule_name
90 Oppid present, activity performed
after won close date, or after upsell
lost close date, becomes post sales
support
ActivitiesInteractio
nPurpose
OPPID_WON_AFTER_CLOSE_DATE_OR_LOS
T_UPSELL
91 Oppid present, activity performed
after new logo lost close date,
becomes recycled prospecting
ActivitiesInteractio
nPurpose
OPPID_NL_LOST_AFTER_CLOSE_DATE
92 Oppid present, activity performed
before close date, or before selling
start date with no previous opps
closed, becomes New Logo
Selling/Upselling
ActivitiesInteractio
nPurpose
OPPID_BEFORE_CLOSE_DATE_OR_BEFORE_
AE_DATE_BUT_NO_PREV_CLOSED_OPPS
93 Oppid present, activity performed
before selling start date, with previous
opps won, becomes post sales support
ActivitiesInteractio
nPurpose
OPPID_BUT_BEFORE_AE_DATE_WITH_PREV
_WON_OPPS
94 Oppid present, activity performed
before selling start date, becomes
recycled prospecting
ActivitiesInteractio
nPurpose
OPPID_BUT_BEFORE_AE_DATE_WITH_PREV
_CLOSED_OPPS_NOT_WON
95 Oppid absent, but one open opp
present, becomes New Logo
Selling/Upselling
ActivitiesInteractio
nPurpose
NO_OPPID_ONE_OPEN_OPP
96 Oppid absent, but one open opp by
activity owner present, becomes New
Logo Selling/Upselling
ActivitiesInteractio
nPurpose
NO_OPPID_ONE_OPEN_OPP_BY_ACT_OWN
ER
97 Oppid absent, but one open opp that
is later won present, becomes New
Logo Selling/Upselling
ActivitiesInteractio
nPurpose
NO_OPPID_ONE_OPEN_OPP_LATER_WON_
BY_ACT_OWNER
98 Oppid absent, but many open opps
present, choosing the most recent
one, becomes New Logo
Selling/Upselling
ActivitiesInteractio
nPurpose
NO_OPPID_LATEST_OPP
99 Oppid absent, but activity performed
after conversion date, won opps
present, becomes Upselling
ActivitiesInteractio
nPurpose
NO_OPPID_NO_OPEN_OPPS_BUT_WON_O
PPS
rule_list
_sys_docid description model rule_name
100 Oppid absent, but activity performed
after conversion date, won opps
absent, becomes recycled prospecting
ActivitiesInteractio
nPurpose
NO_OPPID_NO_OPEN_OPPS_BUT_LOST_O
PPS
101 Value present, no need to look up Lookup SELF
102 Value looked up from hatlead Lookup HATLEAD
103 Value looked up from account Lookup ACCOUNT
104 Value looked up from lead Lookup LEAD
105 Value looked up from opp Lookup OPP
106 Value looked up from contact Lookup CONTACT
107 ND value present, and no non-ND
value in other entities
Lookup SELF_ND
108 Value is absent but creator is the same
as owner, returning Rep Lead Gen
Lookup SAME_CREATOR_OWNER
109 No hr fi le found UsersHrInfo NO_HR_FILE
110 Exact match found for user's
crm_email
UsersHrInfo MATCHED_EMAIL
111 Exact match found for user's
crm_fname + crm_lname
UsersHrInfo MATCHED_FULLNAME
112 Fuzzy match found for user's name UsersHrInfo FUZZY_MATCH
113 User ID overriden by user UsersHrInfo USER_OVERRIDE
114 Neither email nor full name matched UsersHrInfo NO_MATCH
115 Exactly one value matched exactly UsersGroup UNIQUE_EXACT_MATCH
116 Exactly one value returned from a
fuzzy match
UsersGroup UNIQUE_FUZZY_MATCH
rule_list
_sys_docid description model rule_name
117 More than one value returned from a
fuzzy match, unable to determine
which one is correct
UsersGroup MORE_THAN_ONE_FUZZY_MATCH
118 Group overriden by user UsersGroup USER_OVERRIDE
119 No exact match nor fuzzy match found UsersGroup NO_MATCH
120 Value based on user's manager's value UsersGroup MANAGERS_GROUP
121 Value based on crm value UsersGroup CRM_VALUE
122 Opp line items present, summing over
their total_price
OppsBookingAmt SUM_OF_OPP_LINE_ITEMS_TOTAL_PRICE
123 Currency conversion required and
possible, value converted
OppsBookingAmt CURRENCY_CONVERSION_APPLIED
124 Currency conversion not required or
not possible, value not converted
OppsBookingAmt NO_CURRENCY_CONVERSION_APPLIED
125 Currency conversion required and
possible, value converted
OppLineItemsTota
lPrice
CURRENCY_CONVERSION_APPLIED
126 Currency conversion not required or
not possible, value not converted
OppLineItemsTota
lPrice
NO_CURRENCY_CONVERSION_APPLIED
127 Currency conversion required and
possible, value converted
OppsHistory CURRENCY_CONVERSION_APPLIED
128 Currency conversion not required or
not possible, value not converted
OppsHistory NO_CURRENCY_CONVERSION_APPLIED
129 Enough data to use the actual median
for imputing
SsrAcvPotentialFac
tor
MEDIAN_COMPANY_SIZE_BASED_ON_MEDI
AN
130 Not enough data to use the actual
median for imputing, using default 350
SsrAcvPotentialFac
tor
MEDIAN_COMPANY_SIZE_BASED_ON_DEFA
ULT_350
131 No account presetnt, only lead SsrType NO_ACCOUNT_EXISTS
132 Account present, sales steps present SsrType SALES_STEPS_PRESENT
