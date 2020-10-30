export interface IReduxInitialState {
  nextNodeId: number,
  notes: INote[]
}

export interface INote {
  id: number,
  content: string
}

export interface IReduxAction {
  [index: string]: string | number;
  type: string
}

export interface IReducer extends IReduxAction {
  id: number;
  content: string;
}