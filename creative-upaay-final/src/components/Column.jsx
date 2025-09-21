import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import { BsPlusLg } from 'react-icons/bs';

const Column = ({ column, tasks, onOpenModal }) => {
  if (!column) return null;

  const getBorderColor = (id) => {
    switch (id) {
      case 'todo': return 'border-brand-purple';
      case 'inProgress': return 'border-yellow-500';
      case 'done': return 'border-green-500';
      default: return 'border-gray-300';
    }
  };

  const getHeaderColor = (id) => {
    switch (id) {
      case 'todo': return 'bg-brand-purple';
      case 'inProgress': return 'bg-yellow-500';
      case 'done': return 'bg-green-500';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div className="bg-[#F5F5F5] rounded-2xl w-full">
      <div className="flex justify-between items-center px-5 py-4">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${getHeaderColor(column.id)}`}></div>
          <h2 className="font-medium text-neutral-gray-h">{column.title}</h2>
          <span className="bg-gray-200 text-neutral-gray-s text-xs font-medium w-5 h-5 flex items-center justify-center rounded-full">
            {tasks.length}
          </span>
        </div>
        <button 
          onClick={() => onOpenModal(column.id)}
          className="p-2 text-brand-purple bg-brand-purple-light rounded-md"
        >
          <BsPlusLg size={12} />
        </button>
      </div>
      <div className={`border-t-4 ${getBorderColor(column.id)} rounded`}></div>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`p-5 min-h-[500px] transition-colors duration-200 space-y-4 ${snapshot.isDraggingOver ? 'bg-brand-purple-light' : 'bg-transparent'}`}
          >
            {tasks.map((task, index) => (
              task ? <TaskCard key={task.id} task={task} index={index} columnId={column.id} /> : null
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;