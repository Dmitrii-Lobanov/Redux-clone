import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { IReduxInitialState } from './types';
import { initialState, CREATE_NOTE, UPDATE_NOTE } from './store/reducer';
import { store } from './store';

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

store.subscribe((): void => {
  ReactDOM.render(
    <pre>{JSON.stringify(store.getState(), null, 2)}</pre>,
    document.getElementById('root')
  );
});

store.dispatch({
  type: CREATE_NOTE
});

store.dispatch({
  type: UPDATE_NOTE,
  id: 1,
  content: 'Hello, world!'
});

store.dispatch({
  type: UPDATE_NOTE,
  id: 2,
  content: 'Life is wonderful!'
});

store.dispatch({
  type: UPDATE_NOTE,
  id: 3,
  content: 'TGIF!'
});

store.dispatch({
  type: CREATE_NOTE
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
