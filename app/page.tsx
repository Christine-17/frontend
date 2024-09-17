"use client";
import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here (e.g., call API to authenticate the user)
        console.log('Login:', { username, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    {/* Username Field */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    {/* Forgot Password */}
                    <div className="text-sm text-right">
                        <a href="/forgot-password" className="text-blue-600 hover:text-blue-700">
                            Forgot password?
                        </a>
                    </div>
                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>
                {/* Signup Link */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-blue-600 hover:text-blue-700">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
