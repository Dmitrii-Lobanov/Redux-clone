import { ICreateStore, IReduxAction, IReduxInitialState } from '../types';
import { ReducerFunc, reducer } from './reducer';

const validateAction = (action: IReduxAction): void => {
  if(!action || typeof action !== 'object' || Array.isArray(action)) {
    throw new Error('Action must be an object');
  }

  if(typeof action.type === 'undefined') {
    throw new Error('Action must have a type');
  }
}

const createStore = (reducer: ReducerFunc): ICreateStore => {
  let state: IReduxInitialState;
  const subscribers: Function[] = [];

  return {
    dispatch: (action: IReduxAction): void => {
      validateAction(action);
      state = reducer(state, action);
      subscribers.forEach((handler: Function): void => handler())
    },
    getState: (): IReduxInitialState => state,
    subscribe: (handler: Function) => {
      subscribers.push(handler);
      return (): void => {
        const index  = subscribers.indexOf(handler);
        if(index > 0) {
          subscribers.splice(index, 1);
        }
      }
    }
  }
}

export const store: ICreateStore = createStore(reducer);