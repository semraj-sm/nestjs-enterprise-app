---
applyTo: '**'
---
**Description:** Set up the base Node.js project with Express.
- [ ] Initialize Node.js project
- [ ] Install Express.js
- [ ] Create folder structure: 
```
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── security.js
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   └── utils/
│       └── logger.js
├── app.js
├── server.js
├── .env
└── package.json
```
- [ ] Add ESLint and Prettier
- [ ] Add `.gitignore` for Node.js: