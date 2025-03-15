# Notes app
## Tech Stack
- TypeScript
- Express
- Zod (Validation)
- MongoDB
## Entities/Schemas
### User
- id (string / other identifier)
- username (string, required, unique)
- email (string, required, unique) Primary Key
- password (hashed string, required)
- createdAt (timestamp)
- updatedAt (timestamp)
### Note
- id (string / other identifier)
- title (string, required)
- content (string, required)
- userId (string, required) Foreign Key
- tag (Object, default is None)
- createdAt (timestamp)
- updatedAt (timestamp)
### Tag
- id (string / other identifier)
- name (string, required)
- userId (string, required) Foreign Key
## Use cases / CRUD operations
### Create
- Register a new user
- Create a new note
- Create a new tag
### Read
- Get a single note
- Get all notes made by a user
- Get all notes made by a user with a specific tag
- Get all tags made by a user
### Update
- Edit username
- Edit a note
- Add/remove a tag from a note
- Soft delete a note (or archive)
- Soft delete multiple notes (or archive)
### Delete
- Delete a note
- Delete a tag (possibly cascades)
- Delete multiple notes
- Delete a user account