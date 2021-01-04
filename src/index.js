import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,Route, Switch} from 'react-router-dom'
import './index.css';
import App from './App';
import Board from './components/Board'
import { TaskContextProvider } from './context/TaskContext'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TaskContextProvider>

      
      <HashRouter>
      <Switch>
          <Route exact path="/" render={() => <App />} />
      <Route key="rnd" path="/r&d" render={() => <Board title="r&d"/>} />
      <Route key="sales" path="/sales" render={() => <Board title="sales" />} />
      </Switch>
      </HashRouter>
     


    </TaskContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
