import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { TasksProvider } from './TasksContext.js';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

