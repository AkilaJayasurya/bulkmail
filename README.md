# 📬 BulkMail - MERN Stack Application

**BulkMail** is a robust full-stack email broadcasting tool developed with the **MERN stack**. It allows users to upload an Excel file containing email addresses and send a custom message to all valid recipients in one click.

---

## ✨ Key Features

- 📂 Supports uploading of Excel files (.xlsx / .xls)
- 📬 Automatically detects and extracts valid email addresses
- 📨 Compose and deliver personalized bulk emails
- ✅ Built-in email validation before sending
- 👥 View recipient count prior to sending
- 🔒 Securely stores email credentials using MongoDB

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB Atlas  
- **Email Service**: Nodemailer (Gmail)  
- **Excel Parsing**: SheetJS (`xlsx`)  

---

## 📁 Project Structure

BulkMail (MERN APP)  
├── Backend/ – Express server & email logic  
│   ├── index.js – Main backend file (sendEmail API)  
│   └── .env – Stores MongoDB URI & secrets  
├── Frontend/ – React frontend  
│   ├── public/  
│   └── src/  
│       ├── App.jsx – UI and logic for file upload and email  
│       ├── index.css  
│       ├── main.jsx  
│       └── assets/  
├── vite.config.js  
├── index.html  
└── README.md – Project overview and instructions

## 🌐 Live Demo

🚀 Deployed Application: [BulkMail Live](https://bulkmail-fe-m6ji.onrender.com)

Click the link above to try out the BulkMail app in action!




