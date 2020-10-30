export interface IReduxInitialState {
  nextNodeId: number;
  notes: INote[];
  openNoteId: number | null;
}

export interface INote {
  id: number;
  content: string;
}

export interface IReduxAction {
  [index: string]: string | number;
  type: string;
}

export interface IReducer extends IReduxAction {
  id: number;
  content: string;
}

export interface ICreateStore {
  dispatch: (action: IReduxAction) => void;
  getState: IGetState;
  subscribe: (handler: Function) => void;
}

export interface IGetState {
  (): IReduxInitialState;
}
