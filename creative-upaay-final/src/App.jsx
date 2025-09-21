import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import './index.css';

function App() {
  return (
    <div className="flex bg-neutral-gray-bg min-h-screen font-sans">
      <Sidebar />
      <main className="flex-1">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;