import { createSlice } from '@reduxjs/toolkit';
import initialData from '../data/initialData';

const generateTaskId = () => `task-${Date.now()}`;

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    ...initialData,
    filterTerm: '',
    priorityFilter: 'All',
    dateFilter: 'All', // 'All' or 'Today'
  },
  reducers: {
    setDateFilter: (state, action) => {
        state.dateFilter = action.payload;
    },
    setFilterTerm: (state, action) => {
      state.filterTerm = action.payload;
    },
    setPriorityFilter: (state, action) => {
      state.priorityFilter = action.payload;
    },
    // ... (addTask, deleteTask, moveTask reducers remain the same)
  },
});

// NOTE: You need to add `setDateFilter` to your exports here
export const { addTask, deleteTask, moveTask, setFilterTerm, setPriorityFilter, setDateFilter } = tasksSlice.actions;
export default tasksSlice.reducer;