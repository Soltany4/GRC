📌 MERN Full-Stack Application

Full-stack MERN application for managing projects, tasks, and team collaboration.
The project is structured as a monorepo containing both frontend and backend.

📂 Project Structure
project-name/
│
├── frontend/        # React frontend
├── backend/         # Node.js & Express backend
├── .gitignore
└── README.md

🚀 Features

User authentication (JWT)

Project and task management

Team collaboration

CRUD operations

RESTful API

Responsive UI

🛠 Tech Stack
Frontend

React.js

JavaScript

CSS

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/Soltany4/GRC.git
cd GRC

2️⃣ Backend Setup
cd backend
npm install
npm run dev


Create a .env file in backend/:

PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

3️⃣ Frontend Setup
cd frontend
npm install
npm start


Frontend runs on:

http://localhost:3000


Backend runs on:

http://localhost:8080

🌐 Deployment

Frontend: Vercel

Backend: Render / Railway / Fly.io

Database: MongoDB Atlas

📌 Author

Iheb Soltani
GitHub: https://github.com/Soltany4

📄 License

This project is licensed under the MIT License.