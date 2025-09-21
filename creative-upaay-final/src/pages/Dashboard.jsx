import React from 'react';
import Header from '../components/Header';
import KanbanBoard from '../components/KanbanBoard';

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 w-full border-l border-gray-200">
      <Header />
      <KanbanBoard />
    </div>
  );
};

export default Dashboard;