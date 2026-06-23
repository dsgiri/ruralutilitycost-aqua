# Data Models & Schema

*(Note: Aqua currently uses local storage for data persistence. If a backend is added, the following schemas will apply.)*

## Tables

### `users`
- `id`: UUID (Primary Key)
- `email`: String
- `created_at`: Timestamp

### `calculations` (Saved Scenarios)
- `id`: UUID (Primary Key)
- `user_id`: UUID (Foreign Key)
- `tool_type`: String (e.g., 'cost', 'feed', 'profit')
- `input_data`: JSONB
- `created_at`: Timestamp
- `updated_at`: Timestamp

### `favorites`
- `id`: UUID
- `user_id`: UUID
- `tool_id`: String
