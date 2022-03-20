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
      console.log('====================================');
      console.log('Powered by Redux');
      console.log('====================================');
      <App />
    </Provider>
    {/* </TasksProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

