import { ICreateStore, IReduxAction, IReduxInitialState } from '../types';
import { initialState, ReducerFunc, reducer, CREATE_NOTE } from './reducer';

const validateAction = (action: any): void => {
  if(!action || typeof action !== 'object' || Array.isArray(action)) {
    throw new Error('Action must be an object');
  }

  if(typeof action.type === 'undefined') {
    throw new Error('Action must have a type');
  }
}

const createStore = (reducer: ReducerFunc): ICreateStore => {
  let state: IReduxInitialState;
  const subscribers: any[] = [];

  return {
    dispatch: (action: IReduxAction): void => {
      validateAction(action);
      state = reducer(state, action);
      subscribers.forEach((handler): void => handler())
    },
    getState: (): IReduxInitialState => state,
    subscribe: (handler: Function) => {
      subscribers.push(handler);
      return () => {
        const index  = subscribers.indexOf(handler);
        if(index > 0) {
          subscribers.splice(index, 1);
        }
      }
    }
  }
  store.dispatch({
    type: '@@redux/INIT'
  });
  return  store;
}

export const store = createStore(reducer);