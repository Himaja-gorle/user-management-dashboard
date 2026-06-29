📌 User Management Dashboard

A modern, responsive User Management Dashboard built with React.js that performs full CRUD operations with search, sorting, pagination, and modal-based form handling. This project demonstrates real-world frontend development practices using reusable components and clean architecture.

📸 Preview

Add screenshots here after deployment

Home Page → User List
Add/Edit Modal → Form UI
Pagination → Page Navigation
✨ Features
👤 User Management (CRUD)
View users from API
Add new user
Edit existing user
Delete user with confirmation
🔍 Search & Sorting
Global search across:
Name
Email
Company
City
Sort users by:
ID (default)
Name
Email
📄 Pagination System
Page size options:
10 / 25 / 50 / 100
Next / Previous navigation
Dynamic page updates based on filters
🎨 UI & UX
Fully responsive design (mobile + desktop)
Card-based layout using Flexbox
Clean modal-based form (react-modal)
Loading spinner UI
Error handling UI
Toast notifications (react-toastify)
🛠️ Tech Stack
⚛️ React.js (Functional Components)
🎣 React Hooks (useState, useEffect, useMemo)
🎨 HTML5 + CSS3
🌐 Fetch API
🔔 React Toastify
🪟 React Modal
📁 Project Structure
src/
│
├── components/
│   ├── Header/
│   ├── Toolbar/
│   ├── UserTable/
│   ├── UserForm/
│   └── Pagination/
│
├── services/
│   └── api.js
│
├── utils/
│   └── helpers.js
│
├── styles/
│   └── global.css
│
├── App.js
├── index.js
└── reportWebVitals.js
⚙️ Installation & Setup
1. Clone repository
git clone https://github.com/Himaja-gorle/user-management-dashboard.git
2. Navigate to project
cd user-management-dashboard
3. Install dependencies
npm install
4. Start development server
npm start
5. Build for production
npm run build
🌐 API Reference

This project uses the public API:

🔗 https://jsonplaceholder.typicode.com/users
📦 Key Dependencies
react
react-dom
react-modal
react-toastify
🧠 Key Learnings
React functional component architecture
State management using hooks
API integration using Fetch
Reusable component design
Pagination & filtering logic
Modal form handling
Responsive UI design
📱 Responsive Design

✔ Desktop
✔ Tablet
✔ Mobile

Built using Flexbox-based layout system.

🚀 Deployment
Hosted on Vercel
CI/CD via GitHub integration
👨‍💻 Author

Himaja Gorle
Frontend Developer (React.js)

📄 License

This project is for educational and portfolio purposes.
