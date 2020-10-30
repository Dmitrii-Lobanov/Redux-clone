import { IReduxAction, IReduxInitialState } from '../types';

export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const OPEN_NOTE = 'OPEN_NOTE';
export const CLOSE_NOTE = 'CLOSE_NOTE';

export const initialState: IReduxInitialState = {
  nextNodeId: 1,
  notes: [],
  openNoteId: null,
};

export interface ReducerFunc {
  (state: IReduxInitialState, action: IReduxAction): IReduxInitialState
}

export const reducer = (state = initialState, action: IReduxAction): IReduxInitialState => {
  switch(action?.type) {
    case CREATE_NOTE: {
      const id = state.nextNodeId;
      const newNote = {
        id,
        content: ''
      };
      return {
        ...state,
        nextNodeId: id + 1,
        openNoteId: id,
        notes: {
          ...state.notes,
          [id]: newNote
        }
      };
    }
    case UPDATE_NOTE: {
      const { id, content } = action;
      const editedNote = {
        ...state.notes[id as number],
        content
      };
      return {
        ...state,
        notes: {
          ...state.notes,
          [id]: editedNote
        }
      }
    }
    case OPEN_NOTE: {
      return {
        ...state,
        openNoteId: Number(action?.id)
      }
    }
    case CLOSE_NOTE: {
      return {
        ...state,
        openNoteId: null
      }
    }
    default:
      return state;
  }
}