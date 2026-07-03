# Lockpay API

## How to use

- Clone the repo using the `git clone https://github.com/perez-21/lockpay-api`
- In your terminal, enter the repo directory
- Execute the `npm install` command in your terminal
- Create a file named '.env'
- Copy the contents of 'example.env' to '.env' and edit as needed
- Execute `npm run start:dev` in your terminal

## Environment variables

Create a file named '.env' in the project root and copy the contents below into it, then adjust values as needed:

```env
# Example environment variables for lockpay backend
# Copy this file to .env and customize values for your environment

# Server port used by the application
PORT=3000

# Logging level for the application (error, warn, info, http, verbose, debug, silly)
LOG_LEVEL=info

# Enables the following debug behavior when set to true
# - All errors are handled by the express global error handler. That means information like stack traces are printed to the terminal and sent back to the client.

DEBUG_MODE=false

# Node environment for the app (development, test, production)
NODE_ENV=development
```

## Endpoints

### GET /api/health

**Request**

```curl
curl http://localhost:3000/api/health
```

**Response**

```json
{ "ok": true }
```
