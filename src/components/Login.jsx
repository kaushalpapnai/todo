import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { FiLock, FiUser, FiArrowRight } from 'react-icons/fi';

// Zod validation schema
const loginSchema = z.object({
  username: z.string()
    .min(3, 'Username is required')
    .max(15, 'Username must be less than 20 characters'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .max(30, 'Password must be less than 30 characters')
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data) => {
    dispatch(login({ username: data.username }));
    navigate('/todo');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 space-y-6">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2">
            <FiLock className="w-6 h-6 text-sky-500" />
            <h1 className="text-2xl font-bold text-slate-800">Welcome Back</h1>
          </div>
          <p className="text-slate-500">Sign in to continue to your account</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1">
              Username
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="username"
                type="text"
                {...register('username')}
                className={`w-full pl-10 pr-4 py-2 sm:py-3 rounded-lg border ${
                  errors.username 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-slate-200 focus:border-sky-500'
                } focus:ring-2 focus:ring-sky-200 transition-colors`}
                placeholder="Enter your username"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="password"
                type="password"
                {...register('password')}
                className={`w-full pl-10 pr-4 py-2 sm:py-3 rounded-lg border ${
                  errors.password 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-slate-200 focus:border-sky-500'
                } focus:ring-2 focus:ring-sky-200 transition-colors`}
                placeholder="••••••••"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white py-2 sm:py-3 px-4 rounded-lg transition-colors cursor-pointer"
        >
          Continue
          <FiArrowRight className="w-5 h-5" />
        </button>

        {/* Footer Links */}
        <div className="text-center text-sm text-slate-500">
          Don't have an account?{' '}
          <a 
            href="#" 
            className="text-sky-500 hover:text-sky-600 font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              // navigate('/register');
            }}
          >
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;