import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import { TasksProvider } from './TasksContext.js';
import './index.css';
import { Provider } from 'react-redux';
import store from './utils/redux/store';


ReactDOM.render(
  <React.StrictMode>
    {/* <TasksProvider> */}
    <Provider store={store}>
      <App />
      {
        console.log('Powered by Redux')
      }
    </Provider>
    {/* </TasksProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);