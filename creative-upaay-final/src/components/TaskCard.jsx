import React from 'react';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { HiOutlineChatAlt2, HiOutlineX } from 'react-icons/hi';
import { GrAttachment } from 'react-icons/gr';
import { deleteTask } from '../redux/tasksSlice';

const TaskCard = ({ task, index, columnId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    // We need both taskId and columnId to properly delete the task
    dispatch(deleteTask({ taskId: task.id, columnId }));
  };

  const getPriorityClasses = (priority) => {
    switch (priority) {
      case 'High': return 'bg-card-red-bg text-status-red';
      case 'Low': return 'bg-card-orange-bg text-status-orange';
      case 'Completed': return 'bg-card-green-bg text-status-green';
      default: return 'bg-gray-100 text-gray-500';
    }
  };
  
  if (!task) return null;

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-white p-5 rounded-xl shadow-card border relative ${snapshot.isDragging ? 'border-brand-purple ring-2 ring-brand-purple' : 'border-transparent'}`}
        >
          {/* Delete Button */}
          <button 
            onClick={handleDelete}
            className="absolute top-2 right-2 p-1 text-neutral-gray-s hover:bg-gray-100 rounded-full"
            aria-label="Delete task"
          >
              <HiOutlineX />
          </button>

          <div className="flex justify-between items-start">
            <span className={`text-xs font-medium px-2 py-1 rounded-md ${getPriorityClasses(task.priority)}`}>
              {task.priority}
            </span>
          </div>
          <h3 className="font-semibold text-lg text-neutral-gray-h mt-2 pr-6">{task.title}</h3>
          {task.content && <p className="text-sm text-neutral-gray-s mt-1">{task.content}</p>}
          
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center -space-x-2">
              <img src="https://i.pravatar.cc/32?img=4" alt="User" className="w-6 h-6 rounded-full border-2 border-white"/>
              <img src="https://i.pravatar.cc/32?img=5" alt="User" className="w-6 h-6 rounded-full border-2 border-white"/>
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-gray-s">
              <span className="flex items-center gap-1"><HiOutlineChatAlt2 /> 12 comments</span>
              <span className="flex items-center gap-1"><GrAttachment /> {task.files || 0} files</span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;