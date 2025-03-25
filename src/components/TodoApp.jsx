import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { addTodo, deleteTodo, updateTodoPriority} from '../store/slices/todoSlice';
import { fetchWeather } from '../store/slices/weatherSlice';
import { useNavigate } from 'react-router-dom';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos.todos);
  const weather = useSelector((store) => store.weather.data);
  console.log(weather)
  const user = useSelector((store) => store.auth.user);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        text: task,
        priority,
        completed: false,
      }));
      setTask('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto max-w-xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-primary">
            Welcome, {user.username}!
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {weather && (
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold">Current Weather</h2>
            <p>
              {weather.name}: {weather.main.temp}°C, {weather.weather[0].description}
            </p>
          </div>
        )}

        <form onSubmit={handleAddTodo} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a new task"
              className="flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add Task
          </button>
        </form>

        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center justify-between p-4 rounded-lg shadow-md 
                ${todo.priority === 'high' ? 'bg-red-100' : 
                  todo.priority === 'medium' ? 'bg-yellow-100' : 'bg-green-100'}`}
            >
              <span className="flex-grow">{todo.text}</span>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md ml-4 hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;