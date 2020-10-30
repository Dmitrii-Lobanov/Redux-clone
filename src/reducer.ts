import { IReducer, IReduxAction, IReduxInitialState } from './types';

const CREATE_NOTE = 'CREATE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';

export const initialState: IReduxInitialState = {
  nextNodeId: 1,
  notes: []
};


const reducer = (state = initialState, action: IReduxAction): IReduxInitialState => {
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
    default:
      return state;
  }
}

const state0 = reducer(undefined, {type: UPDATE_NOTE, id: 1, content: 'Hello'});
const state1 = reducer(state0, {
  type: UPDATE_NOTE,
  id: 1,
  content: "Changed"
})
console.log('state0', state0);
console.log('state1', state1);