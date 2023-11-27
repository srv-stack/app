# App Instructions 

This file outlines the steps to install, configure and test the app backend.

## Prerequisites

- Node.js
- MySQL

## Installation Steps

1. Install MySQL
    - On Windows/Mac, download and install MySQL Community Edition
    - On Linux, use your package manager 
2. Create the database and user 
    ```sql
    mysql -uroot -p < bd.sql 
    ```
3. Install Node dependencies
    ```bash
    npm install
    ```  
4. Start the server  
    ```bash
    node server.js
    ```

## Testing 

### Register a new user

```bash  
curl -X POST http://localhost:3000/register \
-H "Content-Type: application/json" \
-d '{"email": "exemplu@email.com", "password": "parola123"}'
```
### Login with the new user created

```bash
curl -X POST http://localhost:3000/login \  
-H "Content-Type: application/json" \
-d '{"email": "exemplu@email.com", "password": "parola123"}'
```

