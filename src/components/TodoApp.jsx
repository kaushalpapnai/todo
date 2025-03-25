import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { addTodo, deleteTodo } from '../store/slices/todoSlice';
import { fetchWeather } from '../store/slices/weatherSlice';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiPlus, FiTrash2, FiSun, FiCloud, FiCloudRain } from 'react-icons/fi';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos.todos);
  const weather = useSelector((store) => store.weather.data);
  const user = useSelector((store) => store.auth.user);
  const navigate = useNavigate();

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

  const getWeatherIcon = () => {
    if (!weather) return null;
    const mainWeather = weather.weather[0].main.toLowerCase();
    if (mainWeather.includes('rain')) return <FiCloudRain className="w-5 h-5 sm:w-6 sm:h-6" />;
    if (mainWeather.includes('cloud')) return <FiCloud className="w-5 h-5 sm:w-6 sm:h-6" />;
    return <FiSun className="w-5 h-5 sm:w-6 sm:h-6" />;
  };

  return (
    <div className="min-h-screen bg-slate-50 p-3 sm:p-4 md:p-6 font-sans">
      <div className="container mx-auto max-w-2xl">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-6 sm:mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-slate-800">Good day, {user.username}</h1>
            <p className="text-slate-500 text-xs sm:text-sm">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 sm:gap-2 text-slate-600 hover:text-slate-800 transition-colors"
            aria-label="Logout"
          >
            <FiLogOut className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-medium hidden sm:inline">Sign out</span>
          </button>
        </header>

        {/* Weather Card */}
        {weather && (
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm mb-4 sm:mb-6 border border-slate-100">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="text-sky-500">
                {getWeatherIcon()}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-slate-500">Current weather</h3>
                <p className="text-slate-800 text-sm sm:text-base font-medium">
                  {Math.round(weather.main.temp)}°C • {weather.weather[0].description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Add Task Form */}
        <form 
          onSubmit={handleAddTodo} 
          className="bg-white rounded-lg sm:rounded-xl shadow-sm mb-4 sm:mb-6 border border-slate-100"
        >
          <div className="flex gap-1 sm:gap-2 p-1 sm:p-2">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-grow px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-0 text-sm sm:text-base text-slate-800 bg-slate-50 focus:ring-2 focus:ring-sky-500 focus:bg-white placeholder:text-slate-400"
              aria-label="Add new task"
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base rounded-lg bg-slate-50 border-0 text-slate-600 focus:ring-2 focus:ring-sky-500"
              aria-label="Select task priority"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button
              type="submit"
              className="p-2 sm:p-3 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-colors"
              aria-label="Add task"
            >
              <FiPlus className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </form>

        {/* Todo List */}
        <div className="space-y-1 sm:space-y-2">
          {todos.length === 0 && (
            <div className="text-center py-6 sm:py-8 text-sm sm:text-base text-slate-400">
              No tasks yet. Add your first task above.
            </div>
          )}
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="group flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm border border-slate-100 hover:border-sky-100 transition-all"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div 
                  className={`w-2 h-6 sm:h-8 rounded-full ${
                    todo.priority === 'high' ? 'bg-red-500' :
                    todo.priority === 'medium' ? 'bg-amber-500' : 'bg-emerald-500'
                  }`}
                  aria-hidden="true"
                />
                <span className="text-sm sm:text-base text-slate-800">{todo.text}</span>
              </div>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="p-1 sm:p-2 text-slate-400 hover:text-red-500 rounded-md hover:bg-red-50 transition-colors"
                aria-label={`Delete task: ${todo.text}`}
              >
                <FiTrash2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;