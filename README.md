# Lockpay API

## How to use
- Clone the repo using the `git clone https://github.com/perez-21/lockpay-api`
- In your terminal, enter the repo directory
- Execute the `npm install` command in your terminal
- Create a file named '.env'
- Copy the contents of 'example.env' to '.env' and edit as needed
- Execute `npm run start:dev` in your terminal


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
