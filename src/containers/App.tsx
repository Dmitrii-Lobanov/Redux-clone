import React, { useState, useEffect } from 'react';
import './App.css';
import NoteApp from '../components/NoteApp';
import { CLOSE_NOTE, CREATE_NOTE, initialState, OPEN_NOTE, UPDATE_NOTE } from '../store/reducer';
import { ICreateStore, IReduxInitialState } from '../types';

interface IProps {
  store: ICreateStore;
}

const App: React.FC<IProps> = ({ store }): JSX.Element => {
  const [state, setState] = useState<IReduxInitialState>(initialState);

  useEffect(() => {
    store.subscribe((): void => {
      setState(store.getState());
    });
    return (): void => store.subscribe((): void => {
      setState(store.getState());
    });
  }, [store]);

  const onAddNote = (): void => {
    store.dispatch({
      type: CREATE_NOTE
    })
  }

  const onChangeNote = (id: number, content: string): void => {
    store.dispatch({
      type: UPDATE_NOTE,
      id,
      content
    })
  }

  const onOpenNote = (id: number): void => {
    store.dispatch({
      type: OPEN_NOTE,
      id
    })
  }

  const onCloseNote = (): void => {
    store.dispatch({
      type: CLOSE_NOTE
    })
  }

  return (
    <NoteApp
      {...state}
      onAddNote={onAddNote}
      onChangeNote={onChangeNote}
      onOpenNote={onOpenNote}
      onCloseNote={onCloseNote}
    />
  );
}

export default App;
