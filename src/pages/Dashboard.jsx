import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import html2canvas from 'html2canvas';
import './Dashboard.css';

const data = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 500 },
  { name: 'Apr', users: 200 },
  { name: 'May', users: 700 },
  { name: 'Jun', users: 600 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const chartRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const downloadChart = async () => {
    const canvas = await html2canvas(chartRef.current);
    const link = document.createElement('a');
    link.download = 'chart.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  // Stats (mocked)
  const totalUsers = data.reduce((acc, d) => acc + d.users, 0);
  const growthRate = (((data[data.length - 1].users - data[0].users) / data[0].users) * 100).toFixed(1);
  const activePercent = ((data[data.length - 1].users / totalUsers) * 100).toFixed(1);

  return (
    <div className={`dashboard-wrapper ${darkMode ? 'dark' : ''}`}>
      <header className="dashboard-header">
        <h1 className="dashboard-title">📈 AffWorld - User Insights Dashboard</h1>
        <div className="dashboard-actions">
          <button className="btn btn-secondary" onClick={() => navigate('/products')}>Manage Products</button>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          <button className="btn btn-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      <section className="kpi-section">
        <div className="kpi-card">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>
        <div className="kpi-card">
          <h3>Monthly Growth</h3>
          <p>{growthRate}%</p>
        </div>
        <div className="kpi-card">
          <h3>Active Users</h3>
          <p>{activePercent}%</p>
        </div>
      </section>

      <main className="dashboard-card" ref={chartRef}>
        <div className="chart-header">
          <h2 className="chart-title">Monthly Active Users</h2>
          <button className="btn btn-download" onClick={downloadChart}>📥 Export Chart</button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#007BFF" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </main>
    </div>
  );
};

export default Dashboard;
