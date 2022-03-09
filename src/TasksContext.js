import { createContext, useContext, useReducer } from 'react';

const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'add': {
      return {
        currentUser: tasks.currentUser,
        users: [...tasks.users, action.user]
      }
    }
    case 'edit': {
      let users = [...tasks.users]
      users = users.filter(user => user.id !== action.user.id);
      return {
        currentUser: action.user,
        users
      }
    }
    case 'delete': {
      let users = [...tasks.users]
      users = users.filter(user => user.id !== action.user.id);
      return {
        ...tasks,
        users
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks = {
  currentUser: { name: "", email: "", username: "", password: "" },
  users: []
}
