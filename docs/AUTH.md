# Auth & Permissions Matrix

*(Note: Currently, Aqua requires no login. If an Auth layer is added, the following matrix applies.)*

## Roles
- **Guest**: Can access all free calculators, view results, and utilize local storage saving.
- **Registered User**: Can save scenarios to the cloud, access historical data, and generate PDF reports.
- **Admin**: Can update global disclaimer texts, view aggregate analytics, and manage users.

## Access Control
- `/tools/*`: Public (Guest)
- `/dashboard`: Protected (Registered User)
- `/admin/*`: Protected (Admin)
