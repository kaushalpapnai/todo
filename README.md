# React Todo App with Weather Integration

## Project Overview

This is a full-featured Todo application built with React, Redux, Tailwind CSS, and integrated with a weather API. The application provides a comprehensive task management experience with additional weather information, user authentication, and responsive design.

### 🌟 Key Features

#### Task Management
- Add, delete, and prioritize tasks
- Local storage persistence
- Priority-based task categorization
- Responsive design for mobile and desktop

#### Weather Integration
- Real-time weather information
- City search functionality
- Dynamic weather icons
- Temperature and description display

#### User Authentication
- Secure login system
- Protected routes
- Logout functionality

### 🖥️ Technologies Used

- **Frontend**: React
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **API Integration**: OpenWeatherMap API
- **Routing**: React Router
- **Icons**: React Icons

### 📸 Screenshots

[Include screenshots of the application]
- Login Screen
- Todo List with Weather
- Mobile Responsive View

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation Steps

1. Clone the repository
```bash
git clone https://github.com/yourusername/react-todo-weather-app.git
cd react-todo-weather-app
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
- Create a `.env` file in the root directory
- Add your OpenWeatherMap API key
```
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### 🔐 Login Credentials

For demonstration purposes, you can log in with:
- Username: Any non-empty string
- Password: Any non-empty string

### 🏗️ Project Structure

```
src/
│
├── components/
│   ├── Login.jsx
│   └── TodoApp.jsx
│
├── store/
│   ├── index.js
│   └── slices/
│       ├── authSlice.js
│       ├── todoSlice.js
│       └── weatherSlice.js
│
├── App.jsx
└── main.jsx
```

### 🌈 Customization

- Modify Tailwind configuration in `tailwind.config.js`
- Adjust Redux slices in `src/store/slices/`
- Customize components in `src/components/`

## 🧪 Testing

Run tests (if implemented):
```bash
npm test
```

## 🌐 Deployment

Recommended platforms:
- Netlify
- Vercel
- GitHub Pages

Deployment steps:
1. Build the project
```bash
npm run build
```
2. Deploy the `dist/` directory to your preferred hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

<img width="1440" alt="Screenshot 2025-03-25 at 9 36 25 PM" src="https://github.com/user-attachments/assets/7f0b8111-18f3-4e2d-a050-16bf9bf3075c" />


<img width="1439" alt="Screenshot 2025-03-25 at 9 37 12 PM" src="https://github.com/user-attachments/assets/b30575ec-2035-4b68-8e15-756cef1c8deb" />


Distributed under the MIT License. See `LICENSE` for more information.

## 🙌 Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

**Happy Coding! 🚀**
