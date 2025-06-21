# 📧 BulkMail MERN App

**BulkMail** is a full-stack email broadcasting application built using the **MERN stack**. It allows users to upload an Excel file containing email addresses and send a custom message to all valid recipients in one click.

---

## ✨ Features

- 📂 Upload Excel files (`.xlsx` or `.xls`)
- 📬 Automatically extract valid email addresses
- ✉️ Compose and send bulk messages
- ✅ Email validation before sending
- 🔢 View the number of recipients before sending
- 🗄️ Connected to MongoDB for secure credential storage

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB Atlas  
- **Email Service**: Nodemailer (Gmail)  
- **Excel Parsing**: SheetJS (`xlsx`)  

---

## 📁 Project Structure

BulkMail (MERN APP)/
│
├── Backend/ # Express server & email logic
│ ├── index.js # Main backend file (sendEmail API)
│ └── .env # Stores MongoDB URI & secrets
│
├── Frontend/ # React frontend
│ ├── public/
│ └── src/
│ ├── App.jsx # UI and logic for file upload and email
│ ├── index.css
│ ├── main.jsx
│ └── assets/
│ ├── vite.config.js
│ └── index.html
│
└── README.md # Project overview and instructions

