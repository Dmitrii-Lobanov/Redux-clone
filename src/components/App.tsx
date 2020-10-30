import React from 'react';
import './App.css';
import { renderApp } from "../index";

const onAddNote = (): void => {
  const id: number = window.state.nextNodeId;
  window.state.notes[id] = {
    id,
    content: ''
  };
  window.state.nextNodeId++;
  renderApp();
}

interface IProps {
  notes?: any;
}

const App: React.FC<IProps> = ({ notes }): JSX.Element => {
  return (
    <div>
      <ul className="note-list">
        {
          Object.keys(notes).map((id: string): JSX.Element => (
            <li className="note-list-item" key={id}>{id}</li>
          ))
        }
      </ul>
      <button className="editor-button" onClick={onAddNote}>New Note</button>
    </div>
  );
}

export default App;
