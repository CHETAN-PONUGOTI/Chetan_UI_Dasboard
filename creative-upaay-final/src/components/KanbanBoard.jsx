import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import { moveTask } from '../redux/tasksSlice';

// Helper function to get today's date in YYYY-MM-DD format
const getTodayString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const KanbanBoard = ({ onOpenModal }) => {
  const { tasks, columns, columnOrder, filterTerm, priorityFilter, dateFilter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    if (!result.destination) return;
    dispatch(moveTask(result));
  };
  
  if (!columnOrder) return null; 

  const todayString = getTodayString();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {columnOrder.map((columnId) => {
          const column = columns[columnId];
          const allTasks = column.taskIds.map((taskId) => tasks[taskId]);
          
          const filteredTasks = allTasks.filter(task => {
            if (!task) return false;
            
            const matchesPriority = priorityFilter === 'All' || task.priority === priorityFilter;
            const matchesText = task.title.toLowerCase().includes(filterTerm.toLowerCase());
            const matchesDate = dateFilter === 'All' || task.dueDate === todayString;
            
            return matchesPriority && matchesText && matchesDate;
          });
          
          return (
            <Column 
              key={column.id} 
              column={column} 
              tasks={filteredTasks} 
              onOpenModal={onOpenModal} 
            />
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;