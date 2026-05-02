
# TaskSphere

TaskSphere is a workplace productivity and task management web application for tracking employee activity in a structured way. Admins can manage employees and review activity, while employees can log their daily work, meetings, and breaks. The system stores everything in MongoDB and presents insights through charts and dashboards.

## Features

- User authentication for admin and employee roles
- Admin dashboard for employee management
- Employee task logging with task type, date, and duration
- Profile update and password change flows
- Daily and weekly productivity charts
- Role-based access control with JWT authentication

## Getting Started

### Pre-requisites

1. Install [Node.js](https://nodejs.org/en/download).
2. Install [MongoDB Community Server](https://www.mongodb.com/try/download/community).
3. Make sure the MongoDB service is running before starting the app.

### Clone the repository

1. Clone your repository locally after creating it on GitHub.

### Configure the environment

Starter env files are already included for local development:

- `client/.env`
- `server/.env`

By default, the app runs fully on your machine with:

- React client at `http://localhost:3000`
- Express API at `http://localhost:8800`
- MongoDB at `mongodb://127.0.0.1:27017/tasksphere`

If you want OTP emails to work, update these values in `server/.env`:

```
EMAIL_USERNAME=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

### Run the application

Start MongoDB locally and run the app in two terminals:

Terminal 1:

```bash
cd server
npm install
npm start
```

Terminal 2:

```bash
cd client
npm install
npm start
```

The local environment files already point to:

- API: `http://localhost:8800/api`
- MongoDB: `mongodb://127.0.0.1:27017/tasksphere`

### First-time setup

Create your admin account from the sign-up screen, then use that admin account to add employees from inside the app.

## Technologies Used

- Front-End: ReactJS, HTML, CSS, JavaScript
- Back-End: Node.js, Express.js
- Database: MongoDB

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Enjoy using TaskSphere and stay productive!
