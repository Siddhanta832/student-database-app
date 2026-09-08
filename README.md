# Student Database 

A simple web-based Student Database Application built using **Node.js, Express.js, HTML, CSS, and PostgreSQL**.

The application allows users to enter student details through a web form and stores the submitted information in a PostgreSQL database running locally.

## Features

- Add student details through a web form
- Store student information in PostgreSQL
- Node.js and Express.js backend
- HTML and CSS frontend
- Automatic creation of the `students` table
- Secure database credentials using environment variables

## Technologies Used

- **Frontend:** HTML5, CSS3
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Database Driver:** `pg`
- **Environment Variables:** `dotenv`
- **Development Tool:** Visual Studio Code
- **Version Control:** Git & GitHub

```text
student-database-app/
│
├── database/
│   ├── UPDATE students.pgsql
│   └── Untitled-1.pgsql
│
├── public/
│   ├── index.html
│   └── style.css
│
├── .gitignore
├── LICENSE
├── README.md
├── package.json
├── package-lock.json
└── server.js
```

## 🔄 Application Workflow

```text
User
  │
  ▼
Student Registration Form
  │
  ▼
POST /add-student
  │
  ▼
Node.js + Express.js
  │
  ▼
PostgreSQL
  │
  ▼
Students Table
  │
  ▼
Student Data Stored
```

## Step:-1

<img width="1908" height="1017" alt="Image" src="https://github.com/user-attachments/assets/0c0db60e-e3a2-4c8c-8da2-3ca4b215d79d" />

<img width="1918" height="1013" alt="Image" src="https://github.com/user-attachments/assets/0378ef52-534a-4931-825b-b2b767a5876d" />

<img width="1918" height="1012" alt="Image" src="https://github.com/user-attachments/assets/e2fe44c4-b93c-47d7-9d6e-6526a2030dc9" />
