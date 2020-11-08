# Simple Chat Service

## 0. Environment
For the service to work, you must have an installed Node.js
Choose your platform here: https://nodejs.org/en/download/package-manager/


## 1. Clone the git project locally
```bash
git clone git@github.com:petrovi4/simpleChatService.git simpleChatService && cd simpleChatService
```

## 2. Setup dependencies
```bash
npm i
```

## 3. Start project
```bash
npm start
```


## Configuration
The SQLite database is used (however, you can easily switch to PostgreSQL or MySQL). All settings are set in config.js

The main database file is *database.sqlite*. The *empty.sqlite* file contains a template file with an empty database.

Default port - 8080. Can be changed in the config



## How to use

#### Create a message
```bash
curl --location --request POST 'localhost:8080/messages' \
--header 'Content-Type: application/json' \
--data-raw '{
    "sender": "anson",
    "conversation_id": "1234",
    "message": "I'\''m a teapot"
}'
```

#### Get conversation
```bash
curl --location --request GET 'localhost:8080/conversations/1234'
```