const initialData = {
  tasks: {
    'task-1': { id: 'task-1', title: 'Brainstorming', content: "Brainstorming brings team members' diverse experience into play.", priority: 'Low', dueDate: '2025-09-22' },
    'task-2': { id: 'task-2', title: 'Research', content: "User research helps you to create an optimal product for users.", priority: 'High', files: 3, dueDate: '2025-09-21' },
    'task-3': { id: 'task-3', title: 'Wireframes', content: "Low fidelity wireframes include the most basic content and visuals.", priority: 'High', dueDate: '2025-09-21' },
    'task-4': { id: 'task-4', title: 'Moodboard', content: 'Create a moodboard to define the visual direction.', priority: 'Low', dueDate: '2025-09-23' },
    'task-5': { id: 'task-5', title: 'Prototyping', content: 'Develop interactive prototypes for user testing.', priority: 'High', dueDate: '2025-09-22' },
    'task-6': { id: 'task-6', title: 'User Flow', content: 'Finalize the primary user flows and navigation maps.', priority: 'Low', dueDate: '2025-09-21' },
    'task-7': { id: 'task-7', title: 'Design System', content: "It just needs to adapt the UI from what you did before.", priority: 'Completed', files: 15, dueDate: '2025-09-20' },
    'task-8': { id: 'task-8', title: 'API Integration', content: 'Connect the frontend with the backend services.', priority: 'High', dueDate: '2025-09-24' },
    'task-9': { id: 'task-9', title: 'Mobile UI Design', content: 'Adapt the approved wireframes to high-fidelity UI designs.', priority: 'Low', dueDate: '2025-09-23' },
    'task-10': { id: 'task-10', title: 'QA Testing', content: 'Perform end-to-end testing of all features.', priority: 'High', dueDate: '2025-09-20' },
    'task-11': { id: 'task-11', title: 'Code Review', content: 'Review and merge the final pull requests for the sprint.', priority: 'Completed', dueDate: '2025-09-19' },
    'task-12': { id: 'task-12', title: 'Deployment', content: 'Deploy the latest build to the staging environment.', priority: 'Completed', dueDate: '2025-09-19' },
  },
  columns: {
    'todo': { id: 'todo', title: 'To Do', taskIds: ['task-1', 'task-2', 'task-3', 'task-4'] },
    'inProgress': { id: 'inProgress', title: 'On Progress', taskIds: ['task-5', 'task-6', 'task-8', 'task-9'] },
    'done': { id: 'done', title: 'Done', taskIds: ['task-7', 'task-10', 'task-11', 'task-12'] },
  },
  columnOrder: ['todo', 'inProgress', 'done'],
};

export default initialData;