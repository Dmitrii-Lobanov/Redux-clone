import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IReduxInitialState } from './types';
import { initialState } from './reducer';

declare global {
  interface Window {
    state: IReduxInitialState;
  }
}


window.state = initialState;

export const renderApp = (): void => {
  ReactDOM.render(
    <React.StrictMode>
      <App notes={window.state.notes} />
    </React.StrictMode>,
    document.getElementById('root')
)};

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
