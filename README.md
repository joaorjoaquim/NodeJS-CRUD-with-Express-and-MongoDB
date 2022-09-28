<p align="center">
  <a href="" rel="noopener">
 <img width=400px height=200px src="crud_logo.png" alt="Project logo"></a>
</p>

<h3 align="center">A CRUD with Express and MongoDB</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Structures](#structures)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This project it's about developing skills in MongoDB and NodeJS, creating a CRUD in the backend using ExpressJS as a framework.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites & Installing

What packages do you need to install the software.

```
-NodeJS    
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "fs": "^0.0.1-security",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.6.1",
    "path": "^0.12.7"
```

### Runing & Usage

A step by step series of examples that tell you how to get a development env running.

Running the project with the command line

```
node src/index.js
```

There are 5 different requests to test the CRUD and two others, to Register a user and to authenticate that user.
For all requests, you will need to save the token (generated when a user is created) as Bearer Token authorization type (wich you get in the response of the Authenticate request).

#### POST Register
This is a request to register a user. Expect a JSON in the format below with the URL http://localhost:3000/auth/register 
```
{
  "name": "User name",
  "email": "User email",
  "password": "User password"
}
```
#### POST Authenticate
This is a request to Authenticate a user. Expect a JSON in the format below with the URL http://localhost:3000/auth/authenticate
```
{
  "email": "User email",
  "password": "User password"
}
```

#### GET List
This is a request that returns all registered projects. Don't need to pass params through a JSON, just run the request with the URL: http://localhost:3000/projects

#### GET Show
This is a request that returns an specific project. Don't need to pass params through a JSON, just run the request with the URL: http://localhost:3000/projects/+projectId

Example
```
http://localhost:3000/projects/633216f1c7c06fdbfe9dd64c
```
#### POST Create
This is a request to create a project. Expect a JSON in the format below with the URL http://localhost:3000/projects
```
{
  "title": "Project title",
  "description": "description of the project",
  "tasks": [
    {
    "title": "task title",
    "assignedTo": "userId"
    },...
  ]
}
```
#### PUT Update

```
until finished
```
#### DEL Delete

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo.


## 📁 Structures <a name="structures"></a>

### This is how the Project is structured.

```
app/
├─ node_modules/
├─ src/
│  └─ app/
│     └─ controllers/
│     └─ middlewares/
│     └─ models/
│  └─ config/
│     └─ auth.json
│  └─ database/
│     └─ index.js
│  └─ modules/
│     └─ XXXX.js
├─ .gitignore
├─ index.js
├─ package.json
├─ README.md
└─ yarn.lock
```

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://rnfirebase.io/) - MongoDB
- [NodeJS](https://reactnative.dev/) - NodeJS
- [NodeJS](https://reactnative.dev/) - ExpressJS


## ✍️ Authors <a name = "authors"></a>

- [@joaorjoaquim](https://github.com/joaorjoaquim) - Idea & Initial work
